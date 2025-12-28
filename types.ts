export interface Plot {
  id: number;
  size: number;
  price: number;
  status: 'Ledig' | 'Solgt' | 'Reservert';
  description: string;
  distanceToWater: number;
  coordinates: { x: number; y: number };
}

export interface CabinType {
  id: string;
  name: string;
  size: number;
  bedrooms: number;
  description: string;
  imageUrl: string;
  priceEstimate: string;
}