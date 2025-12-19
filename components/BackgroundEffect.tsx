
import React, { useEffect, useState } from 'react';

interface BackgroundEffectProps {
  customBg?: string | null;
  bgOpacity?: number;
  isDarkMode?: boolean;
}

const BackgroundEffect: React.FC<BackgroundEffectProps> = ({ customBg, bgOpacity = 0.4, isDarkMode }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax offset: moves background at exactly 20% of the scroll speed
  const parallaxTranslateY = scrollY * 0.20;

  return (
    <div className={`fixed inset-0 -z-10 pointer-events-none overflow-hidden transition-colors duration-700 ${isDarkMode ? 'bg-obsidian' : 'bg-[#F8FAFC]'}`}>
      {/* Subtle Light Grid */}
      <div className="absolute inset-0 grid-bg-light opacity-40 transition-opacity"></div>

      {/* Cool Transparent White/Noir Design (Default) */}
      {!customBg ? (
        <>
          {/* Ethereal Glows */}
          <div 
            className={`absolute top-[-20%] left-[-10%] w-[70%] h-[70%] blur-[120px] rounded-full animate-pulse transition-colors duration-700 ${isDarkMode ? 'bg-amethyst/10' : 'bg-[#7B2CFF]/5'}`} 
            style={{ 
              animationDuration: '8s',
              transform: `translateY(${parallaxTranslateY * 0.5}px)` 
            }}
          ></div>
          <div 
            className={`absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] blur-[100px] rounded-full animate-pulse transition-colors duration-700 ${isDarkMode ? 'bg-cyan/10' : 'bg-[#18E6FF]/5'}`} 
            style={{ 
              animationDuration: '12s',
              transform: `translateY(${-parallaxTranslateY * 0.3}px)` 
            }}
          ></div>
        </>
      ) : (
        /* Ultra-High-Quality Background Image Layer with 20% Parallax effect to create sense of depth */
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 image-render-high"
          style={{ 
            backgroundImage: `url(${customBg})`,
            opacity: bgOpacity,
            transform: `translateY(${parallaxTranslateY}px) scale(1.15)`, // Scale up slightly to prevent edges showing during movement
            height: '140vh',
            width: '100%',
            imageRendering: 'auto',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden'
          }}
        ></div>
      )}

      {/* Atmospheric Particles */}
      <div className="absolute inset-0 opacity-40">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className={`absolute rounded-full opacity-20 transition-colors duration-700 ${isDarkMode ? 'bg-white' : 'bg-black'}`}
            style={{
              width: Math.random() * 2 + 'px',
              height: Math.random() * 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>

      {/* Cinematic Vignette */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${isDarkMode ? 'bg-[radial-gradient(circle_at_50%_30%,transparent_0%,rgba(5,7,13,0.8)_100%)]' : 'bg-[radial-gradient(circle_at_50%_30%,transparent_0%,rgba(240,244,248,0.7)_100%)]'}`}></div>
    </div>
  );
};

export default BackgroundEffect;
