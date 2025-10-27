import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "SQL", "HTML5", "CSS3"]
    },
    {
      title: "Technical Skills",
      skills: ["Data Analysis & Visualization", "Arduino Programming", "Power BI", "Tableau", "AWS Cloud", "FPGA Design", "REST API", "MySQL", "Full Stack Development"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Microsoft Office", "Adobe Suite", "Git", "Project Management"]
    },
    {
      title: "Soft Skills",
      skills: ["Leadership", "Event Coordination", "Student Engagement", "Team Collaboration", "Problem Solving", "Communication"]
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight py-2">
          Technical Competencies
        </h2>

        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 text-purple-300 border-b border-white/10 pb-3">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="bg-white/10 hover:bg-white/20 text-white border-white/20 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core competencies summary */}
        <div className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {[
            { title: "Problem Solving", desc: "Analytical & Critical Thinking" },
            { title: "Innovation", desc: "Creative Solutions" },
            { title: "Fast Learner", desc: "Quick Adaptation" },
            { title: "Team Leadership", desc: "Collaborative Excellence" }
          ].map((item, index) => (
            <div 
              key={index}
              className="text-center p-3 sm:p-4 md:p-6 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/10 hover:border-purple-400/30 transition-all duration-200"
            >
              <h4 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1 sm:mb-2">{item.title}</h4>
              <p className="text-gray-400 text-xs sm:text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
