import { useEffect, useState } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [showName, setShowName] = useState(false);
  const [showWriteOn, setShowWriteOn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  
  const name = "Duba Venkata Satyanarayana";
  const letters = name.split('');

  useEffect(() => {
    // Start name animation after brief delay
    const nameTimer = setTimeout(() => setShowName(true), 300);
    
    // Start write-on effect after name letters complete
    const writeOnTimer = setTimeout(() => setShowWriteOn(true), 2200);
    
    // Start fade out
    const fadeTimer = setTimeout(() => setFadeOut(true), 3200);
    
    // Complete animation
    const completeTimer = setTimeout(() => onComplete(), 3700);

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(writeOnTimer);
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

      <div className="text-center relative">
        {/* Main name with letter-by-letter animation and write-on effect */}
        <div className="relative">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-['Alex_Brush',cursive] tracking-wide relative">
            {letters.map((letter, index) => (
              <span
                key={index}
                className={`inline-block transition-all duration-700 ease-out relative ${
                  showName 
                    ? 'opacity-100 translate-y-0 filter blur-0' 
                    : 'opacity-0 translate-y-8 filter blur-sm'
                }`}
                style={{
                  transitionDelay: showName ? `${index * 40}ms` : '0ms',
                  background: letter === ' ' ? 'transparent' : 'linear-gradient(135deg, #a855f7, #ec4899, #f472b6)',
                  backgroundClip: letter === ' ' ? 'unset' : 'text',
                  WebkitBackgroundClip: letter === ' ' ? 'unset' : 'text',
                  color: letter === ' ' ? 'transparent' : 'transparent',
                  textShadow: showName ? '0 0 40px rgba(168, 85, 247, 0.4), 0 0 20px rgba(236, 72, 153, 0.3)' : 'none',
                  marginRight: letter === ' ' ? '1rem' : '0',
                  filter: showName ? 'drop-shadow(0 4px 20px rgba(168, 85, 247, 0.3))' : 'none'
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
                
                {/* Shimmer effect for each letter */}
                {showName && (
                  <span 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                    style={{
                      animation: `shimmer 1.5s ease-out ${index * 40 + 500}ms`,
                      animationFillMode: 'both'
                    }}
                  />
                )}
              </span>
            ))}
          </h1>
          
          {/* Write-on effect overlay */}
          {showWriteOn && (
            <div className="absolute inset-0 pointer-events-none">
              <svg 
                className="w-full h-full" 
                viewBox="0 0 800 200" 
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))'
                }}
              >
                <path
                  d="M 50 100 Q 150 80 250 100 T 450 100 Q 550 90 650 100 Q 700 95 750 100"
                  stroke="rgba(255, 255, 255, 0.9)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  className="animate-draw-path"
                />
              </svg>
            </div>
          )}
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
        
        @import url('https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap');
      `}</style>
    </div>
  );
};

export default IntroAnimation;