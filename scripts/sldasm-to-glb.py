#!/usr/bin/env python3
"""
Convierte el ensamble de SolidWorks de Croak (.SLDASM) en un GLB con cada pieza por separado,
usando solo el archivo del ensamble (sin los .SLDPRT).

SolidWorks guarda dentro del ensamble una copia de la malla de cada pieza (FaceTessellations) para
mostrarlo sin abrir las piezas. Este script la lee. El formato no está documentado: se dedujo del
archivo "ensamblaje completo.SLDASM" (SolidWorks 2021) y podría no funcionar con otras versiones.
Si consiguen los .SLDPRT, es mejor exportar desde SolidWorks/Onshape a GLB y usar `npm run model`.

Uso:
    python3 scripts/sldasm-to-glb.py "ensamblaje completo.SLDASM" /tmp/croak_ensamble.glb
    npm run model -- /tmp/croak_ensamble.glb
"""

import json
import math
import re
import struct
import sys
import xml.etree.ElementTree as ET
import zlib

# --- Configuración específica de Croak ------------------------------------------------------------

# Pieza que define el marco del modelo: tubo a lo largo de X, caja de sensores hacia arriba (+Y).
BASE_COMPONENT = "Tuberia con sensores"

# Colores en sRGB (como se eligen en pantalla); `npm run model` los convierte al espacio lineal de glTF.
MATERIALS = {
    "carcasa": {"color": [0.694, 0.098, 0.098, 1.0], "metallic": 0.0, "roughness": 0.55},
    "tubo": {"color": [0.62, 0.80, 0.92, 0.38], "metallic": 0.0, "roughness": 0.08, "blend": True},
    "electrodo_ph": {"color": [0.20, 0.21, 0.23, 1.0], "metallic": 0.0, "roughness": 0.35},
    "turbidez": {"color": [0.82, 0.84, 0.86, 1.0], "metallic": 0.0, "roughness": 0.45},
    "tds": {"color": [0.74, 0.76, 0.79, 1.0], "metallic": 0.85, "roughness": 0.32},
    "empaque": {"color": [0.06, 0.06, 0.06, 1.0], "metallic": 0.0, "roughness": 0.8},
    "rosca": {"color": [0.58, 0.61, 0.64, 1.0], "metallic": 0.0, "roughness": 0.5},
}

# Nombre en el ensamble → (nombre en la web, material, cuánto sube en la vista explotada, en metros).
# Todo sube por encima de la tapa de la caja (y = 0.09 m) y en orden: empaque < rosca < sensor.
COMPONENTS = {
    "Tuberia con sensores": ("Carcasa", "carcasa", 0.0),
    "pH- ELECTRODO": ("Electrodo de pH", "electrodo_ph", 0.16),
    "SENSOR DE TURBIDEZ - Turbidity": ("Sensor de turbidez", "turbidez", 0.11),
    "TDS_sensor": ("Sensor TDS", "tds", 0.14),
    "Sensor de turbides o ring": ("Empaque del sensor de turbidez", "empaque", 0.085),
    "o ring tds sensor": ("Empaque del sensor TDS", "empaque", 0.075),
    "o ring tds ph electrodo": ("Empaque del electrodo de pH", "empaque", 0.05),
    "rosca tds sensor": ("Rosca del sensor TDS", "rosca", 0.07),
    "rosca PH electrodo": ("Rosca del electrodo de pH", "rosca", 0.07),
}


def is_tube_face(points):
    """Caras del tubo (cilindro interior r=3.2 cm y exterior r=3.6 cm) en el marco de la carcasa."""
    radii = [math.hypot(y, z) for _, y, z in points]
    xs = [x for x, _, _ in points]
    return 0.0315 < min(radii) and max(radii) < 0.0365 and max(xs) - min(xs) > 0.1


EXPLODE_SECONDS = 1.0

# --- Lectura del contenedor de SolidWorks ----------------------------------------------------------

SECTION_MARKER = b"\x14\x00\x06\x00\x08\x00"


