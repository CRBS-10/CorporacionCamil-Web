import React from 'react';
import { useLanguage } from "../../context/LanguageContext";

const ServiceHero = ({ activeData, currentTheme }) => {
  const { language } = useLanguage();

  return (
    <section className="relative h-[55vh] flex items-center justify-center transition-all duration-700 overflow-hidden">
      <div className="absolute inset-0 z-0">
           <img 
             key={activeData.image} 
             src={activeData.image} 
             alt={activeData.title} 
             className="w-full h-full object-cover animate-fade-in"
           />
           <div className={`absolute inset-0 bg-gradient-to-r ${currentTheme.gradient} mix-blend-multiply opacity-90`}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center text-white animate-slide-up">
          <div className={`inline-block p-3 rounded-full border-2 border-white/30 mb-6 bg-white/10 backdrop-blur-sm`}>
             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 tracking-tight drop-shadow-lg">
              {activeData.title}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
              {activeData.description}
          </p>
      </div>
    </section>
  );
};

export default ServiceHero;