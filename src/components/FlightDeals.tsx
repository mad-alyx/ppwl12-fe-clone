import React from "react";

const FlightDeals = () => {
  // 1. Data untuk seksi "Harga Terbaik di Flight TBD"
  const bestPriceDeals = [
    {
      from: "Jakarta",
      to: "Denpasar Bali",
      price: "1.132.304",
      old: "1.149.547",
      type: "DOM Deals",
      date: "02 Mei 26",
      airline: "Lion Air",
      logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit4848gsm/string/2020/12/17/1dedfd4e-2f74-4fa9-a3f5-d238c74d3d72-1608152770164-b210808aea30c7543cab4380aca4c3ad.png",
    },
    {
      from: "Jakarta",
      to: "Singapore",
      price: "1.985.369",
      old: "2.032.021",
      type: "INT Deals",
      date: "02 Mei 26",
      airline: "Scoot",
      logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit4848gsm/string/2020/12/17/a3b5c72f-c39a-4eef-96b9-d884859dceee-1608153360547-cf87cdb43781555c5cde7a3c9149af45.png",
    },
    {
      from: "Jakarta",
      to: "Medan",
      price: "1.481.760",
      old: "1.504.325",
      type: "DOM Deals",
      date: "02 Mei 26",
      airline: "Lion Air",
      logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit4848gsm/string/2020/12/17/1dedfd4e-2f74-4fa9-a3f5-d238c74d3d72-1608152770164-b210808aea30c7543cab4380aca4c3ad.png",
    },
    {
      from: "Jakarta",
      to: "Kuala Lumpur",
      price: "980.000",
      old: "1.100.000",
      type: "INT Deals",
      date: "01 Mei 26",
      airline: "AirAsia",
      logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit4848gsm/string/2022/12/07/9ef0e1f0-2d8c-4441-b010-bf029dcba80c-1670411731382-4a9191284529bab874bff9f2d5f23e1a.png",
    },
  ];

  // 2. Data untuk seksi "Promo terbaik maskapai pilihan" (Update: Tambah date & old price)
  const airlinePromos = [
    {
      to: "Denpasar Bali",
      price: "1.315.319",
      old: "1.450.000",
      date: "03 Mei 26",
      airline: "Sriwijaya Air",
      logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit4848gsm/string/2020/12/17/97329954-f734-4840-bb0b-a191d251672b-1608153267798-8b0e1941c0d909a586e08d437a15a1f6.png",
    },
    {
      to: "Pontianak",
      price: "1.147.340",
      old: "1.197.779",
      date: "01 Mei 26",
      airline: "Sriwijaya Air",
      logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit4848gsm/string/2020/12/17/97329954-f734-4840-bb0b-a191d251672b-1608153267798-8b0e1941c0d909a586e08d437a15a1f6.png",
    },
    {
      to: "Tanjung Pandan",
      price: "852.929",
      old: "950.000",
      date: "03 Mei 26",
      airline: "Sriwijaya Air",
      logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit4848gsm/string/2020/12/17/97329954-f734-4840-bb0b-a191d251672b-1608153267798-8b0e1941c0d909a586e08d437a15a1f6.png",
    },
    {
      to: "Pangkalpinang",
      price: "920.500",
      old: "1.050.000",
      date: "18 Mei 26",
      airline: "Sriwijaya Air",
      logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit4848gsm/string/2020/12/17/97329954-f734-4840-bb0b-a191d251672b-1608153267798-8b0e1941c0d909a586e08d437a15a1f6.png",
    },
  ];

  return (
    <div className="w-full bg-[rgb(237,240,247)] py-10 font-sans">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* --- SECTION 1: HARGA TERBAIK DI FLIGHT TBD --- */}
        <div className="flex items-center gap-2 mb-6">
          <img
            src="https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit40004000gsm/homenext_dashboard/2025/10/02/a2ea745d-99c5-46e8-b3e0-9791919c7584-1759389853477-8398541d7b9df924607a0122df0207c3.png"
            alt="Logo TBD"
            className="w-8 h-8 object-contain"
          />
          <h2 className="text-[20px] font-extrabold text-[#1a202c] tracking-tighter">
            Harga terbaik di Flight TBD
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
          {bestPriceDeals.map((deal, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-all"
            >
              <div className="flex justify-between items-start mb-1">
                <p className="text-[12px] font-bold text-[#1a202c]">
                  {deal.from} ke
                </p>
                <span
                  className={`text-[9px] font-black px-1.5 py-0.5 rounded text-white ${deal.type === "DOM Deals" ? "bg-[#ec1c24]" : "bg-[#ff7e32]"}`}
                >
                  {deal.type}
                </span>
              </div>
              <h4 className="text-[17px] font-extrabold text-[#1a202c] mb-4 leading-tight tracking-tight">
                {deal.to}
              </h4>

              <div className="mb-4">
                <p className="text-[11px] text-[#8a93a7] font-medium">
                  Sekali jalan
                </p>
                <p className="text-[11px] text-[#8a93a7] font-medium">
                  {deal.date}
                </p>
              </div>

              <div className="text-right">
                <p className="text-[10px] text-[#8a93a7]">Mulai dari</p>
                <p className="text-[11px] text-[#8a93a7] line-through decoration-[#8a93a7]/50 font-price">
                  IDR {deal.old}
                </p>
                <p className="text-[18px] font-black text-[#ec1c24] tracking-tighter leading-none font-price">
                  IDR {deal.price}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-3 mt-3 border-t border-dashed border-gray-200">
                <img
                  src={deal.logo}
                  alt={deal.airline}
                  className="w-4 h-4 object-contain"
                />
                <p className="text-[11px] font-bold text-[#1a202c]">
                  {deal.airline} • Ekonomi
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* --- SECTION 2: PROMO TERBAIK MASKAPAI PILIHAN --- */}
        <div className="flex items-center gap-2 mb-6">
          <img
            src="https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit40004000gsm/homenext_dashboard/2025/09/08/691135c7-5dd5-44eb-992d-a272800cfe3f-1757317369559-b23abca075e67634df68bc077170a0a3.png"
            alt="Logo Promo"
            className="w-8 h-8 object-contain"
          />
          <h2 className="text-[20px] font-extrabold text-[#1a202c] tracking-tighter">
            Promo terbaik maskapai pilihan
          </h2>
        </div>

        <div className="flex gap-2 mb-8 overflow-x-auto no-scrollbar">
          {["Sriwijaya Air", "Transnusa", "AirAsia", "Pelita Air"].map(
            (air, i) => (
              <button
                key={i}
                className={`px-5 py-2 rounded-full border-2 text-[13px] font-extrabold transition-all ${i === 0 ? "bg-[#e8f2ff] border-[#0070ed] text-[#0070ed]" : "bg-white border-gray-100 text-[#8a93a7] hover:border-gray-300"}`}
              >
                {air}
              </button>
            ),
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {airlinePromos.map((promo, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-all"
            >
              <div className="flex justify-between items-start mb-1">
                <p className="text-[12px] font-bold text-[#1a202c]">
                  Jakarta ke
                </p>
                <div className="bg-[#ec1c24] text-white text-[9px] font-black px-1.5 py-0.5 rounded uppercase leading-none text-center italic">
                  BUY 2 SAVE <br /> MORE
                </div>
              </div>
              <h4 className="text-[17px] font-extrabold text-[#1a202c] mb-4 leading-tight tracking-tight">
                {promo.to}
              </h4>

              {/* Tambahan: Info Sekali Jalan & Tanggal */}
              <div className="mb-4">
                <p className="text-[11px] text-[#8a93a7] font-medium">
                  Sekali jalan
                </p>
                <p className="text-[11px] text-[#8a93a7] font-medium">
                  {promo.date}
                </p>
              </div>

              <div className="text-right">
                <p className="text-[10px] text-[#8a93a7]">Mulai dari</p>
                {/* Tambahan: Harga Coret */}
                <p className="text-[11px] text-[#8a93a7] line-through decoration-[#8a93a7]/50 font-price">
                  IDR {promo.old}
                </p>
                <p className="text-[18px] font-black text-[#ec1c24] tracking-tighter leading-none font-price">
                  IDR {promo.price}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-3 mt-3 border-t border-dashed border-gray-200">
                <img
                  src={promo.logo}
                  alt={promo.airline}
                  className="w-4 h-4 object-contain"
                />
                <p className="text-[11px] font-bold text-[#1a202c]">
                  {promo.airline} • Ekonomi
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlightDeals;
