import React, { createContext, useState, useContext } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Estado inicial: 'es' (Español)
  const [language, setLanguage] = useState('es');

  // Función para cambiar idioma
  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  // Función "t" (translate) que usaremos en los componentes
  // Ejemplo: t('nav_home') devolverá "Inicio" o "Home"
  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personalizado para usarlo fácil
export const useLanguage = () => useContext(LanguageContext);