import { Github, Instagram, Youtube } from "lucide-react";
import { useNavigate } from "react-router-dom";
import croakLogo from "../../assets/croak_logo.png";

export function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="border-t border-[#22c97e]/8 bg-[#0a0f0c] px-5 py-16 text-[#e8f0ec] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 md:grid-cols-[1.4fr_0.8fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#22c97e]/15 bg-[#111a14]">
                <img src={croakLogo} alt="Logo de Croak" className="h-7 w-7 object-contain" />
              </span>
              <span className="text-xl font-bold tracking-tight text-[#e8f0ec]">Croak</span>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#6b8c7a]">
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
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#22c97e]/12 bg-[#111a14] text-[#6b8c7a] transition-all hover:border-[#22c97e]/30 hover:text-[#22c97e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22c97e]"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#22c97e]">Enlaces</h4>
            <ul className="space-y-3 text-sm text-[#6b8c7a]">
              <li>
                <button
                  type="button"
                  onClick={() => navigate("/nosotros")}
                  className="transition-colors hover:text-[#e8f0ec] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22c97e]"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <a href="mailto:croakfernando@gmail.com?subject=Quiero%20Croak" className="transition-colors hover:text-[#e8f0ec]">
                  Quiero Croak
                </a>
              </li>
              <li>
                <a href="mailto:croakfernando@gmail.com" className="transition-colors hover:text-[#e8f0ec]">
                  Soporte
                </a>
              </li>
              <li>
                <a href="https://fernandox89.github.io/app_croak/" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#e8f0ec]">
                  Demo app
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[#22c97e]/8 pt-8 text-xs text-[#4a5e52] md:flex-row md:items-center md:justify-between">
          <p>© 2026 Croak. Todos los derechos reservados.</p>
          <p>Monitoreo preventivo de calidad de agua.</p>
        </div>
      </div>
    </footer>
  );
}
