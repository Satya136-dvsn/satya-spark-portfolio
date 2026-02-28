import { Award, BookOpen, Star, Shield, ExternalLink } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

const credentials = [
    {
        type: "Publication",
        icon: <BookOpen className="w-5 h-5 text-primary" />,
        summary: "1x IEEE Review Paper",
        items: [
            {
                title: "Performance Optimized 32-bit Multiplier: Integrating Vedic and Karatsuba Techniques",
                issuer: "IEEE ICCCNT 2025",
                link: "https://ieeexplore.ieee.org/document/11012447",
                description: "Developed a high-performance 32-bit multiplier by integrating Vedic and Karatsuba algorithms, achieving significant improvements in speed and area efficiency."
            }
        ]
    },
    {
        type: "Professional Certifications",
        icon: <Award className="w-5 h-5 text-primary" />,
        summary: "3x Professional Certifications",
        items: [
            {
                title: "Generative AI Foundations Certificate",
                issuer: "upGrad",
                description: "Advanced prompt engineering, AI-powered research, automation, and problem-solving.",
                link: "https://drive.google.com/file/d/1ShharIB84CbAUJ0W1zfQuRMZ9NO6G_pD/view?usp=drive_link"
            },
            {
                title: "Professional Certificate in Data Analytics",
                issuer: "edX",
                description: "Comprehensive certification validating skills in data analysis, visualization, and statistical tools",
                link: "https://drive.google.com/file/d/1BYj_FAxaRLFzFzR5X-EetSuWW-nC3T3c/view?usp=drive_link"
            },
            {
                title: "Oracle Cloud Infrastructure AI Foundations",
                issuer: "Oracle",
                description: "Foundational knowledge of AI, Machine Learning, and Deep Learning concepts in OCI.",
                link: "https://drive.google.com/file/d/1Hus4e39-a1AnMrEtenMWhGa935ketECR/view?usp=drive_link"
            }
        ]
    },
    {
        type: "Technical Skill Badges",
        icon: <Shield className="w-5 h-5 text-primary" />,
        summary: "8x Skill Badges (GCP & IBM)",
        items: [
            {
                title: "Build Real World AI Applications with Gemini and Imagen",
                issuer: "Google Cloud",
                description: "Expertise in building practical AI applications using Gemini and Imagen technologies.",
                link: "https://www.credly.com/badges/ab5eff35-f358-4bb7-910c-0d1b2adb224d/public_url"
            },
            {
                title: "Develop GenAI Apps with Gemini and Streamlit",
                issuer: "Google Cloud",
                description: "Proficiency in developing generative AI applications using Gemini and Streamlit.",
                link: "https://www.credly.com/badges/9f5949d8-b02b-4301-bcb8-83fcfd872865/public_url"
            },
            {
                title: "Inspect Rich Documents with Gemini Multimodality",
                issuer: "Google Cloud",
                description: "Analyzing rich documents using Gemini's multimodality features and RAG techniques.",
                link: "https://www.credly.com/badges/94cc5a7d-3761-4f23-9913-b6ddb4ae26bd/public_url"
            },
            {
                title: "Explore Generative AI with the Gemini API",
                issuer: "Google Cloud",
                description: "Leveraging the Gemini API within Vertex AI for generative AI applications.",
                link: "https://www.credly.com/badges/18304b8e-f5b3-4d14-8316-ddefaffcb049/public_url"
            },
            {
                title: "SQL for Data Science",
                issuer: "IBM",
                description: "Proficiency in SQL database querying and data manipulation.",
                link: "https://www.credly.com/badges/ffd12ba2-b6dd-414f-a7b8-4ba6b89c8ff7/public_url"
            },
            {
                title: "Analyzing Data with Python",
                issuer: "IBM",
                description: "Advanced data analysis using pandas, numpy, and matplotlib.",
                link: "https://www.credly.com/badges/1a30f4cc-8bea-4154-9202-406f4ab4a097/public_url"
            },
            {
                title: "Data Analytics Essentials",
                issuer: "IBM",
                description: "Foundational skills in data analytics principles, tools, and business methodologies.",
                link: "https://www.credly.com/badges/7046ea1c-4845-46bc-ba8b-922283d346bc/public_url"
            },
            {
                title: "Analyzing Data with Excel",
                issuer: "IBM",
                description: "Competency in data analysis techniques using Microsoft Excel.",
                link: "https://www.credly.com/badges/5eda6ed8-e09c-4d75-955a-0b512a04e9dc/public_url"
            }
        ]
    },
    {
        type: "Leadership & Recognition",
        icon: <Star className="w-5 h-5 text-primary" />,
        summary: "President, NSS Coordinator",
        items: [
            {
                title: "Student President - ELEKTRA 2K25",
                issuer: "ELEKTRA 2K25 Tech Fest",
                description: "Led a team of 100+ students, managed ₹3L sponsorship, and coordinated national-level technical festival logistics."
            },
            {
                title: "NSS Unit–2 Coordinator",
                issuer: "National Service Scheme",
                description: "Organized community service camps and social awareness drives (2023–2025)."
            },
            {
                title: "Photography Lead & Designer",
                issuer: "DevFest 2025 & ELEKTRA 2K24",
                description: "Coordinated media for DevFest and designed promotional assets and visual identity."
            }
        ]
    },
    {
        type: "Hackathons & Workshops",
        icon: <Shield className="w-5 h-5 text-primary" />,
        summary: "AWS, Power BI",
        items: [
            {
                title: "AWS 24-Hour Hackathon",
                issuer: "Brainovision Solutions",
                description: "4-day AWS workshop and 24-hour hackathon on cloud solutions",
                link: "https://drive.google.com/file/d/19FmqSwxLkPmAcW9ZwuZ3YLNvln8wETx-/view?usp=drive_link"
            },
            {
                title: "Power BI Workshop",
                issuer: "TechTip24",
                description: "Enhanced skills in data visualization and interactive dashboard creation",
                link: "https://drive.google.com/file/d/1CfiL8-vxCKNnDsD0tFRrw38KKof35vnN/view?usp=drive_link"
            }
        ]
    }
];

