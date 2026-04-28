import { useState } from "react";

type TripType = "one-way" | "round-trip";
type ActiveTab = "flights" | "todos" | "hotels" | "airport" | "trains" | "villas" | "bus" | "whoosh" | "car" | "event" | "flighttbd" | "visa" | "giftcard" | "travelguide" | "treasure" | "mcr" | "insurance" | "affiliate";

interface PassengerCount {
  adult: number;
  child: number;
  infant: number;
}

const popularIndonesia = [
  { name: "Bali", activities: "5079+", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=300&q=80" },
  { name: "Jakarta", activities: "678+", img: "https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=300&q=80" },
  { name: "Jawa Barat", activities: "589+", img: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=300&q=80" },
  { name: "East Java", activities: "483+", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80" },
  { name: "Yogyakarta", activities: "462+", img: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?w=300&q=80" },
];

const popularWorld = [
  { name: "Singapore", activities: "1036+", img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=300&q=80" },
  { name: "Japan", activities: "7031+", img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=300&q=80" },
  { name: "Malaysia", activities: "3045+", img: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=300&q=80" },
  { name: "Hong Kong", activities: "260+", img: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=300&q=80" },
  { name: "Thailand", activities: "6756+", img: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=300&q=80" },
];

export default function HeroSearchForm() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("flights");
  const [tripType, setTripType] = useState<TripType>("one-way");
  const [origin, setOrigin] = useState("Jakarta - JKTC");
  const [destination, setDestination] = useState("");
  const [departure, setDeparture] = useState("Mon, 27 Apr 26");
  const [returnDate, setReturnDate] = useState("Thu, 30 Apr 26");
  const [passengers, setPassengers] = useState<PassengerCount>({
    adult: 1,
    child: 0,
    infant: 0,
  });
  const [seatClass, setSeatClass] = useState("Economy");
  const [showPassengerDropdown, setShowPassengerDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [todoSearch, setTodoSearch] = useState("");

  const handleSwap = () => {
    const temp = origin;
    setOrigin(destination);
    setDestination(temp);
  };

  const adjustPassenger = (type: keyof PassengerCount, delta: number) => {
    setPassengers((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] + delta),
    }));
  };

  const totalPassengers =
    passengers.adult + passengers.child + passengers.infant;

  const tabs = [
    { key: "flights", label: "Flights", icon: "✈️", url: null },
    { key: "todos", label: "To Dos", icon: "🎈", url: null },
    { key: "hotels", label: "Hotels", icon: "🏨", badge: "-40%", url: "https://www.tiket.com/en-id/hotel" },
    { key: "airport", label: "Airport Pickup", icon: "🚌", badge: "-20%", url: "https://www.tiket.com/en-id/airport-transfer" },
    { key: "trains", label: "Trains", icon: "🚂", url: "https://www.tiket.com/en-id/kereta-api" },
    { key: "villas", label: "Villas & Apt.", icon: "🏡", badge: "-40%", url: "https://www.tiket.com/en-id/homes" },
    { key: "bus", label: "Bus & Shuttle", icon: "🚌", url: "https://www.tiket.com/en-id/bus-travel" },
    { key: "whoosh", label: "Whoosh", icon: "🚄", url: "https://www.tiket.com/en-id/kereta-api?productType=whoosh" },
    { key: "car", label: "Car Rentals", icon: "🚗", badge: "-50%", url: "https://www.tiket.com/en-id/sewa-mobil" },
    { key: "event", label: "Events", icon: "🎪", url: "https://www.tiket.com/en-id/to-do/search?title=&utm_source=INTERNAL&utm_medium=home&productAllCategoryCodes=EVENT" },
    { key: "flighttbd", label: "Flight TBD", icon: "✈️", badge: "New", url: "https://www.tiket.com/en-id/explore/flight-tiket-best-deals" },
    { key: "visa", label: "Visa Protect", icon: "🛡️", url: "https://www.tiket.com/en-id/explore/Visa-Travel-Schengen" },
    { key: "giftcard", label: "Gift Card", icon: "🎁", badge: "-12%", url: "https://www.tiket.com/en-id/gift-card" },
    { key: "travelguide", label: "Travel Guides", icon: "📖", url: "https://www.tiket.com/en-id/explore/travel-guide-landing" },
    { key: "treasure", label: "Treasure Day1", icon: "💎", url: "https://www.tiket.com/en-id/to-do/treasure-jakarta-2026-day1" },
    { key: "mcr", label: "My Chemical Romance", icon: "🎸", url: "https://www.tiket.com/en-id/to-do/my-chemical-romance-live-in-jakarta-2026" },
    { key: "insurance", label: "Insurance", icon: "🔒", url: "https://www.tiket.com/en-id/explore/Visa-Travel-Schengen" },
    { key: "affiliate", label: "Affiliate", icon: "🤝", badge: "New", url: "https://www.tiket.com/en-id/blibli-affiliate" },
  ];

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1736523076168-fdda4640f1d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Hero text */}
      <div className="relative z-10 text-center mb-6">
        <h1 className="text-4xl font-bold drop-shadow text-force-white">
          Hey there, <span className="font-extrabold">going anywhere?</span>
        </h1>
        <p className="text-white/80 text-sm mt-2 drop-shadow">
          tiket.com - One app for your holiday needs.
        </p>
      </div>

      {/* Search form card */}
      <div className="relative z-10 w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-visible">

        {/* Tab bar */}
        <div className="relative flex items-center px-4 pt-3 pb-2">
          <button
            onClick={() => {
              const el = document.getElementById("tab-scroll");
              if (el) el.scrollLeft -= 200;
            }}
            className="mr-1 w-7 h-7 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-100 text-gray-500 flex-shrink-0"
          >
            ←
          </button>

          <div
            id="tab-scroll"
            className="flex items-center gap-1 overflow-x-auto scroll-smooth"
            style={{ scrollbarWidth: "none" }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => {
                  if (tab.url) {
                    window.open(tab.url, "_blank");
                  } else {
                    setActiveTab(tab.key as ActiveTab);
                  }
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.key
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className={`text-white text-xs px-1.5 py-0.5 rounded-full font-bold ${tab.badge === "New" ? "bg-blue-500" : "bg-red-500"}`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              const el = document.getElementById("tab-scroll");
              if (el) el.scrollLeft += 200;
            }}
            className="ml-1 w-7 h-7 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-100 text-gray-500 flex-shrink-0"
          >
            →
          </button>
        </div>

        {/* ── FLIGHTS CONTENT ── */}
        {activeTab === "flights" && (
          <>
            <div className="flex items-center gap-4 px-4 pb-2">
              <label className="flex items-center gap-1.5 cursor-pointer text-sm text-gray-700">
                <input type="radio" name="tripType" checked={tripType === "one-way"} onChange={() => setTripType("one-way")} className="accent-blue-600" />
                One way
              </label>
              <label className="flex items-center gap-1.5 cursor-pointer text-sm text-gray-700">
                <input type="radio" name="tripType" checked={tripType === "round-trip"} onChange={() => setTripType("round-trip")} className="accent-blue-600" />
                Round-trip
              </label>
            </div>

            <div className="flex items-stretch px-4 pb-3 gap-2">
              <div className="flex-1 border border-gray-200 rounded-lg px-3 py-2 hover:border-blue-400 transition-colors">
                <p className="text-xs text-gray-400 mb-0.5">From</p>
                <input className="w-full text-sm font-semibold text-gray-800 outline-none bg-transparent" value={origin} onChange={(e) => setOrigin(e.target.value)} placeholder="City or airport" />
              </div>

              <button onClick={handleSwap} className="self-center w-8 h-8 flex items-center justify-center border border-gray-200 rounded-full hover:bg-blue-50 hover:border-blue-400 transition-colors text-gray-500 text-lg">⇄</button>

              <div className="flex-1 border border-gray-200 rounded-lg px-3 py-2 hover:border-blue-400 transition-colors">
                <p className="text-xs text-gray-400 mb-0.5">To</p>
                <input className="w-full text-sm font-semibold text-gray-800 outline-none bg-transparent" value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="Going Anywhere?" />
              </div>

              <div className="flex-1 border border-gray-200 rounded-lg px-3 py-2 hover:border-blue-400 transition-colors">
                <p className="text-xs text-gray-400 mb-0.5">Departure</p>
                <input className="w-full text-sm font-semibold text-gray-800 outline-none bg-transparent" value={departure} onChange={(e) => setDeparture(e.target.value)} />
              </div>

              <div className={`flex-1 border rounded-lg px-3 py-2 transition-colors ${tripType === "round-trip" ? "border-gray-200 hover:border-blue-400" : "border-gray-100 bg-gray-50"}`}>
                <p className="text-xs text-gray-400 mb-0.5">Return · Better deals!</p>
                <input disabled={tripType === "one-way"} className={`w-full text-sm font-semibold outline-none bg-transparent ${tripType === "round-trip" ? "text-gray-800" : "text-gray-400"}`} value={tripType === "round-trip" ? returnDate : "Book round-trip"} onChange={(e) => setReturnDate(e.target.value)} />
              </div>

              <div className="relative flex-1">
                <div onClick={() => setShowPassengerDropdown((v) => !v)} className="h-full border border-gray-200 rounded-lg px-3 py-2 hover:border-blue-400 transition-colors cursor-pointer">
                  <p className="text-xs text-gray-400 mb-0.5">Passenger, Class</p>
                  <p className="text-sm font-semibold text-gray-800">{totalPassengers}, {seatClass}</p>
                </div>

                {showPassengerDropdown && (
                  <div className="absolute bottom-full left-0 mb-2 w-72 bg-white border border-gray-200 rounded-xl shadow-lg z-50 p-4">
                    {([
                      { key: "adult", label: "Adult", sub: "12 years and above" },
                      { key: "child", label: "Child", sub: "2 - 11 years" },
                      { key: "infant", label: "Infant", sub: "Under 2 years" },
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
                      <p className="text-xs text-gray-400 mb-1">Seat Class</p>
                      <select value={seatClass} onChange={(e) => setSeatClass(e.target.value)} className="w-full text-sm border border-gray-200 rounded-lg px-2 py-1.5 outline-none">
                        <option>Economy</option>
                        <option>Business</option>
                        <option>First Class</option>
                      </select>
                    </div>
                    <button onClick={() => setShowPassengerDropdown(false)} className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700">Done</button>
                  </div>
                )}
              </div>

              <button
                onClick={() => { if (!destination) setShowModal(true); }}
                className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white px-6 rounded-lg text-sm font-bold transition-all self-stretch flex items-center justify-center whitespace-nowrap"
              >
                Let's Search
              </button>
            </div>

            <div className="px-4 pb-3 text-xs text-gray-500 flex items-center gap-2">
              <span>💡</span>
              <span>
                Yuk, cek ada promo apa aja yang bisa kamu pakai biar pesan tiket pesawat jadi lebih hemat.{" "}
                <span className="text-blue-500 cursor-pointer hover:underline">Cek promonya sekarang!</span>
              </span>
            </div>
          </>
        )}

        {/* ── TO DOS CONTENT ── */}
        {activeTab === "todos" && (
          <div className="px-4 pb-4">
            <div className="flex items-center justify-between mb-4 gap-4">
              <h2 className="text-lg font-bold text-gray-800 whitespace-nowrap">Search activities</h2>
              <div className="flex-1 flex items-center bg-gray-100 rounded-full px-4 py-2 gap-2">
                <span className="text-gray-400 text-sm">🔍</span>
                <input
                  className="flex-1 bg-transparent outline-none text-sm text-gray-700"
                  placeholder="Type in any destination or activity keywords"
                  value={todoSearch}
                  onChange={(e) => setTodoSearch(e.target.value)}
                />
              </div>
              <button className="text-blue-500 text-sm font-medium whitespace-nowrap hover:underline">
                📍 Enable location
              </button>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-gray-800">Popular Places in Indonesia</h3>
                <div className="flex gap-1">
                  <button className="w-6 h-6 rounded-full border border-gray-200 hover:bg-gray-100 text-xs flex items-center justify-center">←</button>
                  <button className="w-6 h-6 rounded-full border border-gray-200 hover:bg-gray-100 text-xs flex items-center justify-center">→</button>
                </div>
              </div>
              <div className="flex gap-3 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
                {popularIndonesia.map((place) => (
                  <div key={place.name} className="flex-shrink-0 w-40 cursor-pointer group">
                    <div className="w-40 h-24 rounded-xl overflow-hidden mb-1">
                      <img src={place.img} alt={place.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <p className="text-sm font-semibold text-gray-800">{place.name}</p>
                    <p className="text-xs text-gray-400">{place.activities} Activities</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-gray-800">World's Most Popular Places</h3>
                <div className="flex gap-1">
                  <button className="w-6 h-6 rounded-full border border-gray-200 hover:bg-gray-100 text-xs flex items-center justify-center">←</button>
                  <button className="w-6 h-6 rounded-full border border-gray-200 hover:bg-gray-100 text-xs flex items-center justify-center">→</button>
                </div>
              </div>
              <div className="flex gap-3 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
                {popularWorld.map((place) => (
                  <div key={place.name} className="flex-shrink-0 w-40 cursor-pointer group">
                    <div className="w-40 h-24 rounded-xl overflow-hidden mb-1">
                      <img src={place.img} alt={place.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <p className="text-sm font-semibold text-gray-800">{place.name}</p>
                    <p className="text-xs text-gray-400">{place.activities} Activities</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="absolute inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-80 text-center">
            <h2 className="text-lg font-bold text-gray-800 mb-2">Select your destination</h2>
            <p className="text-sm text-gray-500 mb-5">Choose your destination to continue searching for flights.</p>
            <button onClick={() => setShowModal(false)} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl text-sm font-bold transition-colors">
              Select Destination
            </button>
          </div>
        </div>
      )}
    </section>
  );
}