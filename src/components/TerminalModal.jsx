import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, CornerDownLeft, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function TerminalModal({ isOpen, onClose, playClickSound }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { text: "Welcome to Rakshita's Interactive Portfolio CLI Terminal v1.0", type: 'system' },
    { text: "Type 'help' to see available commands or 'hire' to initiate quick contact.", type: 'system' }
  ]);

  const endRef = useRef(null);

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  if (!isOpen) return null;

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (playClickSound) playClickSound();

    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, { text: `> ${input}`, type: 'user' }];

    const { terminalCommands } = PORTFOLIO_DATA;

    if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    } else if (terminalCommands[cmd]) {
      newHistory.push({ text: terminalCommands[cmd], type: 'output' });
    } else {
      newHistory.push({
        text: `Command not recognized: '${cmd}'. Type 'help' for available commands.`,
        type: 'error'
      });
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(243, 240, 230, 0.85)',
        zIndex: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          maxWidth: '750px',
          width: '100%',
          height: '520px',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          borderRadius: '0',
          boxShadow: '8px 8px 0px #111111',
          border: '4px solid #111111',
          background: '#ffffff'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div
          style={{
            background: '#111111',
            padding: '14px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '4px solid #111111'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#ffffff', fontWeight: 900, fontSize: '1rem', fontFamily: 'var(--font-mono)' }}>
            <Terminal size={20} />
            <span>RAKSHITA.EXE</span>
          </div>

          <button
            onClick={onClose}
            style={{
              background: '#FF4500',
              border: '2px solid #111111',
              color: '#ffffff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '4px',
              boxShadow: '2px 2px 0px #111111'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Output Body */}
        <div
          style={{
            flex: 1,
            padding: '20px',
            overflowY: 'auto',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.88rem',
            lineHeight: 1.6,
            background: '#ffffff',
            color: '#111111'
          }}
        >
          {history.map((item, idx) => (
            <div
              key={idx}
              style={{
                marginBottom: '12px',
                fontWeight: 600,
                color: item.type === 'user'
                  ? 'var(--accent-emerald)'
                  : item.type === 'error'
                  ? '#FF4500'
                  : item.type === 'system'
                  ? 'var(--accent-cyan)'
                  : '#111111'
              }}
            >
              {item.text}
            </div>
          ))}
          <div ref={endRef} />
        </div>

        {/* Input Form */}
        <form
          onSubmit={handleCommandSubmit}
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '12px 16px',
            background: '#F3F0E6',
            borderTop: '4px solid #111111'
          }}
        >
          <span style={{ color: '#111111', fontWeight: 900, marginRight: '10px', fontFamily: 'var(--font-mono)' }}>
            C:\> 
          </span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help', 'skills', 'projects', 'hire'..."
            autoFocus
            style={{
              flex: 1,
              background: 'none',
              border: 'none',
              outline: 'none',
              color: '#111111',
              fontFamily: 'var(--font-mono)',
              fontSize: '1rem',
              fontWeight: 800
            }}
          />
          <button
            type="submit"
            style={{
              background: '#0055FF',
              border: '2px solid #111111',
              color: '#ffffff',
              padding: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              boxShadow: '2px 2px 0px #111111'
            }}
          >
            <CornerDownLeft size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}
