import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-text-primary text-white py-12">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Columna 1: Logo y descripción */}
                <div>
                    <div className="flex items-center space-x-2 mb-4">
                        <img src="/Images/Logo.png" alt="Logo" className="h-8 w-auto bg-white rounded-full p-1" />
                        <span className="text-xl font-heading font-bold">Corporación CAMIL</span>
                    </div>
                    <p className="text-gray-300 mb-4">
                        {/* Reutilizamos el subtítulo del hero para la descripción corta */}
                        {t('hero_subtitle')}
                    </p>
                </div>
                
                {/* Columna 2: Navegación */}
                <div>
                  <h3 className="text-lg font-heading font-semibold mb-4">Menu</h3>
                  <ul className="space-y-2">
                    <li><Link to="/about" className="text-gray-300 hover:text-secondary transition-colors">{t('nav_about')}</Link></li>
                    <li><Link to="/projects" className="text-gray-300 hover:text-secondary transition-colors">{t('nav_projects')}</Link></li>
                    <li><Link to="/services" className="text-gray-300 hover:text-secondary transition-colors">{t('nav_services')}</Link></li>
                    <li><Link to="/contact" className="text-gray-300 hover:text-secondary transition-colors">{t('nav_contact')}</Link></li>
                  </ul>
                </div>
                
                {/* Columna 3: Info */}
                <div>
                   <h3 className="text-lg font-heading font-semibold mb-4">Info</h3>
                   <ul className="space-y-2 text-gray-300">
                      <li>San Salvador, El Salvador</li>
                      <li>info@corporacioncamil.com</li>
                      <li>(503) 2XXX-XXXX</li>
                   </ul>
                </div>
                
                 {/* Columna 4: Legal / Extra */}
                 <div>
                   <h3 className="text-lg font-heading font-semibold mb-4">Legal</h3>
                   <ul className="space-y-2">
                      <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Privacidad</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Términos</a></li>
                   </ul>
                </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                <p className="text-gray-300">{t('footer_rights')}</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;