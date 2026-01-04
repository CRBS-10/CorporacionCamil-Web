import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { projectsDataEs, projectsDataEn } from '../../data/projects';

const HomeProjects = () => {
  const { t, language } = useLanguage();

  // Seleccionamos los datos y tomamos los primeros 3
  const currentProjects = language === 'es' ? projectsDataEs : projectsDataEn;
  const recentProjects = currentProjects.slice(0, 3);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
          <div className="text-center mb-16">
              <h2 className="text-fluid-3xl font-heading font-bold text-text-primary mb-4">{t('title_projects')}</h2>
              <p className="text-fluid-lg text-text-secondary max-w-2xl mx-auto">
                  {language === 'es' ? 'Explore nuestros últimos proyectos completados.' : 'Explore our latest completed projects.'}
              </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentProjects.map((project) => (
                  <Link key={project.id} to="/projects" className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all h-80 block">
                      <img 
                          src={project.images[0]} 
                          alt={project.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {e.target.src = 'https://via.placeholder.com/400x300?text=Proyecto'}} 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                          <span className="text-accent font-bold text-xs uppercase mb-1 tracking-wider bg-black/50 inline-block px-2 py-1 rounded w-fit">
                              {project.category}
                          </span>
                          <h3 className="text-white text-xl font-bold">{project.title}</h3>
                      </div>
                  </Link>
              ))}
          </div>
          
          <div className="text-center mt-12">
              <Link to="/projects" className="btn-primary">{t('btn_view_projects')}</Link>
          </div>
      </div>
    </section>
  );
};

export default HomeProjects;