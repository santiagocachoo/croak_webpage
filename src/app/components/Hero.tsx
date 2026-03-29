import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section id="product" className="pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-block px-4 py-2 bg-[#2D6A4F]/10 rounded-[24px] text-[#2D6A4F] text-sm font-medium">
            Disponible ahora
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans' }}>
            Monitoreo de la calidad del agua en tiempo real para tu hogar
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">
            Croak es un dispositivo inteligente que te ayuda a monitorear cambios en tu agua y revisar su estado desde tu celular en tiempo real.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button type="button" className="px-8 py-4 bg-[#2D6A4F] text-white rounded-[28px] hover:bg-[#245a41] transition-all hover:shadow-xl flex items-center justify-center gap-2 group">
              Comprar ahora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a href="https://www.youtube.com/watch?v=FUGFZccrcwI" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border-2 border-[#1A759F] text-[#1A759F] rounded-[28px] hover:bg-[#1A759F]/5 transition-all flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              Ver cómo funciona
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center gap-8 pt-4">
            <div>
              <div className="text-2xl font-bold text-[#2D6A4F]" style={{ fontFamily: 'Plus Jakarta Sans' }}>En tiempo real</div>
              <div className="text-sm text-gray-500">Actualizaciones claras del agua</div>
            </div>
            <div className="h-12 w-px bg-gray-200"></div>
            <div>
              <div className="text-2xl font-bold text-[#2D6A4F]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Desde tu celular</div>
              <div className="text-sm text-gray-500">Entérate cuando cambien las lecturas</div>
            </div>
            <div className="h-12 w-px bg-gray-200"></div>
            <div>
              <div className="text-2xl font-bold text-[#2D6A4F]" style={{ fontFamily: 'Plus Jakarta Sans' }}>24/7</div>
              <div className="text-sm text-gray-500">Monitoreo continuo</div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl bg-gradient-to-br from-[#2D6A4F]/10 to-[#1A759F]/10 p-12">
            <img
              src="src/assets/croak_hero.png"
              alt="Dispositivo Croak para monitorear la calidad del agua"
              className="w-full h-auto"
            />
          </div>

          {/* Floating Stats Card */}
          <div className="absolute -bottom-6 -left-6 bg-white rounded-[24px] shadow-xl p-6 border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-[20px] bg-green-100 flex items-center justify-center">
                <span className="text-2xl">💧</span>
              </div>
              <div>
                <div className="text-sm text-gray-500">Estado del agua</div>
                <div className="text-lg font-bold text-[#2D6A4F]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Segura</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
