import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

export default function FormularioResena() {
  const [estrellas, setEstrellas] = useState(5);
  const [hover, setHover] = useState(0);

  const handleGoogleReview = (e) => {
    e.preventDefault();
    window.open("https://g.page/r/CSfg4B6u0ql_EBM/review", "_blank");
  };

  return (
    <section className="py-20 bg-stone-900">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-stone-400 mb-3 block">
            Tu opinión importa
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            ¿Has trabajado con nosotros? <span className="text-green-400">Déjanos tu reseña</span>
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleGoogleReview}
          className="bg-stone-800 rounded-2xl p-6 md:p-8 space-y-5 text-center"
        >
          <div>
            <label className="text-stone-300 text-sm font-medium mb-2 block">Valora tu experiencia</label>
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map(n => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setEstrellas(n)}
                  onMouseEnter={() => setHover(n)}
                  onMouseLeave={() => setHover(0)}
                  className="transition-transform hover:scale-110 focus:outline-none"
                  aria-label={`Valorar con ${n} estrella${n > 1 ? 's' : ''}`}
                >
                  <Star
                    className={`w-10 h-10 transition-colors ${
                      n <= (hover || estrellas)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-stone-600"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <p className="text-stone-400 text-sm max-w-md mx-auto">
            Haz clic en el botón de abajo para dejarnos tu valoración directamente en nuestro perfil oficial de Google y ayudarnos a crecer en Bizkaia.
          </p>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg text-base"
          >
            <ExternalLink className="w-5 h-5" />
            Escribir reseña en Google
          </button>
        </motion.form>
      </div>
    </section>
  );
}
