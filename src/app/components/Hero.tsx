import { ArrowRight, Play } from "lucide-react";
import croakHero from "../../assets/croak_hero.png";

const heroMetrics = [
  { label: "pH", value: "7.0", detail: "Rango normal" },
  { label: "Turbidez", value: "2.9", detail: "NTU en vivo" },
  { label: "TDS", value: "179", detail: "ppm estable" },
];

export function Hero() {
  return (
    <section
      id="product"
      className="relative isolate min-h-screen overflow-hidden bg-[#0a0f0c] px-5 pb-20 pt-32 text-[#e8f0ec] sm:px-8 lg:px-12"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-5%,rgba(34,201,126,0.11)_0%,transparent_60%)]"
        aria-hidden="true"
      />

      <div className="croak-reveal mx-auto grid min-h-[calc(100svh-8rem)] w-full max-w-[1440px] items-center gap-12 lg:grid-cols-[1fr_1fr]">
        <div className="flex flex-col justify-center">
          <div className="mb-8 inline-flex w-fit items-center gap-2.5 rounded-full border border-[#22c97e]/20 bg-[rgba(34,201,126,0.07)] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#22c97e]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#22c97e]" aria-hidden="true" />
            Monitoreo inteligente de agua
          </div>

          <h1 className="max-w-2xl text-6xl leading-[0.92] tracking-tight text-[#e8f0ec] sm:text-7xl lg:text-[5.5rem]">
            El estado de<br />
            tu agua,{" "}
            <em className="italic text-[#22c97e]">siempre</em>
            <br />
            visible.
          </h1>

          <p className="mt-8 max-w-lg text-lg leading-relaxed text-[#6b8c7a]">
            Croak lee pH, turbidez, temperatura y sólidos disueltos para convertir señales técnicas en una respuesta simple: cómo está tu agua ahora y cuándo debes poner atención.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:croakfernando@gmail.com?subject=Quiero%20Croak"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#22c97e] px-6 py-4 font-bold text-[#0a0f0c] shadow-[0_0_40px_rgba(34,201,126,0.25)] transition-all hover:bg-[#1fb36e] hover:shadow-[0_0_60px_rgba(34,201,126,0.38)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22c97e]"
              aria-label="Solicitar información para comprar Croak por correo"
            >
              Comprar ahora
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="https://youtu.be/5xsPYnQADno"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#e8f0ec]/15 px-6 py-4 font-bold text-[#e8f0ec] transition-all hover:border-[#22c97e]/40 hover:text-[#22c97e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22c97e]"
              aria-label="Ver video de cómo funciona Croak en YouTube"
            >
              <Play className="h-4 w-4" aria-hidden="true" />
              Ver cómo funciona
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 overflow-hidden rounded-2xl border border-[#22c97e]/10 bg-[#111a14]">
            {heroMetrics.map((metric, i) => (
              <div
                key={metric.label}
                className={`p-4 sm:p-5 ${i < heroMetrics.length - 1 ? "border-r border-[#22c97e]/10" : ""}`}
              >
                <p className="font-data text-2xl font-medium text-[#e8f0ec] sm:text-3xl">{metric.value}</p>
                <p className="mt-1 text-sm font-semibold text-[#22c97e]">{metric.label}</p>
                <p className="mt-0.5 text-xs text-[#6b8c7a]">{metric.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="croak-reveal-delay relative flex items-center justify-center">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,rgba(34,201,126,0.07)_0%,transparent_70%)]"
            aria-hidden="true"
          />
          <img
            src={croakHero}
            alt="Dispositivo Croak para monitorear la calidad del agua"
            className="croak-device-float relative z-10 w-full max-w-[440px] object-contain drop-shadow-[0_60px_80px_rgba(34,201,126,0.18)] sm:max-w-[580px]"
          />
        </div>
      </div>
    </section>
  );
}
