
import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-black">
        <div className="text-[#76c6d9] text-2xl mb-8">LOADING...</div>
        <div className="w-64 h-8 border-4 border-white p-0.5 bg-black">
          <div 
            className="h-full bg-[#76c6d9]"
            style={{ 
              width: '100%', 
              transition: 'width 2s linear',
              animation: 'pixel-blink 0.5s infinite' 
            }}
          ></div>
        </div>
        <div className="mt-6 binary-overlay opacity-30 fixed inset-0 pointer-events-none"></div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-black relative binary-bg flex flex-col">
      <div className="binary-overlay"></div>
      
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <div className="container mx-auto px-4 py-8 relative z-10 flex-grow overflow-auto">
        <div id="home" className={`pt-16 pb-4 ${activeSection === 'home' ? 'block' : 'hidden'}`}>
          <Hero />
        </div>
        
        <div id="about" className={`pt-16 pb-4 ${activeSection === 'about' ? 'block' : 'hidden'}`}>
          <About />
        </div>
        
        <div id="experience" className={`pt-16 pb-4 ${activeSection === 'experience' ? 'block' : 'hidden'}`}>
          <Experience />
        </div>
        
        <div id="projects" className={`pt-16 pb-4 ${activeSection === 'projects' ? 'block' : 'hidden'}`}>
          <Projects />
        </div>
        
        <div id="education" className={`pt-16 pb-4 ${activeSection === 'education' ? 'block' : 'hidden'}`}>
          <Education />
        </div>
        
        <div id="skills" className={`pt-16 pb-4 ${activeSection === 'skills' ? 'block' : 'hidden'}`}>
          <Skills />
        </div>
        
        <div id="contact" className={`pt-16 pb-4 ${activeSection === 'contact' ? 'block' : 'hidden'}`}>
          <Contact />
        </div>
      </div>
      
      <footer className="text-center text-gray-500 text-xs py-6 px-4 border-t border-gray-800">
        <p className="mb-2">© {new Date().getFullYear()} | Made with pixel power</p>
        <div className="text-[10px] binary-code">01001100 01101111 01110110 01100001 01100010 01101100 01100101</div>
      </footer>
    </div>
  );
};

export default Index;
