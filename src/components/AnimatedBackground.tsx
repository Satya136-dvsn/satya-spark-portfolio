import { useEffect, useRef, useState, useCallback } from 'react';

// ── Simplex noise (compact implementation) ──
class SimplexNoise {
  private perm: number[];
  private grad3: number[][];

  constructor(seed = Math.random()) {
    this.grad3 = [
      [1, 1, 0], [-1, 1, 0], [1, -1, 0], [-1, -1, 0],
      [1, 0, 1], [-1, 0, 1], [1, 0, -1], [-1, 0, -1],
      [0, 1, 1], [0, -1, 1], [0, 1, -1], [0, -1, -1],
    ];
    const p: number[] = [];
    for (let i = 0; i < 256; i++) p[i] = i;
    // Seed-based shuffle
    let s = seed * 256;
    for (let i = 255; i > 0; i--) {
      s = (s * 16807) % 2147483647;
      const j = Math.floor((s / 2147483647) * (i + 1));
      [p[i], p[j]] = [p[j], p[i]];
    }
    this.perm = new Array(512);
    for (let i = 0; i < 512; i++) this.perm[i] = p[i & 255];
  }

  noise2D(x: number, y: number): number {
    const F2 = 0.5 * (Math.sqrt(3) - 1);
    const G2 = (3 - Math.sqrt(3)) / 6;
    const s = (x + y) * F2;
    const i = Math.floor(x + s);
    const j = Math.floor(y + s);
    const t = (i + j) * G2;
    const X0 = i - t, Y0 = j - t;
    const x0 = x - X0, y0 = y - Y0;
    const i1 = x0 > y0 ? 1 : 0;
    const j1 = x0 > y0 ? 0 : 1;
    const x1 = x0 - i1 + G2, y1 = y0 - j1 + G2;
    const x2 = x0 - 1 + 2 * G2, y2 = y0 - 1 + 2 * G2;
    const ii = i & 255, jj = j & 255;

    let n0 = 0, n1 = 0, n2 = 0;
    let t0 = 0.5 - x0 * x0 - y0 * y0;
    if (t0 >= 0) {
      t0 *= t0;
      const gi = this.perm[ii + this.perm[jj]] % 12;
      n0 = t0 * t0 * (this.grad3[gi][0] * x0 + this.grad3[gi][1] * y0);
    }
    let t1 = 0.5 - x1 * x1 - y1 * y1;
    if (t1 >= 0) {
      t1 *= t1;
      const gi = this.perm[ii + i1 + this.perm[jj + j1]] % 12;
      n1 = t1 * t1 * (this.grad3[gi][0] * x1 + this.grad3[gi][1] * y1);
    }
    let t2 = 0.5 - x2 * x2 - y2 * y2;
    if (t2 >= 0) {
      t2 *= t2;
      const gi = this.perm[ii + 1 + this.perm[jj + 1]] % 12;
      n2 = t2 * t2 * (this.grad3[gi][0] * x2 + this.grad3[gi][1] * y2);
    }
    return 70 * (n0 + n1 + n2);
  }
}

