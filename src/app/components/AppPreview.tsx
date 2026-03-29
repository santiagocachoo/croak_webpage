import previewApp from "../../assets/preview_app.png"

export function AppPreview() {
  return (
    <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto" id="how-it-works">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: iPhone Mockup */}
        <div className="relative order-2 lg:order-1">
          <div className="relative mx-auto max-w-md">
            <img
              src={previewApp}
              alt="Vista previa real de la app Croak"
              className="w-full h-auto rounded-[56px] shadow-2xl"
            />
          </div>
        </div>


        {/* Right: Content */}
        <div className="space-y-6 order-1 lg:order-2">
          <div className="inline-block px-4 py-2 bg-[#1A759F]/10 rounded-[24px] text-[#1A759F] text-sm font-medium">
            Monitorea desde tu celular
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans' }}>
            Ve el estado de tu agua de un vistazo
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            La app de Croak convierte las lecturas de los sensores en un estado del agua claro y fácil de entender para que puedas revisarla en cualquier momento sin conocimientos técnicos.
          </p>

          <ul className="space-y-4">
            {[
              "Estado del agua claro desde tu celular",
              "Alertas cuando cambien las lecturas",
              "Seguimiento simple de tendencias con el tiempo",
              "Diseñada para el uso diario en casa"
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
          <div className="pt-4">
            <a
              href="https://fernandox89.github.io/app_croak/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#1A759F]/30 text-[#1A759F] rounded-[24px] bg-white/80 hover:bg-[#1A759F]/5 transition-all"
            >
              Ver simulación completa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
