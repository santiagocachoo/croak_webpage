import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "¿Cómo monitorea Croak la calidad del agua?",
    answer: "Croak usa sensores integrados para seguir de forma continua indicadores clave de la calidad del agua, incluyendo nivel de pH, temperatura y turbidez. El dispositivo monitorea tu agua 24/7 y envía actualizaciones en tiempo real a la app móvil.",
  },
  {
    question: "¿Cómo instalo Croak?",
    answer: "Croak está diseñado para una instalación sencilla. Solo conéctalo a tu línea de agua siguiendo las instrucciones incluidas. El dispositivo se conecta a tu red WiFi y se vincula con la app móvil en minutos. No se requiere instalación profesional.",
  },
  {
    question: "¿Recibiré alertas si algo cambia?",
    answer: "Sí. Cuando las lecturas de calidad del agua salen de los rangos esperados, Croak envía notificaciones al instante a tu celular para que puedas responder rápido. Puedes personalizar los umbrales de alerta desde la app.",
  },
  {
    question: "¿Qué necesito para usar Croak?",
    answer: "Necesitas una conexión WiFi y un smartphone con iOS o Android para usar la app de Croak. El dispositivo requiere una toma de corriente estándar y acceso a la línea de agua de tu hogar.",
  },
  {
    question: "¿Qué tan preciso es el monitoreo?",
    answer: "Croak utiliza sensores calibrados para el monitoreo continuo del agua en el hogar. Aunque no reemplaza un análisis profesional de laboratorio, ofrece un seguimiento confiable de los cambios diarios en la calidad del agua.",
  },
  {
    question: "¿Qué incluye la compra?",
    answer: "Tu compra de Croak incluye el dispositivo de monitoreo, adaptador de corriente, accesorios de instalación, guía de inicio rápido y acceso sin costo a la app móvil. También incluye un año de garantía.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="croak-noise relative bg-[#0a0f0c] px-5 py-24 text-[#e8f0ec] sm:px-8 lg:px-12" id="faq">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#f5f0e8] to-transparent"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="croak-scroll-reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#22c97e]">Preguntas frecuentes</p>
          <h2 className="mt-5 text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            Lo importante, sin letra chiquita.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#6b8c7a]">
            Croak está pensado para monitoreo doméstico y lectura preventiva. No reemplaza un laboratorio certificado, pero sí te ayuda a detectar cambios cotidianos antes.
          </p>
          <a
            href="mailto:croakfernando@gmail.com"
            className="mt-8 inline-flex rounded-xl border border-[#22c97e]/20 bg-[#111a14] px-5 py-3 font-medium text-[#e8f0ec] transition-all hover:border-[#22c97e]/40 hover:text-[#22c97e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22c97e]"
            aria-label="Contactar al equipo de Croak por correo"
          >
            Hablar con el equipo
          </a>
        </div>

        <div className="croak-scroll-reveal overflow-hidden rounded-2xl border border-[#22c97e]/10 bg-[#111a14]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="border-b border-[#22c97e]/8 last:border-b-0">
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className={`flex w-full items-center justify-between gap-6 px-5 py-5 text-left transition-colors duration-200 hover:bg-[#162019] focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#22c97e] sm:px-6 ${isOpen ? "bg-[#162019]" : ""}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-medium text-[#e8f0ec]">{faq.question}</span>
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-[#22c97e]/20 bg-[#0a0f0c] text-[#22c97e] transition-colors">
                    {isOpen ? (
                      <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                    ) : (
                      <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                    )}
                  </span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-[#6b8c7a] sm:px-6">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
