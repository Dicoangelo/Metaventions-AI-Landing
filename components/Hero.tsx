
import React from 'react';

interface HeroProps {
  onOpenSignUp?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenSignUp }) => {
  return (
    <section id="hero" className="min-h-[85vh] sm:min-h-[90vh] lg:min-h-[95vh] flex flex-col justify-center items-center text-center pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4">
      {/* Instrumental Badge */}
      <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-2 mb-8 sm:mb-12 glass-slab rounded-sm border-black/20 dark:border-white/20 animate-pulse transition-all duration-1000">
        <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B8A] shadow-[0_0_8px_#FF6B8A] shrink-0"></div>
        <span className="mono text-[8px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.6em] text-black dark:text-white font-black flex items-center gap-2 sm:gap-3 transition-colors duration-500">
          <span className="hidden sm:inline">RESEARCH PROTOCOL:</span> ARCHITECTED_INTELLIGENCE
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_4px_rgba(123,44,255,0.5)] shrink-0 sm:w-[14px] sm:h-[14px]">
            <path d="M12 2L4 12L12 22L20 12L12 2Z" fill="url(#gem_gradient)" />
            <path d="M12 2V22M4 12H20" stroke="white" strokeWidth="0.5" strokeOpacity="0.3" />
            <defs>
              <linearGradient id="gem_gradient" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF3DF2" />
                <stop offset="0.5" stopColor="#7B2CFF" />
                <stop offset="1" stopColor="#18E6FF" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight mb-6 sm:mb-8 lg:mb-10 leading-[0.9] sm:leading-[0.85] text-black dark:text-white transition-colors duration-500">
        Let the invention <br />
        be <span className="sovereign-spectrum italic animate-flicker">hidden in your vision.</span>
      </h1>

      <p className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl text-black dark:text-white/80 mb-10 sm:mb-12 lg:mb-16 leading-relaxed font-light tracking-tight px-2 sm:px-4 transition-colors duration-500">
        Metaventions AI is a research studio focused on <span className="text-black dark:text-white font-bold transition-colors duration-500">Architected Intelligence</span>—architecting systems that transform vision into working infrastructure.
      </p>

      {/* Orbital Telemetry & CTA Area */}
      <div className="flex flex-col items-center w-full max-w-xs sm:max-w-md lg:max-w-lg mt-6 sm:mt-8 lg:mt-12">
        {/* Request Early Access Bar */}
        <div className="w-full mb-8 sm:mb-10 lg:mb-12 relative group">
          <div className="absolute -inset-1 sm:-inset-1.5 bg-gradient-to-r from-[#FF3DF2] via-[#7B2CFF] to-[#18E6FF] rounded-sm blur-md opacity-30 group-hover:opacity-100 transition duration-700 group-hover:duration-200 animate-pulse"></div>

          <button
            onClick={onOpenSignUp}
            className="relative block w-full py-4 sm:py-5 lg:py-6 bg-black dark:bg-white text-white dark:text-black rounded-sm mono text-[10px] sm:text-xs font-black tracking-[0.3em] sm:tracking-[0.5em] uppercase hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white border-2 border-black dark:border-white transition-all shadow-2xl text-center z-10 click-feedback"
            aria-label="Request Early Access to Metaventions AI"
          >
            Request Early Access
          </button>
        </div>

        {/* Sync Stream Telemetry */}
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center">
          <div className="absolute inset-0 border-[0.5px] border-dashed border-black dark:border-white rounded-full ui-ring opacity-60 transition-colors duration-500"></div>
          <div className="absolute inset-1.5 sm:inset-2 border-[1px] border-dotted border-[#18E6FF] rounded-full animate-spin transition-all" style={{ animationDuration: '10s' }}></div>
          <div className="w-px h-8 sm:h-10 lg:h-12 bg-gradient-to-b from-[#18E6FF] via-[#7B2CFF] to-transparent shadow-[0_0_10px_#18E6FF]"></div>
        </div>
        <span className="mono text-[8px] sm:text-[9px] tracking-[0.4em] sm:tracking-[0.6em] text-black dark:text-white mt-4 sm:mt-6 uppercase font-bold transition-colors duration-500" aria-live="polite">Sync_Stream: 104.2Mbps</span>
      </div>
    </section>
  );
};

export default Hero;
