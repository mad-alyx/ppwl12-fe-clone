import React from 'react';

interface SeoScrollableBlockProps {
  title: string;
  children: React.ReactNode;
}

export const SeoScrollableBlock: React.FC<SeoScrollableBlockProps> = ({ title, children }) => {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-[#11142D] mb-4">{title}</h2>
      
      <div className="relative">
        <div className="absolute top-0 left-0 right-4 h-6 bg-gradient-to-b from-white to-transparent pointer-events-none z-10"></div>
        
        <div className="seo-scrollbar max-h-[220px] overflow-y-auto pr-6 text-gray-700 text-[15px] leading-relaxed py-3">
          <div className="flex flex-col gap-6 text-justify">
            {children}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-4 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>
      </div>
    </section>
  );
};