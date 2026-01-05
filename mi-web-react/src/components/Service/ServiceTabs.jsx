import React from 'react';

const ServiceTabs = ({ servicesData, activeTab, setActiveTab, themeColors }) => {
  return (
    <div className="bg-white shadow-sm border-b border-gray-100 transition-all py-6">
      <div className="container mx-auto px-4">
        
        {/* CAMBIO: 'flex-wrap' permite que bajen de línea si no caben.
            'justify-center' los mantiene centrados siempre. */}
        <div className="flex flex-wrap justify-center gap-4">
          
          {Object.keys(servicesData).map((key) => {
            const theme = themeColors[key];
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all border-2 ${
                  isActive
                  ? `${theme.bg} text-white border-transparent shadow-lg transform scale-105` 
                  : `bg-white text-gray-500 border-gray-200 hover:border-gray-300 hover:bg-gray-50`
                }`}
              >
                {servicesData[key].title}
              </button>
            );
          })}
        </div>
        
      </div>
    </div>
  );
};

export default ServiceTabs;