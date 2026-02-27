import { useEffect, useRef, useState } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setIsMobile(true);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener('resize', resize);

    // Aurora ribbon configuration
    const ribbons: Ribbon[] = [];
    const ribbonCount = 5;

    interface RibbonPoint {
      x: number;
      y: number;
      vx: number;
      vy: number;
    }

    interface Ribbon {
      points: RibbonPoint[];
      color1: string;
      color2: string;
      width: number;
      speed: number;
      offset: number;
    }

    const colors = [
      { c1: 'rgba(124,58,237,', c2: 'rgba(99,102,241,' },   // purple → indigo
      { c1: 'rgba(59,130,246,', c2: 'rgba(124,58,237,' },    // blue → purple
      { c1: 'rgba(168,85,247,', c2: 'rgba(236,72,153,' },    // violet → pink
      { c1: 'rgba(99,102,241,', c2: 'rgba(59,130,246,' },    // indigo → blue
      { c1: 'rgba(236,72,153,', c2: 'rgba(168,85,247,' },    // pink → violet
    ];

    for (let i = 0; i < ribbonCount; i++) {
      const pointCount = 6;
      const points: RibbonPoint[] = [];
      const yBase = height * (0.15 + Math.random() * 0.7);

      for (let j = 0; j < pointCount; j++) {
        points.push({
          x: (width / (pointCount - 1)) * j,
          y: yBase + (Math.random() - 0.5) * height * 0.3,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.15,
        });
      }

      const colorPair = colors[i % colors.length];
      ribbons.push({
        points,
        color1: colorPair.c1,
        color2: colorPair.c2,
        width: 120 + Math.random() * 200,
        speed: 0.3 + Math.random() * 0.4,
        offset: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;

    const drawRibbon = (ribbon: Ribbon) => {
      const { points, color1, color2, width: ribbonWidth } = ribbon;

      // Update points with smooth organic motion
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        p.x += Math.sin(time * ribbon.speed + i * 0.8 + ribbon.offset) * 0.4;
        p.y += Math.cos(time * ribbon.speed * 0.7 + i * 1.2 + ribbon.offset) * 0.3;

        // Soft boundary bounce
        if (p.y < height * 0.05) p.vy += 0.02;
        if (p.y > height * 0.95) p.vy -= 0.02;
        p.y += p.vy;
        p.vy *= 0.99;
      }

      // Draw the ribbon as a filled bezier path with gradient
      ctx.save();

      // Create gradient along the ribbon
      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, color1 + '0)');
      gradient.addColorStop(0.2, color1 + '0.06)');
      gradient.addColorStop(0.5, color2 + '0.09)');
      gradient.addColorStop(0.8, color1 + '0.06)');
      gradient.addColorStop(1, color2 + '0)');

      // Top edge
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y - ribbonWidth / 2);
      for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1];
        const curr = points[i];
        const cpx = (prev.x + curr.x) / 2;
        const cpy1 = prev.y - ribbonWidth / 2;
        const cpy2 = curr.y - ribbonWidth / 2;
        ctx.quadraticCurveTo(cpx, (cpy1 + cpy2) / 2, curr.x, cpy2);
      }

      // Bottom edge (reverse)
      for (let i = points.length - 1; i >= 0; i--) {
        const curr = points[i];
        if (i === points.length - 1) {
          ctx.lineTo(curr.x, curr.y + ribbonWidth / 2);
        } else {
          const next = points[i + 1];
          const cpx = (next.x + curr.x) / 2;
          const cpy1 = next.y + ribbonWidth / 2;
          const cpy2 = curr.y + ribbonWidth / 2;
          ctx.quadraticCurveTo(cpx, (cpy1 + cpy2) / 2, curr.x, cpy2);
        }
      }

      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.filter = `blur(${ribbonWidth * 0.4}px)`;
      ctx.fill();
      ctx.filter = 'none';
      ctx.restore();
    };

    const animate = () => {
      time += 0.008;
      ctx.clearRect(0, 0, width, height);

      // Background
      ctx.fillStyle = '#030014';
      ctx.fillRect(0, 0, width, height);

      // Draw each ribbon
      for (const ribbon of ribbons) {
        drawRibbon(ribbon);
      }

      // Overlay: subtle grid
      ctx.strokeStyle = 'rgba(255,255,255,0.012)';
      ctx.lineWidth = 1;
      const gridSize = 80;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  // Mobile: static gradient fallback
  if (isMobile) {
    return (
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[#030014]" />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 30% 30%, rgba(124,58,237,0.2) 0%, transparent 50%), radial-gradient(ellipse at 70% 70%, rgba(59,130,246,0.15) 0%, transparent 50%)',
        }} />
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default AnimatedBackground;
