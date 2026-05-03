import { ArrowUpRight, BarChart3, BellRing, CheckCircle2, LockKeyhole, Wifi } from "lucide-react";
import previewApp from "../../assets/preview_app.png";

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
  {
    icon: Wifi,
    title: "Conectado",
    text: "Lectura en vivo",
  },
  {
    icon: LockKeyhole,
    title: "Válvula",
    text: "Control rápido",
  },
];

export function AppPreview() {
  return (
    <section className="relative overflow-hidden bg-[#ecfff3] px-5 py-24 text-[#07110d] sm:px-8 lg:px-12" id="how-it-works">
      <div className="croak-wave-band absolute inset-x-0 top-0 h-36 opacity-80" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="croak-scroll-reveal relative order-2 lg:order-1">
          <div className="absolute inset-y-12 left-1/2 w-px -translate-x-1/2 bg-[#0f8f5b]/20" aria-hidden="true" />
          <div className="relative mx-auto max-w-[430px]">
            <div className="absolute -inset-8 rounded-[3rem] bg-white/45 shadow-[0_34px_120px_rgba(19,88,59,0.14)]" aria-hidden="true" />
            <img
              src={previewApp}
              alt="Vista previa real de la app Croak"
              className="relative z-10 mx-auto h-auto w-full max-w-[360px] rounded-[2rem] shadow-[0_44px_100px_rgba(19,88,59,0.18)]"
            />

            <div className="relative z-20 mx-auto mt-5 grid max-w-[360px] gap-3 sm:grid-cols-2">
              {appStatusItems.map((item) => {
                const IconComponent = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[#0c4f36]/12 bg-white/86 p-4 text-[#07110d] shadow-[0_18px_50px_rgba(19,88,59,0.12)] backdrop-blur-xl transition-transform hover:-translate-y-1"
                  >
                    <IconComponent className="h-5 w-5 text-[#0f8f5b]" aria-hidden="true" />
                    <p className="mt-3 text-sm font-black">{item.title}</p>
                    <p className="mt-1 text-xs text-[#254235]/58">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="croak-scroll-reveal order-1 lg:order-2">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#0f8f5b]">App Croak</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-black leading-none tracking-tight sm:text-5xl lg:text-6xl">
            Una interfaz para decidir, no para interpretar sensores.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#254235]/76">
            La app resume el estado del agua, muestra señales clave y concentra las acciones rápidas. Puedes revisar, comparar y reaccionar sin abrir una hoja de datos.
          </p>

          <div className="mt-10 divide-y divide-[#0c4f36]/10 overflow-hidden rounded-3xl border border-[#0c4f36]/12 bg-white/72 shadow-[0_26px_80px_rgba(19,88,59,0.12)] backdrop-blur-xl">
            {appHighlights.map((highlight) => {
              const IconComponent = highlight.icon;

              return (
                <div key={highlight.title} className="group grid gap-5 p-6 transition-colors hover:bg-[#f7fffa] sm:grid-cols-[3rem_1fr]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#07110d] text-[#9dffd0] transition-transform group-hover:rotate-3 group-hover:scale-105">
                    <IconComponent className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black">{highlight.title}</h3>
                    <p className="mt-2 leading-7 text-[#254235]/68">{highlight.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://fernandox89.github.io/app_croak/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#07110d] px-6 py-4 font-black text-white shadow-[0_22px_48px_rgba(7,17,13,0.18)] transition-transform hover:-translate-y-1 hover:bg-[#0f8f5b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0f8f5b]"
              aria-label="Abrir simulación completa de la app Croak"
            >
              Ver simulación completa
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="mailto:croakfernando@gmail.com?subject=Demo%20de%20Croak"
              className="inline-flex items-center justify-center rounded-xl border border-[#0c4f36]/14 bg-white/68 px-6 py-4 font-black text-[#07110d] shadow-[0_18px_44px_rgba(19,88,59,0.1)] backdrop-blur-xl transition-transform hover:-translate-y-1 hover:border-[#0f8f5b]/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0f8f5b]"
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
