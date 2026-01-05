import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // 1. Importar useLocation
import { useLanguage } from '../context/LanguageContext';
import { serviceThemes, servicesDataEs, servicesDataEn } from '../data/services';

import ServiceHero from '../components/Service/ServiceHero';
import ServiceTabs from '../components/Service/ServiceTabs';
import ServiceDetails from '../components/Service/ServiceDetails';
import ServiceForm from '../components/Service/ServiceForm';

const Services = () => {
  // 2. Obtener la ubicación (donde viene el 'state')
  const location = useLocation();
  
  const [activeTab, setActiveTab] = useState('construccion');
  const { language } = useLanguage();

  // 3. Efecto para leer la categoría entrante
  useEffect(() => {
    // Si hay un estado y tiene categoría (ej: "vial"), cambiamos el tab
    if (location.state && location.state.category) {
      setActiveTab(location.state.category);
      // Opcional: Hacer scroll hacia arriba para que se vea el Hero
      window.scrollTo(0, 0);
    }
  }, [location]);

  // Seleccionar datos según idioma
  const servicesData = language === 'es' ? servicesDataEs : servicesDataEn;
  // Aseguramos que si activeTab falla, regrese a construccion
  const activeData = servicesData[activeTab] || servicesData.construccion;
  
  // Seleccionar tema de color
  const currentTheme = serviceThemes[activeTab] || serviceThemes.construccion;

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      
      {/* 1. HERO */}
      <ServiceHero 
        activeData={activeData} 
        currentTheme={currentTheme} 
      />

      {/* 2. TABS (NAVBAR DE FILTROS STICKY) */}
      <ServiceTabs 
        servicesData={servicesData}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        themeColors={serviceThemes}
      />

      {/* 3. CONTENIDO PRINCIPAL (Detalles + Formulario) */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Columna Izquierda (8 cols) */}
          <div className="lg:col-span-8">
            <ServiceDetails 
              activeData={activeData} 
              currentTheme={currentTheme} 
            />
          </div>

          {/* Columna Derecha (4 cols) */}
          <div className="lg:col-span-4">
            <ServiceForm 
              activeData={activeData} 
              currentTheme={currentTheme} 
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;