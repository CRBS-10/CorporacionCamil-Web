import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const getLinkClass = (path) => {
    const baseClass = "transition-colors duration-200 hover:text-primary";
    return location.pathname === path 
      ? `${baseClass} text-primary font-semibold` 
      : `${baseClass} text-text-secondary`;
  };

  return (
    <header className="sticky top-0 z-50 bg-surface shadow-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo (Este es ahora tu único enlace al Inicio) */}
          <Link to="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
            <img src="/Images/Logo.png" alt="Corporación CAMIL" className="h-16 w-auto" />
            <span className="hidden lg:block text-2xl font-heading font-bold text-primary">Corporación CAMIL</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {/* ENLACE "INICIO" ELIMINADO DE AQUÍ */}
            
            <Link to="/services" className={getLinkClass('/services')}>
              {t('nav_services')}
            </Link>
            
            <Link to="/projects" className={getLinkClass('/projects')}>
              {t('nav_projects')}
            </Link>
            
            <Link to="/about" className={getLinkClass('/about')}>
              {t('nav_about')}
            </Link>
            
            <Link to="/contact" className="btn-secondary py-2 px-4">
              {t('btn_contact_nav')}
            </Link>
            
            {/* Switcher de Idioma */}
            <div className="ml-4 pl-4 border-l border-gray-300">
                <LanguageSwitcher />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            aria-label="Toggle menu"
          >
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
             </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4 animate-fade-in">
            <div className="flex flex-col space-y-4 items-center">
              {/* ENLACE "INICIO" ELIMINADO TAMBIÉN DE AQUÍ */}
              
              <Link to="/services" onClick={() => setIsOpen(false)} className="text-text-secondary hover:text-primary font-medium">
                {t('nav_services')}
              </Link>
              
              <Link to="/projects" onClick={() => setIsOpen(false)} className="text-text-secondary hover:text-primary font-medium">
                {t('nav_projects')}
              </Link>
              
              <Link to="/about" onClick={() => setIsOpen(false)} className="text-text-secondary hover:text-primary font-medium">
                {t('nav_about')}
              </Link>
              
              <Link to="/contact" onClick={() => setIsOpen(false)} className="btn-secondary w-full text-center">
                {t('btn_contact_nav')}
              </Link>
              
              {/* Switcher en móvil */}
              <div className="pt-4">
                <LanguageSwitcher />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;