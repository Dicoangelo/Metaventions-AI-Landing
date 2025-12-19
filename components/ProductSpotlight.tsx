
import React from 'react';

const ProductSpotlight: React.FC = () => {
  const features = [
    {
      title: "Asset Studio",
      desc: "Visualize and deploy digital assets in real-time. High-clarity refraction UI for sovereign control.",
      icon: "⚡"
    },
    {
      title: "Process Logic",
      desc: "Visual workflows for complex decision trees. Cinematic node maps for agentic intent.",
      icon: "🧠"
    },
    {
      title: "Voice Core",
      desc: "Natural language interface for seamless command. Instruments respond with optical precision.",
      icon: "🎙️"
    }
  ];

  return (
    <div className="py-32 animate-in fade-in slide-in-from-bottom-12 duration-1000">
      <div className="text-center max-w-5xl mx-auto mb-32">
        <span className="mono text-[#7B2CFF] text-[11px] font-black tracking-[0.6em] mb-8 block uppercase">FLAGSHIP_ARCHITECTURE</span>
        <h1 className="text-7xl md:text-9xl font-black mb-10 tracking-tighter leading-none text-[#0B1020]">Structura <span className="sovereign-spectrum italic">OS</span></h1>
        <p className="text-3xl text-[#0B1020]/60 font-light tracking-tight italic">Your Logic. Your Assets. Your Core.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-40">
        <div className="relative glass-slab-floating rounded-sm aspect-video border-white shadow-[0_40px_100px_rgba(0,0,0,0.08)] overflow-hidden group">
          {/* Instrumental Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#18E6FF]/5 to-transparent"></div>
          
          <div className="p-12 flex flex-col h-full mono text-[9px] text-[#0B1020]/80">
            <div className="flex items-center justify-between mb-16 border-b border-[#0B1020]/10 pb-8">
              <div className="flex gap-6">
                 <span className="font-black text-[#0B1020]">KERNEL_LINK: STABLE</span>
                 <span className="tracking-widest font-bold">ENCRYPTION: AES-512-V1</span>
              </div>
              <div className="text-[#7B2CFF] font-black tracking-widest uppercase">SOVEREIGN_ENGINE_V1.0.4</div>
            </div>
            
            <div className="grid grid-cols-5 gap-8 flex-grow">
              <div className="col-span-1 glass-slab rounded-sm p-5 border-[#0B1020]/10 flex flex-col gap-6">
                <div className="h-1.5 w-full bg-[#18E6FF]/20 rounded-full overflow-hidden">
                   <div className="h-full w-2/3 bg-[#18E6FF] animate-pulse"></div>
                </div>
                <div className="h-1.5 w-3/4 bg-[#7B2CFF]/20 rounded-full"></div>
                <div className="mt-auto flex flex-col gap-2">
                   <div className="h-10 w-full bg-[#0B1020]/10 rounded-sm"></div>
                   <div className="h-10 w-full bg-[#0B1020]/10 rounded-sm"></div>
                </div>
              </div>
              
              <div className="col-span-4 glass-slab rounded-sm flex items-center justify-center relative overflow-hidden bg-white/40 border-white">
                 {/* Arc Traces & Rings */}
                 <div className="absolute w-[400px] h-[400px] border-[0.5px] border-dashed border-[#0B1020]/20 rounded-full ui-ring opacity-60"></div>
                 <div className="absolute w-[300px] h-[300px] border-[1px] border-[#18E6FF]/20 rounded-full ui-ring" style={{animationDirection: 'reverse'}}></div>
                 
                 <div className="relative z-10 w-full max-w-[80%] space-y-8">
                    <div className="flex justify-between items-end border-b border-[#0B1020]/10 pb-4">
                      <div>
                        <div className="text-[8px] uppercase tracking-widest opacity-60 font-black">Central_Axiom</div>
                        <div className="text-xl font-black text-[#0B1020]">Architect_Intent_01</div>
                      </div>
                      <div className="w-4 h-4 rounded-full bg-[#00FFC6] shadow-[0_0_15px_#00FFC6]"></div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-24 bg-[#0B1020]/5 rounded-sm border border-[#0B1020]/10 flex items-center justify-center">
                         <span className="text-[10px] tracking-widest font-black">NODE_ALPHA</span>
                      </div>
                      <div className="h-24 bg-[#0B1020]/5 rounded-sm border border-[#0B1020]/10 flex items-center justify-center">
                         <span className="text-[10px] tracking-widest font-black">NODE_BETA</span>
                      </div>
                      <div className="h-24 bg-[#0B1020]/5 rounded-sm border border-[#0B1020]/10 flex items-center justify-center">
                         <span className="text-[10px] tracking-widest font-black">NODE_GAMMA</span>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white/60 backdrop-blur-md">
            <button className="mono text-white text-[11px] bg-[#0B1020] px-10 py-4 rounded-sm shadow-2xl font-black tracking-[0.5em] uppercase">ACCESS_INTERFACE</button>
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-20">
          {features.map((f, idx) => (
            <div key={idx} className="flex gap-12 group">
              <div className="w-16 h-16 rounded-sm glass-slab border-[#0B1020]/20 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-500 shadow-sm">
                {f.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-black text-[#0B1020] mb-4 tracking-tighter leading-none">{f.title}</h3>
                <p className="text-xl text-[#0B1020]/70 font-light leading-relaxed tracking-tight">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center p-20 glass-slab-floating rounded-sm border-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#7B2CFF]/30 to-transparent"></div>
         <h2 className="text-5xl font-black mb-8 tracking-tighter text-[#0B1020]">Ready to architect your intelligence?</h2>
         <p className="text-[#0B1020]/60 mb-14 mono text-[10px] tracking-[0.6em] uppercase italic font-bold">SESSIONS: RESTRICTED // FOUNDER_LEVEL_SYNOPSIS</p>
         <a href="#contact" className="px-16 py-7 bg-[#0B1020] text-white font-black rounded-sm transition-all hover:scale-105 shadow-[0_20px_40px_rgba(0,0,0,0.1)] mono text-[11px] tracking-[0.5em] inline-block uppercase">INIT_SESSION_REQUEST</a>
      </div>
    </div>
  );
};

export default ProductSpotlight;
