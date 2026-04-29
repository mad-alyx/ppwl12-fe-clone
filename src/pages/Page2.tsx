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