
import TiketNavbar from '../components/TiketNavbar';
import TiketHero from '../components/TiketHero';
import HeroSearchForm from "../components/HeroSearchForm";
import BusTravelSection from "../components/BusTravelSection";
import PromoSections from "../components/PromoSections";
import AleContent from '../components/alecontent'; 

const Page1 = () => {
  return (
    <div className="min-h-screen bg-[#F5F7FA]"> 
      <TiketNavbar /> 
      <TiketHero /> 
      <HeroSearchForm /> 
      
      {/* 2. Tambahkan komponen kamu di sini */}
      <AleContent /> 
      
      {/* Nanti kerjaan Iren & Nayla tinggal tumpuk di bawah sini */}
      <HeroSearchForm />
      <BusTravelSection />
      <PromoSections />

    </div>
  );
};

export default Page1;