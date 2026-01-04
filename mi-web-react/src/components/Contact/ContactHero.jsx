import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const ContactHero = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50 text-center">
      <div className="container mx-auto px-4">
          <h1 className="text-4xl font-heading font-bold text-text-primary mb-4">
              {t('contact_title')}
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8">
              {t('contact_subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+50322223333" className="btn-secondary flex items-center justify-center gap-2">
                 <span>📞</span> (503) 2222-3333
              </a>
          </div>
      </div>
    </section>
  );
};

export default ContactHero;