import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import croakLogo from "../../assets/croak_logo.png";

type NavbarProps = {
  isLanding?: boolean;
};

export function Navbar({ isLanding = false }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) {
        setScrollProgress(0);
        setIsScrolled(false);
        return;
      }
      setScrollProgress(Math.min(window.scrollY / scrollableHeight, 1));
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
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

  const handleAboutNavigation = () => {
    setIsMenuOpen(false);
    navigate("/nosotros");
  };

  const handleMenuToggle = () => {
    setIsMenuOpen((v) => !v);
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-[#22c97e]/10 bg-[#0a0f0c]/95 shadow-[0_2px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl"
          : "bg-[#0a0f0c]/60 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          <button
            type="button"
            onClick={handleLogoClick}
            className="group flex items-center gap-3 rounded-lg text-left transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22c97e]"
            aria-label="Ir al inicio de Croak"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#22c97e]/15 bg-[#111a14] transition-all group-hover:border-[#22c97e]/30">
              <img src={croakLogo} alt="Logo de Croak" className="h-7 w-7 object-contain" />
            </span>
            <span className="text-xl font-bold tracking-tight text-[#e8f0ec]">Croak</span>
          </button>

          <div className="hidden items-center gap-7 md:flex">
            <button
              type="button"
              onClick={handleAboutNavigation}
              className="text-sm font-medium text-[#6b8c7a] transition-colors hover:text-[#e8f0ec] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22c97e]"
            >
              Nosotros
            </button>
            <button
              type="button"
              onClick={() => handleSectionNavigation("final-cta")}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#22c97e] px-5 py-2.5 text-sm font-bold text-[#0a0f0c] shadow-[0_0_30px_rgba(34,201,126,0.2)] transition-all hover:bg-[#1fb36e] hover:shadow-[0_0_44px_rgba(34,201,126,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22c97e]"
            >
              Quiero Croak
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>

          <button
            type="button"
            onClick={handleMenuToggle}
            className="rounded-xl border border-[#22c97e]/15 bg-[#111a14] p-2.5 text-[#e8f0ec] transition-all hover:border-[#22c97e]/30 md:hidden"
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
          className="border-t border-[#22c97e]/10 bg-[#0a0f0c]/98 px-5 py-4 backdrop-blur-2xl md:hidden"
        >
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={handleAboutNavigation}
              className="rounded-xl px-3 py-3 text-left text-base font-medium text-[#6b8c7a] transition-colors hover:bg-[#111a14] hover:text-[#e8f0ec] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22c97e]"
            >
              Nosotros
            </button>
            <button
              type="button"
              onClick={() => handleSectionNavigation("final-cta")}
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#22c97e] px-5 py-3 font-bold text-[#0a0f0c]"
            >
              Quiero Croak
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}

      <div
        className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-[#22c97e] via-[#1a87b0] to-[#22c97e]/40 transition-transform duration-150"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      />
    </nav>
  );
}
