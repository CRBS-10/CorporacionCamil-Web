// src/components/projects/ProjectModal.jsx
import React, { useState, useEffect } from 'react';

const ProjectModal = ({ project, onClose, language }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Cerrar con ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 animate-fade-in" onClick={onClose}>
      <div className="relative max-w-5xl w-full bg-surface rounded-lg overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]" onClick={e => e.stopPropagation()}>
        <button className="absolute top-4 right-4 z-20 bg-white rounded-full p-2" onClick={onClose}>✕</button>
        
        {/* Galería Izquierda */}
        <div className="w-full md:w-2/3 bg-black relative flex flex-col">
          <div className="flex-grow flex items-center justify-center p-4">
             <img src={project.images[activeImageIndex]} alt="" className="max-h-[60vh] object-contain" />
          </div>
          <div className="flex gap-2 p-4 overflow-x-auto bg-gray-900 justify-center">
            {project.images.map((img, idx) => (
              <img 
                key={idx} 
                src={img} 
                onClick={() => setActiveImageIndex(idx)} 
                className={`h-16 w-24 object-cover cursor-pointer rounded-md border-2 ${activeImageIndex === idx ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'}`} 
                alt="thumbnail"
              />
            ))}
          </div>
        </div>

        {/* Info Derecha */}
        <div className="w-full md:w-1/3 p-8 overflow-y-auto bg-white">
           <span className="text-primary font-bold text-sm uppercase">{project.category}</span>
           <h2 className="text-3xl font-heading font-bold mb-4 mt-2">{project.title}</h2>
           <p className="text-text-secondary mb-6">{project.description}</p>
           
           {project.timeline && (
               <div className="bg-gray-50 p-4 rounded-lg mb-6 text-sm border border-gray-100">
                   <h4 className="font-semibold mb-3 border-b pb-2 text-gray-700">
                       {language === 'es' ? 'Cronograma' : 'Timeline'}
                   </h4>
                   {Object.entries(project.timeline).map(([k, v]) => (
                       <div key={k} className="flex justify-between py-1">
                           <span className="text-gray-500">{k}:</span>
                           <span className="font-medium text-gray-900">{v}</span>
                       </div>
                   ))}
               </div>
           )}
           <div className="mt-auto pt-4 border-t text-sm text-gray-500">
               {language === 'es' ? 'Fecha:' : 'Date:'} {project.date}
           </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;