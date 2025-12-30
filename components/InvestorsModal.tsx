
import React, { useState, useEffect } from 'react';

interface InvestorsModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode?: boolean;
}

const InvestorsModal: React.FC<InvestorsModalProps> = ({ isOpen, onClose, isDarkMode }) => {
  const [syncing, setSyncing] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setSyncing(true);
      const timer = setTimeout(() => setSyncing(false), 180);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 bg-black/70 backdrop-blur-md transition-opacity duration-200">
      <div className="w-full max-w-4xl glass-gold rounded-sm p-16 relative overflow-y-auto max-h-[90vh] shadow-[0_0_100px_rgba(215,178,109,0.2)] min-h-[580px] animate-in zoom-in-95 duration-200 ease-out">
        <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#D7B26D] via-[#F9D976] to-[#B38728] z-30"></div>
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-8 mono text-gold hover:text-white text-2xl transition-colors click-feedback z-30"
        >
          ×
        </button>

        {/* Sync Layer */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center p-16 transition-opacity duration-300 z-10 ${syncing ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="w-8 h-8 border-2 border-gold/10 border-t-gold rounded-full animate-spin mb-10"></div>
          <div className="grid grid-cols-2 gap-10 w-full opacity-10">
             <div className="h-64 w-full skeleton-shimmer"></div>
             <div className="h-64 w-full skeleton-shimmer"></div>
          </div>
        </div>

        {/* Content Layer */}
        <div className={`transition-all duration-300 ${syncing ? 'opacity-0 scale-98' : 'opacity-100 scale-100'}`}>
          <div className="mb-14 text-center">
            <span className="mono text-[9px] font-black tracking-[0.8em] text-gold uppercase block mb-4 opacity-70">SYNERGY</span>
            <h2 className="text-5xl font-black text-black dark:text-white tracking-tighter">
              Sovereign <span className="gold-spectrum italic">Intelligence.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <p className="text-xl text-black dark:text-white font-light leading-relaxed tracking-tight border-l-2 border-gold pl-8">
                Building the infrastructure of the Agentic Age.
              </p>
            </div>

            <div className="space-y-8">
              <div className="group">
                <h3 className="mono text-[9px] font-black tracking-widest text-gold uppercase mb-2">Moat</h3>
                <p className="text-black/70 dark:text-white/50 text-xs leading-relaxed">
                  Proprietary OS architectures and high-fidelity frameworks.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black/20 dark:bg-white/5 border border-gold/20 p-10 text-center rounded-sm backdrop-blur-xl">
            <h3 className="mono text-[9px] font-black tracking-[0.4em] text-gold uppercase mb-6 opacity-60">INQUIRY</h3>
            <p className="text-xl font-black text-black dark:text-white mb-8 tracking-tight">
              Dicoangelo@metaventions.com
            </p>
            <a 
              href="mailto:Dicoangelo@metaventions.com"
              className="px-10 py-4 bg-gold text-black font-black rounded-sm transition-all hover:scale-105 shadow-xl mono text-[9px] tracking-[0.5em] inline-block uppercase click-feedback"
            >
              INITIALIZE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorsModal;
