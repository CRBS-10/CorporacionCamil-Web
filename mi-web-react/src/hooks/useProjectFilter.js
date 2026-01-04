// src/hooks/useProjectFilter.js
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { projectsDataEs, projectsDataEn } from '../data/projects';

export const useProjectFilter = () => {
  const { language } = useLanguage();

  // Constantes
  const categoriesEs = ['Todos', 'Construcción', 'Vial', 'Hidráulico', 'Eléctrico'];
  const categoriesEn = ['All', 'Construction', 'Road', 'Hydraulic', 'Electrical'];

  // Estados
  const [filter, setFilter] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);
  
  // Datos actuales según idioma
  const currentProjects = language === 'es' ? projectsDataEs : projectsDataEn;
  const categories = language === 'es' ? categoriesEs : categoriesEn;

  // Lógica de filtrado
  const filteredProjects = currentProjects.filter(project => {
    const isAll = filter === 'Todos' || filter === 'All';
    const matchesFilter = isAll || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Paginación
  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const handleLoadMore = () => setVisibleCount(prev => prev + 6);

  // Reset al cambiar idioma
  useEffect(() => {
    setFilter(language === 'es' ? 'Todos' : 'All');
  }, [language]);

  return {
    language,
    categories,
    filter,
    setFilter,
    searchTerm,
    setSearchTerm,
    visibleProjects,
    totalProjects: filteredProjects.length,
    visibleCount,
    handleLoadMore
  };
};