import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const HomeServices = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4 text-center">
          <h2 className="text-fluid-3xl font-heading font-bold text-text-primary mb-4">{t('home_services_title')}</h2>
          <p className="text-text-secondary mb-16 max-w-2xl mx-auto">{t('home_services_desc')}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* 1. Construcción */}
              <div className="card text-center group hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 text-primary">
                       <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-4">{language === 'es' ? 'Construcción General' : 'General Construction'}</h3>
                  <p className="text-text-secondary mb-6 text-sm">{language === 'es' ? 'Edificaciones, viviendas y naves industriales.' : 'Buildings, housing, and industrial warehouses.'}</p>
                  
                  {/* ENLACE CON ESTADO: Construcción */}
                  <Link 
                    to="/services" 
                    state={{ category: 'construccion' }} 
                    className="mt-auto text-accent font-semibold hover:text-accent-700 transition-colors"
                  >
                    {t('btn_learn_more')}
                  </Link>
              </div>

              {/* 2. Hidráulica */}
              <div className="card text-center group hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center">
                  <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mb-6 text-accent">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-4">{language === 'es' ? 'Hidráulica' : 'Hydraulics'}</h3>
                  <p className="text-text-secondary mb-6 text-sm">{language === 'es' ? 'Pozos, sistemas de riego y bombeo.' : 'Wells, irrigation and pumping systems.'}</p>
                  
                  {/* ENLACE CON ESTADO: Hidráulica */}
                  <Link 
                    to="/services" 
                    state={{ category: 'hidraulica' }}
                    className="mt-auto text-accent font-semibold hover:text-accent-700 transition-colors"
                  >
                    {t('btn_learn_more')}
                  </Link>
              </div>

             {/* 3. Eléctrica */}
              <div className="card text-center group hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center">
                  <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mb-6 text-secondary">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-4">{language === 'es' ? 'Eléctrica' : 'Electrical'}</h3>
                  <p className="text-text-secondary mb-6 text-sm">{language === 'es' ? 'Subestaciones y cableado industrial.' : 'Substations and industrial wiring.'}</p>
                  
                  {/* CORRECCIÓN AQUÍ: Cambiamos 'electrico' por 'electrica' */}
                  <Link 
                    to="/services" 
                    state={{ category: 'electrica' }} 
                    className="mt-auto text-accent font-semibold hover:text-accent-700 transition-colors"
                  >
                    {t('btn_learn_more')}
                  </Link>
              </div>

              {/* 4. Vial */}
              <div className="card text-center group hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 text-primary">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-4">{language === 'es' ? 'Vial' : 'Road Infrastructure'}</h3>
                  <p className="text-text-secondary mb-6 text-sm">{language === 'es' ? 'Carreteras y caminos rurales.' : 'Highways and rural roads.'}</p>
                  
                  {/* ENLACE CON ESTADO: Vial */}
                  <Link 
                    to="/services" 
                    state={{ category: 'vial' }}
                    className="mt-auto text-accent font-semibold hover:text-accent-700 transition-colors"
                  >
                    {t('btn_learn_more')}
                  </Link>
              </div>
          </div>
      </div>
    </section>
  );
};

export default HomeServices;