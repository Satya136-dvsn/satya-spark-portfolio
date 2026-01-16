
const Experience = () => {
  const experiences = [
    {
      title: "Infosys Springboard 6.0 Internship",
      company: "Infosys Springboard",
      period: "September 21, 2024 - Present",
      grade: "Ongoing",
      description: "Comprehensive training and hands-on experience in Java Full Stack development, covering both frontend and backend technologies.",
      skills: ["Java", "Spring Boot", "React", "Full Stack Development", "REST APIs", "Database Management"],
      certificate: "https://drive.google.com/file/d/1xLbMRDrlONk-4vwuM-ZmQql2KRmQ-c6U/view?usp=drive_link"
    },
    {
      title: "Robotics with Arduino Internship",
      company: "Shri MK Embedded Solutions",
      period: "May 20, 2024 - June 20, 2024",
      grade: "A+",
      description: "Gained hands-on experience in designing, programming, and deploying robotic systems using Arduino.",
      skills: ["Arduino Programming", "Robotics", "Embedded Systems", "Circuit Design"]
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
                <div className="mt-4 pt-4 border-t border-white/10">
                  <a
                    href={exp.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm font-semibold"
                  >
                    📜 View Certificate →
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
