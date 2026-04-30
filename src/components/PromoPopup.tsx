import { useState } from 'react';
import appBannerPromoImg from '/img/gambar-popup1.png'; 
import LogoX from '@/assets/simbolX';

const PromoPopup = () => {
  const [isOpen, setIsOpen] = useState(true);
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/35 z-9999 flex items-center justify-center p-4">
      
      {/* Box Popup  */}
      <div className="relative w-full max-w-80 animate-in fade-in zoom-in duration-300">
        
        {/* Tombol Close (X)*/}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute -top-10 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center"
        >
          {/* Icon X (SVG) */}
          <LogoX />
        </button>

        {/* Konten Utama */}
        <div className="container mx-auto px-4 max-w-310">
          
          {/* BAGIAN GAMBAR POPUP*/}
          <div className="relative">
            <img 
              src={appBannerPromoImg}
              alt="Promo Spesial" 
              className="w-full h-auto"
            />
          </div>

          {/* Button biru */}
          <div className="p-5 bg-white">
            <button 
              onClick={() => setIsOpen(false)}
              className="w-auto bg-[#007CFF] hover:bg-[#5BAAFF] text-white font-tiket font-bold py-3 px-6 rounded-md transition-colors text-md"
            >
              Klaim penerbangan murah
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PromoPopup;