import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";

const teamMembers = [
  {
    name: "Fernando Acosta",
    role: "Hardware",
  },
  {
    name: "Jesus Corona",
    role: "Software / Producto",
  },
  {
    name: "Rogelio Velez",
    role: "Software / App móvil",
  },
  {
    name: "Santiago Cacho",
    role: "Software / Pagina web",
  },
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <main className="pt-32 pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <section className="max-w-3xl mb-20">
          <div className="inline-block px-4 py-2 bg-[#1A759F]/10 rounded-[24px] text-[#1A759F] text-sm font-medium mb-6">
            Nosotros
          </div>

          <h1
            className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-6"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            El equipo detrás de Croak
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">
            Croak nace con la idea de hacer visible la calidad del agua en el hogar y en la comunidad,
            combinando hardware y software para que cualquier persona pueda entender mejor el agua que recibe.
          </p>
        </section>

        <section className="mb-20">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-[32px] p-8 shadow-lg border border-gray-100"
              >
                <div className="w-14 h-14 rounded-[20px] bg-[#2D6A4F]/10 mb-6 flex items-center justify-center">
                  <span className="text-xl">👤</span>
                </div>

                <h2
                  className="text-2xl font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                >
                  {member.name}
                </h2>

                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <a
            href="/#/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#2D6A4F] text-white rounded-[28px] hover:bg-[#245a41] transition-all hover:shadow-xl"
          >
            Volver al inicio
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
