import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-[20px] bg-[#2D6A4F] flex items-center justify-center">
              <span className="text-2xl">🐸</span>
            </div>
            <span className="text-2xl font-bold text-[#2D6A4F] tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans' }}>
              Croak
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#product" className="text-gray-700 hover:text-[#2D6A4F] transition-colors">
              Product
            </a>
            <a href="#features" className="text-gray-700 hover:text-[#2D6A4F] transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-[#2D6A4F] transition-colors">
              How It Works
            </a>
            <a href="#faq" className="text-gray-700 hover:text-[#2D6A4F] transition-colors">
              FAQ
            </a>
            <button className="px-6 py-3 bg-[#2D6A4F] text-white rounded-[24px] hover:bg-[#245a41] transition-all hover:shadow-lg">
              Buy Now
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