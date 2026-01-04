import React from 'react';
// Ya no necesitamos importar 'Link', 'useState', ni 'projectsData' aquí
// porque la lógica se movió a los componentes hijos.

// Importar el Hero existente
import Hero from '../components/Home/Hero';

// Importar los nuevos componentes
import HomeServices from '../components/Home/HomeServices';
import HomeProjects from '../components/Home/HomeProjects';
import HomeAbout from '../components/Home/HomeAbout';
import HomeContact from '../components/Home/HomeContact';
import FloatingButton from '../components/Home/FloatingButton';

const Home = () => {
  return (
    <div className="bg-background">
      <Hero />
      <HomeServices />
      <HomeProjects />
      <HomeAbout />
      <HomeContact />
      <FloatingButton />
    </div>
  );
};

export default Home;