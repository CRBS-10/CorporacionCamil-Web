import React, { useState, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import emailjs from '@emailjs/browser';

const HomeContact = () => {
  const { t } = useLanguage();
  const [formStatus, setFormStatus] = useState('idle');
  
  // 1. Crear referencia
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // 2. Enviar con tus credenciales reales
    emailjs.sendForm(
      'service_08bw8g9',       // ✅ Tu Service ID
      'template_pmfs9oo',      // ✅ Tu Template ID
      form.current,
      'yUkgDB_IkVKeu-O1Q'      // ✅ Tu Public Key
    )
    .then((result) => {
        console.log("Enviado:", result.text);
        setFormStatus('success');
        e.target.reset(); // Limpiar campos
        setTimeout(() => setFormStatus('idle'), 3000);
    }, (error) => {
        console.log("Error:", error.text);
        setFormStatus('idle');
        alert("Error al enviar mensaje. Intenta de nuevo.");
    });
  };

  return (
    // CAMBIO: 'bg-slate-50' es un tono suave, limpio y profesional
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
          {/* Encabezado de la sección */}
          <div className="text-center mb-16">
              <h2 className="text-fluid-3xl font-heading font-bold text-text-primary mb-4">
                  {t('contact_title')}
              </h2>
              <p className="text-fluid-lg text-text-secondary max-w-2xl mx-auto">
                  {t('contact_subtitle')}
              </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* --- Columna 1: Formulario --- */}
              <div className="card shadow-lg bg-white">
                  <h3 className="text-xl font-heading font-semibold mb-6">{t('form_title')}</h3>
                  
                  {formStatus === 'success' ? (
                      <div className="bg-green-100 text-green-700 p-6 rounded-lg text-center border border-green-200 animate-fade-in">
                          <p className="font-bold text-lg">✓ {t('msg_success')}</p>
                      </div>
                  ) : (
                    // 3. Conectar ref={form}
                    <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold mb-1">{t('label_name')}</label>
                                {/* name="user_name" */}
                                <input type="text" name="user_name" className="form-input w-full" required />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1">{t('label_lastname')}</label>
                                {/* name="user_lastname" */}
                                <input type="text" name="user_lastname" className="form-input w-full" required />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">{t('label_email')}</label>
                            {/* name="user_email" */}
                            <input type="email" name="user_email" className="form-input w-full" required />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">{t('label_message')}</label>
                            {/* name="message" */}
                            <textarea name="message" rows="3" className="form-input w-full resize-none" required></textarea>
                        </div>
                        
                        <button 
                            type="submit" 
                            className={`btn-secondary w-full py-3 transition-all ${formStatus === 'sending' ? 'opacity-75 cursor-not-allowed' : 'hover:-translate-y-1 shadow-md'}`} 
                            disabled={formStatus === 'sending'}
                        >
                            {formStatus === 'sending' ? t('btn_sending') : t('btn_send')}
                        </button>
                    </form>
                  )}
              </div>

              {/* --- Columna 2: Info Lateral y Mapa --- */}
              <div className="space-y-8">
                  {/* Tarjeta de Información */}
                  <div className="card bg-white shadow-lg">
                      <h3 className="text-xl font-heading font-semibold mb-6">{t('info_title')}</h3>
                      <div className="space-y-4">
                          <div className="flex items-start space-x-3">
                              <svg className="w-6 h-6 text-primary mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                              <div>
                                  <h4 className="font-bold">{t('info_address_label')}</h4>
                                  <p className="text-gray-600">MRM6+4J5 CAMIL S.A. DE C.V, San Salvador</p>
                              </div>
                          </div>
                          <div className="flex items-start space-x-3">
                              <svg className="w-6 h-6 text-primary mt-1" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
                              <div>
                                  <h4 className="font-bold">{t('info_email_label')}</h4>
                                  <p className="text-gray-600">ffcorporacioncamil@gmail.com</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  
                  {/* Mapa Funcional */}
                  <div className="h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md border border-gray-300 relative z-0">
                      <iframe 
                        title="Mapa Ubicación" 
                        width="100%" 
                        height="100%" 
                        frameBorder="0" 
                        scrolling="no" 
                        marginHeight="0" 
                        marginWidth="0" 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.28677864915647!2d-89.18868337457121!3d13.682770445857763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6331006c3ac8b9%3A0xbe7f18b061861f4d!2sCAMIL%20S.A.%20DE%20C.V!5e0!3m2!1ses!2ssv!4v1768216174053!5m2!1ses!2ssv"
                        className="w-full h-full"
                      ></iframe>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
};

export default HomeContact;