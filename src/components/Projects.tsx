import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

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
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 group cursor-pointer flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.status === 'Completed'
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                  : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                  {project.status}
                </span>
              </div>

              <p className="text-sm text-gray-400 mb-3">{project.period}</p>
              <p className="text-gray-300 mb-3 leading-relaxed text-sm flex-grow">{project.description}</p>

              {/* Impact metrics */}
              {project.impact && (
                <div className="mb-3 p-2 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <p className="text-xs text-green-400 font-medium">✓ {project.impact}</p>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-lg text-xs text-purple-300 hover:scale-105 transition-transform duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Category badge */}
              <div className="mb-4">
                <span className="px-2 py-1 bg-blue-500/20 border border-blue-400/30 rounded text-xs text-blue-300">
                  {project.category}
                </span>
              </div>

              {/* Project links with Button Style */}
              {project.github && (
                <div className="mt-auto -mx-6 px-6 pt-4 border-t border-white/10 flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 border border-purple-500/50 hover:border-purple-400 rounded-lg text-white font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] group/btn relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <Github className="w-4 h-4 text-purple-200 group-hover/btn:text-white transition-colors" />
                    <span className="text-purple-100 group-hover/btn:text-white transition-colors tracking-wide">
                      GitHub Code
                    </span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Show message if no projects in category */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
