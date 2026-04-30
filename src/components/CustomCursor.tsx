import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for the cursor movement
  const springConfig = { damping: 35, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setCoords({ x: Math.round(e.clientX), y: Math.round(e.clientY) });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('interactive') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  const activeColor = isHovering ? '#FFB800' : '#00F3FF';

  return (
    <motion.div
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
    >
      <div className="relative -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        {/* Dashed Bounding Box */}
        <motion.div 
          animate={{ 
            scale: isHovering ? 1.2 : 1,
            opacity: isHovering ? 0.6 : 0.3,
            rotate: isHovering ? 90 : 0
          }}
          className="absolute border border-dashed"
          style={{ 
            borderColor: activeColor,
            width: '40px',
            height: '40px',
            transition: { duration: 0.4, ease: "easeOut" }
          }}
        />

        {/* Outer Diamond (Ghost) */}
        <motion.div 
          animate={{ 
            rotate: 45,
            scale: isHovering ? 1.5 : 1,
            opacity: isHovering ? 0.4 : 0.2
          }}
          className="absolute border border-white/20"
          style={{ 
            width: '30px',
            height: '30px',
          }}
        />
        
        {/* Crosshair Lines */}
        <motion.div 
          animate={{ scaleY: isHovering ? 1.5 : 1 }}
          className="absolute w-[1px] h-6 bg-white/40"
          style={{ backgroundColor: `${activeColor}66` }}
        />
        <motion.div 
          animate={{ scaleX: isHovering ? 1.5 : 1 }}
          className="absolute h-[1px] w-6 bg-white/40"
          style={{ backgroundColor: `${activeColor}66` }}
        />

        {/* Central Glowing Dot */}
        <motion.div 
          animate={{ 
            scale: isHovering ? 1.2 : 1,
            backgroundColor: activeColor
          }}
          className="w-1.5 h-1.5 rounded-full z-10"
          style={{ 
            boxShadow: `0 0 15px ${activeColor}, 0 0 5px white`,
          }}
        />

        {/* Data Readout */}
        <div className="absolute left-8 top-4 flex flex-col gap-0.5 pointer-events-none">
          <motion.div
            className="flex items-center gap-2"
            animate={{ opacity: isHovering ? 1 : 0.6 }}
          >
            <span className="text-[9px] font-mono opacity-50 uppercase tracking-tighter" style={{ color: activeColor }}>Grid_X:</span>
            <span className="text-[10px] font-mono font-bold" style={{ color: activeColor }}>{coords.x}</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-2"
            animate={{ opacity: isHovering ? 1 : 0.6 }}
          >
            <span className="text-[9px] font-mono opacity-50 uppercase tracking-tighter" style={{ color: activeColor }}>Grid_Y:</span>
            <span className="text-[10px] font-mono font-bold" style={{ color: activeColor }}>{coords.y}</span>
          </motion.div>
          
          {/* Status Label */}
          <motion.div
            initial={false}
            animate={{ 
              opacity: isHovering ? 1 : 0,
              x: isHovering ? 0 : -5
            }}
            className="text-[10px] font-mono font-black uppercase tracking-[0.2em] mt-1"
            style={{ color: activeColor }}
          >
            LINK_READY
          </motion.div>
        </div>

        {/* Scan Line Animation (Subtle) */}
        <motion.div
          animate={{
            top: ["-50%", "150%"],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-10 h-[1px]"
          style={{ backgroundColor: activeColor }}
        />
      </div>
    </motion.div>
  );
};

export default CustomCursor;
