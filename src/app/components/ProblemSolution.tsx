import { Activity, Bell, Eye, Gauge, ShieldAlert, Smartphone } from "lucide-react";

const signals = [
  {
    icon: Eye,
    title: "Cambios invisibles",
    description: "El agua puede verse limpia mientras pH, turbidez o TDS empiezan a moverse fuera de lo normal.",
  },
  {
    icon: ShieldAlert,
    title: "Decisiones tarde",
    description: "Sin lecturas frecuentes, solo te enteras cuando el sabor, olor o presión ya se volvieron evidentes.",
  },
  {
    icon: Bell,
    title: "Alertas útiles",
    description: "Croak traduce la señal en una notificación accionable, no en una tabla técnica que nadie revisa.",
  },
];

const workflow = [
  {
    icon: Gauge,
    label: "Sensores",
    text: "Miden variables clave del agua mientras circula por el sistema.",
  },
  {
    icon: Activity,
    label: "Lectura viva",
    text: "Las mediciones se convierten en estado, tendencia y cambios detectados.",
  },
  {
    icon: Smartphone,
    label: "App",
    text: "Recibes contexto claro desde tu celular para decidir rápido.",
  },
];

export function ProblemSolution() {
  return (
    <section className="relative bg-[#0a0f0c] px-5 py-24 text-[#e8f0ec] sm:px-8 lg:px-12" id="features">
      <div className="mx-auto max-w-[1440px]">
        <div className="croak-scroll-reveal grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#22c97e]">Señales claras</p>
            <h2 className="mt-5 max-w-3xl text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Visualiza el estado de tu agua en segundos.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-[#6b8c7a]">
            Croak conecta hardware, app y alertas para que el estado del agua sea visible todos los días. Una capa de lectura continua pensada para hogares y espacios donde el agua importa.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {signals.map((signal) => {
            const IconComponent = signal.icon;
            return (
              <div
                key={signal.title}
                className="croak-scroll-reveal group rounded-2xl border border-[#22c97e]/10 bg-[#111a14] p-7 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#22c97e]/25 hover:shadow-[0_16px_48px_rgba(34,201,126,0.08)]"
              >
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-[#22c97e]/20 bg-[#0a0f0c] text-[#22c97e]">
                  <IconComponent className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-xl text-[#e8f0ec]">{signal.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#6b8c7a]">{signal.description}</p>
              </div>
            );
          })}
        </div>

        <div className="croak-scroll-reveal mt-14 grid overflow-hidden rounded-2xl border border-[#22c97e]/10 bg-[#111a14] lg:grid-cols-3">
          {workflow.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.label}
                className={`group p-8 transition-colors hover:bg-[#162019] ${
                  i < workflow.length - 1 ? "border-b border-[#22c97e]/10 lg:border-b-0 lg:border-r" : ""
                }`}
              >
                <IconComponent className="h-5 w-5 text-[#22c97e]" aria-hidden="true" />
                <h3 className="mt-6 text-2xl text-[#e8f0ec]">{item.label}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#6b8c7a]">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
