
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

const projects = [
  {
    id: 1,
    title: "Bus Booking System",
    description: "A bus booking tool for the local community",
    technologies: ["React", "Quarkus"],
    image: "/lovable-uploads/227722af-c549-481b-92a7-1bb07b1b5652.png",
    demoLink: "https://www.vgi-bus-booking.de/",
    codeLink: "https://github.com/FlamurMaliqi/CodingSample"
  },
  {
    id: 2,
    title: "Data Visualizer",
    description: "Interactive data visualization dashboard for business analytics",
    technologies: ["D3.js", "Vue", "Firebase"],
    image: "/lovable-uploads/227722af-c549-481b-92a7-1bb07b1b5652.png",
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description: "Full-featured online store with payment processing",
    technologies: ["React", "GraphQL", "Stripe"],
    image: "/lovable-uploads/227722af-c549-481b-92a7-1bb07b1b5652.png",
    demoLink: "#",
    codeLink: "#"
  }
];

const Projects = () => {
  return (
    <div className="pixel-fade-in">
      <h2 className="text-2xl font-bold mb-6 text-[#76c6d9] inline-flex items-center">
        <span className="bg-[#76c6d9] w-3 h-3 mr-2"></span>
        PROJECTS
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <Card 
            key={project.id} 
            className="border-4 border-gray-700 bg-gray-900 hover:transform hover:-translate-y-1 transition-transform duration-200"
          >
            <div className="relative border-b-4 border-gray-800 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover filter brightness-50 contrast-125" 
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <h3 className="text-xl font-bold text-white text-center px-4">{project.title}</h3>
              </div>
            </div>
            
            <CardContent className="p-4">
              <p className="text-gray-300 mb-4 h-12 overflow-hidden">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} className="bg-gray-800 text-[#76c6d9] border-2 border-gray-700">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            
            <CardFooter className="flex gap-3 p-4 pt-0">
              <Button 
                className="w-1/2 pixel-btn bg-gray-800 text-[#76c6d9] hover:bg-[#76c6d9] hover:text-black" 
                size="sm"
                onClick={() => window.open(project.demoLink, '_blank')}
              >
                DEMO
              </Button>
              <Button 
                className="w-1/2 pixel-btn bg-gray-800 text-[#76c6d9] hover:bg-[#76c6d9] hover:text-black" 
                size="sm"
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
