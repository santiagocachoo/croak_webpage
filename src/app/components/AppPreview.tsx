export function AppPreview() {
  return (
    <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto" id="how-it-works">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: iPhone Mockup */}
        <div className="relative order-2 lg:order-1">
          <div className="relative mx-auto max-w-sm">
            {/* iPhone Frame */}
            <div className="relative bg-white rounded-[52px] shadow-2xl p-3 border-8 border-gray-900">
              <div className="bg-gray-900 rounded-[44px] overflow-hidden">
                {/* Notch */}
                <div className="h-8 bg-gray-900 relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl"></div>
                </div>

                {/* App Screen Content */}
                <div className="bg-gradient-to-b from-[#F8FAFC] to-white px-6 pb-8 pt-4">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <p className="text-sm text-gray-500 mb-2">Your Water Status</p>
                    <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Plus Jakarta Sans' }}>All Clear</h3>
                  </div>

                  {/* Frog State Visualization */}
                  <div className="relative">
                    <div className="w-full aspect-square rounded-[32px] bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center mb-6 border-4 border-green-100">
                      {/* Happy Frog Face */}
                      <div className="text-center">
                        <div className="text-8xl mb-4">🐸</div>
                        <div className="w-16 h-2 bg-green-400 rounded-full mx-auto" title="Smile indicator"></div>
                      </div>
                    </div>

                    {/* Status Indicator */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white rounded-[20px] p-4 shadow-sm border border-gray-100">
                      <div className="text-xs text-gray-500 mb-1">pH Level</div>
                      <div className="text-lg font-bold text-[#2D6A4F]" style={{ fontFamily: 'Plus Jakarta Sans' }}>7.2</div>
                    </div>
                    <div className="bg-white rounded-[20px] p-4 shadow-sm border border-gray-100">
                      <div className="text-xs text-gray-500 mb-1">NTU</div>
                      <div className="text-lg font-bold text-[#2D6A4F]" style={{ fontFamily: 'Plus Jakarta Sans' }}>0.4</div>
                    </div>
                    <div className="bg-white rounded-[20px] p-4 shadow-sm border border-gray-100">
                      <div className="text-xs text-gray-500 mb-1">Temp</div>
                      <div className="text-lg font-bold text-[#2D6A4F]" style={{ fontFamily: 'Plus Jakarta Sans' }}>68°F</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Notification */}
            <div className="absolute -right-8 top-1/3 bg-white rounded-[24px] shadow-xl p-4 border border-gray-100 hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-lg">💧</span>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-500">Just now</div>
                  <div className="text-sm font-semibold text-gray-900">Water status updated</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="space-y-6 order-1 lg:order-2">
          <div className="inline-block px-4 py-2 bg-[#1A759F]/10 rounded-[24px] text-[#1A759F] text-sm font-medium">
            Monitor from Your Phone
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans' }}>
            See Your Water Status at a Glance
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            The Croak app turns sensor readings into a clear, simple water status so you can check your water anytime without needing technical knowledge.
          </p>

          <ul className="space-y-4">
            {[
              "Clear water status from your phone",
              "Alerts when readings change",
              "Simple trend tracking over time",
              "Designed for everyday home use"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#2D6A4F] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}