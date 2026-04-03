
import React from 'react';

const Vision: React.FC = () => {
  return (
    <div id="vision" className="py-32 animate-in fade-in slide-in-from-bottom-12 duration-1000">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-6 mb-12">
           <span className="mono text-[#FF3DF2] text-[11px] font-black tracking-[0.6em] uppercase">SYSTEM_PHILOSOPHY</span>
           <div className="flex-grow h-px bg-black/10 dark:bg-white/10"></div>
        </div>

        <h1 className="text-7xl md:text-9xl font-black mb-20 tracking-tighter leading-[0.85] text-black dark:text-white transition-colors duration-500">Intelligence, <br /><span className="text-black/40 dark:text-white/40">Architected.</span></h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-7 space-y-16 text-3xl text-black/90 dark:text-white/90 leading-relaxed font-light tracking-tight transition-colors duration-500">
            <p className="relative">
               The future of software isn't just a set of buttons; it's a partner in creation. We believe the user should remain the central architect, with AI acting as the weaver of their intent.
            </p>
            <p className="text-xl text-black/70 dark:text-white/70 max-w-2xl font-bold transition-colors duration-500">
              Metaventions AI was founded on the belief that as intelligence becomes architected into every layer of our digital lives, the priority must shift back to human agency.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-10">
            <div className="glass-slab-floating p-12 rounded-sm border-white dark:border-white/10">
              <h3 className="text-black dark:text-white font-black text-2xl mb-6 tracking-tighter uppercase mono tracking-widest transition-colors duration-500">Agency</h3>
              <p className="text-black/70 dark:text-white/70 text-lg leading-relaxed font-light transition-colors duration-500">
                We design systems that empower, not replace. Every agentic workflow we build is transparent, modular, and under direct human oversight.
              </p>
            </div>
            <div className="glass-slab-floating p-12 rounded-sm border-white dark:border-white/10">
              <h3 className="text-black dark:text-white font-black text-2xl mb-6 tracking-tighter uppercase mono tracking-widest transition-colors duration-500">Autonomy</h3>
              <p className="text-black/70 dark:text-white/70 text-lg leading-relaxed font-light transition-colors duration-500">
                Your data, your logic, your assets. We utilize decentralized protocols and private stacks to ensure that your intelligence remains your own.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-16 border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-12 transition-colors duration-500">
          <p className="text-black/50 dark:text-white/50 text-base max-w-xl font-bold transition-colors duration-500">
            Based in MANHATTAN, NY, we are a global research studio focused on high-stakes software development. We build the foundational protocols for the Agentic Age.
          </p>
          <div className="mono text-[#18E6FF] font-black text-[10px] tracking-[0.6em] uppercase flex items-center gap-4">
             <div className="w-10 h-[1px] bg-[#18E6FF]"></div>
             EST_2025 // MV_AI
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
