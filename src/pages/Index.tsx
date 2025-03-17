
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
    <div className="min-h-screen bg-black relative binary-bg">
      <div className="binary-overlay"></div>
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <div id="home" className={`min-h-screen flex flex-col ${activeSection === 'home' ? 'block' : 'hidden'}`}>
          <div className="flex-grow pt-16">
            <Hero />
          </div>
          <Separator className="my-8 bg-gray-700" />
        </div>
        
        <div id="about" className={`min-h-screen flex flex-col ${activeSection === 'about' ? 'block' : 'hidden'}`}>
          <div className="flex-grow pt-16">
            <About />
          </div>
          <Separator className="my-8 bg-gray-700" />
        </div>
        
        <div id="experience" className={`min-h-screen flex flex-col ${activeSection === 'experience' ? 'block' : 'hidden'}`}>
          <div className="flex-grow pt-16">
            <Experience />
          </div>
          <Separator className="my-8 bg-gray-700" />
        </div>
        
        <div id="projects" className={`min-h-screen flex flex-col ${activeSection === 'projects' ? 'block' : 'hidden'}`}>
          <div className="flex-grow pt-16">
            <Projects />
          </div>
          <Separator className="my-8 bg-gray-700" />
        </div>
        
        <div id="education" className={`min-h-screen flex flex-col ${activeSection === 'education' ? 'block' : 'hidden'}`}>
          <div className="flex-grow pt-16">
            <Education />
          </div>
          <Separator className="my-8 bg-gray-700" />
        </div>
        
        <div id="skills" className={`min-h-screen flex flex-col ${activeSection === 'skills' ? 'block' : 'hidden'}`}>
          <div className="flex-grow pt-16">
            <Skills />
          </div>
          <Separator className="my-8 bg-gray-700" />
        </div>
        
        <div id="contact" className={`min-h-screen flex flex-col ${activeSection === 'contact' ? 'block' : 'hidden'}`}>
          <div className="flex-grow pt-16">
            <Contact />
          </div>
          <Separator className="my-8 bg-gray-700" />
        </div>
        
        <footer className="mt-auto text-center text-gray-500 text-xs py-6">
          <p className="mb-2">© {new Date().getFullYear()} | Made with pixel power</p>
          <div className="text-[10px] binary-code">01001100 01101111 01110110 01100001 01100010 01101100 01100101</div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
