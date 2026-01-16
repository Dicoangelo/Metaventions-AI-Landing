
import React, { useState, useEffect } from 'react';
import { submitContact } from '../lib/supabase';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode?: boolean;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, isDarkMode }) => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [syncing, setSyncing] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [objective, setObjective] = useState('STRUCTURA_BETA_ACCESS');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (isOpen) {
      setSyncing(true);
      setStatus('idle');
      setError(null);
      const timer = setTimeout(() => setSyncing(false), 180);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setError(null);

    const result = await submitContact({ name, email, objective, message });

    if (result.success) {
      setStatus('success');
      // Reset form
      setName('');
      setEmail('');
      setObjective('STRUCTURA_BETA_ACCESS');
      setMessage('');
    } else {
      setStatus('idle');
      setError(result.error || 'Submission failed');
    }
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm transition-opacity duration-200">
      <div className="w-full max-w-2xl glass-modal rounded-sm p-12 relative overflow-hidden shadow-2xl min-h-[580px] animate-in slide-in-from-bottom-2 fade-in duration-200 ease-out">
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#FF3DF2] via-[#7B2CFF] to-[#18E6FF] z-30"></div>
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-8 mono text-black/40 dark:text-white/40 hover:text-[#18E6FF] transition-colors click-feedback text-2xl z-30"
        >
          ×
        </button>

        {/* Sync Layer */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center p-12 transition-opacity duration-300 z-10 ${syncing ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="w-8 h-8 border-2 border-black/5 dark:border-white/5 border-t-[#7B2CFF] rounded-full animate-spin mb-8"></div>
          <div className="space-y-6 w-full opacity-10">
            <div className="h-10 w-2/3 skeleton-shimmer rounded-sm"></div>
            <div className="h-32 w-full skeleton-shimmer rounded-sm"></div>
            <div className="h-12 w-full skeleton-shimmer rounded-sm"></div>
          </div>
        </div>

        {/* Content Layer */}
        <div className={`transition-all duration-300 ${syncing ? 'opacity-0 scale-98' : 'opacity-100 scale-100'}`}>
          {status === 'success' ? (
            <div className="text-center py-16">
              <h2 className="mono text-xl font-black text-black dark:text-white mb-6 tracking-tighter uppercase">Transmission_Sent</h2>
              <button 
                onClick={onClose}
                className="mt-8 px-10 py-4 bg-black dark:bg-white text-white dark:text-black mono text-[9px] font-black tracking-[0.5em] uppercase transition-all click-feedback"
              >
                DISCONNECT
              </button>
            </div>
          ) : (
            <div>
              <div className="mb-10">
                <span className="mono text-[8px] font-black tracking-[0.6em] text-[#7B2CFF] uppercase block mb-3 opacity-60">INITIATE_HANDSHAKE</span>
                <h2 className="text-4xl font-black text-black dark:text-white mb-2 tracking-tighter">Contact & Access</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-sm">
                    <p className="mono text-[9px] text-red-400 uppercase">{error}</p>
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="mono text-[8px] uppercase opacity-40 font-black tracking-[0.2em] ml-1">IDENTITY</label>
                    <input
                      required
                      type="text"
                      placeholder="YOUR FULL NAME"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-sm px-6 py-4 focus:outline-none focus:border-[#7B2CFF] transition-all text-black dark:text-white mono text-[9px] uppercase placeholder:text-black/30 dark:placeholder:text-white/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="mono text-[8px] uppercase opacity-40 font-black tracking-[0.2em] ml-1">CONTACT_CHANNEL</label>
                    <input
                      required
                      type="email"
                      placeholder="EMAIL_ADDRESS"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-sm px-6 py-4 focus:outline-none focus:border-[#7B2CFF] transition-all text-black dark:text-white mono text-[9px] uppercase placeholder:text-black/30 dark:placeholder:text-white/30"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="mono text-[8px] uppercase opacity-40 font-black tracking-[0.2em] ml-1">OBJECTIVE</label>
                  <select
                    value={objective}
                    onChange={(e) => setObjective(e.target.value)}
                    className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-sm px-6 py-4 focus:outline-none focus:border-[#7B2CFF] transition-all text-black dark:text-white mono text-[9px] uppercase appearance-none cursor-pointer"
                  >
                    <option value="STRUCTURA_BETA_ACCESS" className="bg-white dark:bg-obsidian">STRUCTURA_BETA_ACCESS</option>
                    <option value="COLLABORATION_INQUIRY" className="bg-white dark:bg-obsidian">COLLABORATION_INQUIRY</option>
                    <option value="INVESTOR_RELATIONS" className="bg-white dark:bg-obsidian">INVESTOR_RELATIONS</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="mono text-[8px] uppercase opacity-40 font-black tracking-[0.2em] ml-1">INQUIRY_BRIEF</label>
                  <textarea
                    rows={4}
                    placeholder="DESCRIBE YOUR INTEREST..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-sm px-6 py-4 focus:outline-none focus:border-[#7B2CFF] transition-all text-black dark:text-white mono text-[9px] uppercase resize-none placeholder:text-black/30 dark:placeholder:text-white/30"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-5 bg-black dark:bg-white text-white dark:text-black rounded-sm mono text-[9px] font-black tracking-[0.6em] uppercase hover:bg-amethyst hover:text-white transition-all shadow-xl click-feedback disabled:opacity-50"
                >
                  {status === 'sending' ? 'TRANSMITTING...' : 'TRANSMIT'}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
