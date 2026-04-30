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

const Page1 = () => {
  return (
    <div className="min-h-screen bg-[#F5F7FA] flex flex-col gap-0"> 
      {/* 1. Bagian Atas (Header & Search) */}
      <TiketNavbar /> 
      <TiketHero /> 
      
      {/* Search Form dinaikkan posisinya pakai margin negatif di komponennya atau di sini */}
      <div className="-mt-12 relative z-10">
        <HeroSearchForm /> 
      </div>

      {/* 2. Isi Konten (Ale, Iren, Nayla) */}
      <AppBanner />
      <AleContent /> 
      <BusTravelSection />
      <PromoSections />

      {/* 3. Komponen Tambahan dari Branch Nayla */}
      <BannerDp />
      <TravelIdeas />
      
      {/* Modal/Popup biasanya ditaruh paling bawah */}
      <PromoPopup />
    </div>
  );
};

export default Page1;