import { Github, Instagram, Youtube } from "lucide-react";
import { useNavigate } from "react-router-dom";
import croakLogo from "../../assets/croak_logo.png";

export function Footer() {
  const navigate = useNavigate();

  const handleAboutNavigation = () => {
    navigate("/nosotros");
  };

  return (
    <footer className="border-t border-[#0c4f36]/10 bg-[#fbfff8] px-5 py-16 text-[#07110d] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 md:grid-cols-[1.4fr_0.8fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#0c4f36]/10 bg-white shadow-[0_14px_34px_rgba(19,88,59,0.12)]">
                <img
                  src={croakLogo}
                  alt="Logo de Croak"
                  className="h-9 w-9 object-contain"
                />
              </span>
              <span className="text-2xl font-black text-[#07110d]">
                Croak
              </span>
            </div>
            <p className="max-w-md leading-7 text-[#254235]/66">
              Hardware y app para que la calidad del agua deje de ser una suposición. Lecturas claras, alertas útiles y una experiencia pensada para revisarse diario.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://www.youtube.com/watch?v=5xsPYnQADno"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#0c4f36]/10 bg-white text-[#254235]/70 shadow-[0_14px_34px_rgba(19,88,59,0.1)] transition-transform hover:-translate-y-1 hover:border-[#0f8f5b]/50 hover:text-[#0f8f5b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0f8f5b]"
                aria-label="Ver Croak en YouTube"
              >
                <Youtube className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/santiagocachoo/croak_webpage"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#0c4f36]/10 bg-white text-[#254235]/70 shadow-[0_14px_34px_rgba(19,88,59,0.1)] transition-transform hover:-translate-y-1 hover:border-[#0f8f5b]/50 hover:text-[#0f8f5b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0f8f5b]"
                aria-label="Ver repositorio de Croak en GitHub"
              >
                <Github className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/croaksafe"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#0c4f36]/10 bg-white text-[#254235]/70 shadow-[0_14px_34px_rgba(19,88,59,0.1)] transition-transform hover:-translate-y-1 hover:border-[#0f8f5b]/50 hover:text-[#0f8f5b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0f8f5b]"
                aria-label="Ver Instagram de Croak"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-black text-[#07110d]">Enlaces</h4>
            <ul className="space-y-3 text-[#254235]/66">
              <li>
                <button
                  type="button"
                  onClick={handleAboutNavigation}
                  className="text-left transition-colors hover:text-[#0f8f5b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0f8f5b]"
                >
                  Nosotros
                </button>
              </li>
              <li><a href="mailto:croakfernando@gmail.com?subject=Quiero%20Croak" className="transition-colors hover:text-[#0f8f5b]">Quiero Croak</a></li>
              <li><a href="mailto:croakfernando@gmail.com" className="transition-colors hover:text-[#0f8f5b]">Soporte</a></li>
              <li><a href="https://fernandox89.github.io/app_croak/" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#0f8f5b]">Demo app</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[#0c4f36]/10 pt-8 text-sm font-bold text-[#254235]/48 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 Croak. Todos los derechos reservados.
          </p>
          <p>Monitoreo preventivo de calidad de agua.</p>
        </div>
      </div>
    </footer>
  );
}
