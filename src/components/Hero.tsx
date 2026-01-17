
import { useEffect, useState } from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

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

  const { toast } = useToast();

  const handleResumeDownload = () => {
    toast({
      title: "📄 Resume Download Started!",
      description: "Thank you for your interest. The resume will open in a new tab.",
    });
    // Track download (you can add analytics here)
    console.log('Resume downloaded at:', new Date().toISOString());
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

        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-fade-in leading-tight py-2">
          Duba Venkata Satyanarayana
        </h1>

        <div className="text-2xl md:text-3xl font-semibold text-white mb-6">
          Full Stack Developer | Java & Cloud Specialist
        </div>

        <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
          Electronics Engineering student with expertise in Java, Python, and modern web technologies.
          Proven track record in full-stack development, data analytics, and embedded systems.
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 max-w-3xl mx-auto">
          {['Java', 'Python', 'JavaScript', 'React', 'Spring Boot', 'MySQL', 'AWS', 'Arduino'].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-purple-400/30 rounded-full text-sm font-medium text-purple-300 hover:bg-white/20 transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

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
            href="https://drive.google.com/file/d/1pGHlX5_5QleUNegN7roQsLPvd0i9kdFu/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleResumeDownload}
            className="px-8 py-3 border-2 border-purple-400 rounded-full text-purple-400 font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
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
