import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "¿Qué mide Croak?",
    answer: "Croak mide de forma continua cuatro indicadores de la calidad del agua: pH, turbidez, TDS (sólidos disueltos totales) y temperatura. Las lecturas se registran a lo largo del día para detectar cambios en el momento en que ocurren.",
  },
  {
    question: "¿En qué etapa está el proyecto?",
    answer: "El dispositivo es un prototipo funcional que ya mide y registra lecturas. La app está en etapa de diseño: puedes explorar el prototipo interactivo para ver cómo se mostrará la información.",
  },
  {
    question: "¿Cómo se verán las alertas?",
    answer: "La app está diseñada para notificarte cuando una lectura sale del rango normal, indicando qué indicador cambió, su valor y la hora del cambio.",
  },
  {
    question: "¿Reemplaza un análisis de laboratorio?",
    answer: "No. Croak está pensado para el seguimiento diario del agua en casa. Un análisis de laboratorio certificado sigue siendo la referencia para un diagnóstico completo; Croak te ayuda a detectar cambios entre un análisis y otro.",
  },
  {
    question: "¿Cuándo estará disponible?",
    answer: "Todavía no hay fecha de lanzamiento. Si quieres seguir el avance del proyecto o ver una demostración del prototipo, escríbenos.",
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
