import React from 'react';
// Importamos los componentes divididos desde la carpeta components/About
import AboutHero from '../components/About/AboutHero';
import AboutHistory from '../components/About/AboutHistory';
import AboutValues from '../components/About/AboutValues';

const About = () => {
  return (
    <div className="bg-background min-h-screen">
      <AboutHero />
      <AboutHistory />
      <AboutValues />
    </div>
  );
};

export default About;