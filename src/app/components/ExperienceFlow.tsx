import { BellRing, Droplets, Gauge, RadioTower, ShieldCheck, Smartphone } from "lucide-react";
import croakHero from "../../assets/croak_hero.png";
import previewApp from "../../assets/preview_app.png";

const flowSteps = [
  {
    icon: Droplets,
    title: "El agua pasa por Croak",
    text: "El dispositivo observa el flujo sin convertir la instalación en una experiencia complicada.",
    meta: "Entrada limpia",
  },
  {
    icon: Gauge,
    title: "Los sensores leen la señal",
    text: "pH, turbidez y TDS se vuelven una línea viva que puedes revisar sin interpretar datos crudos.",
    meta: "Lectura 24/7",
  },
  {
    icon: RadioTower,
    title: "La app recibe el contexto",
    text: "Croak transforma cada cambio en estado, tendencia y prioridad para que sepas qué revisar.",
    meta: "Sin ruido",
  },
  {
    icon: BellRing,
    title: "Tú decides a tiempo",
    text: "Las alertas aparecen cuando importan, con contexto suficiente para actuar sin adivinar.",
    meta: "Acción clara",
  },
];

export function ExperienceFlow() {
  return (
    <section id="experience" className="relative overflow-hidden bg-[#fbfff8] px-5 py-24 text-[#07110d] sm:px-8 lg:px-12">
      <div className="croak-dot-field absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <div className="croak-scroll-stage relative min-h-[620px] overflow-hidden rounded-[2rem] border border-[#0c4f36]/12 bg-[#ecfff3]/80 p-6 shadow-[0_34px_110px_rgba(19,88,59,0.16)] backdrop-blur-xl sm:p-10">
            <div className="croak-flow-map" aria-hidden="true" />
            <div className="croak-water-thread croak-water-thread-a" aria-hidden="true" />
            <div className="croak-water-thread croak-water-thread-b" aria-hidden="true" />

            <div className="relative z-10 flex items-center justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.24em] text-[#0f8f5b]">Croak en acción</p>
                <p className="mt-3 max-w-sm text-2xl font-black leading-tight">
                  De sensor físico a decisión clara.
                </p>
              </div>
              <ShieldCheck className="h-8 w-8 text-[#0f8f5b]" aria-hidden="true" />
            </div>

            <img
              src={croakHero}
              alt="Dispositivo Croak dentro de una escena de monitoreo"
              className="croak-scroll-float relative z-10 mx-auto mt-8 w-full max-w-[470px] object-contain drop-shadow-[0_36px_70px_rgba(19,88,59,0.22)]"
            />

            <div className="absolute bottom-7 left-7 right-7 z-20 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
              <div className="rounded-2xl border border-[#0c4f36]/12 bg-white/78 p-5 shadow-[0_18px_60px_rgba(19,88,59,0.14)] backdrop-blur-2xl">
                <p className="text-sm font-black text-[#0f8f5b]">Lectura actual</p>
                <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                  <div>
                    <p className="text-2xl font-black">7.0</p>
                    <p className="text-xs font-bold text-[#254235]/56">pH</p>
                  </div>
                  <div>
                    <p className="text-2xl font-black">2.9</p>
                    <p className="text-xs font-bold text-[#254235]/56">NTU</p>
                  </div>
                  <div>
                    <p className="text-2xl font-black">179</p>
                    <p className="text-xs font-bold text-[#254235]/56">ppm</p>
                  </div>
                </div>
              </div>

              <div className="hidden max-h-[270px] w-[128px] overflow-hidden rounded-[1.65rem] border border-[#0c4f36]/12 bg-white shadow-[0_18px_52px_rgba(19,88,59,0.18)] sm:block">
                <img
                  src={previewApp}
                  alt="Miniatura de la app Croak"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="croak-scroll-reveal text-sm font-black uppercase tracking-[0.24em] text-[#0f8f5b]">Flujo vivo</p>
          <h2 className="croak-scroll-reveal mt-5 max-w-3xl text-4xl font-black leading-none tracking-tight sm:text-5xl lg:text-6xl">
            La experiencia se siente viva porque la señal nunca se detiene.
          </h2>
          <p className="croak-scroll-reveal mt-6 max-w-2xl text-lg leading-8 text-[#254235]/76">
            Cada parte de la página cuenta el mismo producto: un sistema que observa, interpreta y te avisa con claridad. El scroll acompaña ese viaje para que Croak se entienda como experiencia, no solo como aparato.
          </p>

          <div className="mt-12 space-y-6">
            {flowSteps.map((step, index) => {
              const IconComponent = step.icon;
              const formattedIndex = String(index + 1).padStart(2, "0");

              return (
                <article
                  key={step.title}
                  className="croak-scroll-reveal group rounded-[2rem] border border-[#0c4f36]/12 bg-white/78 p-6 shadow-[0_24px_78px_rgba(19,88,59,0.1)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#0f8f5b]/45 hover:shadow-[0_34px_100px_rgba(19,88,59,0.16)]"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-[#07110d] text-[#9dffd0] transition-transform group-hover:rotate-3 group-hover:scale-105">
                      <IconComponent className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-sm font-black text-[#0f8f5b]">{formattedIndex}</span>
                        <span className="rounded-full bg-[#e8fff0] px-3 py-1 text-xs font-black uppercase text-[#0c6a45]">
                          {step.meta}
                        </span>
                      </div>
                      <h3 className="mt-4 text-2xl font-black">{step.title}</h3>
                      <p className="mt-3 leading-7 text-[#254235]/70">{step.text}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
