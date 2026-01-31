import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [showLogo, setShowLogo] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Start logo animation
    const logoTimer = setTimeout(() => setShowLogo(true), 100);

    // Start name animation
    const nameTimer = setTimeout(() => setShowName(true), 800);

    // Show Enter button
    const buttonTimer = setTimeout(() => setShowButton(true), 2500);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(nameTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(onComplete, 800); // Wait for exit animation
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a1f] transition-all duration-800 ${isExiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100'}`}>
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>

      <div className="text-center relative flex flex-col items-center z-10 px-4">
        {/* DVS Logo */}
        <div className="mb-12 relative group perspective-1000">
          <div className={`relative transition-all duration-1000 ease-out transform ${showLogo ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-10 rotate-x-90'}`}>
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <img
              src="/lovable-uploads/c51f92f6-acbc-4922-996a-d8b6eebdbddc.png"
              alt="DVS Logo"
              className="w-32 h-32 md:w-40 md:h-40 relative z-10 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
            />
          </div>
        </div>

        {/* Name Reveal */}
        <div className={`transition-all duration-1000 delay-300 ${showName ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-100 to-gray-300 bg-clip-text text-transparent mb-4 tracking-tight drop-shadow-sm font-['Poppins']">
            Duba Venkata Satyanarayana
          </h1>
          <p className="text-gray-400 text-lg md:text-xl tracking-widest uppercase font-light">
            Full Stack Developer & Cloud Specialist
          </p>
        </div>

        {/* Enter Button */}
        <div className={`mt-16 transition-all duration-1000 delay-500 ${showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button
            onClick={handleEnter}
            className="group relative px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-full border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative flex items-center gap-3">
              <span className="text-white font-medium tracking-wide">Enter Portfolio</span>
              <ArrowRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;