import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import SolutionSection from "../components/landing/SolutionSection";
import SobreMi from "../components/landing/SobreMi";
import FormularioResena from "../components/landing/FormularioResena";
import FinalCTA from "../components/landing/FinalCTA";
import Footer from "../components/landing/Footer";
import AdminPasswordModal from "../components/admin/AdminPasswordModal";
import AdminPanel from "../components/admin/AdminPanel";
import GaleriaFotos from "../components/landing/GaleriaFotos";
import FAQ from "../components/landing/FAQ";
import ResenasGoogle from "../components/landing/ResenasGoogle";

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

      {/* Sección de Servicios */}
      <div id="servicios">
        <SolutionSection />
      </div>

      {/* Sección Sobre Mí */}
      <div id="sobre-mi">
        <SobreMi />
      </div>

      {/* Sección de fotos */}
      <div id="fotos">
        <GaleriaFotos />
      </div>

      {/* NUEVA SECCIÓN: Antes y Después */}
      <div id="antes-despues" className="py-12 px-4 text-center bg-white">
        <h2 className="text-3xl font-bold mb-6 text-stone-800">Transformaciones: Antes y Después</h2>
        <div className="elfsight-app-fc083503-b1f4-4818-b9ac-6874970f2c0c" data-elfsight-app-lazy></div>
      </div>

      {/* Sección de Preguntas Frecuentes */}
      <div id="faq">
        <FAQ />
      </div>  

      {/* Sección de Reseñas */}
      <div id="resenas">
        <FormularioResena />
      </div>

      {/* Sección de Reseñas Google */}
      <div id="resenas-google">
        <ResenasGoogle />
      </div>  

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