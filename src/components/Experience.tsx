import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: "Java Full Stack Engineering Intern",
    company: "Infosys Springboard",
    period: "Sep 2025 - Dec 2025",
    description: "Designed and implemented robust backend services and integrated frontend components.",
    tech: ["Java", "Spring Boot", "React", "REST APIs", "SQL"]
  },
  {
    title: "Embedded Systems Intern",
    company: "Shri MK Embedded Solutions",
    period: "May 2024 - Jun 2024",
    description: "Developed and deployed robotic systems with a focus on low-level hardware programming.",
    tech: ["Arduino", "C++", "Circuit Design", "Sensors"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative z-10 bg-background">
      <div className="container mx-auto max-w-4xl px-6">

        <div className="flex items-center gap-4 mb-12">
          <Briefcase className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold text-foreground tracking-tight">
            Professional Experience
          </h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 p-6 rounded-sm bg-card border border-border hover:border-primary/50 hover:shadow-[0_0_10px_rgba(0,229,255,0.1)] transition-all relative overflow-hidden group">
              {/* Sharp Red Hover Accent */}
              <div className="absolute left-0 top-0 w-1 h-full bg-accent scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300 z-20"></div>

              <div className="md:w-1/3 shrink-0 relative z-10">
                <h3 className="text-lg font-bold text-foreground mb-1">{exp.company}</h3>
                <p className="text-sm font-mono text-muted-foreground">{exp.period}</p>
              </div>

              <div className="md:w-2/3">
                <h4 className="text-xl font-semibold text-primary mb-3">{exp.title}</h4>
                <p className="text-sm text-foreground/80 mb-4 leading-snug">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {exp.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-primary/5 border border-primary/20 rounded-sm text-[11px] font-mono text-primary/90">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
