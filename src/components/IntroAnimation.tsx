import { useEffect, useState } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [showName, setShowName] = useState(false);
  const [showSubtext, setShowSubtext] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  
  const name = "Duba Venkata Satyanarayana";
  const letters = name.split('');

  useEffect(() => {
    // Start name animation after brief delay
    const nameTimer = setTimeout(() => setShowName(true), 500);
    
    // Show subtext after name animation
    const subtextTimer = setTimeout(() => setShowSubtext(true), 2000);
    
    // Start fade out
    const fadeTimer = setTimeout(() => setFadeOut(true), 3200);
    
    // Complete animation
    const completeTimer = setTimeout(() => onComplete(), 4000);

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(subtextTimer);
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
      </div>

      <div className="text-center relative">
        {/* Main name with letter-by-letter animation */}
        <div className="mb-6 font-['Montserrat',sans-serif]">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider">
            {letters.map((letter, index) => (
              <span
                key={index}
                className={`inline-block transition-all duration-700 ease-out ${
                  showName 
                    ? 'opacity-100 translate-y-0 filter blur-0' 
                    : 'opacity-0 translate-y-8 filter blur-sm'
                }`}
                style={{
                  transitionDelay: showName ? `${index * 50}ms` : '0ms',
                  background: letter === ' ' ? 'transparent' : 'linear-gradient(135deg, #a855f7, #ec4899, #3b82f6)',
                  backgroundClip: letter === ' ' ? 'unset' : 'text',
                  WebkitBackgroundClip: letter === ' ' ? 'unset' : 'text',
                  color: letter === ' ' ? 'transparent' : 'transparent',
                  textShadow: showName ? '0 0 30px rgba(168, 85, 247, 0.3)' : 'none',
                  marginRight: letter === ' ' ? '0.5rem' : '0'
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </h1>
        </div>

        {/* Subtitle with shimmer effect */}
        <div 
          className={`transition-all duration-1000 ease-out ${
            showSubtext 
              ? 'opacity-100 translate-y-0 filter blur-0' 
              : 'opacity-0 translate-y-4 filter blur-sm'
          }`}
        >
          <p className="text-lg md:text-xl font-['Poppins',sans-serif] font-light text-gray-300 tracking-wide relative overflow-hidden">
            <span className="relative z-10">Electronics & Web Development Enthusiast</span>
            {showSubtext && (
              <span 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer"
                style={{
                  animation: 'shimmer 2s ease-in-out infinite',
                  transform: 'translateX(-100%)'
                }}
              />
            )}
          </p>
        </div>

        {/* Elegant loading indicator */}
        <div 
          className={`mt-12 transition-all duration-1000 ${
            showSubtext ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-32 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto relative overflow-hidden">
            <div 
              className="absolute inset-0 bg-gradient-to-r from-white/50 to-white/50 animate-pulse"
              style={{
                animation: 'loadingSlide 2s ease-in-out infinite',
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        
        @keyframes loadingSlide {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }

        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Poppins:wght@300;400;600&display=swap');
      `}</style>
    </div>
  );
};

export default IntroAnimation;