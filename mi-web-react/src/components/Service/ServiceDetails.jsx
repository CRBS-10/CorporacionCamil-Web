import React from 'react';
import { useLanguage } from "../../context/LanguageContext";

const ServiceDetails = ({ activeData, currentTheme }) => {
  const { language } = useLanguage();

  return (
    <div className="space-y-12 animate-fade-in">
       {/* Descripción Principal */}
       <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${currentTheme.main}`}>
              <span className={`w-2 h-8 rounded-full ${currentTheme.bg}`}></span>
              {language === 'es' ? 'Descripción del Servicio' : 'Service Description'}
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            {activeData.overview}
          </p>
       </div>

       {/* Grid de Puntos Clave */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
              <h4 className="text-gray-900 font-bold uppercase tracking-wider text-sm mb-6 border-b pb-4">
                  {language === 'es' ? 'Características' : 'Features'}
              </h4>
              <ul className="space-y-4">
                  {activeData.highlights.map((item, index) => (
                  <li key={index} className="flex items-center space-x-4 group">
                      <div className={`w-10 h-10 rounded-full ${currentTheme.bgLight} flex items-center justify-center ${currentTheme.main} group-hover:scale-110 transition-transform`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                  ))}
              </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col justify-center items-center text-center relative overflow-hidden">
              <div className={`absolute top-0 right-0 w-24 h-24 ${currentTheme.bg} opacity-5 rounded-bl-full`}></div>
              
              <h4 className="text-gray-400 font-bold uppercase tracking-wider text-xs mb-2">
                  {language === 'es' ? 'Tiempo Estimado' : 'Estimated Time'}
              </h4>
              <div className={`text-3xl font-bold mb-2 ${currentTheme.main}`}>
                  {activeData.timeline}
              </div>
              <p className="text-sm text-gray-500">
                  {language === 'es' ? 'Dependiendo del alcance' : 'Depending on scope'}
              </p>
          </div>
       </div>
    </div>
  );
};

export default ServiceDetails;