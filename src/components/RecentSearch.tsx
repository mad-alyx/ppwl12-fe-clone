import React from 'react';
import { Search, Plane, ChevronRight, ArrowRight } from 'lucide-react';

const RecentSearch = () => {
  const searches = [
    { from: 'PNK', to: 'KULC', date: '2 Jan 26 - 6 Jan 26', guests: '4', class: 'ECONOMY', roundTrip: true },
    { from: 'PNK', to: 'KULC', date: '2 Jan 26', guests: '4', class: 'ECONOMY', roundTrip: false },
    { from: 'PNK', to: 'KULC', date: '5 Jan 26', guests: '4', class: 'ECONOMY', roundTrip: false },
  ];


  return (
    <div className="bg-[#f4f7fe] pb-10">
      {/* Search Input Bar (Mini) */}
      <div className="max-w-[1200px] mx-auto px-4 py-6 flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Mau ke mana?" 
            className="w-full pl-12 pr-4 py-3 rounded-lg border-none shadow-sm focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button className="bg-[#0070ed] text-white px-10 py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all">
          Cari
        </button>
      </div>

      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header Pencarian Terakhir */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
               <img
                src="https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/mobile-modules/2024/11/25/5daae451-6671-487e-96b0-2618647eb355-1732506685188-a0f07ab23dfdab894f603598caa4a976.png"
                alt="icon Pencarian"
                className="w-10 h-10 object-contain"
                />
            </div>
            <h2 className="text-xl font-bold text-[#1a202c]">Pencarian Terakhir</h2>
          </div>
          <button className="text-blue-500 font-bold hover:underline">Hapus</button>
        </div>

        {/* List Card Pencarian */}
        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar relative">
          {searches.map((item, index) => (
            <div key={index} className="min-w-[380px] bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="bg-blue-50 p-2 rounded-full text-blue-500">
                  <Plane size={20} />
                </div>
                <div>
                  <div className="flex items-center gap-2 font-bold text-gray-800">
                    <span>{item.from}</span>
                    {item.roundTrip ? <ArrowRight size={14} /> : <ArrowRight size={14} />}
                    <span>{item.to}</span>
                  </div>
                  <div className="text-[12px] text-gray-500 flex items-center gap-1 mt-1">
                    {item.date} • 👤 {item.guests} • {item.class}
                  </div>
                </div>
              </div>
              <ChevronRight className="text-gray-300" size={20} />
            </div>
          ))}
          {/* Tombol Next Panah */}
          <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 border border-gray-100 z-10">
             <ChevronRight size={20} />
          </button>
        </div>

        {/* Banner Promo Besar */}
        <div className="mt-8 rounded-2xl overflow-hidden shadow-sm cursor-pointer hover:opacity-95 transition-opacity">
          <img 
            src="https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/homenext_dashboard/2026/04/27/3d067a08-a5c0-4f35-a850-76192c6cb196-1777294918869-412077e0320ffb431390ac0b74a32e2e.png"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default RecentSearch;