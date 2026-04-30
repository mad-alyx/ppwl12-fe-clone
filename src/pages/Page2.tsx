import React from "react";
import RecentSearch from "@/components/RecentSearch";
import FlightDeals from "@/components/FlightDeals";
import { FlightSearch, FlightInfo } from "@/components/FlightInfo";
import PromoBanners from "@/components/PromoBanners";
import PromoFlight from "@/components/PromoFlight";
import DomesticDeals from "@/components/DomesticDeals";
import AirlineCarousel from "@/components/AirlineCarousel";
import SmartFeatures from "@/components/SmartFeatures";
import Footer from "@/components/Footer";
import TiketNavbar from "@/components/TiketNavbar";
import SeoLinkTabs from "@/components/SeoLinkTabs";

import { ImageBanner } from "../components/shared/imageBanner";
import { CheckInGrid } from "../components/checkIn/checkInGrid";
import { TabbedLinkGroup } from "../components/seoAndNav/tabbedLinkGroup";
import { SeoSections } from "../components/seoAndNav/seoSections";

const Page2 = () => {
  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* 1. Navigasi & Pencarian */}
      <TiketNavbar />
      <FlightSearch />

      <main className="w-full font-sans">
        {/* 2. Bagian (Gabungan SEO & Banner Khusus) */}
        <div className="w-full bg-[rgb(237,240,247)] pt-12 pb-1">
          <div className="max-w-[1080px] mx-auto px-4 md:px-0 space-y-10">
            {/* 3. Bagian Konten  (Promo & Deals) */}
            <div className="max-w-[1200px] mx-auto px-4 py-10 space-y-16">
              <RecentSearch />

              <div className="grid gap-16">
                <PromoBanners />
                <FlightDeals />
                <PromoFlight />
                <DomesticDeals />
              </div>
            </div>
            <ImageBanner
              imgSrc="https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/mobile-modules/2025/05/31/462d81ae-7be2-4612-adac-accf3c6858dc-1748680446310-29096c2c8631e762d29d4dee7ab2d005.jpg"
              altText="Promo PayLater Tiket Pesawat"
              linkUrl="https://www.tiket.com/id-id/promo/pesawat/pesawat-paylater"
            />

            <CheckInGrid />

            <ImageBanner
              imgSrc="https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/mobile-modules/2023/08/24/5e19cd0d-2b7d-4829-a3b6-187e5ede369b-1692881488728-cc647383bc6803b96baf78ad44112d2e.jpg"
              altText="Download Aplikasi Tiket.com"
              linkUrl="https://tiket.onelink.me/3719787275/7jadpyqb"
              aspectRatioClass="aspect-[4/1]"
            />

            <TabbedLinkGroup />

            <ImageBanner
              imgSrc="https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/mobile-modules/2025/02/10/7f4c581f-448e-42d4-b68a-c45eed6070e7-1739173752122-50f5b7d2035b6dadd6d25429e6798173.png"
              altText="Cek Daftar Hari Libur Nasional"
              linkUrl="https://www.tiket.com/id-id/explore/libur-nasional-dan-cuti-bersama-2026"
              aspectRatioClass="aspect-[4/1]"
            />
          </div>
        </div>

        {/* 4. SEO Sections (Latar Putih) */}
        <div className="w-full bg-white pt-10 pb-6">
          <div className="max-w-[1080px] mx-auto px-4 md:px-0">
            <SeoSections />
          </div>
        </div>

        {/* 5. Promo Region (Latar Abu-abu) */}
        <div className="w-full bg-[rgb(237,240,247)] pt-10 pb-10">
          <div className="max-w-[1080px] mx-auto px-4 md:px-0">
            <SeoLinkTabs />
          </div>
        </div>
      </main>

      <div className="w-full bg-white pt-10 pb-6">
        <div className="max-w-[1080px] mx-auto px-4 md:px-0">
          {/* penting untuk penerbanganmu */}
          <FlightInfo />
          {/* partner maskapai */}
          <AirlineCarousel />
          {/* fitur cerdas */}
          <SmartFeatures />
        </div>
      </div>

      {/* 6. Footer */}
      <Footer />
    </div>
  );
};

export default Page2;