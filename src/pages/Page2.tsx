import { ImageBanner } from "../components/shared/imageBanner";
import { CheckInGrid } from "../components/checkIn/checkInGrid";
import { TabbedLinkGroup } from "../components/seoAndNav/tabbedLinkGroup";
import { PromoRegionTabs } from "../components/seoAndNav/promoRegionTabs";
import { SeoSections } from "../components/seoAndNav/seoSections";

export default function Page2() {
  return (
    // Hapus warna background dari tag main agar tidak bertabrakan
    <main className="w-full min-h-screen font-sans">

      <div className="w-full bg-[rgb(237,240,247)] pt-8 pb-1">
        <div className="max-w-[1080px] mx-auto px-4 md:px-0">
          <ImageBanner 
            imgSrc="https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/mobile-modules/2025/05/31/462d81ae-7be2-4612-adac-accf3c6858dc-1748680446310-29096c2c8631e762d29d4dee7ab2d005.jpg"
            altText="Promo PayLater Tiket Pesawat"
            linkUrl="https://www.tiket.com/id-id/promo/pesawat/pesawat-paylater"
          />

          <div className="my-25">
            <CheckInGrid />
          </div>
          
          <ImageBanner 
            imgSrc="https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/mobile-modules/2023/08/24/5e19cd0d-2b7d-4829-a3b6-187e5ede369b-1692881488728-cc647383bc6803b96baf78ad44112d2e.jpg"
            altText="Download Aplikasi Tiket.com"
            linkUrl="https://tiket.onelink.me/3719787275/7jadpyqb"
            aspectRatioClass="aspect-[4/1]"
          />

          <div className="mt-8">
            <TabbedLinkGroup />
          </div>

          <ImageBanner 
            imgSrc="https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/mobile-modules/2025/02/10/7f4c581f-448e-42d4-b68a-c45eed6070e7-1739173752122-50f5b7d2035b6dadd6d25429e6798173.png"
            altText="Cek Daftar Hari Libur Nasional"
            linkUrl="https://www.tiket.com/id-id/explore/libur-nasional-dan-cuti-bersama-2026"
            aspectRatioClass="aspect-[4/1]"
          />
        </div>
      </div>

      <div className="w-full bg-[rgb(255,255,255)] pt-10 pb-2">
        <div className="max-w-[1080px] mx-auto px-4 md:px-0">
          <SeoSections />
        </div>
      </div>

      <div className="w-full bg-[rgb(237,240,247)] pt-10 pb-2">
        <div className="max-w-[1080px] mx-auto px-4 md:px-0">
          <PromoRegionTabs />
        </div>
      </div>

    </main>
  );
}