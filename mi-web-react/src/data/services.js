// src/data/services.js

// Configuración de temas de color (Se mantiene igual, funciona perfecto)
export const serviceThemes = {
  construccion: { 
    main: 'text-primary', bg: 'bg-primary', bgLight: 'bg-primary-50', border: 'border-primary', gradient: 'from-blue-900/90 to-primary/80' 
  },
  hidraulica: { 
    main: 'text-accent', bg: 'bg-accent', bgLight: 'bg-accent-50', border: 'border-accent', gradient: 'from-emerald-900/90 to-accent/80' 
  },
  electrica: { 
    main: 'text-secondary', bg: 'bg-secondary', bgLight: 'bg-secondary-50', border: 'border-secondary', gradient: 'from-orange-900/90 to-secondary/80' 
  },
  vial: { 
    main: 'text-gray-700', bg: 'bg-gray-700', bgLight: 'bg-gray-100', border: 'border-gray-700', gradient: 'from-gray-900/90 to-gray-600/80' 
  }
};

// DATOS EN ESPAÑOL (Mejorados)
export const servicesDataEs = {
  construccion: {
    id: 'construccion',
    title: "Construcción General",
    description: "Ejecución integral de obras civiles, edificaciones comerciales y residenciales llave en mano.",
    image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920",
    overview: "En Corporación Camil, transformamos planos en realidad. Nos especializamos en la gestión completa de proyectos de construcción, desde la terracería inicial hasta los acabados finales de alta gama. Nuestra experiencia abarca edificios corporativos, complejos residenciales y naves industriales, asegurando siempre el cumplimiento de normas estructurales y cronogramas exigentes.",
    highlights: [
      "Edificaciones Verticales y Corporativas", 
      "Naves Industriales y Bodegas", 
      "Remodelaciones y Obra Gris", 
      "Gestión de Proyectos Llave en Mano"
    ],
    timeline: "Según magnitud del proyecto"
  },
  hidraulica: {
    id: 'hidraulica',
    title: "Infraestructura Hidráulica",
    description: "Soluciones de ingeniería avanzada para la captación, distribución y tratamiento del agua.",
    image: "https://images.pexels.com/photos/2510067/pexels-photo-2510067.jpeg?auto=compress&cs=tinysrgb&w=1920",
    overview: "El manejo eficiente del agua es vital. Ofrecemos soluciones integrales que van desde la perforación técnica de pozos profundos hasta la instalación de complejos sistemas de bombeo y redes de distribución. Además, diseñamos y construimos plantas de tratamiento y sistemas de drenaje pluvial para garantizar la sostenibilidad y salubridad de su proyecto.",
    highlights: [
      "Perforación y Equipamiento de Pozos", 
      "Sistemas de Bombeo de Alta Eficiencia", 
      "Redes de Agua Potable y Aguas Negras", 
      "Plantas de Tratamiento y Cisternas"
    ],
    timeline: "2-6 meses"
  },
  electrica: {
    id: 'electrica',
    title: "Energía & Electricidad",
    description: "Diseño y montaje de sistemas eléctricos de alta potencia y seguridad industrial.",
    image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1920",
    overview: "Garantizamos la continuidad operativa de su industria. Nuestro equipo de ingenieros diseña e instala redes eléctricas robustas, incluyendo líneas de media y alta tensión, subestaciones transformadoras y sistemas de respaldo de energía. Cumplimos rigurosamente con las normativas de seguridad para proteger sus equipos y personal.",
    highlights: [
      "Líneas de Media y Alta Tensión", 
      "Montaje de Subestaciones y Transformadores", 
      "Iluminación Industrial y Comercial", 
      "Plantas de Emergencia y Transferencias"
    ],
    timeline: "1-4 meses"
  },
  vial: {
    id: 'vial',
    title: "Infraestructura Vial",
    description: "Ingeniería de caminos, pavimentación y urbanización con maquinaria pesada.",
    image: "https://images.pexels.com/photos/2409681/pexels-photo-2409681.jpeg?auto=compress&cs=tinysrgb&w=1920",
    overview: "Conectamos el desarrollo. Ejecutamos proyectos de infraestructura vial duradera, utilizando técnicas modernas de mecánica de suelos, estabilización y pavimentación. Ya sea concreto hidráulico para alto tráfico o mezcla asfáltica para carreteras, nuestra maquinaria y experiencia garantizan superficies seguras y resistentes a las inclemencias del tiempo.",
    highlights: [
      "Pavimentación en Concreto y Asfalto", 
      "Movimiento de Tierras y Terracería", 
      "Construcción de Puentes y Pasos a Desnivel", 
      "Muros de Contención y Drenaje Vial"
    ],
    timeline: "Variable según kilometraje"
  }
};

