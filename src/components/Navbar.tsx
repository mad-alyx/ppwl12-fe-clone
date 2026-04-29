import React from 'react';
import { Search, Mail, ChevronDown } from 'lucide-react';
import LogoTiket from './logotiket.png';//
const Navbar = () => {
  return (
    <header className="w-full bg-white font-sans">
      {/* --- TOP BAR (Baris paling atas) --- */}
      <div className="bg-[#f4f7fe] py-2 px-4 border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto flex justify-end items-center space-x-6 text-[12px] font-medium text-[#58627a]">
          <a href="#" className="flex items-center gap-1 hover:text-blue-600">
            <span className="text-[#ed2d6e] text-lg leading-none">●</span> Promo
          </a>
          <a href="#" className="hover:text-blue-600">Jadi Partner tiket.com</a>
          <a href="#" className="hover:text-blue-600">Blibli Tiket Rewards</a>
          <div className="flex items-center gap-1 cursor-pointer">
            <img src="https://flagcdn.com/w20/id.png" alt="ID" className="w-4 h-3 object-cover" />
            <span>IDR</span>
            <ChevronDown size={12} />
          </div>
        </div>
      </div>

      {/* --- MAIN NAVBAR --- */}
      <div className="bg-white py-5 px-4 shadow-sm">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          
          {/* Bagian Kiri: Logo & Search */}
          <div className="flex items-center gap-6 shrink-0">
            <img 
              src={LogoTiket}
              alt="tiket.com" 
              style={{ height: '100px', width: 'auto' }} 
              className="cursor-pointer object-contain"
            />
            
            <div className="relative w-full max-w-[280px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Event di Jakarta" 
                className="w-full bg-[#f4f7fe] pl-11 pr-4 py-2.5 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-400 text-gray-700"
              />
            </div>
          </div>

          {/* Bagian Tengah: Menu Utama */}
          <nav className="flex items-center space-x-1">
            <button className="px-4 py-2 bg-[#f1f5ff] text-[#0064d2] font-bold rounded-full text-[14px]">Pesawat</button>
            <button className="px-4 py-2 text-[#58627a] font-bold hover:bg-gray-100 rounded-full text-[14px]">Hotel</button>
            <button className="px-4 py-2 text-[#58627a] font-bold hover:bg-gray-100 rounded-full text-[14px]">Vila & Apt.</button>
            <button className="px-4 py-2 text-[#58627a] font-bold hover:bg-gray-100 rounded-full text-[14px]">To Do</button>
            <button className="px-4 py-2 text-[#58627a] font-bold hover:bg-gray-100 rounded-full text-[14px]">Kereta</button>
            <button className="px-4 py-2 text-[#58627a] font-bold hover:bg-gray-100 rounded-full text-[14px] flex items-center gap-1">
              Lainnya <ChevronDown size={14} />
            </button>
          </nav>

          {/* Bagian Kanan: Icons & Profile */}
          <div className="flex items-center ml-4 space-x-4">
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition">
              <Mail size={22} />
            </button>
            <div className="w-9 h-9 bg-[#7a88a4] text-white flex items-center justify-center rounded-full font-bold text-sm cursor-pointer border-2 border-white shadow-sm hover:opacity-90">
              RD
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;