import { useEffect, useRef, useState, useCallback } from 'react';

// ── Smooth Simplex Noise ──
class Noise {
  private p: number[];
  private G3 = [
    [1, 1, 0], [-1, 1, 0], [1, -1, 0], [-1, -1, 0],
    [1, 0, 1], [-1, 0, 1], [1, 0, -1], [-1, 0, -1],
    [0, 1, 1], [0, -1, 1], [0, 1, -1], [0, -1, -1],
  ];
  constructor() {
    const p: number[] = [];
    for (let i = 0; i < 256; i++) p[i] = i;
    for (let i = 255; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [p[i], p[j]] = [p[j], p[i]];
    }
    this.p = [...p, ...p];
  }
  noise(x: number, y: number): number {
    const F = 0.5 * (Math.sqrt(3) - 1);
    const G = (3 - Math.sqrt(3)) / 6;
    const s = (x + y) * F;
    const i = Math.floor(x + s), j = Math.floor(y + s);
    const t = (i + j) * G;
    const x0 = x - (i - t), y0 = y - (j - t);
    const [i1, j1] = x0 > y0 ? [1, 0] : [0, 1];
    const x1 = x0 - i1 + G, y1 = y0 - j1 + G;
    const x2 = x0 - 1 + 2 * G, y2 = y0 - 1 + 2 * G;
    const ii = i & 255, jj = j & 255;
    const dot = (g: number[], a: number, b: number) => g[0] * a + g[1] * b;
    let n = 0;
    let t0 = 0.5 - x0 * x0 - y0 * y0;
    if (t0 > 0) { t0 *= t0; n += t0 * t0 * dot(this.G3[this.p[ii + this.p[jj]] % 12], x0, y0); }
    let t1 = 0.5 - x1 * x1 - y1 * y1;
    if (t1 > 0) { t1 *= t1; n += t1 * t1 * dot(this.G3[this.p[ii + i1 + this.p[jj + j1]] % 12], x1, y1); }
    let t2 = 0.5 - x2 * x2 - y2 * y2;
    if (t2 > 0) { t2 *= t2; n += t2 * t2 * dot(this.G3[this.p[ii + 1 + this.p[jj + 1]] % 12], x2, y2); }
    return 70 * n;
  }
}

