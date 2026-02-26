import { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Skip on mobile for performance
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return (
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[#030014]" />
        <div className="absolute top-0 left-0 w-full h-[60%]" style={{
          background: 'radial-gradient(ellipse at 30% 20%, rgba(124,58,237,0.2) 0%, transparent 60%)',
        }} />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Deep dark base */}
      <div className="absolute inset-0 bg-[#030014]" />

      {/* Primary gradient orbs — VIVID */}
      <div
        className={`absolute transition-opacity duration-[3000ms] ${mounted ? 'opacity-100' : 'opacity-0'}`}
        style={{
          top: '-15%',
          left: '-10%',
          width: '60vw',
          height: '60vw',
          maxWidth: '1000px',
          maxHeight: '1000px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.35) 0%, rgba(124,58,237,0.1) 35%, transparent 65%)',
          animation: 'drift1 20s ease-in-out infinite',
        }}
      />
      <div
        className={`absolute transition-opacity duration-[3000ms] ${mounted ? 'opacity-100' : 'opacity-0'}`}
        style={{
          top: '10%',
          right: '-15%',
          width: '55vw',
          height: '55vw',
          maxWidth: '900px',
          maxHeight: '900px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(59,130,246,0.08) 35%, transparent 65%)',
          animation: 'drift2 25s ease-in-out infinite',
        }}
      />
      <div
        className={`absolute transition-opacity duration-[3000ms] ${mounted ? 'opacity-100' : 'opacity-0'}`}
        style={{
          bottom: '-20%',
          left: '15%',
          width: '50vw',
          height: '50vw',
          maxWidth: '800px',
          maxHeight: '800px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(236,72,153,0.25) 0%, rgba(236,72,153,0.06) 35%, transparent 65%)',
          animation: 'drift3 18s ease-in-out infinite',
        }}
      />
      {/* Secondary center glow — ties sections together */}
      <div
        className={`absolute transition-opacity duration-[3000ms] ${mounted ? 'opacity-100' : 'opacity-0'}`}
        style={{
          top: '40%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '70vw',
          height: '50vw',
          maxWidth: '1200px',
          maxHeight: '800px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(168,85,247,0.12) 0%, transparent 60%)',
          animation: 'drift1 30s ease-in-out infinite reverse',
        }}
      />
      {/* Bottom-right accent */}
      <div
        className={`absolute transition-opacity duration-[3000ms] ${mounted ? 'opacity-100' : 'opacity-0'}`}
        style={{
          bottom: '10%',
          right: '-10%',
          width: '40vw',
          height: '40vw',
          maxWidth: '700px',
          maxHeight: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 55%)',
          animation: 'drift2 22s ease-in-out infinite reverse',
        }}
      />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      {/* Grain texture for depth */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      {/* Keyframes */}
      <style>{`
        @keyframes drift1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(80px, 40px) scale(1.1); }
          50% { transform: translate(30px, 80px) scale(0.95); }
          75% { transform: translate(-40px, 50px) scale(1.05); }
        }
        @keyframes drift2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-60px, 30px) scale(1.08); }
          50% { transform: translate(-30px, -50px) scale(1.12); }
          75% { transform: translate(40px, -20px) scale(0.95); }
        }
        @keyframes drift3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(50px, -40px) scale(1.1); }
          66% { transform: translate(-40px, -20px) scale(0.9); }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
