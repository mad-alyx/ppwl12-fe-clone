import React from 'react';

export const SmartFeatures = () => {
  const features = [
    { 
      title: "Smart Trip", 
      desc: "Dapatkan harga tiket pesawat murah untuk penerbangan pulang-pergi ke destinasi favorit Anda. Fitur Smart Trip dari tiket.com membuat Anda makin mudah menemukan kombinasi tiket pesawat online PP tanpa harus melakukan pencarian dua kali.", 
      img: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/si/2021/11/29/fca7a520-a96c-4abf-a110-45b6a2650f50-1638203904996-b067b1af582555d28f438393e1f153a0.png" 
    },
    { 
      title: "Simple Refund", 
      desc: "Fitur Simple Refund memungkinkan Anda untuk mendapatkan pengembalian dana dengan mudah jika melakukan pembatalan tiket pesawat online. Simple Refund dari tiket.com akan membantu Anda mendapatkan uang Anda kembali.", 
      img: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/si/2021/11/29/d3f09b93-1391-43ab-a187-5f7c4672ffa6-1638203904091-3f9111ae16cf9eeeb45ab01a8ebc1b1d.png" 
    },
    { 
      title: "Simple Reschedule", 
      desc: "Selain bisa menjadi andalan Anda untuk melakukan pemesanan tiket pesawat murah dan tiket pesawat promo, fitur Simple Reschedule tiket.com juga bisa memudahkan Anda melakukan pengajuan reschedule untuk penerbangan pilihan Anda.", 
      img: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/si/2021/11/29/351adf78-d4e8-496f-9a51-89b19f42837c-1638203904512-393c07102e412404485928715f7b621f.png" 
    }
  ];

  return (
    <section className="w-full bg-white pt-6 pb-16 font-sans">
      <div className="max-w-[1200px] mx-auto px-4 md:px-0">
        
        <h2 className="text-[24px] leading-[30px] font-bold text-[#303135] mb-8 text-left">
          Pesan Tiket Pesawat Murah Secara Cerdas di tiket.com
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((card, i) => (
            <div key={i} className="flex flex-col">
              {/* Gambar dengan rasio asli 66.75% */}
              <div className="relative w-full pb-[66.75%] mb-4 overflow-hidden rounded-xl bg-transparent">
                <img 
                  src={card.img} 
                  alt={card.title} 
                  className="absolute inset-0 w-full h-full object-cover md:object-contain" 
                  loading="lazy"
                />
              </div>
              <h4 className="font-bold text-[18px] leading-[24px] text-[#303135] mb-1">{card.title}</h4>
              <p className="text-[14px] leading-[20px] text-[#71747d] text-justify md:text-left">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmartFeatures;