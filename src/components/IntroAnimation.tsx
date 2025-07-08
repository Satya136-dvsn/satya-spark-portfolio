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
    const logoTimer = setTimeout(() => setShowLogo(true), 300);
    
    // Show DVS monogram after hexagon draws
    const monogramTimer = setTimeout(() => setShowMonogram(true), 1000);
    
    // Start name animation after logo completes
    const nameTimer = setTimeout(() => setShowName(true), 1500);
    
    // Start fade out after 3.5-4 seconds total
    const fadeTimer = setTimeout(() => setFadeOut(true), 3500);
    
    // Complete animation
    const completeTimer = setTimeout(() => onComplete(), 4000);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(monogramTimer);
      clearTimeout(nameTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-400/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-pink-400/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-20 h-20 bg-blue-400/5 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/6 w-16 h-16 bg-purple-300/3 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 left-2/3 w-28 h-28 bg-pink-300/4 rounded-full animate-pulse delay-300"></div>
      </div>

      <div className="text-center relative flex flex-col items-center">
        {/* DVS Logo with Hexagonal Outline */}
        <div className="mb-8 relative">
          <svg 
            width="120" 
            height="120" 
            viewBox="0 0 120 120" 
            className="relative"
          >
            {/* Hexagonal Outline */}
            <polygon
              points="60,10 95,30 95,70 60,90 25,70 25,30"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-all duration-1000 ease-out ${
                showLogo 
                  ? 'opacity-100 animate-draw-hexagon' 
                  : 'opacity-0'
              }`}
              style={{
                filter: showLogo ? 'drop-shadow(0 0 15px rgba(168, 85, 247, 0.4))' : 'none'
              }}
            />
            
            {/* DVS Monogram */}
            <text
              x="60"
              y="67"
              textAnchor="middle"
              className={`text-2xl font-bold transition-all duration-800 ease-out ${
                showMonogram 
                  ? 'opacity-100 fill-current' 
                  : 'opacity-0'
              }`}
              style={{
                fill: 'url(#textGradient)',
                filter: showMonogram ? 'drop-shadow(0 0 10px rgba(236, 72, 153, 0.3))' : 'none'
              }}
            >
              DVS
            </text>
            
            {/* Shimmer effect for logo */}
            {showMonogram && (
              <rect
                x="0"
                y="0"
                width="120"
                height="120"
                fill="url(#shimmerGradient)"
                className="animate-logo-shimmer"
                style={{
                  animationDelay: '200ms',
                  animationFillMode: 'both'
                }}
              />
            )}
            
            {/* Gradient Definitions */}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="50%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#f472b6" />
              </linearGradient>
              
              <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="50%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#f472b6" />
              </linearGradient>
              
              <linearGradient id="shimmerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.3)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </linearGradient>
            </defs>
          </svg>
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
        
        @import url('https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap');
      `}</style>
    </div>
  );
};

export default IntroAnimation;