// ── Flow field particle ──
interface FlowParticle {
  x: number;
  y: number;
  prevX: number;
  prevY: number;
  speed: number;
  hue: number;
  life: number;
  maxLife: number;
  alpha: number;
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });
  const [isMobile, setIsMobile] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = { x: -9999, y: -9999, active: false };
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setIsMobile(true);
      return;
    }

    const canvas = canvasRef.current;
    const trailCanvas = trailRef.current;
    if (!canvas || !trailCanvas) return;
    const ctx = canvas.getContext('2d');
    const trailCtx = trailCanvas.getContext('2d');
    if (!ctx || !trailCtx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const noise = new SimplexNoise(42);

    // Flow field config
    const FIELD_SCALE = 0.002;
    const PARTICLE_COUNT = 300;
    const VORTEX_RADIUS = 250;
    const VORTEX_STRENGTH = 3;

    let particles: FlowParticle[] = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      for (const c of [canvas, trailCanvas]) {
        c.width = width * dpr;
        c.height = height * dpr;
        c.style.width = `${width}px`;
        c.style.height = `${height}px`;
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      trailCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(createParticle());
      }
    };

    const createParticle = (): FlowParticle => {
      const x = Math.random() * width;
      const y = Math.random() * height;
      return {
        x, y,
        prevX: x,
        prevY: y,
        speed: 0.5 + Math.random() * 1.5,
        hue: 250 + Math.random() * 60, // purple to blue range
        life: 0,
        maxLife: 200 + Math.random() * 300,
        alpha: 0,
      };
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    let time = 0;

    const getFlowAngle = (x: number, y: number, t: number): number => {
      // Base flow from noise
      let angle = noise.noise2D(x * FIELD_SCALE, y * FIELD_SCALE + t) * Math.PI * 2;

      // Cursor vortex distortion
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      if (mouseRef.current.active) {
        const dx = x - mx;
        const dy = y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < VORTEX_RADIUS && dist > 1) {
          const influence = (1 - dist / VORTEX_RADIUS);
          const vortexAngle = Math.atan2(dy, dx) + Math.PI / 2; // perpendicular = swirl
          angle += (vortexAngle - angle) * influence * influence * VORTEX_STRENGTH;
        }
      }

      return angle;
    };

    const animate = () => {
      time += 0.003;

      // Fade trail canvas (creates the trail effect)
      trailCtx.fillStyle = 'rgba(3,0,20,0.025)';
      trailCtx.fillRect(0, 0, width, height);

      // Clear main compositing canvas
      ctx.clearRect(0, 0, width, height);

      // ── Draw base background ──
      ctx.fillStyle = '#030014';
      ctx.fillRect(0, 0, width, height);

      // ── Draw topographic contour lines ──
      drawContours(ctx, width, height, time, noise);

      // ── Cursor glow ──
      if (mouseRef.current.active) {
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;

        // Vortex glow
        const vGrad = ctx.createRadialGradient(mx, my, 0, mx, my, VORTEX_RADIUS);
        vGrad.addColorStop(0, 'rgba(139,92,246,0.1)');
        vGrad.addColorStop(0.3, 'rgba(124,58,237,0.05)');
        vGrad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = vGrad;
        ctx.fillRect(0, 0, width, height);

        // Vortex ring
        ctx.beginPath();
        ctx.arc(mx, my, VORTEX_RADIUS * 0.3, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(139,92,246,0.06)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // ── Update & draw particles on trail canvas ──
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.prevX = p.x;
        p.prevY = p.y;
        p.life++;

        // Fade in/out
        const lifeRatio = p.life / p.maxLife;
        if (lifeRatio < 0.1) {
          p.alpha = lifeRatio / 0.1;
        } else if (lifeRatio > 0.85) {
          p.alpha = (1 - lifeRatio) / 0.15;
        } else {
          p.alpha = 1;
        }

        // Get flow direction
        const angle = getFlowAngle(p.x, p.y, time);
        p.x += Math.cos(angle) * p.speed;
        p.y += Math.sin(angle) * p.speed;

        // Near-cursor speed boost + color shift
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const mouseProximity = mouseRef.current.active ? Math.max(0, 1 - dist / VORTEX_RADIUS) : 0;

        // Draw trail line on trail canvas
        const trailAlpha = p.alpha * (0.15 + mouseProximity * 0.6);
        const saturation = 70 + mouseProximity * 30;
        const lightness = 60 + mouseProximity * 25;
        trailCtx.beginPath();
        trailCtx.moveTo(p.prevX, p.prevY);
        trailCtx.lineTo(p.x, p.y);
        trailCtx.strokeStyle = `hsla(${p.hue + mouseProximity * 30}, ${saturation}%, ${lightness}%, ${trailAlpha})`;
        trailCtx.lineWidth = 1 + mouseProximity * 2;
        trailCtx.lineCap = 'round';
        trailCtx.stroke();

        // Glow dot at head
        if (mouseProximity > 0.3) {
          trailCtx.beginPath();
          trailCtx.arc(p.x, p.y, 2 + mouseProximity * 3, 0, Math.PI * 2);
          trailCtx.fillStyle = `hsla(${p.hue + 20}, 90%, 75%, ${mouseProximity * 0.5})`;
          trailCtx.fill();
        }

        // Respawn dead or OOB particles
        if (p.life >= p.maxLife || p.x < -20 || p.x > width + 20 || p.y < -20 || p.y > height + 20) {
          particles[i] = createParticle();
        }
      }

      // ── Composite: background + trails overlay ──
      ctx.globalAlpha = 1;
      ctx.drawImage(trailCanvas, 0, 0, width, height);

      // ── Subtle grid ──
      ctx.strokeStyle = 'rgba(255,255,255,0.008)';
      ctx.lineWidth = 0.5;
      const gridSize = 80;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  if (isMobile) {
    return (
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[#030014]" />
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(ellipse at 25% 25%, rgba(124,58,237,0.2) 0%, transparent 50%),
            radial-gradient(ellipse at 75% 60%, rgba(59,130,246,0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 80%, rgba(236,72,153,0.1) 0%, transparent 50%)
          `,
        }} />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      {/* Trail canvas — persistent, slowly fading */}
      <canvas
        ref={trailRef}
        className="absolute inset-0"
        style={{ width: '100%', height: '100%' }}
      />
      {/* Main compositing canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

// ── Topographic contour lines — morphing terrain map ──
function drawContours(ctx: CanvasRenderingContext2D, width: number, height: number, time: number, noise: SimplexNoise) {
  ctx.save();
  ctx.strokeStyle = 'rgba(124,58,237,0.03)';
  ctx.lineWidth = 0.8;

  const step = 30;
  const levels = 8;

  for (let level = 0; level < levels; level++) {
    const threshold = level / levels;
    ctx.beginPath();
    let hasPoints = false;

    for (let x = 0; x < width; x += step) {
      for (let y = 0; y < height; y += step) {
        const n = (noise.noise2D(x * 0.003 + time * 0.5, y * 0.003 + time * 0.3) + 1) / 2;
        if (Math.abs(n - threshold) < 0.03) {
          if (!hasPoints) {
            ctx.moveTo(x, y);
            hasPoints = true;
          } else {
            ctx.lineTo(x, y);
          }
        }
      }
    }
    if (hasPoints) ctx.stroke();
  }
  ctx.restore();
}

export default AnimatedBackground;
