import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      // Use the Web Animations API for a smooth trailing effect without React re-renders
      if (blobRef.current) {
        blobRef.current.animate({
          left: `${e.clientX}px`,
          top: `${e.clientY}px`
        }, { duration: 4000, fill: "forwards" });
      }
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#050511]">
      {/* Interactive Glowing Aura (Mouse Follower) */}
      <div
        ref={blobRef}
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-transparent blur-[80px] -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
        style={{ left: '50%', top: '50%' }}
      />

      {/* Static Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" aria-hidden="true" />

      {/* Sweeping Scanner Line (Tron/Radar Effect) */}
      <div className="absolute left-0 right-0 h-1 bg-cyan-400/20 shadow-[0_0_20px_rgba(0,240,255,0.8)] animate-scanline mix-blend-screen" />

      {/* Floating Data Packets */}
      <div className="absolute w-2 h-2 rounded-full bg-cyan-400 blur-[2px] animate-float-particle-1" style={{ top: '20%', left: '15%' }} />
      <div className="absolute w-1 h-1 rounded-full bg-purple-400 blur-[1px] animate-float-particle-2" style={{ top: '60%', right: '25%' }} />
      <div className="absolute w-2 h-2 rounded-full bg-blue-400 blur-[2px] animate-float-particle-3" style={{ bottom: '15%', left: '40%' }} />

      {/* Vignette effect from edges to focus the center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,transparent_0%,#050511_120%)]" />

      <style>{`
        @keyframes scanline {
          0% { transform: translateY(-10vh) translateZ(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(110vh) translateZ(0); opacity: 0; }
        }
        .animate-scanline {
          animation: scanline 8s linear infinite;
          will-change: transform, opacity;
        }
        
        @keyframes customFloat1 {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.3; }
          50% { transform: translate3d(30px, -50px, 0) scale(1.5); opacity: 0.8; }
        }
        @keyframes customFloat2 {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.2; }
          50% { transform: translate3d(-40px, -30px, 0) scale(1.2); opacity: 0.6; }
        }
        @keyframes customFloat3 {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.4; }
          50% { transform: translate3d(20px, -60px, 0) scale(1.8); opacity: 0.9; }
        }
        
        .animate-float-particle-1 { animation: customFloat1 15s ease-in-out infinite; will-change: transform, opacity; }
        .animate-float-particle-2 { animation: customFloat2 20s ease-in-out infinite; will-change: transform, opacity; }
        .animate-float-particle-3 { animation: customFloat3 12s ease-in-out infinite; will-change: transform, opacity; }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
