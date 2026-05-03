import { ArrowLeft, Cpu, Droplets, Lightbulb, RadioTower, ShieldCheck, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/app/components/Footer";
import { Navbar } from "@/app/components/Navbar";
import croakHero from "@/assets/croak_hero.png";

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
    text: "Convertimos datos de agua en estados entendibles para personas reales.",
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
    <div className="min-h-screen bg-[#fbfff8] text-[#07110d]">
      <Navbar />

      <main>
        <section className="croak-hero-field relative isolate overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:px-12">
          <div className="croak-water-thread croak-water-thread-a" aria-hidden="true" />
          <div className="croak-water-thread croak-water-thread-b" aria-hidden="true" />

          <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="croak-reveal">
              <Link
                to="/"
                className="mb-8 inline-flex items-center gap-2 rounded-xl border border-[#0c4f36]/14 bg-white/70 px-4 py-3 text-sm font-black text-[#254235]/76 shadow-[0_18px_44px_rgba(19,88,59,0.1)] backdrop-blur-xl transition-transform hover:-translate-y-1 hover:border-[#0f8f5b]/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0f8f5b]"
                aria-label="Volver a la página principal de Croak"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Volver al inicio
              </Link>

              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#0f8f5b]">Nosotros</p>
              <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                Construimos Croak para que el agua deje de ser invisible.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#254235]/76">
                Somos un equipo que une hardware, software y producto para hacer visible la calidad del agua en casa. Croak nace como un sistema completo: sensores que leen, una app que explica y alertas que ayudan a reaccionar.
              </p>
            </div>

            <div className="croak-reveal croak-reveal-delay relative min-h-[460px]">
              <div className="absolute inset-10 rounded-full border border-[#0f8f5b]/18 bg-white/25 shadow-[inset_0_0_90px_rgba(105,221,153,0.16)]" aria-hidden="true" />
              <img
                src={croakHero}
                alt="Prototipo físico de Croak"
                className="croak-device-float relative z-10 mx-auto w-full max-w-[560px] object-contain drop-shadow-[0_44px_70px_rgba(19,88,59,0.25)]"
              />
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-white px-5 py-24 text-[#07110d] sm:px-8 lg:px-12">
          <div className="croak-dot-field absolute inset-0 opacity-70" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1440px]">
            <div className="croak-scroll-reveal grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.24em] text-[#0f8f5b]">Equipo</p>
                <h2 className="mt-5 text-4xl font-black leading-none tracking-tight sm:text-5xl">
                  Cuatro frentes, un solo producto.
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {teamMembers.map((member) => (
                  <article
                    key={member.name}
                    className="croak-scroll-reveal rounded-2xl border border-[#0c4f36]/10 bg-[#fbfff8]/82 p-6 shadow-[0_24px_70px_rgba(19,88,59,0.1)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#0f8f5b]/40 hover:shadow-[0_34px_90px_rgba(19,88,59,0.16)]"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#07110d] text-[#9dffd0]">
                      <Users className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-black">{member.name}</h3>
                    <p className="mt-2 font-black text-[#0f8f5b]">{member.role}</p>
                    <p className="mt-4 leading-7 text-[#254235]/76">{member.focus}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#ecfff3] px-5 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1180px]">
            <div className="croak-scroll-reveal grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.24em] text-[#0f8f5b]">Principios</p>
                <h2 className="mt-5 text-4xl font-black leading-none tracking-tight sm:text-5xl">
                  Tecnología que se entiende cuando importa.
                </h2>
              </div>

              <div className="divide-y divide-[#0c4f36]/10 overflow-hidden rounded-3xl border border-[#0c4f36]/12 bg-white/72 shadow-[0_26px_80px_rgba(19,88,59,0.12)] backdrop-blur-xl">
                {principles.map((principle) => {
                  const IconComponent = principle.icon;

                  return (
                    <div key={principle.title} className="group grid gap-5 p-6 transition-colors hover:bg-[#f7fffa] sm:grid-cols-[3rem_1fr]">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#07110d] text-[#9dffd0] transition-transform group-hover:rotate-3 group-hover:scale-105">
                        <IconComponent className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black">{principle.title}</h3>
                        <p className="mt-2 leading-7 text-[#254235]/68">{principle.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="croak-scroll-reveal mt-16 grid overflow-hidden rounded-3xl border border-[#0c4f36]/12 bg-white/72 shadow-[0_26px_80px_rgba(19,88,59,0.12)] backdrop-blur-xl lg:grid-cols-2">
              <div className="group border-b border-[#0c4f36]/10 p-7 transition-colors hover:bg-[#f7fffa] lg:border-b-0 lg:border-r">
                <Cpu className="h-6 w-6 text-[#0f8f5b] transition-transform group-hover:-translate-y-1" aria-hidden="true" />
                <p className="mt-6 text-2xl font-black">Hardware visible</p>
                <p className="mt-3 leading-7 text-[#254235]/68">
                  Croak no se esconde detrás de una app. El dispositivo físico comunica que el agua está siendo observada.
                </p>
              </div>
              <div className="group p-7 transition-colors hover:bg-[#f7fffa]">
                <Lightbulb className="h-6 w-6 text-[#1586a8] transition-transform group-hover:-translate-y-1" aria-hidden="true" />
                <p className="mt-6 text-2xl font-black">Software claro</p>
                <p className="mt-3 leading-7 text-[#254235]/68">
                  La app prioriza estado, tendencia y acción rápida para que cualquier persona pueda entender qué está pasando.
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
