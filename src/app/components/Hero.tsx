import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-block px-4 py-2 bg-[#2D6A4F]/10 rounded-[24px] text-[#2D6A4F] text-sm font-medium">
            Now Available
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans' }}>
            Real-Time Water Quality Monitoring for Your Home
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">
            Croak is a smart water monitoring device that helps you track changes in your water and check its status from your phone in real time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-[#2D6A4F] text-white rounded-[28px] hover:bg-[#245a41] transition-all hover:shadow-xl flex items-center justify-center gap-2 group">
              Buy Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="px-8 py-4 border-2 border-[#1A759F] text-[#1A759F] rounded-[28px] hover:bg-[#1A759F]/5 transition-all flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              See How It Works
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center gap-8 pt-4">
            <div>
              <div className="text-2xl font-bold text-[#2D6A4F]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Real-Time</div>
              <div className="text-sm text-gray-500">Clear water updates</div>
            </div>
            <div className="h-12 w-px bg-gray-200"></div>
            <div>
              <div className="text-2xl font-bold text-[#2D6A4F]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Mobile</div>
              <div className="text-sm text-gray-500">Know when readings change</div>
            </div>
            <div className="h-12 w-px bg-gray-200"></div>
            <div>
              <div className="text-2xl font-bold text-[#2D6A4F]" style={{ fontFamily: 'Plus Jakarta Sans' }}>24/7</div>
              <div className="text-sm text-gray-500">Continuous tracking</div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl bg-gradient-to-br from-[#2D6A4F]/10 to-[#1A759F]/10 p-12">
            <img
              src="https://blocks.astratic.com/img/general-img-landscape.png"
              alt="Image placeholder"
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
                <div className="text-sm text-gray-500">Water Status</div>
                <div className="text-lg font-bold text-[#2D6A4F]" style={{ fontFamily: 'Plus Jakarta Sans' }}>Safe</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}