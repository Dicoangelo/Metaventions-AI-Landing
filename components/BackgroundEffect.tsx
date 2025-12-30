
import React, { useEffect, useRef } from 'react';

interface BackgroundEffectProps {
  customBg?: string | null;
  bgOpacity?: number;
  isDarkMode?: boolean;
}

const BackgroundEffect: React.FC<BackgroundEffectProps> = ({ 
  customBg, 
  bgOpacity = 0.4, 
  isDarkMode 
}) => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const glowRef1 = useRef<HTMLDivElement>(null);
  const glowRef2 = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const currentMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let ticking = false;

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position from -1 to 1
      mousePos.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      };
    };

    const updateEffects = () => {
      const scrollY = window.scrollY;
      
      // Smoothly interpolate current mouse position for fluid movement
      currentMousePos.current.x += (mousePos.current.x - currentMousePos.current.x) * 0.05;
      currentMousePos.current.y += (mousePos.current.y - currentMousePos.current.y) * 0.05;

      const mx = currentMousePos.current.x;
      const my = currentMousePos.current.y;

      // Update custom background parallax (scroll only)
      if (parallaxRef.current) {
        const translateValue = scrollY * 0.15;
        parallaxRef.current.style.transform = `translate3d(0, ${translateValue}px, 0) scale(1.15)`;
      }

      // Update ethereal glows with combined scroll and mouse interactivity
      // Glow 1 follows mouse slightly
      if (glowRef1.current) {
        const scrollOffset = scrollY * 0.1;
        const mouseOffsetX = mx * 30; // 30px max horizontal sway
        const mouseOffsetY = my * 30; // 30px max vertical sway
        glowRef1.current.style.transform = `translate3d(${mouseOffsetX}px, ${scrollOffset + mouseOffsetY}px, 0)`;
      }

      // Glow 2 moves opposite to mouse for parallax depth
      if (glowRef2.current) {
        const scrollOffset = -scrollY * 0.05;
        const mouseOffsetX = mx * -50; // Moves further in opposite direction
        const mouseOffsetY = my * -50;
        glowRef2.current.style.transform = `translate3d(${mouseOffsetX}px, ${scrollOffset + mouseOffsetY}px, 0)`;
      }

      ticking = false;
      window.requestAnimationFrame(updateEffects);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Start animation loop
    const animationId = window.requestAnimationFrame(updateEffects);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.cancelAnimationFrame(animationId);
    };
  }, [customBg]);

  return (
    <div className={`fixed inset-0 -z-10 pointer-events-none overflow-hidden transition-colors duration-700 ${isDarkMode ? 'bg-obsidian' : 'bg-[#F8FAFC]'}`}>
      {/* Subtle Light Grid Layer */}
      <div className="absolute inset-0 grid-bg-light opacity-30 transition-opacity"></div>

      {/* Default Cinematic Background Elements (Active when no custom image is set) */}
      {!customBg ? (
        <>
          <div 
            ref={glowRef1}
            className={`absolute top-[-20%] left-[-10%] w-[80%] h-[80%] blur-[120px] rounded-full animate-pulse transition-colors duration-700 will-change-transform ${isDarkMode ? 'bg-amethyst/15' : 'bg-[#7B2CFF]/10'}`} 
            style={{ animationDuration: '8s' }}
          ></div>
          <div 
            ref={glowRef2}
            className={`absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] blur-[100px] rounded-full animate-pulse transition-colors duration-700 will-change-transform ${isDarkMode ? 'bg-cyan/15' : 'bg-[#18E6FF]/10'}`} 
            style={{ animationDuration: '12s' }}
          ></div>
        </>
      ) : (
        /* High-Performance High-Quality Custom Background Layer */
        <div 
          ref={parallaxRef}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 will-change-transform"
          style={{ 
            backgroundImage: `url(${customBg})`,
            opacity: bgOpacity,
            height: '130vh',
            width: '100%',
            imageRendering: 'auto',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
            perspective: '1000px'
          }}
        ></div>
      )}

      {/* High-Fidelity Atmospheric Noise/Particles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150 brightness-100"></div>
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className={`absolute rounded-full opacity-20 transition-colors duration-700 ${isDarkMode ? 'bg-white' : 'bg-black'}`}
            style={{
              width: (Math.random() * 2 + 0.5) + 'px',
              height: (Math.random() * 2 + 0.5) + 'px',
              top: (Math.random() * 100) + '%',
              left: (Math.random() * 100) + '%',
              // Add a slight shimmer animation to particles
              animation: `pulse ${Math.random() * 3 + 2}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Adaptive Cinematic Vignette */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${
        isDarkMode 
          ? 'bg-[radial-gradient(circle_at_50%_30%,transparent_0%,rgba(5,7,13,0.7)_100%)]' 
          : 'bg-[radial-gradient(circle_at_50%_30%,transparent_0%,rgba(248,250,252,0.6)_100%)]'
      }`}></div>
    </div>
  );
};

export default BackgroundEffect;
