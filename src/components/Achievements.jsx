import React from 'react';
import { Trophy, Award, GraduationCap, GitPullRequest, Code, Star, CheckCircle, Cpu } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Achievements() {
  const iconMap = {
    Trophy: <Trophy size={26} style={{ color: '#111111' }} />,
    Award: <Award size={26} style={{ color: '#111111' }} />,
    Star: <Star size={26} style={{ color: '#111111' }} />,
    Code: <Code size={26} style={{ color: '#111111' }} />,
    Cpu: <Cpu size={26} style={{ color: '#111111' }} />
  };

  return (
    <section id="achievements" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="badge badge-emerald" style={{ marginBottom: '12px' }}>
            <Trophy size={14} />
            <span>Honors & Certifications</span>
          </div>
          <h2>Achievements & Milestones</h2>
          <p>Hackathon wins, cloud certifications, open source contributions, and academic excellence.</p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px'
          }}
        >
          {PORTFOLIO_DATA.achievements.map((item) => (
            <div
              key={item.id}
              style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                background: '#ffffff',
                border: '4px solid #111111',
                boxShadow: '8px 8px 0px #111111'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '0',
                      background: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '3px solid #111111',
                      boxShadow: '3px 3px 0px #111111'
                    }}
                  >
                    {iconMap[item.icon] || <Award size={26} />}
                  </div>

                  <span className="badge badge-cyan" style={{ fontFamily: 'var(--font-mono)', borderRadius: '0', border: '2px solid #111111', background: 'var(--accent-emerald)', color: '#ffffff', fontWeight: 800 }}>
                    {item.badgeText}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 900, marginBottom: '6px', color: '#111111' }}>
                  {item.title}
                </h3>
                
                <div
                  style={{
                    fontSize: '0.85rem',
                    color: '#111111',
                    fontWeight: 800,
                    marginBottom: '12px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    textTransform: 'uppercase'
                  }}
                >
                  <span>{item.issuer}</span>
                </div>

                <p style={{ fontSize: '0.9rem', color: '#111111', lineHeight: 1.6, fontWeight: 500 }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
