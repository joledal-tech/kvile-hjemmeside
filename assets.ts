// assets.ts - Centralized Asset Management System

/**
 * HER STYRER DU BILDENE PÅ SIDEN
 * Bytt ut URL-ene/filnavnene her for å oppdatere designet globalt.
 */

export const ASSETS = {
  // HOVEDBILDE (Brukes i Hero-seksjon, som bakgrunn i AI-veiviser, og i modal)
  hero: "input_file_4.png",

  // GALLERI (Mood slider i "Om oss" seksjonen)
  gallery: [
    "input_file_4.png", // Dronebilde (Hovedbilde)
    "input_file_0.png", // Skogbilde
    "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=2000", // Vinterstemning
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2000"  // Solnedgang
  ],

  // DETALJBILDER
  forestDetail: "input_file_1.png",

  // HYTTEBILDER
  cabins: {
    panorama: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=800",
    tradisjon: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=800",
    skogstua: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800"
  },

  // FALLBACKS (Vises hvis et bilde feiler å laste)
  fallbacks: {
    hero: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2560",
    general: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2000"
  }
};
