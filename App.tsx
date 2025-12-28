import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import PlotMap from './components/PlotMap.tsx';
import PlotModal from './components/PlotModal.tsx';
import AIAssistant from './components/AIAssistant.tsx';
import { Plot } from './types.ts';
import { CABIN_TYPES } from './constants.ts';
import { ASSETS } from './assets/index.ts';

const App: React.FC = () => {
  const [selectedPlot, setSelectedPlot] = useState<Plot | null>(null);
  const [currentMoodImage, setCurrentMoodImage] = useState(0);

  // Use the centralized gallery from assets folder
  const MOOD_IMAGES = ASSETS.images.gallery;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMoodImage((prev) => (prev + 1) % MOOD_IMAGES.length);
    }, 5000); 
    return () => clearInterval(timer);
  }, [MOOD_IMAGES.length]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const onImageError = (e: React.SyntheticEvent<HTMLImageElement>, fallbackUrl: string) => {
    const target = e.currentTarget;
    if (target.src !== fallbackUrl) {
      target.src = fallbackUrl;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-kvile-green selection:text-white">
      <Header />

      <main>
        {/* HERO SECTION - Using ASSETS.images.hero */}
        <section id="hero" className="relative h-[95vh] flex items-center justify-center overflow-hidden bg-stone-900">
          <div className="absolute inset-0 w-full h-full">
            <img 
              src={ASSETS.images.hero} 
              alt="Kvile Hyttefelt ved Skjærvangen" 
              className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
              style={{ filter: 'brightness(0.7) contrast(1.1)' }}
              onError={(e) => onImageError(e, ASSETS.images.fallbacks.hero)}
            />
          </div>
          <div className="absolute inset-0 hero-overlay"></div>
          
          <div className="relative z-10 max-w-5xl px-6 text-center text-white animate-reveal">
            <div className="mb-10 flex justify-center">
               <span className="inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-[10px] font-bold tracking-[0.5em] uppercase text-white/90">
                Eidskog | Skjærvangen
              </span>
            </div>
            <h1 className="text-8xl md:text-[11rem] font-bold mb-8 drop-shadow-2xl leading-none font-serif tracking-tighter">Kvile.</h1>
            <p className="text-xl md:text-3xl font-light mb-14 max-w-2xl mx-auto opacity-80 leading-relaxed font-serif italic">
              Der stillheten i skogen møter vannets evige ro.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => scrollTo('map')}
                className="bg-[#176533] text-white px-14 py-6 rounded-full font-bold text-lg hover:bg-white hover:text-[#176533] transition-all duration-500 shadow-2xl min-w-[240px] transform hover:scale-105"
              >
                Utforsk tomter
              </button>
              <button 
                onClick={() => scrollTo('assistant')}
                className="bg-white/5 backdrop-blur-xl border border-white/20 text-white px-14 py-6 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-500 min-w-[240px]"
              >
                Spør vår veiviser
              </button>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7"></path>
            </svg>
          </div>
        </section>

        {/* INTRO SECTION */}
        <section id="about" className="py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                <div className="space-y-6">
                  <h3 className="text-kvile-green font-bold uppercase tracking-[0.4em] text-xs">Velkommen hjem</h3>
                  <h2 className="text-7xl font-bold leading-[1.05] text-stone-900 font-serif">En friplass for generasjoner.</h2>
                </div>
                <div className="space-y-8 text-stone-500 text-xl leading-relaxed font-light">
                  <p>Kvile hyttefelt er mer enn bare et sted å bo; det er en investering i livskvalitet. Her i Eidskog har vi utviklet 34 unike selveiertomter som harmonerer med det urørte terrenget.</p>
                  <p>Hver tomt er nøye plassert for å maksimere solforhold og utsikt, enten du ønsker å bo helt i vannkanten eller trukket tilbake i den lune furuskogen.</p>
                </div>
                <div className="grid grid-cols-3 gap-8 pt-12 border-t border-stone-100">
                  <div className="space-y-1">
                    <span className="block text-4xl font-bold text-stone-900">34</span>
                    <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Tomter</span>
                  </div>
                  <div className="space-y-1">
                    <span className="block text-4xl font-bold text-stone-900">75</span>
                    <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Min fra Oslo</span>
                  </div>
                  <div className="space-y-1">
                    <span className="block text-4xl font-bold text-stone-900">100%</span>
                    <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Selveie</span>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                {/* Main Mood Slider */}
                <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] bg-stone-100 relative">
                  {MOOD_IMAGES.map((imgSrc, index) => (
                    <img 
                      key={index}
                      src={imgSrc} 
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
                        index === currentMoodImage ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                      }`}
                      style={{ transform: index === currentMoodImage ? 'scale(1.05)' : 'scale(1.0)' }}
                      alt={`Stemningsbilde ${index + 1}`}
                      onError={(e) => onImageError(e, ASSETS.images.fallbacks.general)} 
                    />
                  ))}
                  
                  {/* Progress dots for visual feedback */}
                  <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-10">
                    {MOOD_IMAGES.map((_, idx) => (
                      <div 
                        key={idx}
                        className={`h-1 rounded-full transition-all duration-500 ${
                          idx === currentMoodImage ? 'w-8 bg-white' : 'w-2 bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Detail image with floating animation */}
                <div className="absolute -bottom-16 -left-16 w-2/3 aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-[20px] border-white hidden md:block bg-stone-50 animate-float">
                  <img 
                    src={ASSETS.images.forestDetail} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                    alt="Vakker furuskog ved Skjærvangen" 
                    onError={(e) => onImageError(e, ASSETS.images.fallbacks.general)} 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MAP SECTION */}
        <section id="map" className="py-40 bg-stone-50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="mb-24 space-y-6">
              <h2 className="text-7xl font-bold text-stone-900 tracking-tight font-serif">Finn din plass</h2>
              <p className="text-stone-500 max-w-2xl mx-auto text-xl font-serif italic">Utforsk tomtevelgeren for å se tilgjengelighet, priser og terrengforhold.</p>
            </div>
            <div className="bg-white p-6 md:p-16 rounded-[5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] border border-stone-200">
              <PlotMap onSelectPlot={(p) => setSelectedPlot(p)} />
            </div>
          </div>
        </section>

        {/* ASSISTANT SECTION - Using ASSETS.images.hero as background */}
        <section id="assistant" className="py-40 bg-stone-950 relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 pointer-events-none">
            <img 
              src={ASSETS.images.hero} 
              className="w-full h-full object-cover blur-3xl scale-125" 
              alt="BG" 
              onError={(e) => onImageError(e, ASSETS.images.fallbacks.hero)} 
            />
          </div>
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <AIAssistant />
          </div>
        </section>

        {/* CABINS SECTION */}
        <section id="cabins" className="py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6">
             <div className="text-center mb-24 space-y-6">
              <h2 className="text-7xl font-bold text-stone-900 tracking-tight font-serif">Hyttene</h2>
              <p className="text-stone-500 max-w-2xl mx-auto text-xl">Arkitektur som puster med omgivelsene. Velg mellom våre modeller eller bygg din drøm.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-16">
              {CABIN_TYPES.map(cabin => (
                <div key={cabin.id} className="group cursor-pointer">
                  <div className="aspect-[4/3] rounded-[3.5rem] overflow-hidden mb-10 shadow-2xl bg-stone-50 relative">
                    <img 
                      src={cabin.imageUrl} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out" 
                      alt={cabin.name} 
                    />
                    <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-stone-900 shadow-sm">
                      {cabin.size} m²
                    </div>
                  </div>
                  <div className="px-4">
                    <h3 className="text-4xl font-bold text-stone-900 mb-4 font-serif italic">{cabin.name}</h3>
                    <p className="text-stone-500 mb-8 leading-relaxed font-light text-lg">{cabin.description}</p>
                    <div className="flex items-center justify-between border-t border-stone-100 pt-8">
                      <span className="text-kvile-green font-bold text-xl">{cabin.priceEstimate}</span>
                      <span className="text-stone-300 font-bold uppercase text-[10px] tracking-widest">{cabin.bedrooms} Soverom</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-40 bg-[#f8f6f3]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-20 items-start">
              <div className="lg:col-span-2 space-y-8">
                <h2 className="text-6xl font-bold text-stone-900 tracking-tight font-serif">La oss realisere drømmen.</h2>
                <p className="text-stone-500 text-xl leading-relaxed">Har du spørsmål eller ønsker visning? Vi er her for å hjelpe deg.</p>
                <div className="pt-8 space-y-4">
                   <div className="flex items-center space-x-4 text-stone-700">
                     <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-lg">✉️</span>
                     <span className="font-medium">post@kvile.no</span>
                   </div>
                   <div className="flex items-center space-x-4 text-stone-700">
                     <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-lg">📞</span>
                     <span className="font-medium">+47 900 00 000</span>
                   </div>
                </div>
              </div>
              <div className="lg:col-span-3 bg-white p-12 md:p-16 rounded-[4rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-stone-100">
                <form className="grid gap-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] ml-1">Navn</label>
                      <input type="text" placeholder="Ola Nordmann" className="w-full p-6 rounded-2xl border border-stone-50 bg-stone-50 outline-none focus:ring-2 focus:ring-[#176533] transition-all" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] ml-1">E-post</label>
                      <input type="email" placeholder="ola@eksempel.no" className="w-full p-6 rounded-2xl border border-stone-50 bg-stone-50 outline-none focus:ring-2 focus:ring-[#176533] transition-all" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] ml-1">Melding</label>
                    <textarea rows={4} placeholder="Jeg er interessert i tomt..." className="w-full p-6 rounded-2xl border border-stone-50 bg-stone-50 outline-none focus:ring-2 focus:ring-[#176533] transition-all resize-none"></textarea>
                  </div>
                  <button className="bg-[#176533] text-white py-7 rounded-2xl font-bold text-xl hover:bg-stone-900 transition-all shadow-xl">
                    Send forespørsel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-stone-950 text-white py-40">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-7xl font-serif font-bold italic mb-8 tracking-tighter">Kvile.</h2>
          <p className="text-[10px] tracking-[0.8em] uppercase opacity-30 mb-24 font-bold">Naturens egen hvileplass</p>
          <div className="flex flex-wrap justify-center gap-16 text-xs font-bold tracking-[0.4em] uppercase opacity-50 mb-24">
            <button onClick={() => scrollTo('about')} className="hover:text-white transition-opacity">Området</button>
            <button onClick={() => scrollTo('map')} className="hover:text-white transition-opacity">Tomtekart</button>
            <button onClick={() => scrollTo('cabins')} className="hover:text-white transition-opacity">Hyttene</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-white transition-opacity">Kontakt</button>
          </div>
          <div className="w-16 h-px bg-white/10 mx-auto mb-12"></div>
          <p className="text-[10px] opacity-20 uppercase tracking-widest italic font-serif">© {new Date().getFullYear()} Kvile Hytteutvikling AS.</p>
        </div>
      </footer>

      <PlotModal plot={selectedPlot} onClose={() => setSelectedPlot(null)} />
    </div>
  );
};

export default App;