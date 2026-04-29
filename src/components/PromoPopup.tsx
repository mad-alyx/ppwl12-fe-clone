import { useState } from 'react';
import appBannerPromoImg from '/img/gambar-popup1.png'; 

const PromoPopup = () => {
  // State untuk kontrol buka/tutup popup
  const [isOpen, setIsOpen] = useState(true);

  // Jika closed, jangan tampilkan apa-apa
  if (!isOpen) return null;

  return (
    // Container Overlay (Penuhi seluruh layar, z-index tinggi agar di depan)
    <div className="fixed inset-0 bg-black/70 z-9999 flex items-center justify-center p-4">
      
      {/* Box Popup (Batas lebar maksimal) */}
      <div className="relative w-full max-w-90 animate-in fade-in zoom-in duration-300">
        
        {/* Tombol Close (X) Putih di pojok kanan atas */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
        >
          {/* Icon X (SVG) */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Konten Utama */}
        <div className="overflow-hidden shadow-2xl">
          
          {/* BAGIAN GAMBAR POPUP*/}
          <div className="relative">
            <img 
              src={appBannerPromoImg}
              alt="Promo Spesial" 
              className="w-full h-auto"
            />
          </div>

          {/* Bagian Tombol Biru di bawah gambar */}
          <div className="p-5 bg-white">
            <button 
              onClick={() => setIsOpen(false)}
              className="w-full bg-[#007CFF] hover:bg-[#5BAAFF] text-white font-tiket font-bold py-3 px-6 rounded-full transition-colors text-sm"
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