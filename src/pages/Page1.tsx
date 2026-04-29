
import TiketNavbar from '../components/TiketNavbar';
import TiketHero from '../components/TiketHero';
import HeroSearchForm from "../components/HeroSearchForm";
import BusTravelSection from "../components/BusTravelSection";
import PromoSections from "../components/PromoSections";

export default function Page1() {
  return (
    <main className="w-full">
      <HeroSearchForm />
      <BusTravelSection />
      <PromoSections />
      <TiketNavbar />
      <TiketHero />
    </main>
  );
}