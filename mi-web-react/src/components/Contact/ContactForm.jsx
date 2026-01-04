import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const ContactForm = () => {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', projectType: '', message: '', consent: false
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

    // Simular envío
    setTimeout(() => {
      setStatus('success');
      setFormData({
        firstName: '', lastName: '', email: '', phone: '', projectType: '', message: '', consent: false
      });
      setTimeout(() => setStatus('idle'), 5000);
    }, 2000);
  };

  return (
    <div className="card">
        <h2 className="text-2xl font-heading font-bold mb-6">{t('form_title')}</h2>
        
        {status === 'success' && (
          <div className="mb-6 p-4 bg-green-50 text-green-700 border border-green-200 rounded-md flex items-center">
            <span className="mr-2">✅</span> {t('msg_success')}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-semibold mb-2">{t('label_name')} *</label>
                    <input type="text" name="firstName" required className="form-input" value={formData.firstName} onChange={handleChange} />
                </div>
                <div>
                    <label className="block text-sm font-semibold mb-2">{t('label_lastname')} *</label>
                    <input type="text" name="lastName" required className="form-input" value={formData.lastName} onChange={handleChange} />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-semibold mb-2">{t('label_email')} *</label>
                    <input type="email" name="email" required className="form-input" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label className="block text-sm font-semibold mb-2">{t('label_phone')} *</label>
                    <input type="tel" name="phone" required className="form-input" value={formData.phone} onChange={handleChange} />
                </div>
            </div>

            <div>
                <label className="block text-sm font-semibold mb-2">{t('label_project_type')}</label>
                <select name="projectType" className="form-input" value={formData.projectType} onChange={handleChange}>
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