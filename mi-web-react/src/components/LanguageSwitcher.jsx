import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, switchLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2 border border-gray-300 rounded-lg overflow-hidden">
      <button
        onClick={() => switchLanguage('es')}
        className={`px-3 py-1 text-sm font-semibold transition-colors ${
          language === 'es' 
            ? 'bg-primary text-white' 
            : 'bg-white text-text-secondary hover:bg-gray-100'
        }`}
      >
        ES
      </button>
      <button
        onClick={() => switchLanguage('en')}
        className={`px-3 py-1 text-sm font-semibold transition-colors ${
          language === 'en' 
            ? 'bg-primary text-white' 
            : 'bg-white text-text-secondary hover:bg-gray-100'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;