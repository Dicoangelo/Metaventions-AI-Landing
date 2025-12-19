
import React from 'react';

const Vision: React.FC = () => {
  return (
    <div id="vision" className="py-32 animate-in fade-in slide-in-from-bottom-12 duration-1000">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-6 mb-12">
           <span className="mono text-[#FF3DF2] text-[11px] font-black tracking-[0.6em] uppercase">SYSTEM_PHILOSOPHY</span>
           <div className="flex-grow h-px bg-[#0B1020]/10"></div>
        </div>
        
        <h1 className="text-7xl md:text-9xl font-black mb-20 tracking-tighter leading-[0.85] text-[#0B1020]">Intelligence, <br /><span className="text-[#0B1020]/40">Sovereign.</span></h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-7 space-y-16 text-3xl text-[#0B1020]/90 leading-relaxed font-light tracking-tight">
            <p className="relative">
               The future of software isn't just a set of buttons; it's a partner in creation. We believe the user should remain the sovereign core, with AI acting as the weaver of their intent.
            </p>
            <p className="text-xl text-[#0B1020]/70 max-w-2xl font-bold">
              Metaventions AI was founded on the belief that as intelligence becomes architected into every layer of our digital lives, the priority must shift back to human agency.
            </p>
          </div>
          
          <div className="lg:col-span-5 space-y-10">
            <div className="glass-slab-floating p-12 rounded-sm border-white">
              <h3 className="text-[#0B1020] font-black text-2xl mb-6 tracking-tighter uppercase mono tracking-widest">Agency</h3>
              <p className="text-[#0B1020]/70 text-lg leading-relaxed font-light">
                We design systems that empower, not replace. Every agentic workflow we build is transparent, modular, and under direct human oversight.
              </p>
            </div>
            <div className="glass-slab-floating p-12 rounded-sm border-white">
              <h3 className="text-[#0B1020] font-black text-2xl mb-6 tracking-tighter uppercase mono tracking-widest">Sovereignty</h3>
              <p className="text-[#0B1020]/70 text-lg leading-relaxed font-light">
                Your data, your logic, your assets. We utilize decentralized protocols and sovereign stacks to ensure that your intelligence remains your own.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-16 border-t border-[#0B1020]/10 flex flex-col md:flex-row justify-between items-center gap-12">
          <p className="text-[#0B1020]/50 text-base max-w-xl font-bold">
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
