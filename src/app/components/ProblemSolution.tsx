import { Eye, Activity, Bell } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Cambios que no ves",
    description: "El agua puede verse normal incluso cuando indicadores importantes de calidad empiezan a cambiar.",
    color: "#2D6A4F",
  },
  {
    icon: Activity,
    title: "Monitoreo en vivo",
    description: "Sigue las condiciones del agua de forma continua desde el dispositivo y revisa las actualizaciones en la app.",
    color: "#1A759F",
  },
  {
    icon: Bell,
    title: "Alertas al instante",
    description: "Recibe notificaciones cuando las lecturas salgan de los rangos esperados para que puedas actuar a tiempo.",
    color: "#2D6A4F",
  },
];

export function ProblemSolution() {
  return (
    <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto" id="features">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-block px-4 py-2 bg-[#1A759F]/10 rounded-[24px] text-[#1A759F] text-sm font-medium mb-6">
          Por qué monitorear tu agua
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans' }}>
          Por qué importa monitorear el agua
        </h2>
        <p className="text-lg text-gray-600">
          El agua puede verse limpia y aun así cambiar de formas que no puedes detectar por tu cuenta. Croak te ayuda a monitorear indicadores clave y saber cuándo algo necesita tu atención.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-[32px] p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
            >
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-[24px] flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${feature.color}15` }}
              >
                <IconComponent className="w-8 h-8" style={{ color: feature.color }} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
