import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "¿Cómo monitorea Croak la calidad del agua?",
    answer: "Croak usa sensores integrados para seguir de forma continua indicadores clave de la calidad del agua, incluyendo nivel de pH, temperatura y turbidez. El dispositivo monitorea tu agua 24/7 y envía actualizaciones en tiempo real a la app móvil."
  },
  {
    question: "¿Cómo instalo Croak?",
    answer: "Croak está diseñado para una instalación sencilla. Solo conéctalo a tu línea de agua siguiendo las instrucciones incluidas. El dispositivo se conecta a tu red WiFi y se vincula con la app móvil en minutos. No se requiere instalación profesional."
  },
  {
    question: "¿Recibiré alertas si algo cambia?",
    answer: "Sí. Cuando las lecturas de calidad del agua salen de los rangos esperados, Croak envía notificaciones al instante a tu celular para que puedas responder rápido. Puedes personalizar los umbrales de alerta desde la app."
  },
  {
    question: "¿Qué necesito para usar Croak?",
    answer: "Necesitas una conexión WiFi y un smartphone con iOS o Android para usar la app de Croak. El dispositivo requiere una toma de corriente estándar y acceso a la línea de agua de tu hogar."
  },
  {
    question: "¿Qué tan preciso es el monitoreo?",
    answer: "Croak utiliza sensores calibrados para el monitoreo continuo del agua en el hogar. Aunque no reemplaza un análisis profesional de laboratorio, ofrece un seguimiento confiable de los cambios diarios en la calidad del agua."
  },
  {
    question: "¿Qué incluye la compra?",
    answer: "Tu compra de Croak incluye el dispositivo de monitoreo, adaptador de corriente, accesorios de instalación, guía de inicio rápido y acceso sin costo a la app móvil. También incluye un año de garantía."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 lg:px-8 max-w-4xl mx-auto" id="faq">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 bg-[#2D6A4F]/10 rounded-[24px] text-[#2D6A4F] text-sm font-medium mb-6">
          Preguntas frecuentes
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans' }}>
          Preguntas frecuentes
        </h2>
        <p className="text-lg text-gray-600">
          Todo lo que necesitas saber sobre el monitoreo de agua con Croak.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-[24px] border border-gray-100 shadow-sm overflow-hidden transition-all hover:shadow-md"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-gray-900 pr-8" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                {faq.question}
              </span>
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center">
                {openIndex === index ? (
                  <Minus className="w-4 h-4 text-[#2D6A4F]" />
                ) : (
                  <Plus className="w-4 h-4 text-[#2D6A4F]" />
                )}
              </div>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">¿Todavía tienes dudas?</p>
        <a href="mailto:croakfernando@gmail.com" className="text-[#2D6A4F] font-semibold hover:text-[#245a41] transition-colors">
          Contactar soporte →
        </a>
      </div>
    </section>
  );
}
