import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
// Ruta corregida para buscar los datos
import { serviceThemes, servicesDataEs, servicesDataEn } from '../data/services';

// Rutas corregidas para buscar los componentes en src/components/Service/
import ServiceHero from '../components/Service/ServiceHero';
import ServiceTabs from '../components/Service/ServiceTabs';
import ServiceDetails from '../components/Service/ServiceDetails';
import ServiceForm from '../components/Service/ServiceForm';

const Services = () => {
  const [activeTab, setActiveTab] = useState('construccion');
  const { language } = useLanguage();

  // Seleccionar datos según idioma
  const servicesData = language === 'es' ? servicesDataEs : servicesDataEn;
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