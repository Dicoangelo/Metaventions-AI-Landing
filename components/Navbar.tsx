
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', action: () => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMobileMenuOpen(false); } },
    { label: 'Vision', action: () => { onOpenVision(); setIsMobileMenuOpen(false); } },
    { label: 'Product', action: () => { onOpenProduct(); setIsMobileMenuOpen(false); } },
    { label: 'Investors', action: () => { onOpenInvestors(); setIsMobileMenuOpen(false); }, isGold: true },
    { label: 'Contact', action: () => { onOpenContact(); setIsMobileMenuOpen(false); } }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Liquid Glass Layer */}
      <div className="absolute inset-0 glass-liquid-subtle pointer-events-none transition-all duration-500"></div>

      <div className="w-full sm:w-[98%] mx-auto flex items-center justify-between px-3 sm:px-2 py-3 sm:py-5 relative z-10">
        <div className="flex items-center gap-4 lg:gap-12 overflow-hidden">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 shrink-0 click-feedback group ml-0 p-1"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center">
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
            <span className="mono font-black text-sm sm:text-base lg:text-xl tracking-wider sm:tracking-widest text-[#0B1020] dark:text-white transition-colors duration-500 holo-text-pulse">
              <span className="hidden xs:inline">METAVENTIONS</span>
              <span className="xs:hidden">META</span>
              <span className="text-[#18E6FF]"> AI</span>
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={link.action}
                className={`nav-link ${link.isGold
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

        <div className="flex items-center gap-2 sm:gap-4 lg:gap-6 pr-0 sm:pr-2">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-sm glass-slab hover:border-amethyst/30 transition-all click-feedback group"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan sm:w-5 sm:h-5">
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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-midnight sm:w-5 sm:h-5">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>

          {/* D-ECOSYSTEM Button - Hidden on mobile */}
          <button
            onClick={() => document.getElementById('ecosystem')?.scrollIntoView({ behavior: 'smooth' })}
            onDoubleClick={() => setShowConsole(true)}
            className="hidden md:flex group glass-slab px-3 lg:px-6 py-2 lg:py-2.5 rounded-sm mono text-xs lg:text-sm font-black text-black dark:text-white hover:text-[#7B2CFF] transition-all uppercase tracking-[0.2em] lg:tracking-[0.4em] border border-black/5 dark:border-white/5 hover:border-[#7B2CFF]/30 hover:shadow-lg relative overflow-hidden click-feedback"
          >
            <span className="relative z-10">THE D-ECOSYSTEM</span>
            <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#FF3DF2] via-[#7B2CFF] to-[#18E6FF] transition-all duration-500 group-hover:w-full"></span>
          </button>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-sm glass-slab transition-all click-feedback"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0B1020] dark:text-white">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0B1020] dark:text-white">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 glass-modal border-t border-black/10 dark:border-white/10 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="p-4 sm:p-6 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={link.action}
              className={`w-full text-left py-3 px-4 rounded-sm transition-all click-feedback ${link.isGold
                  ? 'text-gold font-black bg-gold/5 hover:bg-gold/10'
                  : 'text-[#0B1020] dark:text-white font-black hover:bg-black/5 dark:hover:bg-white/5'
                } mono text-xs uppercase tracking-[0.3em]`}
            >
              {link.label}
            </button>
          ))}

          {/* D-Ecosystem in mobile menu */}
          <button
            onClick={() => {
              document.getElementById('ecosystem')?.scrollIntoView({ behavior: 'smooth' });
              setIsMobileMenuOpen(false);
            }}
            className="w-full mt-4 py-3 px-4 rounded-sm glass-slab mono text-xs font-black text-black dark:text-white uppercase tracking-[0.3em] border border-black/10 dark:border-white/10 transition-all click-feedback text-center"
          >
            THE D-ECOSYSTEM
          </button>
        </div>
      </div>

      {/* Easter Egg Console - Golden Terminal */}
      {showConsole && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md"
          onClick={() => setShowConsole(false)}
        >
          <div
            className="w-full max-w-xl glass-gold rounded-sm p-6 sm:p-10 relative overflow-hidden shadow-[0_0_120px_rgba(215,178,109,0.4)] animate-in zoom-in-95 duration-200 ease-out"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gold gradient top bar */}
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#D7B26D] via-[#F9D976] to-[#B38728]"></div>

            {/* Close button */}
            <button
              onClick={() => setShowConsole(false)}
              className="absolute top-4 right-4 sm:right-6 mono text-gold hover:text-white text-2xl transition-colors"
            >
              ×
            </button>

            {/* Header */}
            <div className="mb-6 sm:mb-8 text-center">
              <span className="mono text-[8px] sm:text-[9px] font-black tracking-[0.6em] sm:tracking-[0.8em] text-gold uppercase block mb-4">CLASSIFIED</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tighter">
                Internal <span className="gold-spectrum italic">Registry</span>
              </h2>
            </div>

            {/* Terminal content */}
            <div className="bg-black/60 border border-gold/20 rounded-sm p-4 sm:p-6 font-mono text-xs sm:text-sm mb-6 overflow-x-auto">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gold/20">
                <div className="w-2 h-2 rounded-full bg-[#D7B26D]" />
                <div className="w-2 h-2 rounded-full bg-[#F9D976]" />
                <div className="w-2 h-2 rounded-full bg-[#B38728]" />
                <span className="ml-3 text-gold/60 text-[10px] sm:text-xs">d-ecosystem://internal</span>
              </div>

              <div className="space-y-2 min-w-0">
                <p className="text-gold/70">{'>'} ACCESSING REGISTRY...</p>
                <p className="text-gold/70">{'>'} CLEARANCE: <span className="text-[#F9D976]">GRANTED</span></p>
                <br />
                <p className="text-gold font-bold">ACTIVE PROTOCOLS:</p>
                <p className="text-white/80 text-[11px] sm:text-sm">  ◆ <span className="text-[#F9D976] font-bold">META-VENGINE</span> <span className="text-gold/40">[ARCHITECTING]</span></p>
                <p className="text-white/80 text-[11px] sm:text-sm">  ◇ <span className="text-[#D7B26D]">D-PROTOCOL</span> <span className="text-gold/40">[PENDING]</span></p>
                <p className="text-white/80 text-[11px] sm:text-sm">  ◆ <span className="text-[#F9D976] font-bold">GRAVITYWELL</span> <span className="text-gold/40">[ACTIVE]</span></p>
                <p className="text-white/80 text-[11px] sm:text-sm">  ◇ <span className="text-gold/50">UCW-STANDARD</span> <span className="text-gold/40">[████████]</span></p>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center">
              <p className="mono text-[8px] sm:text-[9px] text-gold/50 tracking-[0.3em] sm:tracking-[0.4em] uppercase">// the invention is hidden in your vision</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
