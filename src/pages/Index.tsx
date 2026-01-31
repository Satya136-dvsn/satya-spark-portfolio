import { useEffect, useState, lazy, Suspense } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import AnimatedBackground from '../components/AnimatedBackground';
import IntroAnimation from '../components/IntroAnimation';

// Lazy load below-the-fold components
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
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    // Check if this is the first visit
    // const hasVisited = localStorage.getItem('portfolio-visited');
    // if (!hasVisited) {
    setShowIntro(true);
    //   localStorage.setItem('portfolio-visited', 'true');
    // }
  }, []);

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
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}

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

        <AnimatedBackground />
        <Header />
        <Hero />
        <About />
        <Suspense fallback={<div className="min-h-screen" />}>
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
