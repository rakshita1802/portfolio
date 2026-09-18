import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Github, Sparkles, CheckCircle2, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Projects({ playClickSound }) {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', ...new Set(PORTFOLIO_DATA.projects.map(p => p.category))];

  const filteredProjects = activeTab === 'All'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === activeTab);

  const openModal = (project) => {
    if (playClickSound) playClickSound();
    setSelectedProject(project);
  };

  const closeModal = () => {
    if (playClickSound) playClickSound();
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="badge badge-cyan" style={{ marginBottom: '12px' }}>
            <FolderGit2 size={14} />
            <span>Featured Work</span>
          </div>
          <h2>Projects & Applications</h2>
          <p>Real-world web applications, software utilities, and open source creations.</p>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '40px',
            flexWrap: 'wrap'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                if (playClickSound) playClickSound();
                setActiveTab(cat);
              }}
              style={{
                background: activeTab === cat ? '#111111' : '#ffffff',
                color: activeTab === cat ? '#ffffff' : '#111111',
                border: '3px solid #111111',
                padding: '8px 22px',
                borderRadius: '0',
                fontWeight: 900,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease-out',
                boxShadow: activeTab === cat ? '4px 4px 0px var(--accent-purple)' : '4px 4px 0px #111111',
                textTransform: 'uppercase'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '30px'
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              style={{
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.15s ease-out',
                cursor: 'pointer',
                background: '#ffffff',
                border: '4px solid #111111',
                boxShadow: '8px 8px 0px #111111',
                borderRadius: '0'
              }}
              onClick={() => openModal(project)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translate(-4px, -4px)';
                e.currentTarget.style.boxShadow = '12px 12px 0px #111111';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translate(0px, 0px)';
                e.currentTarget.style.boxShadow = '8px 8px 0px #111111';
              }}
            >
              {/* Project Image Header */}
              <div style={{ position: 'relative', height: '190px', overflow: 'hidden', background: '#111111', borderBottom: '4px solid #111111' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.85,
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.08)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    display: 'flex',
                    gap: '8px'
                  }}
                >
                  <span className="badge badge-purple" style={{ borderRadius: '0', border: '2px solid #111111', fontWeight: 900, background: 'var(--accent-purple)', color: '#111111' }}>{project.category}</span>
                  {project.featured && (
                    <span className="badge badge-emerald" style={{ borderRadius: '0', border: '2px solid #111111', fontWeight: 900, background: 'var(--accent-emerald)', color: '#ffffff' }}>
                      <Sparkles size={12} /> Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', background: '#ffffff' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '6px', color: '#111111' }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#111111', marginBottom: '12px', fontWeight: 800, textTransform: 'uppercase' }}>
                  {project.subtitle}
                </p>
                <p style={{ fontSize: '0.9rem', color: '#111111', lineHeight: 1.6, marginBottom: '20px', fontWeight: 500 }}>
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto', marginBottom: '16px' }}>
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
                        background: '#F3F0E6',
                        color: '#111111',
                        padding: '4px 8px',
                        borderRadius: '0',
                        border: '2px solid #111111',
                        fontWeight: 700
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Card Action Bar */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '16px',
                    borderTop: '3px solid #111111',
                    fontSize: '0.85rem'
                  }}
                >
                  <span style={{ color: '#111111', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>
                    {project.stats}
                  </span>

                  <div style={{ display: 'flex', gap: '12px' }} onClick={(e) => e.stopPropagation()}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: '#111111', textDecoration: 'none' }}
                      title="GitHub Repository"
                    >
                      <Github size={22} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: '#111111', textDecoration: 'none' }}
                      title="Live Preview"
                    >
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.75)',
              backdropFilter: 'blur(8px)',
              zIndex: 200,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px'
            }}
            onClick={closeModal}
          >
            <div
              style={{
                maxWidth: '650px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                padding: '32px',
                position: 'relative',
                background: '#ffffff',
                border: '6px solid #111111',
                boxShadow: '12px 12px 0px #111111',
                borderRadius: '0'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: '#ffffff',
                  color: '#111111',
                  border: '3px solid #111111',
                  borderRadius: '0',
                  boxShadow: '3px 3px 0px #111111',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={20} style={{ fontWeight: 900 }} />
              </button>

              <span className="badge badge-purple" style={{ marginBottom: '12px', borderRadius: '0', border: '2px solid #111111', background: 'var(--accent-purple)', color: '#111111', fontWeight: 900 }}>
                {selectedProject.category}
              </span>
              
              <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '8px', color: '#111111' }}>
                {selectedProject.title}
              </h2>
              <p style={{ color: '#111111', fontWeight: 800, marginBottom: '20px', textTransform: 'uppercase' }}>
                {selectedProject.subtitle}
              </p>

              <p style={{ color: '#111111', lineHeight: 1.7, marginBottom: '24px', fontWeight: 500 }}>
                {selectedProject.description}
              </p>

              <h4 style={{ fontSize: '1.1rem', fontWeight: 900, marginBottom: '12px', color: '#111111' }}>
                Key Technical Highlights:
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                {selectedProject.highlights.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', color: '#111111', fontWeight: 600 }}>
                    <CheckCircle2 size={18} style={{ color: '#111111', flexShrink: 0, marginTop: '2px' }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '24px' }}>
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  <Github size={16} />
                  <span>GitHub Code</span>
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
