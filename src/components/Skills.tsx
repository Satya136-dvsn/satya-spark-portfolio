import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "HTML/CSS"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Spring Boot", "Node.js", "TensorFlow.js", "Tailwind CSS"]
    },
    {
      title: "Tools & Platforms",
      skills: ["AWS", "Git", "Docker", "Power BI", "Tableau", "MySQL", "PostgreSQL"]
    },
    {
      title: "Domains",
      skills: ["Full Stack Development", "Data Analytics", "FPGA Design", "Embedded Systems", "REST APIs"]
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 px-6 relative z-10">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Skills
          </h2>
          <div className="w-12 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Skills List */}
        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-start gap-4">
              {/* Category Label */}
              <div className="md:w-48 flex-shrink-0">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex-1 flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="bg-white/10 hover:bg-white/15 text-white border-0 px-3 py-1.5 text-sm font-medium rounded-md transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Subtle Divider */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-white">9+</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Projects</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">11+</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Certifications</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">1</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Publication</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">2</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Internships</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
