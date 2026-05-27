import { BellRing, Droplets, Gauge, RadioTower, ShieldCheck, Smartphone } from "lucide-react";
import croakModelExploded from "../../assets/croak_model_exploded.png";

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
  { icon: Droplets, value: "7.0", label: "pH" },
  { icon: Gauge, value: "2.9", label: "NTU" },
  { icon: Smartphone, value: "En vivo", label: "App" },
];

export function ExperienceFlow() {
  return (
    <section id="experience" className="relative bg-[#f5f0e8] px-5 py-24 text-[#0a0f0c] sm:px-8 lg:px-12">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0a0f0c] to-transparent"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-[0.86fr_1.14fr]">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <div className="croak-scroll-stage relative overflow-hidden rounded-[2rem] bg-white p-6 shadow-[0_24px_80px_rgba(0,0,0,0.1)] sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#22c97e]">Croak en acción</p>
                <h3 className="mt-3 max-w-sm text-2xl leading-tight text-[#0a0f0c]">
                  De sensor físico<br />a decisión clara.
                </h3>
              </div>
              <ShieldCheck className="h-7 w-7 text-[#22c97e]" aria-hidden="true" />
            </div>

            <div className="relative mt-8 flex min-h-[300px] items-center justify-center">
              <img
                src={croakModelExploded}
                alt="Modelo 3D de Croak con componentes internos visibles"
                className="croak-scroll-float relative z-10 w-full max-w-[460px] rounded-[1.4rem] object-contain drop-shadow-[0_24px_40px_rgba(0,0,0,0.12)]"
              />
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {stageMetrics.map((metric) => {
                const IconComponent = metric.icon;
                return (
                  <div key={metric.label} className="rounded-2xl border border-[#0a0f0c]/8 bg-[#f5f0e8] p-4">
                    <IconComponent className="h-4 w-4 text-[#22c97e]" aria-hidden="true" />
                    <p className="font-data mt-3 text-xl font-medium text-[#0a0f0c]">{metric.value}</p>
                    <p className="text-xs font-medium text-[#4a5e52]">{metric.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <p className="croak-scroll-reveal text-xs font-semibold uppercase tracking-[0.2em] text-[#22c97e]">Flujo vivo</p>
          <h2 className="croak-scroll-reveal mt-5 max-w-3xl text-4xl leading-[1.05] tracking-tight text-[#0a0f0c] sm:text-5xl lg:text-6xl">
            La experiencia se siente viva porque la señal nunca se detiene.
          </h2>
          <p className="croak-scroll-reveal mt-6 max-w-2xl text-lg leading-relaxed text-[#4a5e52]">
            Croak conecta el dispositivo, las lecturas y la app para que sepas qué está pasando con tu agua en cada momento. Si algo cambia, recibes contexto claro para actuar antes de que se vuelva un problema.
          </p>

          <div className="mt-12 space-y-4">
            {flowSteps.map((step, index) => {
              const IconComponent = step.icon;
              const formattedIndex = String(index + 1).padStart(2, "0");

              return (
                <article
                  key={step.title}
                  className="croak-scroll-reveal group rounded-2xl border border-[#0a0f0c]/8 bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#22c97e]/30 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#0a0f0c] text-[#22c97e]">
                      <IconComponent className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-data text-xs font-medium text-[#22c97e]">{formattedIndex}</span>
                        <span className="rounded-full border border-[#0a0f0c]/10 bg-[#f5f0e8] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#4a5e52]">
                          {step.meta}
                        </span>
                      </div>
                      <h3 className="mt-3 text-xl text-[#0a0f0c]">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#4a5e52]">{step.text}</p>
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
