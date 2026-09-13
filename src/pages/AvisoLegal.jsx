import React from "react";
import { Link } from "react-router-dom";

export default function AvisoLegal() {
  return (
    <div className="min-h-screen bg-stone-900 text-stone-300 py-16 px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <Link to="/" className="text-green-400 hover:underline text-sm font-medium mb-4 inline-block">
            ← Volver al inicio
          </Link>
          <h1 className="text-3xl font-bold text-white mb-2">Aviso Legal</h1>
          <p className="text-sm text-stone-400">Última actualización: Septiembre de 2026</p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">1. Datos Identificativos</h2>
          <p>
            En cumplimiento con el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se exponen los datos identificativos del titular:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Actividad:</strong> Servicios de Jardinería</li>
            <li><strong>Titular:</strong> Trabajador Autónomo (UZG Jardinería)</li>
            <li><strong>Correo electrónico de contacto:</strong> info@uzgjardineria.com</li>
            <li><strong>Sitio web:</strong> https://uzgjardineria.com</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">2. Objeto y Condiciones de Uso</h2>
          <p>
            El presente sitio web ha sido diseñado para ofrecer información sobre los servicios de jardinería prestados. El acceso y uso de este sitio web atribuye la condición de usuario, el cual acepta desde dicho acceso las condiciones de uso aquí reflejadas.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">3. Propiedad Intelectual e Industrial</h2>
          <p>
            Todos los contenidos del sitio web (textos, fotografías, gráficos, imágenes, tecnología, software, links y demás contenidos audiovisuales o sonoros, así como su diseño gráfico y códigos fuente) son propiedad intelectual del titular o de terceros, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos más allá de lo estrictamente necesario para el uso correcto de la web.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">4. Exclusión de Garantías y Responsabilidad</h2>
          <p>
            El titular no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
          </p>
        </section>
      </div>
    </div>
  );
}