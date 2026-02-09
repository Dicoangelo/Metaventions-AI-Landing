
import React, { useEffect, useRef, useState } from 'react';

const Mission: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-24 lg:py-40 relative overflow-hidden"
    >
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-black/10 dark:via-white/10 to-transparent hidden lg:block"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center relative z-10">
        <div className={`space-y-6 sm:space-y-8 reveal-hidden ${isVisible ? 'reveal-visible' : ''}`} style={{ transitionDelay: '100ms' }}>
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-6 sm:w-8 h-[1px] bg-[#7B2CFF]"></div>
            <span className="mono text-[#7B2CFF] font-black tracking-[0.3em] sm:tracking-[0.4em] text-[9px] sm:text-[10px] uppercase">OPERATOR_BRIEF</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 sm:mb-8 lg:mb-10 leading-[0.95] sm:leading-[0.9] text-black dark:text-white transition-colors duration-500">
            Architecting the <br /><span className="text-black/60 dark:text-white/60 italic">Agentic Age.</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-black dark:text-white/90 leading-relaxed font-light max-w-lg italic border-l-2 border-[#18E6FF] pl-6 sm:pl-8 lg:pl-10 transition-colors duration-500">
            "We don't build tools — we architect intelligence."
          </p>
        </div>

        <div className={`space-y-8 sm:space-y-10 lg:space-y-12 reveal-hidden ${isVisible ? 'reveal-visible' : ''}`} style={{ transitionDelay: '300ms' }}>
          <div className="glass-slab-floating p-6 sm:p-8 lg:p-12 rounded-sm border-white/20 dark:border-white/10 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#18E6FF] to-[#7B2CFF]"></div>
            <p className="text-base sm:text-lg lg:text-2xl text-black dark:text-white leading-relaxed font-light mb-4 sm:mb-6 lg:mb-8 tracking-tight transition-colors duration-500">
              We are moving beyond simple automation. Metaventions AI architects <span className="compute-halo font-black">intelligent operating systems</span> — where vision becomes system, and system becomes invention.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-black/70 dark:text-white/70 leading-relaxed font-bold transition-colors duration-500">
              We focus on high-fidelity collaboration between human operators and autonomous agents, ensuring that technology serves as a direct extension of human agency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