// DATOS EN INGLÉS (Mejorados)
export const servicesDataEn = {
  construccion: {
    id: 'construccion',
    title: "General Construction",
    description: "Comprehensive execution of civil works, commercial buildings, and turnkey residential projects.",
    image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920",
    overview: "At Corporación Camil, we turn blueprints into reality. We specialize in complete construction project management, from initial earthworks to high-end final finishes. Our experience covers corporate buildings, residential complexes, and industrial warehouses, always ensuring compliance with structural standards and demanding schedules.",
    highlights: [
      "Vertical & Corporate Buildings", 
      "Industrial Warehouses & Logistics", 
      "Remodeling & Grey Works", 
      "Turnkey Project Management"
    ],
    timeline: "Depends on project scope"
  },
  hidraulica: {
    id: 'hidraulica',
    title: "Hydraulic Infrastructure",
    description: "Advanced engineering solutions for water catchment, distribution, and treatment.",
    image: "https://images.pexels.com/photos/2510067/pexels-photo-2510067.jpeg?auto=compress&cs=tinysrgb&w=1920",
    overview: "Efficient water management is vital. We offer comprehensive solutions ranging from technical deep well drilling to the installation of complex pumping systems and distribution networks. Additionally, we design and build treatment plants and storm drainage systems to ensure the sustainability and sanitation of your project.",
    highlights: [
      "Deep Well Drilling & Equipping", 
      "High-Efficiency Pumping Systems", 
      "Potable Water & Sewage Networks", 
      "Treatment Plants & Cisterns"
    ],
    timeline: "2-6 months"
  },
  electrica: {
    id: 'electrica',
    title: "Energy & Electrical",
    description: "Design and assembly of high-power electrical systems and industrial safety.",
    image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1920",
    overview: "We guarantee the operational continuity of your industry. Our engineering team designs and installs robust electrical networks, including medium and high voltage lines, transformer substations, and energy backup systems. We strictly comply with safety regulations to protect your equipment and personnel.",
    highlights: [
      "Medium & High Voltage Lines", 
      "Substation & Transformer Assembly", 
      "Industrial & Commercial Lighting", 
      "Emergency Plants & Transfer Switches"
    ],
    timeline: "1-4 months "
  },
  vial: {
    id: 'vial',
    title: "Road Infrastructure",
    description: "Road engineering, paving, and urbanization using heavy machinery.",
    image: "https://images.pexels.com/photos/2409681/pexels-photo-2409681.jpeg?auto=compress&cs=tinysrgb&w=1920",
    overview: "Connecting development. We execute durable road infrastructure projects using modern soil mechanics, stabilization, and paving techniques. Whether it's hydraulic concrete for heavy traffic or asphalt mix for highways, our machinery and experience guarantee safe surfaces resistant to weather conditions.",
    highlights: [
      "Hydraulic Concrete & Asphalt Paving", 
      "Earthworks & Land Grading", 
      "Bridges & Overpasses Construction", 
      "Retaining Walls & Road Drainage"
    ],
    timeline: "Variable based on mileage"
  }
};