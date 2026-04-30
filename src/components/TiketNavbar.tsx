import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Cukup satu baris ini saja
import { ChevronDown, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const TiketNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const location = useLocation();

  // Daftar teks yang berubah-ubah
  const placeholders = [
    "Staycation di Bandung",
    "Tur ke Lombok",
    "Event di Jakarta",
    "Aktivitas di Bali",
    "Sewa Mobil di Semarang",
    "Tiket kereta ke Yogyakarta"
  ];

  const menuItems = [
    { name: 'Pesawat', path: '/page-2' },
    { name: 'Hotel', path: '#' },
    { name: 'Vila & Apt.', path: '#' },
    { name: 'To Do', path: '#' },
    { name: 'Kereta', path: '#' },
  ];

  const moreItems = ['Bus & Travel', 'Sewa Mobil', 'Event', 'Jemputan Bandara'];

  // Interval untuk mengganti teks setiap 3 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % placeholders.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full z-50 bg-transparent text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      
      {/* 1. TOP BAR */}
      <div className="flex justify-end items-center gap-7 px-13 py-2 text-[14px]">
        {/* Ikon Promo */}
        <div className="flex items-center gap-1 cursor-pointer hover:text-blue-200">
          <img 
            src="/img/kupon-tiket.gif" 
            alt="Promo" 
            className="w-4 h-4 object-contain" 
          />
          <span>Promo</span>
        </div>
        <span className="cursor-pointer hover:text-blue-200">Jadi Partner tiket.com</span>
        <span className="cursor-pointer hover:text-blue-200">Blibli Tiket Rewards</span>
        <span className="cursor-pointer hover:text-blue-200">Your Orders</span>
        <div className="flex items-center gap-1 cursor-pointer">
          <img src="https://flagcdn.com/w20/id.png" alt="ID" className="w-4 h-3 object-cover rounded-sm" />
          <span>IDR</span>
          <ChevronDown size={12} />
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <div className="max-w-[1240px] mx-auto px-6 py-3 flex flex-wrap items-center justify-between gap-y-2">
        
        {/* LOGO & SEARCH (DITAMBAHKAN ANIMASI ROLL) */}
        <div className="flex items-center gap-6 order-1 flex-1">
          <img 
            src="https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/test-discovery/2024/03/01/8ebd3ae4-f545-4809-ac73-ed0fd7434377-1709290197649-a6b320e89d9f213b43896d34a3725b18.png" 
            alt="tiket.com" 
            className="h-8 object-contain"
          />
          <div className="hidden lg:block relative transition-all duration-300 w-[300px] min-[840px]:w-[300px] min-[1250px]:w-[300px] min-[1440px]:w-[300px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-20" size={16} />
            
            {/* AREA TEKS ANIMASI */}
            <div className="absolute left-10 top-1/2 -translate-y-1/2 h-[20px] overflow-hidden pointer-events-none z-10">
              <AnimatePresence mode="wait">
                <motion.p
                  key={placeholders[index]}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-gray-400 text-[13px] whitespace-nowrap"
                >
                  {placeholders[index]}
                </motion.p>
              </AnimatePresence>
            </div>

            <input 
              type="text" 
              className="w-full bg-white text-gray-800 text-[13px] py-3 pl-10 pr-4 rounded-full outline-none relative z-0"
            />
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex items-center gap-2 order-2 2xl:order-3">
          <button className="bg-white text-gray-800 px-7 py-3 rounded-lg text-[14px] font-semibold">Masuk</button>
          <button className="bg-[#0064d2] text-white px-7 py-3 rounded-lg text-[14px] font-semibold shadow-md">Daftar</button>
        </div>

        {/* MENU CATEGORIES (Pill Style pas diklik) */}
        <div className="w-full 2xl:w-auto order-3 2xl:order-2 mt-4 2xl:mt-0">
          <div className="flex items-center gap-1 xl:gap-1">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link 
                  key={item.name} 
                  to={item.path}
                  className={`px-2.5 py-2 text-[15px] font-semibold transition-all duration-300 rounded-xl whitespace-nowrap ${
                    isActive 
                      ? 'bg-white/30 backdrop-blur-sm text-white' 
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            
            {/* DROPDOWN LAINNYA (Fixed Box) */}
            <div className="relative inline-block ml-2">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center gap-1 px-2 py-1 text-[15px] font-semibold rounded-xl transition-all ${
                  isDropdownOpen ? 'bg-white/30' : 'hover:bg-white/10'
                }`}
              >
                Lainnya <ChevronDown size={14} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <>
                  <div className="fixed inset-0 z-[90]" onClick={() => setIsDropdownOpen(false)}></div>
                  <div className="absolute right-0 top-full mt-3 w-35 bg-white rounded-2xl shadow-2xl py-2 border border-gray-100 z-[100] flex flex-col">
                    {moreItems.map((sub) => (
                      <div key={sub} className="px-5 py-3 text-gray-700 text-[13px] font-medium hover:bg-blue-50 hover:text-[#0064d2] cursor-pointer text-left">
                        {sub}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

      </div> {/* Tutup Main Navbar */}
    </div>
  );
};

export default TiketNavbar;