import React from 'react';

const TiketHero = () => {
  return (
    <div
      className="relative w-full h-[575px] bg-cover bg-center flex flex-col items-center text-white overflow-hidden"
      style={{
        /* Menggunakan path yang benar untuk folder public/img */
        backgroundImage: "url('/img/bg-tiket.webp')", 
      }}
    >
      {/* NOMOR 4: SISTEM OVERLAY & WARNA */}
      {/* Gradasi hitam transparan agar teks putih kontras namun gambar tetap cantik */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-transparent to-black/0" />

      <div className="relative z-10 w-full max-w-[1200px] px-8 h-full flex flex-col justify-center items-center text-center mt-[-35px]">
        
        {/* NOMOR 3: TRACKING (LETTER SPACING) */}
        {/* Menambahkan tracking-[-1px] agar huruf rapat sesuai desain asli tiket.com */}
        <h1 className="text-[38px] md:text-[39px] tracking-[-1px] leading-tight drop-shadow-lg !text-white">
          
          {/* Bagian Hai Kamu: Tipis (400) */}
          <span style={{ fontWeight: 400 }} className="opacity-95">
            Hai kamu, 
          </span>
          
          {/* Bagian Mau Ke Mana: Sangat Tebal (800) */}
          <span style={{ fontWeight: 800 }} className="ml-2">
            mau ke mana?
          </span>
          
        </h1>
        
        {/* Subtitle dengan warna putih transparan (white/90) sesuai poin nomor 4 */}
        <p className="mt-3.5 text-[16px] md:text-[16px] font-normal !text-white/90 drop-shadow-md">
          tiket.com - Satu aplikasi untuk kebutuhan liburanmu.
        </p>
      </div>
    </div>
  );
};

export default TiketHero;