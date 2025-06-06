import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import './styles/animations.css';

function App() {
  const [currentProject, setCurrentProject] = useState<string | null>(null);

  useEffect(() => {
    // Update page title
    document.title = 'SiteCraft - Web Design Agency for Local Businesses';
    
    // Simple scroll animation
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-animation');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate-fadeIn');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Handle hash-based routing
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/project/')) {
        setCurrentProject(hash.replace('#/project/', ''));
      } else {
        setCurrentProject(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check initial hash
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main>
        {currentProject ? (
          <ProjectDetail 
            projectId={currentProject} 
            onBack={() => {
              window.location.hash = '#portfolio';
              setCurrentProject(null);
            }}
          />
        ) : (
          <>
            <Hero />
            <div className="scroll-animation opacity-0">
              <Portfolio />
            </div>
            <div className="scroll-animation opacity-0">
              <Features />
            </div>
            <div className="scroll-animation opacity-0">
              <Testimonials />
            </div>
            <div className="scroll-animation opacity-0">
              <Process />
            </div>
            <div className="scroll-animation opacity-0">
              <CTA />
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;