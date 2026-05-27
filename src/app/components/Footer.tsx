import { Github, Instagram, Youtube } from "lucide-react";
import { useNavigate } from "react-router-dom";
import croakLogo from "../../assets/croak_logo.png";

export function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="border-t border-[#d8eee5] bg-[#edf8f3] px-5 py-16 text-[#0b1f15] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 md:grid-cols-[1.4fr_0.8fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d8eee5] bg-white">
                <img src={croakLogo} alt="Logo de Croak" className="h-7 w-7 object-contain" />
              </span>
              <span className="text-xl font-bold tracking-tight text-[#0b1f15]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Croak</span>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#436856]">
              Hardware y app para que la calidad del agua deje de ser una suposición. Lecturas claras, alertas útiles y una experiencia pensada para revisarse diario.
            </p>
            <div className="mt-7 flex items-center gap-3">
              {[
                { href: "https://www.youtube.com/watch?v=5xsPYnQADno", Icon: Youtube, label: "Ver Croak en YouTube" },
                { href: "https://github.com/santiagocachoo/croak_webpage", Icon: Github, label: "Ver repositorio de Croak en GitHub" },
                { href: "https://www.instagram.com/croaksafe", Icon: Instagram, label: "Ver Instagram de Croak" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-[#d8eee5] bg-white text-[#436856] transition-all hover:border-[#c4e8d4] hover:text-[#0b7a4f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b7a4f]"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#0b7a4f]">Enlaces</h4>
            <ul className="space-y-3 text-sm text-[#436856]">
              <li>
                <button
                  type="button"
                  onClick={() => navigate("/nosotros")}
                  className="cursor-pointer transition-colors hover:text-[#0b1f15] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b7a4f]"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <a href="mailto:croakfernando@gmail.com?subject=Quiero%20Croak" className="cursor-pointer transition-colors hover:text-[#0b1f15]">
                  Quiero Croak
                </a>
              </li>
              <li>
                <a href="mailto:croakfernando@gmail.com" className="cursor-pointer transition-colors hover:text-[#0b1f15]">
                  Soporte
                </a>
              </li>
              <li>
                <a href="https://fernandox89.github.io/app_croak/" target="_blank" rel="noreferrer" className="cursor-pointer transition-colors hover:text-[#0b1f15]">
                  Demo app
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[#d8eee5] pt-8 text-xs text-[#7ba38e] md:flex-row md:items-center md:justify-between">
          <p>© 2026 Croak. Todos los derechos reservados.</p>
          <p>Monitoreo preventivo de calidad de agua.</p>
        </div>
      </div>
    </footer>
  );
}
