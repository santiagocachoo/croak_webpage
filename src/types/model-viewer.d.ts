import type { DetailedHTMLProps, HTMLAttributes } from "react";

// Tipos mínimos para usar <model-viewer> (https://modelviewer.dev) dentro de JSX.
// Los atributos con guion (camera-controls, auto-rotate, ...) TypeScript ya los acepta sin declararlos.
type ModelViewerAttributes = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  src?: string;
  alt?: string;
  poster?: string;
  ar?: string;
  exposure?: string;
};

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerAttributes;
    }
  }
}

declare global {
  interface Window {
    // model-viewer lee esta configuración global al crear cada visor.
    ModelViewerElement?: { dracoDecoderLocation?: string };
  }
}

export {};
