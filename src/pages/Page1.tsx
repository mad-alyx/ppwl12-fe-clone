import TiketNavbar from '../components/TiketNavbar';
import Navbar from '../components/Navbar';
import FlightSearch from '../components/FlightInfo';

const Page1 = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Bagian yang kamu minta: TiketNavbar sampai Navbar/Search */}
      <TiketNavbar />
      <Navbar />
      <main>
        <FlightSearch />
        <div className="max-w-[1200px] mx-auto px-4 py-10 text-center">
          <h1 className="text-2xl font-bold">Ini Halaman 1</h1>
          <p className="text-gray-500">Gunakan menu navigasi untuk pindah ke Halaman 2</p>
        </div>
      </main>
    </div>
  );
};

export default Page1;