import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const AboutHero = () => {
  const { t } = useLanguage();

  return (
    // Agregamos 'flex items-center' y 'min-h-[450px]' para darle altura y centrar verticalmente
    <section className="relative py-24 flex items-center min-h-[450px] bg-slate-900 overflow-hidden">
      
      {/* --- FONDO E IMAGEN --- */}
      <div className="absolute inset-0 z-0">
          <img 
            // Una imagen de arquitectura moderna que evoca crecimiento y solidez
            src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Arquitectura Corporativa" 
            className="w-full h-full object-cover scale-105" // Un ligero zoom (scale-105) da profundidad
          />
          {/* ✨ LA MAGIA: Overlay oscuro ✨ */}
          {/* Usamos un gris azulado muy oscuro (slate-900) al 75% de opacidad (/75) */}
          {/* 'mix-blend-multiply' ayuda a que la sombra se integre mejor con la foto */}
          <div className="absolute inset-0 bg-slate-900/75 mix-blend-multiply"></div>
      </div>

      {/* --- CONTENIDO DEL HERO --- */}
      {/* 'relative z-10' es crucial para que el texto quede SOBRE la imagen */}
      <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-fluid-4xl font-heading font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            {t('about_title')}
          </h1>
          {/* Usamos text-gray-100 (casi blanco) para el párrafo, para que no compita con el título */}
          <p className="text-fluid-xl text-gray-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            {t('about_desc')}
          </p>
      </div>
    </section>
  );
};

export default AboutHero;