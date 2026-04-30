import Navbar from '../components/Navbar';
import TiketNavbar from '../components/TiketNavbar';
import TiketHero from '@/components/TiketHero';
import HeroSearchForm from '@/components/HeroSearchForm';
import AleContent from '../components/alecontent';
import PromoBanners from '@/components/PromoBanners';
import DomesticDeals from '@/components/DomesticDeals';
import LastBanner from '@/components/LastBanner';
import PromoFlight from '@/components/PromoFlight';

const Page1 = () => {
  return (
    <div className="min-h-screen bg-[#F5F7FA]"> 
      <TiketNavbar /> {/* Navbar khusus untuk halaman ini */}
      <TiketHero /> {/* Hero section dengan gambar dan teks */}
      <AleContent /> {/* Konten utama yang kamu buat */}
    </div>
  );
};

export default Page1; 
