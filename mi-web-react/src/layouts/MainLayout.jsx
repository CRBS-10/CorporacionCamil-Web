import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer integrado */}
      <footer className="bg-text-primary text-white py-12">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div className="flex items-center space-x-2 mb-4">
                        <img src="/Images/Logo.png" alt="Logo" className="h-8 w-auto bg-white rounded-full p-1" />
                        <span className="text-xl font-heading font-bold">Corporación CAMIL</span>
                    </div>
                    <p className="text-gray-300 mb-4">Construyendo sueños en realidad con calidad profesional.</p>
                </div>
                {/* Links del footer */}
                <div>
                  <h3 className="text-lg font-heading font-semibold mb-4">Empresa</h3>
                  <ul className="space-y-2">
                    <li><Link to="/about" className="text-gray-300 hover:text-secondary">Nosotros</Link></li>
                    <li><Link to="/projects" className="text-gray-300 hover:text-secondary">Proyectos</Link></li>
                    <li><Link to="/contact" className="text-gray-300 hover:text-secondary">Contacto</Link></li>
                  </ul>
                </div>
                {/* Puedes añadir más columnas aquí basándote en tu HTML original */}
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                <p className="text-gray-300">© 2025 Corporación CAMIL. Todos los Derechos Reservados.</p>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;