import React, { useState } from 'react';

// Data struktur diambil dari HTML yang kamu berikan
const tabData = [
  {
    title: "Maskapai Domestik",
    links: ["CITILINK", "LION AIR", "BATIK AIR", "SUPER AIR JET", "GARUDA INDONESIA", "SRIWIJAYA AIR", "WINGS AIR", "AIRASIA", "NAM AIR", "PELITA AIR", "TRANSNUSA", "TRIGANA AIR"]
  },
  {
    title: "Maskapai Internasional",
    links: ["BATIK AIR", "GARUDA INDONESIA", "AIRASIA", "SINGAPORE AIRLINES", "SCOOT", "JETSTAR", "EMIRATES", "QATAR AIR", "QANTAS AIR", "PHILIPPINE AIRLINES", "JAPAN AIRLINES", "MALAYSIA AIRLINES"]
  },
  {
    title: "Rute Domestik",
    links: ["Jakarta Bali (CGK - DPS)", "Medan Jakarta (KNO - CGK)", "Bali Jakarta (DPS - CGK)", "Jakarta Medan (CGK - KNO)", "Jakarta Makassar (CGK - UPG)", "Makassar Jakarta (UPG - CGK)", "Jakarta Surabaya (CGK - SUB)", "Surabaya Jakarta (SUB - CGK)", "Padang Jakarta (PDG - CGK)", "Jakarta Padang (CGK - PDG)", "Pekanbaru Jakarta (PKU - CGK)", "Jakarta Riau (CGK - PKU)", "Jakarta Batam (CGK - BTH)", "Jakarta Pontianak (CGK - PNK)", "Pontianak Jakarta (PNK - CGK)", "Batam Jakarta (BTH - CGK)"]
  },
  {
    title: "Rute Internasional",
    links: ["Jakarta Singapore (CGK - SIN)", "Singapore Jakarta (SIN - CGK)", "Jakarta Malaysia (CGK - KUL)", "Jakarta Korea (CGK - ICN)", "Jakarta Bangkok (CGK - DMK/BKK)", "Kuala Lumpur Jakarta (KUL - CGK)", "Surabaya Singapore (SUB - SIN)", "Jakarta Tokyo (CGK - NRT)", "Medan Penang (KNO - PEN)", "Surabaya Kuala Lumpur (SUB - KUL)", "Jakarta Istanbul (CGK - IST)", "Jakarta Amsterdam (CGK - AMS)", "Jakarta Sydney (CGK - SYD)", "Jakarta Melbourne (CGK - MEL)", "Medan Kuala Lumpur (KNO - KUL)"]
  },
  {
    title: "Tujuan Domestik",
    links: ["Pesawat ke Jakarta (CGK/HLP)", "Pesawat ke Bali (DPS)", "Pesawat ke Surabaya (SUB)", "Pesawat ke Balikpapan (BPN)", "Pesawat ke Batam (BTH)", "Pesawat ke Jogja (YIA)", "Pesawat ke Makassar (UPG)", "Pesawat ke Padang (PDG)", "Pesawat ke Semarang (SRG)", "Pesawat ke Bandung (BDO)", "Pesawat ke Kertajati (KJT)"]
  },
  {
    title: "Tujuan Internasional",
    links: ["Pesawat ke Kuala Lumpur (KUL)", "Pesawat ke Bangkok (BKK/DMK)", "Pesawat ke Singapore (SIN)", "Pesawat ke Jepang, Tokyo (NRT)", "Pesawat ke Manila (MNL)", "Pesawat ke Jeddah (JED)", "Pesawat ke Penang (PEN)", "Pesawat ke Kyoto (UKY)", "Pesawat ke Amsterdam (AMS)", "Pesawat ke Hongkong (HKG)"]
  },
  {
    title: "Tujuan Maskapai",
    links: ["Saudia Airlines - Jeddah", "Citilink - Bali", "Garuda Indonesia - Jeddah", "Garuda Indonesia - Bali", "Garuda Indonesia - Tokyo", "Lion Air - Jeddah", "Super Air Jet - Bali", "Garuda Indonesia - Surabaya", "Garuda Indonesia - Medan", "Citilink - Surabaya"]
  }
];

export const TabbedLinkGroup: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-transparent mt-12 mb-8">
      <h2 className="text-xl font-bold text-[#11142D] mb-6">Pesan Tiket Pesawat ke Destinasi Terpopuler!</h2>
      
      {/* Tab Headers */}
      <div className="flex overflow-x-auto border-b border-gray-200 hide-scrollbar mb-6">
        {tabData.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`whitespace-nowrap pb-3 px-4 text-sm font-semibold transition-colors duration-200 relative ${
              activeTab === index 
                ? 'text-[#0064D2]' 
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            {tab.title}
            {/* Garis Bawah Aktif */}
            {activeTab === index && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0064D2] rounded-t-md"></span>
            )}
          </button>
        ))}
      </div>

      {/* Tab Content (Grid Tautan) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6">
        {tabData[activeTab].links.map((linkText, idx) => (
          <a 
            key={idx} 
            href="#" 
            className="text-sm text-gray-700 hover:text-[#0064D2] transition-colors"
          >
            {linkText}
          </a>
        ))}
      </div>
    </section>
  );
};