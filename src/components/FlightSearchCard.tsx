import { useState } from "react";

type TripType = "one-way" | "round-trip";

interface PassengerCount {
  adult: number;
  child: number;
  infant: number;
}

export default function FlightSearchCard() {
  const [tripType, setTripType] = useState<TripType>("round-trip");
  const [origin, setOrigin] = useState("Jakarta JKTC");
  const [destination, setDestination] = useState("");
  const [departure, setDeparture] = useState("Wed, 29 Apr");
  const [returnDate, setReturnDate] = useState("Thu, 30 Apr");
  const [passengers, setPassengers] = useState<PassengerCount>({
    adult: 1,
    child: 0,
    infant: 0,
  });
  const [seatClass, setSeatClass] = useState("Economy");
  const [showPassengerDropdown, setShowPassengerDropdown] = useState(false);

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

  const totalPassengers = passengers.adult + passengers.child + passengers.infant;

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-4 w-72">
      <div className="mb-2">
        <p className="text-xs text-gray-400">From</p>
        <input
          className="w-full text-sm font-semibold text-gray-800 outline-none border-b border-gray-200 pb-1 focus:border-blue-500 transition-colors bg-transparent"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          placeholder="City or airport"
        />
      </div>

      <div className="relative mb-2">
        <button
          onClick={handleSwap}
          className="absolute right-0 top-0 text-gray-400 hover:text-blue-500 transition-colors"
        >
          ⇅
        </button>
        <p className="text-xs text-gray-400">To</p>
        <input
          className="w-full text-sm font-semibold text-gray-800 outline-none border-b border-gray-200 pb-1 focus:border-blue-500 transition-colors bg-transparent"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Going anywhere?"
        />
      </div>

      <div className="flex items-end justify-between mb-2">
        <div className="flex-1">
          <p className="text-xs text-gray-400">Departure</p>
          <input
            className="w-full text-sm font-semibold text-gray-800 outline-none border-b border-gray-200 pb-1 focus:border-blue-500 transition-colors bg-transparent"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 ml-4 pb-1">
          <span className="text-xs text-gray-500">Roundtrip</span>
          <button
            onClick={() =>
              setTripType((t) => (t === "round-trip" ? "one-way" : "round-trip"))
            }
            className={`relative w-10 h-5 rounded-full transition-colors ${
              tripType === "round-trip" ? "bg-blue-500" : "bg-gray-300"
            }`}
          >
            <span
              className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                tripType === "round-trip" ? "translate-x-5" : "translate-x-0.5"
              }`}
            />
          </button>
        </div>
      </div>

      {tripType === "round-trip" && (
        <div className="mb-2">
          <p className="text-xs text-gray-400">Return</p>
          <input
            className="w-full text-sm font-semibold text-gray-800 outline-none border-b border-gray-200 pb-1 focus:border-blue-500 transition-colors bg-transparent"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </div>
      )}

      <div className="relative mb-4">
        <div
          onClick={() => setShowPassengerDropdown((v) => !v)}
          className="cursor-pointer py-1"
        >
          <p className="text-sm font-medium text-gray-800">
            {totalPassengers} Passenger{totalPassengers > 1 ? "s" : ""}, {seatClass}
          </p>
        </div>

        {showPassengerDropdown && (
          <div className="absolute bottom-full left-0 mb-1 w-64 bg-white border border-gray-200 rounded-xl shadow-lg z-50 p-3">
            {(
              [
                { key: "adult", label: "Adult", sub: "12+" },
                { key: "child", label: "Child", sub: "2-11" },
                { key: "infant", label: "Infant", sub: "<2" },
              ] as const
            ).map(({ key, label, sub }) => (
              <div key={key} className="flex items-center justify-between py-2">
                <div>
                  <p className="text-sm font-medium">{label}</p>
                  <p className="text-xs text-gray-400">{sub}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => adjustPassenger(key, -1)}
                    className="w-6 h-6 rounded-full border border-gray-300 text-sm flex items-center justify-center hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="w-4 text-center text-sm font-semibold">
                    {passengers[key]}
                  </span>
                  <button
                    onClick={() => adjustPassenger(key, 1)}
                    className="w-6 h-6 rounded-full border border-blue-500 text-blue-500 text-sm flex items-center justify-center hover:bg-blue-50"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
            <select
              value={seatClass}
              onChange={(e) => setSeatClass(e.target.value)}
              className="w-full mt-2 text-sm border border-gray-200 rounded-lg px-2 py-1 outline-none"
            >
              <option>Economy</option>
              <option>Business</option>
              <option>First Class</option>
            </select>
            <button
              onClick={() => setShowPassengerDropdown(false)}
              className="mt-2 w-full bg-blue-600 text-white py-1.5 rounded-lg text-sm font-medium hover:bg-blue-700"
            >
              Done
            </button>
          </div>
        )}
      </div>

      <button className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[.98] text-white py-2.5 rounded-xl text-sm font-bold transition-all">
        Let's Search
      </button>
    </div>
  );
}