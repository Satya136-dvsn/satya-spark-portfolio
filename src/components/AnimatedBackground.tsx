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

    let scrollY = window.scrollY;

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Arrays
    let bgStars: Star[] = [];
    let constellations: {
      name: string;
      x: number;
      y: number;
      vx: number;
      vy: number;
      nodes: { offsetX: number; offsetY: number; radius: number }[];
      connections: { from: number; to: number }[];
    }[] = [];

    const shootingStar: ShootingStar = { x: 0, y: 0, len: 0, speed: 0, angle: 0, active: false, opacity: 0 };

    const INIT_BG_STARS = 1500; // Dense Milky Way
    // Scale the count based on screen width so they don't get too cramped on smaller screens
    const NUM_CONSTELLATIONS = window.innerWidth > 1400 ? 12 : 8;

    const CONST_SHAPES = [
      {
        name: "Orion",
        nodes: [{ x: -0.3, y: -0.8 }, { x: 0.3, y: -0.7 }, { x: -0.1, y: 0 }, { x: 0, y: 0.1 }, { x: 0.1, y: 0.2 }, { x: -0.4, y: 0.8 }, { x: 0.4, y: 0.7 }],
        connections: [{ from: 0, to: 1 }, { from: 0, to: 2 }, { from: 1, to: 4 }, { from: 2, to: 3 }, { from: 3, to: 4 }, { from: 2, to: 5 }, { from: 4, to: 6 }]
      },
      {
        name: "Leo",
        nodes: [{ x: 0.5, y: -0.5 }, { x: 0.8, y: -0.2 }, { x: 0.5, y: 0 }, { x: 0.1, y: -0.2 }, { x: -0.2, y: -0.4 }, { x: -0.6, y: -0.3 }, { x: -0.8, y: 0.2 }, { x: -0.4, y: 0.4 }, { x: 0.1, y: 0.3 }],
        connections: [{ from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 4 }, { from: 4, to: 0 }, { from: 2, to: 8 }, { from: 8, to: 7 }, { from: 7, to: 6 }, { from: 6, to: 5 }, { from: 5, to: 4 }]
      },
      {
        name: "Ursa Major",
        nodes: [{ x: -0.8, y: -0.2 }, { x: -0.5, y: -0.1 }, { x: -0.2, y: 0.1 }, { x: 0.1, y: 0.2 }, { x: 0.2, y: 0.6 }, { x: 0.6, y: 0.7 }, { x: 0.8, y: 0.2 }],
        connections: [{ from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 4 }, { from: 4, to: 5 }, { from: 5, to: 6 }, { from: 6, to: 3 }]
      },
      {
        name: "Cassiopeia",
        nodes: [{ x: -0.8, y: -0.6 }, { x: -0.3, y: 0.2 }, { x: 0, y: -0.2 }, { x: 0.4, y: 0.6 }, { x: 0.8, y: -0.4 }],
        connections: [{ from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 4 }]
      },
      {
        name: "Cygnus",
        nodes: [{ x: 0, y: -0.8 }, { x: 0, y: -0.3 }, { x: 0, y: 0.7 }, { x: -0.6, y: -0.1 }, { x: 0.6, y: -0.5 }],
        connections: [{ from: 0, to: 1 }, { from: 1, to: 2 }, { from: 3, to: 1 }, { from: 1, to: 4 }]
      },
      {
        name: "Scorpius",
        nodes: [{ x: 0.8, y: -0.7 }, { x: 0.5, y: -0.5 }, { x: 0.2, y: -0.4 }, { x: -0.1, y: -0.2 }, { x: -0.4, y: 0.1 }, { x: -0.6, y: 0.5 }, { x: -0.5, y: 0.8 }, { x: -0.2, y: 0.9 }, { x: 0, y: 0.7 }],
        connections: [{ from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 4 }, { from: 4, to: 5 }, { from: 5, to: 6 }, { from: 6, to: 7 }, { from: 7, to: 8 }]
      }
    ];

    const initCanvas = () => {
      bgStars = [];

      // Milky Way Generation
      for (let i = 0; i < INIT_BG_STARS; i++) {
        const isMilkyWay = Math.random() < 0.6;
        let sx, sy;
        // Make the universe a bit taller so parity scrolling works smoothly
        const univHeight = h * 1.5;

        if (isMilkyWay) {
          const t = Math.random();
          const base_x = t * w;
          const base_y = t * univHeight;

          const u = 1 - Math.random() * 2;
          const v = 1 - Math.random() * 2;
          const spread = (u * v) * (w * 0.35);

          sx = base_x - spread;
          sy = base_y + spread;
        } else {
          sx = Math.random() * w;
          sy = Math.random() * univHeight;
        }

        // Add to arrays
        bgStars.push({
          x: sx,
          y: sy,
          z: Math.random() * 0.5 + 0.1,
          radius: (isMilkyWay ? Math.random() * 0.8 : Math.random() * 1.2),
          alpha: Math.random(),
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinkleDir: Math.random() > 0.5 ? 1 : -1,
        });
      }

      // Grid-based constellation generation to prevent severe overlapping
      constellations = [];
      const cols = Math.ceil(Math.sqrt(NUM_CONSTELLATIONS));
      const rows = Math.ceil(NUM_CONSTELLATIONS / cols);

      const univHeight = h * 1.5; // Taller canvas for scroll parallax
      const cellW = w / cols;
      const cellH = univHeight / rows;

      let count = 0;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (count >= NUM_CONSTELLATIONS) break;

          const shape = CONST_SHAPES[count % CONST_SHAPES.length];
          const scale = 100 + Math.random() * 60; // 100-160px radius

          const nodes = shape.nodes.map(n => ({
            offsetX: n.x * scale,
            offsetY: n.y * scale,
            radius: Math.random() * 1.5 + 1.2
          }));

          // Center within cell grid, plus random jitter
          const jitterX = (Math.random() - 0.5) * (cellW * 0.4);
          const jitterY = (Math.random() - 0.5) * (cellH * 0.4);
          const groupX = (c * cellW) + (cellW / 2) + jitterX;
          const groupY = (r * cellH) + (cellH / 2) + jitterY;

          const vx = (Math.random() - 0.5) * 0.1;
          const vy = (Math.random() - 0.5) * 0.1;

          constellations.push({ name: shape.name, x: groupX, y: groupY, vx, vy, nodes, connections: shape.connections });
          count++;
        }
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
      const m = mouseRef.current;
      m.x += (m.targetX - m.x) * 0.05;
      m.y += (m.targetY - m.y) * 0.05;

      const mouseWX = m.x * w;
      const mouseWY = m.y * h;

      const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
      bgGrad.addColorStop(0, '#040914');
      bgGrad.addColorStop(1, '#0b0f19');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      if (m.isHovering) {
        const spotGrad = ctx.createRadialGradient(mouseWX, mouseWY, 0, mouseWX, mouseWY, 500);
        spotGrad.addColorStop(0, 'rgba(167, 139, 250, 0.08)');
        spotGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = spotGrad;
        ctx.fillRect(0, 0, w, h);
      }

      // The logic for vertical scrolling parallax. 
      // 0.3 means the background scrolls 30% as fast as the actual page document scrolls.
      const scrollOffset = scrollY * 0.3;

      for (const star of bgStars) {
        star.alpha += star.twinkleSpeed * star.twinkleDir;
        if (star.alpha >= 1) {
          star.alpha = 1;
          star.twinkleDir = -1;
        } else if (star.alpha <= 0.1) {
          star.alpha = 0.1;
          star.twinkleDir = 1;
        }

        // Parallax applies mouse X/Y logic + page scroll logic
        const px = star.x + (m.x - 0.5) * 50 * star.z;
        const py = star.y - scrollOffset * star.z + (m.y - 0.5) * 50 * star.z;

        // Wrap around logic. If tall canvas, wrap at tall height
        const univHeight = h * 1.5;
        let drawX = px;
        let drawY = py % univHeight;

        if (drawY < 0) drawY += univHeight;
        if (drawX < 0) drawX += w;
        if (drawX > w) drawX -= w;

        // Filter out stars currently outside rendering viewport to save CPU
        if (drawY > h + 10 || drawY < -10) continue;

        ctx.beginPath();
        ctx.arc(drawX, drawY, star.radius, 0, Math.PI * 2);

        const distFromDiag = Math.abs(drawX * (univHeight / w) - drawY);
        if (distFromDiag < 300) {
          ctx.fillStyle = `rgba(200, 220, 255, ${star.alpha})`;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha * 0.8})`;
        }
        ctx.fill();
      }

      if (!shootingStar.active && Math.random() < 0.005) {
        shootingStar.active = true;
        shootingStar.x = Math.random() * w;
        shootingStar.y = 0;
        shootingStar.len = Math.random() * 80 + 40;
        shootingStar.speed = Math.random() * 15 + 10;
        shootingStar.angle = Math.PI / 4 + (Math.random() * 0.2 - 0.1);
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

          ctx.beginPath();
          ctx.arc(shootingStar.x, shootingStar.y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${shootingStar.opacity})`;
          ctx.fill();
        }
      }

      ctx.lineCap = 'round';

      for (const group of constellations) {
        group.x += group.vx;
        group.y += group.vy;

        const univHeight = h * 1.5;
        // Wrapping 
        if (group.x < -300) group.x = w + 300;
        if (group.x > w + 300) group.x = -300;
        if (group.y < -300) group.y = univHeight + 300;
        if (group.y > univHeight + 300) group.y = -300;

        const drawnNodes: { x: number, y: number, r: number, glowIntensity: number }[] = [];

        for (const n of group.nodes) {
          let nx = group.x + n.offsetX;
          // Apply scroll offset parallax to constellation group y-coord
          let ny = group.y + n.offsetY - (scrollOffset * 0.8);

          // Wrap visually
          ny = ny % univHeight;
          if (ny < -300) ny += univHeight + 600;

          let glowIntensity = 0;

          if (m.isHovering) {
            const dx = mouseWX - nx;
            const dy = mouseWY - ny;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 250) {
              const pull = (250 - dist) * 0.05;
              nx += (dx / dist) * pull;
              ny += (dy / dist) * pull;
              glowIntensity = 1 - (dist / 250);
            }
          }
          drawnNodes.push({ x: nx, y: ny, r: n.radius, glowIntensity });
        }

        // Draw structural connections for this constellation
        for (const conn of group.connections) {
          const start = drawnNodes[conn.from];
          const end = drawnNodes[conn.to];

          if (!start || !end) continue;

          // Optimization: Skip drawing if entirely offscreen
          if ((start.y < -50 && end.y < -50) || (start.y > h + 50 && end.y > h + 50)) continue;

          const lineGlow = Math.max(start.glowIntensity, end.glowIntensity);
          const alpha = 0.15 + (lineGlow * 0.6);
          let strokeColor;

          if (lineGlow > 0) {
            strokeColor = `rgba(167, 139, 250, ${alpha})`;
          } else {
            strokeColor = `rgba(148, 163, 184, 0.15)`;
          }

          ctx.beginPath();
          ctx.moveTo(start.x, start.y);
          ctx.lineTo(end.x, end.y);
          ctx.strokeStyle = strokeColor;
          ctx.lineWidth = 0.5 + (lineGlow * 1.5);
          ctx.stroke();
        }

        // Draw nodes
        for (const dn of drawnNodes) {
          if (dn.y < -50 || dn.y > h + 50) continue; // Skip rendering offscreen nodes

          const nodeAlpha = 0.4 + (dn.glowIntensity * 0.6);
          const drawRadius = dn.r + (dn.glowIntensity * dn.r);

          if (dn.glowIntensity > 0) {
            const starGlow = ctx.createRadialGradient(dn.x, dn.y, 0, dn.x, dn.y, drawRadius * 5);
            starGlow.addColorStop(0, `rgba(196, 181, 253, ${dn.glowIntensity * 0.8})`);
            starGlow.addColorStop(1, 'rgba(196, 181, 253, 0)');

            ctx.beginPath();
            ctx.arc(dn.x, dn.y, drawRadius * 5, 0, Math.PI * 2);
            ctx.fillStyle = starGlow;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(dn.x, dn.y, drawRadius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${nodeAlpha})`;
            ctx.fill();
          } else {
            ctx.beginPath();
            ctx.arc(dn.x, dn.y, drawRadius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(200, 220, 255, ${nodeAlpha})`;
            ctx.fill();
          }
        }
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', handleScroll);
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
