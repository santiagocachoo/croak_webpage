import { ArrowRight, ArrowUpRight, BarChart3, Bell, BellRing, CheckCircle2, Eye, LockKeyhole, Play, Rotate3d, ShieldAlert } from "lucide-react";
import { useRef, useState } from "react";
import { FAQ } from "@/app/components/FAQ";
import { FinalCTA } from "@/app/components/FinalCTA";
import { Footer } from "@/app/components/Footer";
import { loadModelViewer, Model3DViewer } from "@/app/components/Model3DViewer";
import { Navbar } from "@/app/components/Navbar";
import croakHero from "@/assets/croak_hero.webp";
import croakModelExploded from "@/assets/croak_model_exploded.webp";
import previewApp from "@/assets/preview_app.webp";
import { useStagger } from "@/hooks/useStagger";

const metrics = [
  { value: "7.0", unit: "", label: "pH" },
  { value: "2.9", unit: "NTU", label: "Turbidez" },
  { value: "179", unit: "ppm", label: "TDS" },
];

const problems = [
  {
    icon: Eye,
    title: "Cambios invisibles",
    text: "El agua puede verse limpia mientras pH, turbidez o TDS se mueven fuera de lo normal.",
  },
  {
    icon: ShieldAlert,
    title: "Detección tardía",
    text: "Sin lecturas frecuentes, el problema se nota hasta que cambian el sabor, el olor o la presión.",
  },
  {
    icon: Bell,
    title: "Alertas precisas",
    text: "Cuando un valor sale de rango, Croak indica qué cambió y cuánto.",
  },
];

const steps = [
  { title: "El agua pasa por Croak", text: "Se conecta a la línea de agua y mide mientras el agua circula." },
  { title: "Los sensores leen la señal", text: "pH, turbidez y TDS, de forma continua." },
  { title: "Las lecturas llegan a la app", text: "Valor actual, historial y rango normal de cada sensor." },
  { title: "Te avisa si algo cambia", text: "Una notificación con el valor y la hora del cambio." },
];

const appFeatures = [
  { icon: CheckCircle2, title: "Estado general", text: "Una lectura principal indica si todo está normal o si algo requiere revisión." },
  { icon: BarChart3, title: "Historial", text: "Cómo han cambiado el pH, la turbidez y el TDS durante el día o la semana." },
  { icon: BellRing, title: "Alertas", text: "Solo cuando una lectura sale del rango normal, no por cada pequeña variación." },
  { icon: LockKeyhole, title: "Control de válvula (en desarrollo)", text: "Estamos desarrollando una válvula para cerrar el paso del agua desde la app; en el prototipo de la app ya puedes ver cómo funcionaría." },
];

