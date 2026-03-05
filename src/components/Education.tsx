import { GraduationCap, FileText } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="py-32 relative z-10 bg-background/50 border-y border-border/50">
            <div className="container mx-auto max-w-4xl px-6">

                <div className="flex items-center gap-4 mb-12">
                    <GraduationCap className="w-8 h-8 text-primary" />
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">
                        Education
                    </h2>
                </div>

                <div className="bg-card border border-border rounded-sm p-6 md:p-8 relative overflow-hidden group hover:border-primary/50 hover:shadow-[0_0_10px_rgba(0,229,255,0.1)] transition-all">
                    {/* Subtle red accent line */}
                    <div className="absolute left-0 top-0 w-1 h-full bg-accent scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300 z-20"></div>

                    <div className="flex flex-col md:flex-row gap-6 md:gap-12 relative z-10">
                        {/* Left: Degree Info */}
                        <div className="md:w-2/5 shrink-0">
                            <h3 className="text-xl font-bold text-primary mb-1 tracking-wide">
                                B.Tech – ECE
                            </h3>
                            <p className="text-base text-foreground/90 font-medium mb-2">
                                Anil Neerukonda Institute of Technology & Sciences
                            </p>
                            <p className="text-sm font-mono text-muted-foreground">
                                Visakhapatnam, India • 2021 – 2025
                            </p>
                        </div>

                        {/* Right: Focus Areas + Research */}
                        <div className="md:w-3/5 space-y-6">
                            {/* Relevant Focus Areas */}
                            <div>
                                <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
                                    Relevant Focus Areas
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {["Digital Systems", "Computer Architecture", "Data Processing", "Embedded Systems"].map((area, i) => (
                                        <span key={i} className="px-2.5 py-1 bg-primary/5 border border-primary/20 rounded-sm text-xs text-primary/90 font-mono font-medium">
                                            {area}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Research Work */}
                            <div>
                                <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                                    <FileText className="w-3.5 h-3.5" /> Research
                                </h4>
                                <p className="text-sm text-foreground/80 leading-snug font-medium">
                                    IEEE Conference Publication on FPGA Multiplier Architecture Optimization
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Education;
