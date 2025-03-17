
import React from 'react';
import { Badge } from '@/components/ui/badge';

const About = () => {
  return (
    <div className="pixel-fade-in">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <div className="border-4 border-gray-700 bg-gray-900 p-4 mb-4">
            <div className="border-4 border-black bg-gray-800 p-1">
              <img 
                src="/lovable-uploads/227722af-c549-481b-92a7-1bb07b1b5652.png" 
                alt="Binary Pattern" 
                className="w-full h-auto filter brightness-50 contrast-150 mb-4" 
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge className="pixel-borders bg-gray-800 text-[#76c6d9]">DEVELOPER</Badge>
              <Badge className="pixel-borders bg-gray-800 text-[#76c6d9]">ENGINEER</Badge>
              <Badge className="pixel-borders bg-gray-800 text-[#76c6d9]">TECH</Badge>
            </div>
          </div>
        </div>
        
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold mb-4 text-[#76c6d9] inline-flex items-center">
            <span className="bg-[#76c6d9] w-3 h-3 mr-2"></span>
            ABOUT ME
          </h2>
          
          <div className="terminal-window border-4 border-gray-700 bg-gray-900 p-4">
            <div className="flex mb-2">
              <span className="inline-block w-3 h-3 bg-red-500 mr-1"></span>
              <span className="inline-block w-3 h-3 bg-yellow-500 mr-1"></span>
              <span className="inline-block w-3 h-3 bg-green-500"></span>
            </div>
            <div className="text-gray-300 mb-6">
              <p className="mb-4 leading-relaxed">Hello World! I'm a passionate developer/engineer with experience in building and designing software.</p>
              <p className="mb-4 leading-relaxed">I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.</p>
              <p className="leading-relaxed">My goal is to always build products that provide pixel-perfect, performant experiences.</p>
            </div>
            <div className="flex items-center">
              <span className="text-[#76c6d9] mr-2">$</span>
              <span className="text-white pixel-blink">_</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