def read_sections(data):
    """Secciones del archivo: nombre (ofuscado con una rotación de bits) + datos comprimidos con deflate."""
    sections = {}
    for match in re.finditer(re.escape(SECTION_MARKER), data):
        off = match.start()
        if off + 26 > len(data):
            continue
        _, _, csize, usize, name_len = struct.unpack_from("<IIIII", data, off + 6)
        if not (0 < name_len < 256 and csize <= len(data)):
            continue
        raw_name = data[off + 26: off + 26 + name_len]
        name = max(
            (bytes(((b << k) | (b >> (8 - k))) & 0xFF for b in raw_name).decode("latin-1") for k in range(8)),
            key=lambda s: sum(32 <= ord(c) < 127 for c in s),
        )
        body = data[off + 26 + name_len: off + 26 + name_len + csize]
        try:
            content = zlib.decompress(body, -15)
        except zlib.error:
            continue
        if len(content) == usize and name not in sections:
            sections[name] = content
    return sections


def directory_ids(directory):
    """Instancia ("pH- ELECTRODO-1@ensamblaje completo") → id de 8 bytes de su bloque de mallas."""
    ids = {}
    pos = 0
    while True:
        j = directory.find(b"\xff\xfe\xff", pos)
        if j < 0:
            break
        n = directory[j + 3]
        name = directory[j + 4: j + 4 + 2 * n].decode("utf-16le")
        nxt = directory.find(b"\xff\xfe\xff", j + 4 + 2 * n)
        if "@" in name and nxt > 8:
            ids[name.split("@")[0]] = directory[nxt - 8: nxt]
        pos = j + 4 + 2 * n
    return ids


VEC3_HEADER = struct.pack("<III", 12, 100, 2)
INT_HEADER = struct.pack("<III", 4, 8, 2)


def read_faces(blob, lo, hi):
    """Cada cara: longitudes de tiras de triángulos + vértices (float32 xyz) + normales."""
    faces = []
    for match in re.finditer(re.escape(VEC3_HEADER), blob[lo:hi]):
        r = lo + match.start()
        count = struct.unpack_from("<I", blob, r + 12)[0]
        strips = None
        for k in range(1, 4096):
            h = r - 16 - 4 * k
            if h < lo:
                break
            if blob[h:h + 12] == INT_HEADER and struct.unpack_from("<I", blob, h + 12)[0] == k:
                candidate = struct.unpack_from(f"<{k}I", blob, h + 16)
                if sum(candidate) == count:
                    strips = candidate
                break
        normals_at = r + 16 + 12 * count
        if not strips or blob[normals_at:normals_at + 12] != VEC3_HEADER:
            continue
        if struct.unpack_from("<I", blob, normals_at + 12)[0] != count:
            continue
        pos = struct.unpack_from(f"<{3 * count}f", blob, r + 16)
        nor = struct.unpack_from(f"<{3 * count}f", blob, normals_at + 16)
        faces.append((strips, [pos[i:i + 3] for i in range(0, len(pos), 3)], [nor[i:i + 3] for i in range(0, len(nor), 3)]))
    return faces


def triangulate(strips, points, normals):
    """Tiras → triángulos, orientados según las normales guardadas."""
    tris = []
    start = 0
    for length in strips:
        for i in range(length - 2):
            a, b, c = start + i, start + i + 1, start + i + 2
            pa, pb, pc = points[a], points[b], points[c]
            u = [pb[k] - pa[k] for k in range(3)]
            v = [pc[k] - pa[k] for k in range(3)]
            cross = [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]]
            if all(abs(x) < 1e-14 for x in cross):
                continue  # triángulo degenerado
            n = [normals[a][k] + normals[b][k] + normals[c][k] for k in range(3)]
            tris.append((a, c, b) if sum(cross[k] * n[k] for k in range(3)) < 0 else (a, b, c))
        start += length
    return tris


# --- Álgebra mínima --------------------------------------------------------------------------------

def sw_matrix(m):
    """swTransform → matriz 4x4 (filas). SolidWorks guarda la rotación por columnas y la traslación en m12..m14."""
    return [[m[0], m[4], m[8], m[12]], [m[1], m[5], m[9], m[13]], [m[2], m[6], m[10], m[14]], [0, 0, 0, 1]]


def rigid_inverse(M):
    R = [[M[j][i] for j in range(3)] for i in range(3)]
    t = [-sum(R[i][k] * M[k][3] for k in range(3)) for i in range(3)]
    return [R[0] + [t[0]], R[1] + [t[1]], R[2] + [t[2]], [0, 0, 0, 1]]


def matmul(A, B):
    return [[sum(A[i][k] * B[k][j] for k in range(4)) for j in range(4)] for i in range(4)]


