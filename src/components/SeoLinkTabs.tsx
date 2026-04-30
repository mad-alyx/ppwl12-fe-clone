import React, { useState, useRef, useEffect } from 'react';

// === SUB-KOMPONEN REUSABLE (Tinggi Dinamis & Warna Biru) ===
const LinkTabSection = ({ title, tabs, linksData }: any) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [indicatorProps, setIndicatorProps] = useState({ width: 0, xPos: 0 });
  
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const activeIndex = tabs.indexOf(activeTab);

  // Efek geser untuk garis biru di bawah tab
  useEffect(() => {
    const updateIndicator = () => {
      const activeElement = tabRefs.current[activeIndex];
      if (activeElement) {
        setIndicatorProps({
          width: activeElement.offsetWidth,
          xPos: activeElement.offsetLeft,
        });
      }
    };
    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeIndex]);

  return (
    <div className="max-w-[1200px] mx-auto px-4 pt-8 pb-4 font-sans">
      {/* HEADER */}
      <h2 className="text-[24px] leading-[30px] font-bold text-[#303135] mb-6">{title}</h2>
      
      {/* AREA NAVIGASI TAB */}
      <div className="relative mb-8">
        <div className="flex overflow-x-auto hide-scrollbar relative z-10 scroll-smooth">
          {tabs.map((tab: string, index: number) => (
            <button
              key={tab}
              type="button"
              ref={(el) => (tabRefs.current[index] = el)} 
              onClick={() => setActiveTab(tab)}
              className="relative px-0 mr-8 pb-3 bg-transparent border-none outline-none cursor-pointer group"
            >
              {/* Warna teks BIRU jika aktif, ABU-ABU jika pasif */}
              <span className={`text-[16px] leading-[22px] font-bold transition-colors duration-200 whitespace-nowrap ${
                activeTab === tab ? 'text-[#0064d2]' : 'text-[#71747d] hover:text-[#303135]'
              }`}>
                {tab}
              </span>
            </button>
          ))}
        </div>

        {/* Garis Dasar Abu-abu */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#d8dce8]"></div>
        
        {/* Indikator Garis Biru Sliding */}
        <div 
          className="absolute bottom-0 h-[2px] bg-[#0064d2] transition-transform duration-300 z-20"
          style={{ 
            width: `${indicatorProps.width}px`, 
            transform: `translateX(${indicatorProps.xPos}px)`,
            transitionTimingFunction: 'cubic-bezier(0.2, 0.8, 0.2, 1)'
          }}
        ></div>
      </div>

      {/* AREA KONTEN PANEL: Tinggi otomatis menyesuaikan isi */}
      <div>
        {tabs.map((tab: string) => (
          // Hanya merender grid jika tab tersebut aktif
          <div key={tab} className={activeTab === tab ? 'block' : 'hidden'}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8">
              {(linksData[tab] || []).map((link: any, i: number) => (
                <div key={i} className="flex flex-col group cursor-pointer">
                  <a href="#" className="text-[#303135] text-[16px] leading-[22px] font-medium group-hover:text-[#0064d2] transition-colors duration-200">
                    {link.text}
                  </a>
                  {link.subtext && (
                    <span className="text-[#71747d] text-[14px] leading-[20px] font-normal mt-1">
                      {link.subtext}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const SeoLinkTabs = () => {
  
  // ==========================================
  // 1. DATA TIKET PESAWAT DOMESTIK
  // ==========================================
  const domTabs = ['Jawa', 'Sumatera', 'Kalimantan', 'Bali & Nusa Tenggara', 'Sulawesi', 'Maluku dan Papua'];
  const domData = {
    'Jawa': [
      { text: 'Tiket Pesawat ke Jakarta (CGK/HLP)', subtext: 'Bandara Soekarno Hatta & Halim Perdanakusuma' },
      { text: 'Tiket Pesawat ke Bandung (BDO)', subtext: 'Bandara Husein Sastranegara International' },
      { text: 'Tiket Pesawat ke Majalengka (KTJ)', subtext: 'Bandara Internasional Kertajati' },
      { text: 'Tiket Pesawat ke Banyuwangi (BWX)', subtext: 'Bandar Udara Banyuwangi' },
      { text: 'Tiket Pesawat ke Malang (MLG)', subtext: 'Bandar Udara Abdulrachman Saleh' },
      { text: 'Tiket Pesawat ke Semarang (SRG)', subtext: 'Bandar Udara Internasional Ahmad Yani' },
      { text: 'Tiket Pesawat ke Solo (SOC)', subtext: 'Bandara Adi Soemarmo Internasional' },
      { text: 'Tiket Pesawat ke Surabaya (SUB)', subtext: 'Bandar Udara Internasional Juanda' },
      { text: 'Tiket Pesawat ke Jogja (JOG)', subtext: 'Bandar Udara Adisutjipto' },
    ],
    'Sumatera': [
      { text: 'Tiket Pesawat ke Banda Aceh (BTJ)', subtext: 'Bandara Internasional Sultan Iskandar Muda' },
      { text: 'Tiket Pesawat ke Lampung (TKG)', subtext: 'Bandar Udara Internasional Radin Inten II' },
      { text: 'Tiket Pesawat ke Batam (BTH)', subtext: 'Bandar Udara Internasional Hang Nadim' },
      { text: 'Tiket Pesawat ke Bengkulu (BKS)', subtext: 'Bandara Fatmawati Soekarno' },
      { text: 'Tiket Pesawat ke Jambi (DJB)', subtext: 'Bandara Sultan Thaha Saifuddin' },
      { text: 'Tiket Pesawat ke Lhokseumawe (LSW)', subtext: 'Bandar Udara Malikus Saleh' },
      { text: 'Tiket Pesawat ke Medan (KNO)', subtext: 'Bandar Udara Internasional Kualanamu' },
      { text: 'Tiket Pesawat ke Padang (PDG)', subtext: 'Bandar Udara Internasional Minangkabau' },
      { text: 'Tiket Pesawat ke Palembang (PLM)', subtext: 'Bandar Udara Internasional Sultan Mahmud Badaruddin II' },
      { text: 'Tiket Pesawat ke Pangkal Pinang (PGK)', subtext: 'Bandar Udara Depati Amir' },
      { text: 'Tiket Pesawat ke Pekanbaru (PKU)', subtext: 'Bandar Udara Internasional Sultan Syarif Kasim II' },
      { text: 'Tiket Pesawat ke Tanjung Pinang (TNJ)', subtext: 'Bandara Internasional Raja Haji Fisabilillah' },
      { text: 'Tiket Pesawat ke Tanjung Pandan (TJQ)', subtext: 'Bandara Internasional Hanandjoeddin' },
    ],
    'Kalimantan': [
      { text: 'Tiket Pesawat ke Balikpapan (BPN)', subtext: 'Bandar Udara Internasional Sultan Aji Muhammad Sulaiman Sepinggan' },
      { text: 'Tiket Pesawat ke Banjarmasin (BDJ)', subtext: 'Bandara Internasional Syamsudin Noor' },
      { text: 'Tiket Pesawat ke Berau (BEJ)', subtext: 'Bandara Internasional Kalimarau Berau' },
      { text: 'Tiket Pesawat ke Kotabaru (KBU)', subtext: 'Bandar Udara Gusti Syamsir Alam' },
      { text: 'Tiket Pesawat ke Palangkaraya (PKY)', subtext: 'Bandar Udara Tjilik Riwut' },
      { text: 'Tiket Pesawat ke Pontianak (PNK)', subtext: 'Bandar Udara Internasional Supadio' },
      { text: 'Tiket Pesawat ke Sampit (SMQ)', subtext: 'Bandar Udara H. Asan Sampit' },
    ],
    'Bali & Nusa Tenggara': [
      { text: 'Tiket Pesawat ke Bali (DPS)', subtext: 'Bandara Internasional I Gusti Ngurah Rai' },
      { text: 'Tiket Pesawat ke Alor (ARD)', subtext: 'Bandar Udara Mali Alor' },
      { text: 'Tiket Pesawat ke Atambua (ABU)', subtext: 'Bandar Udara A. A. Bere Tallo' },
      { text: 'Tiket Pesawat ke Bima (BMU)', subtext: 'Bandar Udara Sultan Muhammad Salahuddin' },
      { text: 'Tiket Pesawat ke Ende (ENE)', subtext: 'Bandara H. Hasan Aroeboesman Ende' },
      { text: 'Tiket Pesawat ke Kupang (KOE)', subtext: 'Bandar Udara Internasional El Tari' },
      { text: 'Tiket Pesawat ke Lombok (LOP)', subtext: 'Bandara Internasional Lombok' },
      { text: 'Tiket Pesawat ke Maumere (MOF)', subtext: 'BANDARA FRANS SEDA' },
      { text: 'Tiket Pesawat ke Waingapu (WGP)', subtext: 'Bandar Udara Umbu Mehang Kunda' },
      { text: 'Tiket Pesawat ke Sumbawa Besar (SWQ)', subtext: 'Bandar Udara Sultan Muhammad Kaharuddin' },
    ],
    'Sulawesi': [
      { text: 'Tiket Pesawat ke Makassar (UPG)', subtext: 'Bandar Udara Internasional Sultan Hasanuddin' },
      { text: 'Tiket Pesawat ke Gorontalo (GTO)', subtext: 'Bandar Udara Djalaluddin' },
      { text: 'Tiket Pesawat ke Kendari (KDI)', subtext: 'Bandar Udara Haluoleo' },
      { text: 'Tiket Pesawat ke Palu (PLW)', subtext: 'Bandar Udara Mutiara SIS Al-Jufri' },
      { text: 'Tiket Pesawat ke Poso (PSJ)', subtext: 'Bandar Udara Kasiguncu' },
      { text: 'Tiket Pesawat ke Bau-Bau (BUW)', subtext: 'Bandara Betoambari' },
      { text: 'Tiket Pesawat ke Buol (UOL)', subtext: 'Bandar Udara Pogogul Buol' },
      { text: 'Tiket Pesawat ke Luwuk (LUW)', subtext: 'Bandar Udara Syukuran Aminuddin Amir' },
      { text: 'Tiket Pesawat ke Mamuju (MJU)', subtext: 'Bandar Udara Tampa Padang' },
      { text: 'Tiket Pesawat ke Tahuna (NAH)', subtext: 'Bandar Udara Naha' },
      { text: 'Tiket Pesawat ke Tolitoli (TLI)', subtext: 'Bandar Udara Sultan Bantilan' },
    ],
    'Maluku dan Papua': [
      { text: 'Tiket Pesawat ke Ambon (AMQ)', subtext: 'Bandar Udara Internasional Pattimura' },
      { text: 'Tiket Pesawat ke Biak (BIK)', subtext: 'Bandar Udara Internasional Frans Kaisiepo' },
      { text: 'Tiket Pesawat ke Fakfak (FKQ)', subtext: 'Bandar Udara Torea Fakfak' },
      { text: 'Tiket Pesawat ke Jayapura (DJJ)', subtext: 'Bandar Udara Sentani' },
      { text: 'Tiket Pesawat ke Langgur (LUV)', subtext: 'Logo Penjual Bandara Karel Sadsuitubun Langgur' },
      { text: 'Tiket Pesawat ke Manokwari (MKW)', subtext: 'Bandar Udara Rendani' },
      { text: 'Tiket Pesawat ke Merauke (MKQ)', subtext: 'Bandar Udara Mopah-Merauke' },
      { text: 'Tiket Pesawat ke Ternate (TTE)', subtext: 'Bandar Udara Sultan Babullah' },
    ]
  };

  // ==========================================
  // 2. DATA TIKET PESAWAT INTERNASIONAL
  // ==========================================
  const intlTabs = ['Asia', 'Australia', 'Eropa', 'Amerika', 'Afrika'];
  const intlData = {
    'Asia': [
      { text: 'Tiket Pesawat ke Tokyo', subtext: 'Jepang' },
      { text: 'Tiket Pesawat ke Kuala Lumpur', subtext: 'Malaysia' },
      { text: 'Tiket Pesawat ke Bangkok', subtext: 'Thailand' },
      { text: 'Tiket Pesawat ke Hanoi', subtext: 'Vietnam' },
      { text: 'Tiket Pesawat ke Manila', subtext: 'Filipina' },
      { text: 'Tiket Pesawat ke Phnom Penh', subtext: 'Kamboja' },
      { text: 'Tiket Pesawat ke Singapura', subtext: 'Singapura' },
      { text: 'Tiket Pesawat ke Dili', subtext: 'Timor Leste' },
      { text: 'Tiket Pesawat ke Seoul', subtext: 'Korea Selatan' },
      { text: 'Tiket Pesawat ke Dubai', subtext: 'Dubai' },
      { text: 'Tiket Pesawat ke Jeddah', subtext: 'Mekkah - Haji/Umroh' },
      { text: 'Tiket Pesawat ke Mumbai', subtext: 'Mumbai' },
      { text: 'Tiket Pesawat ke Beijing', subtext: 'Beijing' },
      { text: 'Tiket Pesawat ke Taipei', subtext: 'Taipei' },
      { text: 'Tiket Pesawat ke Hong Kong', subtext: 'Hong Kong' },
    ],
    'Australia': [
      { text: 'Tiket Pesawat ke Hobart', subtext: 'Tasmania' },
      { text: 'Tiket Pesawat ke Brisbane', subtext: 'Queensland' },
      { text: 'Tiket Pesawat ke Perth', subtext: 'Australia Barat' },
      { text: 'Tiket Pesawat ke Melbourne', subtext: 'Victoria' },
      { text: 'Tiket Pesawat ke Sydney', subtext: 'New South Wales' },
      { text: 'Tiket Pesawat ke Adelaide', subtext: 'Adelaide' },
      { text: 'Tiket Pesawat ke Canberra', subtext: 'Canberra' },
      { text: 'Tiket Pesawat ke Gold Coast', subtext: 'Gold Coast' },
      { text: 'Tiket Pesawat ke Cairns', subtext: 'Cairns' },
      { text: 'Tiket Pesawat ke Ayers Rock', subtext: 'Ayers Rock' },
      { text: 'Tiket Pesawat ke Townsville', subtext: 'Townsville' },
      { text: 'Tiket Pesawat ke Hamilton Island', subtext: 'Hamilton Island' },
      { text: 'Tiket Pesawat ke Darwin', subtext: 'Darwin' },
      { text: 'Tiket Pesawat ke Mackay', subtext: 'Mackay' },
      { text: 'Tiket Pesawat ke Geraldton', subtext: 'Geraldton' },
    ],
    'Eropa': [
      { text: 'Tiket Pesawat ke London', subtext: 'UK' },
      { text: 'Tiket Pesawat ke Amsterdam', subtext: 'Amsterdam' },
      { text: 'Tiket Pesawat ke Copenhagen', subtext: 'Copenhagen' },
      { text: 'Tiket Pesawat ke Madrid', subtext: 'Madrid' },
      { text: 'Tiket Pesawat ke Milan', subtext: 'Milan' },
      { text: 'Tiket Pesawat ke Barcelona', subtext: 'Barcelona' },
      { text: 'Tiket Pesawat ke Dublin', subtext: 'Dublin' },
      { text: 'Tiket Pesawat ke Paris', subtext: 'Paris' },
      { text: 'Tiket Pesawat ke Zurich', subtext: 'Zurich' },
      { text: 'Tiket Pesawat ke Berlin', subtext: 'Berlin' },
      { text: 'Tiket Pesawat ke Brussels', subtext: 'Brussels' },
      { text: 'Tiket Pesawat ke Athena', subtext: 'Athena' },
      { text: 'Tiket Pesawat ke Oslo', subtext: 'Oslo' },
      { text: 'Tiket Pesawat ke Stockholm', subtext: 'Stockholm' },
      { text: 'Tiket Pesawat ke Budapest', subtext: 'Budapest' },
    ],
    'Amerika': [
      { text: 'Tiket Pesawat ke New York', subtext: 'New York' },
      { text: 'Tiket Pesawat ke Los Angeles', subtext: 'Los Angeles' },
      { text: 'Tiket Pesawat ke Chicago', subtext: 'Chicago' },
      { text: 'Tiket Pesawat ke Las Vegas', subtext: 'Las Vegas' },
      { text: 'Tiket Pesawat ke Dallas', subtext: 'Dallas' },
      { text: 'Tiket Pesawat ke Boston', subtext: 'Boston' },
      { text: 'Tiket Pesawat ke San Francisco', subtext: 'San Francisco' },
      { text: 'Tiket Pesawat ke Washington DC', subtext: 'Washington DC' },
      { text: 'Tiket Pesawat ke Miami', subtext: 'Miami' },
      { text: 'Tiket Pesawat ke Seattle', subtext: 'Seattle' },
      { text: 'Tiket Pesawat ke Orlando', subtext: 'Orlando' },
      { text: 'Tiket Pesawat ke Denver', subtext: 'Denver' },
      { text: 'Tiket Pesawat ke Portland', subtext: 'Portland' },
      { text: 'Tiket Pesawat ke Atlanta', subtext: 'Atlanta' },
      { text: 'Tiket Pesawat ke Austin', subtext: 'Austin' },
    ],
    'Afrika': [
      { text: 'Tiket Pesawat ke Kairo', subtext: 'Cairo' },
      { text: 'Tiket Pesawat ke Marrakech', subtext: 'Marrakech' },
      { text: 'Tiket Pesawat ke Johannesburg', subtext: 'Johannesburg' },
      { text: 'Tiket Pesawat ke Casablanca', subtext: 'Casablanca' },
      { text: 'Tiket Pesawat ke Alexandria', subtext: 'Alexandria' },
      { text: 'Tiket Pesawat ke Durban', subtext: 'Durban' },
      { text: 'Tiket Pesawat ke Cape Town', subtext: 'Cape Town' },
      { text: 'Tiket Pesawat ke Kilimanjaro', subtext: 'Kilimanjaro' },
      { text: 'Tiket Pesawat ke Nairobi', subtext: 'Nairobi' },
      { text: 'Tiket Pesawat ke Luxor', subtext: 'Luxor' },
      { text: 'Tiket Pesawat ke Sharm El-Sheikh', subtext: 'Sharm El-Sheikh' },
      { text: 'Tiket Pesawat ke Tangier', subtext: 'Tangier' },
      { text: 'Tiket Pesawat ke Lagos', subtext: 'Lagos' },
      { text: 'Tiket Pesawat ke Agadir', subtext: 'Agadir' },
      { text: 'Tiket Pesawat ke Accra', subtext: 'Accra' },
    ]
  };

  // ==========================================
  // 3. DATA PENERBANGAN POPULER LAINNYA
  // ==========================================
  const popularTabs = [
    'Sumatra', 'Amerika & Eropa', 'Asia Timur', 'Indonesia Timur', 
    'Indonesia Tengah', 'Bali', 'Asia Tenggara', 'Tujuan Jakarta', 
    'Rute ke Jakarta', 'Jawa', 'Surabaya', 'Timur Tengah'
  ];
  const popularData = {
    'Sumatra': [
      { text: 'Tiket Pesawat Malaysia Airlines ke Medan' },
      { text: 'Tiket Pesawat Garuda Indonesia ke Jambi' },
      { text: 'Tiket Pesawat Garuda Indonesia ke Padang' },
      { text: 'Tiket Pesawat Surabaya Lampung' },
      { text: 'Tiket Pesawat Medan Sibolga' },
      { text: 'Tiket Pesawat Semarang Lampung' },
      { text: 'Tiket Pesawat Bandung Lampung' },
      { text: 'Tiket Pesawat Lampung Palembang' },
      { text: 'Tiket Pesawat Lampung Jambi' },
      { text: 'Tiket Pesawat Silangit Jakarta' },
      { text: 'Tiket Pesawat Gunung Sitoli Medan' },
      { text: 'Tiket Pesawat Jakarta Tanjung Pinang' },
      { text: 'Tiket Pesawat Jogja Padang' }
    ],
    'Amerika & Eropa': [
      { text: 'Tiket Pesawat Lufthansa ke Frankfurt' },
      { text: 'Tiket Pesawat Garuda Indonesia ke Frankfurt' },
      { text: 'Tiket Pesawat Emirates ke New York' },
      { text: 'Tiket Pesawat Garuda Indonesia ke Paris' },
      { text: 'Tiket Pesawat Emirates ke Amsterdam' },
      { text: 'Tiket Pesawat Emirates ke London' },
      { text: 'Tiket Pesawat Emirates ke Paris' },
      { text: 'Tiket Pesawat Paris London' },
      { text: 'Tiket Pesawat Singapore New York' }
    ],
    'Asia Timur': [
      { text: 'Tiket Pesawat Cathay Pacific ke Seoul' },
      { text: 'Tiket Pesawat AirAsia ke Tokyo' },
      { text: 'Tiket Pesawat Asiana Airlines ke Seoul' },
      { text: 'Tiket Pesawat Batik Air ke Hong Kong' },
      { text: 'Tiket Pesawat Batik Air ke Taipei' },
      { text: 'Tiket Pesawat China Eastern Airlines ke Shanghai' },
      { text: 'Tiket Pesawat Tokyo Nagoya' },
      { text: 'Tiket Pesawat Tokyo Okinawa' },
      { text: 'Tiket Pesawat Korean Air ke Seoul' },
      { text: 'Tiket Pesawat ke Osaka' },
      { text: 'Tiket Pesawat China Eastern Airlines' }
    ],
    'Indonesia Timur': [
      { text: 'Tiket Pesawat ke Morowali' },
      { text: 'Tiket Pesawat ke Nabire' },
      { text: 'Tiket Pesawat ke Kolaka' },
      { text: 'Tiket Pesawat Nam Air ke Tambolaka' },
      { text: 'Tiket Pesawat Citilink ke Manado' },
      { text: 'Tiket Pesawat Garuda Indonesia ke Makassar' },
      { text: 'Tiket Pesawat Sorong Raja Ampat' },
      { text: 'Tiket Pesawat Makassar Ambon' },
      { text: 'Tiket Pesawat Surabaya Ambon' }
    ],
    'Indonesia Tengah': [
      { text: 'Tiket Pesawat Garuda Indonesia ke Balikpapan' },
      { text: 'Tiket Pesawat Banjarmasin Palangkaraya' },
      { text: 'Tiket Pesawat Garuda Indonesia ke Banjarmasin' },
      { text: 'Tiket Pesawat Lion Air ke Palangkaraya' },
      { text: 'Tiket Pesawat ke Samarinda' },
      { text: 'Tiket Pesawat Jakarta Samarinda' },
      { text: 'Tiket Pesawat Jakarta Palangkaraya' },
      { text: 'Tiket Pesawat Makassar Palu' },
      { text: 'Tiket Pesawat Timika Makassar' },
      { text: 'Tiket Pesawat Surabaya Pangkalan Bun' }
    ],
    'Bali': [
      { text: 'Tiket Pesawat Malindo Air ke Bali' },
      { text: 'Tiket Pesawat Malaysia Airlines ke Bali' },
      { text: 'Tiket Pesawat Virgin Australia ke Bali' },
      { text: 'Tiket Pesawat Turkish Airlines ke Bali' },
      { text: 'Tiket Pesawat Emirates ke Bali' },
      { text: 'Tiket Pesawat Scoot ke Bali' },
      { text: 'Tiket Pesawat Darwin Bali' },
      { text: 'Tiket Pesawat Manado Bali' },
      { text: 'Tiket Pesawat Lampung Bali' }
    ],
    'Asia Tenggara': [
      { text: 'Tiket Pesawat AirAsia ke Kuching' },
      { text: 'Tiket Pesawat AirAsia ke Kuala Lumpur' },
      { text: 'Tiket Pesawat Batik Air ke Bangkok' },
      { text: 'Tiket Pesawat AirAsia ke Singapore' },
      { text: 'Tiket Pesawat AirAsia ke Bangkok' },
      { text: 'Tiket Pesawat Lion Air ke Penang' },
      { text: 'Tiket Pesawat AirAsia ke Penang' },
      { text: 'Tiket Pesawat Firefly ke Penang' },
      { text: 'Tiket Pesawat Batik Air ke Penang' },
      { text: 'Tiket Pesawat Jakarta Johor Bahru' },
      { text: 'Tiket Pesawat Pontianak Kuching' },
      { text: 'Tiket Pesawat Kuala Lumpur Johor Bahru' },
      { text: 'Tiket Pesawat Solo Singapore' },
      { text: 'Tiket Pesawat Kuala Lumpur Kuching' },
      { text: 'Tiket Pesawat Garuda Indonesia ke Auckland' },
      { text: 'Tiket Pesawat Royal Brunei Airlines ke Bandar Seri Begawan' }
    ],
    'Tujuan Jakarta': [
      { text: 'Tiket Pesawat Malaysia Airlines ke Jakarta' },
      { text: 'Tiket Pesawat Ethiopian Airlines ke Jakarta' },
      { text: 'Tiket Pesawat Turkish Airlines ke Jakarta' },
      { text: 'Tiket Pesawat Royal Brunei Airlines ke Jakarta' },
      { text: 'Tiket Pesawat Emirates ke Jakarta' },
      { text: 'Tiket Pesawat Cathay Pacific ke Jakarta' },
      { text: 'Tiket Pesawat British Airways ke Jakarta' },
      { text: 'Tiket Pesawat American Airlines ke Jakarta' },
      { text: 'Tiket Pesawat Air New Zealand ke Jakarta' }
    ],
    'Rute ke Jakarta': [
      { text: 'Tiket Pesawat Bajawa Jakarta' },
      { text: 'Tiket Pesawat Sumenep Jakarta' },
      { text: 'Tiket Pesawat Manado Jakarta' },
      { text: 'Tiket Pesawat Jambi Jakarta' },
      { text: 'Tiket Pesawat Lampung Jakarta' },
      { text: 'Tiket Pesawat Malang Jakarta' },
      { text: 'Tiket Pesawat Palu Jakarta' },
      { text: 'Tiket Pesawat Jayapura Jakarta' },
      { text: 'Tiket Pesawat Palangkaraya Jakarta' },
      { text: 'Tiket Pesawat Bengkulu Jakarta' },
      { text: 'Tiket Pesawat Pangkalan Bun Jakarta' },
      { text: 'Tiket Pesawat Sorong Jakarta' },
      { text: 'Tiket Pesawat Tarakan Jakarta' },
      { text: 'Tiket Pesawat Gunung Sitoli Jakarta' }
    ],
    'Jawa': [
      { text: 'Tiket Pesawat Lion Air ke Malang' },
      { text: 'Tiket Pesawat Batik Air ke Bandung' },
      { text: 'Tiket Pesawat AirAsia ke Solo' },
      { text: 'Tiket Pesawat Nam Air ke Semarang' },
      { text: 'Tiket Pesawat Bajawa Bandung' },
      { text: 'Tiket Pesawat Surabaya Solo' },
      { text: 'Tiket Pesawat Batik Air ke Banyiwangi' },
      { text: 'Tiket Pesawat Garuda Indonesia ke Bandung' },
      { text: 'Tiket Pesawat Solo Malang' },
      { text: 'Tiket Pesawat Bandung Banyuwangi' },
      { text: 'Tiket Pesawat Nagoya Semarang' },
      { text: 'Tiket Pesawat Lampung Jogja' }
    ],
    'Surabaya': [
      { text: 'Tiket Pesawat Malaysia Airlines ke Surabaya' },
      { text: 'Tiket Pesawat Singapore Airlines ke Surabaya' },
      { text: 'Tiket Pesawat Royal Brunei Airlines ke Surabaya' },
      { text: 'Tiket Pesawat China Airlines ke Surabaya' },
      { text: 'Tiket Pesawat Manado Surabaya' },
      { text: 'Tiket Pesawat Palangkaraya Surabaya' },
      { text: 'Tiket Pesawat Tarakan Surabaya' },
      { text: 'Tiket Pesawat Palu Surabaya' }
    ],
    'Timur Tengah': [
      { text: 'Tiket Pesawat Batik Air ke Jeddah' },
      { text: 'Tiket Pesawat Etihad Airways ke Dubai' },
      { text: 'Tiket Pesawat Qatar Airways ke Jeddah' },
      { text: 'Tiket Pesawat Emirates ke Jeddah' },
      { text: 'Tiket Pesawat Garuda Indonesia ke Dubai' },
      { text: 'Tiket Pesawat Oman Air ke Muscat' },
      { text: 'Tiket Pesawat Singapore Airlines ke Jeddah' },
      { text: 'Tiket Pesawat Jakarta Doha' },
      { text: 'Tiket Pesawat Jeddah Madinah' },
      { text: 'Tiket Pesawat Bali Dubai' }
    ]
  };

  return (
    <div className="w-full">
      <LinkTabSection 
        title="Beli Tiket Pesawat Domestik di tiket.com" 
        tabs={domTabs} 
        linksData={domData} 
      />
      <LinkTabSection 
        title="Pesan Tiket Pesawat Internasional di tiket.com" 
        tabs={intlTabs} 
        linksData={intlData} 
      />
      <LinkTabSection 
        title="Penerbangan Populer Lainnya" 
        tabs={popularTabs} 
        linksData={popularData} 
      />
    </div>
  );
};

export default SeoLinkTabs;