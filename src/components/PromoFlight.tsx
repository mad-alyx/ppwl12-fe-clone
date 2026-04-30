import { PROMO_DATA } from '../lib/constants';

const PromoFlight = () => {
  return (
    <>
      {PROMO_DATA.map((promo) => (
        <div key={promo.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer">
          <img src={promo.image} alt={promo.title} className="w-full h-40 object-cover" />
          <div className="p-4">
            <p className="text-xs font-bold text-blue-600 uppercase">{promo.discount}</p>
            <h3 className="font-bold text-gray-800 mt-1">{promo.title}</h3>
          </div>
        </div>
      ))}
    </>
  );
};

export default PromoFlight;