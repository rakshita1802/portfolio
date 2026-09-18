import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="badge badge-cyan" style={{ marginBottom: '12px' }}>
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2>Education</h2>
          <p>My academic credentials and educational milestones.</p>
        </div>

        {/* Timeline Container */}
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          
          {/* Vertical Line */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '20px',
              width: '2px',
              background: 'var(--glass-border)',
              zIndex: 0
            }}
          />

          {PORTFOLIO_DATA.education.map((item, index) => (
            <div
              key={item.id}
              style={{
                position: 'relative',
                paddingLeft: '56px',
                marginBottom: '40px'
              }}
            >
              {/* Timeline Dot */}
              <div
                style={{
                  position: 'absolute',
                  left: '8px',
                  top: '4px',
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  background: index === 0 ? 'var(--gradient-glow)' : 'var(--bg-tertiary)',
                  border: '3px solid var(--bg-primary)',
                  boxShadow: '0 0 10px rgba(56, 189, 248, 0.4)',
                  zIndex: 1
                }}
              />

              {/* Education Card */}
              <div className="glass-panel" style={{ padding: '28px' }}>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    marginBottom: '8px'
                  }}
                >
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>{item.role}</h3>
                  <span className="badge badge-purple" style={{ fontFamily: 'var(--font-mono)' }}>
                    {item.type}
                  </span>
                </div>

                <div
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--accent-cyan)',
                    fontWeight: 600,
                    marginBottom: '12px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '16px'
                  }}
                >
                  <span>{item.company}</span>
                  <span style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Calendar size={14} /> {item.period}
                  </span>
                  <span style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={14} /> {item.location}
                  </span>
                </div>

                {/* Highlights */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                  {item.highlights.map((h, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--accent-emerald)', flexShrink: 0, marginTop: '3px' }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Skills Chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {item.skillsUsed.map((s, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        background: 'var(--bg-tertiary)',
                        color: 'var(--text-secondary)',
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--glass-border)'
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
