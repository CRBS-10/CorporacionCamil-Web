import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
// 1. IMPORTANTE: Importamos el archivo con los textos
import { translations } from '../../context/translations'; // Ajusta la ruta si es necesario

const ContactInfo = () => {
  const { language } = useLanguage();
  
  // 2. Seleccionamos el idioma correcto (si language es 'es', carga español, si es 'en', inglés)
  const t = translations[language];

  return (
    <div className="space-y-8">
        {/* Info Card */}
        <div className="card">
            {/* Antes: <h3>Info</h3> */}
            <h3 className="text-xl font-heading font-semibold mb-6">{t.info_title}</h3>
            
            <div className="space-y-4 text-text-secondary">
                <p>
                    {/* Antes: <strong>Dirección:</strong> */}
                    <strong className="text-text-primary">{t.info_address_label} </strong> 
                    San Salvador, El Salvador
                </p>
                <p>
                    <strong className="text-text-primary">{t.info_email_label} </strong> 
                    info@corporacioncamil.com
                </p>
                <p>
                    <strong className="text-text-primary">{t.info_hours_label} </strong> 
                    {t.info_hours_value}
                </p>
            </div>
        </div>

        {/* Emergencia */}
        <div className="card border-error bg-red-50">
            {/* Antes: <h3>¿Emergencia?</h3> */}
            <h3 className="text-xl font-bold text-error mb-2">{t.emergency_title}</h3>
            <p className="text-text-secondary mb-4">{t.emergency_desc}</p>
            <a href="tel:+50377779999" className="font-bold text-error hover:underline text-lg">
                {t.emergency_call} (503) 7777-9999
            </a>
        </div>

        {/* Mapa */}
        <div className="card p-0 overflow-hidden h-64 bg-gray-200 relative">
            <iframe 
              title="Mapa"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.1!2d-89.2!3d13.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQyJzAwLjAiTiA4OcKwMTInMDAuMCJX!5e0!3m2!1ses!2ssv!4v1600000000000!5m2!1ses!2ssv"
            ></iframe>
        </div>
    </div>
  );
};

export default ContactInfo;