import { useEffect, useState } from 'react';
import { Terminal } from 'lucide-react';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("INITIALIZING KERNEL...");

  const originalText = "SYSTEM SECURE";

  useEffect(() => {
    // 1. Progress Bar & Text Sequence (Fast 2s Boot)
    let currentProgress = 0;

    const progressInterval = setInterval(() => {
      currentProgress += Math.random() * 15 + 5; // Jump by 5-20%

      if (currentProgress > 100) {
        currentProgress = 100;
        setLoadingText(originalText);
        clearInterval(progressInterval);

        // Trigger Exit after reaching 100%
        setTimeout(() => {
          setIsExiting(true);
          // Allow exit animation to play before completely unmounting
          setTimeout(onComplete, 800);
        }, 400); // Hold at 100% for brief moment
      } else {
        if (currentProgress < 30) setLoadingText("MOUNTING VOLUMES...");
        else if (currentProgress < 60) setLoadingText("STARTING SERVICES...");
        else if (currentProgress < 90) setLoadingText("ESTABLISHING CONNECTION...");
      }

      setProgress(currentProgress);
    }, 150);

    return () => {
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-[#050511] transition-all duration-800 ease-in-out ${isExiting ? 'opacity-0 scale-110 blur-md' : 'opacity-100 scale-100'}`}>

      {/* Background Matrix Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-lg mx-4">
        {/* Fast Loading Logo */}
        <div className="mb-8 relative perspective-1000">
          <div className="relative transition-all duration-1000 ease-out transform">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-xl opacity-40 animate-pulse"></div>
            <img
              src="/lovable-uploads/c51f92f6-acbc-4922-996a-d8b6eebdbddc.png"
              alt="DVS Logo"
              className="w-20 h-20 md:w-24 md:h-24 relative z-10 drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]"
            />
          </div>
        </div>

        {/* Main Terminal Box */}
        <div className="w-full p-8 border border-white/10 bg-black/40 backdrop-blur-md rounded-xl shadow-[0_0_30px_rgba(0,240,255,0.1)]">

          <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="text-white font-mono text-sm tracking-widest">COMMAND CENTER BOOT</span>
          </div>

          {/* Loading Bar */}
          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden mb-4 relative">
            <div
              className="absolute top-0 left-0 h-full bg-primary transition-all duration-150 ease-out shadow-[0_0_10px_rgba(0,240,255,0.5)]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Status Text & Percentage */}
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="text-primary/80 animate-pulse">{loadingText}</span>
            <span className="text-white">{Math.floor(progress)}%</span>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          <div className="absolute -bottom-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;