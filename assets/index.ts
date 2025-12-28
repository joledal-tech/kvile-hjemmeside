// assets/index.ts
// -----------------------------------------------------------------------------
// KVILE BILDE-BIBLIOTEK
// -----------------------------------------------------------------------------
// Siden vi jobber i en forhåndsvisning, bruker vi nå nett-lenker slik at du ser
// hvordan designet blir.
//
// NÅR DU SKAL BRUKE EGNE BILDER SENERE:
// 1. Lagre bildene dine i denne mappen.
// 2. Gi dem navnene som står under (f.eks "hero.jpg").
// 3. Endre 'useLocalImages' til true.
// -----------------------------------------------------------------------------

const useLocalImages = false; // Sett denne til 'true' når du har lagt inn egne filer

const LOCAL_FILES = {
  hero: "hero.jpg",              // Ditt hovedbilde
  forest: "forest.jpg",          // Bilde av skogen
  winter: "winter.jpg",          // Vinterbilde
  sunset: "sunset.jpg",          // Solnedgang
  detail: "detail.jpg",          // Detaljbilde (kongle/tre)
  cabin1: "cabin_panorama.jpg",  // Bilde av hytte 1
  cabin2: "cabin_tradisjon.jpg", // Bilde av hytte 2
  cabin3: "cabin_skogstua.jpg"   // Bilde av hytte 3
};

const DEMO_URLS = {
  // Et vakkert dronebilde som ligner på Kvile (Innsjø og skog)
  hero: "https://images.unsplash.com/photo-1548576887-43c224213d2f?q=80&w=2560", 
  
  gallery: [
    "https://images.unsplash.com/photo-1548576887-43c224213d2f?q=80&w=2560", // Hovedbilde
    "https://images.unsplash.com/photo-1448375240586-dfd8f3793371?q=80&w=2000", // Skog
    "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=2000", // Vinter
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2000"  // Solnedgang
  ],
  
  forestDetail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000",
  
  cabins: {
    panorama: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=800",
    tradisjon: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=800",
    skogstua: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800"
  },

  fallback: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2560"
};

// Her velger systemet automatisk mellom dine filer eller demo-bildene
export const ASSETS = {
  images: {
    hero: useLocalImages ? LOCAL_FILES.hero : DEMO_URLS.hero,
    gallery: useLocalImages 
      ? [LOCAL_FILES.hero, LOCAL_FILES.forest, LOCAL_FILES.winter, LOCAL_FILES.sunset] 
      : DEMO_URLS.gallery,
    forestDetail: useLocalImages ? LOCAL_FILES.detail : DEMO_URLS.forestDetail,
    cabins: {
      panorama: useLocalImages ? LOCAL_FILES.cabin1 : DEMO_URLS.cabins.panorama,
      tradisjon: useLocalImages ? LOCAL_FILES.cabin2 : DEMO_URLS.cabins.tradisjon,
      skogstua: useLocalImages ? LOCAL_FILES.cabin3 : DEMO_URLS.cabins.skogstua
    },
    fallbacks: {
      hero: DEMO_URLS.fallback,
      general: DEMO_URLS.forestDetail
    }
  }
};