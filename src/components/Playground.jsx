import React, { useState } from 'react';
import { Sparkles, Copy, Check, Code, Play, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Playground({ playClickSound }) {
  const [code, setCode] = useState(`// Hire Rakshita - Software Systems Engineer
const developer = {
  name: "Rakshita",
  skills: ["Python", "C++", "React", "AI & ML", "Data Engineering"],
  status: "Ready to impact your team! 🚀"
};

function buildAmazingApp() {
  return developer.skills.map(skill => \`Mastering \${skill}\`);
}`);

  const [theme, setTheme] = useState('cyber');
  const [copied, setCopied] = useState(false);

  const themePresets = {
    cyber: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #311042 100%)',
    neon: 'linear-gradient(135deg, #0c4a6e 0%, #1e293b 50%, #4c1d95 100%)',
    emerald: 'linear-gradient(135deg, #064e3b 0%, #0f172a 50%, #047857 100%)',
    sunset: 'linear-gradient(135deg, #831843 0%, #1e1b4b 50%, #701a75 100%)'
  };

  const handleCopy = () => {
    if (playClickSound) playClickSound();
    navigator.clipboard.writeText(code);
    setCopied(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 }
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="playground" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="badge badge-purple" style={{ marginBottom: '12px' }}>
            <Sparkles size={14} />
            <span>Interactive Demo Studio</span>
          </div>
          <h2>Live Code Card Studio</h2>
          <p>Test out this built-in mini studio tool designed to customize, format, and share code cards.</p>
        </div>

        <div
          style={{
            maxWidth: '850px',
            margin: '0 auto',
            padding: '32px',
            background: '#ffffff',
            border: '4px solid #111111',
            boxShadow: '8px 8px 0px #111111'
          }}
        >
          {/* Controls Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              marginBottom: '20px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                Card Canvas Theme:
              </span>
              {Object.keys(themePresets).map((t) => (
                <button
                  key={t}
                  onClick={() => {
                    if (playClickSound) playClickSound();
                    setTheme(t);
                  }}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '0',
                    border: theme === t ? '3px solid #111111' : '1px solid #111111',
                    background: theme === t ? '#111111' : '#ffffff',
                    color: theme === t ? '#ffffff' : '#111111',
                    fontSize: '0.75rem',
                    fontWeight: 900,
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    boxShadow: theme === t ? 'none' : '2px 2px 0px #111111'
                  }}
                >
                  {t}
                </button>
              ))}
            </div>

            <button
              onClick={handleCopy}
              className="btn-primary"
              style={{ padding: '8px 18px', fontSize: '0.85rem' }}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              <span>{copied ? 'Copied Code!' : 'Copy Code & Confetti'}</span>
            </button>
          </div>

          {/* Interactive Card Frame */}
          <div
            style={{
              background: themePresets[theme],
              padding: '28px',
              borderRadius: '0',
              boxShadow: '8px 8px 0px #111111',
              border: '4px solid #111111'
            }}
          >
            {/* Window Dots */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '0', background: '#ef4444', border: '2px solid #111111' }} />
              <span style={{ width: '12px', height: '12px', borderRadius: '0', background: '#f59e0b', border: '2px solid #111111' }} />
              <span style={{ width: '12px', height: '12px', borderRadius: '0', background: '#10b981', border: '2px solid #111111' }} />
              <span style={{ marginLeft: 'auto', fontSize: '0.75rem', color: '#ffffff', fontWeight: 900, fontFamily: 'var(--font-mono)', border: '2px solid #111111', padding: '2px 8px', background: '#111111' }}>
                rakshita-portfolio.js
              </span>
            </div>

            {/* Editable Text Area */}
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              rows={8}
              style={{
                width: '100%',
                background: '#111111',
                color: '#38bdf8',
                border: '3px solid #111111',
                borderRadius: '0',
                padding: '16px',
                fontFamily: 'var(--font-mono)',
                fontWeight: 600,
                fontSize: '0.9rem',
                lineHeight: 1.6,
                outline: 'none',
                resize: 'vertical'
              }}
            />
          </div>

        </div>

      </div>
    </section>
  );
}
