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
    const NUM_CONSTELLATIONS = 12;

    const CONST_SHAPES = [
      {
        name: "Orion (The Hunter)",
        nodes: [
          { x: -0.3, y: -0.8 }, { x: 0.3, y: -0.7 }, { x: -0.1, y: 0 }, { x: 0, y: 0.1 }, { x: 0.1, y: 0.2 }, { x: -0.4, y: 0.8 }, { x: 0.4, y: 0.7 }
        ],
        connections: [{ from: 0, to: 1 }, { from: 0, to: 2 }, { from: 1, to: 4 }, { from: 2, to: 3 }, { from: 3, to: 4 }, { from: 2, to: 5 }, { from: 4, to: 6 }]
      },
      {
        name: "Leo (The Lion)",
        nodes: [
          { x: 0.5, y: -0.5 }, { x: 0.8, y: -0.2 }, { x: 0.5, y: 0 }, { x: 0.1, y: -0.2 }, { x: -0.2, y: -0.4 }, { x: -0.6, y: -0.3 }, { x: -0.8, y: 0.2 }, { x: -0.4, y: 0.4 }, { x: 0.1, y: 0.3 }
        ],
        connections: [{ from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 4 }, { from: 4, to: 0 }, { from: 2, to: 8 }, { from: 8, to: 7 }, { from: 7, to: 6 }, { from: 6, to: 5 }, { from: 5, to: 4 }]
      },
      {
        name: "Ursa Major (Big Dipper)",
        nodes: [
          { x: -0.8, y: -0.2 }, { x: -0.5, y: -0.1 }, { x: -0.2, y: 0.1 }, { x: 0.1, y: 0.2 }, { x: 0.2, y: 0.6 }, { x: 0.6, y: 0.7 }, { x: 0.8, y: 0.2 }
        ],
        connections: [{ from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 4 }, { from: 4, to: 5 }, { from: 5, to: 6 }, { from: 6, to: 3 }]
      },
      {
        name: "Cassiopeia (The Queen)",
        nodes: [{ x: -0.8, y: -0.6 }, { x: -0.3, y: 0.2 }, { x: 0, y: -0.2 }, { x: 0.4, y: 0.6 }, { x: 0.8, y: -0.4 }],
        connections: [{ from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 4 }]
      },
      {
        name: "Cygnus (The Swan)",
        nodes: [{ x: 0, y: -0.8 }, { x: 0, y: -0.3 }, { x: 0, y: 0.7 }, { x: -0.6, y: -0.1 }, { x: 0.6, y: -0.5 }],
        connections: [{ from: 0, to: 1 }, { from: 1, to: 2 }, { from: 3, to: 1 }, { from: 1, to: 4 }]
      },
      {
        name: "Scorpius (The Scorpion)",
        nodes: [
          { x: 0.8, y: -0.7 }, { x: 0.5, y: -0.5 }, { x: 0.2, y: -0.4 }, { x: -0.1, y: -0.2 }, { x: -0.4, y: 0.1 },
          { x: -0.6, y: 0.5 }, { x: -0.5, y: 0.8 }, { x: -0.2, y: 0.9 }, { x: 0, y: 0.7 }
        ],
        connections: [{ from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 4 }, { from: 4, to: 5 }, { from: 5, to: 6 }, { from: 6, to: 7 }, { from: 7, to: 8 }]
      }
    ];

    const initCanvas = () => {
      bgStars = [];

      // Milky Way Band Generation (Diagonal from Top-Left to Bottom-Right)
      for (let i = 0; i < INIT_BG_STARS; i++) {
        const isMilkyWay = Math.random() < 0.6; // 60% of stars clustered in the band

        let sx, sy;

        if (isMilkyWay) {
          // Point along the diagonal (Math.random() * length)
          const t = Math.random();
          // Diagonal line: (0,0) to (w, h)
          const base_x = t * w;
          const base_y = t * h;

          // Gaussian-like spread from the diagonal line
          const u = 1 - Math.random() * 2;
          const v = 1 - Math.random() * 2;
          const spread = (u * v) * (w * 0.35); // Concentrate towards the center of the band

          sx = base_x - spread;
          sy = base_y + spread;
        } else {
          // Uniform distribution for the rest of the sky
          sx = Math.random() * w;
          sy = Math.random() * h;
        }

        // Add slight tilt or correction
        bgStars.push({
          x: sx,
          y: sy,
          z: Math.random() * 0.5 + 0.1, // Depth for parallax
          radius: (isMilkyWay ? Math.random() * 0.8 : Math.random() * 1.2), // Milky way stars are finer
          alpha: Math.random(),
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinkleDir: Math.random() > 0.5 ? 1 : -1,
        });
      }

      // Constellation Generation
      constellations = [];
      for (let i = 0; i < NUM_CONSTELLATIONS; i++) {
        const shape = CONST_SHAPES[i % CONST_SHAPES.length]; // Cycle through the predefined shapes
        const scale = 120 + Math.random() * 80; // Random scale mapping: 120px to 200px radius

        const nodes = shape.nodes.map(n => ({
          offsetX: n.x * scale,
          offsetY: n.y * scale,
          radius: Math.random() * 1.5 + 1.2
        }));

        // Center of this group
        const groupX = Math.random() * w;
        const groupY = Math.random() * h;
        const vx = (Math.random() - 0.5) * 0.15; // Slow drift
        const vy = (Math.random() - 0.5) * 0.15;

        constellations.push({ name: shape.name, x: groupX, y: groupY, vx, vy, nodes, connections: shape.connections });
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
      bgGrad.addColorStop(0, '#040914');
      bgGrad.addColorStop(1, '#0b0f19');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      // Starlight Amplifier Mouse Aura
      if (m.isHovering) {
        const spotGrad = ctx.createRadialGradient(mouseWX, mouseWY, 0, mouseWX, mouseWY, 500);
        spotGrad.addColorStop(0, 'rgba(167, 139, 250, 0.08)'); // Subtle purple gravity well
        spotGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = spotGrad;
        ctx.fillRect(0, 0, w, h);
      }

      // ── Layer 2: Milky Way Stars (Twinkling & Parallax) ──
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

        // Milky way band glow effect: Slight blueish tint for stars near diagonal
        const distFromDiag = Math.abs(drawX * (h / w) - drawY);
        if (distFromDiag < 300) {
          ctx.fillStyle = `rgba(200, 220, 255, ${star.alpha})`;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha * 0.8})`;
        }
        ctx.fill();
      }

      // ── Layer 3: Shooting Star ──
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

          // Glow head
          ctx.beginPath();
          ctx.arc(shootingStar.x, shootingStar.y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${shootingStar.opacity})`;
          ctx.fill();
        }
      }

      // ── Layer 4: Fixed Constellations with Starlight Amplifier ──
      ctx.lineCap = 'round';

      for (const group of constellations) {
        // Drift the constellation group
        group.x += group.vx;
        group.y += group.vy;

        // Wrap around entire group
        if (group.x < -300) group.x = w + 300;
        if (group.x > w + 300) group.x = -300;
        if (group.y < -300) group.y = h + 300;
        if (group.y > h + 300) group.y = -300;

        // Calculate world positions of nodes in this group, applying mouse warping (gravity)
        const drawnNodes: { x: number, y: number, r: number, glowIntensity: number }[] = [];
        let maxGlow = 0;
        let centerX = 0;
        let centerY = 0;

        for (const n of group.nodes) {
          let nx = group.x + n.offsetX;
          let ny = group.y + n.offsetY;
          let glowIntensity = 0;

          // Starlight Amplifier (Mouse Gravity & Glow)
          if (m.isHovering) {
            const dx = mouseWX - nx;
            const dy = mouseWY - ny;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 250) {
              // Pull slightly towards mouse (spring effect)
              const pull = (250 - dist) * 0.05;
              nx += (dx / dist) * pull;
              ny += (dy / dist) * pull;

              glowIntensity = 1 - (dist / 250);
            }
          }
          drawnNodes.push({ x: nx, y: ny, r: n.radius, glowIntensity });
          maxGlow = Math.max(maxGlow, glowIntensity);
          centerX += nx;
          centerY += ny;
        }

        centerX /= group.nodes.length;
        centerY /= group.nodes.length;

        // Draw structural connections for this constellation
        for (const conn of group.connections) {
          const start = drawnNodes[conn.from];
          const end = drawnNodes[conn.to];

          if (!start || !end) continue;

          // Higher glow intensity of the two connected nodes determines line glow
          const lineGlow = Math.max(start.glowIntensity, end.glowIntensity);

          // Faint base visibility, bright vibrant purple/blue when mouse amplifies
          const alpha = 0.15 + (lineGlow * 0.6);
          let strokeColor;

          if (lineGlow > 0) {
            // Gradient based on proximity to mouse amplifier
            strokeColor = `rgba(167, 139, 250, ${alpha})`; // Vibrant light purple
          } else {
            strokeColor = `rgba(148, 163, 184, 0.15)`; // Faint grey/slate
          }

          ctx.beginPath();
          ctx.moveTo(start.x, start.y);
          ctx.lineTo(end.x, end.y);
          ctx.strokeStyle = strokeColor;
          ctx.lineWidth = 0.5 + (lineGlow * 1.5);
          ctx.stroke();
        }

        // Draw the nodes
        for (const dn of drawnNodes) {
          const nodeAlpha = 0.4 + (dn.glowIntensity * 0.6);
          const drawRadius = dn.r + (dn.glowIntensity * dn.r);

          if (dn.glowIntensity > 0) {
            // Intense core glow when amplified
            const starGlow = ctx.createRadialGradient(dn.x, dn.y, 0, dn.x, dn.y, drawRadius * 5);
            starGlow.addColorStop(0, `rgba(196, 181, 253, ${dn.glowIntensity * 0.8})`);
            starGlow.addColorStop(1, 'rgba(196, 181, 253, 0)');

            ctx.beginPath();
            ctx.arc(dn.x, dn.y, drawRadius * 5, 0, Math.PI * 2);
            ctx.fillStyle = starGlow;
            ctx.fill();

            // Bright white dot in center when active
            ctx.beginPath();
            ctx.arc(dn.x, dn.y, drawRadius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${nodeAlpha})`;
            ctx.fill();
          } else {
            // Dormant constellation star
            ctx.beginPath();
            ctx.arc(dn.x, dn.y, drawRadius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(200, 220, 255, ${nodeAlpha})`;
            ctx.fill();
          }
        }

        // Draw constellation name if active
        if (maxGlow > 0.05) {
          ctx.font = '500 14px "Montserrat", sans-serif';
          ctx.textAlign = 'center';
          ctx.fillStyle = `rgba(167, 139, 250, ${maxGlow})`;
          ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
          ctx.shadowBlur = 4;
          // Offset text slightly below the geometric center
          ctx.fillText(group.name, centerX, centerY + 100);
          ctx.shadowBlur = 0; // reset
        }
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
