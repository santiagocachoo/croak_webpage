import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import croakLogo from "../../assets/croak_logo.png";

type NavbarProps = {
  isLanding?: boolean;
};

const landingLinks = [
  { label: "Producto", sectionId: "product" },
  { label: "Flujo", sectionId: "experience" },
  { label: "Señales", sectionId: "features" },
  { label: "App", sectionId: "how-it-works" },
  { label: "Preguntas", sectionId: "faq" },
];

export function Navbar({ isLanding = false }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScrollProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollableHeight <= 0) {
        setScrollProgress(0);
        return;
      }

      setScrollProgress(Math.min(window.scrollY / scrollableHeight, 1));
    };

    handleScrollProgress();
    window.addEventListener("scroll", handleScrollProgress, { passive: true });
    window.addEventListener("resize", handleScrollProgress);

    return () => {
      window.removeEventListener("scroll", handleScrollProgress);
      window.removeEventListener("resize", handleScrollProgress);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);

    if (!targetElement) {
      return;
    }

    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSectionNavigation = (sectionId: string) => {
    setIsMenuOpen(false);

    if (!isLanding || location.pathname !== "/") {
      navigate("/");
      window.setTimeout(() => scrollToSection(sectionId), 80);
      return;
    }

    scrollToSection(sectionId);
  };

  const handleLogoClick = () => {
    setIsMenuOpen(false);
    navigate("/");
    window.setTimeout(() => scrollToSection("product"), 80);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen((currentValue) => !currentValue);
  };

  const handleAboutNavigation = () => {
    setIsMenuOpen(false);
    navigate("/nosotros");
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[#0c4f36]/10 bg-[#fbfff8]/82 text-[#07110d] shadow-[0_12px_40px_rgba(19,88,59,0.08)] backdrop-blur-2xl">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          <button
            type="button"
            onClick={handleLogoClick}
            className="group flex items-center gap-3 rounded-lg text-left transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0f8f5b]"
            aria-label="Ir al inicio de Croak"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#0c4f36]/10 bg-white shadow-[0_14px_34px_rgba(19,88,59,0.12)] transition-transform group-hover:rotate-3">
              <img
                src={croakLogo}
                alt="Logo de Croak"
                className="h-9 w-9 object-contain"
              />
            </span>
            <span className="text-2xl font-black tracking-tight text-[#07110d]">
              Croak
            </span>
          </button>

          <div className="hidden items-center gap-5 lg:gap-7 md:flex">
            {landingLinks.map((link) => (
              <button
                key={link.sectionId}
                type="button"
                onClick={() => handleSectionNavigation(link.sectionId)}
                className="rounded-md text-sm font-bold text-[#254235]/70 transition-colors hover:text-[#0f8f5b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0f8f5b]"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={handleAboutNavigation}
              className="rounded-md text-sm font-bold text-[#254235]/70 transition-colors hover:text-[#0f8f5b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0f8f5b]"
            >
              Nosotros
            </button>
            <button
              type="button"
              onClick={() => handleSectionNavigation("final-cta")}
              className="inline-flex items-center gap-2 rounded-xl bg-[#07110d] px-5 py-3 text-sm font-black text-white shadow-[0_18px_40px_rgba(7,17,13,0.18)] transition-transform hover:-translate-y-0.5 hover:bg-[#0f8f5b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0f8f5b]"
            >
              Quiero Croak
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <button
            type="button"
            onClick={handleMenuToggle}
            className="rounded-xl border border-[#0c4f36]/12 bg-white p-3 text-[#07110d] shadow-[0_12px_28px_rgba(19,88,59,0.1)] transition-colors hover:border-[#0f8f5b]/50 md:hidden"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[#0c4f36]/10 bg-[#fbfff8]/96 px-5 py-5 shadow-2xl backdrop-blur-2xl md:hidden"
        >
          <div className="flex flex-col gap-2">
            {landingLinks.map((link) => (
              <button
                key={link.sectionId}
                type="button"
                onClick={() => handleSectionNavigation(link.sectionId)}
                className="rounded-xl px-3 py-3 text-left text-base font-bold text-[#254235]/78 transition-colors hover:bg-[#dffbea] hover:text-[#07110d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f8f5b]"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={handleAboutNavigation}
              className="rounded-xl px-3 py-3 text-left text-base font-bold text-[#254235]/78 transition-colors hover:bg-[#dffbea] hover:text-[#07110d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f8f5b]"
            >
              Nosotros
            </button>
            <button
              type="button"
              onClick={() => handleSectionNavigation("final-cta")}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#07110d] px-5 py-3 font-black text-white"
            >
              Quiero Croak
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}

      <div
        className="absolute bottom-0 left-0 h-[3px] w-full origin-left bg-gradient-to-r from-[#0f8f5b] via-[#75e7b0] to-[#1586a8] transition-transform duration-150"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      />
    </nav>
  );
}
