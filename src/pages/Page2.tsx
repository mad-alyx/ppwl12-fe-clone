import FlightSearchCard from "../components/FlightSearchCard";

export default function Page2() {
  return (
    <main className="w-full">
      <section
        className="relative w-full h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-8 flex items-center justify-between gap-8">
          <div className="max-w-xs">
           <h1 className="text-3xl font-bold leading-tight text-force-white">
                Book flight tickets and flight schedules
            </h1>
          </div>
          <FlightSearchCard />
        </div>
      </section>
    </main>
  );
}