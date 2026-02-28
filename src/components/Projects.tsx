import { Github, ExternalLink, Activity, Network, ChevronRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
    category: "Backend Systems",
    fullDescription: "Aerofisc is a comprehensive personal finance command center designed to handle real-time tracking for multiple concurrent users. It integrates AI-powered insights, predictive analytics, and enterprise-grade security.",
    features: [
      "Predictive Analytics: Forecasts future expenses using historical data and linear regression",
      "Smart Categorization: Automatically categorizes transactions using ML logic",
      "Voice Commands: Integrated voice-to-action engine for hands-free management",
      "Enterprise Security: JWT authentication, RBAC, and data encryption at rest/transit"
    ]
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
    category: "Full Stack applications",
    fullDescription: "An advanced Business Intelligence platform integrating Google's Gemini AI to provide actionable business insights from raw data. Features a zero-knowledge architecture processing sensitive data in isolated environments.",
    features: [
      "Predictive Analytics: Forecasting modules for Churn, CLV, and Demand",
      "Explainable AI (XAI): Real-time SHAP value generation for prediction transparency",
      "LLM-Powered Insights: Integrated RAG chat for conversational data analysis",
      "Security & Governance: Zero-Knowledge Architecture, RBAC, and comprehensive Audit Logging"
    ]
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
    category: "Hardware Engineering",
    fullDescription: "A custom FPGA hardware architecture that significantly accelerates 32-bit multiplication operations. It intelligently balances the processing speed of Vedic mathematics with the area efficiency of the Karatsuba algorithm.",
    features: [
      "Decomposes 32-bit multiplication into four 16x16 partial products",
      "Lower-Lower & Lower-Upper partial products computed using Karatsuba 16x16",
      "Upper-Lower & Upper-Upper partial products computed using Vedic 16x16",
      "Achieved substantial reduction in critical path delay compared to standard array multipliers"
    ]
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
    category: "Data & Analytics",
    fullDescription: "A quantitative finance project utilizing mathematical optimization techniques to construct optimal stock portfolios, balancing expected returns against market risk.",
    features: [
      "Portfolio optimization using Mean-Variance and Efficient Frontier strategies",
      "In-depth risk and return analysis",
      "Advanced data visualization of portfolio performance metrics",
      "Direct integration with live financial data sources for real-world analysis"
    ]
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
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="group relative bg-card border border-border/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(0,240,255,0.05)] cursor-pointer">
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
                        <div className="flex items-start gap-2 text-sm text-muted-foreground bg-secondary/30 p-3 rounded-lg border border-border/50 leading-snug group-hover:bg-secondary/50 transition-colors">
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

                      {/* Interaction Hint */}
                      <div className="pt-4 flex items-center justify-end md:justify-start">
                        <div className="inline-flex items-center gap-2 text-primary font-medium text-sm px-4 py-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all border border-primary/20 group-hover:border-primary/40 shadow-sm">
                          <span>Click for Details</span>
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent className="max-w-3xl bg-card border-border/50 text-foreground max-h-[85vh] overflow-y-auto w-[90vw]">
                <DialogHeader className="mb-6">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <DialogTitle className="text-2xl md:text-3xl font-bold glow-text pr-12">
                      {project.title}
                    </DialogTitle>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                      {project.status}
                    </span>
                    <span className="text-sm font-mono text-muted-foreground">{project.period}</span>
                  </div>
                </DialogHeader>

                <div className="space-y-8">
                  {/* High Level Overview */}
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-3 border-b border-border/50 pb-2 flex items-center gap-2">
                      <Activity className="w-5 h-5 text-primary" /> Overview & Impact
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.fullDescription}
                    </p>
                    <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                      <p className="text-sm font-semibold text-primary/90 leading-snug">
                        {project.impact}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Key Technical Features */}
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-3 border-b border-border/50 pb-2 flex items-center gap-2">
                        <Network className="w-5 h-5 text-primary" /> Architectural Details
                      </h4>
                      <div className="bg-background border border-border/50 p-3 rounded-lg font-mono text-sm text-primary/90 mb-4 inline-block">
                        {project.miniArchitecture}
                      </div>
                      <ul className="space-y-2">
                        {project.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2 text-sm text-foreground/80 leading-snug">
                            <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech & Links */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-bold text-foreground mb-3 border-b border-border/50 pb-2">
                          Technology Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <span key={i} className="px-3 py-1.5 bg-secondary border border-border rounded text-xs text-foreground/90 font-mono font-medium shadow-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="bg-background/50 border border-border/50 rounded-xl p-5 mt-auto">
                        <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Repository & Access</h4>
                        <div className="flex flex-col gap-3">
                          {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-2.5 bg-secondary hover:bg-secondary/80 text-foreground border border-border rounded-lg text-sm font-medium transition-colors">
                              <Github className="w-4 h-4" /> View Source Code
                            </a>
                          )}
                          {project.demo && (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-2.5 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 rounded-lg text-sm font-medium transition-colors">
                              <ExternalLink className="w-4 h-4" /> Launch Live Demo
                            </a>
                          )}
                          {!project.github && !project.demo && (
                            <p className="text-xs text-muted-foreground text-center">Repository details are confidential or unavailable.</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
