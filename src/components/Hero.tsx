import { ArrowRight, Download, Github } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface HeroProps {
  delayAnimation?: boolean;
}

const Hero = ({ delayAnimation = false }: HeroProps) => {
  const { toast } = useToast();

  const handleResumeDownload = () => {
    toast({
      title: "📄 Resume Download Started!",
      description: "Thank you for your interest. The resume will open in a new tab.",
    });
  };

  return (
    <section id="home" className="min-h-[90vh] flex flex-col items-center justify-center relative z-10 px-6 pt-24 pb-12 overflow-hidden bg-transparent">
      <div className="container mx-auto max-w-5xl flex flex-col items-center text-center">

        {/* Top Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 border border-primary/20 rounded-full text-foreground/80 text-xs md:text-sm font-medium mb-8 animate-fade-in shadow-[0_0_15px_rgba(0,240,255,0.05)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Open to Backend, Full Stack, and Data Engineering roles | 2025 Graduate | Immediate Availability
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tighter mb-4 glow-text animate-slide-up" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
          Duba Venkata Satyanarayana
        </h1>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 mb-6 animate-slide-up tracking-tight" style={{ animationDelay: '150ms', animationFillMode: 'both' }}>
          Engineering Scalable Systems Across Backend, Full Stack & Data
        </h2>

        {/* Subtext */}
        <p className="text-base md:text-xl text-muted-foreground font-medium tracking-wide max-w-2xl mb-12 animate-slide-up" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
          I design REST APIs, SQL-backed systems, cloud-ready applications, and data-driven platforms.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up w-full sm:w-auto" style={{ animationDelay: '250ms', animationFillMode: 'both' }}>
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="https://drive.google.com/file/d/11rZ6GyvXbUFW7T33JYh07Qk_j9INeN96/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleResumeDownload}
            className="w-full sm:w-auto px-8 py-3 border border-primary/30 bg-secondary/30 rounded-lg text-foreground font-semibold hover:bg-secondary/70 transition-all duration-300 flex items-center justify-center gap-2 hover:border-primary/50"
          >
            <Download className="w-4 h-4 text-primary" />
            Download Resume
          </a>

          <a
            href="https://github.com/Satya136-dvsn"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3 border border-border bg-background/50 rounded-lg text-foreground font-semibold hover:bg-secondary transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>

      </div>

      {/* Decorative gradient orbs for futuristic feel */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  );
};

export default Hero;
