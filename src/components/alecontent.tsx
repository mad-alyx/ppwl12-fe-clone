import { useRef, useState } from 'react';

export default function AleContent() {

    
  const scrollRef = useRef<HTMLDivElement>(null);
  // State untuk melacak tab mana yang aktif
  const [activeTab, setActiveTab] = useState('Domestik');

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const moveDistance = clientWidth * 0.8; 
      const scrollTo = direction === 'left' ? scrollLeft - moveDistance : scrollLeft + moveDistance;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const domesticFlights = [
    { to: "Semarang", date: "04 Mei 26", oldPrice: "1.068.200", price: "1.022.688" },
    { to: "Yogyakarta", date: "05 Mei 26", oldPrice: "1.335.960", price: "1.295.940" },
    { to: "Surabaya", date: "22 Mei 26", oldPrice: "1.773.180", price: "1.729.881" },
    { to: "Denpasar Bali", date: "16 Mei 26", oldPrice: "1.648.500", price: "1.583.881" },
    { to: "Praya", date: "22 Mei 26", oldPrice: "2.087.200", price: "2.041.546" },
    { to: "Batam", date: "09 Mei 26", oldPrice: "1.656.920", price: "1.592.125" },
    { to: "Banjarmasin", date: "03 Mei 26", oldPrice: "2.182.800", price: "2.154.000" },
    { to: "Makassar", date: "29 Mei 26", oldPrice: "2.681.120", price: "2.631.012" },
    { to: "Medan", date: "18 Mei 26", oldPrice: "1.577.340", price: "1.507.906" },
    { to: "Sorong", date: "22 Mei 26", oldPrice: "4.609.880", price: "4.554.880" },
  ];

  // DATA INTERNASIONAL (Sesuai screenshot baru kamu)
  const internationalFlights = [
    { to: "Singapore", date: "04 Jun 26 - 11 Jun 26", price: "4.520.782", type: "Pulang pergi" }, //
    { to: "Kuala Lumpur", date: "04 Jun 26 - 11 Jun 26", price: "4.067.900", type: "Pulang pergi" }, //
    { to: "Bangkok", date: "30 Mei 26 - 12 Jun 26", price: "5.584.600", type: "Pulang pergi" }, //
    { to: "Tokyo", date: "29 Mei 26 - 24 Jun 26", price: "9.589.800", type: "Pulang pergi" }, //
    { to: "Hong Kong", date: "18 Jun 26 - 27 Jun 26", price: "7.722.268", type: "Pulang pergi" }, //
    { to: "Shanghai", date: "18 Mei 26 - 19 Jun 26", oldPrice: "14.682.041", price: "14.397.841", type: "Pulang pergi" }, //
    { to: "Guangzhou", date: "18 Jun 26 - 25 Jun 26", price: "6.022.300", type: "Pulang pergi" }, //
    { to: "Melbourne", date: "09 Jun 26 - 16 Jun 26", price: "9.946.502", type: "Pulang pergi" }, //
    { to: "Sydney", date: "16 Jun 26 - 24 Jun 26", price: "10.742.798", type: "Pulang pergi" }, //
    { to: "Amsterdam", date: "04 Jun 26 - 15 Jun 26", price: "13.831.300", type: "Pulang pergi" }, //
  ];

  const businessFlights = [
    { 
      to: "Singapore", 
      date: "10 Jun 26 - 17 Jun 26", 
      oldPrice: "18.709.535", 
      price: "18.449.636", 
      type: "Pulang pergi" 
    },
    { 
      to: "Melbourne", 
      date: "09 Jun 26 - 16 Jun 26", 
      price: "35.015.292", 
      type: "Pulang pergi" 
    },
    { 
      to: "Sydney", 
      date: "16 Jun 26 - 24 Jun 26", 
      oldPrice: "57.963.428", 
      price: "57.739.428", 
      type: "Pulang pergi" 
    },
    { 
      to: "Amsterdam", 
      date: "04 Jun 26 - 15 Jun 26", 
      price: "52.622.300", 
      type: "Pulang pergi" 
    },
    { 
      to: "Tokyo", 
      date: "29 Mei 26 - 24 Jun 26", 
      price: "41.689.800", 
      type: "Pulang pergi" 
    },
    { 
      to: "Hong Kong", 
      date: "18 Jun 26 - 27 Jun 26", 
      price: "24.722.268", 
      type: "Pulang pergi" 
    },
    { 
      to: "Seoul", 
      date: "01 Jun 26 - 10 Jun 26", 
      price: "38.550.000", 
      type: "Pulang pergi" 
    }
  ];
  
  const popularHotels = [
    {
      name: "Ashley Sabang Jakarta",
      location: "Menteng, Jakarta Pusat",
      rating: "4,6/5",
      reviews: "2.763",
      stars: 4,
      price: "962.346",
      image: "https://s-light.tiket.photos/t/01E25EB4601149959779357416353345/rsfit19201280wm/hotel/2021/01/21/58265005-9799-4c12-a72a-14d792078864-1611222474813-90d0b8939a9782570020054e7d5d0f62.jpg"
    },
    {
      name: "Asyana Kemayoran Jakarta",
      location: "Kemayoran, Jakarta Pusat",
      rating: "4,4/5",
      reviews: "4.483",
      stars: 3,
      oldPrice: "639.669",
      price: "312.185",
      image: "https://s-light.tiket.photos/t/01E25EB4601149959779357416353345/rsfit19201280wm/hotel/2020/06/10/a6b0c20f-0255-4424-aa6d-8d481f335b71-1591771146244-67d7a6e133e08d66050b86a014a9058b.jpg"
    },
    {
      name: "AONE Hotel Jakarta Wahid Hasyim",
      location: "Menteng, Jakarta Pusat",
      rating: "4,3/5",
      reviews: "1.827",
      stars: 4,
      oldPrice: "764.473",
      price: "541.487",
      image: "https://s-light.tiket.photos/t/01E25EB4601149959779357416353345/rsfit19201280wm/hotel/2020/03/17/84e4f719-7095-4682-959c-86e0018d9633-1584442653303-34e8f399d211244585c54d1d80362f6b.jpg"
    },
    {
      name: "Ashley Tanah Abang",
      location: "Tanah Abang, Jakarta Pusat",
      rating: "4,7/5",
      reviews: "1.867",
      stars: 4,
      oldPrice: "1.174.290",
      price: "595.585",
      image: "https://s-light.tiket.photos/t/01E25EB4601149959779357416353345/rsfit19201280wm/hotel/2022/07/07/0d7e6e5a-273a-4a2a-995c-564a5f36e4f1-1657187123956-654a9d701a24d8583907f154784a8607.jpg"
    },
    {
      name: "Ashley Wahid Hasyim Jakarta",
      location: "Menteng, Jakarta Pusat",
      rating: "4,6/5",
      reviews: "3.251",
      stars: 4,
      oldPrice: "993.497",
      price: "508.466",
      image: "https://s-light.tiket.photos/t/01E25EB4601149959779357416353345/rsfit19201280wm/hotel/2019/08/19/d6c813e3-78f9-4673-95c5-1d4e7d4d38c6-1566205739818-477d9036c84307a510c4a45702206411.jpg"
    }
  ];

  const missions = [
    {
      title: "Win Now Pay Later PLUS",
      reward: "IDR 1 juta",
      buttonText: "Lihat misi",
      bgColor: "bg-gradient-to-r from-[#1a1a1a] via-[#333333] to-[#1a1a1a]",
      accentColor: "text-yellow-400",
      image: "https://p-u.tiket.photos/t/01E25EB4601149959779357416353345/original/inventory/2024/05/27/7f8f9e6d-5f8a-4c2a-9b4e-8f2a1b3c4d5e.png" // Ilustrasi koin emas/hadiah
    },
    {
      title: "Win Now Pay Later",
      reward: "IDR 200rb",
      buttonText: "Lihat misi",
      bgColor: "bg-gradient-to-r from-[#0052cc] to-[#002d72]",
      accentColor: "text-white",
      image: "https://p-u.tiket.photos/t/01E25EB4601149959779357416353345/original/inventory/2024/05/27/6e7d8c9b-4f3a-2b1c-0d9e-8f7a6b5c4d3e.png" // Ilustrasi dompet/biru
    }
  ];

  const [activeCity, setActiveCity] = useState('Semarang');

  const discountHotels = [
    {
      name: "Front One HK Resort Simpanglima",
      location: "Gajahmungkur, Semarang",
      rating: "4,4/5",
      reviews: "1.323",
      stars: 3,
      price: "238.217",
      info: "5 kamar tersisa",
      label: "Top Hotel 7",
    },
    {
      name: "Hotel Pantes Candi Semarang",
      location: "Candisari, Semarang",
      rating: "4,2/5",
      reviews: "434",
      stars: 2,
      oldPrice: "170.154",
      price: "162.797",
    },
    {
      name: "Ibis Budget Semarang Tendean",
      location: "Semarang Tengah, Semarang",
      rating: "4,2/5",
      reviews: "2.353",
      stars: 2,
      price: "214.817",
    },
    {
      name: "Padma Hotel Semarang",
      location: "Candisari, Semarang",
      rating: "4,9/5",
      reviews: "981",
      stars: 5,
      oldPrice: "1.993.470",
      price: "1.920.661",
      info: "4 kamar tersisa",
    },
    {
      name: "Quest Hotel Simpang Lima - Semarang by Aston",
      location: "Semarang Tengah, Semarang",
      rating: "4,3/5",
      reviews: "3.906",
      stars: 3,
      oldPrice: "537.577",
      price: "443.510",
      label: "Top Hotel 10",
    }
  ];

  const internationalHotelDeals = [
    {
      name: "The Borneo Hotel",
      location: "Kuching City Center, Kuching",
      rating: "5/5",
      reviews: "",
      stars: 3,
      oldPrice: "1.067.672",
      price: "648.872",
      info: "2 kamar tersisa",
      label: "Top Hotel 5",
    },
    {
      name: "Hotel 98",
      location: "Kuching City Center, Kuching",
      rating: "4,6/5",
      reviews: "164",
      stars: 2,
      oldPrice: "550.643",
      price: "337.083",
      label: "Top Hotel 3",
    },
    {
      name: "UCSI Hotel Kuching",
      location: "Kuching, Sarawak",
      rating: "4,6/5",
      reviews: "",
      stars: 4,
      oldPrice: "1.784.842",
      price: "713.730",
      label: "Top Hotel 7",
    },
    {
      name: "Grand Margherita Hotel",
      location: "Kuching City Center, Kuching",
      rating: "4,5/5",
      reviews: "136",
      stars: 4,
      price: "1.118.298",
      label: "Top Hotel 10",
    },
    {
      name: "Abell Hotel",
      location: "Kuching City Center, Kuching",
      rating: "4,3/5",
      reviews: "203",
      stars: 3,
      oldPrice: "626.592",
      price: "523.273",
      label: "Top Hotel 9",
    }
  ];

  const [activeVilaCity, setActiveVilaCity] = useState('Bali');

  const vilaDeals = [
    {
      name: "Dewantara Resort Bali",
      type: "Vila",
      location: "Gerokgak, Buleleng",
      rating: "4,6/5",
      stars: 3,
      oldPrice: "293.001",
      price: "215.289",
      info: "2 kamar tersisa",
    },
    {
      name: "Mazari Villas",
      type: "Vila",
      location: "Kuta Selatan, Badung",
      rating: "5/5",
      stars: 5,
      oldPrice: "3.074.180",
      price: "2.314.952",
      info: "1 kamar tersisa",
    },
    {
      name: "Kanishka Villa",
      type: "Vila",
      location: "Seminyak, Badung",
      rating: "4,2/5",
      reviews: "298",
      stars: 5,
      oldPrice: "1.410.247",
      price: "1.033.388",
      info: "3 kamar tersisa",
    },
    {
      name: "The Legian Sunset Residence",
      type: "Apartemen",
      location: "Legian, Badung",
      rating: "4,5/5",
      reviews: "473",
      stars: 5,
      oldPrice: "738.219",
      price: "304.114",
      label: "Top Stay 9",
    },
    {
      name: "Black Lava Camp Kintamani",
      type: "Glamping",
      location: "Kintamani, Bangli",
      rating: "4,5/5",
      reviews: "500",
      stars: 4,
      oldPrice: "682.643",
      price: "415.443",
      info: "1 kamar tersisa",
      label: "Top Stay 10",
    }
  ];

  // Logic pilih data
  const currentFlights = activeTab === 'Domestik' ? domesticFlights : activeTab === 'Internasional' ? internationalFlights : businessFlights;

  return (
    <div className="max-w-[1240px] mx-auto px-20 py-6 font-sans">
      
      {/* Banner Sesuai Request Kamu (Aspect 5:1) */}
      <div className="w-full relative rounded-2xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer hover:shadow-md transition-all duration-300 mb-10">
        <img 
          src="/img/diskon-tiket.webp" 
          alt="GOTF 2026 Online Travel Fair" 
          className="w-full aspect-[5/1] object-cover block" 
        />
      </div>

      <div className="relative"> 
        <h2 className="text-2xl font-bold text-gray-800 mb-6">GOTF udah mulai! Awas ketinggalan!</h2>
        
        {/* Tombol Tab */}
        <div className="flex gap-3 mb-8">
          {['Domestik', 'Internasional', 'Kelas Bisnis'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full border-2 font-normal transition-all text-sm ${
                activeTab === tab ? 'border-blue-500 text-blue-500 bg-blue-50' : 'border-gray-300 text-gray-500'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
            
        

        {/* Panah Navigasi */}
        <button onClick={() => scroll('left')} className="absolute left-[-20px] top-[70%] -translate-y-1/2 z-[100] bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center border border-gray-200">
          <span className="text-2xl font-bold">❮</span>
        </button>

        <div ref={scrollRef} className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar pb-6 snap-x">
          <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>

          {currentFlights.map((f, i) => (
            <div key={i} className="min-w-[280px] bg-white border border-gray-200 rounded-2xl p-5 shadow-sm snap-start relative">
              <div className="absolute top-4 right-0 bg-[#f94d4d] text-white text-[10px] font-bold px-3 py-1 rounded-l-lg">GOTF Deals</div>
              <div className="mb-4">
                <p className="text-gray-400 text-xs uppercase font-bold">Jakarta <span className="lowercase font-normal">ke</span></p>
                <h3 className="text-xl font-bold text-gray-800">{f.to}</h3>
              </div>
              <div className="mb-6">
                <p className="text-[11px] text-gray-400">{activeTab === 'Internasional' ? 'Pulang pergi' : 'Sekali jalan'}</p>
                <p className="text-sm font-bold text-gray-600">{f.date}</p>
              </div>
              <div className="text-right border-t border-dashed border-gray-100 pt-4 text-sm">
                <p className="text-[10px] text-gray-400">Mulai dari</p>
                {f.oldPrice && <p className="text-xs text-gray-400 line-through">IDR {f.oldPrice}</p>}
                <p className="text-lg font-bold text-[#f94d4d]">IDR {f.price}</p>
              </div>
            </div>
          ))}
        </div>

       <button onClick={() => scroll('right')} className="absolute right-[-20px] top-[70%] -translate-y-1/2 z-10 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center border border-gray-200">❯</button>
      </div>

      {/* TARUH DI SINI: Banner diskon-tiket-2.webp di bawah list tiket */}
      <div className="w-full relative rounded-2xl overflow-hidden shadow-sm border border-gray-100 mt-10 group cursor-pointer hover:shadow-md transition-all duration-300">
        <img 
          src="/img/diskon-tiket-2.webp" 
          alt="Harga Rawan Naik" 
          className="w-full aspect-[5/1] object-cover block" 
        />
      </div>

      {/* --- TEKS GIVEAWAY (DI ANTARA BANNER 2 DAN 3) --- */}
      <div className="mt-10 mb-4">
        <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
          Ikuti giveaway Visa x Tiket ⚽ 🥳
        </h3>
        <p className="text-sm text-gray-500">
          Menangkan paket perjalanan lengkap (tiket FIFA World Cup 2026™, hotel, dan penerbangan).
        </p>
      </div>

      {/* --- BANNER 3 (PALING BAWAH) --- */}
      <div className="w-full relative rounded-2xl overflow-hidden shadow-sm border border-gray-100 mb-10 group cursor-pointer hover:shadow-md transition-all">
        <img src="/img/diskon-tiket-3.webp" alt="Banner Bawah" className="w-full aspect-[5/1] object-cover block" />
      </div>

     {/* --- GRID BANNER KOTAK (4, 5, 6 Berjejer Kesamping) --- */}
      <div className="max-w-[1240px] mx-auto px-4 py-8">
        

        {/* Container Grid 3 Kolom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          
          {/* BANNER 4 (Kotak) */}
          <div className="relative rounded-2xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer hover:shadow-md transition-all duration-300">
            <img 
              src="/img/banner-4.webp" 
              alt="Promo 4" 
              className="w-full aspect-auto object-cover block group-hover:scale-105 transition-transform duration-500" 
            />
          </div>

          {/* BANNER 5 (Kotak) */}
          <div className="relative rounded-2xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer hover:shadow-md transition-all duration-300">
            <img 
              src="/img/banner-5.webp" 
              alt="Promo 5" 
              className="w-full aspect-auto object-cover block group-hover:scale-105 transition-transform duration-500" 
            />
          </div>

          {/* BANNER 6 (Kotak) */}
          <div className="relative rounded-2xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer hover:shadow-md transition-all duration-300">
            <img 
              src="/img/banner-6.webp" 
              alt="Promo 6" 
              className="w-full aspect-auto object-cover block group-hover:scale-105 transition-transform duration-500" 
            />
          </div>

        </div>
      </div>

      {/* --- SECTION HOTEL POPULER --- */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Cek yang populer di tiket.com!</h2>
          <span className="text-2xl">🏆</span>
        </div>

        {/* Filter Kategori */}
        <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar">
          {['Hotel', 'Vila & Apt.', 'Atraksi', 'Tempat bermain', 'Tur', 'Spa & Kecantikan', 'Lainnya'].map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full border text-sm whitespace-nowrap transition-all ${
                cat === 'Hotel' ? 'bg-blue-100 border-blue-400 text-blue-600 font-medium' : 'bg-white border-gray-200 text-gray-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* List Card Hotel */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x">
          {popularHotels.map((h, i) => (
            <div key={i} className="min-w-[230px] max-w-[230px] bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm snap-start">
              <div className="relative h-32">
                <img src={h.image} alt={h.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="p-3">
                <h3 className="font-bold text-gray-800 text-sm line-clamp-1 mb-1">{h.name}</h3>
                <div className="flex text-yellow-400 mb-1">
                  {[...Array(h.stars)].map((_, s) => <span key={s} className="text-[10px]">⭐</span>)}
                </div>
                <p className="text-gray-500 text-[11px] mb-2">{h.location}</p>
                
                <div className="flex items-center gap-1 mb-3">
                  <span className="bg-[#4b58e2] text-white text-[10px] px-1.5 py-0.5 rounded-md font-bold">
                    {h.rating.split('/')[0]}
                  </span>
                  <span className="text-gray-400 text-[10px]">({h.reviews})</span>
                </div>

                <div className="mt-2 border-t border-dashed border-gray-100 pt-2 text-right">
                  {h.oldPrice && <p className="text-[10px] text-gray-400 line-through">IDR {h.oldPrice}</p>}
                  <p className="text-sm font-bold text-[#f94d4d]">IDR {h.price}</p>
                  <p className="text-[9px] text-gray-400">Belum termasuk pajak</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
          
        {/* --- SECTION MISI BERHADIAH --- */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          Dapetin s.d. IDR 1.2jt dari misi <span className="text-xl">💰</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card Misi 1 (Hitam/Emas) */}
          <div className="relative overflow-hidden rounded-2xl bg-[#1c1c1c] text-white flex h-[180px] group cursor-pointer shadow-sm hover:shadow-md transition-all">
            <div className="w-1/2 p-6 flex flex-col justify-center relative z-10">
               <div className="bg-[#fbbf24] text-black text-[10px] font-black px-2 py-1 rounded w-fit mb-2 uppercase tracking-tighter italic">
                 Win Now Pay Later PLUS
               </div>
               <p className="text-sm font-light text-gray-300">Dapatkan hadiah spesial</p>
               <h3 className="text-2xl font-black text-[#fbbf24] mb-4 italic">IDR 1 juta</h3>
               <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded-lg text-sm w-fit group-hover:bg-blue-50 transition-colors">
                 Lihat misi
               </button>
            </div>
            <div className="w-1/2 relative">
               {/* Ornamen koin/hadiah (bisa diganti img asli) */}
               <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1c1c1c] z-10"></div>
               <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-48 h-48 bg-[#fbbf24] opacity-20 blur-3xl rounded-full"></div>
               <div className="flex items-center justify-center h-full scale-110">
                 <span className="text-8xl">🎁</span> 
               </div>
            </div>
          </div>

          {/* Card Misi 2 (Biru) */}
          <div className="relative overflow-hidden rounded-2xl bg-[#0052cc] text-white flex h-[180px] group cursor-pointer shadow-sm hover:shadow-md transition-all">
            <div className="w-1/2 p-6 flex flex-col justify-center relative z-10">
               <div className="bg-white/20 text-white text-[10px] font-black px-2 py-1 rounded w-fit mb-2 uppercase tracking-tighter italic border border-white/30">
                 Win Now Pay Later
               </div>
               <p className="text-sm font-light text-blue-100">Dapatkan reward</p>
               <h3 className="text-2xl font-black text-[#fbbf24] mb-4 italic">IDR 200rb</h3>
               <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded-lg text-sm w-fit group-hover:bg-blue-50 transition-colors">
                 Lihat misi
               </button>
            </div>
            <div className="w-1/2 relative">
               <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0052cc] z-10"></div>
               <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-48 h-48 bg-white opacity-10 blur-3xl rounded-full"></div>
               <div className="flex items-center justify-center h-full scale-110">
                 <span className="text-8xl">👛</span>
               </div>
            </div>
          </div>
        </div>
      </div>

        {/* --- SECTION DISKON NGINEP (Sesuai Gambar) --- */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Diskon nginep s.d. 50% + cashback</h2>
        
        {/* Filter Kota */}
        <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar py-2">
          {['Semarang', 'Kuta', 'Yogyakarta', 'Malang', 'Jakarta', 'Nusa Dua', 'Bandung', 'Lombok', 'Batam', 'Probolinggo'].map((city) => (
            <button
              key={city}
              onClick={() => setActiveCity(city)}
              className={`px-4 py-1.5 rounded-full border text-sm whitespace-nowrap transition-all ${
                activeCity === city ? 'bg-blue-50 border-blue-400 text-blue-500' : 'bg-white border-gray-200 text-gray-500'
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        <div className="relative">
          <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x">
            {discountHotels.map((h, i) => (
              <div key={i} className="min-w-[220px] max-w-[220px] bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm snap-start flex flex-col">
                <div className="relative h-32">
                  {h.label && (
                    <div className="absolute top-2 left-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-md backdrop-blur-sm flex items-center gap-1">
                      <span>⚽</span> {h.label}
                    </div>
                  )}
                </div>
                
                <div className="p-3 flex flex-col flex-grow">
                  {h.info && <p className="text-[#f94d4d] text-[10px] font-bold mb-1">{h.info}</p>}
                  <h3 className="font-bold text-gray-800 text-xs line-clamp-2 mb-1 h-8">{h.name}</h3>
                  <div className="flex text-yellow-400 mb-1">
                    {[...Array(h.stars)].map((_, s) => <span key={s} className="text-[10px]">⭐</span>)}
                  </div>
                  <p className="text-gray-400 text-[10px] mb-2">{h.location}</p>
                  
                  <div className="flex items-center gap-1 mb-3">
                    <span className="text-blue-600 font-bold text-[11px] flex items-center gap-1">
                      <span className="p-0.5 bg-blue-100 rounded text-[8px]">📈</span> {h.rating}
                    </span>
                    <span className="text-gray-400 text-[10px]">({h.reviews})</span>
                  </div>

                  <div className="mt-auto pt-2">
                    {h.oldPrice && <p className="text-[10px] text-gray-400 line-through">IDR {h.oldPrice}</p>}
                    <p className="text-sm font-bold text-[#f94d4d]">IDR {h.price}</p>
                    <p className="text-[9px] text-gray-400">Belum termasuk pajak</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Tombol Navigasi Kanan */}
          <button className="absolute right-[-15px] top-1/2 -translate-y-1/2 z-10 bg-white w-8 h-8 rounded-full shadow-md flex items-center justify-center border border-gray-100 text-xs text-gray-400">❯</button>
        </div>

        {/* Tombol Lihat Semua */}
        <div className="mt-8 flex justify-center">
          <button className="bg-blue-50 text-blue-500 font-bold py-2.5 px-32 rounded-xl text-sm hover:bg-blue-100 transition-colors">
            Lihat semua
          </button>
        </div>
      </div>

        {/* --- SECTION DISKON HOTEL LUAR NEGERI --- */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Diskon s.d. 50% buat hotel luar negeri</h2>
        
        {/* Filter Kota Luar Negeri */}
        <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar py-2">
          {['Kuching', 'Bangkok', 'Singapura', 'Sa Pa', 'Hong Kong', 'Lisbon', 'Jeju', 'Kyoto', 'Melaka', 'Phuket', 'Orchard', 'Destinasi Lainnya'].map((city) => (
            <button
              key={city}
              className={`px-4 py-1.5 rounded-full border text-sm whitespace-nowrap transition-all ${
                city === 'Kuching' ? 'bg-blue-50 border-blue-400 text-blue-500' : 'bg-white border-gray-200 text-gray-500'
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        <div className="relative">
          <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x">
            {internationalHotelDeals.map((h, i) => (
              <div key={i} className="min-w-[220px] max-w-[220px] bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm snap-start flex flex-col">
                <div className="relative h-32">
                  {h.label && (
                    <div className="absolute top-2 left-2 bg-black/60 text-white text-[9px] px-2 py-0.5 rounded-md backdrop-blur-sm flex items-center gap-1 font-bold">
                      <span>⚽</span> {h.label}
                    </div>
                  )}
                </div>
                
                <div className="p-3 flex flex-col flex-grow">
                  {h.info && <p className="text-[#f94d4d] text-[10px] font-bold mb-1">{h.info}</p>}
                  <h3 className="font-bold text-gray-800 text-xs line-clamp-2 mb-1 h-8">{h.name}</h3>
                  <div className="flex text-yellow-400 mb-1">
                    {[...Array(h.stars)].map((_, s) => <span key={s} className="text-[10px]">⭐</span>)}
                  </div>
                  <p className="text-gray-400 text-[10px] mb-2">{h.location}</p>
                  
                  <div className="flex items-center gap-1 mb-3">
                    <span className="text-blue-600 font-bold text-[11px] flex items-center gap-1">
                      <span className="p-0.5 bg-blue-100 rounded text-[8px]">📈</span> {h.rating}
                    </span>
                    {h.reviews && <span className="text-gray-400 text-[10px]">({h.reviews})</span>}
                  </div>

                  <div className="mt-auto pt-2">
                    {h.oldPrice && <p className="text-[10px] text-gray-400 line-through">IDR {h.oldPrice}</p>}
                    <p className="text-sm font-bold text-[#f94d4d]">IDR {h.price}</p>
                    <p className="text-[9px] text-gray-400">Belum termasuk pajak</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigasi Panah Kanan */}
          <button className="absolute right-[-15px] top-[40%] -translate-y-1/2 z-10 bg-white w-8 h-8 rounded-full shadow-md flex items-center justify-center border border-gray-100 text-xs text-gray-400">❯</button>
        </div>

        {/* Tombol Lihat Semua */}
        <div className="mt-8 flex justify-center">
          <button className="bg-blue-50 text-blue-500 font-bold py-2.5 px-32 rounded-xl text-sm hover:bg-blue-100 transition-colors">
            Lihat semua
          </button>
        </div>
      </div>

        {/* --- SECTION DISKON VILA & APT --- */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Diskon hingga 50% di Vila & Apt.</h2>
        
        {/* Filter Kota dengan State */}
        <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar py-2">
          {['Bali', 'Bandung', 'Yogyakarta', 'Bogor', 'Jakarta', 'Malang', 'Surabaya', 'Semarang', 'Uluwatu', 'Seminyak', 'Ubud', 'Canggu'].map((city) => (
            <button
              key={city}
              onClick={() => setActiveVilaCity(city)}
              className={`px-4 py-1.5 rounded-full border text-sm whitespace-nowrap transition-all ${
                activeVilaCity === city ? 'bg-blue-50 border-blue-400 text-blue-500' : 'bg-white border-gray-200 text-gray-500 hover:border-blue-300'
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        <div className="relative group">
          <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x">
            {vilaDeals.map((v, i) => (
              <div key={i} className="min-w-[220px] max-w-[220px] bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm snap-start flex flex-col hover:shadow-md transition-shadow">
                <div className="relative h-32">
                  {v.label && (
                    <div className="absolute top-2 left-2 bg-black/60 text-white text-[9px] px-2 py-0.5 rounded-md backdrop-blur-sm flex items-center gap-1 font-bold">
                      <span>🏠</span> {v.label}
                    </div>
                  )}
                </div>
                
                <div className="p-3 flex flex-col flex-grow">
                  {v.info && <p className="text-[#f94d4d] text-[10px] font-bold mb-1">{v.info}</p>}
                  <h3 className="font-bold text-gray-800 text-xs line-clamp-2 mb-1 h-8">{v.name}</h3>
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-gray-500 text-[10px]">{v.type}</span>
                    <div className="flex text-[#e91e63]">
                      {[...Array(v.stars)].map((_, s) => <span key={s} className="text-[10px]">✿</span>)}
                    </div>
                  </div>
                  <p className="text-gray-400 text-[10px] mb-2">{v.location}</p>
                  
                  <div className="flex items-center gap-1 mb-3">
                    <span className="text-blue-600 font-bold text-[11px] flex items-center gap-1">
                      <span className="p-0.5 bg-blue-100 rounded text-[8px]">⭐</span> {v.rating}
                    </span>
                    {v.reviews && <span className="text-gray-400 text-[10px]">({v.reviews})</span>}
                  </div>

                  <div className="mt-auto pt-2">
                    {v.oldPrice && <p className="text-[10px] text-gray-400 line-through">IDR {v.oldPrice}</p>}
                    <p className="text-sm font-bold text-[#f94d4d]">IDR {v.price}</p>
                    <p className="text-[9px] text-gray-400">Belum termasuk pajak</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Arrow Button */}
          <button className="absolute right-[-15px] top-[40%] -translate-y-1/2 z-10 bg-white w-8 h-8 rounded-full shadow-md flex items-center justify-center border border-gray-100 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">❯</button>
        </div>

        {/* Lihat Semua Button */}
        <div className="mt-8 flex justify-center">
          <button className="bg-blue-50 text-blue-500 font-bold py-2.5 px-32 rounded-xl text-sm hover:bg-blue-100 transition-colors">
            Lihat semua
          </button>
        </div>
      </div>
      
    </div>
  )
}