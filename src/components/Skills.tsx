import { Terminal, Server, Database, Cloud, LineChart, Cpu } from 'lucide-react';

const skillGroups = [
  {
    title: "Languages",
    icon: <Terminal className="w-5 h-5 text-primary" />,
    items: ["Java", "Python", "JavaScript / TypeScript", "SQL", "Verilog", "HTML / CSS"]
  },
  {
    title: "Backend & APIs",
    icon: <Server className="w-5 h-5 text-primary" />,
    items: ["Spring Boot", "Express.js", "RESTful Architecture", "Microservices", "JWT Auth"]
  },
  {
    title: "Databases",
    icon: <Database className="w-5 h-5 text-primary" />,
    items: ["PostgreSQL", "MySQL", "Supabase", "Data Modeling", "Query Optimization"]
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-5 h-5 text-primary" />,
    items: ["AWS (Basics)", "Vercel", "Git / GitHub", "CI/CD Concepts", "Serverless"]
  },
  {
    title: "Data & Analytics",
    icon: <LineChart className="w-5 h-5 text-primary" />,
    items: ["Pandas", "NumPy", "TensorFlow.js", "Power BI", "Tableau"]
  },
  {
    title: "Engineering Practices",
    icon: <Cpu className="w-5 h-5 text-primary" />,
    items: ["System Design", "Test-Driven Dev", "FPGA Design", "Secure Coding"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative z-10 bg-background/50 border-y border-border/50">
      <div className="container mx-auto max-w-6xl px-6">

        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight glow-text">
            Technical Arsenal
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            A structured breakdown of my engineering capabilities and toolchain.
          </p>
          <div className="w-24 h-1 bg-primary mt-6 rounded-full shadow-[0_0_15px_rgba(0,240,255,0.3)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, groupIdx) => (
            <div key={groupIdx} className="bg-card border border-border p-6 rounded-xl hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-6 border-b border-border/50 pb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{group.title}</h3>
              </div>

              <ul className="space-y-3">
                {group.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-center gap-3 text-sm text-foreground/80 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
