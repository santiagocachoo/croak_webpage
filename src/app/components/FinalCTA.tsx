import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-[#2D6A4F] to-[#1A759F] p-12 lg:p-16 shadow-2xl">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="text-6xl mb-6">🐸</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans' }}>
            Start Monitoring Your Water Today
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Order Croak today and start monitoring your water from your phone.
          </p>

          {/* CTA Button */}
          <button className="px-10 py-5 bg-white text-[#2D6A4F] rounded-[28px] hover:bg-gray-50 transition-all hover:shadow-xl flex items-center justify-center gap-2 group font-semibold text-lg mx-auto">
            Buy Now
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}