import { ArrowRight, Mail, ShieldCheck } from "lucide-react";
import croakLogo from "../../assets/croak_logo.png";

export function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="croak-cta-field relative overflow-hidden px-5 py-24 text-[#07110d] sm:px-8 lg:px-12"
    >
      <div className="croak-scroll-reveal relative mx-auto grid max-w-[1180px] gap-10 rounded-[2rem] border border-[#0c4f36]/12 bg-white/72 p-7 shadow-[0_34px_100px_rgba(19,88,59,0.14)] backdrop-blur-2xl sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:p-12">
        <div>
          <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#0f8f5b]/18 bg-[#e8fff0] shadow-[0_18px_44px_rgba(19,88,59,0.12)]">
            <img
              src={croakLogo}
              alt="Logo de Croak"
              className="h-11 w-11 object-contain"
            />
          </div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#0f8f5b]">Listo para probarse</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-black leading-none tracking-tight sm:text-5xl lg:text-6xl">
            Lleva Croak a tu casa, laboratorio o demo.
          </h2>
        </div>

        <div>
          <p className="text-lg leading-8 text-[#254235]/76">
            El siguiente paso es simple: escríbenos, agenda una demo y te ayudamos a revisar el caso de uso ideal para instalar Croak y validar las lecturas desde la app.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:croakfernando@gmail.com?subject=Quiero%20comprar%20Croak"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#07110d] px-6 py-4 font-black text-white shadow-[0_22px_48px_rgba(7,17,13,0.18)] transition-transform hover:-translate-y-1 hover:bg-[#0f8f5b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0f8f5b]"
              aria-label="Enviar correo para comprar Croak"
            >
              Comprar ahora
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="mailto:croakfernando@gmail.com?subject=Demo%20de%20Croak"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#0c4f36]/14 bg-[#fbfff8] px-6 py-4 font-black text-[#07110d] shadow-[0_18px_44px_rgba(19,88,59,0.1)] transition-transform hover:-translate-y-1 hover:border-[#0f8f5b]/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0f8f5b]"
              aria-label="Enviar correo para agendar una demo de Croak"
            >
              <Mail className="h-5 w-5 text-[#0f8f5b]" aria-hidden="true" />
              Agendar demo
            </a>
          </div>

          <div className="mt-9 flex items-center gap-4 border-t border-[#0c4f36]/10 pt-6 text-sm font-bold text-[#254235]/62">
            <ShieldCheck className="h-5 w-5 text-[#0f8f5b]" aria-hidden="true" />
            Monitoreo preventivo. Lecturas claras. Soporte directo del equipo.
          </div>
        </div>
      </div>
    </section>
  );
}
