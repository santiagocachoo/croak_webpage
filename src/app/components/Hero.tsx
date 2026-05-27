import { ArrowRight, Play } from "lucide-react";
import { useEffect, useState } from "react";
import croakHero from "../../assets/croak_hero.png";

function useCountUp(target: number, duration = 1500, decimals = 0) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const start = performance.now();
    let rafId: number;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setValue(+(ease * target).toFixed(decimals));
      if (t < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [target, duration, decimals]);
  return value.toFixed(decimals);
}

const heroMetrics = [
  { label: "pH", target: 7.0, decimals: 1, detail: "Rango normal" },
  { label: "Turbidez", target: 2.9, decimals: 1, detail: "NTU en vivo" },
  { label: "TDS", target: 179, decimals: 0, detail: "ppm estable" },
];

function MetricCard({ metric, index, total }: { metric: (typeof heroMetrics)[0]; index: number; total: number }) {
  const value = useCountUp(metric.target, 1600, metric.decimals);
  return (
    <div className={`p-4 sm:p-5 ${index < total - 1 ? "border-r border-[#d8eee5]" : ""}`}>
      <p className="font-data text-2xl font-medium text-[#0b7a4f] sm:text-3xl">{value}</p>
      <p className="mt-1 text-sm font-semibold text-[#0b1f15]">{metric.label}</p>
      <p className="mt-0.5 text-xs text-[#7ba38e]">{metric.detail}</p>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="product"
      className="relative isolate min-h-screen overflow-hidden bg-white px-5 pb-20 pt-32 text-[#0b1f15] sm:px-8 lg:px-12"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_60%_40%,rgba(22,163,108,0.07)_0%,transparent_65%)]"
        aria-hidden="true"
      />

      <div className="croak-reveal mx-auto grid min-h-[calc(100svh-8rem)] w-full max-w-[1440px] items-center gap-12 lg:grid-cols-[1fr_1fr]">
        <div className="flex flex-col justify-center">
          <div className="mb-8 inline-flex w-fit items-center gap-2.5 rounded-full border border-[#c4e8d4] bg-[#e5f5ee] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#0b7a4f]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#16a36c]" aria-hidden="true" />
            Monitoreo inteligente de agua
          </div>

          <h1 className="max-w-xl text-[3.6rem] font-extrabold leading-[1.0] tracking-tight text-[#0b1f15] sm:text-7xl lg:text-[5rem]">
            El estado de tu agua,{" "}
            <em className="italic text-[#16a36c]">siempre</em>{" "}
            visible.
          </h1>

          <p className="mt-8 max-w-md text-lg leading-relaxed text-[#436856]">
            Croak convierte pH, turbidez y TDS en una respuesta directa: todo bien, o hay algo que atender.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:croakfernando@gmail.com?subject=Quiero%20Croak"
              className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#0b7a4f] px-6 py-4 font-bold text-white shadow-[0_4px_20px_rgba(11,122,79,0.30)] transition-all hover:bg-[#096941] hover:shadow-[0_8px_32px_rgba(11,122,79,0.40)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b7a4f]"
              aria-label="Solicitar información para comprar Croak por correo"
            >
              Comprar ahora
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="https://youtu.be/5xsPYnQADno"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-[#d8eee5] bg-white px-6 py-4 font-bold text-[#0b1f15] transition-all hover:border-[#c4e8d4] hover:bg-[#edf8f3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b7a4f]"
              aria-label="Ver video de cómo funciona Croak en YouTube"
            >
              <Play className="h-4 w-4 text-[#16a36c]" aria-hidden="true" />
              Ver cómo funciona
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 overflow-hidden rounded-2xl border border-[#d8eee5] bg-[#edf8f3] shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
            {heroMetrics.map((metric, i) => (
              <MetricCard key={metric.label} metric={metric} index={i} total={heroMetrics.length} />
            ))}
          </div>
        </div>

        <div className="croak-reveal-delay relative flex items-center justify-center">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_75%_at_50%_50%,rgba(22,163,108,0.10)_0%,transparent_70%)]"
            aria-hidden="true"
          />
          <img
            src={croakHero}
            alt="Dispositivo Croak para monitorear la calidad del agua"
            className="croak-device-float relative z-10 w-full max-w-[480px] object-contain drop-shadow-[0_40px_70px_rgba(11,122,79,0.15)] sm:max-w-[600px]"
          />
        </div>
      </div>
    </section>
  );
}
