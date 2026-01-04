// src/pages/Projects.jsx (o donde tengas este archivo)
import React, { useState } from 'react';
import { useProjectFilter } from '../hooks/useProjectFilter';
import ProjectsHeader from '../components/projects/ProjectsHeader';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectModal from '../components/projects/ProjectModal';

const Projects = () => {
  // 1. Usamos nuestro Hook personalizado para la lógica
  const { 
    language, categories, filter, setFilter, 
    searchTerm, setSearchTerm, visibleProjects, 
    visibleCount, totalProjects, handleLoadMore 
  } = useProjectFilter();

  // 2. Estado local solo para controlar qué proyecto se ve en el modal
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="bg-background min-h-screen pb-20">
      
      {/* Cabecera y Filtros */}
      <ProjectsHeader 
        language={language}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        categories={categories}
        currentFilter={filter}
        onFilterChange={(cat) => setFilter(cat)}
      />

      {/* Grid de Proyectos */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={setSelectedProject} 
            />
          ))}
        </div>
        
        {/* Botón Cargar Más */}
        {visibleCount < totalProjects && (
          <div className="text-center mt-12">
            <button onClick={handleLoadMore} className="btn-secondary px-8 py-3 shadow-lg">
              {language === 'es' ? 'Cargar Más' : 'Load More'}
            </button>
          </div>
        )}
      </div>
      
      {/* Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          language={language}
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

export default Projects;