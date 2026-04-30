import { useEffect, useRef } from 'react';

// Tron circuit node positions for animated SVG paths
const CIRCUIT_PATHS = [
  { x1: '10%', y1: '20%', x2: '35%', y2: '20%', delay: '0s',  dur: '3s' },
  { x1: '35%', y1: '20%', x2: '35%', y2: '45%', delay: '1s',  dur: '2.5s' },
  { x1: '65%', y1: '75%', x2: '90%', y2: '75%', delay: '0.5s',dur: '3.5s' },
  { x1: '65%', y1: '55%', x2: '65%', y2: '75%', delay: '2s',  dur: '3s' },
  { x1: '20%', y1: '65%', x2: '45%', y2: '65%', delay: '1.5s',dur: '4s' },
  { x1: '55%', y1: '30%', x2: '80%', y2: '30%', delay: '3s',  dur: '2.8s' },
];

const SCAN_BEAMS = [
  { top: '15%', delay: '0s',    dur: '12s', opacity: 0.4 },
  { top: '38%', delay: '4s',    dur: '15s', opacity: 0.25 },
  { top: '62%', delay: '8s',    dur: '11s', opacity: 0.35 },
  { top: '82%', delay: '2s',    dur: '13s', opacity: 0.2  },
];

const AnimatedBackground = () => {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (blobRef.current) {
        blobRef.current.animate(
          { left: `${e.clientX}px`, top: `${e.clientY}px` },
          { duration: 5000, fill: 'forwards' }
        );
      }
    };
    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      style={{ backgroundColor: '#01060F' }}
    >
      {/* === Tight Tron Grid === */}
      <div
        className="absolute inset-0 tron-grid-bg"
        style={{ opacity: 1 }}
        aria-hidden="true"
      />

      {/* === Interactive Aura (pointer follower) === */}
      <div
        ref={blobRef}
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          left: '50%', top: '50%',
          background: 'radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* === Horizontal Scan Beams === */}
      {SCAN_BEAMS.map((beam, i) => (
        <div
          key={i}
          className="absolute left-0 right-0 h-[1px] animate-data-flow"
          style={{
            top: beam.top,
            background: `linear-gradient(90deg, transparent 0%, rgba(0,229,255,${beam.opacity}) 30%, rgba(0,229,255,${beam.opacity * 0.6}) 70%, transparent 100%)`,
            animationDelay: beam.delay,
            animationDuration: beam.dur,
            boxShadow: `0 0 6px rgba(0,229,255,${beam.opacity * 0.6})`,
          }}
        />
      ))}

      {/* === Vertical Laser Lines === */}
      <div className="absolute left-[12%] top-0 bottom-0 w-[1px] overflow-hidden"
        style={{ background: 'rgba(0,229,255,0.06)' }}>
        <div
          className="w-full animate-laser-fall"
          style={{
            height: '20vh',
            background: 'linear-gradient(to bottom, transparent, rgba(0,229,255,0.5), transparent)',
            boxShadow: '0 0 8px rgba(0,229,255,0.4)',
          }}
        />
      </div>
      <div className="absolute right-[12%] top-0 bottom-0 w-[1px] hidden md:block overflow-hidden"
        style={{ background: 'rgba(0,229,255,0.04)' }}>
        <div
          className="w-full animate-laser-fall"
          style={{
            height: '15vh',
            background: 'linear-gradient(to bottom, transparent, rgba(0,229,255,0.35), transparent)',
            animationDelay: '3.5s',
            animationDuration: '9s',
          }}
        />
      </div>

      {/* === Screen Corner Brackets === */}
      {/* Top-left */}
      <div className="absolute top-6 left-6 w-8 h-8 pointer-events-none"
        style={{ borderTop: '2px solid rgba(0,229,255,0.4)', borderLeft: '2px solid rgba(0,229,255,0.4)' }} />
      {/* Top-right */}
      <div className="absolute top-6 right-6 w-8 h-8 pointer-events-none"
        style={{ borderTop: '2px solid rgba(0,229,255,0.4)', borderRight: '2px solid rgba(0,229,255,0.4)' }} />
      {/* Bottom-left */}
      <div className="absolute bottom-6 left-6 w-8 h-8 pointer-events-none"
        style={{ borderBottom: '2px solid rgba(0,229,255,0.4)', borderLeft: '2px solid rgba(0,229,255,0.4)' }} />
      {/* Bottom-right */}
      <div className="absolute bottom-6 right-6 w-8 h-8 pointer-events-none"
        style={{ borderBottom: '2px solid rgba(0,229,255,0.4)', borderRight: '2px solid rgba(0,229,255,0.4)' }} />

      {/* === Circuit Node Dots — fixed positions === */}
      {[
        { top: '20%', left: '35%' }, { top: '45%', left: '35%' },
        { top: '75%', left: '65%' }, { top: '55%', left: '65%' },
        { top: '65%', left: '20%' }, { top: '30%', left: '80%' },
      ].map((dot, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 animate-circuit-pulse"
          style={{
            top: dot.top, left: dot.left,
            background: 'rgba(0,229,255,0.6)',
            boxShadow: '0 0 6px rgba(0,229,255,0.6)',
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}

      {/* === Radial darkening from edges (focus center) === */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(1,6,15,0.7) 100%)',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
