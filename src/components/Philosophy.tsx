import { CheckCircle2 } from 'lucide-react';

const principles = [
    {
        title: "Correctness First.",
        desc: "Rigorous testing, static analysis, and type safety before anything ships."
    },
    {
        title: "Scalable Design.",
        desc: "Architecting decoupled systems that can grow horizontally without friction."
    },
    {
        title: "Performance Awareness.",
        desc: "Optimizing database queries, managing memory, and reducing network payloads."
    },
    {
        title: "Clean Architecture.",
        desc: "Strict separation of concerns. Maintainable, readable, and self-documenting code."
    },
    {
        title: "Cloud Deployment Ready.",
        desc: "Infrastructure as code, containerization, and automated CI/CD pipelines."
    }
];

const Philosophy = () => {
    return (
        <section id="philosophy" className="py-32 relative z-10 bg-card border-y border-border/50">
            <div className="container mx-auto max-w-5xl px-6">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight glow-text uppercase font-mono">
                        Engineering Philosophy
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(0,240,255,0.3)]"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    {principles.map((principle, index) => (
                        <div key={index} className="flex gap-4 group">
                            <CheckCircle2 className="w-6 h-6 text-primary shrink-0 opacity-80 mt-1" />
                            <div>
                                <h3 className="text-xl font-bold text-foreground mb-2 tracking-wide group-hover:text-primary transition-colors">
                                    {principle.title}
                                </h3>
                                <p className="text-muted-foreground leading-snug text-sm">
                                    {principle.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Philosophy;
