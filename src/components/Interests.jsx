import React, { useState } from 'react';
import { Compass, Layers, Cpu, Palette, Cloud, HeartHandshake, Code2, Tag, Database, ShieldCheck, Server } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Interests({ playClickSound }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const iconMap = {
    Layers: <Layers size={24} style={{ color: '#111111' }} />,
    Cpu: <Cpu size={24} style={{ color: '#111111' }} />,
    Palette: <Palette size={24} style={{ color: '#111111' }} />,
    Cloud: <Cloud size={24} style={{ color: '#111111' }} />,
    HeartHandshake: <HeartHandshake size={24} style={{ color: '#111111' }} />,
    Code2: <Code2 size={24} style={{ color: '#111111' }} />,
    Database: <Database size={24} style={{ color: '#111111' }} />,
    ShieldCheck: <ShieldCheck size={24} style={{ color: '#111111' }} />,
    Server: <Server size={24} style={{ color: '#111111' }} />
  };

  const categories = ['All', 'Innovation', 'Architecture', 'Technical', 'Security', 'Core', 'Infrastructure'];

  const filteredInterests = activeCategory === 'All'
    ? PORTFOLIO_DATA.interests
    : PORTFOLIO_DATA.interests.filter(item => item.category === activeCategory);

  return (
    <section id="interests" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="badge badge-purple" style={{ marginBottom: '12px' }}>
            <Compass size={14} />
            <span>Passions & Focus Areas</span>
          </div>
          <h2>My Key Interests & Expertise</h2>
          <p>What drives my technical exploration, innovation, and daily engineering work.</p>
        </div>

        {/* Filter Category Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '40px'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                if (playClickSound) playClickSound();
                setActiveCategory(cat);
              }}
              style={{
                background: activeCategory === cat ? '#111111' : '#ffffff',
                color: activeCategory === cat ? '#ffffff' : '#111111',
                border: '3px solid #111111',
                padding: '8px 22px',
                borderRadius: '0',
                fontWeight: 900,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease-out',
                boxShadow: activeCategory === cat ? '4px 4px 0px var(--accent-cyan)' : '4px 4px 0px #111111',
                textTransform: 'uppercase'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interests Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px'
          }}
        >
          {filteredInterests.map((item) => (
            <div
              key={item.id}
              className="glass-panel"
              style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                position: 'relative'
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '16px'
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '0',
                      background: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '3px solid #111111',
                      boxShadow: '3px 3px 0px #111111'
                    }}
                  >
                    {iconMap[item.icon] || <Tag size={24} />}
                  </div>
                  <span className="badge badge-cyan">{item.category}</span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '10px' }}>
                  {item.title}
                </h3>
                
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                  {item.description}
                </p>
              </div>

              {/* Tag chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto' }}>
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      background: '#F3F0E6',
                      color: '#111111',
                      padding: '4px 10px',
                      borderRadius: '0',
                      border: '2px solid #111111',
                      fontWeight: 700
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
