const Projects = () => {
  const projects = [
    {
      title: "32-Bit Hybrid Multiplier using FPGA",
      period: "August 2024 - April 2025",
      description: "Creating an efficient 32-bit hybrid multiplier using Vedic and Karatsuba algorithms for improved multiplication efficiency.",
      tech: ["FPGA", "Verilog", "Digital Design", "Algorithms"],
      status: "Completed"
    },
    {
      title: "Stock Market Portfolio Optimization",
      period: "September 2024",
      description: "Optimized stock market portfolios using Python by analyzing price trends, expected returns, volatilities, and correlations for diversification.",
      tech: ["Python", "Data Analysis", "Finance", "Optimization"],
      status: "Completed"
    },
    {
      title: "T20 World Cup 2022 Analysis",
      period: "September 2024",
      description: "Analyzed sports event data to evaluate player and team performance using Python for data-driven insights.",
      tech: ["Python", "Data Analytics", "Visualization", "Sports Analytics"],
      status: "Completed"
    },
    {
      title: "Amazon Clone Page",
      period: "May 2024",
      description: "Developed an Amazon website clone featuring product listings and dynamic search functionality.",
      tech: ["HTML", "CSS", "JavaScript", "Web Development"],
      status: "Completed"
    },
    {
      title: "Mini Calculator",
      period: "April 2024",
      description: "Created a calculator application with clean UI design showcasing problem-solving skills.",
      tech: ["HTML", "CSS", "JavaScript", "UI Design"],
      status: "Completed"
    },
    {
      title: "Snake Game",
      period: "March 2024",
      description: "Built a Snake Game demonstrating web development skills and game mechanics implementation.",
      tech: ["HTML", "CSS", "JavaScript", "Game Development"],
      status: "Completed"
    },
    {
      title: "Arduino Door Lock System",
      period: "June 2023",
      description: "Developed a secure door lock system with Arduino, I2C LCD, and keypad for code-based access control.",
      tech: ["Arduino", "I2C", "LCD", "Security Systems"],
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 relative z-10">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  project.status === 'Completed' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                }`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-sm text-gray-400 mb-3">{project.period}</p>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-lg text-xs text-purple-300 hover:scale-105 transition-transform duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-white/10">
                <button className="text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm font-semibold">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
