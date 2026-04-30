import { AirlineCarousel } from '../components/AirlineCarousel';
import { FlightInfo } from '../components/FlightInfo';
import { SeoLinkTabs } from '../components/SeoLinkTabs';
import { SmartFeatures } from '../components/SmartFeatures';
import { Footer } from '../components/Footer'; 

export default function Page2() {
  return (
    <main className="bg-white">
      {/* BAGIAN 1: Latar Abu-abu Muda (Rute Penerbangan / Internal Links) */}
      <div className="bg-[#f8f9fd] pt-8 pb-12"> 
        <SeoLinkTabs/>
      </div>

      {/* PEMBATAS OTOMATIS: 
          Karena div di atas berwarna abu-abu dan div di bawah berwarna putih, 
          ini akan otomatis membentuk garis pembatas yang kamu inginkan! 
      */}

      {/* BAGIAN 2: Latar Putih Bersih (Info, Partner, dan Fitur Cerdas) */}
      <div className="bg-white">
        <FlightInfo />
        <AirlineCarousel />
        <SmartFeatures />
      </div>

      

      <Footer />
    </main>
  );
}