const Credentials = () => {
    return (
        <section id="credentials" className="py-32 relative z-10 bg-background/50 border-y border-border/50">
            <div className="container mx-auto max-w-5xl px-6">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight glow-text">
                        Credentials & Recognition
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(0,240,255,0.3)]"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {credentials.map((section, idx) => (
                        <Dialog key={idx}>
                            <DialogTrigger asChild>
                                <div className="bg-card p-6 rounded-xl border border-border/50 shadow-sm cursor-pointer hover:border-primary/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.05)] transition-all group flex flex-col h-full text-left">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                                            {section.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{section.type}</h3>
                                    <p className="text-sm text-muted-foreground font-mono mt-auto">{section.summary}</p>
                                    <div className="mt-4 text-xs font-semibold text-primary/80 flex items-center gap-1 group-hover:text-primary">
                                        View Details <ExternalLink className="w-3 h-3" />
                                    </div>
                                </div>
                            </DialogTrigger>

                            <DialogContent className="max-w-2xl bg-card border-border/50 text-foreground max-h-[80vh] overflow-y-auto">
                                <DialogHeader className="mb-6">
                                    <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                                        <div className="p-2 bg-primary/10 rounded-lg">
                                            {section.icon}
                                        </div>
                                        {section.type}
                                    </DialogTitle>
                                </DialogHeader>

                                <div className="space-y-6">
                                    {section.items.map((item, itemIdx) => (
                                        <div key={itemIdx} className="border-b border-border/50 pb-6 last:border-0 last:pb-0">
                                            <div className="flex justify-between items-start gap-4 mb-2">
                                                <h4 className="text-lg font-bold text-foreground/90 leading-tight">
                                                    {item.title}
                                                </h4>
                                                {item.link && (
                                                    <a
                                                        href={item.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="shrink-0 p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                                                        title="View Source/Certificate"
                                                    >
                                                        <ExternalLink className="w-4 h-4" />
                                                    </a>
                                                )}
                                            </div>
                                            <p className="text-sm font-mono text-primary/80 mb-3 tracking-wide">
                                                {item.issuer}
                                            </p>
                                            {item.description && (
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    {item.description}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Credentials;
