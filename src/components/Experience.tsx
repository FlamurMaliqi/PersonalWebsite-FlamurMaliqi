
import React, { useState } from 'react';
import { Separator } from '@/components/ui/separator';

// Sample experience data
const experiences = [
  {
    id: 1,
    title: "Senior Developer",
    company: "TechCorp",
    date: "2021 - Present",
    description: [
      "Led development of key applications with React and Node.js",
      "Managed team of 5 developers on critical projects",
      "Implemented CI/CD pipelines reducing deployment time by 40%"
    ],
    icon: "/lovable-uploads/06c5d1ab-d48c-4035-9afe-22a35922fcd4.png"
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "WebSolutions",
    date: "2018 - 2021",
    description: [
      "Built responsive web applications with modern JavaScript frameworks",
      "Developed RESTful APIs and microservices",
      "Collaborated with design team to implement pixel-perfect UIs"
    ],
    icon: "/lovable-uploads/2b41ee63-6088-4b23-b139-bd03db8eeedf.png"
  },
  {
    id: 3,
    title: "Junior Developer",
    company: "StartupInc",
    date: "2016 - 2018",
    description: [
      "Developed and maintained client websites",
      "Created internal tools to improve team efficiency",
      "Participated in code reviews and implemented best practices"
    ],
    icon: "/lovable-uploads/3a8891e9-83ed-4c72-90a9-82bf3e0d0d62.png"
  }
];

const Experience = () => {
  const [activeExp, setActiveExp] = useState(experiences[0].id);

  return (
    <div className="pixel-fade-in">
      <h2 className="text-2xl font-bold mb-6 text-[#76c6d9] inline-flex items-center">
        <span className="bg-[#76c6d9] w-3 h-3 mr-2"></span>
        WORK EXPERIENCE
      </h2>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <div className="border-4 border-gray-700 bg-gray-900 p-2">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveExp(exp.id)}
                className={`w-full text-left p-3 mb-2 border-4 ${
                  activeExp === exp.id 
                    ? 'border-[#76c6d9] bg-gray-800 text-white' 
                    : 'border-gray-800 bg-gray-900 text-gray-400 hover:border-gray-600'
                }`}
              >
                <div className="flex items-center">
                  <img src={exp.icon} alt={exp.company} className="w-6 h-6 mr-2" />
                  <span>{exp.company}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
        
        <div className="md:w-2/3">
          {experiences
            .filter(exp => exp.id === activeExp)
            .map(experience => (
              <div key={experience.id} className="border-4 border-gray-700 bg-gray-900 p-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{experience.title}</h3>
                    <p className="text-[#76c6d9]">{experience.company}</p>
                  </div>
                  <span className="bg-gray-800 px-3 py-1 text-gray-400 text-xs border-2 border-gray-700">
                    {experience.date}
                  </span>
                </div>
                
                <Separator className="my-4 bg-gray-700" />
                
                <ul className="space-y-2">
                  {experience.description.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#76c6d9] mr-2">›</span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
