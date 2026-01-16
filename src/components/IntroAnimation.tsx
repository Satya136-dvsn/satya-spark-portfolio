import { useEffect, useState } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [showLogo, setShowLogo] = useState(false);
  const [showMonogram, setShowMonogram] = useState(false);
  const [showName, setShowName] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  
  const name = "Duba Venkata Satyanarayana";
  const words = name.split(' ');

  useEffect(() => {
    // Start logo hexagon animation
    const logoTimer = setTimeout(() => setShowLogo(true), 100);
    
    // Show DVS monogram after hexagon draws
    const monogramTimer = setTimeout(() => setShowMonogram(true), 300);
    
    // Start name animation after logo completes
    const nameTimer = setTimeout(() => setShowName(true), 500);
    
    // Start fade out after 1 second total
    const fadeTimer = setTimeout(() => setFadeOut(true), 800);
    
    // Complete animation
    const completeTimer = setTimeout(() => onComplete(), 1000);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(monogramTimer);
      clearTimeout(nameTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/8 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-slate-400/6 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-20 h-20 bg-blue-300/8 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/6 w-16 h-16 bg-slate-300/5 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 left-2/3 w-28 h-28 bg-blue-400/6 rounded-full animate-pulse delay-300"></div>
      </div>

      <div className="text-center relative flex flex-col items-center">
        {/* DVS Logo */}
        <div className="mb-8 relative">
          <img 
            src="/lovable-uploads/c51f92f6-acbc-4922-996a-d8b6eebdbddc.png"
            alt="DVS Logo"
            className={`w-40 h-40 transition-all duration-1000 ease-out ${
              showLogo 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-75'
            }`}
            style={{
              filter: showLogo ? 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.4))' : 'none'
            }}
          />
          
          {/* Shimmer effect for logo */}
          {showLogo && (
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-logo-shimmer"
              style={{
                animationDelay: '800ms',
                animationFillMode: 'both'
              }}
            />
          )}
        </div>

        {/* Handwriting animation for the name */}
        <div className="relative">
          <svg 
            width="800" 
            height="120" 
            viewBox="0 0 800 120" 
            className="mx-auto"
            style={{ overflow: 'visible' }}
          >
            <defs>
              {/* Writing mask animation */}
              <mask id="writingMask">
                <rect 
                  width="0" 
                  height="120" 
                  fill="white"
                  className={showName ? 'animate-writing-reveal' : ''}
                />
              </mask>
              
              {/* Glow filter */}
              <filter id="textGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              
              {/* Shimmer gradient */}
              <linearGradient id="shimmerTrail" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                <stop offset="30%" stopColor="rgba(255,255,255,0.8)" />
                <stop offset="70%" stopColor="rgba(255,255,255,0.8)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </linearGradient>
              
              {/* Text gradient for name */}
              <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#f8fafc" />
                <stop offset="100%" stopColor="#e2e8f0" />
              </linearGradient>
            </defs>
            
            {/* Main text with handwriting reveal */}
            <text
              x="400"
              y="70"
              textAnchor="middle"
              className="text-5xl md:text-6xl lg:text-7xl font-['Alex_Brush',cursive]"
              fill="url(#textGradient)"
              filter="url(#textGlow)"
              mask="url(#writingMask)"
              style={{
                fontSize: '4rem'
              }}
            >
              Duba Venkata Satyanarayana
            </text>
            
            {/* Shimmer trail effect */}
            {showName && (
              <rect
                x="0"
                y="0"
                width="60"
                height="120"
                fill="url(#shimmerTrail)"
                className="animate-shimmer-trail"
              />
            )}
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { 
            transform: translateX(-100%) skewX(-12deg);
            opacity: 0;
          }
          50% { 
            opacity: 1;
          }
          100% { 
            transform: translateX(200%) skewX(-12deg);
            opacity: 0;
          }
        }
        
        @keyframes draw-path {
          0% {
            stroke-dasharray: 0 1000;
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dasharray: 1000 0;
            stroke-dashoffset: 0;
          }
        }
        
        .animate-draw-path {
          animation: draw-path 1s ease-in-out forwards;
        }
        
        @keyframes draw-hexagon {
          0% {
            stroke-dasharray: 0 400;
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dasharray: 400 0;
            stroke-dashoffset: 0;
          }
        }
        
        .animate-draw-hexagon {
          stroke-dasharray: 0 400;
          animation: draw-hexagon 1s ease-out forwards;
        }
        
        @keyframes logo-shimmer {
          0% { 
            transform: translateX(-120px);
            opacity: 0;
          }
          50% { 
            opacity: 1;
          }
          100% { 
            transform: translateX(120px);
            opacity: 0;
          }
        }
        
        .animate-logo-shimmer {
          animation: logo-shimmer 1s ease-out forwards;
        }
        
        @keyframes writing-reveal {
          0% { 
            width: 0;
          }
          100% { 
            width: 800px;
          }
        }
        
        .animate-writing-reveal {
          animation: writing-reveal 2.5s ease-out forwards;
        }
        
        @keyframes shimmer-trail {
          0% { 
            transform: translateX(-60px);
            opacity: 0;
          }
          20% { 
            opacity: 1;
          }
          80% { 
            opacity: 1;
          }
          100% { 
            transform: translateX(800px);
            opacity: 0;
          }
        }
        
        .animate-shimmer-trail {
          animation: shimmer-trail 2.5s ease-out forwards;
        }
        
        @keyframes orbit {
          0% { 
            transform: rotate(0deg) translateX(15px) rotate(0deg);
          }
          100% { 
            transform: rotate(360deg) translateX(15px) rotate(-360deg);
          }
        }
        
        .animate-orbit {
          animation: orbit 3s linear infinite;
        }
        
        @keyframes orbit-reverse {
          0% { 
            transform: rotate(0deg) translateX(20px) rotate(0deg);
          }
          100% { 
            transform: rotate(-360deg) translateX(20px) rotate(360deg);
          }
        }
        
        .animate-orbit-reverse {
          animation: orbit-reverse 4s linear infinite;
        }
        
        @import url('https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap');
      `}</style>
    </div>
  );
};

export default IntroAnimation;