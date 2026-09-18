import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Interests from './components/Interests';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TerminalModal from './components/TerminalModal';
import LinkTransition from './components/LinkTransition';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('cyber');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Sync theme attribute on document root element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Web Audio API synth for futuristic click sound
  const playClickSound = () => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(900, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(350, ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.14, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch (e) {
      // Audio context fallbacks silently
    }
  };

  const handleNavTransition = (href) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    // Wait for the shutter animation to cover the screen
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        // Snap to the section instantly while screen is covered
        element.scrollIntoView({ behavior: 'auto' });
      } else if (href === '#hero') {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    }, 450); // Shutter hits center around 40-50% of 1s animation

    // Reset transition state after animation finishes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Cinematic Page Entry Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Background Particle Animation */}
      <ParticleCanvas theme={theme} />

      {/* Cinematic Link Transition Overlay */}
      <LinkTransition isTransitioning={isTransitioning} />

      {/* Navigation Header */}
      <Navbar
        theme={theme}
        setTheme={setTheme}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        onOpenTerminal={() => setTerminalOpen(true)}
        playClickSound={playClickSound}
        onNavClick={handleNavTransition}
      />

      {/* Main Content Sections */}
      <main style={{ position: 'relative', zIndex: 1 }} className="animate-fade-in">
        <Hero
          onOpenTerminal={() => setTerminalOpen(true)}
          playClickSound={playClickSound}
        />
        <About playClickSound={playClickSound} />
        <Interests playClickSound={playClickSound} />
        <Projects playClickSound={playClickSound} />
        <Achievements playClickSound={playClickSound} />
        <Skills playClickSound={playClickSound} />
        <Education playClickSound={playClickSound} />
        <Contact playClickSound={playClickSound} />
      </main>

      {/* Footer */}
      <Footer playClickSound={playClickSound} />

      {/* Interactive CLI Terminal Drawer */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        playClickSound={playClickSound}
      />
    </div>
  );
}
