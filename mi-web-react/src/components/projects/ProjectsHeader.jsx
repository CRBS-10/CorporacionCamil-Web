// src/components/projects/ProjectsHeader.jsx
import React from 'react';

const ProjectsHeader = ({ language, searchTerm, setSearchTerm, categories, currentFilter, onFilterChange }) => {
  
  const getFilterBtnClass = (cat) => `px-4 py-2 rounded-full transition-all duration-200 ${currentFilter === cat ? 'bg-primary text-white shadow-md' : 'bg-gray-100 text-text-secondary hover:bg-gray-200'}`;

  return (
    <>
      <section className="bg-surface py-12 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-fluid-4xl font-heading font-bold text-text-primary mb-4">
              {language === 'es' ? 'Galería de Proyectos' : 'Projects Gallery'}
          </h1>
          <div className="max-w-md mx-auto mt-6 relative">
              <input 
                type="text" 
                placeholder={language === 'es' ? 'Buscar proyecto...' : 'Search project...'} 
                className="w-full px-4 py-3 pl-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pt-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button key={cat} onClick={() => onFilterChange(cat)} className={getFilterBtnClass(cat)}>
              {cat}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsHeader;