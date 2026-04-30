import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Download, Github } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface HeroProps {
  delayAnimation?: boolean;
}

// Typewriter hook — streams text char by char
function useTypewriter(text: string, speed = 55, startDelay = 600) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [text, speed, startDelay]);

  return { displayed, done };
}

const HEADLINE = 'Duba Venkata Satyanarayana';

const Hero = ({ delayAnimation = false }: HeroProps) => {
  const { toast } = useToast();
  const { displayed, done } = useTypewriter(HEADLINE, 52, delayAnimation ? 2800 : 600);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delayAnimation ? 2200 : 200);
    return () => clearTimeout(t);
  }, [delayAnimation]);

  const handleResumeDownload = () => {
    toast({
      title: "📄 Resume Access Initiated",
      description: "Opening in a new tab.",
    });
  };

  return (
    <section
      id="home"
      className="min-h-[95vh] flex flex-col items-center justify-center relative z-10 px-6 pt-32 pb-20 overflow-hidden"
    >
      {/* Subtle background terminal coordinates */}
      <div
        className="absolute inset-0 flex items-end justify-end p-8 pointer-events-none select-none"
        aria-hidden="true"
      >
        <div className="font-tron text-[10px] text-right leading-6 tracking-widest"
          style={{ color: 'rgba(0,229,255,0.06)' }}>
          <div>// GRID_RUNNER v3.0</div>
          <div>// SATYA :: SYSTEMS</div>
          <div>// NODE_01 :: ONLINE</div>
          <div>// LAT: 17.3850N</div>
          <div>// LON: 78.4867E</div>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl flex flex-col items-center text-center">

        {/* Status Badge */}
        <div
          className="inline-flex items-center gap-2.5 px-4 py-2 mb-10 font-tron text-xs tracking-[0.12em] uppercase"
          style={{
            background: 'rgba(0,229,255,0.04)',
            border: '1px solid rgba(0,229,255,0.2)',
            color: 'rgba(232,244,253,0.7)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
          }}
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span
              className="absolute inline-flex h-full w-full rounded-full animate-ping"
              style={{ background: '#00E5FF', opacity: 0.5 }}
            />
            <span
              className="relative inline-flex h-2 w-2 rounded-full"
              style={{ background: '#00E5FF', boxShadow: '0 0 6px #00E5FF' }}
            />
          </span>
          <span>SYSTEM ONLINE</span>
          <span style={{ color: 'rgba(0,229,255,0.3)' }}>|</span>
          <span>Open · Backend · Full Stack · Data Engineering · 2025 Graduate</span>
        </div>

        {/* Typewriter Headline */}
        <div
          className="relative mb-5"
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.4s ease',
            transitionDelay: '0.2s',
          }}
        >
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-tron font-bold leading-[1.08] tracking-tight"
            style={{
              color: '#E8F4FD',
              textShadow: done
                ? '0 0 30px rgba(0,229,255,0.15), 0 0 60px rgba(0,229,255,0.06)'
                : 'none',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
            }}
          >
            {displayed}
            {/* Blinking cursor */}
            {!done && (
              <span
                className="inline-block ml-0.5 align-middle"
                style={{
                  width: '3px',
                  height: '0.85em',
                  background: '#00E5FF',
                  marginBottom: '2px',
                  animation: 'blink-cursor 0.8s step-end infinite',
                  boxShadow: '0 0 8px rgba(0,229,255,0.8)',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                }}
              />
            )}
          </h1>
          {/* Hover underline — always visible after typewriter */}
          {done && (
            <div
              className="absolute -bottom-2 left-0 h-[2px]"
              style={{
                width: '100%',
                background: 'linear-gradient(90deg, rgba(0,229,255,0.8) 0%, rgba(0,229,255,0.2) 100%)',
                boxShadow: '0 0 8px rgba(0,229,255,0.4)',
              }}
            />
          )}
        </div>

        {/* Subtitle */}
        <h2
          className="text-xl md:text-2xl lg:text-3xl font-grotesk font-semibold mb-6 tracking-wide"
          style={{
            color: '#00E5FF',
            textShadow: '0 0 20px rgba(0,229,255,0.3)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.5s ease 0.5s, transform 0.5s ease 0.5s',
          }}
        >
          Engineering Scalable Systems Across Backend, Full Stack &amp; Data
        </h2>

        {/* Subtext */}
        <p
          className="text-base md:text-lg font-grotesk font-normal tracking-wide max-w-2xl mb-12"
          style={{
            color: 'rgba(61,107,136,1)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.5s ease 0.7s, transform 0.5s ease 0.7s',
          }}
        >
          I design REST APIs, SQL-backed systems, cloud-ready applications, and data-driven platforms.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.5s ease 0.9s, transform 0.5s ease 0.9s',
          }}
        >
          <a
            href="#projects"
            className="btn-tron-supernova w-full sm:w-auto justify-center group"
          >
            VIEW PROJECTS
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="https://drive.google.com/file/d/11rZ6GyvXbUFW7T33JYh07Qk_j9INeN96/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleResumeDownload}
            className="btn-tron-ghost w-full sm:w-auto justify-center hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Download className="w-4 h-4 text-[#FF6B00]" />
            DOWNLOAD RESUME
          </a>

          <a
            href="https://github.com/Satya136-dvsn"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tron-ghost w-full sm:w-auto justify-center hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Github className="w-4 h-4" />
            GITHUB
          </a>
        </div>

        {/* Tron separator below CTAs */}
        <div
          className="mt-16 w-48 tron-sep"
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.6s ease 1.2s',
          }}
        />

        {/* Terminal footer signature */}
        <div
          className="mt-4 font-tron text-[11px] tracking-widest"
          style={{
            color: 'rgba(0,229,255,0.2)',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.6s ease 1.4s',
          }}
        >
          // BACKEND · FULL STACK · DATA · SYSTEMS DESIGN
        </div>

      </div>
    </section>
  );
};

export default Hero;
