import { Menu } from "lucide-react";
import croakLogo from "../../assets/croak_logo.png"

type NavbarProps = {
  isLanding?: boolean;
};

export function Navbar({ isLanding = false}: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="w-full px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={croakLogo}
              alt="Logo de Croak"
              className="w-10 h-10 object-contain"
            ></img>
            <span className="text-2xl font-bold text-[#2D6A4F] tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans' }}>
              Croak
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#product" className="text-gray-700 hover:text-[#2D6A4F] transition-colors">
              Producto
            </a>
            <a href="#features" className="text-gray-700 hover:text-[#2D6A4F] transition-colors">
              Características
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-[#2D6A4F] transition-colors">
              Cómo funciona
            </a>
            <a href="#faq" className="text-gray-700 hover:text-[#2D6A4F] transition-colors">
              Preguntas
            </a>
            <button type="button" className="px-6 py-3 bg-[#2D6A4F] text-white rounded-[24px] hover:bg-[#245a41] transition-all hover:shadow-lg">
              Comprar ahora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </nav>
  );
}
