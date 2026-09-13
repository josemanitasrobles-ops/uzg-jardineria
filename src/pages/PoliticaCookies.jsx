import React from "react";
import { Link } from "react-router-dom";

export default function PoliticaCookies() {
  return (
    <div className="min-h-screen bg-stone-900 text-stone-300 py-16 px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <Link to="/" className="text-green-400 hover:underline text-sm font-medium mb-4 inline-block">
            ← Volver al inicio
          </Link>
          <h1 className="text-3xl font-bold text-white mb-2">Política de Cookies</h1>
          <p className="text-sm text-stone-400">Última actualización: Septiembre de 2026</p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">1. ¿Qué son las cookies?</h2>
          <p>
            Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">2. Tipos de cookies utilizadas</h2>
          <p>Este sitio web utiliza exclusivamente cookies técnicas y funcionales estrictamente necesarias para el correcto funcionamiento de la página y la gestión de sesiones de usuario.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">3. Desactivación o eliminación de cookies</h2>
          <p>
            Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador (Chrome, Firefox, Safari, Edge, etc.).
          </p>
        </section>
      </div>
    </div>
  );
}