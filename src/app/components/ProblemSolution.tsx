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
    <section className="relative overflow-hidden bg-white px-5 py-24 text-[#07110d] sm:px-8 lg:px-12" id="features">
      <div className="croak-dot-field absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1440px]">
        <div className="croak-scroll-reveal grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#0f8f5b]">Señales claras</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-none tracking-tight sm:text-5xl lg:text-6xl">
              Visualiza el estado de tu agua en segundos.
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-[#254235]/76">
            Croak conecta hardware, app y alertas para que el estado del agua sea visible todos los días. Es una capa de lectura continua pensada para hogares, escuelas y pequeños espacios donde el agua importa.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {signals.map((signal) => {
            const IconComponent = signal.icon;

            return (
              <div
                key={signal.title}
                className="croak-scroll-reveal croak-soft-panel group rounded-2xl border border-[#0c4f36]/10 bg-[#fbfff8]/82 p-6 shadow-[0_24px_70px_rgba(19,88,59,0.1)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#0f8f5b]/40 hover:shadow-[0_34px_90px_rgba(19,88,59,0.16)]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#07110d] text-[#9dffd0] transition-transform group-hover:rotate-3 group-hover:scale-105">
                  <IconComponent className="h-5 w-5" aria-hidden="true" />
                </div>

                <h3 className="text-2xl font-black text-[#07110d]">
                  {signal.title}
                </h3>
                <p className="mt-4 leading-7 text-[#254235]/76">
                  {signal.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="croak-scroll-reveal mt-20 grid overflow-hidden rounded-3xl border border-[#0c4f36]/12 bg-[#e8fff0] shadow-[0_28px_90px_rgba(19,88,59,0.12)] lg:grid-cols-3">
          {workflow.map((item) => {
            const IconComponent = item.icon;

            return (
              <div key={item.label} className="group border-b border-[#0c4f36]/10 p-7 transition-colors hover:bg-white/70 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
                <IconComponent className="h-6 w-6 text-[#0f8f5b] transition-transform group-hover:-translate-y-1" aria-hidden="true" />
                <p className="mt-6 text-2xl font-black text-[#07110d]">{item.label}</p>
                <p className="mt-3 leading-7 text-[#254235]/70">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
