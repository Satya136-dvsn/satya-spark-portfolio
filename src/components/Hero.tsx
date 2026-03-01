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
    <section id="home" className="min-h-[90vh] flex flex-col items-center justify-center relative z-10 px-6 pt-32 pb-20 overflow-hidden bg-transparent">
      <div className="container mx-auto max-w-5xl flex flex-col items-center text-center">

        {/* Top Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/30 border border-primary/20 rounded-sm text-foreground/80 text-xs md:text-sm font-medium mb-8 shadow-[0_0_10px_rgba(0,229,255,0.05)]">
          <span className="relative flex h-2 w-2">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Open to Backend, Full Stack, and Data Engineering roles | 2025 Graduate | Immediate Availability
        </div>

        {/* Main Heading */}
        <div className="group relative inline-block cursor-default mb-4 animate-slide-up" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tighter glow-text">
            Duba Venkata Satyanarayana
          </h1>
          {/* Subtle red animated underline under name */}
          <div className="absolute -bottom-2 left-0 h-[2px] w-0 bg-accent group-hover:w-full transition-all duration-300 ease-out"></div>
        </div>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-6 animate-slide-up tracking-tight" style={{ animationDelay: '150ms', animationFillMode: 'both' }}>
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
            className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-sm font-semibold hover:bg-primary/90 transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-[0_0_15px_rgba(0,229,255,0.2)]"
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="https://drive.google.com/file/d/11rZ6GyvXbUFW7T33JYh07Qk_j9INeN96/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleResumeDownload}
            className="w-full sm:w-auto px-8 py-3 border border-border bg-transparent rounded-sm text-foreground font-semibold hover:border-accent hover:bg-secondary/30 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4 text-accent" />
            Download Resume
          </a>

          <a
            href="https://github.com/Satya136-dvsn"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3 border border-border bg-transparent rounded-sm text-foreground font-semibold hover:bg-secondary transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
