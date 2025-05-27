import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isProfileClicked, setIsProfileClicked] = useState(false);
  const fullText = "Electronics & Web Development Enthusiast";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const handleProfileClick = () => {
    setIsProfileClicked(true);
    // Open the image in a new tab for preview
    window.open('/lovable-uploads/95f43a83-175b-4961-9937-4e95596ecffd.png', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative z-10 px-6 pt-20">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8 relative">
          <div 
            className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1 cursor-pointer transition-all duration-300 hover:scale-105"
            onClick={handleProfileClick}
          >
            <div className="w-full h-full rounded-full bg-slate-900 overflow-hidden">
              <img 
                src="/lovable-uploads/95f43a83-175b-4961-9937-4e95596ecffd.png" 
                alt="Duba Venkata Satyanarayana"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-fade-in">
          Duba Venkata Satyanarayana
        </h1>

        <div className="text-xl md:text-2xl text-gray-300 mb-6 h-8">
          <span className="border-r-2 border-purple-400 animate-pulse">{text}</span>
        </div>

        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Passionate engineering student specializing in electronics, programming, and web development. 
          Seeking to grow technical and management skills through hands-on experience in robotics, 
          cloud computing, and data analytics.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a 
            href="https://github.com/Satya136-dvsn" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-purple-500/25"
          >
            View My Work
          </a>
          <a 
            href="https://drive.google.com/file/d/18bDgKhjtqWTClQY3BM2y247JA_ww6Zah/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-purple-400 rounded-full text-purple-400 font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
          >
            Download Resume
          </a>
        </div>

        <div className="animate-bounce">
          <ArrowDown size={32} className="mx-auto text-purple-400" />
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-400/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-pink-400/10 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-blue-400/10 rounded-full animate-pulse delay-500"></div>
    </section>
  );
};

export default Hero;
