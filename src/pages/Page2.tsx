import RecentSearch from '../components/RecentSearch';
import FlightDeals from '../components/FlightDeals';
import FlightSearch from '../components/FlightInfo'; 
import PromoBanners from '../components/PromoBanners';
import PromoFlight from '../components/PromoFlight';
import DomesticDeals from '../components/DomesticDeals';
import LastBanner from '../components/LastBanner';
import AirlineCarousel from '../components/AirlineCarousel';
import SeoLinkTabs from '../components/SeoLinkTabs';
import SmartFeatures from '../components/SmartFeatures';
import Footer from '../components/Footer'; 
import TiketNavbar from '../components/TiketNavbar';

const Page2 = () => {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* Navbar tetap di paling atas */}
      <TiketNavbar />
      <FlightSearch />

      {/* 1. Bagian Konten Utama (Latar Abu-abu Muda) */}
      <div className="bg-[#f8f9fd] py-8">
        <div className="max-w-[1200px] mx-auto px-4 space-y-10">
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

      {/* 2. Bagian Informasi & Partner (Latar Putih) */}
      <div className="bg-white py-12">
        <div className="max-w-[1200px] mx-auto px-4 space-y-16">
          <AirlineCarousel />
          <SmartFeatures />
        </div>
      </div>

      {/* 3. Footer */}
      <Footer />
    </main>
  );
};

export default Page2;