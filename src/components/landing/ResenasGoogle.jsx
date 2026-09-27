import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function ResenasGoogle() {
  useEffect(() => {
    // Verificamos si el script ya está cargado para evitar duplicados
    if (!document.getElementById("elfsight-platform-script")) {
      const script = document.createElement("script");
      script.id = "elfsight-platform-script";
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="py-24 md:py-32 bg-white border-t border-stone-100">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-1 text-amber-500 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-stone-900 leading-tight">
            Lo que opinan
            <span className="text-green-600"> nuestros clientes</span>
          </h2>
          <p className="text-stone-600 mt-4 max-w-xl mx-auto">
            Valoraciones reales en directo desde nuestro perfil de Google. Transparencia y confianza en cada trabajo en Bizkaia.
          </p>
        </motion.div>

        {/* Contenedor del widget de Elfsight */}
        <div className="w-full">
          <div className="elfsight-app-d8707d91-ce65-4dd2-a7ff-fb87c093035f" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>
  );
}