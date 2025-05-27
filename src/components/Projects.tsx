import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

const projects = [
  {
    id: 1,
    title: "Audi Kreathon - Smart Shift Scheduling",
    description: "Led the development of an award-winning intelligent shift scheduling system for Audi's workforce. The platform enabled employees to input shift preferences while using smart algorithms to optimize schedules. The project won both the Innovation Prize and Jury Prize at Audi RealLabor Kreathon 2023, leading to the formation of a GbR partnership and proof-of-concept phase for internal Audi implementation.",
    technologies: ["React", "Node.js", "Algorithms", "UI/UX Design"],
    image: "/lovable-uploads/audi-logo.png",
    demoLink: "https://www.figma.com/design/5d0fiyxMTMrDGq6i4zoAep/AUDI?node-id=0-1&t=lRBo2PLXj8YFZFDT-0",
    codeLink: "https://www.figma.com/design/5d0fiyxMTMrDGq6i4zoAep/AUDI?node-id=0-1&t=lRBo2PLXj8YFZFDT-0"
  },
  {
    id: 2,
    title: "Evia - Future of Communication",
    description: "A cutting-edge communication platform that revolutionizes how teams interact and collaborate. The platform focuses on creating an unfair advantage through innovative communication solutions, featuring a modern web interface and robust team management capabilities.",
    technologies: ["React", "Node.js", "UI/UX Design", "Web Development"],
    image: "/lovable-uploads/evia-logo.png",
    demoLink: "https://www.evia.work",
    codeLink: "https://www.evia.work"
  },
  {
    id: 3,
    title: "Bus Booking System",
    description: "A bus booking tool for the local community",
    technologies: ["React", "Quarkus"],
    image: "/lovable-uploads/8060861b-719c-401b-a638-6c062ad4013a.png",
    demoLink: "https://www.vgi-bus-booking.de/",
    codeLink: "https://github.com/FlamurMaliqi/CodingSample"
  }
];

const Projects = () => {
  return (
    <div className="pixel-fade-in pt-20">
      <h2 className="text-2xl font-bold mb-6 text-[#76c6d9] inline-flex items-center">
        <span className="bg-[#76c6d9] w-3 h-3 mr-2"></span>
        PROJECTS
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(project => (
          <Card 
            key={project.id} 
            className="border-4 border-gray-700 bg-gray-900 hover:transform hover:-translate-y-1 transition-transform duration-200"
          >
            <div className="relative border-b-4 border-gray-800 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover filter brightness-50 contrast-125" 
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white text-center px-4">{project.title}</h3>
              </div>
            </div>
            
            <CardContent className="p-6">
              <p className="text-gray-300 mb-6 text-lg">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} className="bg-gray-800 text-[#76c6d9] border-2 border-gray-700 text-base py-1 px-3">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            
            <CardFooter className="flex gap-4 p-6 pt-0">
              <Button 
                className="w-1/2 pixel-btn bg-gray-800 text-[#76c6d9] hover:bg-[#76c6d9] hover:text-black text-lg py-6" 
                size="lg"
                onClick={() => window.open(project.demoLink, '_blank')}
              >
                DEMO
              </Button>
              <Button 
                className="w-1/2 pixel-btn bg-gray-800 text-[#76c6d9] hover:bg-[#76c6d9] hover:text-black text-lg py-6" 
                size="lg"
                onClick={() => window.open(project.codeLink, '_blank')}
              >
                CODE
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
