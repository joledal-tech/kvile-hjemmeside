import React from 'react';
import Logo from './Logo.tsx';

const Header: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center cursor-pointer" onClick={() => scrollTo('hero')}>
          <Logo className="h-10 md:h-12 w-auto" />
        </div>
        <nav className="hidden lg:flex space-x-8 text-sm font-medium text-stone-600 uppercase tracking-widest">
          <button onClick={() => scrollTo('about')} className="hover:text-kvile-green transition-colors">Området</button>
          <button onClick={() => scrollTo('cabins')} className="hover:text-kvile-green transition-colors">Hyttene</button>
          <button onClick={() => scrollTo('map')} className="hover:text-kvile-green transition-colors">Tomtekart</button>
          <button onClick={() => scrollTo('assistant')} className="hover:text-kvile-green transition-colors">AI-Veiviser</button>
        </nav>
        <button 
          onClick={() => scrollTo('contact')}
          className="bg-kvile-green text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-stone-700 transition-all shadow-lg"
        >
          Kontakt oss
        </button>
      </div>
    </header>
  );
};

export default Header;