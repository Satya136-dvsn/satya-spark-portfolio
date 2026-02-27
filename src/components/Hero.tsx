import { useEffect, useState } from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface HeroProps {
  delayAnimation?: boolean;
}

const Hero = ({ delayAnimation = false }: HeroProps) => {
  // Animation delay logic kept for props API compatibility, but unused state removed for performance.
  useEffect(() => {
    // Kept to satisfy linter if needed, or can be fully removed. 
    // For now, removing the heavy interval logic.
  }, [delayAnimation]);

  const handleProfileClick = () => {
    // Open the image in a new tab for preview
    window.open('/lovable-uploads/DSC_1452.jpg', '_blank');
  };

  const { toast } = useToast();

  const handleResumeDownload = () => {
    toast({
      title: "📄 Resume Download Started!",
      description: "Thank you for your interest. The resume will open in a new tab.",
    });
  };

  return (
    <section id="home" className="min-h-[85vh] flex items-center relative z-10 px-6 pt-16 pb-8 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16">

          {/* Left Content - Text */}
          <div className="flex-1 text-center lg:text-left space-y-5 z-10">
            <div className="inline-block px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-xs font-medium mb-1 animate-fade-in shadow-[0_0_15px_rgba(168,85,247,0.1)]">
              👋 Welcome to my portfolio
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent leading-[1.1] tracking-tight">
              Duba Venkata <br />
              Satyanarayana
            </h1>

            <div className="text-base md:text-xl text-gray-300 font-medium tracking-wide">
              Full Stack Developer | <span className="text-purple-400 font-semibold">Java & Cloud Specialist</span>
            </div>

            <p className="text-sm md:text-base text-gray-400 max-w-xl leading-relaxed mx-auto lg:mx-0">
              Transforming complex problems into elegant solutions.
              Electronics Engineering student building scalable full-stack applications and intelligent systems with modern technologies.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2">
              <a
                href="https://github.com/Satya136-dvsn"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105"
              >
                View Projects
              </a>
              <a
                href="https://drive.google.com/file/d/11rZ6GyvXbUFW7T33JYh07Qk_j9INeN96/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleResumeDownload}
                className="px-6 py-2.5 border border-purple-500/30 bg-purple-500/5 rounded-lg text-purple-300 text-sm font-semibold hover:bg-purple-500/10 transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </div>

            {/* Quick Tech Stack */}
            <div className="pt-6 border-t border-white/5 mt-6 max-w-xl mx-auto lg:mx-0">
              <p className="text-xs text-gray-400 mb-3 font-medium uppercase tracking-wider">Tech Stack</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-1.5">
                {['Java', 'Spring Boot', 'React', 'AWS', 'Python', 'SQL', 'Verilog', 'FPGA', 'Arduino'].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 bg-white/[0.03] hover:bg-white/[0.08] rounded-md text-[11px] md:text-xs text-gray-300 border border-white/5 transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Photo */}
          <div className="relative flex-shrink-0 w-56 h-56 md:w-72 md:h-72 lg:w-[400px] lg:h-[400px] z-10 group">
            {/* Decorative Elements */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-500"></div>

            <div
              className="relative h-full w-full rounded-[1.5rem] overflow-hidden border border-white/10 shadow-2xl cursor-pointer transition-transform duration-500 group-hover:scale-[1.02] bg-slate-900/50"
              onClick={handleProfileClick}
            >
              <img
                src="/lovable-uploads/DSC_1452_optimized.jpg"
                alt="Duba Venkata Satyanarayana"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                fetchPriority="high"
                width="400"
                height="400"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 lg:bottom-6 lg:-right-6 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-xl shadow-xl animate-bounce delay-1000 hidden md:block group-hover:bg-white/20 transition-colors">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-green-500/20 rounded-md">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <p className="text-[10px] text-gray-300 font-medium">Status</p>
                  <p className="text-xs text-white font-bold tracking-wide">Open for work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
