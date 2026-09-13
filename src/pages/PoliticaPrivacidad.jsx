import React from "react";
import { Link } from "react-router-dom";

export default function PoliticaPrivacidad() {
  return (
    <div className="min-h-screen bg-stone-900 text-stone-300 py-16 px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <Link to="/" className="text-green-400 hover:underline text-sm font-medium mb-4 inline-block">
            ← Volver al inicio
          </Link>
          <h1 className="text-3xl font-bold text-white mb-2">Política de Privacidad</h1>
          <p className="text-sm text-stone-400">Última actualización: Septiembre de 2026</p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">1. Responsable del Tratamiento</h2>
          <p>
            De conformidad con el Reglamento General de Protección de Datos (RGPD UE 2016/679) y la Ley Orgánica 3/2018 (LOPDGDD), se informa al usuario que los datos personales que se recojan a través de esta web serán tratados por el titular autónomo de UZG Jardinería.
          </p>
          <p><strong>Contacto:</strong> info@uzgjardineria.com</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">2. Finalidad del Tratamiento de Datos</h2>
          <p>Los datos que nos facilites a través de los formularios de contacto o correo electrónico serán tratados con las siguientes finalidades:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Gestionar y dar respuesta a las solicitudes de presupuestos o consultas sobre servicios de jardinería.</li>
            <li>Mantener la relación comercial y de comunicación con los clientes.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">3. Legitimación</h2>
          <p>
            La base legal para el tratamiento de tus datos es el consentimiento explícito del usuario al rellenar y enviar formularios de contacto o solicitar información.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">4. Derechos de los Usuarios</h2>
          <p>
            Como usuario, tienes derecho a obtener confirmación sobre si estamos tratando tus datos personales, acceder a ellos, solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión. Puedes ejercer estos derechos enviando un correo electrónico a <strong>info@uzgjardineria.com</strong>.
          </p>
        </section>
      </div>
    </div>
  );
}