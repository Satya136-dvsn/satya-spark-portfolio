import { Github, ExternalLink, Activity, Network } from 'lucide-react';

const projects = [
  {
    title: "Aerofisc",
    period: "Sep 2025 – Dec 2025",
    impact: "Built scalable architecture for multi-user real-time financial management.",
    engineeringFocus: "Secure multi-user data persistence and automated tracking",
    miniArchitecture: "Java Backend → REST API → MySQL",
    tech: ["Java", "MySQL", "REST API", "Spring Boot"],
    status: "Production",
    github: "https://github.com/Satya136-dvsn/budgetwise_tracker_ai_driven",
    demo: "",
    category: "Backend Systems"
  },
  {
    title: "Biz Stratosphere - AI BI Platform",
    period: "Nov 2025 – Present",
    impact: "Zero operational cost with production-ready AI capabilities and 98% test coverage.",
    engineeringFocus: "Serverless platform with hallucination-proof AI insights",
    miniArchitecture: "React → Supabase → PostgreSQL + Gemini AI",
    tech: ["React", "TypeScript", "Supabase", "Gemini AI"],
    status: "Active",
    github: "https://github.com/Satya136-dvsn/biz-stratosphere",
    demo: "",
    category: "Full Stack applications"
  },
  {
    title: "32-Bit Hybrid Multiplier using FPGA",
    period: "Aug 2024 - Apr 2025",
    impact: "Achieved 40% higher computational efficiency over standard methods.",
    engineeringFocus: "Hybrid algorithm design combining Vedic and Karatsuba",
    miniArchitecture: "Verilog RTL → Synthesis → FPGA Hardware",
    tech: ["FPGA", "Verilog", "Digital Design"],
    status: "Completed",
    github: "https://github.com/Satya136-dvsn/32-Bit-Hybrid-Multiplier-using-FPGA",
    demo: "",
    category: "Hardware Engineering"
  },
  {
    title: "Stock Market Portfolio Optimization",
    period: "Sep 2024",
    impact: "Generated data-driven allocation strategies based on risk-return analysis of 50+ stocks.",
    engineeringFocus: "Statistical modeling and algorithm optimization",
    miniArchitecture: "Market Data → Python Pandas → Allocation Model",
    tech: ["Python", "Pandas", "Scipy", "Optimization Algorithms"],
    status: "Completed",
    github: "https://github.com/Satya136-dvsn/Stock-market-portfolio-optimization",
    demo: "",
    category: "Data & Analytics"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 relative z-10 bg-background/50 border-y border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight glow-text">
            Project Showcase
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Production-grade systems demonstrating architectural depth and engineering correctness.
          </p>
          <div className="w-24 h-1 bg-primary mt-6 rounded-full shadow-[0_0_15px_rgba(0,240,255,0.3)]"></div>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(0,240,255,0.05)]"
            >
              <div className="p-6 md:p-8 flex flex-col lg:flex-row gap-8">

                {/* Left Side: Core Info */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                          {project.status}
                        </span>
                      </div>
                      <p className="text-sm font-mono text-muted-foreground">{project.period} • {project.category}</p>
                    </div>
                  </div>

                  {/* Impact & Focus */}
                  <div className="pt-2">
                    <p className="text-base text-foreground/90 leading-snug mb-3">
                      <strong>Impact:</strong> {project.impact}
                    </p>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground bg-secondary/30 p-3 rounded-lg border border-border/50 leading-snug">
                      <Activity className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span><strong>Engineering Focus:</strong> {project.engineeringFocus}</span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Architecture & Tech */}
                <div className="flex-1 lg:max-w-md space-y-6">
                  {/* Mini Architecture */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-2">
                      <Network className="w-4 h-4" /> System Architecture
                    </h4>
                    <div className="bg-background border border-border/50 p-3 rounded-lg font-mono text-sm text-primary/90">
                      {project.miniArchitecture}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-2.5 py-1 bg-secondary border border-border rounded text-xs text-foreground/80 font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 text-foreground border border-border rounded-lg text-sm font-medium transition-colors">
                        <Github className="w-4 h-4" /> Source
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 rounded-lg text-sm font-medium transition-colors">
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    )}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
