
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import IntroAnimation from '../components/IntroAnimation';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import Publications from '../components/Publications';
import SkillBadges from '../components/SkillBadges';
import Awards from '../components/Awards';
import Contact from '../components/Contact';
import AnimatedBackground from '../components/AnimatedBackground';

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
        {/* Custom cursor */}
        <div 
          className="fixed w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pointer-events-none z-40 mix-blend-difference transition-transform duration-100 ease-out"
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
        <Experience />
        <Projects />
        <Skills />
        <Publications />
        <Certifications />
        <SkillBadges />
        <Awards />
        <Contact />
      </div>
    </>
  );
};

export default Index;
