import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const AboutHistory = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                  <h2 className="text-fluid-3xl font-heading font-bold text-text-primary mb-6">
                    {t('our_history')}
                  </h2>
                  <p className="text-lg text-text-secondary mb-6">
                    {t('our_history_text')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                      <Link to="/contact" className="btn-secondary text-center">
                        {t('btn_quote')}
                      </Link>
                      <Link to="/projects" className="bg-transparent border-2 border-primary text-primary px-6 py-3 rounded-md font-semibold hover:bg-primary hover:text-white transition-all text-center">
                        {t('btn_view_projects')}
                      </Link>
                  </div>
              </div>
              
              <div className="relative">
                  <img 
                    src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800" 
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