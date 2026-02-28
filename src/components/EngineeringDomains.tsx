import { Server, Layout, Database } from 'lucide-react';

const domains = [
    {
        title: "Backend Systems",
        icon: <Server className="w-8 h-8 text-primary mb-4" />,
        skills: ["REST APIs", "SQL", "Validation", "Modular Architecture", "Cloud Deployment"],
        description: "Designing robust, scalable server-side architectures engineered for performance and reliability."
    },
    {
        title: "Full Stack Applications",
        icon: <Layout className="w-8 h-8 text-primary mb-4" />,
        skills: ["Frontend + Backend Integration", "Secure Data Handling", "Scalable UI"],
        description: "Building seamless end-to-end applications with modern frontend frameworks connected to powerful APIs."
    },
    {
        title: "Data & Analytics",
        icon: <Database className="w-8 h-8 text-primary mb-4" />,
        skills: ["Data Processing", "EDA", "Reporting", "Insight Generation"],
        description: "Transforming raw data into actionable intelligence through structured processing and analysis pipelines."
    }
];

const EngineeringDomains = () => {
    return (
        <section id="domains" className="py-32 relative z-10 bg-background/50 border-y border-border/50">
            <div className="container mx-auto max-w-6xl px-6">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight glow-text">
                        Core Engineering Domains
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full shadow-[0_0_15px_rgba(0,240,255,0.3)]"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {domains.map((domain, index) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                {domain.icon}
                                <h3 className="text-2xl font-bold text-foreground mb-3 tracking-wide">{domain.title}</h3>
                                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                                    {domain.description}
                                </p>

                                <div className="space-y-2">
                                    {domain.skills.map((skill, sIdx) => (
                                        <div key={sIdx} className="flex items-center gap-2 text-sm text-foreground/80 font-medium leading-snug">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary/80 shadow-[0_0_5px_rgba(0,240,255,0.3)]"></div>
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className="absolute -bottom-1 -right-1 w-24 h-24 bg-primary/20 blur-2xl rounded-full group-hover:bg-primary/30 transition-colors duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EngineeringDomains;
