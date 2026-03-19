import { Eye, Activity, Bell } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Changes You Can't See",
    description: "Water may appear normal even when important quality indicators begin to shift.",
    color: "#2D6A4F",
  },
  {
    icon: Activity,
    title: "Live Monitoring",
    description: "Track water conditions continuously through the device and view updates in the app.",
    color: "#1A759F",
  },
  {
    icon: Bell,
    title: "Instant Alerts",
    description: "Receive notifications when readings move outside expected ranges so you can respond quickly.",
    color: "#2D6A4F",
  },
];

export function ProblemSolution() {
  return (
    <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto" id="features">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-block px-4 py-2 bg-[#1A759F]/10 rounded-[24px] text-[#1A759F] text-sm font-medium mb-6">
          Why Monitor Water
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans' }}>
          Why Water Monitoring Matters
        </h2>
        <p className="text-lg text-gray-600">
          Water can look clean and still change in ways you cannot detect on your own. Croak helps you monitor key indicators and know when something needs your attention.
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