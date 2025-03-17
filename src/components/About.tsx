
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const About = () => {
  return (
    <div className="pixel-fade-in">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <div className="border-4 border-gray-700 bg-gray-900 p-4 mb-4">
            <div className="border-4 border-black bg-gray-800 p-1 mb-4">
              <Avatar className="w-full h-auto aspect-square rounded-none">
                <AvatarImage 
                  src="/lovable-uploads/3e21a508-7437-4278-b293-c8787a8a17b6.png" 
                  alt="Profile Picture"
                  className="w-full h-auto object-cover filter contrast-110"
                />
                <AvatarFallback className="bg-gray-800 text-[#76c6d9]">FM</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-wrap gap-2">
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
              <p className="mb-4 leading-relaxed">Hello World! I am a Computer Science student in Ingolstadt, previously an intern at Audi Formel 1, IBM, and AWS.</p>
              <p className="mb-4 leading-relaxed">I love hackathons and enjoy building innovative solutions that push the boundaries of technology.</p>
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
