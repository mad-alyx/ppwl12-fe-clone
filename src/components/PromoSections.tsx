import { useState } from "react";

export default function PromoSections() {
  return (
    // Menambahkan font-sans dan antialiased di wrapper utama agar font lebih halus dan rapi
    <div className="flex flex-col gap-10 py-6 font-sans antialiased max-w-7xl mx-auto px-4">
      
      {/* SECTION 1: Transportasi dengan harga terjangkau */}
      <section>
        <h2 className="text-[22px] font-bold mb-5 tracking-tight" style={{ color: "#111111" }}>
          Transportasi dengan harga terjangkau
        </h2>
        
        {/* Card Sewa Mobil */}
        <div className="relative w-[420px] h-[170px] rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow group bg-[#017b88]">
          
          {/* Background Image (Diatur agar fokus ke kiri) */}
          <div className="absolute inset-y-0 left-0 w-[60%] h-full">
            <img 
              // Ganti URL ini dengan gambar asli jika sudah ada
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600" 
              alt="Sewa Mobil" 
              className="w-full h-full object-cover object-left" 
            />
            {/* Overlay Gradient agar transisi dari gambar ke background teal lebih halus */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#017b88]"></div>
          </div>

          {/* Konten Text (Di kanan) */}
          <div className="absolute inset-y-0 right-0 w-1/2 flex flex-col justify-center items-end p-5 text-right z-10">
            <p className="text-white text-[15px] font-semibold leading-snug mb-2 max-w-[150px] tracking-tight">
              Sewa mobil terhemat di destinasi terbaik
            </p>
            
            {/* BAGIAN HARGA YANG DIPERBAIKI (Masalah 1 Teratasi) */}
            <div className="flex items-end justify-end text-white mb-4 w-full">
              <span className="text-xs mr-1 mb-1.5 opacity-90">Mulai dari</span>
              <span className="text-xs font-medium relative top-[-14px] mr-0.5">Rp</span>
              <span className="text-[44px] font-bold leading-none tracking-tighter">99</span>
              
              {/* "rb" dengan background bulat kuning yang telah diperbaiki */}
              <span className="bg-[#fdb12e] text-[#017b88] text-[12px] font-bold w-7 h-7 rounded-full flex items-center justify-center ml-1 mb-2 shadow-sm">
                rb
              </span>
            </div>

            <button className="bg-white text-[#017b88] text-xs font-bold px-5 py-2 rounded-full hover:bg-gray-100 transition-colors">
              Lihat lengkapnya
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: Corporate Banner */}
      <section>
        <div className="relative w-full h-[200px] rounded-2xl overflow-hidden bg-[#0B122A] flex items-center shadow-md">
          
          {/* Image (Kanan) */}
          <div className="absolute right-0 top-0 h-full w-[45%]">
             <img 
                // Menggunakan gambar placeholder yang lebih pas posturnya
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000" 
                alt="Corporate Woman" 
                //object-[center_30%] untuk menurunkan fokus gambar dari kepala ke dada/tangan
                className="w-full h-full object-cover object-[center_30%]"
             />
             {/* Gradient Mask yang lebih halus dan gelap, menutupi area tengah lebih banyak */}
             <div className="absolute inset-0 bg-gradient-to-r from-[#0B122A] via-[#0B122A]/80 to-transparent"></div>
          </div>

          {/* Konten Banner (Masalah 2 Diperbaiki) */}
          <div className="relative z-10 flex w-full px-12 items-center">
            
            {/* Logo Corporate (w-[30%], pl-4 untuk menyejajarkan ke kiri) */}
            <div className="w-[30%] flex flex-col pl-4">
              <div className="flex items-center text-white text-3xl font-extrabold tracking-tighter mb-1">
                tiket
                {/* BULATAN LOGO tiket.com DIPERBAIKI (Shape murni untuk presisi) */}
                <div className="bg-[#fdb12e] w-[18px] h-[18px] rounded-full mx-1"></div>
                com
              </div>
              <span className="text-white text-lg font-semibold tracking-wide mt-1">for Corporate</span>
            </div>

            {/* Konten Tengah (Teks & Tombol) (w-[40%], pl-8 pr-12 untuk posisi tengah-kiri) */}
            <div className="w-[40%] flex flex-col items-start pl-8 pr-12">
              <h3 className="text-[#fdb12e] text-[22px] font-medium leading-snug mb-4 tracking-tight">
                Perjalanan bisnis <span className="font-bold">mudah</span>,<br />
                budget tetap <span className="font-bold">hemat</span>
              </h3>
              <button className="border border-[#fdb12e] text-[#fdb12e] hover:bg-[#fdb12e] hover:text-[#0B122A] transition-colors px-6 py-2 rounded-full text-sm font-semibold tracking-wide">
                Nikmati mudahnya
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}