interface Star {
  x: number;
  y: number;
  z: number; // parallax depth
  radius: number;
  pulse: number;
  pulseSpeed: number;
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 });
  const [isMobile, setIsMobile] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current.targetX = e.clientX / window.innerWidth;
    mouseRef.current.targetY = e.clientY / window.innerHeight;
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setIsMobile(true);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const noise = new Noise();

    // Stars for constellation layer
    let stars: Star[] = [];
    const STAR_COUNT = 120;
    const CONNECT_DIST = 120;

    const initStars = () => {
      stars = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          z: 0.2 + Math.random() * 0.8, // depth
          radius: 0.8 + Math.random() * 1.5,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.01 + Math.random() * 0.02,
        });
      }
    };

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initStars();
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;

    // Blob centers (normalized 0-1)
    const blobs = [
      { cx: 0.2, cy: 0.25, r: 0.32, color: [124, 58, 237], speed: 0.4 },   // purple
      { cx: 0.75, cy: 0.3, r: 0.28, color: [59, 130, 246], speed: 0.3 },    // blue
      { cx: 0.5, cy: 0.72, r: 0.28, color: [139, 92, 246], speed: 0.35 },   // violet
      { cx: 0.3, cy: 0.65, r: 0.22, color: [99, 102, 241], speed: 0.45 },   // indigo
    ];

    const animate = () => {
      time += 0.004;

      // Smooth mouse interpolation
      const m = mouseRef.current;
      m.x += (m.targetX - m.x) * 0.05;
      m.y += (m.targetY - m.y) * 0.05;

      // ── Layer 1: Black base ──
      ctx.fillStyle = '#030014';
      ctx.fillRect(0, 0, w, h);

      // ── Layer 2: Morphing gradient blobs with mouse parallax ──
      for (const blob of blobs) {
        // Animate center with noise
        const bx = (blob.cx + noise.noise(time * blob.speed, blob.cy * 10) * 0.08) * w;
        const by = (blob.cy + noise.noise(blob.cx * 10, time * blob.speed) * 0.08) * h;

        // Mouse parallax offset
        const parallaxX = (m.x - 0.5) * w * 0.06;
        const parallaxY = (m.y - 0.5) * h * 0.06;

        const finalX = bx + parallaxX;
        const finalY = by + parallaxY;
        const r = blob.r * Math.min(w, h);

        // Morphing radius with noise
        const morphR = r * (1 + noise.noise(time * 0.8 + blob.cx * 5, blob.cy * 5) * 0.2);

        const grad = ctx.createRadialGradient(finalX, finalY, 0, finalX, finalY, morphR);
        const [cr, cg, cb] = blob.color;
        grad.addColorStop(0, `rgba(${cr},${cg},${cb},0.12)`);
        grad.addColorStop(0.4, `rgba(${cr},${cg},${cb},0.04)`);
        grad.addColorStop(1, `rgba(${cr},${cg},${cb},0)`);

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      }

      // ── Layer 3: Mouse spotlight ──
      const spotX = m.x * w;
      const spotY = m.y * h;
      const spotGrad = ctx.createRadialGradient(spotX, spotY, 0, spotX, spotY, 300);
      spotGrad.addColorStop(0, 'rgba(139,92,246,0.08)');
      spotGrad.addColorStop(0.5, 'rgba(124,58,237,0.03)');
      spotGrad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = spotGrad;
      ctx.fillRect(0, 0, w, h);

      // ── Layer 4: Constellation with parallax ──
      const mouseWX = m.x * w;
      const mouseWY = m.y * h;

      // Update & draw connections
      ctx.lineCap = 'round';
      for (let i = 0; i < stars.length; i++) {
        const a = stars[i];
        a.pulse += a.pulseSpeed;

        // Parallax position for this star based on depth
        const ax = a.x + (m.x - 0.5) * 40 * a.z;
        const ay = a.y + (m.y - 0.5) * 40 * a.z;

        for (let j = i + 1; j < stars.length; j++) {
          const b = stars[j];
          const bx = b.x + (m.x - 0.5) * 40 * b.z;
          const by = b.y + (m.y - 0.5) * 40 * b.z;

          const dx = ax - bx;
          const dy = ay - by;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECT_DIST) {
            // Connection line — glow near mouse
            const midX = (ax + bx) / 2;
            const midY = (ay + by) / 2;
            const mouseDist = Math.sqrt((mouseWX - midX) ** 2 + (mouseWY - midY) ** 2);
            const mouseGlow = Math.max(0, 1 - mouseDist / 250);
            const alpha = (1 - dist / CONNECT_DIST) * (0.04 + mouseGlow * 0.2);

            ctx.beginPath();
            ctx.moveTo(ax, ay);
            ctx.lineTo(bx, by);
            ctx.strokeStyle = `rgba(139,92,246,${alpha})`;
            ctx.lineWidth = 0.5 + mouseGlow * 1.5;
            ctx.stroke();
          }
        }
      }

      // Draw star dots
      for (const star of stars) {
        const sx = star.x + (m.x - 0.5) * 40 * star.z;
        const sy = star.y + (m.y - 0.5) * 40 * star.z;

        // Mouse proximity
        const dx = mouseWX - sx;
        const dy = mouseWY - sy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const mouseProx = Math.max(0, 1 - dist / 200);

        // Pulse
        const pulse = Math.sin(star.pulse) * 0.3 + 0.7;
        const r = star.radius * pulse + mouseProx * 2;
        const alpha = (0.3 + mouseProx * 0.7) * pulse;

        // Glow
        if (mouseProx > 0.1) {
          const glowR = r * 5;
          const glow = ctx.createRadialGradient(sx, sy, 0, sx, sy, glowR);
          glow.addColorStop(0, `rgba(139,92,246,${mouseProx * 0.3})`);
          glow.addColorStop(1, 'rgba(139,92,246,0)');
          ctx.beginPath();
          ctx.arc(sx, sy, glowR, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
        }

        // Core
        ctx.beginPath();
        ctx.arc(sx, sy, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,180,255,${alpha})`;
        ctx.fill();
      }

      // ── Layer 5: Subtle dot grid ──
      const gridStep = 60;
      const dotR = 0.6;
      for (let gx = gridStep; gx < w; gx += gridStep) {
        for (let gy = gridStep; gy < h; gy += gridStep) {
          const dx = mouseWX - gx;
          const dy = mouseWY - gy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const proximity = Math.max(0, 1 - dist / 200);
          const dotAlpha = 0.03 + proximity * 0.12;

          ctx.beginPath();
          ctx.arc(gx, gy, dotR + proximity * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(139,92,246,${dotAlpha})`;
          ctx.fill();
        }
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  if (isMobile) {
    return (
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[#030014]" />
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(ellipse at 20% 25%, rgba(124,58,237,0.18) 0%, transparent 50%),
            radial-gradient(ellipse at 75% 30%, rgba(59,130,246,0.14) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 75%, rgba(168,85,247,0.1) 0%, transparent 50%)
          `,
        }} />
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default AnimatedBackground;
