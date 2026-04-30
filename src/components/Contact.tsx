import { useState } from 'react';
import { Send, Terminal, Loader2, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from "sonner";

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        
        // Append Web3Forms access key
        const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
        if (!accessKey) {
            toast.error("Contact form configuration is missing.");
            setIsSubmitting(false);
            return;
        }
        
        formData.append("access_key", accessKey);
        // Prevent bot spam
        formData.append("botcheck", "");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setIsSuccess(true);
                toast.success("Message transmitted successfully.");
                (e.target as HTMLFormElement).reset();
                setTimeout(() => setIsSuccess(false), 5000);
            } else {
                console.error("Form Error", data);
                toast.error(data.message || "Something went wrong.");
            }
        } catch (error) {
            console.error("Submission Error", error);
            toast.error("Failed to send message. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-32 relative z-10 bg-card border-y border-border/50">
            <div className="container mx-auto max-w-3xl px-6">
                
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight glow-text uppercase font-mono flex items-center justify-center gap-3">
                        <Terminal className="w-8 h-8 text-primary" />
                        Initialize Contact
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full shadow-[0_0_10px_rgba(0,229,255,0.2)]"></div>
                    <p className="mt-6 text-muted-foreground font-mono text-sm max-w-xl mx-auto">
                        Executing connection protocol. Transmit your message directly to my secure inbox.
                    </p>
                </div>

                <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-xl p-8 shadow-2xl relative overflow-hidden">
                    {/* Decorative Top Bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-primary to-pink-500 opacity-50"></div>
                    
                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                        {/* Honeypot Spam Protection */}
                        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-xs font-mono text-primary uppercase tracking-wider">Entity Name</label>
                                <Input 
                                    id="name" 
                                    name="name" 
                                    required 
                                    placeholder="John Doe" 
                                    className="bg-black/40 border-white/10 focus:border-primary/50 font-mono text-sm placeholder:text-muted-foreground/50 h-12"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-xs font-mono text-primary uppercase tracking-wider">Return Address</label>
                                <Input 
                                    id="email" 
                                    name="email" 
                                    type="email" 
                                    required 
                                    placeholder="john@example.com" 
                                    className="bg-black/40 border-white/10 focus:border-primary/50 font-mono text-sm placeholder:text-muted-foreground/50 h-12"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-xs font-mono text-primary uppercase tracking-wider">Payload Data</label>
                            <Textarea 
                                id="message" 
                                name="message" 
                                required 
                                placeholder="Enter your message here..." 
                                className="bg-black/40 border-white/10 focus:border-primary/50 font-mono text-sm min-h-[150px] resize-y placeholder:text-muted-foreground/50"
                            />
                        </div>

                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="btn-tron-supernova w-full h-14"
                        >
                            <div className="relative flex items-center justify-center gap-3">
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        <span className="animate-pulse">TRANSMITTING...</span>
                                    </>
                                ) : isSuccess ? (
                                    <>
                                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                                        <span>TRANSMISSION COMPLETE</span>
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        <span>EXECUTE TRANSMISSION</span>
                                    </>
                                )}
                            </div>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
