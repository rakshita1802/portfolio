import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Terminal, Sparkles, Activity, ShieldCheck, Code2, ChevronDown } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Hero({ onOpenTerminal, playClickSound }) {
  const roles = [
    "Full-Stack Software Engineer",
    "React & Node.js Architect",
    "Creative Technologist",
    "AI & Cloud Systems Specialist"
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showResumeDropdown, setShowResumeDropdown] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      }, 35);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }, 85);
    }

    if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2400);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const { personal } = PORTFOLIO_DATA;

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        paddingTop: '150px',
        paddingBottom: '90px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >

      <div className="container" style={{ width: '100%', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '980px', margin: '0 auto', textAlign: 'center' }}>
          


          {/* Subheading Greeting */}
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 3.8vw, 2.6rem)',
              fontWeight: 800,
              color: 'var(--accent-cyan)',
              marginBottom: '10px',
              letterSpacing: '-0.5px'
            }}
          >
            Hi, I'm {personal.name} 👋
          </h2>

          {/* Giant Title */}
          <h1
            style={{
              fontSize: 'clamp(2.8rem, 6.8vw, 5.4rem)',
              fontWeight: 900,
              lineHeight: 1.08,
              marginBottom: '26px',
              letterSpacing: '-1.5px'
            }}
          >
            Building Scalable <span className="gradient-text">Web Architectures</span> & AI Products.
          </h1>

          {/* Dynamic Typing Subtitle */}
          <div
            style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
              fontWeight: 600,
              color: 'var(--text-secondary)',
              minHeight: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginBottom: '28px',
              fontFamily: 'var(--font-mono)'
            }}
          >
            <span style={{ color: 'var(--accent-purple)' }}>[core]</span>
            <span>{displayText}</span>
            <span
              style={{
                display: 'inline-block',
                width: '3px',
                height: '1.2em',
                background: 'var(--accent-cyan)',
                animation: 'pulseGlow 0.8s infinite'
              }}
            />
          </div>

          {/* Tagline */}
          <p
            style={{
              fontSize: '1.15rem',
              color: 'var(--text-secondary)',
              maxWidth: '750px',
              margin: '0 auto 44px auto',
              lineHeight: 1.7
            }}
          >
            {personal.shortBio}
          </p>

          {/* CTA Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              marginBottom: '64px'
            }}
          >
            <a
              href="#projects"
              className="btn-primary"
              onClick={() => playClickSound && playClickSound()}
            >
              <span>Explore Projects</span>
              <ArrowRight size={18} />
            </a>

            <div style={{ position: 'relative' }}>
              <button
                className="btn-secondary"
                onClick={() => {
                  if (playClickSound) playClickSound();
                  setShowResumeDropdown(!showResumeDropdown);
                }}
                style={{ cursor: 'pointer' }}
              >
                <Download size={18} />
                <span>Resume PDF</span>
                <ChevronDown size={18} style={{ transform: showResumeDropdown ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
              </button>

              {/* Brutalist Dropdown Menu */}
              {showResumeDropdown && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    marginTop: '8px',
                    background: '#ffffff',
                    border: '3px solid #111111',
                    boxShadow: '4px 4px 0px #111111',
                    display: 'flex',
                    flexDirection: 'column',
                    zIndex: 10,
                    width: '100%',
                    minWidth: '200px'
                  }}
                >
                  <a
                    href="/data_resume.pdf"
                    download="Rakshita_Data_Resume.pdf"
                    onClick={() => {
                      setShowResumeDropdown(false);
                      if (playClickSound) playClickSound();
                    }}
                    style={{
                      padding: '12px 16px',
                      color: '#111111',
                      textDecoration: 'none',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      borderBottom: '2px solid #111111',
                      textAlign: 'left'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#111111';
                      e.target.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = '#ffffff';
                      e.target.style.color = '#111111';
                    }}
                  >
                    Data Role Resume
                  </a>
                  <a
                    href="/sde_resume.pdf"
                    download="Rakshita_SDE_Resume.pdf"
                    onClick={() => {
                      setShowResumeDropdown(false);
                      if (playClickSound) playClickSound();
                    }}
                    style={{
                      padding: '12px 16px',
                      color: '#111111',
                      textDecoration: 'none',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      textAlign: 'left'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#111111';
                      e.target.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = '#ffffff';
                      e.target.style.color = '#111111';
                    }}
                  >
                    SDE Role Resume
                  </a>
                </div>
              )}
            </div>

            <button
              onClick={() => {
                if (playClickSound) playClickSound();
                onOpenTerminal();
              }}
              style={{
                background: '#ffffff',
                color: '#111111',
                border: '3px solid #111111',
                padding: '13px 22px',
                borderRadius: '0',
                fontWeight: 900,
                fontSize: '0.92rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.15s ease-out',
                boxShadow: '4px 4px 0px #111111',
                textTransform: 'uppercase'
              }}
            >
              <Terminal size={18} />
              <span>CLI Terminal</span>
            </button>
          </div>

          {/* Metric Stats Cards */}
          <div
            className="glass-panel"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '24px',
              padding: '32px 24px',
              background: '#ffffff'
            }}
          >
            {personal.stats.map((stat, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: '2.2rem',
                    fontWeight: 900,
                    color: '#111111',
                    fontFamily: 'var(--font-mono)',
                    marginBottom: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px'
                  }}
                >
                  <span className="gradient-text">{stat.value}</span>
                  {stat.suffix && <span style={{ fontSize: '1.4rem' }}>{stat.suffix}</span>}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
