import TiketNavbar from '../components/TiketNavbar';
import TiketHero from '../components/TiketHero';
import HeroSearchForm from "../components/HeroSearchForm";
import AleContent from '../components/alecontent'; 
import BusTravelSection from "../components/BusTravelSection";
import AppBanner from '../components/AppBanner';
import PromoSections from "../components/PromoSections";
import BannerDp from '../components/BannerDP';
import PromoPopup from '../components/PromoPopup';
import TravelIdeas from '../components/TravelIdeas';
import AirlineCarousel from '../components/AirlineCarousel';
import SeoLinkTabs from '../components/SeoLinkTabs';
import SmartFeatures from '../components/SmartFeatures';
import Footer from '../components/Footer'; 

// Import tambahan dari branch Fahdil
import PromoBanners from '../components/PromoBanners';
import DomesticDeals from '../components/DomesticDeals';
import LastBanner from '../components/LastBanner';
import PromoFlight from '../components/PromoFlight';

const Page1 = () => {
  return (
    <div className="min-h-screen bg-[#F5F7FA] flex flex-col gap-0"> 
      {/* 1. Header & Search Section */}
      <TiketNavbar /> 
      <TiketHero /> 
      
      {/* Search Form dengan margin negatif agar "naik" ke area Hero */}
      <div className="-mt-12 relative z-10">
        <HeroSearchForm /> 
      </div>

      {/* 2. Banner & Promo Utama */}
      <div className="space-y-10 bg-[rgb(237,240,247)]">
        <AppBanner />
        <AleContent /> 
        
        <div className="max-w-[1200px] mx-auto px-4 space-y-12">
          <PromoBanners />
          <PromoFlight />
          <DomesticDeals />
          <BusTravelSection />
          <PromoSections />
        </div>

        <BannerDp />
        <LastBanner />
      </div>

      {/* 3. Informasi Tambahan & SEO */}
      <div className="mt-16">
        <TravelIdeas />
        <AirlineCarousel />
        <SeoLinkTabs />
        <SmartFeatures />
      </div>
      
      {/* 4. Footer & Popup */}
      <Footer />
      <PromoPopup />
    </div>
  );
};

export default Page1;