import { ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Infosys Springboard 6.0 Internship",
      company: "Infosys Springboard",
      period: "Sept 2025 - Dec 2025",
      grade: "Completed",
      description: "Comprehensive training and hands-on experience in Java Full Stack development, covering both frontend and backend technologies.",
      skills: ["Java", "Spring Boot", "React", "Full Stack Development", "REST APIs", "Database Management"],
      certificate: "https://drive.google.com/file/d/1gHR9Gq92zqMiFZbXu4BkukEceGANdkCq/view?usp=sharing"
    },
    {
      title: "Robotics with Arduino Internship",
      company: "Shri MK Embedded Solutions",
      period: "May 20, 2024 - June 20, 2024",
      grade: "A+",
      description: "Gained hands-on experience in designing, programming, and deploying robotic systems using Arduino.",
      skills: ["Arduino Programming", "Robotics", "Embedded Systems", "Circuit Design"],
      certificate: "https://drive.google.com/file/d/10KuBOrpprgsHmYgdh0fPO3oJQfWiBuSt/view?usp=drive_link"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight py-2">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-xl text-purple-400 font-semibold">{exp.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-300 font-medium">{exp.period}</p>
                  <p className="text-green-400 font-bold">Grade: {exp.grade}</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full text-sm text-purple-300 hover:scale-105 transition-transform duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Certificate Link */}
              {exp.certificate && (
                <div className="mt-6 pt-6 border-t border-white/10 -mx-8 px-8 flex">
                  <a
                    href={exp.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 border border-purple-500/50 hover:border-purple-400 rounded-lg text-white font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] group/btn relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <ExternalLink className="w-4 h-4 text-purple-200 group-hover/btn:text-white transition-colors" />
                    <span className="text-purple-100 group-hover/btn:text-white transition-colors tracking-wide">
                      View Certificate
                    </span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Timeline decoration */}
        <div className="mt-12 flex justify-center">
          <div className="w-2 h-20 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
