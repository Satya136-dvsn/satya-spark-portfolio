import { useEffect, useRef } from 'react';
import { Terminal, Server, Database, Cloud, LineChart, Cpu } from 'lucide-react';

const skillGroups = [
  {
    title: "Languages",
    icon: Terminal,
    id: "LANG",
    items: ["Java", "Python", "JavaScript / TypeScript", "SQL", "Verilog", "HTML / CSS"]
  },
  {
    title: "Backend & APIs",
    icon: Server,
    id: "BACK",
    items: ["Spring Boot", "Express.js", "RESTful Architecture", "Microservices", "JWT Auth"]
  },
  {
    title: "Databases",
    icon: Database,
    id: "DB",
    items: ["PostgreSQL", "MySQL", "Supabase", "Data Modeling", "Query Optimization"]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    id: "DEVOPS",
    items: ["AWS (Basics)", "Vercel", "Git / GitHub", "CI/CD Concepts", "Serverless"]
  },
  {
    title: "Data & Analytics",
    icon: LineChart,
    id: "DATA",
    items: ["Pandas", "NumPy", "TensorFlow.js", "Power BI", "Tableau"]
  },
  {
    title: "Engineering Practices",
    icon: Cpu,
    id: "ENG",
    items: ["System Design", "Test-Driven Dev", "FPGA Design", "Secure Coding"]
  }
];

const SkillCard = ({ group, index }: { group: typeof skillGroups[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Icon = group.icon;

  return (
    <div
      ref={cardRef}
      style={{
        opacity: 0,
        transform: 'translateY(24px)',
        transition: `opacity 0.5s ease ${index * 80}ms, transform 0.5s ease ${index * 80}ms`
      }}
      className="group relative bg-[#050D1A] border border-[#0A2540] p-6 overflow-hidden
                 hover:border-[#00E5FF]/50 transition-all duration-300
                 hover:shadow-[0_0_20px_rgba(0,229,255,0.08),inset_0_0_20px_rgba(0,229,255,0.03)]"
    >
      {/* Corner brackets */}
      <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00E5FF]/0 group-hover:border-[#00E5FF]/70 transition-colors duration-300" />
      <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00E5FF]/0 group-hover:border-[#00E5FF]/70 transition-colors duration-300" />

      {/* Circuit trace — top line grows on hover */}
      <span className="absolute top-0 left-0 h-[1px] w-0 bg-gradient-to-r from-[#00E5FF] to-transparent group-hover:w-full transition-all duration-500 ease-out" />

      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2 bg-[#00E5FF]/5 border border-[#00E5FF]/20 group-hover:bg-[#00E5FF]/10 transition-colors">
          <Icon className="w-4 h-4 text-[#00E5FF]" />
        </div>
        <div>
          <p className="font-mono text-[10px] text-[#00E5FF]/50 tracking-[0.2em] uppercase">
            MODULE_{group.id}
          </p>
          <h3 className="font-mono text-sm font-bold text-[#00E5FF] tracking-wide leading-none mt-0.5">
            // {group.title}
          </h3>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[#0A2540] mb-5 relative overflow-hidden">
        <span className="absolute inset-0 bg-gradient-to-r from-[#00E5FF]/30 to-transparent w-0 group-hover:w-full transition-all duration-700 ease-out" />
      </div>

      {/* Skill items */}
      <ul className="space-y-2.5">
        {group.items.map((item, i) => (
          <li
            key={i}
            className="flex items-center gap-3 group/item"
          >
            {/* Diamond bullet */}
            <span
              className="inline-block w-1.5 h-1.5 rotate-45 bg-[#00E5FF]/40 shrink-0
                         group-hover/item:bg-[#00E5FF] transition-colors duration-200"
            />
            <span className="font-mono text-xs text-[#8BADBF] group-hover/item:text-[#C8E8F0] transition-colors duration-200">
              {item}
            </span>
          </li>
        ))}
      </ul>

      {/* Bottom-right index */}
      <p className="absolute bottom-3 right-4 font-mono text-[10px] text-[#0A2540] group-hover:text-[#00E5FF]/20 transition-colors">
        [{String(index + 1).padStart(2, '0')}]
      </p>
    </div>
  );
};

const Skills = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-32 relative z-10 bg-[#030912] border-y border-[#0A2540]">
      {/* Scan line */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/10 to-transparent"
          style={{ animation: 'scanBeam 8s linear infinite', top: '0%' }}
        />
      </div>

      <div className="container mx-auto max-w-6xl px-6">

        {/* Section header */}
        <div
          ref={headerRef}
          style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-[#00E5FF]/50 tracking-[0.3em] uppercase mb-3">
            SECTION_04 / TECHNICAL_ARSENAL
          </p>
          <h2 className="font-mono text-3xl md:text-5xl font-bold text-[#E0F7FA] tracking-tight mb-4">
            <span className="text-[#00E5FF]">// </span>Technical Arsenal
          </h2>
          <p className="font-mono text-sm text-[#4A7A8A] max-w-2xl leading-relaxed">
            Structured breakdown of engineering capabilities and active toolchain modules.
          </p>
          {/* Accent line with circuit node */}
          <div className="flex items-center gap-3 mt-6">
            <div className="h-px w-20 bg-gradient-to-r from-[#00E5FF] to-transparent" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#00E5FF]" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.id} group={group} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
