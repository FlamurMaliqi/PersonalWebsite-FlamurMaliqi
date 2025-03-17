
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
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

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center pixel-fade-in">
      <div className="max-w-4xl mx-auto">
        <img src="/lovable-uploads/2b41ee63-6088-4b23-b139-bd03db8eeedf.png" alt="Pixel Computer" className="w-24 h-24 mx-auto mb-6" />
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#76c6d9]">
          {typedText}
          <span className={`text-white ${showCursor ? 'opacity-100' : 'opacity-0'}`}>_</span>
        </h1>
        
        <div className="bg-gray-900 border-4 border-gray-700 p-4 mb-8 inline-block">
          <p className="text-gray-300 mb-2 text-lg">SOFTWARE DEVELOPER</p>
          <div className="flex justify-center items-center mb-2">
            <span className="inline-block w-3 h-3 bg-red-500 mr-1 animate-pulse"></span>
            <span className="inline-block w-3 h-3 bg-yellow-500 mr-1 animate-pulse delay-75"></span>
            <span className="inline-block w-3 h-3 bg-green-500 animate-pulse delay-150"></span>
          </div>
          <p className="text-white text-sm whitespace-pre-wrap">WELCOME TO MY DIGITAL PORTFOLIO</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="pixel-btn hover:bg-[#76c6d9]" variant="outline">
            VIEW PROJECTS
          </Button>
          <Button className="pixel-btn hover:bg-[#76c6d9]" variant="outline">
            CONTACT ME
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
