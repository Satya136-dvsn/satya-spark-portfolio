import { Badge } from "@/components/ui/badge";
import { Code2, Wrench, Lightbulb, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Frameworks",
      icon: Code2,
      skills: ["Java", "Python", "SQL", "JavaScript", "React", "HTML5", "CSS3", "Verilog"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Technical Skills",
      icon: Wrench,
      skills: ["Data Analysis", "REST API", "Full Stack Development", "FPGA Design", "MySQL", "AWS Cloud Basics", "Power BI"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Tools & Technologies",
      icon: Lightbulb,
      skills: ["Git/GitHub", "VS Code", "Matlab", "Xilinx Vivado", "Tableau", "Streamlit"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Leadership", "Problem Solving", "Team Collaboration", "Communication", "Event Management"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            Technical Competencies
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            A comprehensive toolkit built through hands-on experience and continuous learning
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={categoryIndex}
                className="group bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-20`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      className="bg-white/5 hover:bg-white/10 text-gray-200 border border-white/10 px-2.5 py-1 text-xs font-medium transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Strengths */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 text-white">
            Core Strengths
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Problem Solving", icon: "🧠" },
              { title: "Fast Learner", icon: "⚡" },
              { title: "Team Leadership", icon: "👥" },
              { title: "Innovation", icon: "💡" }
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-purple-400/30 transition-all duration-300"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <h4 className="text-sm font-semibold text-white">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
