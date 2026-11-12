// Prepara el modelo 3D exportado de Onshape (GLB) para la web.
//
// Uso:
//   npm run model -- "/ruta/al/export-de-onshape.glb"
//
// Escribe src/assets/croak_model.glb (o la ruta que pases como segundo argumento).

import { NodeIO } from "@gltf-transform/core";
import { ALL_EXTENSIONS } from "@gltf-transform/extensions";
import { dedup, draco, flatten, join, prune, simplify, weld } from "@gltf-transform/functions";
import draco3d from "draco3dgltf";
import { MeshoptSimplifier } from "meshoptimizer";
import { statSync } from "node:fs";

const [input, output = "src/assets/croak_model.glb"] = process.argv.slice(2);

if (!input) {
  console.error('Uso: npm run model -- "/ruta/al/export-de-onshape.glb" [salida.glb]');
  process.exit(1);
}

const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({
  "draco3d.decoder": await draco3d.createDecoderModule(),
  "draco3d.encoder": await draco3d.createEncoderModule(),
});

const document = await io.read(input);

// Onshape guarda el color de cada apariencia tal como se ve en pantalla (sRGB),
// pero glTF lo espera en espacio lineal; sin esta conversión el modelo se ve deslavado.
const srgbToLinear = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);

for (const material of document.getRoot().listMaterials()) {
  const [r, g, b, a] = material.getBaseColorFactor();
  material.setBaseColorFactor([srgbToLinear(r), srgbToLinear(g), srgbToLinear(b), a]);
  // Onshape exporta todo con rugosidad 1 (mate total): lo dejamos como plástico satinado.
  // Los materiales que ya traen su propio acabado (metal, vidrio, hule) se respetan.
  if (material.getRoughnessFactor() === 1) material.setRoughnessFactor(0.55);
}

await MeshoptSimplifier.ready;

await document.transform(
  dedup(),
  flatten(),
  // Onshape exporta cada cara como una pieza aparte; unirlas reduce el archivo y las llamadas de dibujo.
  // keepNamed: las piezas con nombre (sensores, empaques...) siguen separadas para poder animarlas.
  join({ keepNamed: true }),
  weld(),
  // Simplificación casi imperceptible (error relativo de 0.01%).
  simplify({ simplifier: MeshoptSimplifier, ratio: 0, error: 0.0001 }),
  prune(),
  draco(),
);

await io.write(output, document);

const kb = (path) => `${(statSync(path).size / 1024).toFixed(0)} KB`;
console.log(`Modelo listo: ${input} (${kb(input)}) → ${output} (${kb(output)})`);
