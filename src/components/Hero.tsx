
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'FLAMUR MALIQI';
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleNavigation = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full text-center pixel-fade-in">
      <div className="max-w-5xl w-full mx-auto">
        <img src="/lovable-uploads/2b41ee63-6088-4b23-b139-bd03db8eeedf.png" alt="Pixel Computer" className="w-32 h-32 mx-auto mb-6" />
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#76c6d9]">
          {typedText}
          <span className={`text-white ${showCursor ? 'opacity-100' : 'opacity-0'}`}>_</span>
        </h1>
        
        <div className="bg-gray-900 border-4 border-gray-700 p-6 mb-8 inline-block w-full max-w-2xl">
          <p className="text-gray-300 text-xl">SOFTWARE DEVELOPER</p>
          <div className="flex justify-center items-center my-3">
            <span className="inline-block w-4 h-4 bg-red-500 mr-2 animate-pulse"></span>
            <span className="inline-block w-4 h-4 bg-yellow-500 mr-2 animate-pulse delay-75"></span>
            <span className="inline-block w-4 h-4 bg-green-500 animate-pulse delay-150"></span>
          </div>
          <p className="text-white text-base whitespace-pre-wrap">WELCOME TO MY DIGITAL PORTFOLIO</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            className="pixel-btn hover:bg-[#76c6d9] text-base py-3 px-6" 
            variant="outline"
            onClick={() => handleNavigation('projects')}
          >
            VIEW PROJECTS
          </Button>
          <Button 
            className="pixel-btn hover:bg-[#76c6d9] text-base py-3 px-6" 
            variant="outline"
            onClick={() => handleNavigation('contact')}
          >
            CONTACT ME
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
