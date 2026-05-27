import { ArrowRight, Mail, ShieldCheck } from "lucide-react";
import croakLogo from "../../assets/croak_logo.png";

export function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative overflow-hidden bg-[#0d3d28] px-5 py-28 text-[#e8f0ec] sm:px-8 lg:px-12"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(34,201,126,0.14)_0%,transparent_60%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(34,201,126,0.08)_0%,transparent_60%)]"
        aria-hidden="true"
      />

      <div className="croak-scroll-reveal relative mx-auto max-w-[860px] text-center">
        <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-[#22c97e]/25 bg-[rgba(34,201,126,0.08)]">
          <img src={croakLogo} alt="Logo de Croak" className="h-10 w-10 object-contain" />
        </div>

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#22c97e]">Listo para probarse</p>
        <h2 className="mx-auto mt-5 max-w-2xl text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          Lleva Croak a tu casa, laboratorio o demo.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#a0c4b0]">
          Escríbenos, agenda una demo y te ayudamos a revisar el caso de uso ideal para instalar Croak y validar las lecturas desde la app.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="mailto:croakfernando@gmail.com?subject=Quiero%20comprar%20Croak"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#22c97e] px-6 py-4 font-bold text-[#0a0f0c] shadow-[0_0_50px_rgba(34,201,126,0.3)] transition-all hover:bg-[#1fb36e] hover:shadow-[0_0_70px_rgba(34,201,126,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22c97e]"
            aria-label="Enviar correo para comprar Croak"
          >
            Comprar ahora
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <a
            href="mailto:croakfernando@gmail.com?subject=Demo%20de%20Croak"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#e8f0ec]/20 px-6 py-4 font-bold text-[#e8f0ec] transition-all hover:border-[#22c97e]/40 hover:text-[#22c97e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22c97e]"
            aria-label="Enviar correo para agendar una demo de Croak"
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
            Agendar demo
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2.5 text-sm text-[#a0c4b0]">
          <ShieldCheck className="h-4 w-4 flex-shrink-0 text-[#22c97e]" aria-hidden="true" />
          Monitoreo preventivo. Lecturas claras. Soporte directo del equipo.
        </div>
      </div>
    </section>
  );
}
