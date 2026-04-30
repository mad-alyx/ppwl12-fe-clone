import { useState } from "react";

const busData = {
  reguler: [
    { rute: "Jakarta → Malang", operator: "DAMRI", kelas: "Bisnis", rating: "4,5", hargaAsli: "IDR 339.472", hargaDiskon: "IDR 315.206", img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT8iJmcZb3xTtZ9RqD8HZdNuc73I3Rs1YNuxZMyTK_hLZC8M4YF" },
    { rute: "Jakarta → Surabaya", operator: "27 Trans", kelas: "Eksekutif", rating: "4,5", hargaAsli: "IDR 435.750", hargaDiskon: "IDR 409.954", img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS4rv_jW7trLZFAp5WS5OEN103rULGoA_EvEn7gBeeodgUHVIEU" },
    { rute: "Jakarta → Yogyakarta", operator: "Agramas", kelas: "VIP", rating: "4,5", hargaAsli: "IDR 199.500", hargaDiskon: "IDR 189.425", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPuiFXGZ5knqdRj1CcFkxnO4Y15ZGt2vnDa08j130bngGQsJRG" },
    {rute: "Jakarta → Palembang", operator: "Kramat Djati", kelas: "Eksekutif", rating: "4,2", hargaAsli: "IDR 301.600", hargaDiskon: "IDR 289.144", img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSGt3p-mw6qjiwBHNPEHXM5lbGRdEiiKt7IbHQHU3tg3lurLZF7" },
    { rute: "Malang → Denpasar", operator: "MTrans", kelas: "Eksekutif", rating: "4,5", hargaAsli: "IDR 315.000", hargaDiskon: "IDR 311.850", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs0GiLEBbXJxS23oLkYOQQrtbG6pDAcqeeCodtbIS3tZ2W3OuL" },
  ],
  sleeper: [
    { rute: "Jakarta → Malang", operator: "Semeru Trans Bus", kelas: "Suite Class", rating: "4,2", hargaAsli: "IDR 582.400", hargaDiskon: "IDR 558.405", img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT5f1wJ6n4DqeH-2jadEPs_7m16aGkpD25_nYRAMgFi3DdhkpdF" },
    { rute: "Malang → Denpasar", operator: "MTrans", kelas: "Sleeper", rating: "4,5", hargaAsli: "IDR 462.000", hargaDiskon: "IDR 457.380", img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQrU4YWK94bElZlrbpz2KcI4YzfWgg2R9yIfGZlnzOwWGHwj0lV" },
    { rute: "Jakarta → Palembang", operator: "Adhi Prima", kelas: "Suite Class", rating: "4,7", hargaAsli: "IDR 499.200", hargaDiskon: "IDR 478.284", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3UBgXnsNWJjhaF_imHl9uvIgML6anFOuY2yl_sBoGj41MsJUu" },
  ],
  travel: [
    { rute: "Jakarta → Bandung", operator: "Arnes Shuttle", kelas: "Reguler", rating: "4,8", hargaAsli: "IDR 71.760", hargaDiskon: "IDR 68.129", img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR3u1awIMBC3aYRtwM9CiBD6Ie4qFVZu-SpaMlKfiOIlfFaKYdi" },
    { rute: "Bandara Soekarno Hatta → Bandung", operator: "Jackal holidays", kelas: "Luxury Shuttle Toyota Hiace 8", rating: "4,8", hargaAsli: "IDR 308.000", hargaDiskon: "IDR 198.411", img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQemcGjp5Qtht3M09FGtgKksR2sLDcZp2_9S6xvf8LSpbqObQAE" },
    { rute: "Bekasi → Bandung", operator: "Baraya Travel", kelas: "Shuttle", rating: "4,8", hargaAsli: "IDR 65.000", hargaDiskon: "IDR 61.607", img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTxUX5bstCqj67P-zgVnRBIKTyOp02ZNlic7cfJa0w3HGqKC5Yv" },
    { rute: "Tangerang Selatan → Bandung", operator: "Cititrans", kelas: "Shuttle Toyota HiAce", rating: "4,8", hargaAsli: "IDR 182.000", hargaDiskon: "IDR 173.992", img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSTFB57haf8dX-ng-ELPRFq1_hlOC90LlmWJPieI3yGtmwnGac7" },
    { rute: "Bogor → Bandung", operator: "Pasteur Trans", kelas: "Shuttle Toyota HiAce", rating: "4,5", hargaAsli: "IDR 77.900", hargaDiskon: "IDR 76.903", img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQNDeCM7KBB3yA38nfL1xCXhsLt76x-OLUK9fPJ-6MWmqUd4kiH" },
  ],
};

type TabType = "reguler" | "sleeper" | "travel";

export default function BusTravelSection() {
  const [activeTab, setActiveTab] = useState<TabType>("reguler");

  const tabs: { key: TabType; label: string }[] = [
    { key: "reguler", label: "Bus Reguler" },
    { key: "sleeper", label: "Bus Sleeper" },
    { key: "travel", label: "Travel" },
  ];

  return (
    <section className="py-6">
      {/* Judul */}
      <h2
        className="text-lg font-semibold mb-4"
        style={{ color: "#111111" }}
      >
        Jalan-jalan hemat naik bus dan travel
      </h2>

      {/* Tabs */}
      <div className="flex gap-2 mb-5 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-1.5 rounded-full text-sm border transition-all duration-200 bg-white ${
              activeTab === tab.key
                ? "border-blue-600 font-medium shadow-sm"
                : "border-gray-300 hover:border-gray-400"
            }`}
            style={{
              color: activeTab === tab.key ? "#0064D2" : "#6b7280",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Card List */}
      <div
        className="flex gap-3 overflow-x-auto pb-2"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {busData[activeTab].map((bus, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-44 rounded-2xl border border-gray-200 overflow-hidden cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={bus.img}
                alt={bus.rute}
                className="w-full h-28 object-cover hover:scale-105 transition-transform duration-300"
              />

              {/* Badge */}
              <span
                className="absolute bottom-0 right-0 text-white text-xs px-2 py-1 rounded-tl-lg"
                style={{ backgroundColor: "#FF5A1F" }}
              >
                Diskon hingga 20%
              </span>
            </div>

            {/* Content */}
            <div className="p-3">
              <p
                className="text-sm font-semibold mb-0.5 line-clamp-2"
                style={{ color: "#111111" }}
              >
                {bus.rute}
              </p>

              <p
                className="text-xs mb-0.5"
                style={{ color: "#6b7280" }}
              >
                {bus.operator}
              </p>

              <p
                className="text-xs mb-2"
                style={{ color: "#6b7280" }}
              >
                {bus.kelas}
              </p>

              <p
                className="text-xs mb-1"
                style={{ color: "#6b7280" }}
              >
                ⭐ {bus.rating}/5
              </p>

              <p
                className="text-xs line-through mb-0.5"
                style={{ color: "#9ca3af" }}
              >
                {bus.hargaAsli}
              </p>

              <p
                className="text-sm font-semibold"
                style={{ color: "#e8001a" }}
              >
                {bus.hargaDiskon}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-5 text-center">
        <a
          href="https://www.tiket.com/id-id/bus-travel"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm px-8 py-2.5 rounded-lg transition-colors hover:bg-blue-50 bg-white"
          style={{
            border: "1px solid #0064D2",
            color: "#0064D2",
            textDecoration: "none",
          }}
        >
          Cek Rute Lainnya
        </a>
      </div>
    </section>
  );
}