import React, { useState, useRef } from 'react';
import { useLanguage } from "../../context/LanguageContext";
import emailjs from '@emailjs/browser';

const ServiceForm = ({ activeData, currentTheme }) => {
  const { language } = useLanguage();
  const [formStatus, setFormStatus] = useState('idle');
  
  // Referencia al formulario
  const form = useRef();

  const handleServiceContact = (e) => {
    e.preventDefault();
    setFormStatus('sending');

    emailjs.sendForm(
      'service_08bw8g9',       // Tu Service ID
      'template_pmfs9oo',      // Tu Template ID
      form.current,
      'yUkgDB_IkVKeu-O1Q'      // Tu Public Key
    )
    .then((result) => {
        setFormStatus('success');
        e.target.reset();
        setTimeout(() => setFormStatus('idle'), 3000);
    }, (error) => {
        alert("Error al enviar solicitud.");
        setFormStatus('idle');
    });
  };

  return (
     <div className={`sticky top-32 bg-white p-6 rounded-2xl shadow-lg border-t-8 ${currentTheme.border}`}>
         <div className="mb-6">
             <h3 className="text-xl font-bold text-gray-900">
                {language === 'es' ? 'Solicitar Cotización' : 'Request Quote'}
             </h3>
             {/* CORRECCIÓN DE ESPACIO Y TEXTO */}
             <p className="text-gray-500 text-sm mt-1">
                {language === 'es' ? 'Para proyectos de ' : 'For projects of '} 
                <span className={`font-semibold ${currentTheme.main}`}>
                    {activeData.title}
                </span>
             </p>
         </div>

         {formStatus === 'success' ? (
             <div className={`p-6 rounded-lg text-center ${currentTheme.bgLight} ${currentTheme.main}`}>
                 <div className="text-4xl mb-2">✓</div>
                 <p className="font-bold">{language === 'es' ? 'Mensaje Enviado' : 'Message Sent'}</p>
             </div>
         ) : (
            <form ref={form} onSubmit={handleServiceContact} className="space-y-4">
                
                {/* CAMPO OCULTO: Simplificado para evitar redundancia */}
                {/* Ahora en el correo, donde dice "Nombre", saldrá solo el nombre del servicio */}
                <input type="hidden" name="user_name" value={activeData.title} />
                <input type="hidden" name="user_lastname" value="-" />

                <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-400 uppercase">Email</label>
                    <input 
                        type="email" 
                        name="user_email"
                        required 
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:bg-white focus:ring-2 focus:ring-opacity-50 outline-none transition" 
                    />
                </div>
                
                <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-400 uppercase">{language === 'es' ? 'Detalles' : 'Details'}</label>
                    <textarea 
                        rows="4" 
                        name="message"
                        required 
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:bg-white focus:ring-2 focus:ring-opacity-50 outline-none transition resize-none"
                    ></textarea>
                </div>
                
                <button 
                    type="submit" 
                    disabled={formStatus === 'sending'} 
                    className={`w-full text-white font-bold py-4 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${currentTheme.bg}`}
                >
                    {formStatus === 'sending' 
                      ? (language === 'es' ? 'Enviando...' : 'Sending...') 
                      : (language === 'es' ? 'Enviar Solicitud' : 'Send Request')}
                </button>
            </form>
         )}
     </div>
  );
};

export default ServiceForm;