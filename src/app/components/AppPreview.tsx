import { ArrowUpRight, BarChart3, BellRing, CheckCircle2, LockKeyhole, Wifi } from "lucide-react";
import previewApp from "../../assets/preview_app.png";
import { useStagger } from "../../hooks/useStagger";

const appHighlights = [
  {
    icon: CheckCircle2,
    title: "Estado entendible",
    text: "Una lectura principal te dice si todo está normal o si algo requiere revisión.",
  },
  {
    icon: BarChart3,
    title: "Tendencias simples",
    text: "pH, turbidez y TDS se muestran como señales comparables, no como datos sueltos.",
  },
  {
    icon: BellRing,
    title: "Alertas con contexto",
    text: "La app distingue entre una variación normal y un cambio que vale la pena atender.",
  },
];

const appStatusItems = [
  { icon: Wifi, title: "Conectado", text: "Lectura en vivo" },
  { icon: LockKeyhole, title: "Válvula", text: "Control rápido" },
];

export function AppPreview() {
  const staggerRef = useStagger(90);

  return (
    <section className="relative bg-[#edf8f3] px-5 py-24 text-[#0b1f15] sm:px-8 lg:px-12" id="how-it-works">
      <div className="relative mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="croak-scroll-reveal relative order-2 lg:order-1">
          <div className="relative mx-auto max-w-[380px]">
            <img
              src={previewApp}
              alt="Vista previa real de la app Croak"
              className="relative z-10 mx-auto h-auto w-full max-w-[300px] rounded-[2rem] shadow-[0_24px_60px_rgba(11,122,79,0.15),0_8px_24px_rgba(0,0,0,0.08)]"
            />
            <div className="relative z-20 mx-auto mt-4 grid max-w-[300px] gap-3 sm:grid-cols-2">
              {appStatusItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="cursor-default rounded-2xl border border-[#d8eee5] bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    <IconComponent className="h-4 w-4 text-[#16a36c]" aria-hidden="true" />
                    <p className="mt-3 text-sm font-semibold text-[#0b1f15]">{item.title}</p>
                    <p className="mt-0.5 text-xs text-[#7ba38e]">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="croak-scroll-reveal order-1 lg:order-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0b7a4f]">App Croak</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Una interfaz para decidir, no para interpretar sensores.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#436856]">
            La app resume el estado del agua, muestra señales clave y concentra las acciones rápidas. Puedes revisar, comparar y reaccionar sin abrir una hoja de datos.
          </p>

          <div ref={staggerRef} className="mt-10 divide-y divide-[#d8eee5] overflow-hidden rounded-2xl border border-[#d8eee5] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
            {appHighlights.map((highlight) => {
              const IconComponent = highlight.icon;
              return (
                <div
                  key={highlight.title}
                  className="croak-stagger-item group grid gap-5 p-5 transition-[background-color] duration-200 hover:bg-[#edf8f3] sm:grid-cols-[3rem_1fr]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0b7a4f]">
                    <IconComponent className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0b1f15]">{highlight.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#436856]">{highlight.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://fernandox89.github.io/app_croak/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#0b7a4f] px-6 py-4 font-bold text-white shadow-[0_4px_16px_rgba(11,122,79,0.25)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-[#096941] hover:shadow-[0_8px_24px_rgba(11,122,79,0.35)] active:scale-[0.97] active:shadow-[0_2px_8px_rgba(11,122,79,0.20)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b7a4f]"
              aria-label="Abrir simulación completa de la app Croak"
            >
              Ver simulación completa
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="mailto:croakfernando@gmail.com?subject=Demo%20de%20Croak"
              className="inline-flex cursor-pointer items-center justify-center rounded-2xl border border-[#d8eee5] bg-white px-6 py-4 font-bold text-[#0b1f15] transition-all hover:-translate-y-0.5 hover:border-[#c4e8d4] hover:bg-[#edf8f3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b7a4f]"
              aria-label="Solicitar una demo de Croak por correo"
            >
              Solicitar demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
