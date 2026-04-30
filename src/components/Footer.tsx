import { useState } from 'react';
import { Mail, Github, Linkedin, ArrowUp, Terminal } from 'lucide-react';

const SOCIAL_LINKS = [
  {
    label: 'GITHUB',
    href: 'https://github.com/Satya136-dvsn',
    icon: Github,
    ariaLabel: 'GitHub'
  },
  {
    label: 'LINKEDIN',
    href: 'https://www.linkedin.com/in/venkatasatyanarayana-duba-679372255',
    icon: Linkedin,
    ariaLabel: 'LinkedIn'
  },
  {
    label: 'MAIL',
    href: 'mailto:d.v.satyanarayana260@gmail.com',
    icon: Mail,
    ariaLabel: 'Email'
  }
];

const NAV_LINKS = [
  { label: 'home',       href: '#home' },
  { label: 'about',      href: '#about' },
  { label: 'projects',   href: '#projects' },
  { label: 'experience', href: '#experience' },
  { label: 'skills',     href: '#skills' },
];

const Footer = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative z-10 bg-[#01060F] border-t border-[#0A2540] overflow-hidden">
      {/* Top circuit trace */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent" />

      {/* Background grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,229,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,229,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto max-w-5xl px-6 pt-12 pb-8 relative">

        {/* Main content row */}
        <div className="grid md:grid-cols-3 gap-10 border-b border-[#0A2540] pb-10 mb-8">

          {/* Identity block */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1.5 h-1.5 rotate-45 bg-[#00E5FF] shadow-[0_0_8px_rgba(0,229,255,0.8)]" />
              <p className="font-mono text-[10px] text-[#00E5FF]/50 tracking-[0.3em] uppercase">OPERATOR_ID</p>
            </div>
            <h3 className="font-mono text-xl font-bold text-[#E0F7FA] tracking-tight mb-1">
              D V Satyanarayana
            </h3>
            <p className="font-mono text-xs text-[#00E5FF] mb-4">Systems Engineer</p>
            <div className="font-mono text-[11px] text-[#4A7A8A] space-y-1.5">
              <p>
                <span className="text-[#00E5FF]/40">TEL: </span>
                <a href="tel:+918639796150" className="hover:text-[#00E5FF] transition-colors">
                  +91 8639796150
                </a>
              </p>
              <p>
                <span className="text-[#00E5FF]/40">NET: </span>
                <a href="mailto:d.v.satyanarayana260@gmail.com" className="hover:text-[#00E5FF] transition-colors break-all">
                  d.v.satyanarayana260@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Nav links */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1.5 h-1.5 rotate-45 bg-[#00E5FF]" />
              <p className="font-mono text-[10px] text-[#00E5FF]/50 tracking-[0.3em] uppercase">SITE_MAP</p>
            </div>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-mono text-xs text-[#4A7A8A] hover:text-[#00E5FF] transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-[#00E5FF]/0 group-hover:text-[#00E5FF] transition-colors">›</span>
                    {link.label.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials + system status */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1.5 h-1.5 rotate-45 bg-[#00E5FF]" />
              <p className="font-mono text-[10px] text-[#00E5FF]/50 tracking-[0.3em] uppercase">COMMS</p>
            </div>
            <div className="flex gap-3 mb-6">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon, ariaLabel }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={ariaLabel}
                  onMouseEnter={() => setHovered(label)}
                  onMouseLeave={() => setHovered(null)}
                  className="relative flex flex-col items-center gap-1 p-3 bg-[#050D1A] border border-[#0A2540]
                             hover:border-[#00E5FF]/50 hover:bg-[#00E5FF]/5 transition-all duration-200 group"
                >
                  <Icon className="w-4 h-4 text-[#4A7A8A] group-hover:text-[#00E5FF] transition-colors" />
                  {hovered === label && (
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 font-mono text-[9px] text-[#00E5FF] bg-[#050D1A] border border-[#00E5FF]/30 px-1.5 py-0.5 whitespace-nowrap">
                      {label}
                    </span>
                  )}
                </a>
              ))}
            </div>

            {/* System status */}
            <div className="bg-[#050D1A] border border-[#0A2540] p-3">
              <div className="flex items-center gap-2 mb-2">
                <Terminal className="w-3 h-3 text-[#00E5FF]/50" />
                <p className="font-mono text-[10px] text-[#4A7A8A] tracking-widest">SYSTEM STATUS</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88] shadow-[0_0_6px_rgba(0,255,136,0.6)] animate-pulse" />
                  <span className="font-mono text-[10px] text-[#4A7A8A]">PORTFOLIO ONLINE</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88] shadow-[0_0_6px_rgba(0,255,136,0.6)] animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <span className="font-mono text-[10px] text-[#4A7A8A]">OPEN TO OPPORTUNITIES</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-mono text-[11px] text-[#4A7A8A] flex items-center gap-3">
            <span className="text-[#00E5FF]/40">©</span>
            <span>{currentYear} D V Satyanarayana</span>
            <span className="text-[#0A2540]">|</span>
            <span className="text-[#00E5FF]/40">// EOF — All nodes nominal</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 font-mono text-[11px] text-[#4A7A8A]
                       hover:text-[#00E5FF] transition-colors group border border-[#0A2540]
                       hover:border-[#00E5FF]/40 px-3 py-1.5"
          >
            <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
            RETURN_TO_TOP
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
