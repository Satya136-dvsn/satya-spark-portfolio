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
      {/* Interactive Subtle Aura (Mouse Follower) */}
      <div
        ref={blobRef}
        className="absolute w-[800px] h-[800px] rounded-full bg-primary/5 blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ left: '50%', top: '50%' }}
      />

      {/* Static Grid Overlay - Extremely subtle matrix grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" aria-hidden="true" />

      {/* Vignette effect from edges to focus the center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,transparent_0%,#0A0F1C_100%)]" />
      {/* Vertical Laser Trace Line */}
      <div className="absolute left-[15%] md:left-[20%] top-0 bottom-0 w-[1px] bg-accent/20 overflow-hidden">
        <div className="w-full h-[15vh] bg-gradient-to-b from-transparent via-accent to-transparent animate-laser-fall"></div>
      </div>
      <div className="absolute right-[15%] md:right-[20%] top-0 bottom-0 w-[1px] bg-accent/10 overflow-hidden hidden md:block">
        <div className="w-full h-[25vh] bg-gradient-to-b from-transparent via-accent/50 to-transparent animate-laser-fall shadow-[0_0_8px_rgba(255,45,85,0.5)]" style={{ animationDelay: '3s', animationDuration: '8s' }}></div>
      </div>

    </div>
  );
};

export default AnimatedBackground;
