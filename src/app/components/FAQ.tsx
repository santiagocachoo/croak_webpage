import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "¿Cómo monitorea Croak la calidad del agua?",
    answer: "Croak usa sensores integrados para seguir de forma continua indicadores clave de la calidad del agua, incluyendo nivel de pH, turbidez y sólidos disueltos totales (TDS). El dispositivo monitorea tu agua 24/7 y envía actualizaciones en tiempo real a la app móvil.",
  },
  {
    question: "¿Ya puedo comprar Croak?",
    answer: "Todavía no. Croak es un prototipo funcional y aún no hay fecha de lanzamiento: ya mide pH, turbidez y TDS y envía las lecturas a la app. Si te interesa, escríbenos y te avisaremos cuando abramos las primeras pruebas.",
  },
  {
    question: "¿Cómo se instala Croak?",
    answer: "Croak va en línea con la tubería: el agua entra por un extremo, pasa frente a los sensores y sale por el otro. Después se conecta a tu red WiFi para enviar las lecturas a la app. Mientras sea prototipo, el equipo te acompaña en la instalación.",
  },
  {
    question: "¿Recibiré alertas si algo cambia?",
    answer: "Sí. Cuando las lecturas salen de los rangos esperados, Croak envía una notificación a tu celular para que puedas responder rápido. Puedes ajustar los umbrales de alerta desde la app.",
  },
  {
    question: "¿Qué necesito para usar Croak?",
    answer: "Una conexión WiFi, un celular para consultar la app y acceso a la línea de agua donde quieras instalarlo. El dispositivo también necesita alimentación eléctrica.",
  },
  {
    question: "¿Croak puede cerrar el paso del agua?",
    answer: "Todavía no. Estamos desarrollando una válvula para cortar el agua desde la app; en la simulación ya puedes ver cómo funcionaría, pero aún no forma parte del prototipo.",
  },
  {
    question: "¿Croak me dice si el agua es potable?",
    answer: "No. Croak usa sensores calibrados para seguir los cambios del día a día, pero pH, turbidez y TDS no detectan bacterias, metales pesados ni otros contaminantes. Te avisa cuando algo se sale de lo normal para que lo revises; para saber si el agua es apta para beber se necesita un análisis de laboratorio.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="relative bg-white px-5 py-24 text-[#0b1f15] sm:px-8 lg:px-12" id="faq">
      <div className="relative mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="croak-scroll-reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0b7a4f]">Preguntas frecuentes</p>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
            Lo que necesitas saber.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#436856]">
            Croak está pensado para monitoreo doméstico y lectura preventiva. No reemplaza un laboratorio certificado, pero sí te ayuda a detectar cambios cotidianos antes.
          </p>
          <a
            href="mailto:croakfernando@gmail.com"
            className="mt-8 inline-flex cursor-pointer rounded-2xl border border-[#d8eee5] bg-[#edf8f3] px-5 py-3 font-medium text-[#0b1f15] transition-all hover:border-[#c4e8d4] hover:text-[#0b7a4f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b7a4f]"
            aria-label="Contactar al equipo de Croak por correo"
          >
            Hablar con el equipo
          </a>
        </div>

        <div className="croak-scroll-reveal overflow-hidden rounded-2xl border border-[#d8eee5] bg-white shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="border-b border-[#d8eee5] last:border-b-0">
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className={`flex w-full cursor-pointer items-center justify-between gap-6 px-5 py-5 text-left transition-[background-color,transform] duration-200 hover:bg-[#edf8f3] active:bg-[#e5f5ee] focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#0b7a4f] sm:px-6 ${isOpen ? "bg-[#edf8f3]" : ""}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-semibold text-[#0b1f15]">{faq.question}</span>
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-[#d8eee5] bg-white text-[#0b7a4f] transition-colors">
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
                    <p className="px-5 pb-5 pt-4 text-sm leading-relaxed text-[#436856] sm:px-6">{faq.answer}</p>
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
