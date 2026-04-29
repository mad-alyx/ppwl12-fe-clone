import { useState, useRef, useEffect } from 'react';

const TravelIdeas = () => {
  // Status untuk menyimpan tab mana yang sedang aktif
  const [activeTab, setActiveTab] = useState('Internasional');
  
  // Status untuk menyembunyikan/memunculkan tombol panah
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  // Data destinasi sesuai kategori tab
  const dataDestinasi: { [key: string]: {img: string }[] } = {
    'Internasional': [
      { img: '/img/singapore.jpg' },
      { img: '/img/malaysia.jpg' },
      { img: '/img/sydney.jpg' },
      { img: '/img/vietnam.jpg' },
      { img: '/img/newzealand.jpg' },
      { img: '/img/filipina.jpg' },
      { img: '/img/macau.jpg' },
      { img: '/img/hongkong.jpg' },
      { img: '/img/thailand.jpg' },
      { img: '/img/jepang.jpg' },
      { img: '/img/korsel.jpg' },
    ],
    'Indonesia': [
      { img: '/img/bali.jpg' },
      { img: '/img/jakarta.jpg' },
      { img: '/img/labuanbajo.jpg' },
      { img: '/img/yogyakarta.jpg' },
      { img: '/img/medan.jpg' },
      { img: '/img/palembang.jpg' },
      { img: '/img/balikpapan.jpg' },
    ],
    'Tipe Travel': [
      { img: '/img/solo.jpg' },
      { img: '/img/family.jpg' },
      { img: '/img/backpack.jpg' },
      { img: '/img/luxury.jpg' },
      { img: '/img/Business.jpg' },
    ]
  };

  // Fungsi untuk mengecek posisi scroll agar panah muncul/hilang tepat waktu
  const handleScrollStatus = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Reset posisi scroll ke awal setiap kali ganti Tab
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
      handleScrollStatus();
    }
  }, [activeTab]);

  // Fungsi geser langsung 4 kartu (sejauh lebar container yang terlihat)
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const moveDistance = direction === 'left' ? -clientWidth : clientWidth;
      
      scrollRef.current.scrollBy({ left: moveDistance, behavior: 'smooth' });
      setTimeout(handleScrollStatus, 500);
    }
  };

  return (
    <section className="w-full bg-white py-12">
      <div className="container mx-auto px-4 max-w-275">
        
        <h2 className="font-tiket text-[22px] font-bold text-[#1A1A1A] mb-6">
          Ide liburan yang wajib dicatat! 🗺️📌
        </h2>

        {/* Tab */}
        <div className="flex gap-2 mb-8 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {Object.keys(dataDestinasi).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-2 rounded-full text-[14px] font-tiket font-light border transition-all duration-300 
                ${activeTab === tab 
                  ? 'bg-[#E8F3FF] text-[#0064D2] border-[#0064D2]' 
                  : 'bg-white text-[#1A1A1A] border-[#E5E7EB]'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Carousel Area */}
        <div className="relative group">
          
          {/* Tombol Panah Kiri */}
        {showLeftArrow && (
            <button 
              onClick={() => scroll('left')}
              className="absolute -left-4 top-1/2 -translate-y-1/2 w-[32px] h-[44px] bg-white rounded-[8px] shadow-[0_2px_10px_rgba(0,0,0,0.1)] flex items-center justify-center border border-gray-100 z-20 hover:bg-gray-50 transition-all hidden md:flex"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4d4f56" strokeWidth="3" className="rotate-180">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          )}

          {/* GAMBAR */}
          <div 
            ref={scrollRef}
            onScroll={handleScrollStatus}
            className="flex gap-4 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {dataDestinasi[activeTab].map((item, index) => (
              <div 
                key={index} 
                /* min-w-[calc(25%-12px)] memastikan tepat 4 kartu tampil di desktop */
                className="relative min-w-[75%] md:min-w-[calc(25%-12px)] aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-sm"
              >
                <img src={item.img}className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Tombol Panah Kanan */}
            {showRightArrow && dataDestinasi[activeTab].length > 4 && (
            <button 
              onClick={() => scroll('right')}
              className="absolute -right-4 top-1/2 -translate-y-1/2 w-[32px] h-[44px] bg-white rounded-[8px] shadow-[0_2px_10px_rgba(0,0,0,0.1)] flex items-center justify-center border border-gray-100 z-20 hover:bg-gray-50 transition-all hidden md:flex"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4d4f56" strokeWidth="3">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          )}
        </div>
        </div>

        {/* Tombol Lihat Semua di Bawah */}
        <div className="mt-10 flex justify-center">
          <button className="px-12 py-3 rounded-[12px] bg-[#F0F5FF] text-[#0064D2] font-tiket font-bold text-[15px] hover:bg-[#E1EBFF] transition-colors">
            Lihat semua!
          </button>
        </div>
    </section>
  );
};

export default TravelIdeas;