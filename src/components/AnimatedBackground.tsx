
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
      {/* Base dark gradient */}
      <div className="absolute inset-0 bg-[#050511]" />

      {/* Animated gradient orbs */}
      <div
        className={`absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full transition-opacity duration-[2000ms] ${mounted ? 'opacity-100' : 'opacity-0'}`}
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)',
          animation: 'drift1 25s ease-in-out infinite',
        }}
      />
      <div
        className={`absolute top-[30%] right-[-15%] w-[700px] h-[700px] rounded-full transition-opacity duration-[2000ms] ${mounted ? 'opacity-100' : 'opacity-0'}`}
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
          animation: 'drift2 30s ease-in-out infinite',
        }}
      />
      <div
        className={`absolute bottom-[-20%] left-[20%] w-[500px] h-[500px] rounded-full transition-opacity duration-[2000ms] ${mounted ? 'opacity-100' : 'opacity-0'}`}
        style={{
          background: 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)',
          animation: 'drift3 20s ease-in-out infinite',
        }}
      />

      {/* Subtle noise/grain overlay for depth */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      {/* CSS Keyframes */}
      <style>{`
        @keyframes drift1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(80px, 40px) scale(1.1); }
          50% { transform: translate(40px, 80px) scale(0.95); }
          75% { transform: translate(-30px, 50px) scale(1.05); }
        }
        @keyframes drift2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-60px, 30px) scale(1.05); }
          50% { transform: translate(-30px, -50px) scale(1.1); }
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
