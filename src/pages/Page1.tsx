import TiketNavbar from '../components/TiketNavbar';
import TiketHero from '../components/TiketHero';
import AleContent from '../components/alecontent'; // 1. Import komponen kamu

export default function Page1() {
  return (
    <div className="bg-[#f4f7fa] min-h-screen"> 
      <TiketNavbar />
      <TiketHero />
      
      {/* 2. Tambahkan komponen kamu di sini */}
      <AleContent /> 
      
      {/* Nanti kerjaan Iren & Nayla tinggal tumpuk di bawah sini */}
    </div>
  );
}