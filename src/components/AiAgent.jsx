import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Terminal, Loader2 } from 'lucide-react';

export default function AiAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'model', content: "SYSTEM ONLINE. I'm Rakshita's AI Assistant. What would you like to know about her work?" }
  ]);
  
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      // We pass the history to maintain context
      const history = messages.slice(1).map(msg => ({
        role: msg.role === 'model' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: userMessage,
          history: history
        })
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessages(prev => [...prev, { role: 'model', content: data.reply }]);
      } else {
        setMessages(prev => [...prev, { role: 'model', content: "ERROR: " + (data.error || "Communication failure.") }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', content: "ERROR: Network failure. Ensure Gemini API key is set in Vercel." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '60px',
          height: '60px',
          borderRadius: '0',
          background: isOpen ? '#FF4500' : '#0055FF',
          border: '4px solid #111111',
          boxShadow: '6px 6px 0px #111111',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          cursor: 'pointer',
          zIndex: 9999,
          transition: 'transform 0.1s ease',
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'translate(-2px, -2px)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'translate(0, 0)'}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '110px',
            right: '30px',
            width: '350px',
            height: '500px',
            background: '#F3F0E6',
            border: '4px solid #111111',
            boxShadow: '12px 12px 0px #111111',
            zIndex: 9998,
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'var(--font-mono)'
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '16px',
              background: '#111111',
              color: '#0055FF',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              borderBottom: '4px solid #111111'
            }}
          >
            <Terminal size={20} color="#FFD700" />
            <span style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: '#FFFFFF' }}>
              RAKSHITA_AI
            </span>
          </div>

          {/* Messages Area */}
          <div
            style={{
              flex: 1,
              padding: '16px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              background: '#FFFFFF'
            }}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                  padding: '10px 14px',
                  background: msg.role === 'user' ? '#0055FF' : '#F3F0E6',
                  color: msg.role === 'user' ? '#FFFFFF' : '#111111',
                  border: '3px solid #111111',
                  fontSize: '0.9rem',
                  lineHeight: '1.4',
                  boxShadow: msg.role === 'user' ? '-3px 3px 0px #111111' : '3px 3px 0px #111111',
                }}
              >
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <div style={{ alignSelf: 'flex-start', padding: '10px' }}>
                <Loader2 size={20} className="spin" color="#111111" style={{ animation: 'spin 1s linear infinite' }} />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form
            onSubmit={handleSubmit}
            style={{
              padding: '12px',
              background: '#E8E4D9',
              borderTop: '4px solid #111111',
              display: 'flex',
              gap: '8px'
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Rakshita..."
              style={{
                flex: 1,
                padding: '10px',
                background: '#FFFFFF',
                border: '3px solid #111111',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              style={{
                padding: '10px 16px',
                background: '#FFD700',
                border: '3px solid #111111',
                cursor: (isLoading || !input.trim()) ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#111111'
              }}
            >
              <Send size={18} />
            </button>
          </form>
          
          <style>{`
            @keyframes spin { 100% { transform: rotate(360deg); } }
          `}</style>
        </div>
      )}
    </>
  );
}
