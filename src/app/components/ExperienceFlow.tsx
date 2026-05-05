import { BellRing, Droplets, Gauge, RadioTower, ShieldCheck, Smartphone } from "lucide-react";
import croakHero from "../../assets/croak_hero.png";

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

const stageMetrics = [
  {
    icon: Droplets,
    value: "7.0",
    label: "pH",
  },
  {
    icon: Gauge,
    value: "2.9",
    label: "NTU",
  },
  {
    icon: Smartphone,
    value: "En vivo",
    label: "App",
  },
];

export function ExperienceFlow() {
  return (
    <section id="experience" className="relative overflow-hidden bg-[#fbfff8] px-5 py-24 text-[#07110d] sm:px-8 lg:px-12">
      <div className="croak-dot-field absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-[0.86fr_1.14fr]">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <div className="croak-scroll-stage relative overflow-hidden rounded-[2rem] border border-[#0c4f36]/12 bg-[#ecfff3]/80 p-6 shadow-[0_34px_110px_rgba(19,88,59,0.16)] backdrop-blur-xl sm:p-8">
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

            <div className="relative z-10 mt-10 flex min-h-[340px] items-center justify-center">
              <div className="absolute h-[78%] w-[78%] rounded-full border border-[#0f8f5b]/16 bg-white/28 shadow-[inset_0_0_70px_rgba(105,221,153,0.16)]" aria-hidden="true" />
              <div className="absolute h-[55%] w-[55%] rounded-full border border-[#1586a8]/12" aria-hidden="true" />

              <div className="absolute left-0 top-8 z-20 hidden rounded-2xl border border-[#0c4f36]/12 bg-white/82 px-4 py-3 shadow-[0_18px_52px_rgba(19,88,59,0.14)] backdrop-blur-xl sm:block">
                <p className="text-xs font-black uppercase text-[#0f8f5b]">Estado</p>
                <p className="mt-1 text-sm font-black">Agua segura</p>
              </div>

              <div className="absolute bottom-8 right-0 z-20 hidden rounded-2xl border border-[#0c4f36]/12 bg-white/82 px-4 py-3 text-right shadow-[0_18px_52px_rgba(19,88,59,0.14)] backdrop-blur-xl sm:block">
                <p className="text-xs font-black uppercase text-[#1586a8]">Señal</p>
                <p className="mt-1 text-sm font-black">Sin cambios bruscos</p>
              </div>

              <img
                src={croakHero}
                alt="Dispositivo Croak dentro de una escena de monitoreo"
                className="croak-scroll-float relative z-10 w-full max-w-[390px] object-contain drop-shadow-[0_36px_70px_rgba(19,88,59,0.22)]"
              />
            </div>

            <div className="relative z-20 mt-6 grid gap-3 sm:grid-cols-3">
              {stageMetrics.map((metric) => {
                const IconComponent = metric.icon;

                return (
                  <div key={metric.label} className="rounded-2xl border border-[#0c4f36]/12 bg-white/78 p-4 shadow-[0_14px_42px_rgba(19,88,59,0.11)] backdrop-blur-2xl">
                    <IconComponent className="h-5 w-5 text-[#0f8f5b]" aria-hidden="true" />
                    <p className="mt-3 text-xl font-black">{metric.value}</p>
                    <p className="text-xs font-bold text-[#254235]/56">{metric.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <p className="croak-scroll-reveal text-sm font-black uppercase tracking-[0.24em] text-[#0f8f5b]">Flujo vivo</p>
          <h2 className="croak-scroll-reveal mt-5 max-w-3xl text-4xl font-black leading-none tracking-tight sm:text-5xl lg:text-6xl">
            La experiencia se siente viva porque la señal nunca se detiene.
          </h2>
          <p className="croak-scroll-reveal mt-6 max-w-2xl text-lg leading-8 text-[#254235]/76">
            Croak conecta el dispositivo, las lecturas y la app para que sepas qué está pasando con tu agua en cada momento. Si algo cambia, recibes contexto claro para actuar antes de que se vuelva un problema.
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
