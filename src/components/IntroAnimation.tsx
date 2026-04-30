import { useEffect, useState, useRef } from 'react';
import { Terminal } from 'lucide-react';

interface IntroAnimationProps {
  onComplete: () => void;
}

const BOOT_LOGS = [
  "INITIALIZING KERNEL MODULES...",
  "LOADING NEURAL NETWORKS [v9.4.2]...",
  "MOUNTING ENCRYPTED VOLUMES...",
  "BYPASSING FIREWALL PROTOCOLS...",
  "ESTABLISHING SECURE CONNECTION...",
  "DECRYPTING USER DATA...",
  "SYNCING BIOMETRIC SIGNATURES...",
  "SYSTEM OVERRIDE SUCCESSFUL.",
];

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const logsEndRef = useRef<HTMLDivElement>(null);

  const originalText = "SYSTEM SECURE // ACCESS GRANTED";

  useEffect(() => {
    let currentProgress = 0;
    
    // Log adding interval
    const logInterval = setInterval(() => {
      setLogs(prev => {
        const nextLog = BOOT_LOGS[prev.length % BOOT_LOGS.length];
        return [...prev, `> ${nextLog}`].slice(-4); // Keep last 4 logs
      });
    }, 200);

    const progressInterval = setInterval(() => {
      currentProgress += Math.random() * 12 + 4; // Jump by 4-16%

      if (currentProgress > 100) {
        currentProgress = 100;
        clearInterval(progressInterval);
        clearInterval(logInterval);
        setLogs(prev => [...prev, `> ${originalText}`].slice(-5));

        setTimeout(() => {
          setIsExiting(true);
          setTimeout(onComplete, 800);
        }, 600); 
      }
      setProgress(currentProgress);
    }, 120);

    return () => {
      clearInterval(progressInterval);
      clearInterval(logInterval);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-[#01060F] transition-all duration-800 ease-in-out ${isExiting ? 'opacity-0 scale-110 blur-xl' : 'opacity-100 scale-100'}`}>
      
      {/* Premium Scanline Overlay */}
      <div className="absolute inset-0 pointer-events-none z-50 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '100% 4px' }}></div>
      <div className="absolute inset-0 pointer-events-none z-50 opacity-40 bg-[radial-gradient(circle_at_center,transparent_0%,#01060F_100%)]"></div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-2xl mx-4">
        {/* Main Hacker Console Box */}
        <div className="w-full p-[1px] border border-white/10 bg-black/60 backdrop-blur-xl rounded-sm shadow-[0_0_40px_rgba(0,229,255,0.05)] relative overflow-hidden">
          
          {/* Top Bar */}
          <div className="bg-[#050D1A] border-b border-white/10 p-3 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Terminal className="w-4 h-4 text-white" />
              <span className="text-white/90 font-mono text-xs tracking-[0.2em] uppercase font-bold">
                <span className="text-[#00E5FF]">Grid</span> <span className="text-white">OS</span> <span className="text-[#FF5E00]">v9.9.0</span> // Boot Sequence
              </span>
            </div>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse shadow-[0_0_8px_#00E5FF]"></div>
              <div className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_8px_#ffffff]" style={{ animationDelay: '75ms' }}></div>
              <div className="w-2 h-2 rounded-full bg-[#FF5E00] animate-pulse shadow-[0_0_8px_#FF5E00]" style={{ animationDelay: '150ms' }}></div>
            </div>
          </div>

          <div className="p-6">
            {/* Split layout: Logo and Logs */}
            <div className="flex flex-col md:flex-row gap-8 mb-8 items-center md:items-start">
              
              {/* Logo / Avatar with Glitch/Glow */}
              <div className="relative shrink-0 perspective-1000">
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#00E5FF] via-white/20 to-[#FF5E00] rounded-sm blur-2xl opacity-40 animate-pulse"></div>
                <div className="w-24 h-24 border border-white/20 rounded-sm overflow-hidden relative flex items-center justify-center bg-[#050D1A]">
                   <div className="absolute inset-0 bg-gradient-to-br from-[#00E5FF]/15 via-white/5 to-[#FF5E00]/15 animate-[pulse_2s_ease-in-out_infinite]"></div>
                   <img src="/logo.png" alt="Satya Logo" className="w-16 h-16 relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] filter contrast-125 brightness-150" />
                   
                   {/* Scanning line over logo */}
                   <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00E5FF] via-white to-[#FF5E00] opacity-80 shadow-[0_0_10px_#ffffff] animate-[scan-line_2s_linear_infinite] z-20"></div>
                </div>
              </div>

              {/* Terminal Logs */}
              <div className="flex-1 w-full font-mono text-[11px] sm:text-xs leading-relaxed h-28 flex flex-col justify-end">
                {logs.map((log, i) => (
                  <div key={i} className={`animate-fade-in ${i === logs.length - 1 ? 'text-[#FF5E00] font-bold drop-shadow-[0_0_5px_rgba(255,94,0,0.5)]' : 'text-[#00E5FF]/70'}`}>
                    {log}
                  </div>
                ))}
                <div ref={logsEndRef} />
              </div>
            </div>

            {/* Futuristic Progress Bar */}
            <div className="w-full relative pt-2">
              <div className="flex justify-between items-end mb-2 font-mono text-[10px] tracking-widest text-white/60">
                <span>SYSTEM.MEMORY.ALLOCATION</span>
                <span className="text-[#00E5FF] drop-shadow-[0_0_8px_rgba(0,229,255,0.8)] text-sm font-bold">{Math.floor(progress)}%</span>
              </div>
              
              <div className="w-full h-2 bg-[#0A1628] rounded-sm overflow-hidden border border-white/10 relative">
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#00E5FF] via-white to-[#FF5E00] transition-all duration-100 ease-out shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                  style={{ width: `${progress}%` }}
                >
                  {/* Highlight on the leading edge */}
                  <div className="absolute top-0 right-0 bottom-0 w-4 bg-white opacity-80 blur-[2px]"></div>
                </div>
              </div>
            </div>
            
          </div>
          
          {/* Corner Decals */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#00E5FF]"></div>
          <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#FF5E00]"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#FF5E00]"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#00E5FF]"></div>
        </div>
      </div>
      
      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(5px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out forwards;
        }
        @keyframes scan-line {
          0% { top: -10%; }
          100% { top: 110%; }
        }
      `}</style>
    </div>
  );
};

export default IntroAnimation;