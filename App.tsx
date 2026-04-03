
import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Ecosystem from './components/Ecosystem';
import Footer from './components/Footer';
import BackgroundEffect from './components/BackgroundEffect';
import SettingsModal from './components/SettingsModal';
import SignUpModal from './components/SignUpModal';
import ContactModal from './components/ContactModal';
import VisionModal from './components/VisionModal';
import ProductModal from './components/ProductModal';
import InvestorsModal from './components/InvestorsModal';

const App: React.FC = () => {
  const [customBg, setCustomBg] = useState<string | null>(null);
  const [bgOpacity, setBgOpacity] = useState<number>(0.4);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isVisionOpen, setIsVisionOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isInvestorsOpen, setIsInvestorsOpen] = useState(false);

  useEffect(() => {
    const storedBg = localStorage.getItem('metaventions_custom_bg');
    const storedOpacity = localStorage.getItem('metaventions_bg_opacity');
    const storedTheme = localStorage.getItem('metaventions_theme');
    
    if (storedBg) setCustomBg(storedBg);
    if (storedOpacity) setBgOpacity(parseFloat(storedOpacity));

    // Light mode is default; only switch to dark if explicitly stored
    if (storedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'contact') setIsContactOpen(true);
      if (hash === 'vision') setIsVisionOpen(true);
      if (hash === 'product') setIsProductOpen(true);
      if (hash === 'investors') setIsInvestorsOpen(true);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newVal = !prev;
      if (newVal) {
        document.body.classList.add('dark');
        localStorage.setItem('metaventions_theme', 'dark');
      } else {
        document.body.classList.remove('dark');
        localStorage.setItem('metaventions_theme', 'light');
      }
      return newVal;
    });
  };

  const handleUpdateBg = (newBg: string | null) => {
    if (newBg && newBg.length < 4.5 * 1024 * 1024) {
      try { localStorage.setItem('metaventions_custom_bg', newBg); } catch (e) {}
    } else {
      localStorage.removeItem('metaventions_custom_bg');
    }
    setCustomBg(newBg);
  };

  const handleUpdateOpacity = (opacity: number) => {
    setBgOpacity(opacity);
    localStorage.setItem('metaventions_bg_opacity', opacity.toString());
  };

  return (
    <div className={`relative min-h-screen selection:bg-[#7B2CFF]/30 overflow-x-hidden ${isDarkMode ? 'dark' : ''}`}>
      <a href="#main-content" className="skip-to-content">Skip to main content</a>

      <BackgroundEffect customBg={customBg} bgOpacity={bgOpacity} isDarkMode={isDarkMode} />
      <Navbar 
        onOpenSettings={() => setIsSettingsOpen(true)} 
        onOpenVision={() => setIsVisionOpen(true)}
        onOpenProduct={() => setIsProductOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenInvestors={() => setIsInvestorsOpen(true)}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />
      
      <main id="main-content" className="relative pt-20 px-4 max-w-7xl mx-auto">
        <Hero onOpenSignUp={() => setIsSignUpOpen(true)} />
        <Mission />
        <Ecosystem onOpenProduct={() => setIsProductOpen(true)} />
      </main>

      <Footer />

      <SettingsModal 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)} 
        onUpdateBg={handleUpdateBg}
        currentBg={customBg}
        bgOpacity={bgOpacity}
        onUpdateOpacity={handleUpdateOpacity}
      />

      <SignUpModal 
        isOpen={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
      />

      <ContactModal 
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        isDarkMode={isDarkMode}
      />

      <VisionModal 
        isOpen={isVisionOpen}
        onClose={() => setIsVisionOpen(false)}
        isDarkMode={isDarkMode}
      />

      <ProductModal 
        isOpen={isProductOpen}
        onClose={() => setIsProductOpen(false)}
        isDarkMode={isDarkMode}
      />

      <InvestorsModal
        isOpen={isInvestorsOpen}
        onClose={() => setIsInvestorsOpen(false)}
        isDarkMode={isDarkMode}
      />

      <Analytics />
    </div>
  );
};

export default App;
