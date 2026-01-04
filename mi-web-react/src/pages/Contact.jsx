import React from 'react';
// Importamos los componentes divididos desde la carpeta src/components/Contact
import ContactHero from '../components/Contact/ContactHero';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';

const Contact = () => {
  return (
    <div className="bg-background min-h-screen">
      
      {/* 1. Hero */}
      <ContactHero />

      {/* 2. Sección Principal (Grid Layout) */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                {/* Columna Izquierda: Formulario */}
                <ContactForm />

                {/* Columna Derecha: Info y Mapa */}
                <ContactInfo />

            </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;