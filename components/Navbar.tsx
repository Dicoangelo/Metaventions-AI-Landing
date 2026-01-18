
import React, { useState } from 'react';

interface NavbarProps {
  onOpenSettings: () => void;
  onOpenVision: () => void;
  onOpenProduct: () => void;
  onOpenContact: () => void;
  onOpenInvestors: () => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  onOpenSettings,
  onOpenVision,
  onOpenProduct,
  onOpenContact,
  onOpenInvestors,
  isDarkMode,
  toggleTheme
}) => {
  const [showConsole, setShowConsole] = useState(false);

  const navLinks = [
    { label: 'Home', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { label: 'Vision', action: onOpenVision },
    { label: 'Product', action: onOpenProduct },
    { label: 'Investors', action: onOpenInvestors, isGold: true },
    { label: 'Contact', action: onOpenContact }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Liquid Glass Layer */}
      <div className="absolute inset-0 glass-liquid-subtle pointer-events-none transition-all duration-500"></div>
      
      <div className="w-[98%] mx-auto flex items-center justify-between px-2 py-5 relative z-10">
        <div className="flex items-center gap-12 overflow-hidden">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 shrink-0 click-feedback group ml-0 p-1"
          >
            <div className="w-8 h-8 flex items-center justify-center">
               <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M5 35L20 5L35 35H30L20 15L10 35H5Z" fill="url(#paint0_linear)" />
                  <path d="M15 35L20 25L25 35H15Z" fill="#18E6FF" />
                  <defs>
                    <linearGradient id="paint0_linear" x1="5" y1="5" x2="35" y2="35" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF3DF2" />
                      <stop offset="0.5" stopColor="#7B2CFF" />
                      <stop offset="1" stopColor="#18E6FF" />
                    </linearGradient>
                  </defs>
               </svg>
            </div>
            <span className="mono font-black text-xl tracking-widest text-[#0B1020] dark:text-white transition-colors duration-500 holo-text-pulse">
              METAVENTIONS <span className="text-[#18E6FF]">AI</span>
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.label}
                onClick={link.action}
                className={`nav-link ${
                  link.isGold 
                    ? 'nav-link-gold text-gold font-black' 
                    : 'text-[#0B1020] dark:text-white font-black'
                } mono text-[10px] uppercase tracking-[0.3em] transition-colors duration-500 click-feedback`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="relative flex-grow h-6 overflow-hidden hidden 2xl:flex items-center ml-4">
            <span className="animate-scroll-rtl text-crystallized mono text-[9px] uppercase tracking-[0.3em]">
              Architected Intelligence — Deep Thinking — Let the invention be hidden in your vision —
            </span>
          </div>
        </div>

        <div className="flex items-center gap-6 pr-2">
          {/* Dark Mode Toggle */}
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-sm glass-slab hover:border-amethyst/30 transition-all click-feedback group"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-midnight">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>

          <button
            onClick={() => document.getElementById('ecosystem')?.scrollIntoView({ behavior: 'smooth' })}
            onDoubleClick={() => setShowConsole(true)}
            className="group glass-slab px-6 py-2.5 rounded-sm mono text-sm font-black text-black dark:text-white hover:text-[#7B2CFF] transition-all uppercase tracking-[0.4em] border border-black/5 dark:border-white/5 hover:border-[#7B2CFF]/30 hover:shadow-lg relative overflow-hidden click-feedback"
          >
            <span className="relative z-10">THE D-ECOSYSTEM</span>
            <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#FF3DF2] via-[#7B2CFF] to-[#18E6FF] transition-all duration-500 group-hover:w-full"></span>
          </button>
        </div>
      </div>

      {/* Easter Egg Console - Golden Terminal */}
      {showConsole && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/70 backdrop-blur-md"
          onClick={() => setShowConsole(false)}
        >
          <div
            className="w-full max-w-xl glass-gold rounded-sm p-10 relative overflow-hidden shadow-[0_0_120px_rgba(215,178,109,0.4)] animate-in zoom-in-95 duration-200 ease-out"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gold gradient top bar */}
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#D7B26D] via-[#F9D976] to-[#B38728]"></div>

            {/* Close button */}
            <button
              onClick={() => setShowConsole(false)}
              className="absolute top-4 right-6 mono text-gold hover:text-white text-2xl transition-colors"
            >
              ×
            </button>

            {/* Header */}
            <div className="mb-8 text-center">
              <span className="mono text-[9px] font-black tracking-[0.8em] text-gold uppercase block mb-4">CLASSIFIED</span>
              <h2 className="text-3xl font-black text-white tracking-tighter">
                Internal <span className="gold-spectrum italic">Registry</span>
              </h2>
            </div>

            {/* Terminal content */}
            <div className="bg-black/60 border border-gold/20 rounded-sm p-6 font-mono text-sm mb-6">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gold/20">
                <div className="w-2 h-2 rounded-full bg-[#D7B26D]" />
                <div className="w-2 h-2 rounded-full bg-[#F9D976]" />
                <div className="w-2 h-2 rounded-full bg-[#B38728]" />
                <span className="ml-3 text-gold/60 text-xs">d-ecosystem://internal</span>
              </div>

              <div className="space-y-2">
                <p className="text-gold/70">{'>'} ACCESSING INTERNAL REGISTRY...</p>
                <p className="text-gold/70">{'>'} CLEARANCE: <span className="text-[#F9D976]">GRANTED</span></p>
                <br />
                <p className="text-gold font-bold">ACTIVE PROTOCOLS:</p>
                <p className="text-white/80">  ◆ <span className="text-[#F9D976] font-bold">META-VENGINE</span>      <span className="text-gold/40">[ARCHITECTING]</span></p>
                <p className="text-white/80">  ◇ <span className="text-[#D7B26D]">D-PROTOCOL</span>        <span className="text-gold/40">[PENDING]</span></p>
                <p className="text-white/80">  ◆ <span className="text-[#F9D976] font-bold">GRAVITYWELL</span>       <span className="text-gold/40">[ACTIVE]</span></p>
                <p className="text-white/80">  ◇ <span className="text-gold/50">UCW-STANDARD</span>      <span className="text-gold/40">[████████]</span></p>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center">
              <p className="mono text-[9px] text-gold/50 tracking-[0.4em] uppercase">// the invention is hidden in your vision</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
