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
    <section id="experience" className="py-24 px-6 relative z-10">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">Career Path</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Experience
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/20 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-20 group">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2">
                  <div className="w-4 h-4 rounded-full bg-purple-500 border-4 border-[#030014] shadow-[0_0_12px_rgba(168,85,247,0.5)] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.7)] transition-shadow duration-300" />
                </div>

                {/* Card */}
                <div className="bg-white/[0.03] backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/[0.06] hover:border-purple-500/20 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5">
                  {/* Header row */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-purple-400 font-medium text-sm">{exp.company}</p>
                    </div>
                    <div className="md:text-right shrink-0">
                      <p className="text-gray-400 text-sm">{exp.period}</p>
                      <span className="inline-flex items-center gap-1.5 mt-1 text-xs font-semibold text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        Grade: {exp.grade}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-400 text-[13px] leading-relaxed mb-5">{exp.description}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium text-gray-300 bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] transition-colors"
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
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-medium text-purple-300 bg-purple-500/[0.06] border border-purple-500/[0.1] hover:bg-purple-500/[0.12] hover:border-purple-500/20 transition-all duration-200 group/btn"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-purple-400 group-hover/btn:text-purple-300 transition-colors" />
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
