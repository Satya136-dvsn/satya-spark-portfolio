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
    </div>
  );
};

export default AnimatedBackground;
