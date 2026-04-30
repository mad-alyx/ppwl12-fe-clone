import React from 'react';

const PromoBanners = () => {
  const mainPromos = [
    { title: "Ini BARU murah!", subtitle: "Brand Deals", img: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/homenext_dashboard/2026/04/07/899fed37-d7ef-49de-8096-e59141747628-1775540533570-5281c9d1f3eb5f947a16b58204e4453a.png" },
    { title: "Ini BARU murah!", subtitle: "Internasional", disc: "35%", cashback: "200rb", img: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/homenext_dashboard/2026/04/07/c98af3a4-a659-4ed7-bef1-b0e9e5102cdd-1775540560250-6584e27a7b68f12d7ec22b83fec07a67.png" },
    { title: "Ini BARU murah!", subtitle: "Domestik", disc: "35%", cashback: "100rb", img: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/homenext_dashboard/2026/04/07/23aedd0a-26fe-48c7-979e-a243c69ba920-1775540595768-bd6c08d675ad330d4d7e6297b9181179.png" }
  ];

  return (
    <div className="w-full bg-[#f4f7fe] pb-10 font-">
      <div className="max-w-[1200px] mx-auto px-4">
        
        {/* SECTION 1: INI BARU MURAH */}
        <h3 className="text-[18px] font-[900] text-[#1a202c] mb-4 tracking-tight">Ini Baru Murah!</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {mainPromos.map((promo, i) => (
            <div key={i} className="relative rounded-xl overflow-hidden shadow-sm h-[160px] cursor-pointer hover:shadow-md transition-shadow">
              <img src={promo.img} alt={promo.subtitle} className="w-full h-full object-cover" />
              {/* Overlay Konten Banner Bisa Ditambahkan Disini */}
            </div>
          ))}
        </div>

      {/* SECTION 2: PAYLATER DENGAN LINK FOTO */}
        <div className="flex items-center gap-1 mb-4">
          <h3 className="text-[18px] font-[900] text-[#1a202c] tracking-tight">Pakai PayLater, dapat s.d. IDR 1.2jt</h3>
          <span>💰</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Banner PayLater 1 (Black/Gray) */}
          <div className="rounded-xl overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-all">
            <img 
              src="https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/homenext_dashboard/2026/02/09/574e58ee-b895-4cc7-875d-113fa99629b9-1770620066801-dace3e18d05ce05f0705a5b15e275399.png" 
              alt="Paylater Reward 1jt" 
              className="w-full h-auto"
            />
          </div>

          {/* Banner PayLater 2 (Blue) */}
          <div className="rounded-xl overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-all">
            <img 
              src="https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/homenext_dashboard/2026/02/09/510554c0-8624-470d-84aa-3dbf1082faa6-1770620080146-e5a32eebfdfa030896cc0a7d8819e500.png" 
              alt="Paylater Reward 200rb" 
              className="w-full h-auto"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default PromoBanners;