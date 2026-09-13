import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import SolutionSection from "../components/landing/SolutionSection";
// Si tienes el archivo de reseñas creado en components/landing/ReviewsSection, descomenta la siguiente línea:
import ReviewsSection from "../components/landing/FormularioResena";
import FinalCTA from "../components/landing/FinalCTA";
import Footer from "../components/landing/Footer";
import AdminPasswordModal from "../components/admin/AdminPasswordModal";
import AdminPanel from "../components/admin/AdminPanel";

export default function Home() {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  const handleAdminSuccess = () => {
    setShowPasswordModal(false);
    setShowAdminPanel(true);
  };

  const handleAdminClose = () => {
    setShowAdminPanel(false);
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      
      {/* Sección Principal */}
      <HeroSection />

      {/* Sección de Servicios / Solución */}
      <div id="servicios">
        <SolutionSection />
      </div>

      {/* Sección de Reseñas (Descomenta la línea de arriba y esta si quieres que aparezca aquí) */}
      {/* <div id="reseñas">
        <ReviewsSection />
      </div> */}

      {/* Sección de Contacto Final */}
      <div id="contacto">
        <FinalCTA />
      </div>

      <Footer onAdminClick={() => setShowPasswordModal(true)} />

      <AnimatePresence>
        {showPasswordModal && (
          <AdminPasswordModal
            onSuccess={handleAdminSuccess}
            onClose={() => setShowPasswordModal(false)}
          />
        )}
        {showAdminPanel && (
          <AdminPanel onClose={handleAdminClose} />
        )}
      </AnimatePresence>
    </div>
  );
}
