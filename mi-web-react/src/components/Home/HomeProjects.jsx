import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { projectsDataEs, projectsDataEn } from '../../data/projects';

const HomeProjects = () => {
  const { t, language } = useLanguage();

  const currentProjects = language === 'es' ? projectsDataEs : projectsDataEn;
  const recentProjects = currentProjects.slice(0, 3);

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
          <div className="text-center mb-16">
              <h2 className="text-fluid-3xl font-heading font-bold text-white mb-4 tracking-tight">
                {t('title_projects')}
              </h2>
              <p className="text-fluid-lg text-gray-400 max-w-2xl mx-auto">
                  {language === 'es' ? 'Explore nuestros últimos proyectos completados.' : 'Explore our latest completed projects.'}
              </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentProjects.map((project) => (
                  <Link key={project.id} to="/projects" className="group relative overflow-hidden rounded-xl shadow-2xl transition-all h-80 block border border-gray-800">
                      <img 
                          src={project.images[0]} 
                          alt={project.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          onError={(e) => {e.target.src = 'https://via.placeholder.com/400x300?text=Proyecto'}} 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8">
                          
                          {/* Etiqueta NARANJA */}
                          <span className="text-white font-bold text-xs uppercase mb-2 tracking-widest bg-orange-600 px-3 py-1 rounded-full w-fit shadow-md">
                              {project.category}
                          </span>
                          
                          <h3 className="text-white text-xl font-bold group-hover:text-orange-400 transition-colors">
                            {project.title}
                          </h3>
                      </div>
                  </Link>
              ))}
          </div>
          
          <div className="text-center mt-16">
              {/* CAMBIO FINAL: Blanco -> Azul al pasar el mouse */}
              <Link 
                to="/projects" 
                className="inline-block bg-white text-slate-900 font-bold py-4 px-10 rounded-lg shadow-lg hover:bg-blue-600 hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                {t('btn_view_projects')}
              </Link>
          </div>
      </div>
    </section>
  );
};

export default HomeProjects;