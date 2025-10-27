
import { useEffect, useState, lazy, Suspense } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import IntroAnimation from '../components/IntroAnimation';
import About from '../components/About';
import AnimatedBackground from '../components/AnimatedBackground';

// Lazy load below-the-fold components
const Experience = lazy(() => import('../components/Experience'));
const Projects = lazy(() => import('../components/Projects'));
const Skills = lazy(() => import('../components/Skills'));
const Certifications = lazy(() => import('../components/Certifications'));
const Publications = lazy(() => import('../components/Publications'));
const SkillBadges = lazy(() => import('../components/SkillBadges'));
const Awards = lazy(() => import('../components/Awards'));
const Contact = lazy(() => import('../components/Contact'));

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showIntro, setShowIntro] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setTimeout(() => setShowMainContent(true), 300);
  };

  return (
    <>
      {/* Intro Animation */}
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      
      {/* Main Content */}
      <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-x-hidden transition-opacity duration-500 ${showMainContent ? 'opacity-100' : 'opacity-0'}`}>
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
        </Suspense>
      </div>
    </>
  );
};

export default Index;
