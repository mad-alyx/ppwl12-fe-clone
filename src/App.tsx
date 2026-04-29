import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './pages/Page1';
import PageExample from './pages/PageExample';
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
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        
        <Routes>
          {/* Halaman utama kodemu (Page1) */}
          <Route path="/" element={<Page1 />} />
          
          <Route path="/page-example" element={<PageExample />} />
          
          {/* Halaman khusus untuk menyimpan komponen dari GitHub agar tidak hilang */}
          <Route path="/dev-page" element={
            <main>
              <FlightSearch />
              <RecentSearch />
              <FlightDeals />
              <PromoBanners />
              <DomesticDeals />
              <LastBanner />
              <section className="max-w-[1200px] mx-auto px-4 pv-16"></section>
            </main>
          } />
        </Routes>
      </div>
    </Router>
  );
}
export default App;