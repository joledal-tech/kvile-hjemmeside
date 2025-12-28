import React, { useState } from 'react';
import { PLOTS } from '../constants.ts';
import { Plot } from '../types.ts';

interface PlotMapProps {
  onSelectPlot: (plot: Plot) => void;
}

const PlotMap: React.FC<PlotMapProps> = ({ onSelectPlot }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="relative w-full aspect-[16/10] bg-[#fdfdfd] rounded-[3.5rem] overflow-hidden border border-stone-100">
      {/* Decorative terrain lines */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1000 625">
          <path d="M 0 100 Q 250 80 500 120 T 1000 90" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M 0 200 Q 300 180 600 240 T 1000 210" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M 0 300 Q 200 320 500 280 T 1000 350" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M 0 450 Q 400 480 700 420 T 1000 500" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <svg viewBox="0 0 1000 625" className="w-full h-full cursor-crosshair select-none relative z-10">
        {/* Waterfront indication */}
        <path d="M 900 0 C 850 150 870 450 920 625" fill="none" stroke="#3953a4" strokeWidth="10" className="opacity-10" />
        <path d="M 910 0 C 860 150 880 450 930 625" fill="none" stroke="#3953a4" strokeWidth="2" strokeDasharray="10 10" className="opacity-30" />
        
        <text x="960" y="312" transform="rotate(90 960,312)" className="fill-stone-300 text-[14px] font-bold uppercase tracking-[0.8em] font-sans">Skjærvangen</text>

        {PLOTS.map((plot) => (
          <g 
            key={plot.id} 
            onClick={() => onSelectPlot(plot)}
            onMouseEnter={() => setHovered(plot.id)}
            onMouseLeave={() => setHovered(null)}
            className="transition-all duration-300 group cursor-pointer"
          >
            {/* Animation ring */}
            {hovered === plot.id && plot.status === 'Ledig' && (
              <circle 
                cx={plot.coordinates.x} 
                cy={plot.coordinates.y} 
                r="28" 
                className="fill-none stroke-kvile-green/20 animate-ping"
                strokeWidth="1"
              />
            )}
            
            {/* Plot Circle */}
            <circle 
              cx={plot.coordinates.x} 
              cy={plot.coordinates.y} 
              r={hovered === plot.id ? 24 : 18} 
              className={`
                transition-all duration-500 drop-shadow-xl
                ${plot.status === 'Ledig' ? 'fill-kvile-green group-hover:fill-stone-900' : 
                  plot.status === 'Reservert' ? 'fill-amber-400' : 'fill-rose-500'}
              `}
            />
            
            <text 
              x={plot.coordinates.x} 
              y={plot.coordinates.y + 4} 
              textAnchor="middle" 
              className="fill-white text-[11px] font-bold pointer-events-none font-sans"
            >
              {plot.id}
            </text>
          </g>
        ))}
      </svg>
      
      {/* Legend */}
      <div className="absolute bottom-10 left-10 flex items-center space-x-8 bg-white/90 backdrop-blur-xl px-8 py-4 rounded-3xl shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)] border border-stone-100 z-20">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 rounded-full bg-kvile-green"></div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Ledig</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 rounded-full bg-rose-500"></div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Solgt</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 rounded-full bg-amber-400"></div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Reservert</span>
        </div>
      </div>
    </div>
  );
};

export default PlotMap;