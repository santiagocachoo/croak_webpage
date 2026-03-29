import { Twitter, Linkedin, Instagram } from "lucide-react";
import croakLogo from "../../assets/croak_logo.png";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={croakLogo}
                alt="Logo de Croak"
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                Croak
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Monitoreo inteligente de la calidad del agua para el hogar. Sigue los cambios, revisa el estado y mantente informado desde tu celular.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#2D6A4F] flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#2D6A4F] flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#2D6A4F] flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4" style={{ fontFamily: 'Plus Jakarta Sans' }}>Producto</h4>
            <ul className="space-y-3">
              <li><a href="#product" className="hover:text-[#2D6A4F] transition-colors">Producto</a></li>
              <li><a href="#features" className="hover:text-[#2D6A4F] transition-colors">Características</a></li>
              <li><a href="#how-it-works" className="hover:text-[#2D6A4F] transition-colors">Cómo funciona</a></li>
              <li><a href="#faq" className="hover:text-[#2D6A4F] transition-colors">Preguntas frecuentes</a></li>
              <li><a href="#" className="hover:text-[#2D6A4F] transition-colors">Comprar ahora</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4" style={{ fontFamily: 'Plus Jakarta Sans' }}>Empresa</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-[#2D6A4F] transition-colors">Nosotros</a></li>
              <li><a href="#" className="hover:text-[#2D6A4F] transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-[#2D6A4F] transition-colors">Soporte</a></li>
              <li><a href="#" className="hover:text-[#2D6A4F] transition-colors">Política de privacidad</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2026 Croak Technologies, Inc. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-[#2D6A4F] transition-colors">Política de privacidad</a>
            <a href="#" className="hover:text-[#2D6A4F] transition-colors">Términos del servicio</a>
            <a href="#" className="hover:text-[#2D6A4F] transition-colors">Política de cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
