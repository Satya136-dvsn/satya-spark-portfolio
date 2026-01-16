

import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Publications', href: '#publications' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Badges', href: '#skill-badges' },
    { name: 'Awards', href: '#awards' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-black/20 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="flex items-center transition-transform duration-300 hover:scale-110"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img
              src="/lovable-uploads/c51f92f6-acbc-4922-996a-d8b6eebdbddc.png"
              alt="DVS Logo"
              className="w-16 h-16"
            />
          </a>

          {/* Desktop Navigation with Dropdown */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Main nav items - first 4 */}
            {navItems.slice(0, 4).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-white hover:scale-105 transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}

            {/* More dropdown for remaining items */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-white/80 hover:text-white transition-all duration-300 cursor-pointer">
                More <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-slate-900/95 backdrop-blur-lg border border-white/20 rounded-xl shadow-2xl mt-2 min-w-[180px]">
                {navItems.slice(4).map((item) => (
                  <DropdownMenuItem key={item.name} className="focus:bg-transparent">
                    <a
                      href={item.href}
                      className="text-white/80 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 cursor-pointer flex items-center px-4 py-3 rounded-lg group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {item.name}
                      </span>
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white transition-transform duration-300 hover:scale-110"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-white/10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-white/80 hover:text-white transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
