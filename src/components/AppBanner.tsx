import appBannerImg from '/img/imgbannerpromo.png';

const AppBanner = () => {
  return (
    <section className="w-full bg-[#E8F3FF] py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-237.5">
        
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="block relative w-full rounded-sm overflow-hidden"
        >
          <img
            src={appBannerImg}
            alt="Unlock app-only deals"
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
          />
        </a>
        
      </div>
    </section>
  );
}

export default AppBanner;