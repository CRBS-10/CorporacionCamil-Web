import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
          <img 
            src="/Images/Estetica/Equipo de trabajo/E1.jfif" 
            alt="Sitio de construcción" 
            className="w-full h-full object-cover" 
            onError={(e) => {e.target.src = 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&w=1920'}}
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-fluid-4xl font-heading font-bold mb-6 animate-fade-in">
              {t('hero_title')}
          </h1>
          <p className="text-fluid-xl mb-8 max-w-2xl mx-auto animate-slide-up">
              {t('hero_subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link to="/contact" className="btn-secondary text-lg px-8 py-4 inline-block">
                  {t('btn_quote')}
              </Link>
              <Link to="/projects" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-text-primary transition-all duration-200 inline-block">
                  {t('btn_view_projects')}
              </Link>
          </div>
      </div>
    </section>
  );
};

export default Hero;