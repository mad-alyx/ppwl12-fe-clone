<<<<<<< HEAD
import RecentSearch from '../components/RecentSearch';
import FlightDeals from '../components/FlightDeals';
import PromoBanners from '../components/PromoBanners';
import DomesticDeals from '../components/DomesticDeals';
import AleContent from '../components/alecontent';
import LastBanner from '../components/LastBanner';

const Page2 = () => {
  return (
    <div className="min-h-screen bg-[#F5F7FA] pt-10">
      <div className="max-w-[1200px] mx-auto px-4 space-y-12">
        <RecentSearch />
        <FlightDeals />
        <PromoBanners />
        <AleContent /> 
        <DomesticDeals />
        <LastBanner />
      </div>
    </div>
  );
};

export default Page2;
=======
import FlightSearchCard from "../components/FlightSearchCard";

export default function Page2() {
  return (
    <main className="w-full">
      <section
        className="relative w-full h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-8 flex items-center justify-between gap-8">
          <div className="max-w-xs">
           <h1 className="text-3xl font-bold leading-tight text-force-white">
                Book flight tickets and flight schedules
            </h1>
          </div>
          <FlightSearchCard />
        </div>
      </section>
    </main>
  );
}
>>>>>>> bffb248b8256a855f75c93a9c81d4847d58d1cf8
