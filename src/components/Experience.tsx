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
    <section id="experience" className="py-16 px-6 relative z-10">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-purple-400 text-xs font-semibold tracking-[0.2em] uppercase mb-2">Career Path</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Experience
          </h2>
          <div className="mt-3 mx-auto w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/20 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-6 md:pl-16 group">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-6 top-2 -translate-x-1/2">
                  <div className="w-3 h-3 rounded-full bg-purple-500 border-[3px] border-[#040914] shadow-[0_0_10px_rgba(168,85,247,0.5)] group-hover:shadow-[0_0_15px_rgba(168,85,247,0.7)] transition-shadow duration-300" />
                </div>

                {/* Card */}
                <div className="bg-white/[0.02] backdrop-blur-sm rounded-xl p-5 md:p-6 border border-white/[0.05] hover:border-purple-500/30 hover:-translate-y-0.5 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5">
                  {/* Header row */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="text-base font-bold text-white mb-0.5 tracking-wide">{exp.title}</h3>
                      <p className="text-purple-400 font-medium text-[13px]">{exp.company}</p>
                    </div>
                    <div className="md:text-right shrink-0">
                      <p className="text-gray-400 text-xs">{exp.period}</p>
                      <span className="inline-flex items-center gap-1.5 mt-1 text-[10px] uppercase tracking-wider font-semibold text-emerald-400">
                        <span className="w-1 h-1 rounded-full bg-emerald-400" />
                        Grade: {exp.grade}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-400 text-[12px] leading-relaxed mb-4">{exp.description}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-0.5 rounded-md text-[10px] font-medium text-gray-300 bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Certificate Link */}
                  {exp.certificate && (
                    <a
                      href={exp.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium text-purple-300 bg-purple-500/[0.05] border border-purple-500/[0.1] hover:bg-purple-500/[0.1] hover:border-purple-500/20 transition-all duration-200 group/btn"
                    >
                      <ExternalLink className="w-3 h-3 text-purple-400 group-hover/btn:text-purple-300 transition-colors" />
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
