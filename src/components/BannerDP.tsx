import appBannerDpImg from '/img/bannerdp.png';

const BannerDp = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-240">
    
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="block relative w-full rounded-sm overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
        >
          {/* Gambar Banner Utama */}
          <img
            src={appBannerDpImg}
            alt="Promo tiketDP"
            className="w-full h-auto object-cover block group-hover:scale-[1.01]"
          />

          {/* Efek overlay tipis saat kursor di atasnya (Hover) */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.01] transition-colors" />
        </a>
        
      </div>
    </section>
  );
};

export default BannerDp;