import React from 'react';

const LastBanner = () => {
  return (
    <div className="w-full bg-[#f4f7fe] pb-10 font-sans">
      <div className="max-w-[1200px] mx-auto px-4">
        
        {/* SINGLE MAIN BANNER */}
        <div className="w-full">
          <div className="relative overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            {/* Menggunakan link gambar banner promo PayLater */}
            <img 
              src="https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/mobile-modules/2025/05/31/462d81ae-7be2-4612-adac-accf3c6858dc-1748680446310-29096c2c8631e762d29d4dee7ab2d005.jpg" 
              alt="Beli tiket pesawat sekarang gratis 2x cicilan"
              className="w-full h-auto object-cover display-block"
            />
            {/* Overlay halus untuk efek kedalaman */}
            <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-colors duration-300"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LastBanner;