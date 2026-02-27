import { useEffect, useRef, useState, useCallback } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  radius: number;
  alpha: number;
  twinkleSpeed: number;
  twinkleDir: number;
}

interface ConstellationNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

interface ShootingStar {
  x: number;
  y: number;
  len: number;
  speed: number;
  angle: number;
  active: boolean;
  opacity: number;
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5, isHovering: false });
  const [isMobile, setIsMobile] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current.targetX = e.clientX / window.innerWidth;
    mouseRef.current.targetY = e.clientY / window.innerHeight;
    mouseRef.current.isHovering = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current.isHovering = false;
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

    // Arrays
    let bgStars: Star[] = [];
    let nodes: ConstellationNode[] = [];
    let shootingStar: ShootingStar = { x: 0, y: 0, len: 0, speed: 0, angle: 0, active: false, opacity: 0 };

    const INIT_BG_STARS = 400;
    const INIT_NODES = 80;
    const CONNECT_DIST = 150;

    const initCanvas = () => {
      bgStars = [];
      for (let i = 0; i < INIT_BG_STARS; i++) {
        bgStars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          z: Math.random() * 0.5 + 0.1, // Depth for parallax
          radius: Math.random() * 1.2,
          alpha: Math.random(),
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinkleDir: Math.random() > 0.5 ? 1 : -1,
        });
      }

      nodes = [];
      for (let i = 0; i < INIT_NODES; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.5 + 1,
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
      initCanvas();
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
      // Smooth mouse interpolation
      const m = mouseRef.current;
      m.x += (m.targetX - m.x) * 0.05;
      m.y += (m.targetY - m.y) * 0.05;

      const mouseWX = m.x * w;
      const mouseWY = m.y * h;

      // ── Layer 1: Deep Space Background ──
      const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
      bgGrad.addColorStop(0, '#040914'); // Very dark blue/black
      bgGrad.addColorStop(1, '#0b0f19'); // Slightly lighter night sky
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      // Mouse Spotlight
      if (m.isHovering) {
        const spotGrad = ctx.createRadialGradient(mouseWX, mouseWY, 0, mouseWX, mouseWY, 400);
        spotGrad.addColorStop(0, 'rgba(30, 58, 138, 0.15)'); // Soft dark blue glow
        spotGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = spotGrad;
        ctx.fillRect(0, 0, w, h);
      }

      // ── Layer 2: Background Stars (Twinkling & Parallax) ──
      for (const star of bgStars) {
        // Twinkle
        star.alpha += star.twinkleSpeed * star.twinkleDir;
        if (star.alpha >= 1) {
          star.alpha = 1;
          star.twinkleDir = -1;
        } else if (star.alpha <= 0.1) {
          star.alpha = 0.1;
          star.twinkleDir = 1;
        }

        // Parallax
        const px = star.x + (m.x - 0.5) * 50 * star.z;
        const py = star.y + (m.y - 0.5) * 50 * star.z;

        // Wrap around
        let drawX = px;
        let drawY = py;
        if (drawX < 0) drawX += w;
        if (drawX > w) drawX -= w;
        if (drawY < 0) drawY += h;
        if (drawY > h) drawY -= h;

        ctx.beginPath();
        ctx.arc(drawX, drawY, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha * 0.8})`;
        ctx.fill();
      }

      // ── Layer 3: Shooting Star ──
      if (!shootingStar.active && Math.random() < 0.005) { // 0.5% chance per frame
        shootingStar.active = true;
        shootingStar.x = Math.random() * w;
        shootingStar.y = 0;
        shootingStar.len = Math.random() * 80 + 40;
        shootingStar.speed = Math.random() * 15 + 10;
        shootingStar.angle = Math.PI / 4 + (Math.random() * 0.2 - 0.1); // Roughly diagonal down-right
        shootingStar.opacity = 1;
      }

      if (shootingStar.active) {
        shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
        shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
        shootingStar.opacity -= 0.015;

        if (shootingStar.opacity <= 0 || shootingStar.x > w || shootingStar.y > h) {
          shootingStar.active = false;
        } else {
          const tailX = shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.len;
          const tailY = shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.len;

          const shootGrad = ctx.createLinearGradient(shootingStar.x, shootingStar.y, tailX, tailY);
          shootGrad.addColorStop(0, `rgba(255, 255, 255, ${shootingStar.opacity})`);
          shootGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

          ctx.beginPath();
          ctx.moveTo(shootingStar.x, shootingStar.y);
          ctx.lineTo(tailX, tailY);
          ctx.strokeStyle = shootGrad;
          ctx.lineWidth = 1.5;
          ctx.lineCap = 'round';
          ctx.stroke();

          // Glow head
          ctx.beginPath();
          ctx.arc(shootingStar.x, shootingStar.y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${shootingStar.opacity})`;
          ctx.fill();
        }
      }

      // ── Layer 4: Interactive Constellation Nodes ──
      ctx.lineCap = 'round';

      // Update nodes
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off walls
        if (node.x <= 0 || node.x >= w) node.vx *= -1;
        if (node.y <= 0 || node.y >= h) node.vy *= -1;
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];

        // Connect nodes to mouse if close enough
        if (m.isHovering) {
          const mdx = a.x - mouseWX;
          const mdy = a.y - mouseWY;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mDist < CONNECT_DIST + 50) {
            const mAlpha = 1 - mDist / (CONNECT_DIST + 50);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(mouseWX, mouseWY);
            ctx.strokeStyle = `rgba(147, 197, 253, ${mAlpha * 0.5})`; // Light blue glow to mouse
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECT_DIST) {
            // Base connection
            let alpha = (1 - dist / CONNECT_DIST) * 0.2;
            let strokeColor = `rgba(255, 255, 255, ${alpha})`;
            let lineWidth = 0.5;

            // Highlight connections near mouse
            if (m.isHovering) {
              const midX = (a.x + b.x) / 2;
              const midY = (a.y + b.y) / 2;
              const mouseDist = Math.sqrt((mouseWX - midX) ** 2 + (mouseWY - midY) ** 2);

              if (mouseDist < 200) {
                const mouseGlow = 1 - mouseDist / 200;
                alpha += mouseGlow * 0.5;
                strokeColor = `rgba(167, 139, 250, ${alpha})`; // Purple/blue tint for active constellations
                lineWidth = 0.5 + mouseGlow * 1.5;
              }
            }

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = lineWidth;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        const dx = mouseWX - node.x;
        const dy = mouseWY - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const isActive = m.isHovering && dist < 200;

        const nodeAlpha = isActive ? 1 : 0.6;
        const nodeRadius = isActive ? node.radius * 2 : node.radius;

        // Glow when active
        if (isActive) {
          const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, nodeRadius * 4);
          glow.addColorStop(0, 'rgba(167, 139, 250, 0.4)');
          glow.addColorStop(1, 'rgba(167, 139, 250, 0)');
          ctx.beginPath();
          ctx.arc(node.x, node.y, nodeRadius * 4, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${nodeAlpha})`;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  if (isMobile) {
    return (
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[#040914]" />
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(ellipse at 20% 25%, rgba(30,58,138,0.2) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, rgba(88,28,135,0.15) 0%, transparent 50%)
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
