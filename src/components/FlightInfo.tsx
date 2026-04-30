import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeftRight, Plane, Search, ChevronRight } from 'lucide-react';

// --- KOMPONEN 1: FlightSearch ---
const FlightSearch = () => {
  const [isRoundTrip, setIsRoundTrip] = useState(true);

  return (
    <div className="relative h-[550px] w-full flex items-center">
      {/* Background Hero */}
      <img 
        src="/bgpesawat.png" 
        className="absolute inset-0 w-full h-full object-cover"
        alt="Hero Background"
      />
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative max-w-7xl mx-auto px-4 w-full flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Teks Kiri */}
        <div className="text-white max-w-md">
          <h1 className="text-5xl font-bold leading-tight text-white shadow-sm">
            Pesan tiket pesawat dan jadwal penerbangan hari ini
          </h1>
        </div>

        {/* Form Search Kanan */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md">
          <div className="space-y-4">
            <div className="relative border rounded-xl p-3">
              <label className="text-[10px] text-gray-500 font-bold">Dari</label>
              <div className="font-bold text-gray-800 text-lg">Jakarta JKTC</div>
              <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-white border rounded-full p-1.5 shadow-md hover:scale-110 transition">
                <ArrowLeftRight size={18} className="text-blue-500" />
              </button>
            </div>

            <div className="border rounded-xl p-3">
              <label className="text-[10px] text-gray-500 font-bold">Ke</label>
              <div className="text-gray-400 font-medium">Mau ke mana?</div>
            </div>

            <div className="flex gap-2">
              <div className="flex-1 border rounded-xl p-3">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] text-gray-500 font-bold">Pergi</label>
                  <input 
                    type="checkbox" 
                    checked={isRoundTrip} 
                    onChange={() => setIsRoundTrip(!isRoundTrip)}
                    className="w-4 h-4 accent-blue-500"
                  />
                </div>
                <div className="font-bold text-sm">Kam, 30 Apr</div>
              </div>
              
              <div className={`flex-1 border rounded-xl p-3 ${!isRoundTrip ? 'bg-gray-100 opacity-50' : ''}`}>
                <label className="text-[10px] text-gray-500 font-bold">Pulang</label>
                <div className="font-bold text-sm">{isRoundTrip ? 'Jum, 1 Mei' : '-'}</div>
              </div>
            </div>

            <div className="border rounded-xl p-3">
              <div className="font-bold text-sm text-gray-800">1 Penumpang, Ekonomi</div>
            </div>

            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-extrabold py-4 rounded-xl text-lg transition-all transform active:scale-95">
              Ayo Cari
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- KOMPONEN 2: FlightInfo ---
const FlightInfo = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const infos = [
    {
      title: 'Cara Reschedule Penerbangan',
      desc: 'Cek di sini untuk mengubah jadwal penerbanganmu.',
      img: 'https://s-gk.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/platform-mweb-low/string/2021/05/04/745597c7-e615-472d-ad91-49d260d28b2e-1620110806101-dd04adc3043d2b1c75f2acaeba0b4959.png',
      link: 'https://www.tiket.com/id-id/info/how-to-reschedule'
    },
    {
      title: 'Promo Spesial untuk Kamu',
      desc: 'Yuk, cek ada promo apa aja yang bisa kamu pakai biar pesan tiket pesawat jadi lebih hemat.',
      img: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/platform-mweb-low/string/2025/03/24/752ded74-6d55-4e15-913f-39be90ef09e2-1742810940432-7e5f6921542c6f96d9aee7d5092112a9.png',
      link: 'https://www.tiket.com/id-id/promo/pesawat'
    },
    {
      title: 'Cara Refund Tiket Pesawat',
      desc: 'Yang perlu kamu tau tentang pengembalian uang tiket.',
      img: 'https://s-gk.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/platform-mweb-low/string/2021/05/04/549fff8a-64a0-4a73-b155-f35501b878ca-1620110658138-29d3768c8b238467dc5f8ebf46a27225.png',
      link: 'https://www.tiket.com/id-id/info/flight-refund'
    },
    {
      title: 'Persyaratan Penerbangan',
      desc: 'Cek protokol dan syarat selama pandemi.',
      img: 'https://s-gk.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/platform-mweb-low/string/2021/05/04/70efb95c-2f73-458f-9786-9c263d051bd1-1620110498549-a4a7a53cc703f52b489d0bbd9255a1a7.png',
      link: 'https://www.tiket.com/id-id/info/tiket-safe'
    }
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 5);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, []);

  const slideLeft = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 300;
      scrollRef.current.scrollBy({ left: -(cardWidth + 16), behavior: 'smooth' });
    }
  };

  const slideRight = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 300;
      scrollRef.current.scrollBy({ left: cardWidth + 16, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-white pt-10 pb-6 font-sans">
      <div className="max-w-[1200px] mx-auto px-4 md:px-0">
        <h2 className="text-[24px] leading-[30px] font-bold text-[#303135] mb-6">
          Penting untuk Penerbanganmu
        </h2>
        <div className="relative group">
          {canScrollLeft && (
            <button onClick={slideLeft} className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-[#d8dce8] rounded-full shadow-md z-20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                <path fill="#71747d" d="M5.414 11.009H21c.552 0 1 .444 1 .991 0 .547-.448.991-1 .991H5.414l5.364 5.317c.39.387.39 1.015 0 1.402s-1.024.387-1.414 0L2.293 12.7C2.112 12.523 2 12.275 2 12c0-.274.112-.522.293-.7l7.071-7.01c.39-.387 1.024-.387 1.414 0 .39.387.39 1.015 0 1.402L5.414 11.01z"></path>
              </svg>
            </button>
          )}
          <div ref={scrollRef} onScroll={handleScroll} className="flex gap-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory scroll-smooth pb-2 pt-1">
            {infos.map((info, index) => (
              <div key={index} className="flex-shrink-0 snap-start w-[85%] md:w-[calc(33.333%-11px)]">
                <a href={info.link} className="block p-4 bg-white rounded-xl shadow-sm border border-[#eef0f7] hover:shadow-md transition-shadow h-full">
                  <div className="flex gap-4 items-start h-full">
                    <div className="w-10 h-10 flex-shrink-0 relative mt-1">
                      <img src={info.img} alt={info.title} className="absolute inset-0 w-full h-full object-contain" />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <h3 className="text-[16px] leading-[22px] font-bold text-[#303135] mb-1">{info.title}</h3>
                      <p className="text-[14px] leading-[20px] text-[#71747d]">{info.desc}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
          {canScrollRight && (
            <button onClick={slideRight} className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-[#d8dce8] rounded-full shadow-md z-20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" className="rotate-180">
                <path fill="#71747d" d="M5.414 11.009H21c.552 0 1 .444 1 .991 0 .547-.448.991-1 .991H5.414l5.364 5.317c.39.387.39 1.015 0 1.402s-1.024.387-1.414 0L2.293 12.7C2.112 12.523 2 12.275 2 12c0-.274.112-.522.293-.7l7.071-7.01c.39-.387 1.024-.387 1.414 0 .39.387.39 1.015 0 1.402L5.414 11.01z"></path>
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

// --- KOMPONEN UTAMA ---
const CombinedPage = () => {
  return (
    <>
      <FlightSearch />
      <FlightInfo />
    </>
  );
};

export default CombinedPage;