import { useState } from "react";
type TripType = "one-way" | "round-trip";
type ActiveTab = "flights" | "todos" | "hotels" | "airport" | "trains" | "villas" | "bus" | "whoosh" | "car" | "event" | "flighttbd" | "visa" | "giftcard" | "travelguide" | "treasure" | "mcr" | "insurance" | "affiliate";

interface PassengerCount {
  adult: number;
  child: number;
  infant: number;
}

const popularIndonesia = [
  { name: "Bali", activities: "5079+", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=300&q=80", url: "https://www.tiket.com/en-id/to-do/indonesia/region/bali-108001534490276212" },
  { name: "Jakarta", activities: "678+", img: "https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=300&q=80", url: "https://www.tiket.com/en-id/to-do/indonesia/region/jakarta-108001534490276204" },
  { name: "Jawa Barat", activities: "589+", img: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=300&q=80", url: "https://www.tiket.com/en-id/to-do/indonesia/region/west-java-108001534490276256" },
  { name: "Jawa Timur", activities: "483+", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80", url: "https://www.tiket.com/en-id/to-do/indonesia/region/east-java-108001534490276152" },
  { name: "Jawa Tengah", activities: "400+", img: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?w=300&q=80", url: "https://www.tiket.com/en-id/to-do/indonesia/region/central-java-108001534490276205" },
  { name: "Provinsi Yogyakarta", activities: "462+", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80", url: "https://www.tiket.com/en-id/to-do/indonesia/region/yogyakarta-province-108001534490276304" },
  { name: "Sumatera Utara", activities: "300+", img: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=300&q=80", url: "https://www.tiket.com/en-id/to-do/indonesia/region/north-sumatera-108001534490276409" },
  { name: "Bangka Belitung", activities: "150+", img: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=300&q=80", url: "https://www.tiket.com/en-id/to-do/indonesia/region/bangka-belitung-islands-108001534490277405" },
];

const popularWorld = [
  { name: "Singapura", activities: "1036+", img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=300&q=80", url: "https://www.tiket.com/en-id/to-do/country/singapore" },
  { name: "Jepang", activities: "7031+", img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=300&q=80", url: "https://www.tiket.com/en-id/to-do/country/japan" },
  { name: "Malaysia", activities: "3045+", img: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=300&q=80", url: "https://www.tiket.com/en-id/to-do/country/malaysia" },
  { name: "Hong Kong", activities: "260+", img: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=300&q=80", url: "https://www.tiket.com/en-id/to-do/country/hongkong" },
  { name: "Thailand", activities: "6756+", img: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=300&q=80", url: "https://www.tiket.com/en-id/to-do/country/thailand" },
  { name: "Vietnam", activities: "2000+", img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=300&q=80", url: "https://www.tiket.com/en-id/to-do/country/vietnam" },
  { name: "Filipina", activities: "1500+", img: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=300&q=80", url: "https://www.tiket.com/en-id/to-do/country/philippines" },
  { name: "Korea Selatan", activities: "3200+", img: "https://images.unsplash.com/photo-1538669715315-155098f0fb1d?w=300&q=80", url: "https://www.tiket.com/en-id/to-do/country/south-korea" },
];

function PlaceSection({ title, places, scrollId }: { title: string; places: typeof popularIndonesia; scrollId: string }) {
  const scroll = (dir: "left" | "right") => {
    const el = document.getElementById(scrollId);
    if (el) el.scrollLeft += dir === "left" ? -220 : 220;
  };
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-bold text-black" style={{ color: "#000000", fontFamily: "inherit" }}>{title}</h3>
        <div className="flex gap-1">
          <button onClick={() => scroll("left")} className="w-7 h-7 rounded-full border border-gray-300 hover:bg-gray-100 text-gray-600 flex items-center justify-center text-sm">←</button>
          <button onClick={() => scroll("right")} className="w-7 h-7 rounded-full border border-gray-300 hover:bg-gray-100 text-gray-600 flex items-center justify-center text-sm">→</button>
        </div>
      </div>
      <div id={scrollId} className="flex gap-3 overflow-x-auto scroll-smooth pb-1" style={{ scrollbarWidth: "none" }}>
        {places.map((place) => (
          <div key={place.name} onClick={() => window.open(place.url, "_blank")} className="flex-shrink-0 w-44 cursor-pointer group">
            <div className="w-44 h-28 rounded-xl overflow-hidden mb-1">
              <img src={place.img} alt={place.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <p className="text-sm font-semibold text-black">{place.name}</p>
            <p className="text-xs text-gray-500">{place.activities} Aktivitas</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HeroSearchForm() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("flights");
  const [tripType, setTripType] = useState<TripType>("one-way");
  const [origin, setOrigin] = useState("Jakarta - JKTC");
  const [destination, setDestination] = useState("");
  const [departure, setDeparture] = useState("Sen, 27 Apr 26");
  const [returnDate, setReturnDate] = useState("Kam, 30 Apr 26");
  const [passengers, setPassengers] = useState<PassengerCount>({ adult: 1, child: 0, infant: 0 });
  const [seatClass, setSeatClass] = useState("Ekonomi");
  const [showPassengerDropdown, setShowPassengerDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDestinationDropdown, setShowDestinationDropdown] = useState(false);
  const [todoSearch, setTodoSearch] = useState("");

  const handleSwap = () => {
    const temp = origin;
    setOrigin(destination);
    setDestination(temp);
  };

  const adjustPassenger = (type: keyof PassengerCount, delta: number) => {
    setPassengers((prev) => ({ ...prev, [type]: Math.max(0, prev[type] + delta) }));
  };

  const totalPassengers = passengers.adult + passengers.child + passengers.infant;

  const tabs = [
    { key: "flights", label: "Pesawat", icon: "✈️", url: null },
    { key: "todos", label: "To Do", icon: "🎈", url: null },
    { key: "hotels", label: "Hotel", icon: "🏨", badge: "-40%", url: "https://www.tiket.com/en-id/hotel" },
    { key: "airport", label: "Jemputan Bandara", icon: "🚌", badge: "-20%", url: "https://www.tiket.com/en-id/airport-transfer" },
    { key: "trains", label: "Kereta Api", icon: "🚂", url: "https://www.tiket.com/en-id/kereta-api" },
    { key: "villas", label: "Vila & Apt.", icon: "🏡", badge: "-40%", url: "https://www.tiket.com/en-id/homes" },
    { key: "bus", label: "Bus & Travel", icon: "🚌", url: "https://www.tiket.com/en-id/bus-travel" },
    { key: "whoosh", label: "Whoosh", icon: "🚄", url: "https://www.tiket.com/en-id/kereta-api?productType=whoosh" },
    { key: "car", label: "Sewa Mobil", icon: "🚗", badge: "-50%", url: "https://www.tiket.com/en-id/sewa-mobil" },
    { key: "event", label: "Acara", icon: "🎪", url: "https://www.tiket.com/en-id/to-do/search?title=&utm_source=INTERNAL&utm_medium=home&productAllCategoryCodes=EVENT" },
    { key: "flighttbd", label: "Flight TBD", icon: "✈️", badge: "Baru", url: "https://www.tiket.com/en-id/explore/flight-tiket-best-deals" },
    { key: "visa", label: "Proteksi Visa", icon: "🛡️", url: "https://www.tiket.com/en-id/explore/Visa-Travel-Schengen" },
    { key: "giftcard", label: "Kartu Hadiah", icon: "🎁", badge: "-12%", url: "https://www.tiket.com/en-id/gift-card" },
    { key: "travelguide", label: "Panduan Trip", icon: "📖", url: "https://www.tiket.com/en-id/explore/travel-guide-landing" },
    { key: "treasure", label: "Treasure Day1", icon: "💎", url: "https://www.tiket.com/en-id/to-do/treasure-jakarta-2026-day1" },
    { key: "mcr", label: "My Chemical Romance", icon: "🎸", url: "https://www.tiket.com/en-id/to-do/my-chemical-romance-live-in-jakarta-2026" },
    { key: "insurance", label: "Asuransi", icon: "🔒", url: "https://www.tiket.com/en-id/explore/Visa-Travel-Schengen" },
    { key: "affiliate", label: "Afiliasi", icon: "🤝", badge: "Baru", url: "https://www.tiket.com/en-id/blibli-affiliate" },
  ];

  return (
    <div className="w-full bg-white rounded-2xl shadow-2xl overflow-visible">

      {/* Tab bar */}
      <div className="relative flex items-center px-4 pt-3 pb-2">
        <button onClick={() => { const el = document.getElementById("tab-scroll"); if (el) el.scrollLeft -= 200; }} className="mr-1 w-7 h-7 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-100 text-gray-500 flex-shrink-0">←</button>
        <div id="tab-scroll" className="flex items-center gap-1 overflow-x-auto scroll-smooth" style={{ scrollbarWidth: "none" }}>
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => { if (tab.url) { window.open(tab.url, "_blank"); } else { setActiveTab(tab.key as ActiveTab); } }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeTab === tab.key ? "bg-blue-50 text-blue-600 font-semibold" : "text-gray-600 hover:bg-gray-100"}`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
              {tab.badge && (
                <span className={`text-white text-xs px-1.5 py-0.5 rounded-full font-bold ${tab.badge === "Baru" ? "bg-blue-500" : "bg-red-500"}`}>{tab.badge}</span>
              )}
            </button>
          ))}
        </div>
        <button onClick={() => { const el = document.getElementById("tab-scroll"); if (el) el.scrollLeft += 200; }} className="ml-1 w-7 h-7 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-100 text-gray-500 flex-shrink-0">→</button>
      </div>

      {/* ── PESAWAT ── */}
      {activeTab === "flights" && (
        <>
          <div className="flex items-center gap-4 px-4 pb-2">
            <label className="flex items-center gap-1.5 cursor-pointer text-sm text-gray-700">
              <input type="radio" name="tripType" checked={tripType === "one-way"} onChange={() => setTripType("one-way")} className="accent-blue-600" />
              Sekali Jalan
            </label>
            <label className="flex items-center gap-1.5 cursor-pointer text-sm text-gray-700">
              <input type="radio" name="tripType" checked={tripType === "round-trip"} onChange={() => setTripType("round-trip")} className="accent-blue-600" />
              Pulang-Pergi
            </label>
          </div>

          <div className="flex items-stretch px-4 pb-3 gap-2">
            {/* Dari */}
            <div className="flex-1 border border-gray-200 rounded-lg px-3 py-2 hover:border-blue-400 transition-colors">
              <p className="text-xs text-gray-400 mb-0.5">Dari</p>
              <input className="w-full text-sm font-semibold text-gray-800 outline-none bg-transparent" value={origin} onChange={(e) => setOrigin(e.target.value)} placeholder="Kota atau bandara" />
            </div>

            {/* Swap */}
            <button onClick={handleSwap} className="self-center w-8 h-8 flex items-center justify-center border border-gray-200 rounded-full hover:bg-blue-50 hover:border-blue-400 transition-colors text-gray-500 text-lg">⇄</button>

            {/* Ke */}
            <div className="relative flex-1">
              <div
                onClick={() => setShowDestinationDropdown((v) => !v)}
                className="border border-gray-200 rounded-lg px-3 py-2 hover:border-blue-400 transition-colors cursor-pointer"
              >
                <p className="text-xs text-gray-400 mb-0.5">Ke</p>
                <p className="text-sm font-semibold text-gray-800 min-h-[20px]">
                  {destination || <span className="text-gray-400 font-normal">Mau Kemana?</span>}
                </p>
              </div>

              {showDestinationDropdown && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setShowDestinationDropdown(false)} />
                  <div className="absolute top-full left-0 mt-1 w-80 bg-white border border-gray-200 rounded-2xl shadow-xl z-50 p-4 max-h-96 overflow-y-auto">
                    <h3 className="text-lg font-bold text-black mb-3">Mau Kemana?</h3>
                    <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 gap-2 mb-4">
                      <span className="text-gray-400">🔍</span>
                      <input
                        className="flex-1 bg-transparent outline-none text-sm text-gray-700"
                        placeholder="Masukkan kota atau bandara."
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        autoFocus
                      />
                    </div>
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-bold text-black">Pencarian Terakhir</p>
                        <button className="text-xs text-blue-500 hover:underline">Hapus</button>
                      </div>
                      <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 text-sm">📍</div>
                        <div>
                          <p className="text-sm font-semibold text-black">Pontianak, Indonesia</p>
                          <p className="text-xs text-gray-400">Pontianak</p>
                        </div>
                        <span className="ml-auto text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded font-bold">PNKC</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-black mb-2">Destinasi Populer</p>
                      <div className="flex flex-wrap gap-2">
                        {["Jakarta", "Denpasar-Bali", "Surabaya", "Medan", "Kuala Lumpur", "Makassar", "Singapura", "Yogyakarta", "Balikpapan", "Batam"].map((city) => (
                          <button
                            key={city}
                            onClick={() => { setDestination(city); setShowDestinationDropdown(false); }}
                            className="px-3 py-1.5 border border-gray-200 rounded-full text-sm text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-colors"
                          >
                            {city}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Pergi */}
            <div className="flex-1 border border-gray-200 rounded-lg px-3 py-2 hover:border-blue-400 transition-colors">
              <p className="text-xs text-gray-400 mb-0.5">Pergi</p>
              <input className="w-full text-sm font-semibold text-gray-800 outline-none bg-transparent" value={departure} onChange={(e) => setDeparture(e.target.value)} />
            </div>

            {/* Pulang */}
            <div className={`flex-1 border rounded-lg px-3 py-2 transition-colors ${tripType === "round-trip" ? "border-gray-200 hover:border-blue-400" : "border-gray-100 bg-gray-50"}`}>
              <p className="text-xs text-gray-400 mb-0.5">Pulang - Lebih Hemat!</p>
              <input disabled={tripType === "one-way"} className={`w-full text-sm font-semibold outline-none bg-transparent ${tripType === "round-trip" ? "text-gray-800" : "text-gray-400"}`} value={tripType === "round-trip" ? returnDate : "Pesan pulang-pergi"} onChange={(e) => setReturnDate(e.target.value)} />
            </div>

            {/* Penumpang */}
            <div className="relative flex-1">
              <div onClick={() => setShowPassengerDropdown((v) => !v)} className="h-full border border-gray-200 rounded-lg px-3 py-2 hover:border-blue-400 transition-colors cursor-pointer">
                <p className="text-xs text-gray-400 mb-0.5">Penumpang, Kelas</p>
                <p className="text-sm font-semibold text-gray-800">{totalPassengers}, {seatClass}</p>
              </div>
              {showPassengerDropdown && (
                <div className="absolute bottom-full left-0 mb-2 w-72 bg-white border border-gray-200 rounded-xl shadow-lg z-50 p-4">
                  {([
                    { key: "adult", label: "Dewasa", sub: "12 tahun ke atas" },
                    { key: "child", label: "Anak", sub: "2 - 11 tahun" },
                    { key: "infant", label: "Bayi", sub: "Di bawah 2 tahun" },
                  ] as const).map(({ key, label, sub }) => (
                    <div key={key} className="flex items-center justify-between py-2">
                      <div>
                        <p className="text-sm font-medium text-gray-800">{label}</p>
                        <p className="text-xs text-gray-400">{sub}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <button onClick={() => adjustPassenger(key, -1)} className="w-7 h-7 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 flex items-center justify-center text-lg leading-none">-</button>
                        <span className="w-4 text-center text-sm font-semibold">{passengers[key]}</span>
                        <button onClick={() => adjustPassenger(key, 1)} className="w-7 h-7 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-50 flex items-center justify-center text-lg leading-none">+</button>
                      </div>
                    </div>
                  ))}
                  <div className="mt-3 border-t pt-3">
                    <p className="text-xs text-gray-400 mb-1">Kelas Kursi</p>
                    <select value={seatClass} onChange={(e) => setSeatClass(e.target.value)} className="w-full text-sm border border-gray-200 rounded-lg px-2 py-1.5 outline-none">
                      <option>Ekonomi</option>
                      <option>Bisnis</option>
                      <option>Kelas Satu</option>
                    </select>
                  </div>
                  <button onClick={() => setShowPassengerDropdown(false)} className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700">Selesai</button>
                </div>
              )}
            </div>

            {/* Tombol Cari */}
            <button onClick={() => { if (!destination) setShowModal(true); }} className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white px-6 rounded-lg text-sm font-bold transition-all self-stretch flex items-center justify-center whitespace-nowrap">
              Cari Sekarang
            </button>
          </div>

          <div className="px-4 pb-3 text-xs text-gray-500 flex items-center gap-2">
            <span>💡</span>
            <span>Yuk, cek ada promo apa aja yang bisa kamu pakai biar pesan tiket pesawat jadi lebih hemat.{" "}<span className="text-blue-500 cursor-pointer hover:underline">Cek promonya sekarang!</span></span>
          </div>
        </>
      )}

      {/* ── TO DOS ── */}
      {activeTab === "todos" && (
        <div className="px-4 pb-4">
          <div className="flex items-center justify-between mb-4 gap-4">
            <h2 className="text-lg font-bold whitespace-nowrap" style={{ color: "#000000", fontFamily: "inherit" }}>Cari aktivitas</h2>
            <div className="flex-1 flex items-center bg-gray-100 rounded-full px-4 py-2 gap-2">
              <span className="text-gray-400 text-sm">🔍</span>
              <input className="flex-1 bg-transparent outline-none text-sm text-gray-700" placeholder="Ketik nama destinasi atau kata kunci aktivitas" value={todoSearch} onChange={(e) => setTodoSearch(e.target.value)} />
            </div>
            <button className="text-blue-500 text-sm font-medium whitespace-nowrap hover:underline">Aktifkan Lokasi</button>
          </div>
          <PlaceSection title="Destinasi Populer di Indonesia" places={popularIndonesia} scrollId="scroll-indonesia" />
          <PlaceSection title="Destinasi Paling Populer di Dunia" places={popularWorld} scrollId="scroll-world" />
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-80 text-center">
            <h2 className="text-lg font-bold text-gray-800 mb-2">Cari Aktivitas</h2>
            <p className="text-sm text-gray-500 mb-5">Masukkan kata kunci dari destinasi atau aktivitas</p>
            <button onClick={() => setShowModal(false)} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl text-sm font-bold transition-colors">Pilih Destinasi</button>
          </div>
        </div>
      )}
    </div>
  );
}