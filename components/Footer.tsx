
import React from 'react';

const Footer: React.FC = () => {
  const socials = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dico-angelo/' },
    { label: 'GitHub', href: 'https://github.com/Blackamethyst-ai' },
    { label: 'X', href: 'https://x.com/dicoangelo' },
    { label: 'Substack', href: 'https://substack.com/@thedicoangelo' }
  ];

  return (
    <footer className="py-24 px-10 mt-40 glass-liquid-subtle relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-0 left-0 w-full h-[0.5px] bg-gradient-to-r from-transparent via-black dark:via-white to-transparent opacity-10"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16 relative z-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="mono font-black text-2xl tracking-tighter text-black dark:text-white mb-4 flex items-center gap-4 transition-colors duration-500">
             <div className="w-7 h-7 border-sovereign rounded-sm bg-white dark:bg-obsidian"></div>
             METAVENTIONS <span className="text-[#18E6FF]">AI</span>
          </div>
          <p className="text-black dark:text-white/50 mono text-[9px] tracking-[0.3em] uppercase font-bold transition-colors duration-500">&copy; 2025 Metaventions AI // MANHATTAN, NY // Orbital_Core_01</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {socials.map((social) => (
            <a 
              key={social.label} 
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mono text-[10px] font-black tracking-[0.5em] uppercase text-black dark:text-white/70 hover:text-[#7B2CFF] transition-colors duration-500 click-feedback"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-black/10 dark:border-white/10 flex justify-end items-center">
         <div className="flex gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#18E6FF]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#7B2CFF]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B8A]"></div>
         </div>
      </div>
    </footer>
  );
};

export default Footer;