const scrollToContact = () => {
  document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export function HomePage() {
  const problemsRef = useStagger(110);
  const stepsRef = useStagger<HTMLOListElement>(120);
  const [show3D, setShow3D] = useState(false);
  const open3DRef = useRef<HTMLButtonElement>(null);

  const close3D = () => {
    setShow3D(false);
    requestAnimationFrame(() => open3DRef.current?.focus({ preventScroll: true }));
  };

  // Empieza a descargar el visor en cuanto alguien muestra intención (hover, foco o toque).
  const warmUp3D = () => {
    loadModelViewer().catch(() => {});
  };

  return (
    <>
      <Navbar isLanding />
      <main className="bg-white text-[#0b1f15]">
        {/* Hero centrado */}
        <section id="product" className="px-5 pb-16 pt-36 sm:px-8 lg:px-12 lg:pt-44">
          <div className="mx-auto max-w-[1100px] text-center">
            <p className="croak-hero-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#0b7a4f]">
              Monitoreo de calidad del agua
            </p>
            <h1 className="croak-hero-2 mx-auto mt-6 max-w-4xl text-[3.2rem] font-extrabold leading-[0.98] tracking-tight sm:text-7xl lg:text-[6.5rem]">
              El estado de tu agua, <em className="italic text-[#16a36c]">siempre</em> visible.
            </h1>
            <p className="croak-hero-3 mx-auto mt-8 max-w-xl text-lg leading-relaxed text-[#436856] sm:text-xl">
              Monitoreo continuo de pH, turbidez y TDS. Croak te avisa en el momento en que algo cambia en tu agua.
            </p>
            <div className="croak-hero-4 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={scrollToContact}
                className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#0b1f15] px-7 py-4 font-bold text-white transition-[transform,background-color] duration-200 hover:bg-[#0b7a4f] active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b7a4f]"
              >
                Quiero saber más
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </button>
              <a
                href="https://youtu.be/5xsPYnQADno"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-bold text-[#0b1f15] transition-colors hover:text-[#0b7a4f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b7a4f]"
              >
                <Play className="h-4 w-4 text-[#16a36c]" aria-hidden="true" />
                Ver cómo funciona
              </a>
            </div>
          </div>

          <div className="croak-hero-img mx-auto mt-16 max-w-[820px] overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]">
            <img
              src={croakHero}
              alt="Dispositivo Croak para monitorear la calidad del agua"
              className="aspect-square w-full object-cover"
            />
          </div>
        </section>

        {/* Métricas a escala */}
        <section className="px-5 py-16 sm:px-8 lg:px-12">
          <div className="croak-scroll-reveal mx-auto grid max-w-[1240px] grid-cols-1 gap-y-12 sm:grid-cols-3">
            {metrics.map((m) => (
              <div key={m.label} className="border-l border-[#d8eee5] pl-6">
                <p className="font-data text-5xl font-medium tracking-tight text-[#0b1f15] sm:text-6xl">
                  {m.value}
                  {m.unit && <span className="ml-1.5 text-lg text-[#7ba38e] sm:text-xl">{m.unit}</span>}
                </p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#436856]">{m.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* El problema */}
        <section id="features" className="px-5 py-28 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1240px]">
            <p className="croak-scroll-reveal text-xs font-semibold uppercase tracking-[0.24em] text-[#0b7a4f]">El problema</p>
            <h2 className="croak-scroll-reveal mt-6 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[4rem]">
              Visualiza el estado de tu agua en segundos.
            </h2>
            <div ref={problemsRef} className="mt-20 grid gap-14 md:grid-cols-3 md:gap-10">
              {problems.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="croak-stagger-item">
                    <Icon className="h-6 w-6 text-[#16a36c]" aria-hidden="true" />
                    <h3 className="mt-6 text-2xl font-bold">{p.title}</h3>
                    <p className="mt-3 leading-relaxed text-[#436856]">{p.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* El dispositivo, a sangre */}
        <section className="bg-[#edf8f3] px-5 py-28 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1240px]">
            <div className="croak-scroll-reveal mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0b7a4f]">El prototipo</p>
              <h2 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[4rem]">
                Sensores y electrónica en un solo dispositivo.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[#436856]">
                Gíralo, acércate y separa sus piezas: la tubería, el electrodo de pH y los sensores de turbidez y TDS.
              </p>
            </div>
            <div className="relative mx-auto mt-16 w-full max-w-[1000px]">
              {show3D ? (
                <Model3DViewer onClose={close3D} aspectClassName="aspect-[6/5] sm:aspect-[16/10]" />
              ) : (
                <>
                  <img
                    src={croakModelExploded}
                    alt="Modelo 3D de Croak con componentes internos visibles"
                    loading="lazy"
                    decoding="async"
                    className="croak-scroll-float w-full rounded-[2rem] object-contain shadow-[0_30px_80px_rgba(11,122,79,0.12)]"
                  />
                  <button
                    ref={open3DRef}
                    type="button"
                    onClick={() => setShow3D(true)}
                    onPointerEnter={warmUp3D}
                    onFocus={warmUp3D}
                    onTouchStart={warmUp3D}
                    className="absolute bottom-5 left-1/2 z-10 inline-flex -translate-x-1/2 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#0b1f15] px-6 py-3.5 font-bold text-white shadow-[0_8px_24px_rgba(11,31,21,0.25)] transition-[transform,background-color] duration-200 hover:bg-[#0b7a4f] active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b7a4f]"
                  >
                    <Rotate3d className="h-4 w-4" aria-hidden="true" />
                    Explorar en 3D
                  </button>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Cómo funciona: línea de tiempo */}
        <section id="experience" className="px-5 py-28 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1240px]">
            <p className="croak-scroll-reveal text-xs font-semibold uppercase tracking-[0.24em] text-[#0b7a4f]">Cómo funciona</p>
            <h2 className="croak-scroll-reveal mt-6 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[4rem]">
              Del agua a tu celular en cuatro pasos.
            </h2>

            <ol ref={stepsRef} className="relative mt-20 grid gap-12 lg:grid-cols-4 lg:gap-8">
              <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-[#d8eee5] lg:left-0 lg:top-[7px] lg:h-px lg:w-full" aria-hidden="true" />
              {steps.map((step, i) => (
                <li key={step.title} className="croak-stagger-item relative pl-10 lg:pl-0 lg:pt-12">
                  <span className="absolute left-0 top-1 h-[15px] w-[15px] rounded-full border-[3px] border-white bg-[#16a36c] ring-1 ring-[#16a36c] lg:top-0" aria-hidden="true" />
                  <span className="font-data text-sm text-[#16a36c]">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-[#436856]">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* App, en oscuro */}
        <section id="how-it-works" className="bg-[#0b1f15] px-5 py-28 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-[1240px] items-center gap-16 lg:grid-cols-2">
            <div className="croak-scroll-reveal order-2 flex justify-center lg:order-1">
              <img
                src={previewApp}
                alt="Pantalla de inicio del prototipo de la app Croak"
                loading="lazy"
                decoding="async"
                className="w-full max-w-[340px] rounded-[2.4rem] shadow-[0_40px_120px_rgba(22,163,108,0.25)]"
              />
            </div>
            <div className="croak-scroll-reveal order-1 lg:order-2">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#5fd39f]">App Croak</p>
              <h2 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl">
                Toda la información de tu agua en una sola pantalla.
              </h2>
              <ul className="mt-12 divide-y divide-white/10 border-y border-white/10">
                {appFeatures.map((f) => {
                  const Icon = f.icon;
                  return (
                    <li key={f.title} className="flex gap-5 py-6">
                      <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#5fd39f]" aria-hidden="true" />
                      <div>
                        <h3 className="font-bold text-white">{f.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-white/60">{f.text}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <a
                href="https://fernandox89.github.io/app_croak/"
                target="_blank"
                rel="noreferrer"
                className="group mt-10 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-[#0b1f15] transition-[transform,background-color] duration-200 hover:bg-[#edf8f3] active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Explorar el prototipo de la app
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
