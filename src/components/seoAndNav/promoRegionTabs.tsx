import React, { useState } from 'react';

const regionTabData = [
  {
    region: "Jawa",
    destinations: [
      { city: "Tiket Pesawat ke Jakarta (CGK/HLP)", airport: "Bandara Soekarno Hatta & Halim Perdanakusuma" },
      { city: "Tiket Pesawat ke Bandung (BDO)", airport: "Bandara Husein Sastranegara International" },
      { city: "Tiket Pesawat ke Majalengka (KTJ)", airport: "Bandara Internasional Kertajati" },
      { city: "Tiket Pesawat ke Banyuwangi (BWX)", airport: "Bandar Udara Banyuwangi" },
      { city: "Tiket Pesawat ke Malang (MLG)", airport: "Bandar Udara Abdulrachman Saleh" },
      { city: "Tiket Pesawat ke Semarang (SRG)", airport: "Bandar Udara Internasional Ahmad Yani" },
      { city: "Tiket Pesawat ke Solo (SOC)", airport: "Bandara Adi Soemarmo Internasional" },
      { city: "Tiket Pesawat ke Surabaya (SUB)", airport: "Bandar Udara Internasional Juanda" },
      { city: "Tiket Pesawat ke Jogja (JOG)", airport: "Bandar Udara Adisutjipto" }
    ]
  },
  {
    region: "Sumatera",
    destinations: [
      { city: "Tiket Pesawat ke Banda Aceh (BTJ)", airport: "Bandara Internasional Sultan Iskandar Muda" },
      { city: "Tiket Pesawat ke Lampung (TKG)", airport: "Bandar Udara Internasional Radin Inten II" },
      { city: "Tiket Pesawat ke Batam (BTH)", airport: "Bandar Udara Internasional Hang Nadim" },
      { city: "Tiket Pesawat ke Bengkulu (BKS)", airport: "Bandara Fatmawati Soekarno" },
      { city: "Tiket Pesawat ke Jambi (DJB)", airport: "Bandara Sultan Thaha Saifuddin" },
      { city: "Tiket Pesawat ke Medan (KNO)", airport: "Bandar Udara Internasional Kualanamu" },
      { city: "Tiket Pesawat ke Padang (PDG)", airport: "Bandar Udara Internasional Minangkabau" },
      { city: "Tiket Pesawat ke Palembang (PLM)", airport: "Bandar Udara Internasional Sultan Mahmud Badaruddin II" },
      { city: "Tiket Pesawat ke Pekanbaru (PKU)", airport: "Bandar Udara Internasional Sultan Syarif Kasim II" }
    ]
  },
  {
    region: "Kalimantan",
    destinations: [
      { city: "Tiket Pesawat ke Balikpapan (BPN)", airport: "Bandar Udara Internasional Sultan Aji Muhammad Sulaiman Sepinggan" },
      { city: "Tiket Pesawat ke Banjarmasin (BDJ)", airport: "Bandara Internasional Syamsudin Noor" },
      { city: "Tiket Pesawat ke Berau (BEJ)", airport: "Bandara Internasional Kalimarau Berau" },
      { city: "Tiket Pesawat ke Pontianak (PNK)", airport: "Bandar Udara Internasional Supadio" },
      { city: "Tiket Pesawat ke Palangkaraya (PKY)", airport: "Bandar Udara Tjilik Riwut" }
    ]
  },
  {
    region: "Bali & Nusa Tenggara",
    destinations: [
      { city: "Tiket Pesawat ke Bali (DPS)", airport: "Bandara Internasional I Gusti Ngurah Rai" },
      { city: "Tiket Pesawat ke Lombok (LOP)", airport: "Bandara Internasional Lombok" },
      { city: "Tiket Pesawat ke Kupang (KOE)", airport: "Bandar Udara Internasional El Tari" },
      { city: "Tiket Pesawat ke Bima (BMU)", airport: "Bandar Udara Sultan Muhammad Salahuddin" }
    ]
  },
  {
    region: "Sulawesi",
    destinations: [
      { city: "Tiket Pesawat ke Makassar (UPG)", airport: "Bandar Udara Internasional Sultan Hasanuddin" },
      { city: "Tiket Pesawat ke Gorontalo (GTO)", airport: "Bandar Udara Djalaluddin" },
      { city: "Tiket Pesawat ke Kendari (KDI)", airport: "Bandar Udara Haluoleo" },
      { city: "Tiket Pesawat ke Palu (PLW)", airport: "Bandar Udara Mutiara SIS Al-Jufri" }
    ]
  },
  {
    region: "Maluku dan Papua",
    destinations: [
      { city: "Tiket Pesawat ke Ambon (AMQ)", airport: "Bandar Udara Internasional Pattimura" },
      { city: "Tiket Pesawat ke Biak (BIK)", airport: "Bandar Udara Internasional Frans Kaisiepo" },
      { city: "Tiket Pesawat ke Jayapura (DJJ)", airport: "Bandar Udara Sentani" },
      { city: "Tiket Pesawat ke Manokwari (MKW)", airport: "Bandar Udara Rendani" },
      { city: "Tiket Pesawat ke Ternate (TTE)", airport: "Bandar Udara Sultan Babullah" }
    ]
  }
];

export const PromoRegionTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-transparent mt-12 mb-16">
      <h2 className="text-xl font-bold text-[#11142D] mb-6">Beli Tiket Pesawat Domestik di tiket.com</h2>
      
      {/* Navigasi Tabs */}
      <div className="flex overflow-x-auto border-b border-gray-200 hide-scrollbar mb-6">
        {regionTabData.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`whitespace-nowrap pb-3 px-4 text-sm font-semibold transition-colors duration-200 relative ${
              activeTab === index 
                ? 'text-[#0064D2]' 
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            {tab.region}
            {activeTab === index && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0064D2] rounded-t-md"></span>
            )}
          </button>
        ))}
      </div>

      {/* Konten Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-6">
        {regionTabData[activeTab].destinations.map((dest, idx) => (
          <a key={idx} href="#" className="group flex flex-col gap-1">
            <span className="text-sm font-semibold text-gray-800 group-hover:text-[#0064D2] transition-colors">
              {dest.city}
            </span>
            <span className="text-[13px] text-gray-500 leading-tight">
              {dest.airport}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};