import { useEffect, useState, useRef } from 'react';
import { ArrowRight, Terminal, Cloud, Code } from 'lucide-react';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [showLogo, setShowLogo] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [decodedText, setDecodedText] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Use a ref to track exiting state inside the canvas loop without re-triggering useEffect
  const isExitingRef = useRef(false);

  const originalText = "Duba Venkata Satyanarayana";

  useEffect(() => {
    // 1. Matrix/Tron Rain Effect
    const canvas = canvasRef.current;
    if (canvas) {
      // Mobile Performance: ONLY run canvas logic if width > 768px
      if (window.innerWidth >= 768) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
          };
          setCanvasSize();

          // Optimization: Wider columns on mobile = Fewer draw calls = Higher FPS
          const fontSize = window.innerWidth < 768 ? 20 : 15;
          const columns = Math.floor(canvas.width / fontSize);
          const drops: number[] = [];
          const chars = "01ADCDEF@#$%^&*";

          for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -100;
          }

          let animationFrameId: number;
          let lastTime = 0;
          const fps = 30; // Cap at 30FPS for performance
          const interval = 1000 / fps;

          const draw = (currentTime: number) => {
            animationFrameId = requestAnimationFrame(draw);

            const deltaTime = currentTime - lastTime;
            if (deltaTime < interval) return;

            lastTime = currentTime - (deltaTime % interval);

            // Clear with slight transparency for trail effect
            ctx.fillStyle = isExitingRef.current ? 'rgba(5, 5, 17, 0.1)' : 'rgba(5, 5, 17, 0.2)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
              const text = chars[Math.floor(Math.random() * chars.length)];
              ctx.fillStyle = Math.random() > 0.5 ? '#a855f7' : '#3b82f6';
              ctx.fillText(text, i * fontSize, drops[i] * fontSize);

              if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
              }

              // ACCELERATION LOGIC:
              drops[i] += isExitingRef.current ? 3 : 1;
            }
          };

          // Start animation loop
          requestAnimationFrame(draw);

          const handleResize = () => {
            setCanvasSize();
          };
          window.addEventListener('resize', handleResize);

          // Cleanup inside the conditional block
          var cleanupCanvas = () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
          };
        }
      }
    }

    // 2. Logo Animation
    setTimeout(() => setShowLogo(true), 100);

    // 3. Decryption Text Animation
    let iteration = 0;
    const textInterval = setInterval(() => {
      setDecodedText(() => {
        return originalText
          .split("")
          .map((_letter, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");
      });

      if (iteration >= originalText.length) {
        clearInterval(textInterval);
      }

      iteration += 1 / 4; // Slower resolve
    }, 30);

    // 4. Show Button
    setTimeout(() => setShowButton(true), 2500);

    return () => {
      if (typeof cleanupCanvas === 'function') cleanupCanvas();
      clearInterval(textInterval);
    };
  }, []);

  const handleEnter = () => {
    // Update both Ref (for canvas loop) and State (for CSS transitions)
    isExitingRef.current = true;
    setIsExiting(true);

    // 1.5s delay allows the "Warp" effect to be seen before full fade-out
    setTimeout(onComplete, 1500);
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-[#050511] transition-all duration-[1500ms] ease-in-out ${isExiting ? 'opacity-0 scale-[5] filter blur-xl' : 'opacity-100 scale-100'}`}>
      {/* Matrix/Tron Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-20 pointer-events-none"
        aria-hidden="true"
      />

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
      </div>

      <div className="text-center relative flex flex-col items-center z-10 px-4 w-full max-w-7xl">
        {/* DVS Logo with Glow */}
        <div className="mb-12 relative group perspective-1000">
          <div className={`relative transition-all duration-1000 ease-out transform ${showLogo ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-50'}`}>
            <div className="absolute -inset-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
            <img
              src="/lovable-uploads/c51f92f6-acbc-4922-996a-d8b6eebdbddc.png"
              alt="DVS Logo"
              className="w-28 h-28 md:w-40 md:h-40 relative z-10 drop-shadow-[0_0_25px_rgba(168,85,247,0.6)]"
            />
            {/* Tech Icons Orbiting */}
            <div className={`absolute top-0 right-0 animate-spin-slow transition-opacity duration-1000 ${showLogo ? 'opacity-100' : 'opacity-0'}`}>
              <Code className="w-6 h-6 text-blue-400 absolute -top-4 -right-4" />
            </div>
            <div className={`absolute bottom-0 left-0 animate-spin-reverse-slow transition-opacity duration-1000 delay-300 ${showLogo ? 'opacity-100' : 'opacity-0'}`}>
              <Cloud className="w-6 h-6 text-purple-400 absolute -bottom-4 -left-4" />
            </div>
          </div>
        </div>

        {/* Decrypting Name Effect */}
        <div className="relative mb-6 w-full flex items-center justify-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold font-['Poppins'] tracking-tight text-white drop-shadow-lg text-center leading-tight whitespace-nowrap overflow-visible">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              {decodedText}
            </span>
            <span className="animate-pulse text-purple-400 ml-1">_</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className={`transition-all duration-1000 delay-1000 ${showLogo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex items-center gap-3 text-gray-400 text-xs md:text-xl tracking-[0.2em] uppercase font-light border-y border-white/10 py-2 px-8 bg-white/5 backdrop-blur-sm rounded-full">
            <Terminal className="w-3 h-3 md:w-4 md:h-4 text-purple-400" />
            <span>Full Stack Developer & Cloud Specialist</span>
          </div>
        </div>

        {/* Enter Button */}
        <div className={`mt-16 transition-all duration-1000 delay-[2000ms] ${showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button
            onClick={handleEnter}
            className="group relative px-10 py-4 bg-transparent overflow-hidden rounded-full transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            {/* Button Border Gradient */}
            <div className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-[length:200%_auto] animate-gradient-border">
              <div className="h-full w-full bg-[#0a0a1f] rounded-full"></div>
            </div>

            {/* Button Content */}
            <div className="relative flex items-center gap-4 px-2">
              <span className="text-white font-medium tracking-widest uppercase text-sm group-hover:text-purple-300 transition-colors z-10">Enter System</span>
              <ArrowRight className="w-5 h-5 text-blue-400 group-hover:translate-x-2 transition-transform duration-300 z-10" />
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg) translateX(60px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(60px) rotate(-360deg); }
        }
        @keyframes spin-reverse-slow {
          from { transform: rotate(360deg) translateX(60px) rotate(-360deg); }
          to { transform: rotate(0deg) translateX(60px) rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-spin-reverse-slow {
          animation: spin-reverse-slow 10s linear infinite;
        }
        @keyframes gradient-border {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-border {
          animation: gradient-border 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default IntroAnimation;