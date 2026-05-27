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
          ? "border-b border-[#d8eee5] bg-white/96 shadow-[0_1px_12px_rgba(0,0,0,0.06)] backdrop-blur-md"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          <button
            type="button"
            onClick={handleLogoClick}
            className="group flex cursor-pointer items-center gap-3 rounded-lg text-left transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b7a4f]"
            aria-label="Ir al inicio de Croak"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d8eee5] bg-[#edf8f3] transition-all group-hover:border-[#c4e8d4]">
              <img src={croakLogo} alt="Logo de Croak" className="h-7 w-7 object-contain" />
            </span>
            <span className="text-xl font-bold tracking-tight text-[#0b1f15]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Croak</span>
          </button>

          <div className="hidden items-center gap-7 md:flex">
            <button
              type="button"
              onClick={handleAboutNavigation}
              className="cursor-pointer text-sm font-medium text-[#436856] transition-colors hover:text-[#0b1f15] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b7a4f]"
            >
              Nosotros
            </button>
            <button
              type="button"
              onClick={() => handleSectionNavigation("final-cta")}
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-[#0b7a4f] px-5 py-2.5 text-sm font-bold text-white shadow-[0_2px_12px_rgba(11,122,79,0.25)] transition-all hover:bg-[#096941] hover:shadow-[0_4px_20px_rgba(11,122,79,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b7a4f]"
            >
              Quiero Croak
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>

          <button
            type="button"
            onClick={handleMenuToggle}
            className="cursor-pointer rounded-xl border border-[#d8eee5] bg-[#edf8f3] p-2.5 text-[#0b1f15] transition-all hover:border-[#c4e8d4] md:hidden"
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
          className="border-t border-[#d8eee5] bg-white px-5 py-4 md:hidden"
        >
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={handleAboutNavigation}
              className="cursor-pointer rounded-xl px-3 py-3 text-left text-base font-medium text-[#436856] transition-colors hover:bg-[#edf8f3] hover:text-[#0b1f15] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b7a4f]"
            >
              Nosotros
            </button>
            <button
              type="button"
              onClick={() => handleSectionNavigation("final-cta")}
              className="mt-1 inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#0b7a4f] px-5 py-3 font-bold text-white"
            >
              Quiero Croak
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}

      <div
        className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-[#16a36c] to-[#0b7a4f] transition-transform duration-150"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      />
    </nav>
  );
}
