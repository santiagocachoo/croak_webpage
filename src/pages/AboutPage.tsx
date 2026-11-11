import { ArrowLeft, Cpu, Droplets, Lightbulb, RadioTower, ShieldCheck, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/app/components/Footer";
import { Navbar } from "@/app/components/Navbar";
import croakModelSide from "@/assets/croak_model_side.webp";

const teamMembers = [
  {
    name: "Fernando Acosta",
    role: "Hardware",
    focus: "Sensores, integración física y prototipo.",
  },
  {
    name: "Jesus Corona",
    role: "Software / Producto",
    focus: "Flujo de usuario, decisiones de producto y conexión app.",
  },
  {
    name: "Rogelio Velez",
    role: "Software / App móvil",
    focus: "Experiencia móvil, alertas y lectura diaria.",
  },
  {
    name: "Santiago Cacho",
    role: "Software / Página web",
    focus: "Landing, narrativa visual y experiencia web.",
  },
];

const principles = [
  {
    icon: Droplets,
    title: "Claridad primero",
    text: "Presentamos cada lectura de forma que cualquier persona la entienda.",
  },
  {
    icon: RadioTower,
    title: "Lectura constante",
    text: "El valor está en observar tendencias y cambios, no solo en revisar una medición aislada.",
  },
  {
    icon: ShieldCheck,
    title: "Prevención práctica",
    text: "Las alertas deben llegar con contexto suficiente para tomar una decisión.",
  },
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[#ffffff] text-[#0b1f15]">
      <Navbar />

      <main>
        <section className="relative isolate overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="croak-reveal">
              <Link
                to="/"
                className="mb-8 inline-flex items-center gap-2 rounded-xl border border-[#d8eee5] bg-white/70 px-4 py-3 text-sm font-extrabold text-[#436856] shadow-[0_18px_44px_rgba(19,88,59,0.1)] backdrop-blur-xl transition-transform hover:-translate-y-1 hover:border-[#c4e8d4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b7a4f]"
                aria-label="Volver a la página principal de Croak"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Volver al inicio
              </Link>

              <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#0b7a4f]">Nosotros</p>
              <h1 className="mt-5 max-w-4xl text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                Un equipo de hardware y software enfocado en la calidad del agua.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#436856]">
                Somos un equipo que une hardware, software y producto para hacer visible la calidad del agua en casa. Croak nace como un sistema completo: sensores que leen, una app que explica y alertas que ayudan a reaccionar.
              </p>
            </div>

            <div className="croak-reveal croak-reveal-delay relative min-h-[460px]">
              <div className="absolute inset-10 rounded-full border border-[#c4e8d4] bg-white/25 shadow-[inset_0_0_90px_rgba(105,221,153,0.16)]" aria-hidden="true" />
              <img
                src={croakModelSide}
                alt="Vista lateral del modelo 3D de Croak"
                className="croak-device-float relative z-10 mx-auto w-full max-w-[620px] rounded-[1.7rem] border border-white/70 object-contain shadow-[0_44px_80px_rgba(19,88,59,0.2)]"
              />
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-white px-5 py-24 text-[#0b1f15] sm:px-8 lg:px-12">
          <div className="relative mx-auto max-w-[1440px]">
            <div className="croak-scroll-reveal grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#0b7a4f]">Equipo</p>
                <h2 className="mt-5 text-4xl font-extrabold leading-none tracking-tight sm:text-5xl">
                  El equipo detrás de Croak.
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {teamMembers.map((member) => (
                  <article
                    key={member.name}
                    className="croak-scroll-reveal rounded-2xl border border-[#d8eee5] bg-[#ffffff]/82 p-6 shadow-[0_24px_70px_rgba(19,88,59,0.1)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#c4e8d4] hover:shadow-[0_34px_90px_rgba(19,88,59,0.16)]"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0b7a4f] text-white">
                      <Users className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-extrabold">{member.name}</h3>
                    <p className="mt-2 font-extrabold text-[#0b7a4f]">{member.role}</p>
                    <p className="mt-4 leading-7 text-[#436856]">{member.focus}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#edf8f3] px-5 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1180px]">
            <div className="croak-scroll-reveal grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#0b7a4f]">Principios</p>
                <h2 className="mt-5 text-4xl font-extrabold leading-none tracking-tight sm:text-5xl">
                  Cómo diseñamos Croak.
                </h2>
              </div>

              <div className="divide-y divide-[#d8eee5] overflow-hidden rounded-3xl border border-[#d8eee5] bg-white/72 shadow-[0_26px_80px_rgba(19,88,59,0.12)] backdrop-blur-xl">
                {principles.map((principle) => {
                  const IconComponent = principle.icon;

                  return (
                    <div key={principle.title} className="group grid gap-5 p-6 transition-colors hover:bg-[#edf8f3] sm:grid-cols-[3rem_1fr]">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0b7a4f] text-white transition-transform group-hover:rotate-3 group-hover:scale-105">
                        <IconComponent className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-xl font-extrabold">{principle.title}</h3>
                        <p className="mt-2 leading-7 text-[#436856]">{principle.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="croak-scroll-reveal mt-16 grid overflow-hidden rounded-3xl border border-[#d8eee5] bg-white/72 shadow-[0_26px_80px_rgba(19,88,59,0.12)] backdrop-blur-xl lg:grid-cols-2">
              <div className="group border-b border-[#d8eee5] p-7 transition-colors hover:bg-[#edf8f3] lg:border-b-0 lg:border-r">
                <Cpu className="h-6 w-6 text-[#0b7a4f] transition-transform group-hover:-translate-y-1" aria-hidden="true" />
                <p className="mt-6 text-2xl font-extrabold">Hardware</p>
                <p className="mt-3 leading-7 text-[#436856]">
                  Un dispositivo compacto que integra sensores y válvula directamente en la línea de agua.
                </p>
              </div>
              <div className="group p-7 transition-colors hover:bg-[#edf8f3]">
                <Lightbulb className="h-6 w-6 text-[#16a36c] transition-transform group-hover:-translate-y-1" aria-hidden="true" />
                <p className="mt-6 text-2xl font-extrabold">Software</p>
                <p className="mt-3 leading-7 text-[#436856]">
                  Una app que muestra el estado general, el historial de cada sensor y el control de la válvula.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
