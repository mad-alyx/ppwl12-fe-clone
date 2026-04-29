
import TiketNavbar from '../components/TiketNavbar';
import TiketHero from '../components/TiketHero';
import HeroSearchForm from "../components/HeroSearchForm";
import BusTravelSection from "../components/BusTravelSection";
import PromoSections from "../components/PromoSections";
import AleContent from '../components/alecontent'; 

export default function Page1() {
  return (
    <div className="bg-[#f4f7fa] min-h-screen"> 
      <TiketNavbar />
      <TiketHero />
      
      {/* 2. Tambahkan komponen kamu di sini */}
      <AleContent /> 
      
      {/* Nanti kerjaan Iren & Nayla tinggal tumpuk di bawah sini */}
      <HeroSearchForm />
      <BusTravelSection />
      <PromoSections />
    </div>
  );
}