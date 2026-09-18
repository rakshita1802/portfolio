import React from 'react';
import { ArrowUp, Code2, Heart, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Footer({ playClickSound }) {
  const scrollToTop = () => {
    if (playClickSound) playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--glass-border)',
        background: 'var(--bg-secondary)',
        padding: '50px 0 30px 0',
        position: 'relative'
      }}
    >
      <div className="container">
        
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            marginBottom: '30px'
          }}
        >
          {/* Logo & Tagline */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 800, fontSize: '1.2rem', marginBottom: '6px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'var(--gradient-glow)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
              >
                <Code2 size={18} />
              </div>
              <span>{PORTFOLIO_DATA.personal.name}</span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              Full-Stack Developer & Creative Technologist
            </p>
          </div>



          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            title="Scroll to Top"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--glass-border)',
              color: 'var(--accent-cyan)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <ArrowUp size={20} />
          </button>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '20px',
            borderTop: '1px solid var(--glass-border)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.85rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All rights reserved.
          </div>

        </div>

      </div>
    </footer>
  );
}
