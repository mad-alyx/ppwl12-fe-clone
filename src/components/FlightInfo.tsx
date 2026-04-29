import React, { useState } from 'react';
import { ArrowLeftRight, Plane, Search, ChevronRight } from 'lucide-react';

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

export default FlightSearch;