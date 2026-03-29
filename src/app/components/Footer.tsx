import { Twitter, Linkedin, Instagram, Youtube, Github } from "lucide-react";
import croakLogo from "../../assets/croak_logo.png";

type FooterProps = {
  isLanding?: boolean;
};

export function Footer({ isLanding = false }: FooterProps) {
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
              <a href="https://www.youtube.com/watch?v=FUGFZccrcwI" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#2D6A4F] flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://github.com/santiagocachoo/croak_webpage" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#2D6A4F] flex items-center justify-center transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/croaksafe?igsh=YXN3cGFyMWx0bnpm&utm_source=qr" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#2D6A4F] flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4" style={{ fontFamily: 'Plus Jakarta Sans' }}>Producto</h4>
            <ul className="space-y-3">
              <li><a href={isLanding ? "#product" : "/#/"} className="hover:text-[#2D6A4F] transition-colors">Producto</a></li>
              <li><a href={isLanding ? "#features" : "/#/"} className="hover:text-[#2D6A4F] transition-colors">Características</a></li>
              <li><a href={isLanding ? "#how-it-works" : "/#/"} className="hover:text-[#2D6A4F] transition-colors">Cómo funciona</a></li>
              <li><a href={isLanding ? "#faq" : "/#/"} className="hover:text-[#2D6A4F] transition-colors">Preguntas frecuentes</a></li>
              <li><span className="hover:text-[#2D6A4F] transition-colors">Comprar ahora</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4" style={{ fontFamily: 'Plus Jakarta Sans' }}>Empresa</h4>
            <ul className="space-y-3">
              <li><a href="/#/nosotros" className="hover:text-[#2D6A4F] transition-colors">Nosotros</a></li>
              <li><a href="mailto:croakfernando@gmail.com" className="hover:text-[#2D6A4F] transition-colors">Contacto</a></li>
              <li><a href="mailto:croakfernando@gmail.com" className="hover:text-[#2D6A4F] transition-colors">Soporte</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2026 Croak Technologies, Inc. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
