import { Toaster } from "./components/ui/toaster";
import { queryClientInstance } from "./lib/query-client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from "./lib/AuthContext";
import UserNotRegisteredError from "./components/UserNotRegisteredError";
import Home from './pages/Home';
import { QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from 'react';

import AvisoLegal from './pages/AvisoLegal';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad';
import PoliticaCookies from './pages/PoliticaCookies';
import GaleriaFotos from './components/landing/GaleriaFotos';

// 1. Declaramos el componente de Elfsight fuera de todo, correctamente
export function AntesDespues() {
  useEffect(() => {
    if (!document.querySelector('script[src*="elfsightcdn.com"]')) {
      const script = document.createElement('script');
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section style={{ padding: '40px 20px', textAlign: 'center' }}>
      <h2>Transformaciones: Antes y Después</h2>
      
      {/* Widget Elfsight Slider */}
      <div 
        className="elfsight-app-fc083503-b1f4-4818-b9ac-6874970f2c0c" 
        data-elfsight-app-lazy 
      />
    </section>
  );
}

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-stone-900">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-green-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (authError && authError.type === 'user_not_registered') {
    return <UserNotRegisteredError />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/galeria" element={<GaleriaFotos />} />
      <Route path="/antes-despues" element={<AntesDespues />} /> {/* <--- Ruta opcional para probarlo */}
      <Route path="/aviso-legal" element={<AvisoLegal />} />
      <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
      <Route path="/politica-cookies" element={<PoliticaCookies />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;