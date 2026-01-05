import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const AboutValues = () => {
  const { t } = useLanguage();
  
  // Estado para los contadores
  const [stats, setStats] = useState({ projects: 0, years: 0, team: 0, satisfaction: 0 });
  const statsSectionRef = useRef(null);
  const hasAnimated = useRef(false);

  // Lógica de animación
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        
        const animateValue = (key, end, duration) => {
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              start = end;
              clearInterval(timer);
            }
            setStats(prev => ({ ...prev, [key]: Math.floor(start) }));
          }, 16);
        };

        animateValue('projects', 100, 2000);
        animateValue('years', 15, 1500);
        animateValue('team', 25, 1500);
        animateValue('satisfaction', 98, 2000);
      }
    }, { threshold: 0.5 });

    if (statsSectionRef.current) {
      observer.observe(statsSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const valuesList = [
    { 
      title: t('val_quality'),
      // ✅ AGREGADO: La descripción conectada a la traducción
      desc: t('val_quality_desc'),
      icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z", 
      bg: "bg-primary-100", 
      text: "text-primary" 
    },
    { 
      title: t('val_integrity'),
      // ✅ AGREGADO
      desc: t('val_integrity_desc'),
      icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z", 
      bg: "bg-secondary-100", 
      text: "text-secondary" 
    },
    { 
      title: t('val_innovation'),
      // ✅ AGREGADO
      desc: t('val_innovation_desc'),
      icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z", 
      bg: "bg-accent-100", 
      text: "text-accent" 
    },
  ];

  return (
    <>
      {/* Sección Valores */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-fluid-3xl font-heading font-bold text-text-primary mb-4">
                  {t('our_values')}
                </h2>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                  {t('our_values_subtitle')}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {valuesList.map((val, idx) => (
                  <div key={idx} className="card text-center group hover:-translate-y-1 transition-all duration-300">
                      <div className={`w-16 h-16 ${val.bg} rounded-full flex items-center justify-center mx-auto mb-6`}>
                          <svg className={`w-8 h-8 ${val.text}`} fill="currentColor" viewBox="0 0 24 24">
                              <path d={val.icon}/>
                          </svg>
                      </div>
                      <h3 className="text-xl font-heading font-semibold mb-3">{val.title}</h3>
                      
                      {/* ✅ AGREGADO: Aquí es donde se muestra el texto */}
                      <p className="text-text-secondary leading-relaxed text-sm">
                        {val.desc}
                      </p>
                  </div>
                ))}
            </div>
        </div>
      </section>

      {/* Sección Estadísticas Animadas */}
      <section ref={statsSectionRef} className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                    <div className="text-4xl font-bold mb-2">{stats.projects}+</div>
                    <div className="text-lg">{t('stats_projects')}</div>
                </div>
                <div>
                    <div className="text-4xl font-bold mb-2">{stats.years}+</div>
                    <div className="text-lg">{t('stats_years')}</div>
                </div>
                <div>
                    <div className="text-4xl font-bold mb-2">{stats.team}</div>
                    <div className="text-lg">{t('stats_team')}</div>
                </div>
                <div>
                    <div className="text-4xl font-bold mb-2">{stats.satisfaction}%</div>
                    <div className="text-lg">{t('stats_satisfaction')}</div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default AboutValues;