import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const HomeContact = () => {
  const { t } = useLanguage();
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      e.target.reset();
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 2000);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
          <div className="text-center mb-16">
              <h2 className="text-fluid-3xl font-heading font-bold text-text-primary mb-4">{t('contact_title')}</h2>
              <p className="text-fluid-lg text-text-secondary max-w-2xl mx-auto">
                  {t('contact_subtitle')}
              </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Formulario */}
              <div className="card shadow-lg">
                  <h3 className="text-xl font-heading font-semibold mb-6">{t('form_title')}</h3>
                  {formStatus === 'success' ? (
                      <div className="bg-green-100 text-green-700 p-4 rounded mb-4">{t('msg_success')}</div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold mb-1">{t('label_name')}</label>
                                <input type="text" className="form-input" required />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1">{t('label_lastname')}</label>
                                <input type="text" className="form-input" required />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">{t('label_email')}</label>
                            <input type="email" className="form-input" required />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">{t('label_message')}</label>
                            <textarea rows="3" className="form-input" required></textarea>
                        </div>
                        <button type="submit" className="btn-secondary w-full" disabled={formStatus === 'sending'}>
                            {formStatus === 'sending' ? t('btn_sending') : t('btn_send')}
                        </button>
                    </form>
                  )}
              </div>

              {/* Info Lateral */}
              <div className="space-y-8">
                  <div className="card">
                      <h3 className="text-xl font-heading font-semibold mb-6">Información</h3>
                      <div className="space-y-4">
                          <div className="flex items-start space-x-3">
                              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                              <div><h4 className="font-bold">Dirección</h4><p className="text-gray-600">San Salvador, El Salvador</p></div>
                          </div>
                          <div className="flex items-start space-x-3">
                              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
                              <div><h4 className="font-bold">Email</h4><p className="text-gray-600">info@corporacioncamil.com</p></div>
                          </div>
                      </div>
                  </div>
                  
                  <div className="h-48 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                      <iframe title="Mapa" className="w-full h-full border-0" src="https://maps.google.com/maps?q=San%20Salvador&t=&z=13&ie=UTF8&iwloc=&output=embed" loading="lazy"></iframe>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
};

export default HomeContact;