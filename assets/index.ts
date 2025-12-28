// assets/index.ts

export const ASSETS = {
  // HER VAR FEILEN: Vi må pakke alt inn i "images" slik appen forventer
  images: {
    // HOVEDBILDE (Din fungerende raw-lenke)
    hero: "https://raw.githubusercontent.com/joledal-tech/kvile-hjemmeside/main/public/Kvile-drone.png",

    // GALLERI - Oppdatert med nye bilder fra Vestmarka og Kvile
    gallery: [
      "https://raw.githubusercontent.com/joledal-tech/kvile-hjemmeside/main/public/Kvile-web-01.jpg",
      "https://raw.githubusercontent.com/joledal-tech/kvile-hjemmeside/main/public/Vestmarka-09.jpg",
      "https://raw.githubusercontent.com/joledal-tech/kvile-hjemmeside/main/public/Vestmarka-14.jpg"
    ],

    // DETALJBILDER
    forestDetail: "https://raw.githubusercontent.com/joledal-tech/kvile-hjemmeside/main/public/Kvile-drone.png",

    // HYTTEBILDER
    cabins: {
      panorama: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=800",
      tradisjon: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=800",
      skogstua: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800"
    },

    // FALLBACKS (Må også ligge inni images-blokken)
    fallbacks: {
      hero: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2560",
      general: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2000"
    }
  }
};