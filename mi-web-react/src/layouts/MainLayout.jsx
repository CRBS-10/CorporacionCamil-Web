import React from 'react';
import { Outlet } from 'react-router-dom';

// 1. IMPORTAR TUS COMPONENTES
import Navbar from '../components/Navbar';
import Footer from '../components/layout/Footer'; 

// 2. IMPORTAR SCROLLTOTOP (Asegúrate de que la ruta sea correcta)
import ScrollToTop from '../components/ScrollToTop';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 3. COLOCARLO AQUÍ ARRIBA */}
      {/* Al estar dentro del Layout, ya tiene acceso al Router y dejará de dar error */}
      <ScrollToTop />

      {/* Barra de Navegación Superior */}
      <Navbar />
      
      {/* Contenido Dinámico */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Pie de Página */}
      <Footer />
    </div>
  );
};

export default MainLayout;