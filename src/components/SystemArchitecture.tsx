import { MonitorSmartphone, Cpu, Blocks, Database, Cloud } from 'lucide-react';

const architectureFlow = [
    {
        step: "Client",
        icon: <MonitorSmartphone className="w-6 h-6 text-foreground" />,
        description: "Responsive web & mobile interfaces.",
        tech: "React / Vite / Tailwind"
    },
    {
        step: "API Layer",
        icon: <Blocks className="w-6 h-6 text-foreground" />,
        description: "Secure, rate-limited REST endpoints.",
        tech: "Spring Boot / Express"
    },
    {
        step: "Service Logic",
        icon: <Cpu className="w-6 h-6 text-foreground" />,
        description: "Business rules and data validation.",
        tech: "Java / Python"
    },
    {
        step: "Database",
        icon: <Database className="w-6 h-6 text-foreground" />,
        description: "ACID-compliant relational storage.",
        tech: "PostgreSQL / MySQL"
    },
    {
        step: "Cloud",
        icon: <Cloud className="w-6 h-6 text-foreground" />,
        description: "Scalable global deployment.",
        tech: "AWS / Vercel"
    }
];

const SystemArchitecture = () => {
    return (
        <section className="py-32 relative z-10 bg-background overflow-hidden">
            <div className="container mx-auto max-w-6xl px-6">

                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight glow-text">
                        System Architecture Approach
                    </h2>
                    <p className="text-muted-foreground max-w-2xl text-lg">
                        A structured, layer-by-layer methodology to building robust, production-ready software systems.
                    </p>
                    <div className="w-24 h-1 bg-primary mt-6 rounded-full shadow-[0_0_15px_rgba(0,240,255,0.3)]"></div>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[4.5rem] left-0 w-full h-[2px] bg-border z-0">
                        <div className="h-full bg-primary/50 w-full animate-pulse shadow-[0_0_15px_rgba(0,240,255,0.3)]"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
                        {architectureFlow.map((node, index) => (
                            <div key={index} className="flex flex-row lg:flex-col items-start lg:items-center relative group">

                                {/* Connecting Line (Mobile) */}
                                {index !== architectureFlow.length - 1 && (
                                    <div className="lg:hidden absolute left-[2.25rem] top-[4.5rem] w-[2px] h-[calc(100%+1.5rem)] bg-border z-0">
                                        <div className="w-full h-full bg-primary/50 animate-pulse shadow-[0_0_10px_rgba(0,240,255,0.3)]"></div>
                                    </div>
                                )}

                                {/* Icon Block */}
                                <div className="w-20 h-20 shrink-0 rounded-2xl bg-card border border-border flex items-center justify-center mb-0 lg:mb-6 shadow-lg group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-all duration-300 relative z-10">
                                    <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    {node.icon}

                                    {/* Arrow Indicator (Desktop) */}
                                    {index !== architectureFlow.length - 1 && (
                                        <div className="hidden lg:block absolute -right-[calc(50%+1.5rem)] top-1/2 -translate-y-1/2 text-primary">
                                            {/* Arrow SVG */}
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="opacity-50 animate-pulse">
                                                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="ml-6 lg:ml-0 text-left lg:text-center pb-8 lg:pb-0">
                                    <div className="text-xs font-mono text-primary mb-1 tracking-wider uppercase">Layer 0{index + 1}</div>
                                    <h4 className="text-xl font-bold text-foreground mb-2">{node.step}</h4>
                                    <p className="text-sm text-muted-foreground mb-3 leading-snug lg:h-10">
                                        {node.description}
                                    </p>
                                    <div className="inline-block px-2.5 py-1 bg-background border border-border rounded text-[11px] font-medium text-foreground/70">
                                        {node.tech}
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SystemArchitecture;
