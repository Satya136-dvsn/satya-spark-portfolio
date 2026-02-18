import { useEffect, useState, lazy, Suspense } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Header from '../components/Header';
import Hero from '../components/Hero';
// Lazy load below-the-fold components
const IntroAnimation = lazy(() => import('../components/IntroAnimation'));
const About = lazy(() => import('../components/About'));
const AnimatedBackground = lazy(() => import('../components/AnimatedBackground')); // Heavy Canvas
const Experience = lazy(() => import('../components/Experience'));
const Projects = lazy(() => import('../components/Projects'));
const Skills = lazy(() => import('../components/Skills'));
const Certifications = lazy(() => import('../components/Certifications'));
const Publications = lazy(() => import('../components/Publications'));
const SkillBadges = lazy(() => import('../components/SkillBadges'));
const Awards = lazy(() => import('../components/Awards'));
const Contact = lazy(() => import('../components/Contact'));
const Footer = lazy(() => import('../components/Footer'));

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Synchronous initialization to prevent flash and ensure correct initial state
  const [showIntro, setShowIntro] = useState(() => {
    const hasVisited = sessionStorage.getItem('portfolio-session-visited');
    const isMobile = window.innerWidth < 768;

    if (!hasVisited && !isMobile) {
      sessionStorage.setItem('portfolio-session-visited', 'true');
      return true;
    }
    return false;
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <>
      {/* Intro Animation - shows only on first visit */}
      {showIntro && (
        <Suspense
          fallback={
            <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050511]">
              <div className="w-28 h-28 md:w-40 md:h-40 rounded-full bg-slate-900/50 border border-white/10 animate-pulse mb-8"></div>
              <div className="h-8 w-64 bg-slate-800/50 rounded animate-pulse"></div>
            </div>
          }
        >
          <IntroAnimation onComplete={handleIntroComplete} />
        </Suspense>
      )}

      {/* Main Content - Dark theme only */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-x-hidden animate-fade-in">
        {/* Custom cursor - hidden on mobile */}
        <div
          className="hidden md:block fixed w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pointer-events-none z-40 mix-blend-difference transition-transform duration-100 ease-out"
          style={{
            left: mousePosition.x - 8,
            top: mousePosition.y - 8,
            transform: 'scale(1)',
          }}
        />

        {/* Render AnimatedBackground in parallel (Lazy loaded) */}
        <Suspense fallback={null}>
          <AnimatedBackground />
        </Suspense>

        <Header />
        <Hero delayAnimation={showIntro} />


        <Suspense fallback={<div className="min-h-screen" />}>
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Publications />
          <Certifications />
          <SkillBadges />
          <Awards />
          <Contact />
          <Footer />
        </Suspense>
      </div>
      <SpeedInsights />
    </>
  );
};

export default Index;
