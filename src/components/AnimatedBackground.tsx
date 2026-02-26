import { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Skip on mobile for performance
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Deep dark base */}
      <div className="absolute inset-0 bg-[#030014]" />

      {/* Large animated gradient orbs — more visible */}
      <div
        className={`absolute top-[-30%] left-[-20%] w-[900px] h-[900px] rounded-full transition-opacity duration-[3000ms] ${mounted ? 'opacity-100' : 'opacity-0'}`}
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.25) 0%, rgba(124,58,237,0.08) 40%, transparent 70%)',
          animation: 'drift1 20s ease-in-out infinite',
        }}
      />
      <div
        className={`absolute top-[20%] right-[-25%] w-[1000px] h-[1000px] rounded-full transition-opacity duration-[3000ms] ${mounted ? 'opacity-100' : 'opacity-0'}`}
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(59,130,246,0.06) 40%, transparent 70%)',
          animation: 'drift2 25s ease-in-out infinite',
        }}
      />
      <div
        className={`absolute bottom-[-25%] left-[10%] w-[800px] h-[800px] rounded-full transition-opacity duration-[3000ms] ${mounted ? 'opacity-100' : 'opacity-0'}`}
        style={{
          background: 'radial-gradient(circle, rgba(236,72,153,0.18) 0%, rgba(236,72,153,0.05) 40%, transparent 70%)',
          animation: 'drift3 18s ease-in-out infinite',
        }}
      />
      {/* Secondary accent orb */}
      <div
        className={`absolute top-[60%] right-[10%] w-[600px] h-[600px] rounded-full transition-opacity duration-[3000ms] ${mounted ? 'opacity-100' : 'opacity-0'}`}
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 60%)',
          animation: 'drift1 22s ease-in-out infinite reverse',
        }}
      />

      {/* Subtle grid overlay for depth */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }} />

      {/* Grain texture */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      {/* CSS Keyframes */}
      <style>{`
        @keyframes drift1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(100px, 50px) scale(1.15); }
          50% { transform: translate(50px, 100px) scale(0.9); }
          75% { transform: translate(-40px, 60px) scale(1.1); }
        }
        @keyframes drift2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-80px, 40px) scale(1.1); }
          50% { transform: translate(-40px, -60px) scale(1.15); }
          75% { transform: translate(50px, -30px) scale(0.9); }
        }
        @keyframes drift3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(60px, -50px) scale(1.15); }
          66% { transform: translate(-50px, -30px) scale(0.85); }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
