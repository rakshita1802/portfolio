import React from 'react';

export default function LinkTransition({ isTransitioning }) {
  if (!isTransitioning) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: 9999,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    >
      {/* Layer 1 */}
      <div 
        className="wave-layer wave-layer-1"
        style={{
          background: 'var(--accent-purple)'
        }}
      />
      {/* Layer 2 */}
      <div 
        className="wave-layer wave-layer-2"
        style={{
          background: 'var(--accent-cyan)'
        }}
      />
      {/* Layer 3 */}
      <div 
        className="wave-layer wave-layer-3"
        style={{
          background: 'var(--bg-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="transition-logo">
          NAVIGATING
        </div>
      </div>
      
      <style>{`
        .wave-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transform: translateX(-100%);
        }

        .wave-layer-1 {
          animation: wave-anim 1s cubic-bezier(0.77, 0, 0.175, 1) forwards;
          z-index: 1;
        }
        
        .wave-layer-2 {
          animation: wave-anim 1s cubic-bezier(0.77, 0, 0.175, 1) 0.1s forwards;
          z-index: 2;
        }

        .wave-layer-3 {
          animation: wave-anim 1s cubic-bezier(0.77, 0, 0.175, 1) 0.2s forwards;
          z-index: 3;
        }

        .transition-logo {
          color: #111111;
          font-size: 2.5rem;
          font-weight: 900;
          letter-spacing: 2px;
          opacity: 0;
          animation: logo-fade 1s cubic-bezier(0.77, 0, 0.175, 1) 0.2s forwards;
          text-transform: uppercase;
        }
        
        @keyframes wave-anim {
          0% { transform: translateX(-100%); }
          40% { transform: translateX(0); }
          60% { transform: translateX(0); }
          100% { transform: translateX(100%); }
        }

        @keyframes logo-fade {
          0% { opacity: 0; transform: scale(0.9); }
          40% { opacity: 1; transform: scale(1); }
          60% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
}