def quaternion(M):
    m00, m01, m02 = M[0][:3]
    m10, m11, m12 = M[1][:3]
    m20, m21, m22 = M[2][:3]
    trace = m00 + m11 + m22
    if trace > 0:
        s = 0.5 / math.sqrt(trace + 1.0)
        q = [(m21 - m12) * s, (m02 - m20) * s, (m10 - m01) * s, 0.25 / s]
    elif m00 > m11 and m00 > m22:
        s = 2.0 * math.sqrt(1.0 + m00 - m11 - m22)
        q = [0.25 * s, (m01 + m10) / s, (m02 + m20) / s, (m21 - m12) / s]
    elif m11 > m22:
        s = 2.0 * math.sqrt(1.0 + m11 - m00 - m22)
        q = [(m01 + m10) / s, 0.25 * s, (m12 + m21) / s, (m02 - m20) / s]
    else:
        s = 2.0 * math.sqrt(1.0 + m22 - m00 - m11)
        q = [(m02 + m20) / s, (m12 + m21) / s, 0.25 * s, (m10 - m01) / s]
    norm = math.sqrt(sum(x * x for x in q))
    return [x / norm for x in q]


def transform_point(M, p):
    return [sum(M[i][k] * p[k] for k in range(3)) + M[i][3] for i in range(3)]


# --- GLB --------------------------------------------------------------------------------------------

class GlbBuilder:
    def __init__(self):
        self.bin = bytearray()
        self.gltf = {"asset": {"version": "2.0", "generator": "croak sldasm-to-glb"}, "scene": 0,
                     "scenes": [{"nodes": []}], "nodes": [], "meshes": [], "materials": [],
                     "accessors": [], "bufferViews": [], "buffers": []}

    def _view(self, payload, target=None):
        while len(self.bin) % 4:
            self.bin.append(0)
        view = {"buffer": 0, "byteOffset": len(self.bin), "byteLength": len(payload)}
        if target:
            view["target"] = target
        self.bin.extend(payload)
        self.gltf["bufferViews"].append(view)
        return len(self.gltf["bufferViews"]) - 1

    def accessor(self, values, kind, comp_type, target=None, with_bounds=False):
        size = {"SCALAR": 1, "VEC3": 3, "VEC4": 4}[kind]
        fmt = {5126: "f", 5125: "I"}[comp_type]
        flat = [x for v in values for x in (v if size > 1 else [v])]
        acc = {"bufferView": self._view(struct.pack(f"<{len(flat)}{fmt}", *flat), target),
               "componentType": comp_type, "count": len(values), "type": kind}
        if with_bounds:
            acc["min"] = [min(v[i] for v in values) for i in range(size)]
            acc["max"] = [max(v[i] for v in values) for i in range(size)]
        self.gltf["accessors"].append(acc)
        return len(self.gltf["accessors"]) - 1

    def write(self, path):
        while len(self.bin) % 4:
            self.bin.append(0)
        self.gltf["buffers"] = [{"byteLength": len(self.bin)}]
        js = json.dumps(self.gltf, separators=(",", ":")).encode()
        js += b" " * ((4 - len(js) % 4) % 4)
        total = 12 + 8 + len(js) + 8 + len(self.bin)
        with open(path, "wb") as f:
            f.write(struct.pack("<III", 0x46546C67, 2, total))
            f.write(struct.pack("<II", len(js), 0x4E4F534A) + js)
            f.write(struct.pack("<II", len(self.bin), 0x004E4942) + bytes(self.bin))


