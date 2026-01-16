import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <footer className="relative z-10 bg-black/30 backdrop-blur-lg border-t border-white/10">
            <div className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <img
                                src="/lovable-uploads/c51f92f6-acbc-4922-996a-d8b6eebdbddc.png"
                                alt="DVS Logo"
                                className="w-12 h-12"
                            />
                            <div>
                                <h3 className="text-xl font-bold text-white">D.V. Satyanarayana</h3>
                                <p className="text-sm text-gray-400">Full Stack Developer</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Building innovative solutions with Java, Python, and modern web technologies.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
                        <div className="flex gap-3 mb-4">
                            <a
                                href="https://github.com/Satya136-dvsn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple-500/30 transition-colors duration-300 group"
                            >
                                <Github className="w-5 h-5 text-gray-400 group-hover:text-purple-400" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/venkatasatyanarayana-duba-679372255"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-500/30 transition-colors duration-300 group"
                            >
                                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
                            </a>
                            <a
                                href="mailto:d.v.satyanarayana260@gmail.com"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-500/30 transition-colors duration-300 group"
                            >
                                <Mail className="w-5 h-5 text-gray-400 group-hover:text-pink-400" />
                            </a>
                        </div>
                        <p className="text-gray-400 text-sm">d.v.satyanarayana260@gmail.com</p>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm flex items-center gap-1">
                            © {currentYear} Duba Venkata Satyanarayana. Built with
                            <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
                        </p>

                        {/* Back to Top Button */}
                        <button
                            onClick={scrollToTop}
                            className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full text-purple-400 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
                        >
                            <span className="text-sm font-medium">Back to Top</span>
                            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
