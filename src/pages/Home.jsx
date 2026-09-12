import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { base44 } from "@/api/base44Client";
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import SolutionSection from "../components/landing/SolutionSection";
import FinalCTA from "../components/landing/FinalCTA";
import Footer from "../components/landing/Footer";
import AdminPasswordModal from "../components/admin/AdminPasswordModal";
import AdminPanel from "../components/admin/AdminPanel";

export default function Home() {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  
  const [visibility, setVisibility] = useState({
    hero: true,
    solution: true,
    cta_final: true,
  });

  const loadVisibility = () => {
    if (!base44?.entities?.SectionVisibility) return;
    
    base44.entities.SectionVisibility.list()
      .then(items => {
        if (Array.isArray(items) && items.length > 0) {
          const map = {};
          items.forEach(i => { map[i.section_key] = i.visible !== false; });
          setVisibility(prev => ({ ...prev, ...map }));
        }
      })
      .catch(err => {
        console.warn("No se pudo cargar la visibilidad desde la API:", err);
      });
  };

  const isVisible = (key) => visibility[key] !== false;

  const handleAdminSuccess = () => {
    setShowPasswordModal(false);
    setShowAdminPanel(true);
    loadVisibility(); // Se carga únicamente cuando entras al panel de administración
  };

  const handleAdminClose = () => {
    setShowAdminPanel(false);
    loadVisibility(); // Se actualiza al cerrar el panel por si cambiaste algo
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      {isVisible("hero") && <HeroSection />}
      {isVisible("solution") && (
        <div id="servicios">
          <SolutionSection />
        </div>
      )}
      {isVisible("cta_final") && (
        <div id="contacto">
          <FinalCTA />
        </div>
      )}
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
