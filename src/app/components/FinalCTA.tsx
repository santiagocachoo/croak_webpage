import { ArrowRight, Mail, ShieldCheck } from "lucide-react";
import croakLogo from "../../assets/croak_logo.png";

export function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative overflow-hidden bg-[#0b7a4f] px-5 py-28 text-white sm:px-8 lg:px-12"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_110%,rgba(255,255,255,0.06)_0%,transparent_60%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(255,255,255,0.04)_0%,transparent_60%)]"
        aria-hidden="true"
      />

      <div className="croak-scroll-reveal relative mx-auto max-w-[860px] text-center">
        <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
          <img src={croakLogo} alt="Logo de Croak" className="h-10 w-10 object-contain" />
        </div>

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Listo para probarse</p>
        <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Lleva Croak a tu casa, laboratorio o demo.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/75">
          Escríbenos, agenda una demo y te ayudamos a revisar el caso de uso ideal para instalar Croak y validar las lecturas desde la app.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="mailto:croakfernando@gmail.com?subject=Quiero%20comprar%20Croak"
            className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-bold text-[#0b7a4f] shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all hover:bg-[#edf8f3] hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            aria-label="Enviar correo para comprar Croak"
          >
            Comprar ahora
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <a
            href="mailto:croakfernando@gmail.com?subject=Demo%20de%20Croak"
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-white/25 px-6 py-4 font-bold text-white transition-all hover:border-white/50 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            aria-label="Enviar correo para agendar una demo de Croak"
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
            Agendar demo
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2.5 text-sm text-white/65">
          <ShieldCheck className="h-4 w-4 flex-shrink-0 text-white/80" aria-hidden="true" />
          Monitoreo preventivo. Lecturas claras. Soporte directo del equipo.
        </div>
      </div>
    </section>
  );
}
