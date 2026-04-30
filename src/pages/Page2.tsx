import RecentSearch from '../components/RecentSearch';
import FlightDeals from '../components/FlightDeals';
import FlightSearch from '@/components/FlightInfo';
import PromoBanners from '../components/PromoBanners';
import PromoFlight from '@/components/PromoFlight';
import DomesticDeals from '../components/DomesticDeals';
import LastBanner from '../components/LastBanner';
import FlightSearchCard from "../components/FlightSearchCard";

const Page2 = () => {
  return (
    <main className="w-full min-h-screen bg-[#F5F7FA]">
      {/* 1. Bagian Hero (Gambar Pesawat + Search Card) */}
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

      {/* 2. Bagian Konten Bawah (Deals & Promo) */}
      <div className="max-w-[1200px] mx-auto px-4 py-12 space-y-12">
        <RecentSearch />
        <FlightDeals />
        <FlightSearch />
        <PromoBanners />
        <PromoFlight />
        <DomesticDeals />
        <LastBanner />
      </div>
    </main>
  );
};

export default Page2;