import React, { useState, useRef, useEffect } from 'react';
import { askKvileExpert } from '../services/geminiService.ts';

const AIAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<{ text: string, sources: any[] } | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (response && scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [response]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || loading) return;
    
    setLoading(true);
    setResponse(null);
    
    const result = await askKvileExpert(query);
    setResponse(result);
    setLoading(false);
  };

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-16 rounded-[3.5rem] shadow-inner">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Spør vår Kvile-veiviser</h2>
          <p className="text-stone-400 text-lg">
            Lurer du på tomtepriser, fiske i Skjærvangen eller shopping på andre siden av grensen? Vår AI har svarene.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="relative group">
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="F.eks: Finnes det ledige strandtomter og hvordan er fisket?"
            className="w-full bg-white/10 border border-white/20 text-white rounded-2xl px-8 py-6 outline-none focus:ring-2 focus:ring-kvile-green focus:bg-white/15 transition-all text-lg pr-32"
          />
          <button 
            type="submit"
            disabled={loading}
            className="absolute right-3 top-3 bottom-3 bg-kvile-green text-white px-8 rounded-xl font-bold hover:bg-white hover:text-kvile-green transition-all-300 disabled:opacity-50 flex items-center justify-center min-w-[100px]"
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : 'Spør'}
          </button>
        </form>

        {response && (
          <div ref={scrollRef} className="bg-white rounded-3xl p-8 md:p-12 text-left border border-stone-200 animate-in fade-in slide-in-from-bottom-4 duration-500 shadow-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-kvile-green rounded-full flex items-center justify-center text-white font-bold text-sm">AI</div>
              <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">Svar fra Veiviseren</span>
            </div>
            
            <div className="prose prose-stone max-w-none text-stone-800 leading-relaxed text-lg whitespace-pre-wrap">
              {response.text}
            </div>

            {response.sources.length > 0 && (
              <div className="mt-10 pt-8 border-t border-stone-100">
                <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4">Kilder og videre lesning</h4>
                <div className="flex flex-wrap gap-3">
                  {response.sources.map((chunk, i) => (
                    chunk.web && (
                      <a 
                        key={i} 
                        href={chunk.web.uri} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-sm bg-stone-50 border border-stone-200 px-4 py-2 rounded-xl text-kvile-green hover:bg-kvile-green hover:text-white transition-all-300"
                      >
                        <span className="text-base">🔗</span>
                        <span className="font-semibold">{chunk.web.title || 'Ekstern kilde'}</span>
                      </a>
                    )
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AIAssistant;