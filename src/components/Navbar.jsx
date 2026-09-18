import React, { useState, useEffect } from 'react';
import { Terminal, Volume2, VolumeX, Menu, X, Code2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Navbar({
  soundEnabled,
  setSoundEnabled,
  onOpenTerminal,
  playClickSound,
  onNavClick
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    if (playClickSound) playClickSound();
    setMobileMenuOpen(false);
    
    if (onNavClick) {
      onNavClick(href);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '12px 0' : '20px 0',
        transition: 'all 0.2s ease-out',
        background: scrolled ? '#F3F0E6' : 'transparent',
        borderBottom: scrolled ? '4px solid #111111' : '4px solid transparent',
        boxShadow: scrolled ? '0px 4px 0px #111111' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo - Brutalist */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            color: '#111111',
            fontWeight: 900,
            fontSize: '1.4rem',
            letterSpacing: '-1px',
            textTransform: 'uppercase'
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '0',
              background: 'var(--accent-emerald)', // Cobalt Blue
              border: '2px solid #111111',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              boxShadow: '3px 3px 0px #111111'
            }}
          >
            <Code2 size={24} />
          </div>
          <span>
            {PORTFOLIO_DATA.personal.name.split(' ')[0]}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              style={{
                color: '#111111',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 800,
                padding: '8px 16px',
                border: '2px solid transparent',
                transition: 'all 0.15s ease-out',
                textTransform: 'uppercase'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#111111';
                e.target.style.color = '#ffffff';
                e.target.style.borderColor = '#111111';
                e.target.style.boxShadow = '3px 3px 0px var(--accent-purple)'; // Mustard shadow
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#111111';
                e.target.style.borderColor = 'transparent';
                e.target.style.boxShadow = 'none';
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions & Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Terminal Launcher */}
          <button
            onClick={() => { if (playClickSound) playClickSound(); onOpenTerminal(); }}
            title="Open Interactive CLI Terminal"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--accent-purple)', // Mustard Yellow
              color: '#111111',
              border: '2px solid #111111',
              padding: '8px',
              borderRadius: '0',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
              transition: 'all 0.15s ease-out',
              boxShadow: '3px 3px 0px #111111'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translate(-2px, -2px)';
              e.currentTarget.style.boxShadow = '5px 5px 0px #111111';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translate(0px, 0px)';
              e.currentTarget.style.boxShadow = '3px 3px 0px #111111';
            }}
          >
            <Terminal size={20} />
          </button>



          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            style={{
              display: 'none',
              background: 'var(--accent-emerald)',
              border: '2px solid #111111',
              color: '#ffffff',
              cursor: 'pointer',
              padding: '6px',
              boxShadow: '3px 3px 0px #111111',
              borderRadius: '0'
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: '#ffffff',
            borderBottom: '4px solid #111111',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              style={{
                color: '#111111',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: 900,
                textTransform: 'uppercase',
                borderBottom: '2px solid #111111',
                paddingBottom: '8px'
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-only { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}
