export interface PromoItem {
  id: number;
  title: string;
  image: string;
  discount: string;
}

export const PROMO_DATA: PromoItem[] = [
  { 
    id: 1, 
    title: "Diskon Flight Domestik", 
    image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=500", 
    discount: "Hingga 20%" 
  },
  { 
    id: 2, 
    title: "Staycation Hotel Mewah", 
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=500", 
    discount: "Cashback 100rb" 
  },
  { 
    id: 3, 
    title: "Promo Kereta Api", 
    image: "https://images.unsplash.com/photo-1474487056217-56fbf3c324ef?q=80&w=500", 
    discount: "Potongan 50rb" 
  },
];