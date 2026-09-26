import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      pregunta: "¿En qué zonas de Bizkaia ofrecéis vuestros servicios?",
      respuesta: "Nos desplazamos por todo Bilbao, Getxo, Barakaldo y los principales municipios de Bizkaia y alrededores para cuidar y transformar vuestros espacios exteriores."
    },
    {
      pregunta: "¿Es necesario que esté en casa mientras realizáis el trabajo?",
      respuesta: "No es necesario. Siempre que podamos acceder al jardín de forma autónoma, nos encargamos de todo el trabajo duro y te dejamos el espacio impecable."
    },
    {
      pregunta: "¿Qué incluye exactamente el servicio de mantenimiento?",
      respuesta: "Incluye todo lo necesario para que te olvides de preocupaciones: poda estética de setos y arbustos, limpieza de hojas y malas hierbas, control de riego, abonado y cuidado continuo del césped y plantas."
    },
    {
      pregunta: "¿Cómo se solicita un presupuesto y cuánto tardáis en responder?",
      respuesta: "Es muy rápido y sin compromiso. Puedes escribirnos directamente por WhatsApp o rellenar nuestro formulario de contacto. Te responderemos en menos de 2 horas para concretar una visita para tu jardín."
    },
    {
      pregunta: "¿Hay que aportar las herramientas o los productos de abono?",
      respuesta: "De eso nos encargamos nosotros al 100%. Llevamos nuestra propia maquinaria profesional, herramientas y los productos necesarios para cada tratamiento."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 bg-stone-50 border-t border-stone-100">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
            <HelpCircle className="w-4 h-4" />
            Resolvemos tus dudas
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-stone-900 leading-tight">
            Preguntas
            <span className="text-green-600"> frecuentes</span>
          </h2>
          <p className="text-stone-600 mt-4 max-w-xl mx-auto">
            Todo lo que necesitas saber sobre nuestros servicios de jardinería en Bizkaia antes de dar el paso.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-2xl border border-stone-200/80 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="font-semibold text-stone-900 text-lg">
                    {faq.pregunta}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180 bg-green-50 text-green-600" : "text-stone-500"}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-stone-600 leading-relaxed border-t border-stone-100 pt-4">
                        {faq.respuesta}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}