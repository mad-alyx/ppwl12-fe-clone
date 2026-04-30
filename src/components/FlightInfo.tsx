import React, { useState, useRef, useEffect } from 'react';

export const FlightInfo = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // State untuk menampilkan/menyembunyikan tombol panah
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

  // Mendeteksi posisi scroll
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5); // Tampilkan panah kiri jika sudah discroll
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 5); // Tampilkan panah kanan jika belum mentok
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
      scrollRef.current.scrollBy({ left: -(cardWidth + 16), behavior: 'smooth' }); // Geser sebesar 1 kartu + gap
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
        
        {/* HEADER */}
        <h2 className="text-[24px] leading-[30px] font-bold text-[#303135] mb-6 text-left">
          Penting untuk Penerbanganmu
        </h2>
        
        {/* WRAPPER RELATIVE UNTUK CAROUSEL & PANAH */}
        <div className="relative group">
          
          {/* TOMBOL KIRI (Muncul otomatis saat di-scroll) */}
          {canScrollLeft && (
            <button 
              onClick={slideLeft}
              aria-label="Scroll Left"
              className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-[#d8dce8] rounded-full shadow-[0_2px_8px_rgba(48,49,53,0.16)] flex items-center justify-center z-20 hover:bg-[#f8f9fd] transition-colors"
            >
              {/* Panah asli (Menghadap Kiri) */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                <path fill="#71747d" d="M5.414 11.009H21c.552 0 1 .444 1 .991 0 .547-.448.991-1 .991H5.414l5.364 5.317c.39.387.39 1.015 0 1.402s-1.024.387-1.414 0L2.293 12.7C2.112 12.523 2 12.275 2 12c0-.274.112-.522.293-.7l7.071-7.01c.39-.387 1.024-.387 1.414 0 .39.387.39 1.015 0 1.402L5.414 11.01z"></path>
              </svg>
            </button>
          )}

          {/* CAROUSEL CONTAINER */}
          <div 
            ref={scrollRef} 
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory scroll-smooth pb-2 pt-1"
          >
            {infos.map((info, index) => (
              // Lebar card: diatur persis agar 3 kotak muat sempurna di layar desktop (calc(33.333% - 11px))
              <div key={index} className="flex-shrink-0 snap-start w-[85%] md:w-[calc(33.333%-11px)] h-full">
                <a 
                  href={info.link} 
                  className="block p-4 bg-white rounded-xl shadow-[0_2px_8px_rgba(48,49,53,0.08)] hover:shadow-[0_4px_12px_rgba(48,49,53,0.16)] border border-[#eef0f7] transition-shadow duration-300 h-full min-h-[104px]"
                >
                  <div className="flex gap-4 items-start h-full">
                    {/* ICON */}
                    <div className="w-10 h-10 flex-shrink-0 relative mt-1">
                      <img src={info.img} alt={info.title} className="absolute inset-0 w-full h-full object-contain" />
                    </div>
                    {/* TEXT */}
                    <div className="flex flex-col flex-grow">
                      <h3 className="text-[16px] leading-[22px] font-bold text-[#303135] mb-1">
                        {info.title}
                      </h3>
                      <p className="text-[14px] leading-[20px] text-[#71747d]">
                        {info.desc}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* TOMBOL KANAN (Selalu muncul di awal, hilang saat mentok) */}
          {canScrollRight && (
            <button 
              onClick={slideRight}
              aria-label="Scroll Right" 
              className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-[#d8dce8] rounded-full shadow-[0_2px_8px_rgba(48,49,53,0.16)] flex items-center justify-center z-20 hover:bg-[#f8f9fd] transition-colors"
            >
              {/* Panah dibalik 180 derajat (Menghadap Kanan) menggunakan class rotate-180 */}
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