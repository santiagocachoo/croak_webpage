import { ImageIcon, Layers, LoaderCircle, Minus, Plus, Rotate3d, Scan } from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import croakModelUrl from "../../assets/croak_model.glb?url";

// El modelo sale del ensamble de SolidWorks (scripts/sldasm-to-glb.py) o de un export GLB de Onshape,
// y se optimiza con `npm run model`. Ver README.

let modelViewerLoad: Promise<unknown> | null = null;

/** Carga <model-viewer> (y three.js) solo cuando alguien pide ver el 3D. */
export function loadModelViewer() {
  if (!modelViewerLoad) {
    // El decodificador Draco se sirve desde la propia página (public/draco), sin depender de un CDN.
    window.ModelViewerElement = {
      ...window.ModelViewerElement,
      dracoDecoderLocation: `${import.meta.env.BASE_URL}draco/`,
    };
    modelViewerLoad = import("@google/model-viewer").catch((error) => {
      modelViewerLoad = null;
      throw error;
    });
  }
  return modelViewerLoad;
}

// --- Vista explotada -------------------------------------------------------------------------------
// El GLB trae una animación "Separar" (0 → 1 s) que sube cada sensor con su rosca y su empaque.
// Los números salen del modelo (marco de la carcasa: tubo a lo largo de X, caja hacia +Y, en metros):
// separado ocupa y ∈ [-0.037, 0.30], así que la cámara apunta a su centro y se aleja un poco.
const EXPLODE_ANIMATION = "Separar";
const EXPLODE_END = 0.999; // en 1.0 exacto model-viewer vuelve al inicio (la animación es cíclica)
const EXPLODE_MS = 900;
const EXPLODED_TARGET = "0.18m 0.14m 0m";
const EXPLODED_ZOOM_OUT = 1.35;

// Etiquetas sobre cada sensor ya separado (punto más alto de cada pieza, en metros).
const SENSOR_LABELS = [
  { slot: "hotspot-ph", position: "0.269m 0.305m 0m", label: "Electrodo de pH" },
  { slot: "hotspot-tds", position: "0.201m 0.215m 0m", label: "Sensor TDS" },
  { slot: "hotspot-turbidez", position: "0.119m 0.165m 0m", label: "Sensor de turbidez" },
];

type ModelViewerHandle = HTMLElement & {
  cameraOrbit?: string;
  cameraTarget?: string;
  currentTime?: number;
  availableAnimations?: string[];
  getCameraOrbit?: () => { theta: number; phi: number; radius: number };
  play?: () => void;
  pause?: () => void;
};
type Status = "loading" | "ready" | "error";

type Model3DViewerProps = {
  onClose: () => void;
  /** Proporción del visor. Con 6:5 o más ancho, el encuadre de cámara (85%) cabe completo. */
  aspectClassName?: string;
};

const overlayButton =
  "inline-flex cursor-pointer items-center gap-1.5 rounded-xl border border-[#d8eee5] bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#436856] backdrop-blur transition-colors hover:text-[#0b1f15] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b7a4f]";

const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

