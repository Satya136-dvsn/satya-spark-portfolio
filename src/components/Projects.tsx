import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  // We can use a simpler approach: Render the Dialog for each item or use a selectedProject state.
  // Given the simplicity, rendering a Dialog for each is fine, OR we can just have one Dialog and control it.
  // Let's use specific Trigger on the Card for simplicity if possible, but for dynamic data 'selectedProject' is better.
  // However, Trigger wrapping the card is the most RADIX-way.

  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const projects = [
    {
      title: "Java Budget AI-Driven Expense Tracker",
      period: "September 2025 – December 2025",
      description: "Problem: Users struggle with manual expense tracking and lack personalized insights. solution: Built a full-stack automated tracker with secure multi-user data persistence. Outcome: Delivered scalable architecture for real-time financial management.",
      tech: ["Java", "MySQL", "REST API", "Full Stack", "Backend"],
      status: "Completed",
      impact: "Building scalable architecture for multi-user expense management",
      github: "https://github.com/Satya136-dvsn/budgetwise_tracker_ai_driven",
      category: "Full Stack"
    },
    {
      title: "32-Bit Hybrid Multiplier using FPGA",
      period: "August 2024 - April 2025",
      description: "Problem: Standard multipliers are inefficient for high-speed DSP applications. Solution: Designed a hybrid multiplier combining Vedic and Karatsuba algorithms on FPGA. Outcome: Achieved 40% higher computational efficiency.",
      tech: ["FPGA", "Verilog", "Digital Design", "Algorithms"],
      status: "Completed",
      impact: "40% improvement in multiplication efficiency over standard methods",
      github: "https://github.com/Satya136-dvsn/32-Bit-Hybrid-Multiplier-using-FPGA",
      category: "FPGA/VLSI"
    },
    {
      title: "Biz Stratosphere - AI Business Intelligence Platform",
      period: "November 2025 – Present",
      description: "Problem: Small businesses lack affordable BI tools with actionable AI insights. Solution: Developed a serverless platform with extensive dashboards and hallucination-proof AI chat. Outcome: Zero-cost architecture with 96% ML prediction accuracy.",
      tech: ["React", "TypeScript", "Supabase", "TensorFlow.js", "PostgreSQL", "Gemini AI"],
      status: "In Progress",
      impact: "Zero operational cost with production-ready AI capabilities and 98% test coverage",
      github: "https://github.com/Satya136-dvsn/biz-stratosphere",
      category: "Full Stack"
    },
    {
      title: "Stock Market Portfolio Optimization",
      period: "September 2024",
      description: "Problem: Investors face difficulty in diversifying portfolios for maximum returns. Solution: Implemented statistical models in Python to analyze 50+ stocks. Outcome: Generated data-driven allocation strategies based on risk-return analysis.",
      tech: ["Python", "Data Analysis", "Finance", "Optimization"],
      status: "Completed",
      impact: "Analyzed 50+ stocks with data-driven portfolio recommendations",
      github: "https://github.com/Satya136-dvsn/Stock-market-portfolio-optimization",
      category: "Data Analytics"
    },
    {
      title: "T20 World Cup 2022 Analysis",
      period: "September 2024",
      description: "Problem: Complex sports data is hard to interpret for strategic decisions. Solution: Processed match data using Python pandas and visualization libraries. Outcome: Derived key performance metrics for players and teams.",
      tech: ["Python", "Data Analysis", "Visualization", "Sports Analytics"],
      status: "Completed",
      impact: "Processed 100+ matches with comprehensive player performance metrics",
      github: "https://github.com/Satya136-dvsn/T20-World-cup-2022-analysis",
      category: "Data Analytics"
    },
    {
      title: "Amazon Clone Page",
      period: "May 2024",
      description: "Problem: Replicating complex e-commerce UI logic. Solution: Developed a responsive clone with dynamic product listings. Outcome: Demonstrated proficiency in frontend layout and responsiveness.",
      tech: ["HTML", "CSS", "JavaScript", "Web Development"],
      status: "Completed",
      impact: "Responsive design with 100+ product listings and search",
      github: "https://github.com/Satya136-dvsn/Amazon_clone",
      category: "Web Development"
    }
  ];

  const categories = ['All', 'Full Stack', 'Data Analytics', 'Web Development', 'FPGA/VLSI'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-16 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <p className="text-purple-400 text-xs font-semibold tracking-[0.2em] uppercase mb-2">What I've built</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Projects
          </h2>
          <div className="mt-3 mx-auto w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${activeFilter === category
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md shadow-purple-500/20'
                : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:text-white'
                }`}
            >
              {category}
              {activeFilter !== category && (
                <span className="ml-1.5 opacity-50">
                  ({category === 'All' ? projects.length : projects.filter(p => p.category === category).length})
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project, index) => (
            <div key={index} onClick={() => setSelectedProject(project)}>
              {/* Wrapped in a button-like div to handle interaction, but using State driven Dialog below */}
              <div
                className="bg-white/[0.02] backdrop-blur-sm rounded-xl p-5 border border-white/[0.05] hover:-translate-y-0.5 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300 group cursor-pointer flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-base font-bold text-white group-hover:text-purple-400 transition-colors duration-300 line-clamp-2 pr-2">
                    {project.title}
                  </h3>
                  <span className={`shrink-0 px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-semibold ${project.status === 'Completed'
                    ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                    : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                    }`}>
                    {project.status}
                  </span>
                </div>

                <p className="text-[11px] text-gray-400 mb-2.5">{project.period}</p>
                <p className="text-gray-300 mb-3 leading-[1.6] text-[12px] flex-grow line-clamp-3">{project.description}</p>

                {/* Impact metrics */}
                {project.impact && (
                  <div className="mb-3 p-2 bg-emerald-500/[0.03] border border-emerald-500/10 rounded-md">
                    <p className="text-[11px] text-emerald-400/90 font-medium line-clamp-1">✓ {project.impact}</p>
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-0.5 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/20 rounded-md text-[10px] font-medium text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-md text-[10px] text-gray-400">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="mt-auto pt-3 border-t border-white/5 flex justify-center">
                  <span className="text-purple-300 text-[11px] font-medium group-hover:text-white transition-colors">Click for details</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show message if no projects in category */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No projects found in this category.</p>
          </div>
        )}

        {/* Project Details Modal */}
        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="sm:max-w-[500px] p-0 bg-transparent border-0 shadow-none overflow-visible">
            {selectedProject && (
              <div className="relative group/modal">
                {/* Subtle outer glow */}
                <div className="absolute -inset-px bg-gradient-to-b from-white/15 to-white/5 rounded-2xl" />

                {/* Main container */}
                <div className="relative bg-[#0c0c1d]/95 backdrop-blur-2xl rounded-2xl border border-white/[0.08] shadow-2xl shadow-black/50 overflow-hidden">

                  {/* Subtle top accent */}
                  <div className="h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

                  <div className="p-6">
                    {/* Badges + Close area */}
                    <DialogHeader className="space-y-3 mb-5">
                      <div className="flex items-center gap-2">
                        <span className={`inline-flex items-center gap-1 px-2 py-[3px] rounded-md text-[10px] font-semibold tracking-wide ${selectedProject.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${selectedProject.status === 'Completed' ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                          {selectedProject.status}
                        </span>
                        <span className="px-2 py-[3px] rounded-md text-[10px] font-semibold tracking-wide bg-white/[0.06] text-gray-400">{selectedProject.category}</span>
                      </div>
                      <DialogTitle className="text-[22px] font-semibold text-white/95 leading-tight tracking-[-0.01em]">
                        {selectedProject.title}
                      </DialogTitle>
                      <DialogDescription className="text-[13px] text-gray-500">
                        {selectedProject.period}
                      </DialogDescription>
                    </DialogHeader>

                    {/* Divider */}
                    <div className="h-px bg-white/[0.06] mb-5" />

                    {/* Content */}
                    <div className="space-y-5">
                      {/* Description */}
                      <p className="text-[13px] text-gray-400 leading-[1.7]">
                        {selectedProject.description}
                      </p>

                      {/* Impact */}
                      {selectedProject.impact && (
                        <div className="flex items-start gap-3 px-3.5 py-3 rounded-lg bg-emerald-500/[0.04] border border-emerald-500/[0.08]">
                          <svg className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                          <p className="text-[12px] text-emerald-400/90 leading-relaxed">{selectedProject.impact}</p>
                        </div>
                      )}

                      {/* Tech stack */}
                      <div className="space-y-2">
                        <p className="text-[11px] font-medium text-gray-500 uppercase tracking-widest">Stack</p>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedProject.tech.map((tech) => (
                            <span key={tech} className="px-2.5 py-1 rounded-md text-[11px] font-medium text-gray-300 bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] transition-colors">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-white/[0.06]" />

                      {/* CTA */}
                      {selectedProject.github && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex justify-center items-center gap-2.5 px-5 py-2.5 bg-white/[0.07] hover:bg-white/[0.12] border border-white/[0.08] hover:border-white/[0.15] text-white/90 rounded-lg text-[13px] font-medium transition-all duration-200 group"
                        >
                          <Github className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                          View Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
