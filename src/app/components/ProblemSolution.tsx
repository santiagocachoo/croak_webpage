import { Activity, Bell, Eye, Gauge, ShieldAlert, Smartphone } from "lucide-react";

const signals = [
  {
    icon: Eye,
    title: "Cambios invisibles",
    description: "El agua puede verse limpia mientras pH, turbidez o TDS empiezan a moverse fuera de lo normal.",
    extra: null,
  },
  {
    icon: ShieldAlert,
    title: "Decisiones tarde",
    description: "Sin lecturas frecuentes, solo te enteras cuando el sabor, olor o presión ya se volvieron evidentes.",
    extra: "timeline",
  },
  {
    icon: Bell,
    title: "Alertas útiles",
    description: "Croak traduce la señal en una notificación accionable, no en una tabla técnica que nadie revisa.",
    extra: "notification",
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
    <section className="croak-noise relative bg-[#0a0f0c] px-5 py-24 text-[#e8f0ec] sm:px-8 lg:px-12" id="features">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#f5f0e8] to-transparent"
        aria-hidden="true"
      />

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

        {/* Bento grid */}
        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 0 — wide */}
          <div className="croak-scroll-reveal group flex flex-col rounded-2xl border border-[#22c97e]/10 bg-[#111a14] p-7 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#22c97e]/25 hover:shadow-[0_16px_48px_rgba(34,201,126,0.08)] lg:col-span-2">
            <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-[#22c97e]/20 bg-[#0a0f0c] text-[#22c97e]">
              <Eye className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="text-xl text-[#e8f0ec]">{signals[0].title}</h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#6b8c7a]">{signals[0].description}</p>
            <div className="mt-8 flex items-end gap-3">
              {[
                { label: "pH", value: "7.0", ok: true },
                { label: "NTU", value: "2.9", ok: true },
                { label: "TDS", value: "↑ 214", ok: false },
              ].map((d) => (
                <div key={d.label} className="rounded-xl border border-[#22c97e]/10 bg-[#0a0f0c] px-3.5 py-3">
                  <p className={`font-data text-base font-medium ${d.ok ? "text-[#22c97e]" : "text-[#d4183d]"}`}>{d.value}</p>
                  <p className="mt-0.5 text-xs text-[#4a5e52]">{d.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 1 — tall */}
          <div className="croak-scroll-reveal group flex flex-col rounded-2xl border border-[#22c97e]/10 bg-[#111a14] p-7 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#22c97e]/25 hover:shadow-[0_16px_48px_rgba(34,201,126,0.08)] md:col-span-1 lg:col-span-1 lg:row-span-2">
            <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-[#22c97e]/20 bg-[#0a0f0c] text-[#22c97e]">
              <ShieldAlert className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="text-xl text-[#e8f0ec]">{signals[1].title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-[#6b8c7a]">{signals[1].description}</p>
            <div className="mt-auto pt-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#4a5e52]">Sin monitoreo</p>
              <div className="space-y-2 rounded-xl border border-[#22c97e]/10 bg-[#0a0f0c] p-4">
                {[
                  { dot: "#4a5e52", text: "pH cambia silencioso" },
                  { dot: "#4a5e52", text: "Turbidez sube lento" },
                  { dot: "#d4183d", text: "Sabor ya evidente" },
                ].map((row) => (
                  <div key={row.text} className="flex items-center gap-2.5">
                    <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: row.dot }} />
                    <p className="text-xs text-[#6b8c7a]">{row.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2 — wide */}
          <div className="croak-scroll-reveal group flex flex-col rounded-2xl border border-[#22c97e]/10 bg-[#111a14] p-7 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#22c97e]/25 hover:shadow-[0_16px_48px_rgba(34,201,126,0.08)] md:col-span-1 lg:col-span-2">
            <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-[#22c97e]/20 bg-[#0a0f0c] text-[#22c97e]">
              <Bell className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="text-xl text-[#e8f0ec]">{signals[2].title}</h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#6b8c7a]">{signals[2].description}</p>
            <div className="mt-8 rounded-xl border border-[#22c97e]/20 bg-[#0a0f0c] p-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#22c97e]/10">
                  <Bell className="h-4 w-4 text-[#22c97e]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#e8f0ec]">Turbiedad aumentó</p>
                  <p className="mt-0.5 text-xs text-[#6b8c7a]">2.9 → 5.1 NTU · hace 4 min</p>
                </div>
                <span className="ml-auto rounded-full bg-[#22c97e]/15 px-2.5 py-0.5 text-xs font-semibold text-[#22c97e]">
                  Revisar
                </span>
              </div>
            </div>
          </div>
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
