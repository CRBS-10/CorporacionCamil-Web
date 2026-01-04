import React from 'react';

const ServiceTabs = ({ servicesData, activeTab, setActiveTab, themeColors }) => {
  return (
    // 'sticky top-[89px]' asumiendo que tu Header principal mide unos 80-90px.
    // Ajusta ese número si queda un hueco o se solapa.
    <div className="sticky top-[89px] z-30 bg-white shadow-sm border-b border-gray-100 transition-all">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto no-scrollbar md:justify-center gap-2 py-2">
          {Object.keys(servicesData).map((key) => {
            const theme = themeColors[key];
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all whitespace-nowrap border ${
                  isActive
                  ? `${theme.bg} text-white border-transparent shadow-md transform scale-105` 
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