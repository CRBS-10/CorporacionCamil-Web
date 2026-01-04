// src/components/projects/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="card group cursor-pointer p-0 overflow-hidden relative" onClick={() => onClick(project)}>
      <div className="relative overflow-hidden h-64">
        <img 
            src={project.images[0]} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
            onError={(e) => {e.target.src = 'https://via.placeholder.com/400x300'}} 
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
           <span className="text-white font-semibold border-2 border-white px-4 py-2 rounded">Ver Detalles</span>
        </div>
      </div>
      <div className="p-6">
        <span className="text-xs font-bold text-primary uppercase">{project.category}</span>
        <h3 className="text-xl font-heading font-bold mt-2">{project.title}</h3>
      </div>
    </div>
  );
};

export default ProjectCard;