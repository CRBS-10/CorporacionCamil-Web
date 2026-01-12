import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const AboutHistory = () => {
  const { t } = useLanguage();

  return (
    // CAMBIO: 'bg-orange-50' da ese tono crema/anaranjado suave muy elegante
    <section className="py-20 bg-orange-50 overflow-hidden">
      <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Columna de Texto */}
              <div>
                  <h2 className="text-fluid-3xl font-heading font-bold text-gray-900 mb-6">
                    {t('our_history')}
                  </h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {t('our_history_text')}
                  </p>
                  
                  {/* Agregamos el segundo párrafo que configuramos antes para que no se vea corto */}
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {t('our_history_text_2')}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                      <Link to="/contact" className="btn-secondary text-center shadow-md hover:shadow-lg transition-all">
                        {t('btn_quote')}
                      </Link>
                      <Link to="/projects" className="bg-white border-2 border-primary text-primary px-6 py-3 rounded-md font-semibold hover:bg-primary hover:text-white transition-all text-center shadow-sm">
                        {t('btn_view_projects')}
                      </Link>
                  </div>
              </div>
              
              {/* Columna Imagen */}
              <div className="relative lg:ml-8">
                  {/* Decoración: Cuadro blanco detrás para contrastar con el fondo naranja */}
                  <div className="absolute -top-4 -left-4 w-full h-full bg-white rounded-lg shadow-sm border border-orange-100 -z-10"></div>
                  
                  <img 
                    src="/Images/Estetica/Equipo de trabajo/E2.jpg" 
                    alt="Equipo trabajando" 
                    className="w-full h-96 object-cover rounded-lg shadow-lg" 
                    onError={(e) => {e.target.src = 'https://via.placeholder.com/800x600'}}
                  />
              </div>
          </div>
      </div>
    </section>
  );
};

export default AboutHistory;