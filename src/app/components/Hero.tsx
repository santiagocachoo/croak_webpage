import { ArrowRight, Droplets, Gauge, Play, ShieldCheck, Sparkles, Waves } from "lucide-react";
import croakHero from "../../assets/croak_hero.png";

const heroMetrics = [
  { label: "pH", value: "7.0", detail: "Rango normal" },
  { label: "Turbidez", value: "2.9", detail: "NTU en vivo" },
  { label: "TDS", value: "179", detail: "ppm estable" },
];

const heroSignals = ["pH estable", "Turbidez baja", "TDS normal", "Flujo activo", "Alerta lista", "App sincronizada"];

export function Hero() {
  return (
    <section
      id="product"
      className="croak-hero-field relative isolate overflow-hidden px-5 pb-12 pt-28 text-[#07110d] sm:px-8 lg:px-12"
    >
      <div className="croak-water-thread croak-water-thread-a" aria-hidden="true" />
      <div className="croak-water-thread croak-water-thread-b" aria-hidden="true" />

      <div className="mx-auto grid min-h-[86svh] w-full max-w-[1440px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="croak-reveal max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0f8f5b]/18 bg-white/70 px-4 py-2 text-sm font-black text-[#0c6a45] shadow-[0_18px_50px_rgba(19,88,59,0.12)] backdrop-blur-xl">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Monitoreo inteligente para agua en casa
          </div>

          <p className="mb-3 text-sm font-black uppercase tracking-[0.28em] text-[#0f8f5b]">
            Croak
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-[#07110d] sm:text-6xl lg:text-7xl">
            Frase llamativa.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#254235]/78 sm:text-xl">
            Croak lee pH, turbidez, temperatura y sólidos disueltos para convertir señales técnicas en una respuesta simple: cómo está tu agua ahora y cuándo debes poner atención.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:croakfernando@gmail.com?subject=Quiero%20Croak"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#07110d] px-6 py-4 font-black text-white shadow-[0_22px_48px_rgba(7,17,13,0.22)] transition-transform hover:-translate-y-1 hover:bg-[#0f8f5b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0f8f5b]"
              aria-label="Solicitar información para comprar Croak por correo"
            >
              Comprar ahora
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>

            <a
              href="https://youtu.be/5xsPYnQADno"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-[#0c4f36]/14 bg-white/72 px-6 py-4 font-black text-[#07110d] shadow-[0_18px_44px_rgba(19,88,59,0.1)] backdrop-blur-xl transition-transform hover:-translate-y-1 hover:border-[#0f8f5b]/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0f8f5b]"
              aria-label="Ver video de cómo funciona Croak en YouTube"
            >
              <Play className="h-5 w-5 text-[#0f8f5b]" aria-hidden="true" />
              Ver demo
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-3 overflow-hidden rounded-2xl border border-[#0c4f36]/12 bg-white/68 shadow-[0_22px_70px_rgba(19,88,59,0.12)] backdrop-blur-xl">
            {heroMetrics.map((metric) => (
              <div key={metric.label} className="border-r border-[#0c4f36]/10 p-4 last:border-r-0 sm:p-5">
                <p className="text-2xl font-black text-[#07110d] sm:text-3xl">{metric.value}</p>
                <p className="mt-1 text-sm font-black text-[#0f8f5b]">{metric.label}</p>
                <p className="mt-1 text-xs leading-5 text-[#254235]/62">{metric.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 max-w-2xl overflow-hidden rounded-full border border-[#0c4f36]/10 bg-white/62 py-3 shadow-[0_18px_44px_rgba(19,88,59,0.09)] backdrop-blur-xl">
            <div className="croak-signal-track flex w-max items-center gap-3">
              {[...heroSignals, ...heroSignals].map((signal, index) => (
                <span key={`${signal}-${index}`} className="rounded-full bg-[#e8fff0] px-4 py-2 text-xs font-black uppercase text-[#0c6a45]">
                  {signal}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="croak-reveal croak-reveal-delay relative min-h-[520px] overflow-visible">
          <div className="croak-scan-line" aria-hidden="true" />
          <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0f8f5b]/18 bg-white/25 shadow-[inset_0_0_90px_rgba(105,221,153,0.16)]" aria-hidden="true" />
          <div className="absolute left-[8%] top-[18%] hidden items-center gap-3 rounded-full border border-[#0c4f36]/12 bg-white/72 px-4 py-3 text-sm font-black text-[#254235]/74 shadow-[0_18px_40px_rgba(19,88,59,0.12)] backdrop-blur-xl lg:flex">
            <Gauge className="h-5 w-5 text-[#0f8f5b]" aria-hidden="true" />
            Lectura continua
          </div>
          <div className="absolute bottom-[18%] right-[5%] hidden items-center gap-3 rounded-full border border-[#0c4f36]/12 bg-white/72 px-4 py-3 text-sm font-black text-[#254235]/74 shadow-[0_18px_40px_rgba(19,88,59,0.12)] backdrop-blur-xl lg:flex">
            Alertas al celular
            <ShieldCheck className="h-5 w-5 text-[#0f8f5b]" aria-hidden="true" />
          </div>

          <img
            src={croakHero}
            alt="Dispositivo Croak verde y azul para monitorear la calidad del agua"
            className="croak-device-float relative z-10 mx-auto h-auto w-full max-w-[660px] object-contain drop-shadow-[0_44px_70px_rgba(19,88,59,0.25)]"
          />

          <div className="absolute bottom-8 left-0 right-0 z-20 mx-auto grid w-[min(92%,720px)] grid-cols-3 overflow-hidden rounded-2xl border border-[#0c4f36]/12 bg-white/78 text-[#07110d] shadow-[0_28px_80px_rgba(19,88,59,0.18)] backdrop-blur-2xl">
            <div className="border-r border-[#0c4f36]/10 p-4 transition-colors hover:bg-[#e9fff1]">
              <Droplets className="mb-3 h-5 w-5 text-[#0f8f5b]" aria-hidden="true" />
              <p className="text-sm font-black">Agua segura</p>
              <p className="mt-1 text-xs text-[#254235]/58">Estado claro</p>
            </div>
            <div className="border-r border-[#0c4f36]/10 p-4 transition-colors hover:bg-[#e9fff1]">
              <Waves className="mb-3 h-5 w-5 text-[#1586a8]" aria-hidden="true" />
              <p className="text-sm font-black">Flujo activo</p>
              <p className="mt-1 text-xs text-[#254235]/58">Sin interrupción</p>
            </div>
            <div className="p-4 transition-colors hover:bg-[#e9fff1]">
              <ShieldCheck className="mb-3 h-5 w-5 text-[#0f8f5b]" aria-hidden="true" />
              <p className="text-sm font-black">24/7</p>
              <p className="mt-1 text-xs text-[#254235]/58">Vigilancia diaria</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
