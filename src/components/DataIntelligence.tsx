import { DatabaseZap, Filter, Calculator, BarChart3, Lightbulb } from 'lucide-react';

const pipelineSteps = [
    { name: "Raw Data", icon: <DatabaseZap className="w-6 h-6 text-primary" /> },
    { name: "Cleaning", icon: <Filter className="w-6 h-6 text-primary" /> },
    { name: "Transformation", icon: <Calculator className="w-6 h-6 text-primary" /> },
    { name: "Analysis", icon: <BarChart3 className="w-6 h-6 text-primary" /> },
    { name: "Insight", icon: <Lightbulb className="w-6 h-6 text-primary" /> },
];

const DataIntelligence = () => {
    return (
        <section className="py-32 relative z-10 bg-background overflow-hidden">
            <div className="container mx-auto max-w-6xl px-6">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight glow-text">
                        Data Intelligence Pipeline
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        My approach to extracting high-value signals from complex, noisy datasets.
                    </p>
                    <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(0,240,255,0.3)]"></div>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Main connecting path - Thin Red Highlight */}
                    <div className="hidden md:block absolute top-[4.5rem] left-[10%] right-[10%] h-[1px] bg-border z-0">
                        <div className="w-full h-full bg-accent/50"></div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between relative z-10 gap-8 md:gap-4">
                        {pipelineSteps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center group relative w-full md:w-1/5">

                                {/* Mobile connecting line - Thin Red Highlight */}
                                {index !== pipelineSteps.length - 1 && (
                                    <div className="md:hidden absolute top-[4.5rem] left-[50%] w-[1px] h-[calc(100%-2rem)] bg-accent/40 -translate-x-1/2 z-0 whitespace-nowrap overflow-hidden">
                                    </div>
                                )}

                                {/* Visual Node */}
                                <div className={`w-20 h-20 rounded-sm flex items-center justify-center border-2 bg-card relative z-10 transition-all duration-300 shadow-sm
                  ${index === pipelineSteps.length - 1
                                        ? 'border-primary shadow-[0_0_15px_rgba(0,229,255,0.2)]'
                                        : 'border-border group-hover:border-primary/50'}`}
                                >
                                    <div className="text-foreground/80">{step.icon}</div>

                                    {/* Glowing core for the final step */}
                                    {index === pipelineSteps.length - 1 && (
                                        <div className="absolute inset-0 bg-primary/5 rounded-sm"></div>
                                    )}
                                </div>

                                {/* Label */}
                                <h4 className={`mt-6 font-mono font-bold tracking-wide text-center uppercase text-sm
                  ${index === pipelineSteps.length - 1 ? 'text-primary' : 'text-foreground/80'}`}>
                                    {step.name}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default DataIntelligence;
