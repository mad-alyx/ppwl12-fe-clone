import Navbar from './components/Navbar';
import FlightSearch from './components/FlightInfo';
import RecentSearch from './components/RecentSearch';
import FlightDeals from './components/FlightDeals';
import PromoBanners from './components/PromoBanners';
import DomesticDeals from './components/DomesticDeals';
import SpecialOffers from './components/LastBanner';
import LastBanner from './components/LastBanner';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. NAVBAR TETAP ADA */}
      <Navbar />

      <main>
        {/* 2. HERO & SEARCH SECTION TETAP ADA */}
        <FlightSearch />

        <RecentSearch />

        <FlightDeals />

        <PromoBanners />

        <DomesticDeals />

        <LastBanner /> 

        <section className="max-w-[1200px] mx-auto px-4 pv-16">

        </section>
      </main>
    </div>
  );
}

export default App;