export function Model3DViewer({ onClose, aspectClassName = "aspect-[6/5]" }: Model3DViewerProps) {
  const viewerRef = useRef<ModelViewerHandle>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const explodeFrame = useRef<number | null>(null);
  const explodePrimed = useRef(false);
  const [status, setStatus] = useState<Status>("loading");
  const [progress, setProgress] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [canExplode, setCanExplode] = useState(false);
  const [exploded, setExploded] = useState(false);
  const [explodeMoving, setExplodeMoving] = useState(false);
  const [{ reduceMotion, finePointer }] = useState(() => ({
    reduceMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    // Con mouse, la rueda debe seguir moviendo la página (la tarjeta es sticky en escritorio),
    // así que el zoom va con botones. En pantallas táctiles se acerca con los dedos.
    finePointer: window.matchMedia("(hover: hover) and (pointer: fine)").matches,
  }));

  useEffect(() => {
    closeRef.current?.focus({ preventScroll: true });

    const viewer = viewerRef.current;
    if (!viewer) return;

    const handleProgress = (event: Event) => {
      setProgress((event as CustomEvent<{ totalProgress: number }>).detail.totalProgress);
    };
    const handleLoad = () => {
      setStatus("ready");
      setCanExplode(viewer.availableAnimations?.includes(EXPLODE_ANIMATION) ?? false);
    };
    const handleError = () => setStatus("error");
    const handleCameraChange = (event: Event) => {
      if ((event as CustomEvent<{ source: string }>).detail.source === "user-interaction") {
        setHasInteracted(true);
      }
    };

    viewer.addEventListener("progress", handleProgress);
    viewer.addEventListener("load", handleLoad);
    viewer.addEventListener("error", handleError);
    viewer.addEventListener("camera-change", handleCameraChange);

    let cancelled = false;
    loadModelViewer().catch(() => {
      if (!cancelled) setStatus("error");
    });

    return () => {
      cancelled = true;
      if (explodeFrame.current !== null) cancelAnimationFrame(explodeFrame.current);
      viewer.removeEventListener("progress", handleProgress);
      viewer.removeEventListener("load", handleLoad);
      viewer.removeEventListener("error", handleError);
      viewer.removeEventListener("camera-change", handleCameraChange);
    };
  }, []);

  // Con disable-zoom, model-viewer ignora zoom(); los botones mueven la cámara directamente
  // (model-viewer limita la distancia mínima y máxima por su cuenta).
  const zoom = (direction: 1 | -1) => {
    const viewer = viewerRef.current;
    const orbit = viewer?.getCameraOrbit?.();
    if (!viewer || !orbit) return;
    const radius = orbit.radius * (direction > 0 ? 0.8 : 1.25);
    viewer.cameraOrbit = `${orbit.theta}rad ${orbit.phi}rad ${radius}m`;
    setHasInteracted(true);
  };

  const toggleExplode = () => {
    const viewer = viewerRef.current;
    const orbit = viewer?.getCameraOrbit?.();
    if (!viewer || !orbit) return;

    const next = !exploded;
    setExploded(next);
    setExplodeMoving(true);

    // model-viewer solo crea la animación al reproducirla; luego la controlamos a mano con currentTime.
    if (!explodePrimed.current) {
      viewer.play?.();
      viewer.pause?.();
      explodePrimed.current = true;
    }

    viewer.cameraTarget = next ? EXPLODED_TARGET : "auto auto auto";
    const radius = next ? orbit.radius * EXPLODED_ZOOM_OUT : orbit.radius / EXPLODED_ZOOM_OUT;
    viewer.cameraOrbit = `${orbit.theta}rad ${orbit.phi}rad ${radius}m`;

    if (explodeFrame.current !== null) cancelAnimationFrame(explodeFrame.current);
    const from = viewer.currentTime ?? 0;
    const to = next ? EXPLODE_END : 0;
    const duration = reduceMotion ? 0 : EXPLODE_MS;
    const start = performance.now();

    const step = (now: number) => {
      const k = duration === 0 ? 1 : Math.min((now - start) / duration, 1);
      viewer.currentTime = from + (to - from) * easeInOut(k);
      if (k < 1) {
        explodeFrame.current = requestAnimationFrame(step);
      } else {
        explodeFrame.current = null;
        setExplodeMoving(false);
      }
    };
    explodeFrame.current = requestAnimationFrame(step);
  };

  const showLabels = exploded && !explodeMoving;

  return (
    // El modelo es largo y delgado: con proporción 6:5 o más ancha, el encuadre de cámara (85%) cabe en cualquier pantalla.
    <div className={`relative w-full overflow-hidden rounded-[1.4rem] bg-gradient-to-b from-[#f6fbf8] to-[#e5f5ee] ring-1 ring-[#d8eee5] ${aspectClassName}`}>
      <model-viewer
        ref={viewerRef}
        src={croakModelUrl}
        alt="Modelo 3D interactivo de Croak: tubería con electrodo de pH, sensor de turbidez y sensor TDS"
        camera-controls=""
        touch-action="pan-y"
        disable-zoom={finePointer ? "" : undefined}
        camera-orbit="35deg 72deg 85%"
        animation-name={EXPLODE_ANIMATION}
        auto-rotate={reduceMotion ? undefined : ""}
        auto-rotate-delay="2000"
        rotation-per-second="16deg"
        interaction-prompt="none"
        environment-image="neutral"
        exposure="1.05"
        shadow-intensity="0.9"
        shadow-softness="0.8"
        ar=""
        ar-modes="webxr scene-viewer quick-look"
        ar-scale="auto"
        style={{ width: "100%", height: "100%", "--poster-color": "transparent" } as CSSProperties}
      >
        {/* Barra de progreso propia (abajo); se oculta la de model-viewer. */}
        <div slot="progress-bar" />
        {/* model-viewer solo muestra este botón en celulares compatibles con realidad aumentada
            (pantallas táctiles, donde la esquina inferior derecha no tiene botones de zoom). */}
        <button
          slot="ar-button"
          type="button"
          className="absolute bottom-3 right-3 inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-[#0b7a4f] px-3 py-1.5 text-xs font-bold text-white shadow-[0_4px_14px_rgba(11,122,79,0.3)]"
        >
          <Scan className="h-3.5 w-3.5" aria-hidden="true" />
          Ver en tu espacio
        </button>

        {SENSOR_LABELS.map(({ slot, position, label }) => (
          <div
            key={slot}
            slot={slot}
            data-position={position}
            className={`pointer-events-none transition-opacity duration-300 ${showLabels ? "opacity-100" : "opacity-0"}`}
          >
            <span className="block -translate-y-1/2 whitespace-nowrap rounded-lg bg-[#0b1f15]/85 px-2 py-0.5 text-[11px] font-semibold text-white shadow-sm">
              {label}
            </span>
          </div>
        ))}
      </model-viewer>

      <button ref={closeRef} type="button" onClick={onClose} className={`absolute left-3 top-3 z-10 ${overlayButton}`}>
        <ImageIcon className="h-3.5 w-3.5" aria-hidden="true" />
        Ver imagen
      </button>

      {status === "ready" && canExplode && (
        <button
          type="button"
          onClick={toggleExplode}
          aria-pressed={exploded}
          className="absolute bottom-3 left-3 z-10 inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-[#0b7a4f] px-3 py-1.5 text-xs font-bold text-white shadow-[0_4px_14px_rgba(11,122,79,0.3)] transition-colors hover:bg-[#096941] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b7a4f]"
        >
          <Layers className="h-3.5 w-3.5" aria-hidden="true" />
          {exploded ? "Unir piezas" : "Separar piezas"}
        </button>
      )}

      {status === "ready" && finePointer && (
        <div className="absolute bottom-3 right-3 z-10 flex gap-1.5">
          <button type="button" onClick={() => zoom(1)} className={`${overlayButton} px-2`} aria-label="Acercar modelo">
            <Plus className="h-4 w-4" aria-hidden="true" />
          </button>
          <button type="button" onClick={() => zoom(-1)} className={`${overlayButton} px-2`} aria-label="Alejar modelo">
            <Minus className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      )}

      {status === "ready" && !hasInteracted && !exploded && (
        <p className="pointer-events-none absolute bottom-12 left-1/2 z-10 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-lg bg-white/85 px-2.5 py-1 text-[11px] font-medium text-[#436856] backdrop-blur">
          <Rotate3d className="h-3.5 w-3.5 text-[#16a36c]" aria-hidden="true" />
          {finePointer ? "Arrastra para girar" : "Gira y acerca con los dedos"}
        </p>
      )}

      {status === "loading" && (
        <div
          className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3 text-sm font-medium text-[#436856]"
          role="status"
        >
          <LoaderCircle className="h-6 w-6 animate-spin text-[#16a36c]" aria-hidden="true" />
          Cargando modelo 3D…
          <div className="h-1 w-32 overflow-hidden rounded-full bg-[#d8eee5]">
            <div
              className="h-full rounded-full bg-[#16a36c] transition-[width] duration-200"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>
        </div>
      )}

      {status === "error" && (
        <div
          className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-[#f6fbf8] px-6 text-center text-sm text-[#436856]"
          role="alert"
        >
          No se pudo cargar el modelo 3D.
          <button type="button" onClick={onClose} className="cursor-pointer rounded-xl bg-[#0b7a4f] px-4 py-2 text-xs font-bold text-white">
            Volver a la imagen
          </button>
        </div>
      )}
    </div>
  );
}
