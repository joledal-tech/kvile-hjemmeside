import { Plot, CabinType } from './types.ts';

export const PLOTS: Plot[] = Array.from({ length: 34 }, (_, i) => {
  const isWaterfront = i < 8;
  const statusOptions: Plot['status'][] = ['Ledig', 'Ledig', 'Ledig', 'Solgt', 'Reservert'];
  return {
    id: i + 1,
    size: 850 + Math.floor(Math.random() * 650),
    price: isWaterfront ? 1650000 + (i * 25000) : 850000 + (i * 15000),
    status: i === 2 ? 'Solgt' : i === 5 ? 'Reservert' : statusOptions[Math.floor(Math.random() * statusOptions.length)],
    description: isWaterfront 
      ? `Eksklusiv strandtomt med panoramautsikt over Skjærvangen. Her våkner du til bølgeskvulp.`
      : `Høytbeliggende tomt med svært gode solforhold og utsikt over det vakre skoglandskapet.`,
    distanceToWater: isWaterfront ? 10 + Math.floor(Math.random() * 15) : 100 + Math.floor(Math.random() * 400),
    coordinates: {
      x: 100 + (i % 6) * 120 + (Math.sin(i) * 15),
      y: 80 + Math.floor(i / 6) * 90 + (Math.cos(i) * 10)
    }
  };
});

export const CABIN_TYPES: CabinType[] = [
  {
    id: 'pan',
    name: 'Panorama',
    size: 115,
    bedrooms: 4,
    description: 'Vår mest eksklusive modell med store glassflater som fanger lyset fra Skjærvangen gjennom hele dagen.',
    imageUrl: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=800',
    priceEstimate: 'fra 3.490.000,-'
  },
  {
    id: 'tra',
    name: 'Tradisjon',
    size: 92,
    bedrooms: 3,
    description: 'En tidløs hytte som kombinerer lunt treverk med moderne komfort. Passer perfekt inn i terrenget.',
    imageUrl: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=800',
    priceEstimate: 'fra 2.750.000,-'
  },
  {
    id: 'sko',
    name: 'Skogstua',
    size: 74,
    bedrooms: 2,
    description: 'Arealeffektiv og moderne hytte som krever minimalt med vedlikehold. Ideell som base for friluftsliv.',
    imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800',
    priceEstimate: 'fra 2.190.000,-'
  }
];