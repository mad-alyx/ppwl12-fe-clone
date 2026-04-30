import React from 'react';
import { CheckInCard } from './checkInCard';

export const CheckInGrid: React.FC = () => {
  const checkInData = [
    { name: "Super Air Jet", url: "#", img: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/homenext_dashboard/2026/03/11/7eb8c3e6-6500-409b-8e7f-521666421ae5-1773219914175-02b56c305c9d49cdadce1c33b79de5d2.png" },
    { name: "Lion Air", url: "#", img: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/homenext_dashboard/2026/03/11/9bf2c664-6a68-4440-87a6-f3171a4ad601-1773220077042-c525572e62efde37582f1d54afac9e86.png" },
    { name: "Garuda Indonesia", url: "#", img: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/homenext_dashboard/2026/03/11/d5dfb168-28e3-4847-b877-85387d2a8177-1773220200032-7f08e83efd531d8925de02dfb3056e4a.png" },
    { name: "Citilink", url: "#", img: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/homenext_dashboard/2026/03/11/11656f73-d7c2-4c46-a8ca-c7f023756543-1773220309402-42b73754eb2f63a8d790bf588429cd67.png" },
    { name: "Batik Air", url: "#", img: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/homenext_dashboard/2026/03/11/b93a266f-32fd-4c2f-b1ae-6e87dbbab55a-1773220375989-6878027d1b91da7f315ca49193593826.png" },
    { name: "Pelita Air", url: "#", img: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/homenext_dashboard/2026/03/12/32eed327-2a31-408b-ab28-8a1d392b6145-1773287525074-af559f8876dce444c3d08878e24c7ca0.png" }
  ];

  return (
    <section className="mb-12">
      <h1 className="text-xl font-bold text-[#11142D] mb-4">Check-in Online Maskapai di tiket.com</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-20">
        {checkInData.map((airline, index) => (
          <CheckInCard 
            key={index}
            airlineName={airline.name}
            imageSrc={airline.img}
            checkInUrl={airline.url}
          />
        ))}
      </div>
    </section>
  );
};
