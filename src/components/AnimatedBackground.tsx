import { useEffect, useRef, useState, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const particlesRef = useRef<Particle[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = { x: -1000, y: -1000 };
  }, []);

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
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles();
    };

    // Particle system
    const PARTICLE_COUNT = 80;
    const CONNECTION_DISTANCE = 150;
    const MOUSE_RADIUS = 200;
    const MOUSE_FORCE = 0.08;

    const particleColors = [
      'rgba(124,58,237,',   // purple
      'rgba(99,102,241,',   // indigo
      'rgba(59,130,246,',   // blue
      'rgba(168,85,247,',   // violet
      'rgba(139,92,246,',   // purple-400
    ];

    const initParticles = () => {
      const particles: Particle[] = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        particles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: 1.5 + Math.random() * 2,
          color: particleColors[Math.floor(Math.random() * particleColors.length)],
          alpha: 0.3 + Math.random() * 0.5,
        });
      }
      particlesRef.current = particles;
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    let time = 0;

    const animate = () => {
      time += 0.005;
      ctx.clearRect(0, 0, width, height);

      // ── Layer 1: Deep dark base ──
      ctx.fillStyle = '#030014';
      ctx.fillRect(0, 0, width, height);

      // ── Layer 2: Aurora glow ribbons (subtle) ──
      drawAurora(ctx, width, height, time);

      // ── Layer 3: Mouse-following spotlight ──
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      if (mx > 0 && my > 0) {
        const spotGrad = ctx.createRadialGradient(mx, my, 0, mx, my, 350);
        spotGrad.addColorStop(0, 'rgba(124,58,237,0.08)');
        spotGrad.addColorStop(0.4, 'rgba(99,102,241,0.04)');
        spotGrad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = spotGrad;
        ctx.fillRect(0, 0, width, height);
      }

      // ── Layer 4: Interactive particles & connections ──
      const particles = particlesRef.current;

      // Update particles
      for (const p of particles) {
        // Gentle autonomous drift
        p.x += p.vx + Math.sin(time * 2 + p.baseX * 0.01) * 0.15;
        p.y += p.vy + Math.cos(time * 2 + p.baseY * 0.01) * 0.15;

        // Mouse interaction — push away
        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS * MOUSE_FORCE;
          p.vx -= (dx / dist) * force;
          p.vy -= (dy / dist) * force;
        }

        // Gentle pull back to base position
        p.vx += (p.baseX - p.x) * 0.001;
        p.vy += (p.baseY - p.y) * 0.001;

        // Friction
        p.vx *= 0.98;
        p.vy *= 0.98;

        // Wrap around edges
        if (p.x < -50) p.x = width + 50;
        if (p.x > width + 50) p.x = -50;
        if (p.y < -50) p.y = height + 50;
        if (p.y > height + 50) p.y = -50;
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DISTANCE) {
            // Lines glow brighter near mouse
            const midX = (a.x + b.x) / 2;
            const midY = (a.y + b.y) / 2;
            const mouseDist = Math.sqrt((mx - midX) ** 2 + (my - midY) ** 2);
            const mouseInfluence = Math.max(0, 1 - mouseDist / 300);
            const baseAlpha = (1 - dist / CONNECTION_DISTANCE) * 0.08;
            const alpha = baseAlpha + mouseInfluence * 0.15;

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(124,58,237,${alpha})`;
            ctx.lineWidth = 0.5 + mouseInfluence * 1;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        // Glow when near mouse
        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const mouseProximity = Math.max(0, 1 - dist / MOUSE_RADIUS);

        // Outer glow
        if (mouseProximity > 0) {
          const glowRadius = p.radius * (3 + mouseProximity * 6);
          const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowRadius);
          glow.addColorStop(0, p.color + (0.15 + mouseProximity * 0.3) + ')');
          glow.addColorStop(1, p.color + '0)');
          ctx.beginPath();
          ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
        }

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius + mouseProximity * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = p.color + (p.alpha + mouseProximity * 0.5) + ')';
        ctx.fill();
      }

      // ── Layer 5: Very subtle grid ──
      ctx.strokeStyle = 'rgba(255,255,255,0.012)';
      ctx.lineWidth = 0.5;
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
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

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
      className="fixed inset-0 z-0"
      aria-hidden="true"
      style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
    />
  );
};

// Aurora glow helper — soft flowing ribbons behind particles
function drawAurora(ctx: CanvasRenderingContext2D, width: number, height: number, time: number) {
  const ribbons = [
    { yBase: 0.25, color: 'rgba(124,58,237,', opacity: 0.07, speed: 0.8, amplitude: 0.15 },
    { yBase: 0.5, color: 'rgba(59,130,246,', opacity: 0.05, speed: 0.6, amplitude: 0.12 },
    { yBase: 0.7, color: 'rgba(236,72,153,', opacity: 0.04, speed: 0.9, amplitude: 0.1 },
  ];

  for (const ribbon of ribbons) {
    const points = 8;
    const ribbonWidth = height * 0.25;

    ctx.save();
    ctx.beginPath();

    // Top edge
    const startY = height * ribbon.yBase;
    ctx.moveTo(-50, startY + Math.sin(time * ribbon.speed) * height * ribbon.amplitude);
    for (let i = 1; i <= points; i++) {
      const x = (width / points) * i + 50;
      const y = startY + Math.sin(time * ribbon.speed + i * 0.8) * height * ribbon.amplitude;
      const cpx = (width / points) * (i - 0.5);
      const cpy = startY + Math.sin(time * ribbon.speed + (i - 0.5) * 0.8) * height * ribbon.amplitude * 1.2;
      ctx.quadraticCurveTo(cpx, cpy, x, y);
    }

    // Bottom edge (reverse with offset)
    for (let i = points; i >= 0; i--) {
      const x = (width / points) * i - 50;
      const y = startY + ribbonWidth + Math.sin(time * ribbon.speed * 0.7 + i * 0.6) * height * ribbon.amplitude * 0.8;
      const cpx = (width / points) * (i + 0.5);
      const cpy = startY + ribbonWidth + Math.sin(time * ribbon.speed * 0.7 + (i + 0.5) * 0.6) * height * ribbon.amplitude;
      ctx.quadraticCurveTo(cpx, cpy, x, y);
    }

    ctx.closePath();

    const gradient = ctx.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(0, ribbon.color + '0)');
    gradient.addColorStop(0.3, ribbon.color + ribbon.opacity + ')');
    gradient.addColorStop(0.7, ribbon.color + ribbon.opacity + ')');
    gradient.addColorStop(1, ribbon.color + '0)');

    ctx.fillStyle = gradient;
    ctx.filter = 'blur(60px)';
    ctx.fill();
    ctx.filter = 'none';
    ctx.restore();
  }
}

export default AnimatedBackground;
