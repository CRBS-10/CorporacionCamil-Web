import React, { useState, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const { t } = useLanguage();
  
  // 1. Creamos la referencia al formulario
  const form = useRef();

  // 2. Actualizamos el estado inicial con los nombres que usa EmailJS
  const [formData, setFormData] = useState({
    user_name: '', 
    user_lastname: '', 
    user_email: '', 
    phone: '', 
    project_type: '', 
    message: '', 
    consent: false
  });

  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    // 3. Envío real con tus credenciales
    emailjs.sendForm(
      'service_08bw8g9',       // ✅ Tu Service ID
      'template_pmfs9oo',      // ✅ Tu Template ID
      form.current,
      'yUkgDB_IkVKeu-O1Q'      // ✅ Tu Public Key
    )
    .then((result) => {
        console.log("Enviado:", result.text);
        setStatus('success');
        
        // Limpiar formulario
        setFormData({
            user_name: '', user_lastname: '', user_email: '', phone: '', project_type: '', message: '', consent: false
        });
        
        // Quitar mensaje de éxito a los 5 segundos
        setTimeout(() => setStatus('idle'), 5000);
    }, (error) => {
        console.log("Error:", error.text);
        alert("Hubo un error al enviar el mensaje. Por favor intenta más tarde.");
        setStatus('idle');
    });
  };

  return (
    <div className="card">
        <h2 className="text-2xl font-heading font-bold mb-6">{t('form_title')}</h2>
        
        {status === 'success' && (
          <div className="mb-6 p-4 bg-green-50 text-green-700 border border-green-200 rounded-md flex items-center">
            <span className="mr-2">✅</span> {t('msg_success')}
          </div>
        )}

        {/* Conectamos la referencia 'ref={form}' */}
        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-semibold mb-2">{t('label_name')} *</label>
                    {/* name="user_name" para coincidir con la plantilla */}
                    <input type="text" name="user_name" required className="form-input" value={formData.user_name} onChange={handleChange} />
                </div>
                <div>
                    <label className="block text-sm font-semibold mb-2">{t('label_lastname')} *</label>
                    {/* name="user_lastname" */}
                    <input type="text" name="user_lastname" required className="form-input" value={formData.user_lastname} onChange={handleChange} />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-semibold mb-2">{t('label_email')} *</label>
                    {/* name="user_email" */}
                    <input type="email" name="user_email" required className="form-input" value={formData.user_email} onChange={handleChange} />
                </div>
                <div>
                    <label className="block text-sm font-semibold mb-2">{t('label_phone')} *</label>
                    {/* name="phone" */}
                    <input type="tel" name="phone" required className="form-input" value={formData.phone} onChange={handleChange} />
                </div>
            </div>

            <div>
                <label className="block text-sm font-semibold mb-2">{t('label_project_type')}</label>
                {/* name="project_type" */}
                <select name="project_type" className="form-input" value={formData.project_type} onChange={handleChange}>
                    <option value="">---</option>
                    <option value="construccion">Construcción General</option>
                    <option value="vial">Infraestructura Vial</option>
                    <option value="hidraulica">Infraestructura Hidráulica</option>
                    <option value="electrico">Área Eléctrica</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-semibold mb-2">{t('label_message')} *</label>
                <textarea name="message" rows="4" required className="form-input" value={formData.message} onChange={handleChange}></textarea>
            </div>

            <div className="flex items-start space-x-3">
                <input type="checkbox" name="consent" id="consent" required className="mt-1 w-4 h-4" checked={formData.consent} onChange={handleChange} />
                <label htmlFor="consent" className="text-sm text-text-secondary">{t('label_consent')}</label>
            </div>

            <button type="submit" disabled={status === 'loading'} className="btn-secondary w-full disabled:opacity-70 disabled:cursor-not-allowed">
              {status === 'loading' ? t('btn_sending') : t('btn_send')}
            </button>
        </form>
    </div>
  );
};

export default ContactForm;