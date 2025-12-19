
import React from 'react';

interface VisionModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode?: boolean;
}

const VisionModal: React.FC<VisionModalProps> = ({ isOpen, onClose, isDarkMode }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-4xl bg-white/70 dark:bg-midnight/80 backdrop-blur-2xl rounded-sm border border-black/10 dark:border-white/10 p-16 relative overflow-y-auto max-h-[90vh] shadow-2xl animate-in fade-in zoom-in duration-300 transition-colors duration-500">
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#FF3DF2] via-[#7B2CFF] to-[#18E6FF]"></div>
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-8 mono text-black dark:text-white hover:text-cyan text-3xl transition-colors focus:outline-none click-feedback"
        >
          ×
        </button>

        <div className="mb-16 text-center">
          <span className="mono text-[10px] font-black tracking-[0.6em] text-[#7B2CFF] uppercase block mb-6">SYSTEM_PHILOSOPHY</span>
          <h2 className="text-6xl font-black text-black dark:text-white mb-8 tracking-tighter leading-none transition-colors duration-500">Intelligence, Sovereign.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-10">
            <p className="text-2xl text-black dark:text-white font-light leading-relaxed tracking-tight border-l-4 border-[#18E6FF] pl-8 transition-colors duration-500">
              We believe the user should remain the sovereign core, with AI acting as the weaver of their intent.
            </p>
            <p className="text-lg text-black dark:text-white/80 font-medium italic transition-colors duration-500">
              Metaventions AI builds sovereign operating systems that synthesize distinct data streams into unified human intent.
            </p>
          </div>

          <div className="space-y-8">
            <div className="p-8 bg-black/5 dark:bg-white/5 rounded-sm border border-black/5 dark:border-white/5">
              <h3 className="mono text-xs font-black tracking-widest text-[#7B2CFF] uppercase mb-4">Agency</h3>
              <p className="text-black dark:text-white/70 font-light transition-colors duration-500">
                We design systems that empower, not replace. Every agentic workflow is transparent, modular, and under direct human oversight.
              </p>
            </div>
            <div className="p-8 bg-black/5 dark:bg-white/5 rounded-sm border border-black/5 dark:border-white/5">
              <h3 className="mono text-xs font-black tracking-widest text-[#18E6FF] uppercase mb-4">Sovereignty</h3>
              <p className="text-black dark:text-white/70 font-light transition-colors duration-500">
                Your data, your logic, your assets. We utilize decentralized protocols and sovereign stacks to ensure your intelligence remains your own.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-black/10 dark:border-white/10 flex justify-between items-center mono text-[9px] text-black dark:text-white tracking-[0.4em] uppercase transition-colors duration-500">
          <span>MV_AI // EST_2025</span>
          <span>MANHATTAN, NY</span>
        </div>
      </div>
    </div>
  );
};

export default VisionModal;
