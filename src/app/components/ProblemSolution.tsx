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
    <section className="relative bg-white px-5 py-24 text-[#0b1f15] sm:px-8 lg:px-12" id="features">
      <div className="mx-auto max-w-[1440px]">
        <div className="croak-scroll-reveal grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0b7a4f]">Señales claras</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Visualiza el estado de tu agua en segundos.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-[#436856]">
            Croak conecta hardware, app y alertas para que el estado del agua sea visible todos los días. Una capa de lectura continua pensada para hogares y espacios donde el agua importa.
          </p>
        </div>

        {/* Bento grid */}
        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 0 — wide, with data badges */}
          <div className="croak-scroll-reveal group flex cursor-default flex-col rounded-[1.25rem] border border-[#d8eee5] bg-white p-7 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-[#c4e8d4] hover:shadow-[0_8px_28px_rgba(11,122,79,0.08)] md:col-span-2 lg:col-span-2">
            <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-[#e5f5ee]">
              <Eye className="h-5 w-5 text-[#0b7a4f]" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-[#0b1f15]">{signals[0].title}</h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[#436856]">{signals[0].description}</p>
            <div className="mt-8 flex flex-wrap items-end gap-3">
              {[
                { label: "pH", value: "7.0", ok: true },
                { label: "NTU", value: "2.9", ok: true },
                { label: "TDS", value: "↑ 214", ok: false },
              ].map((d) => (
                <div key={d.label} className="rounded-xl border border-[#d8eee5] bg-[#edf8f3] px-4 py-3">
                  <p className={`font-data text-base font-medium ${d.ok ? "text-[#0b7a4f]" : "text-[#dc2626]"}`}>{d.value}</p>
                  <p className="mt-0.5 text-xs text-[#7ba38e]">{d.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 1 — tall */}
          <div className="croak-scroll-reveal group flex cursor-default flex-col rounded-[1.25rem] border border-[#d8eee5] bg-white p-7 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-[#c4e8d4] hover:shadow-[0_8px_28px_rgba(11,122,79,0.08)] md:col-span-2 lg:col-span-1 lg:row-span-2">
            <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-[#e5f5ee]">
              <ShieldAlert className="h-5 w-5 text-[#0b7a4f]" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-[#0b1f15]">{signals[1].title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#436856]">{signals[1].description}</p>
            <div className="mt-auto pt-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#7ba38e]">Sin monitoreo</p>
              <div className="space-y-2 rounded-xl border border-[#d8eee5] bg-[#edf8f3] p-4">
                {[
                  { dot: "#c4e8d4", text: "pH cambia silencioso" },
                  { dot: "#c4e8d4", text: "Turbidez sube lento" },
                  { dot: "#fca5a5", text: "Sabor ya evidente" },
                ].map((row) => (
                  <div key={row.text} className="flex items-center gap-2.5">
                    <div className="h-2 w-2 flex-shrink-0 rounded-full" style={{ background: row.dot }} />
                    <p className="text-xs text-[#436856]">{row.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2 — wide, with mock notification */}
          <div className="croak-scroll-reveal group flex cursor-default flex-col rounded-[1.25rem] border border-[#d8eee5] bg-white p-7 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-[#c4e8d4] hover:shadow-[0_8px_28px_rgba(11,122,79,0.08)] md:col-span-2 lg:col-span-2">
            <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-[#e5f5ee]">
              <Bell className="h-5 w-5 text-[#0b7a4f]" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-[#0b1f15]">{signals[2].title}</h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[#436856]">{signals[2].description}</p>
            <div className="mt-8 rounded-xl border border-[#c4e8d4] bg-[#e5f5ee] p-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                  <Bell className="h-4 w-4 text-[#0b7a4f]" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-[#0b1f15]">Turbiedad aumentó</p>
                  <p className="mt-0.5 text-xs text-[#436856]">2.9 → 5.1 NTU · hace 4 min</p>
                </div>
                <span className="rounded-full bg-[#0b7a4f] px-2.5 py-1 text-xs font-bold text-white">
                  Revisar
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Workflow strip */}
        <div className="croak-scroll-reveal mt-12 grid overflow-hidden rounded-[1.25rem] border border-[#d8eee5] bg-[#edf8f3] lg:grid-cols-3">
          {workflow.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.label}
                className={`group cursor-default p-8 transition-colors duration-200 hover:bg-[#e5f5ee] ${
                  i < workflow.length - 1 ? "border-b border-[#d8eee5] lg:border-b-0 lg:border-r" : ""
                }`}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-sm">
                  <IconComponent className="h-4 w-4 text-[#0b7a4f]" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-[#0b1f15]">{item.label}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#436856]">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
