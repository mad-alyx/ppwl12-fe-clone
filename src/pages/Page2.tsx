import RecentSearch from '../components/RecentSearch';
import FlightDeals from '../components/FlightDeals';
import FlightSearch from '@/components/FlightInfo';
import PromoBanners from '../components/PromoBanners';
import PromoFlight from '@/components/PromoFlight';
import DomesticDeals from '../components/DomesticDeals';
import LastBanner from '../components/LastBanner';
import FlightSearchCard from "../components/FlightSearchCard";
import AirlineCarousel from '../components/AirlineCarousel';
import SeoLinkTabs from '../components/SeoLinkTabs';
import SmartFeatures from '../components/SmartFeatures';
import Footer from '../components/Footer'; 

const Page2 = () => {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* 1. Bagian Hero (Latar Belakang Biru/Gelap) */}
      <section
        className="relative w-full h-[500px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-8 flex items-center justify-between gap-8">
          <div className="max-w-xs">
            <h1 className="text-3xl font-bold leading-tight text-white font-odyssey">
              Book flight tickets and flight schedules
            </h1>
          </div>
          <FlightSearchCard />
        </div>
      </section>

      {/* 2. Bagian Konten Utama (Latar Abu-abu Muda khas Tiket.com) */}
      <div className="bg-[#f8f9fd] py-12">
        <div className="max-w-[1200px] mx-auto px-4 space-y-12">
          <RecentSearch />
          <SeoLinkTabs />
          <FlightDeals />
          <FlightSearch />
          <PromoBanners />
          <PromoFlight />
          <DomesticDeals />
          <LastBanner />
        </div>
      </div>

      {/* 3. Bagian Tambahan (Latar Putih) */}
      <div className="bg-white py-12">
        <div className="max-w-[1200px] mx-auto px-4 space-y-16">
          <FlightSearch/>
          <AirlineCarousel />
          <SmartFeatures />
        </div>
      </div>

      {/* 4. Footer */}
      <Footer />
    </main>
  );
};

export default Page2;