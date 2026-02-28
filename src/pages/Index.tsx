import { useEffect, useState, lazy, Suspense } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import CustomCursor from '../components/CustomCursor';
import Header from '../components/Header';
import Hero from '../components/Hero';
// Lazy load below-the-fold components
const IntroAnimation = lazy(() => import('../components/IntroAnimation'));
const AnimatedBackground = lazy(() => import('../components/AnimatedBackground'));
const EngineeringDomains = lazy(() => import('../components/EngineeringDomains'));
const SystemArchitecture = lazy(() => import('../components/SystemArchitecture'));
const Projects = lazy(() => import('../components/Projects'));
const Experience = lazy(() => import('../components/Experience'));
const DataIntelligence = lazy(() => import('../components/DataIntelligence'));
const Philosophy = lazy(() => import('../components/Philosophy'));
const Skills = lazy(() => import('../components/Skills'));
const Credentials = lazy(() => import('../components/Credentials'));
const Footer = lazy(() => import('../components/Footer'));

const Index = () => {
  // Always show the quick 2.5s intro boot sequence on initial load
  const [showIntro, setShowIntro] = useState(true);
  const [loadHeavy, setLoadHeavy] = useState(false);

  useEffect(() => {
    // Defer below-the-fold components to reduce initial JS execution and network requests
    // This dramatically improves FCP and LCP on mobile devices
    const timer = setTimeout(() => {
      setLoadHeavy(true);
    }, 1500);
    return () => clearTimeout(timer);
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
      <div className="min-h-screen bg-transparent text-white relative overflow-x-hidden animate-fade-in">

        <CustomCursor />

        {/* Render AnimatedBackground in parallel (Lazy loaded) */}
        <Suspense fallback={null}>
          <AnimatedBackground />
        </Suspense>

        <Header />
        <Hero delayAnimation={showIntro} />


        {loadHeavy && (
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-primary animate-pulse">Loading core systems...</div>}>
            <EngineeringDomains />
            <SystemArchitecture />
            <Projects />
            <Experience />
            <DataIntelligence />
            <Philosophy />
            <Skills />
            <Credentials />
            <Footer />
          </Suspense>
        )}
      </div>
      <SpeedInsights />
    </>
  );
};

export default Index;
