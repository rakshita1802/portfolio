import React, { useEffect, useState } from 'react';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    // Aggressive chunking progress
    const steps = [0, 18, 42, 67, 89, 100];
    let stepIndex = 0;

    const progressInterval = setInterval(() => {
      if (stepIndex >= steps.length) {
        clearInterval(progressInterval);
        return;
      }

      const nextProgress = steps[stepIndex];
      setProgress(nextProgress);
      
      // Trigger camera shake effect
      setShake(true);
      setTimeout(() => setShake(false), 150); // very short violent shake

      if (nextProgress >= 100) {
        clearInterval(progressInterval);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 800); // Wait for the heavy drop exit animation
        }, 600); // Pause at 100% before dropping
      }

      stepIndex++;
    }, 450); // chunky delay between jumps

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        pointerEvents: isExiting ? 'none' : 'all',
        overflow: 'hidden',
        background: '#F3F0E6',
        backgroundImage: 'radial-gradient(#111111 1.5px, transparent 1.5px)',
        backgroundSize: '40px 40px',
        animation: 'scrollBg 2s linear infinite',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // The Heavy Drop Exit Animation
        transition: 'transform 0.6s cubic-bezier(0.77, 0, 0.175, 1)',
        transform: isExiting ? 'translateY(100vh)' : 'translateY(0)',
        borderTop: isExiting ? '20px solid #111111' : '0px solid #111111' // reveals a heavy black top edge when falling
      }}
    >
      {/* Decorative scattered squares */}
      <div style={{ position: 'absolute', top: '15%', left: '10%', width: '40px', height: '40px', background: 'var(--accent-purple)', border: '4px solid #111111', boxShadow: '4px 4px 0px #111111', animation: 'float1 4s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: '20%', right: '15%', width: '60px', height: '60px', background: 'var(--accent-cyan)', border: '4px solid #111111', boxShadow: '4px 4px 0px #111111', animation: 'float2 5s ease-in-out infinite' }} />

      <div 
        className={shake ? "shake-hard" : ""}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          padding: '0 20px'
        }}
      >
        {/* Title */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 900,
            color: '#111111',
            textTransform: 'uppercase',
            letterSpacing: '-2px',
            marginBottom: '40px',
            textAlign: 'center'
          }}
        >
          RAKSHITA // BOOT
        </div>

        {/* Massive Progress Container */}
        <div
          style={{
            width: '100%',
            maxWidth: '600px',
            height: '80px',
            border: '6px solid #111111',
            background: '#ffffff',
            position: 'relative',
            marginBottom: '20px',
            boxShadow: '12px 12px 0px #111111',
            overflow: 'hidden'
          }}
        >
          {/* Progress Fill */}
          <div
            style={{
              height: '100%',
              width: `${progress}%`,
              background: '#FF4500', // Brutalist Orange
              transition: 'width 0.1s ease-out' // fast snappy width change
            }}
          />
          
          {/* Absolute Centered Text on top of Bar */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mixBlendMode: 'difference', // Makes text readable over both orange and white
              color: '#ffffff',
              fontFamily: 'var(--font-mono)',
              fontSize: '3rem',
              fontWeight: 900
            }}
          >
            {progress}%
          </div>
        </div>
        
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '1rem',
            fontWeight: 800,
            color: '#111111',
            textTransform: 'uppercase'
          }}
        >
          {progress === 0 && "INITIALIZING PROTOCOLS..."}
          {progress === 18 && "ASSEMBLING MODULES..."}
          {progress === 42 && "CONNECTING TO DATABASE..."}
          {progress === 67 && "LOADING UI ASSETS..."}
          {progress === 89 && "FINALIZING BOOT SEQUENCE..."}
          {progress === 100 && "SYSTEM ONLINE."}
        </div>
      </div>

      <style>{`
        .shake-hard {
          animation: cameraShake 0.15s cubic-bezier(.36,.07,.19,.97) both;
        }

        @keyframes cameraShake {
          0% { transform: translate(0, 0) rotate(0deg); }
          20% { transform: translate(-8px, 6px) rotate(-1deg); }
          40% { transform: translate(6px, -8px) rotate(1deg); }
          60% { transform: translate(-6px, 4px) rotate(-1deg); }
          80% { transform: translate(4px, -4px) rotate(1deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }

        @keyframes scrollBg {
          from { background-position: 0px 0px; }
          to { background-position: -40px -40px; }
        }

        @keyframes float1 {
          0%, 100% { transform: translateY(0px) rotate(-15deg); }
          50% { transform: translateY(-20px) rotate(-10deg); }
        }

        @keyframes float2 {
          0%, 100% { transform: translateY(0px) rotate(25deg); }
          50% { transform: translateY(-25px) rotate(30deg); }
        }
      `}</style>
    </div>
  );
}
