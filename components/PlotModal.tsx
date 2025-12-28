import React from 'react';
import { Plot } from '../types.ts';

interface PlotModalProps {
  plot: Plot | null;
  onClose: () => void;
}

const PlotModal: React.FC<PlotModalProps> = ({ plot, onClose }) => {
  if (!plot) return null;

  const MODAL_FALLBACK = "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1200";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-stone-950/80 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative bg-white rounded-[3rem] overflow-hidden max-w-4xl w-full shadow-2xl flex flex-col md:flex-row animate-in zoom-in fade-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 z-20 w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg hover:bg-stone-100 transition-all font-bold"
        >
          ✕
        </button>
        
        <div className="md:w-1/2 h-72 md:h-auto bg-stone-100 relative">
          <img 
            src="input_file_0.png" 
            className="w-full h-full object-cover" 
            alt="Utsikt fra tomten" 
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src !== MODAL_FALLBACK) {
                target.src = MODAL_FALLBACK;
              }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute bottom-10 left-10 text-white">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-70 font-sans">Selveiertomt</span>
            <h3 className="text-4xl font-bold font-serif italic">Tomt {plot.id}</h3>
          </div>
        </div>
        
        <div className="md:w-1/2 p-12 md:p-16 flex flex-col justify-between">
          <div className="space-y-10">
            <div className="flex items-center justify-between">
              <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] ${
                plot.status === 'Ledig' ? 'bg-green-50 text-[#176533]' : 'bg-stone-50 text-stone-400'
              }`}>
                {plot.status}
              </span>
              <span className="text-stone-300 font-bold text-[10px] uppercase tracking-widest font-sans">KVL-{plot.id}</span>
            </div>
            
            <p className="text-xl text-stone-600 leading-relaxed font-serif italic">
              "{plot.description}"
            </p>
            
            <div className="grid grid-cols-2 gap-10 border-y border-stone-100 py-10">
              <div>
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block mb-2 font-sans">Areal</span>
                <span className="text-2xl font-bold text-stone-800 font-sans">{plot.size} m²</span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block mb-2 font-sans">Avstand vann</span>
                <span className="text-2xl font-bold text-stone-800 font-sans">{plot.distanceToWater}m</span>
              </div>
              <div className="col-span-2">
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block mb-2 font-sans">Tomtepris</span>
                <span className="text-5xl font-bold text-[#176533] font-sans">kr {plot.price.toLocaleString('no-NO')},-</span>
              </div>
            </div>
          </div>
          
          <div className="pt-10">
            <button 
              disabled={plot.status !== 'Ledig'}
              className="w-full bg-[#176533] text-white py-6 rounded-2xl font-bold text-xl hover:bg-stone-900 transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed font-sans"
            >
              {plot.status === 'Ledig' ? 'Meld din interesse' : 'Denne tomten er solgt'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlotModal;