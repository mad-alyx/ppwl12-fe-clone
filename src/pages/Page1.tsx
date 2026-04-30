import TiketNavbar from '../components/TiketNavbar';
import TiketHero from '../components/TiketHero';
import HeroSearchForm from '../components/HeroSearchForm';
import AleContent from '../components/alecontent';
import PromoBanners from '../components/PromoBanners';
import DomesticDeals from '../components/DomesticDeals';
import LastBanner from '../components/LastBanner';
import PromoFlight from '../components/PromoFlight';

const Page1 = () => {
  return (
    <div className="min-h-screen bg-[#F5F7FA]"> 
      <TiketNavbar /> 
      <TiketHero /> 
      <HeroSearchForm /> 
      
      <div className="max-w-[1200px] mx-auto px-4 space-y-12 pb-20">
        <PromoBanners /> 
        <DomesticDeals /> 
        <PromoFlight /> 
        <AleContent /> 
        <LastBanner /> 
      </div>
    </div>
  );
};

export default Page1;