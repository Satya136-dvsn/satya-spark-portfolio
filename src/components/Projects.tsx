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
    <section id="projects" className="py-12 px-6 relative z-10 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight py-2">
          Projects
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === category
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                : 'bg-white/10 text-gray-300 border border-white/20 hover:bg-white/20 hover:text-white'
                }`}
            >
              {category}
              {activeFilter !== category && (
                <span className="ml-2 text-xs opacity-60">
                  ({category === 'All' ? projects.length : projects.filter(p => p.category === category).length})
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} onClick={() => setSelectedProject(project)}>
              {/* Wrapped in a button-like div to handle interaction, but using State driven Dialog below */}
              <div
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 group cursor-pointer flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </h3>
                  <span className={`shrink-0 px-3 py-1 rounded-full text-xs font-semibold ${project.status === 'Completed'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                    {project.status}
                  </span>
                </div>

                <p className="text-sm text-gray-400 mb-3">{project.period}</p>
                <p className="text-gray-300 mb-3 leading-relaxed text-sm flex-grow line-clamp-3">{project.description}</p>

                {/* Impact metrics */}
                {project.impact && (
                  <div className="mb-3 p-2 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <p className="text-xs text-green-400 font-medium line-clamp-1">✓ {project.impact}</p>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-lg text-xs text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-400">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="mt-auto pt-4 border-t border-white/10 flex justify-center">
                  <span className="text-purple-300 text-sm group-hover:text-white transition-colors">Click for details</span>
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
          <DialogContent className="sm:max-w-[700px] bg-[#0a0a1f]/95 backdrop-blur-xl border-purple-500/20 text-white max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <div className="flex gap-2 mb-2">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${selectedProject.status === 'Completed' ? 'bg-green-500/10 text-green-400 border-green-500/30' : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30'}`}>{selectedProject.status}</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] bg-blue-500/10 text-blue-300 border border-blue-500/20">{selectedProject.category}</span>
                  </div>
                  <DialogTitle className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-gray-400">
                    {selectedProject.period}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 pt-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider">Project Overview</h4>
                    <div className="text-gray-200 leading-relaxed text-sm bg-white/5 p-4 rounded-lg border border-white/10">
                      {selectedProject.description}
                    </div>
                  </div>

                  {selectedProject.impact && (
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-green-400 uppercase tracking-wider">Key Impact</h4>
                      <div className="flex items-start gap-2 bg-green-500/5 p-3 rounded-lg border border-green-500/10">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                        <p className="text-gray-200 text-sm">{selectedProject.impact}</p>
                      </div>
                    </div>
                  )}

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-300 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedProject.github && (
                    <div className="pt-4 border-t border-white/10">
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex justify-center items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg font-semibold transition-all shadow-lg shadow-purple-500/25 group"
                      >
                        <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        View Source Code
                      </a>
                    </div>
                  )}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
