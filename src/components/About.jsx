import React from 'react';
import { User, MapPin, Mail, GraduationCap, Code2, Zap, ShieldCheck, Heart } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function About({ playClickSound }) {
  const { personal } = PORTFOLIO_DATA;

  const corePillars = [
    {
      icon: <Zap size={22} style={{ color: 'var(--accent-cyan)' }} />,
      title: "Performance First",
      desc: "Optimizing bundle sizes, lazy loading, and rendering logic for blazing-fast 60fps web applications."
    },
    {
      icon: <Code2 size={22} style={{ color: 'var(--accent-purple)' }} />,
      title: "Clean Architecture",
      desc: "Writing modular, self-documenting code with decoupled components and strong domain boundaries."
    },
    {
      icon: <ShieldCheck size={22} style={{ color: 'var(--accent-emerald)' }} />,
      title: "Reliability & Quality",
      desc: "Emphasizing end-to-end testing, error logging, accessibility, and zero-downtime deployment pipelines."
    },
    {
      icon: <Heart size={22} style={{ color: 'var(--accent-pink)' }} />,
      title: "User Empathy",
      desc: "Building accessible, thoughtful interfaces that make complex data feel intuitive and pleasurable to use."
    }
  ];

  return (
    <section id="about" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="badge badge-cyan" style={{ marginBottom: '12px' }}>
            <User size={14} />
            <span>Get To Know Me</span>
          </div>
          <h2>About Me & Philosophy</h2>
          <p>Passionate software engineer building resilient software with modern web standards.</p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            alignItems: 'start'
          }}
        >
          {/* Left Bio Card */}
          <div className="glass-panel" style={{ padding: '36px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>
              Building the Future of Web & Software
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: 1.8 }}>
              {personal.aboutStory}
            </p>

            {/* Profile Detail Pills */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', margin: '24px 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)' }}>
                <MapPin size={18} style={{ color: 'var(--accent-cyan)' }} />
                <span><strong>Location:</strong> {personal.location}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)' }}>
                <Mail size={18} style={{ color: 'var(--accent-purple)' }} />
                <span><strong>Email:</strong> {personal.email}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)' }}>
                <GraduationCap size={18} style={{ color: 'var(--accent-emerald)' }} />
                <span><strong>Education:</strong> M.Sc. Software Systems (CGPA 8.3)</span>
              </div>
            </div>
          </div>

          {/* Right Core Pillars Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {corePillars.map((pillar, index) => (
              <div
                key={index}
                className="glass-panel"
                style={{
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'var(--bg-tertiary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid var(--glass-border)'
                  }}
                >
                  {pillar.icon}
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{pillar.title}</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
