import { useState, useEffect, useRef } from 'react';
import { Briefcase, MapPin, Calendar, ChevronDown, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const experiences = [
  {
    title: "Java Full Stack Engineering Intern",
    company: "Infosys Springboard",
    location: "Remote",
    period: "Sep 2025 — Dec 2025",
    type: "INTERN",
    description: "Designed and implemented robust backend services using Spring Boot microservices architecture.",
    tech: ["Java", "Spring Boot", "React", "REST APIs", "SQL", "Microservices"],
    status: "COMPLETED",
    details: [
      "Optimized SQL query performance reducing response times by 30%.",
      "Developed secure authentication middleware using Spring Security.",
      "Built responsive dashboard components using React and Tailwind CSS.",
      "Participated in agile ceremonies and code review processes."
    ]
  },
  {
    title: "Embedded Systems Intern",
    company: "Shri MK Embedded Solutions",
    location: "Hyderabad, IN",
    period: "May 2024 — Jun 2024",
    type: "INTERN",
    description: "Developed and deployed autonomous robotic systems with a focus on low-level hardware programming.",
    tech: ["Arduino", "C++", "Circuit Design", "Sensors", "Robotics"],
    status: "COMPLETED",
    details: [
      "Engineered sensor fusion algorithms for real-time environment mapping.",
      "Designed PCB layouts for miniature robotic control systems.",
      "Optimized battery consumption by implementing sleep-state logic.",
      "Calibrated IMU sensors for precise movement telemetry."
    ]
  }
];

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const elements = [headerRef.current, ...cardRefs.current].filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-32 relative z-10 bg-[#01060F] overflow-hidden">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.02),transparent_70%)] pointer-events-none" />
      
      {/* Vertical timeline line (desktop) */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#0A2540] to-transparent hidden md:block pointer-events-none" />

      <div className="container mx-auto max-w-4xl px-6">
        {/* Header */}
        <div
          ref={headerRef}
          style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
          className="mb-16 relative"
        >
          <div className="absolute -left-4 top-0 w-1 h-full bg-[#00E5FF] opacity-20" />
          <p className="font-mono text-xs text-[#00E5FF]/50 tracking-[0.3em] uppercase mb-3">
            SECTION_03 / WORK_HISTORY
          </p>
          <h2 className="font-mono text-3xl md:text-5xl font-bold text-[#E0F7FA] tracking-tight mb-4">
            <span className="text-[#00E5FF] tracking-widest">// </span>Experience
          </h2>
          <p className="font-mono text-sm text-[#4A7A8A] max-w-2xl leading-relaxed">
            Professional deployments and engineering contributions across real-world systems.
            <span className="block mt-2 text-[#00E5FF]/40 text-[10px] animate-pulse">SYSTEM STATUS: INTERACTIVE_MODE_ACTIVE</span>
          </p>
        </div>

        {/* Timeline entries */}
        <div className="relative space-y-12">
          {/* Vertical cyan line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#00E5FF]/60 via-[#00E5FF]/10 to-transparent" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index] = el; }}
              style={{
                opacity: 0,
                transform: 'translateY(24px)',
                transition: `opacity 0.5s ease ${index * 150}ms, transform 0.5s ease ${index * 150}ms`
              }}
              className="relative pl-12 group"
            >
              {/* Timeline diamond node */}
              <div className={`absolute left-[11px] top-6 w-2.5 h-2.5 rotate-45 transition-all duration-500 z-20
                ${expandedIndex === index ? 'bg-amber-400 scale-125 shadow-[0_0_15px_rgba(251,191,36,0.8)]' : 'bg-[#00E5FF] shadow-[0_0_10px_rgba(0,229,255,0.8)] group-hover:scale-125'}`} 
              />
              
              {/* Horizontal scan line */}
              <div className="absolute left-4 top-[30px] h-px w-8 bg-gradient-to-r from-[#00E5FF] to-transparent opacity-30 group-hover:opacity-100 transition-opacity" />

              {/* Card Container */}
              <div 
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className={`relative bg-[#050D1A] border transition-all duration-500 cursor-pointer overflow-hidden interactive
                           ${expandedIndex === index 
                             ? 'border-amber-400/50 shadow-[0_0_30px_rgba(251,191,36,0.05)]' 
                             : 'border-[#0A2540] hover:border-[#00E5FF]/40 hover:shadow-[0_0_24px_rgba(0,229,255,0.06)]'}`}
              >
                {/* Visual accents */}
                <div className={`absolute top-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent w-full transition-opacity duration-500
                               ${expandedIndex === index ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}`} />
                <div className={`absolute left-0 top-0 w-[2px] h-full transition-all duration-500
                               ${expandedIndex === index ? 'bg-amber-400' : 'bg-[#00E5FF]/0 group-hover:bg-[#00E5FF]/60'}`} />

                <div className="p-6">
                  {/* Meta row */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className={`font-mono text-[9px] px-2 py-0.5 border tracking-widest transition-colors duration-500
                                   ${expandedIndex === index ? 'text-amber-400 border-amber-400/30 bg-amber-400/5' : 'text-[#00E5FF] border-[#00E5FF]/20 bg-[#00E5FF]/5'}`}>
                      [{exp.type}]
                    </span>
                    <div className="flex items-center gap-4 ml-auto">
                      <div className="flex items-center gap-1">
                        <Calendar className={`w-3 h-3 ${expandedIndex === index ? 'text-amber-400/60' : 'text-[#4A7A8A]'}`} />
                        <span className="font-mono text-[10px] text-[#4A7A8A]">{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className={`font-mono text-lg font-bold transition-colors duration-500 mb-1
                                    ${expandedIndex === index ? 'text-amber-400' : 'text-[#00E5FF]'}`}>
                        {exp.title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4">
                        <div className="flex items-center gap-1.5">
                          <Briefcase className="w-3 h-3 text-[#4A7A8A]" />
                          <span className="font-mono text-xs text-[#8BADBF] font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#4A7A8A]" />
                          <span className="font-mono text-xs text-[#4A7A8A]">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      className={`p-2 rounded-full border transition-colors duration-500
                                ${expandedIndex === index ? 'border-amber-400/30 text-amber-400' : 'border-[#0A2540] text-[#4A7A8A]'}`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </div>

                  <p className="font-mono text-xs text-[#4A7A8A] leading-relaxed mb-5 border-l border-[#0A2540] pl-4 group-hover:border-[#00E5FF]/30 transition-colors">
                    {exp.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {exp.tech.map((t, i) => (
                      <span
                        key={i}
                        className={`font-mono text-[9px] px-2 py-0.5 bg-transparent border transition-all duration-300
                                   ${expandedIndex === index 
                                     ? 'border-amber-400/20 text-amber-400/70' 
                                     : 'border-[#0A2540] text-[#4A7A8A] group-hover:border-[#00E5FF]/20 group-hover:text-[#00E5FF]/70'}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "circOut" }}
                        className="overflow-hidden mt-6 pt-6 border-t border-[#0A2540]"
                      >
                        <div className="flex items-center gap-2 mb-4">
                          <Terminal className="w-3 h-3 text-amber-400/60" />
                          <span className="font-mono text-[10px] text-amber-400/60 tracking-widest uppercase">Sub_System_Logs</span>
                        </div>
                        <ul className="space-y-3">
                          {exp.details.map((detail, dIndex) => (
                            <motion.li
                              key={dIndex}
                              initial={{ x: -10, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: dIndex * 0.1 }}
                              className="flex gap-3 text-xs font-mono text-[#8BADBF] leading-relaxed group/item"
                            >
                              <span className="text-amber-400/40 mt-1 shrink-0">0{dIndex + 1}</span>
                              <span className="group-hover/item:text-white transition-colors">{detail}</span>
                            </motion.li>
                          ))}
                        </ul>
                        
                        <div className="mt-8 flex justify-between items-end opacity-20 font-mono text-[8px] uppercase tracking-[0.2em] text-amber-400">
                          <span>Encryption: AES-256</span>
                          <span>Auth_Token: 0x{Math.random().toString(16).substring(2, 10)}</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Corner indicator */}
                <div className={`absolute bottom-0 right-0 w-8 h-8 pointer-events-none transition-colors duration-500
                               ${expandedIndex === index ? 'text-amber-400/40' : 'text-[#0A2540]'}`}>
                   <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M32 0V32H0" stroke="currentColor" strokeWidth="1" />
                   </svg>
                </div>
                
                <p className={`absolute bottom-2 right-3 font-mono text-[9px] transition-colors duration-500
                             ${expandedIndex === index ? 'text-amber-400/40' : 'text-[#0A2540] group-hover:text-[#00E5FF]/20'}`}>
                  EXP_{String(index + 1).padStart(2, '0')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
