import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const HomeAbout = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Columna Texto */}
              <div>
                  <h2 className="text-fluid-3xl font-heading font-bold text-text-primary mb-6">{t('about_title')}</h2>
                  <p className="text-fluid-lg text-text-secondary mb-6 leading-relaxed">
                      {language === 'es' 
                        ? 'Desde el 30 de mayo de 2008, Corporación CAMIL se ha enfocado en proporcionar un servicio altamente competitivo y eficiente, basado en la ética profesional dentro de la Industria de la Construcción.'
                        : 'Since May 30, 2008, Corporación CAMIL has focused on providing highly competitive and efficient service, based on professional ethics within the Construction Industry.'}
                  </p>
                  
                  <div className="space-y-6 mb-8">
                        {/* Item 1 */}
                      <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mt-1 shrink-0">
                              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                          </div>
                          <div>
                              <h3 className="font-heading font-semibold text-text-primary text-lg">{language === 'es' ? 'Calidad Excepcional' : 'Exceptional Quality'}</h3>
                              <p className="text-text-secondary text-sm">{language === 'es' ? 'Cada proyecto se ejecuta con precisión.' : 'Each project is executed with precision.'}</p>
                          </div>
                      </div>
                      {/* Item 2 */}
                      <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mt-1 shrink-0">
                              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                          </div>
                          <div>
                              <h3 className="font-heading font-semibold text-text-primary text-lg">{language === 'es' ? 'Entrega Oportuna' : 'Timely Delivery'}</h3>
                              <p className="text-text-secondary text-sm">{language === 'es' ? 'Respetamos los plazos acordados.' : 'We respect agreed deadlines.'}</p>
                          </div>
                      </div>
                      {/* Item 3 */}
                      <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mt-1 shrink-0">
                              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                          </div>
                          <div>
                              <h3 className="font-heading font-semibold text-text-primary text-lg">{language === 'es' ? 'Satisfacción del Cliente' : 'Customer Satisfaction'}</h3>
                              <p className="text-text-secondary text-sm">{language === 'es' ? 'Su visión es nuestra prioridad.' : 'Your vision is our priority.'}</p>
                          </div>
                      </div>
                  </div>
                  
                  <Link to="/about" className="btn-primary">{language === 'es' ? 'Conocer Más Sobre Nosotros' : 'Learn More About Us'}</Link>
              </div>
              
              {/* Columna Imagen */}
              <div className="relative">
                  <img src="/Images/Electrico/Sub estacion/CE OLOF PALME/SubEstacion1.jfif" alt="Equipo CAMIL" className="w-full h-96 object-cover rounded-lg shadow-xl" 
                    onError={(e) => {e.target.src = 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg'}} />
                  <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-6 rounded-lg shadow-lg hidden md:block">
                      <div className="text-center">
                          <div className="text-3xl font-bold">15+</div>
                          <div className="text-sm">{language === 'es' ? 'Años de Experiencia' : 'Years of Experience'}</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
};

export default HomeAbout;