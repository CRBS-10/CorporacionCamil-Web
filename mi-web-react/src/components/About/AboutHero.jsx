import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const AboutHero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 bg-gradient-to-r from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4 text-center">
          <h1 className="text-fluid-4xl font-heading font-bold text-text-primary mb-6">
            {t('about_title')}
          </h1>
          <p className="text-fluid-xl text-text-secondary max-w-3xl mx-auto">
            {t('about_desc')}
          </p>
      </div>
    </section>
  );
};

export default AboutHero;