def main(sldasm_path, out_path):
    sections = read_sections(open(sldasm_path, "rb").read())
    tess_name = max((n for n in sections if n.startswith("FaceTessellations/") and not n.endswith("Directory")),
                    key=lambda n: len(sections[n]))
    blob = sections[tess_name]
    ids = directory_ids(sections["FaceTessellations/Directory"])

    sw = "{http://www.solidworks.com/sw2003/schema}"
    tree = ET.fromstring(sections["swXmlContents/COMPINSTANCETREE"].decode("utf-8"))
    instances = []
    for ref in tree.iter(sw + "swReference"):
        if ref.get("swSuppressed") == "YES" or ref.get("swHidden") == "YES":
            continue
        key = f"{ref.get('swComponentName')}-{ref.get('swReferenceNumber')}"
        if key in ids:
            instances.append((ref.get("swComponentName"), sw_matrix([float(x) for x in ref.get("swTransform").split()]),
                              blob.find(ids[key])))
    instances.sort(key=lambda item: item[2])
    ends = [item[2] for item in instances[1:]] + [len(blob)]

    base = next(M for name, M, _ in instances if name == BASE_COMPONENT)
    to_base = rigid_inverse(base)

    g = GlbBuilder()
    material_index = {}
    for key, spec in MATERIALS.items():
        mat = {"name": key, "pbrMetallicRoughness": {"baseColorFactor": spec["color"],
                                                      "metallicFactor": spec["metallic"],
                                                      "roughnessFactor": spec["roughness"]}}
        if spec.get("blend"):
            mat["alphaMode"] = "BLEND"
        material_index[key] = len(g.gltf["materials"])
        g.gltf["materials"].append(mat)

    channels, samplers = [], []
    times = g.accessor([0.0, EXPLODE_SECONDS], "SCALAR", 5126, with_bounds=False)
    g.gltf["accessors"][times]["min"] = [0.0]
    g.gltf["accessors"][times]["max"] = [EXPLODE_SECONDS]
    summary = []

    for (sw_name, M, start), end in zip(instances, ends):
        label, material, lift = COMPONENTS.get(sw_name, (sw_name, "rosca", 0.0))
        world = matmul(to_base, M)
        groups = {}
        for strips, points, normals in read_faces(blob, start, end):
            local_points = points
            if sw_name == BASE_COMPONENT and is_tube_face(local_points):
                group = "tubo"
            else:
                group = material
            tris = triangulate(strips, points, normals)
            if not tris:
                continue
            bucket = groups.setdefault(group, {"pos": [], "nor": [], "idx": []})
            offset = len(bucket["pos"])
            bucket["pos"].extend(points)
            bucket["nor"].extend(normals)
            bucket["idx"].extend(i + offset for t in tris for i in t)

        primitives = []
        for group, bucket in groups.items():
            primitives.append({
                "attributes": {
                    "POSITION": g.accessor(bucket["pos"], "VEC3", 5126, 34962, with_bounds=True),
                    "NORMAL": g.accessor(bucket["nor"], "VEC3", 5126, 34962),
                },
                "indices": g.accessor(bucket["idx"], "SCALAR", 5125, 34963),
                "material": material_index[group],
            })
        g.gltf["meshes"].append({"name": label, "primitives": primitives})
        translation = [world[0][3], world[1][3], world[2][3]]
        node = {"name": label, "mesh": len(g.gltf["meshes"]) - 1, "translation": translation,
                "rotation": quaternion(world)}
        g.gltf["nodes"].append(node)
        node_index = len(g.gltf["nodes"]) - 1
        g.gltf["scenes"][0]["nodes"].append(node_index)

        if lift:
            moved = g.accessor([translation, [translation[0], translation[1] + lift, translation[2]]], "VEC3", 5126)
            samplers.append({"input": times, "output": moved, "interpolation": "LINEAR"})
            channels.append({"sampler": len(samplers) - 1, "target": {"node": node_index, "path": "translation"}})

        pts = [transform_point(world, p) for b in groups.values() for p in b["pos"]]
        lo = [min(p[i] for p in pts) for i in range(3)]
        hi = [max(p[i] for p in pts) for i in range(3)]
        summary.append((label, sum(len(b["idx"]) // 3 for b in groups.values()), lo, hi, lift))

    g.gltf["animations"] = [{"name": "Separar", "channels": channels, "samplers": samplers}]
    g.write(out_path)

    print(f"{'pieza':32} {'triángulos':>10}  caja armada (m)                          punto más alto separada")
    for label, tris, lo, hi, lift in summary:
        top = (hi[0] + lo[0]) / 2, hi[1] + lift, (hi[2] + lo[2]) / 2
        print(f"{label:32} {tris:>10}  [{lo[0]:.3f},{lo[1]:.3f},{lo[2]:.3f}]..[{hi[0]:.3f},{hi[1]:.3f},{hi[2]:.3f}]"
              f"  ({top[0]:.3f}, {top[1]:.3f}, {top[2]:.3f})")
    print(f"GLB sin optimizar: {out_path}")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    main(sys.argv[1], sys.argv[2])
