import React, { useState } from 'react';
import { Cpu, Layout, Server, Wrench, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Skills({ playClickSound }) {
  const [activeTab, setActiveTab] = useState('languages');

  const { skills } = PORTFOLIO_DATA;

  const tabOptions = [
    { key: 'languages', label: 'Languages', icon: <Cpu size={16} /> },
    { key: 'frameworks', label: 'Frameworks & Tools', icon: <Layout size={16} /> },
    { key: 'ai_ml', label: 'AI & Machine Learning', icon: <Server size={16} /> }
  ];

  const currentSkills = skills[activeTab] || [];

  return (
    <section id="skills" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="badge badge-purple" style={{ marginBottom: '12px' }}>
            <Cpu size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2>Skills & Technologies</h2>
          <p>Full-stack expertise across frontend libraries, backend runtimes, databases, and deployment infrastructure.</p>
        </div>

        {/* Tab Buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '40px',
            flexWrap: 'wrap'
          }}
        >
          {tabOptions.map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                if (playClickSound) playClickSound();
                setActiveTab(tab.key);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: activeTab === tab.key ? '#111111' : '#ffffff',
                color: activeTab === tab.key ? '#ffffff' : '#111111',
                border: '3px solid #111111',
                padding: '10px 22px',
                borderRadius: '0',
                fontWeight: 900,
                fontSize: '0.92rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease-out',
                boxShadow: activeTab === tab.key ? '4px 4px 0px var(--accent-purple)' : '4px 4px 0px #111111',
                textTransform: 'uppercase'
              }}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Bars Grid (Brutalist) */}
        <div
          style={{
            padding: '36px',
            maxWidth: '900px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            background: '#ffffff',
            border: '4px solid #111111',
            boxShadow: '8px 8px 0px #111111'
          }}
        >
          {currentSkills.map((item, idx) => (
            <div key={idx}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '8px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontWeight: 900, fontSize: '1rem', color: '#111111', textTransform: 'uppercase' }}>{item.name}</span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: '#ffffff',
                      fontFamily: 'var(--font-mono)',
                      background: 'var(--accent-emerald)', // Cobalt Blue
                      padding: '2px 8px',
                      borderRadius: '0',
                      border: '2px solid #111111',
                      fontWeight: 800
                    }}
                  >
                    {item.exp}
                  </span>
                </div>

                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 900, color: '#111111' }}>
                  {item.level}%
                </span>
              </div>

              {/* Progress Track (Brutalist) */}
              <div
                style={{
                  height: '16px',
                  width: '100%',
                  background: '#F3F0E6',
                  borderRadius: '0',
                  overflow: 'hidden',
                  position: 'relative',
                  border: '3px solid #111111'
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${item.level}%`,
                    background: 'var(--accent-purple)', // Mustard Yellow
                    borderRight: '3px solid #111111',
                    borderRadius: '0',
                    transition: 'width 1s cubic-bezier(0.1, 0.9, 0.2, 1)'
                  }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
