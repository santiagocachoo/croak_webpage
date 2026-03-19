import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How does Croak monitor water quality?",
    answer: "Croak uses built-in sensors to continuously track key water quality indicators including pH levels, temperature, and turbidity (NTU). The device monitors your water 24/7 and sends real-time updates to the mobile app."
  },
  {
    question: "How do I install Croak?",
    answer: "Croak is designed for easy installation. Simply attach it to your water line following the included instructions. The device connects to your home WiFi network and pairs with the mobile app in minutes. No professional installation required."
  },
  {
    question: "Will I receive alerts if something changes?",
    answer: "Yes. When water quality readings move outside expected ranges, Croak sends instant notifications to your phone so you can respond quickly. You can customize alert thresholds in the app."
  },
  {
    question: "What do I need to use Croak?",
    answer: "You need a WiFi connection and a smartphone (iOS or Android) to use the Croak app. The device itself requires a standard power outlet and access to your home's water line."
  },
  {
    question: "How accurate is the monitoring?",
    answer: "Croak uses calibrated sensors designed for continuous residential water monitoring. While not a replacement for professional lab testing, it provides reliable tracking of daily water quality changes in your home."
  },
  {
    question: "What's included with purchase?",
    answer: "Your Croak purchase includes the monitoring device, power adapter, installation hardware, quick start guide, and free access to the mobile app. A one-year warranty is included."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 lg:px-8 max-w-4xl mx-auto" id="faq">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 bg-[#2D6A4F]/10 rounded-[24px] text-[#2D6A4F] text-sm font-medium mb-6">
          FAQ
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans' }}>
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600">
          Everything you need to know about Croak water monitoring.
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
        <p className="text-gray-600 mb-4">Still have questions?</p>
        <a href="#" className="text-[#2D6A4F] font-semibold hover:text-[#245a41] transition-colors">
          Contact Support →
        </a>
      </div>
    </section>
  );
}
