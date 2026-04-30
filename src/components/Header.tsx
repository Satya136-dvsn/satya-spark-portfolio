import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isScrolled, setIsScrolled]         = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection]   = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach(s => observer.observe(s));
    return () => sections.forEach(s => observer.unobserve(s));
  }, []);

  const navItems = [
    { name: 'HOME',        href: '#home' },
    { name: 'PROJECTS',    href: '#projects' },
    { name: 'EXPERIENCE',  href: '#experience' },
    { name: 'PHILOSOPHY',  href: '#philosophy' },
    { name: 'SKILLS',      href: '#skills' },
    { name: 'CREDENTIALS', href: '#credentials' },
    { name: 'CONTACT',     href: '#contact' },
  ];

  return (
    <header
      className="fixed top-0 w-full z-40 transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? 'rgba(1,6,15,0.92)' : 'transparent',
        backdropFilter:  isScrolled ? 'blur(12px)' : 'none',
        borderBottom:    isScrolled ? '1px solid rgba(0,229,255,0.18)' : '1px solid transparent',
        boxShadow:       isScrolled ? '0 0 20px rgba(0,229,255,0.06)' : 'none',
      }}
    >
      {/* Top edge circuit line */}
      {isScrolled && (
        <div
          className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(0,229,255,0.5) 30%, rgba(0,229,255,0.8) 50%, rgba(0,229,255,0.5) 80%, transparent 100%)',
          }}
        />
      )}

      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            className="flex items-center transition-all duration-300 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="relative">
              <img
                src="/logo.png"
                alt="Satya"
                className="w-12 h-12 transition-all duration-300"
                style={{ filter: 'drop-shadow(0 0 0px rgba(0,229,255,0))' }}
                onMouseEnter={e => {
                  (e.target as HTMLImageElement).style.filter = 'drop-shadow(0 0 8px rgba(0,229,255,0.7))';
                }}
                onMouseLeave={e => {
                  (e.target as HTMLImageElement).style.filter = 'drop-shadow(0 0 0px rgba(0,229,255,0))';
                }}
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Primary nav items */}
            {navItems.slice(0, 4).map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive  = activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative font-tron text-xs font-medium tracking-[0.12em] transition-all duration-200 group"
                  style={{ color: isActive ? '#00E5FF' : 'rgba(232,244,253,0.6)' }}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <span
                      className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-1"
                      style={{ background: '#00E5FF', boxShadow: '0 0 6px #00E5FF' }}
                    />
                  )}
                  <span className="group-hover:text-[#00E5FF] transition-colors duration-200">
                    {item.name}
                  </span>
                  {/* Trace-draw underline */}
                  <span
                    className="absolute -bottom-1 left-0 h-[1px] transition-all duration-300"
                    style={{
                      width: isActive ? '100%' : '0%',
                      background: '#00E5FF',
                      boxShadow: '0 0 4px rgba(0,229,255,0.6)',
                    }}
                    onMouseEnter={e => { (e.target as HTMLElement).style.width = '100%'; }}
                  />
                  {/* Hover underline via group */}
                  <style>{`
                    .nav-underline-${item.name.toLowerCase()} { width: 0; }
                    a:hover .nav-underline-${item.name.toLowerCase()} { width: 100% !important; }
                  `}</style>
                </a>
              );
            })}

            {/* Dropdown for remaining items */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className="flex items-center gap-1 font-tron text-xs font-medium tracking-[0.12em] transition-colors duration-200 cursor-pointer outline-none"
                style={{ color: 'rgba(232,244,253,0.6)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#00E5FF'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(232,244,253,0.6)'; }}
              >
                MORE <ChevronDown className="w-3 h-3 ml-0.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="backdrop-blur-xl border min-w-[180px] p-1"
                style={{
                  background: 'rgba(5,13,26,0.97)',
                  borderColor: 'rgba(0,229,255,0.2)',
                  borderRadius: '0',
                  boxShadow: '0 0 20px rgba(0,229,255,0.08)',
                  marginTop: '8px',
                }}
              >
                {navItems.slice(4).map((item) => (
                  <DropdownMenuItem
                    key={item.name}
                    className="focus:bg-transparent p-0"
                  >
                    <a
                      href={item.href}
                      className="block w-full px-4 py-2.5 font-tron text-xs tracking-[0.1em] transition-all duration-200 group"
                      style={{ color: 'rgba(232,244,253,0.6)' }}
                      onMouseEnter={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.color = '#00E5FF';
                        el.style.background = 'rgba(0,229,255,0.05)';
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.color = 'rgba(232,244,253,0.6)';
                        el.style.background = 'transparent';
                      }}
                    >
                      <span className="inline-flex items-center gap-2">
                        <span style={{ color: 'rgba(0,229,255,0.4)' }}>&gt;</span>
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
            className="md:hidden p-2 transition-all duration-200"
            style={{ color: '#00E5FF' }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden mt-4 py-4"
            style={{ borderTop: '1px solid rgba(0,229,255,0.15)' }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 font-tron text-xs tracking-[0.12em] transition-colors duration-200"
                style={{ color: 'rgba(232,244,253,0.6)' }}
                onClick={() => setIsMobileMenuOpen(false)}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#00E5FF'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(232,244,253,0.6)'; }}
              >
                <span style={{ color: 'rgba(0,229,255,0.4)', marginRight: '8px' }}>{'>'}</span>
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
