import { Mail, Github, Linkedin, ArrowUpCircle } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative z-10 bg-background pt-16 pb-8 border-t border-border/50">
            <div className="container mx-auto max-w-5xl px-6">

                <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-border/50 pb-12 mb-8">

                    <div className="text-center md:text-left space-y-2">
                        <h3 className="text-2xl font-bold text-foreground tracking-tight">Duba Venkata Satyanarayana</h3>
                        <p className="font-mono text-sm text-muted-foreground">Systems Engineer | {currentYear}</p>
                    </div>

                    <div className="flex gap-4">
                        <a href="https://github.com/Satya136-dvsn" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-3 bg-card border border-border rounded-xl text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://linkedin.com/in/satya-d" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-3 bg-card border border-border rounded-xl text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="mailto:dt.satya136@gmail.com" aria-label="Email" className="p-3 bg-card border border-border rounded-xl text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>

                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs font-mono text-muted-foreground">
                        © {currentYear} D V Satyanarayana. All rights reserved.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors group"
                    >
                        BACK TO TOP <ArrowUpCircle className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
