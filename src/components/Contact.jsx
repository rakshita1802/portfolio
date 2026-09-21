import React, { useState } from 'react';
import { Mail, Send, MapPin, Copy, Check, Github, Linkedin, MessageCircle, Sparkles, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Contact({ playClickSound }) {
  const { personal } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleCopyEmail = () => {
    if (playClickSound) playClickSound();
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (playClickSound) playClickSound();

    // Web3Forms endpoint for Vercel deployment
    const formPayload = {
      ...formData,
      access_key: "b26ca324-0f96-4fc8-9daa-0c3a6aab4343" 
    };

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formPayload)
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status === 200) {
          // Trigger confetti celebration
          confetti({
            particleCount: 60,
            spread: 70,
            origin: { y: 0.7 }
          });
          setSubmitted(true);
          setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
          }, 5000);
        } else {
          console.log(response);
          alert("Error sending message: " + json.message);
        }
      })
      .catch(error => {
        console.error("Form submission error:", error);
        alert("Something went wrong!");
      });
  };

  return (
    <section id="contact" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="badge badge-cyan" style={{ marginBottom: '12px' }}>
            <Mail size={14} />
            <span>Get In Touch</span>
          </div>
          <h2>Let's Work Together</h2>
          <p>Have an exciting project, open position, or technical question? Feel free to drop a message!</p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}
        >
          {/* Left Info Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Quick Copy Email Card */}
            <div style={{ padding: '28px', background: '#ffffff', border: '4px solid #111111', boxShadow: '8px 8px 0px #111111' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '0',
                    background: '#ffffff',
                    border: '3px solid #111111',
                    boxShadow: '3px 3px 0px #111111',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#111111'
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 900, textTransform: 'uppercase' }}>Direct Email</h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Send an inquiry directly</p>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: '#F3F0E6',
                  padding: '12px 16px',
                  borderRadius: '0',
                  border: '3px solid #111111'
                }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: '#111111', fontWeight: 700 }}>
                  {personal.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#111111',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.8rem',
                    fontWeight: 900,
                    textTransform: 'uppercase'
                  }}
                >
                  {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Quick Copy Phone Card */}
            <div className="glass-panel" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'var(--bg-tertiary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-emerald)'
                  }}
                >
                  <Phone size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700 }}>Phone Number</h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Call or text directly</p>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'var(--bg-tertiary)',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--glass-border)'
                }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--accent-emerald)' }}>
                  {personal.phone || '7708624230'}
                </span>
                <a
                  href={`tel:${personal.phone || '7708624230'}`}
                  style={{
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--accent-emerald)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                >
                  <Phone size={14} /> Call Now
                </a>
              </div>
            </div>

            {/* Location & Status Card */}
            <div className="glass-panel" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'var(--bg-tertiary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-purple)'
                  }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700 }}>Location & Availability</h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{personal.location}</p>
                </div>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Open for full-time engineering roles, high-impact freelance projects, and AI product technical advisement.
              </p>
            </div>

            {/* Social Links Bar */}
            <div style={{ padding: '24px', background: '#ffffff', border: '4px solid #111111', boxShadow: '8px 8px 0px #111111', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                style={{ color: '#111111', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 900, textTransform: 'uppercase' }}
              >
                <Github size={20} /> GitHub
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{ color: '#111111', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 900, textTransform: 'uppercase' }}
              >
                <Linkedin size={20} /> LinkedIn
              </a>
              <a
                href={personal.whatsapp}
                target="_blank"
                rel="noreferrer"
                style={{ color: '#111111', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 900, textTransform: 'uppercase' }}
              >
                <MessageCircle size={20} /> WhatsApp
              </a>
            </div>

          </div>

          {/* Right Netlify Form */}
          <div className="glass-panel" style={{ padding: '36px' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '20px' }}>
              Send Me A Direct Message
            </h3>

            {submitted ? (
              <div
                style={{
                  background: 'rgba(52, 211, 153, 0.15)',
                  border: '1px solid rgba(52, 211, 153, 0.4)',
                  color: 'var(--accent-emerald)',
                  padding: '24px',
                  borderRadius: 'var(--radius-md)',
                  textAlign: 'center'
                }}
              >
                <Sparkles size={32} style={{ marginBottom: '10px' }} />
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '6px' }}>Message Received!</h4>
                <p style={{ fontSize: '0.9rem' }}>Thank you for reaching out. I'll get back to your email shortly!</p>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}
              >
                <input type="hidden" name="form-name" value="contact" />

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Connor"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: '#F3F0E6',
                      border: '3px solid #111111',
                      borderRadius: '0',
                      color: '#111111',
                      outline: 'none',
                      fontSize: '0.95rem',
                      fontWeight: 700
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@example.com"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: '#F3F0E6',
                      border: '3px solid #111111',
                      borderRadius: '0',
                      color: '#111111',
                      outline: 'none',
                      fontSize: '0.95rem',
                      fontWeight: 700
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Job Opportunity / Collaboration"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: '#F3F0E6',
                      border: '3px solid #111111',
                      borderRadius: '0',
                      color: '#111111',
                      outline: 'none',
                      fontSize: '0.95rem',
                      fontWeight: 700
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your role or project..."
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: '#F3F0E6',
                      border: '3px solid #111111',
                      borderRadius: '0',
                      color: '#111111',
                      outline: 'none',
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ justifyContent: 'center', marginTop: '6px' }}>
                  <Send size={18} />
                  <span>Send Message</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
