import React from 'react';

const DomesticDeals = () => {
  // Data deals dengan link foto asli dari tiket.com
  const domesticDeals = [
    { from: 'Surabaya', to: 'Denpasar Bali', old: '737.954', price: '730.700', date: '03 Mei 26', airline: 'Citilink', logo: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit4848gsm/string/2020/12/17/3deec547-980a-4d75-ac89-6e34eb9ddcf7-1608153225434-f5996f5af379dc69b93f00f8b725e579.png' },
    { from: 'Jakarta', to: 'Surabaya', old: '1.077.850', price: '1.055.700', date: '02 Mei 26', airline: 'Citilink', logo: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit4848gsm/string/2020/12/17/3deec547-980a-4d75-ac89-6e34eb9ddcf7-1608153225434-f5996f5af379dc69b93f00f8b725e579.png' },
    { from: 'Jakarta', to: 'Denpasar Bali', old: '1.358.122', price: '1.320.899', date: '02 Mei 26', airline: 'Citilink', logo: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit4848gsm/string/2020/12/17/3deec547-980a-4d75-ac89-6e34eb9ddcf7-1608153225434-f5996f5af379dc69b93f00f8b725e579.png' },
    { from: 'Jakarta', to: 'Medan', old: '1.504.325', price: '1.481.760', date: '02 Mei 26', airline: 'Citilink', logo: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit4848gsm/string/2020/12/17/3deec547-980a-4d75-ac89-6e34eb9ddcf7-1608153225434-f5996f5af379dc69b93f00f8b725e579.png' },
  ];

  const internationalDeals = [
    { from: 'Jakarta', to: 'Singapore', price: '2.078.900', old: '2.149.884', date: '20 Mei 26', airline: 'AirAsia', logo: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit4848gsm/string/2025/06/25/92f0eed9-d3ef-4511-83c8-c065e97746cc-1750836499054-ce0d03635ffb0eb2e6e28a2809b2c9ba.png' },
    { from: 'Surabaya', to: 'Singapore', price: '1.292.401', old: '1.321.500', date: '22 Mei 26', airline: 'Scoot', logo: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit4848gsm/string/2020/12/17/a3b5c72f-c39a-4eef-96b9-d884859dceee-1608153360547-cf87cdb43781555c5cde7a3c9149af45.png' },
    { from: 'Jakarta', to: 'Kuala Lumpur', price: '1.467.050', old: '1.487.050', date: '11 Jun 26', airline: 'AirAsia', logo: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit4848gsm/string/2025/06/25/92f0eed9-d3ef-4511-83c8-c065e97746cc-1750836499054-ce0d03635ffb0eb2e6e28a2809b2c9ba.png' },
    { from: 'Medan', to: 'Kuala Lumpur', price: '1.410.949', old: '1.467.050', date: '12 Jun 26', airline: 'AirAsia', logo: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit4848gsm/string/2025/06/25/92f0eed9-d3ef-4511-83c8-c065e97746cc-1750836499054-ce0d03635ffb0eb2e6e28a2809b2c9ba.png' },
  ];

  return (
    <div className="w-full  bg-[rgb(237,240,247)] pb-20 font-sans">
      <div className="max-w-[1200px] mx-auto px-4">
        
        {/* SECTION: DOMESTIC DEALS */}
        <h3 className="text-[20px] font-[900] text-[#1a202c] mb-4 tracking-tighter">Domestic Deals</h3>
        
        {/* Filter Maskapai Pill */}
        <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar">
          {['Citilink', 'Sriwijaya Air', 'Pelita Air', 'Garuda Indonesia', 'TransNusa', 'Maskapai Lainnya'].map((airline, i) => (
            <button 
              key={i} 
              className={`px-4 py-1.5 rounded-full border text-[13px] font-bold transition-all whitespace-nowrap
                ${i === 0 ? 'bg-[#e8f2ff] border-[#0070ed] text-[#0070ed]' : 'bg-white border-gray-200 text-[#8a93a7] hover:border-gray-400'}`}
            >
              {airline}
            </button>
          ))}
        </div>

        {/* Grid Card Domestic */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16 relative">
          {domesticDeals.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-all group">
              <div className="flex justify-between items-start mb-1">
                <p className="text-[12px] font-bold text-[#1a202c]">{item.from} ke</p>
                <span className="bg-[#ec1c24] text-white text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider">Dom Deals</span>
              </div>
              <h4 className="text-[17px] font-[800] text-[#1a202c] mb-4 tracking-tight">{item.to}</h4>
              
              <div className="mb-4">
                <p className="text-[11px] text-[#8a93a7] font-medium">Sekali jalan</p>
                <p className="text-[11px] text-[#8a93a7] font-medium">{item.date}</p>
              </div>

              <div className="text-right">
                <p className="text-[10px] text-[#8a93a7]">Mulai dari</p>
                <p className="text-[11px] text-[#8a93a7] line-through decoration-[#8a93a7]/50">IDR {item.old}</p>
                <p className="text-[18px] font-[900] text-[#ec1c24] tracking-tighter">IDR {item.price}</p>
              </div>

              <div className="flex items-center gap-2 pt-3 mt-3 border-t border-dashed border-gray-200">
                 <img src={item.logo} className="w-4 h-4 object-contain" alt={item.airline} />
                 <p className="text-[11px] font-bold text-[#8a93a7]">{item.airline} • Ekonomi</p>
              </div>
            </div>
          ))}
          {/* Tombol Panah Navigasi */}
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white w-8 h-8 rounded-full shadow-lg flex items-center justify-center border border-gray-100 cursor-pointer z-10 hover:bg-gray-50 transition-colors">
            <span className="text-gray-400 text-sm">→</span>
          </div>
        </div>

        {/* SECTION: TERBANG KE LUAR NEGERI */}
        <h3 className="text-[20px] font-[900] text-[#1a202c] mb-6 tracking-tighter">Terbang ke luar negeri? Bisa juga!</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          {internationalDeals.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-all">
              <div className="flex justify-between items-start mb-1">
                <p className="text-[12px] font-bold text-[#1a202c]">{item.from} ke</p>
                {/* Badge INT Deals sesuai referensi gambar */}
                <span className="bg-[#ff7e32] text-white text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider">Int Deals</span>
              </div>
              <h4 className="text-[17px] font-[800] text-[#1a202c] mb-4 tracking-tight">{item.to}</h4>
              
              <div className="mb-4">
                <p className="text-[11px] text-[#8a93a7] font-medium">Sekali jalan</p>
                <p className="text-[11px] text-[#8a93a7] font-medium">{item.date}</p>
              </div>

              <div className="text-right">
                <p className="text-[10px] text-[#8a93a7]">Mulai dari</p>
                <p className="text-[11px] text-[#8a93a7] line-through decoration-[#8a93a7]/50">IDR {item.old}</p>
                <p className="text-[18px] font-[900] text-[#ec1c24] tracking-tighter">IDR {item.price}</p>
              </div>

              <div className="flex items-center gap-2 pt-3 mt-3 border-t border-dashed border-gray-200">
                 <img src={item.logo} className="w-4 h-4 object-contain" alt={item.airline} />
                 <p className="text-[11px] font-bold text-[#8a93a7]">{item.airline} • Ekonomi</p>
              </div>
            </div>
          ))}
          {/* Tombol Panah Navigasi */}
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white w-8 h-8 rounded-full shadow-lg flex items-center justify-center border border-gray-100 cursor-pointer z-10 hover:bg-gray-50 transition-colors">
            <span className="text-gray-400 text-sm">→</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DomesticDeals;