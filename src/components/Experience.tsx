
import React, { useState } from 'react';
import { Separator } from '@/components/ui/separator';

// Experience data from LinkedIn profile
const experiences = [
  {
    id: 1,
    title: "Solution Architect Intern",
    company: "Amazon Web Services",
    date: "January 2025 - Present",
    description: [
      "Incoming"
    ],
    icon: "/lovable-uploads/4f34a40e-a575-41ef-9b28-8a6597a4567b.png"
  },
  {
    id: 2,
    title: "Software Developer Student",
    company: "EXP Software GmbH",
    date: "August 2024 - Present",
    description: [
      "Creation of RESTful APIs and microservices with Quarkus.io, utilizing Postman and Swagger UI for API testing and documentation",
      "Working with Kubernetes for deployment and management of containerized applications",
      "Utilizing Apache Camel for integration and data exchange between services"
    ],
    icon: "/lovable-uploads/1c243b2b-753e-4db9-834d-7f3b281ba35d.png"
  },
  {
    id: 3,
    title: "Software Developer Intern - IBM",
    company: "IBM",
    date: "Oktober 2024 - Februar 2025",
    description: [
      "Expanded REST API test cases for error handling (Quarkus, Java)",
      "Worked with replication technology and IBM Data Gate in a Docker & Kubernetes (OpenShift) environment",
      "Automated test execution using Jenkins",
      "Adapted the test framework for easy deployment on multiple OpenShift clusters",
      "Developed a prototype to generate C++ code from a REST interface (Apache Iceberg, IBM Data Gate)"
    ],
    icon: "/lovable-uploads/3e21a508-7437-4278-b293-c8787a8a17b6.png"
  },
  {
    id: 4,
    title: "Software Developer Intern - Audi F1 Project",
    company: "Audi F1 Project",
    date: "April 2024 - September 2024",
    description: [
      "Enhanced Formula 1 control units to improve vehicle dynamics, safety, and competitiveness by integrating software and hardware solutions",
      "Developed and optimized MATLAB Simulink models for vehicle control and simulation, focusing on handling, stability, and efficiency",
      "Implemented real-time control logic in C for embedded systems, ensuring performance and accuracy in critical functions like engine management",
      "Created Python tools to automate development processes, boosting productivity and accuracy in data analysis and system integration"
    ],
    icon: "/lovable-uploads/57b6919d-70fa-4730-8c00-9f7715e58396.png"
  },
  {
    id: 5,
    title: "Java Tutor - THI",
    company: "Technische Hochschule Ingolstadt",
    date: "März 2024 - August 2024",
    description: [
      "As a tutor for the Java lecture, I introduce students to the concepts and practices of Java development",
      "I demonstrate and explain the basics of Java programming and help about 20 students to understand and apply these concepts"
    ],
    icon: "/lovable-uploads/630551ef-8a06-49c8-96c0-18f25b952978.png"
  },
  {
    id: 7,
    title: "Student Researcher - SPARKS",
    company: "SPARKS GmbH",
    date: "Oktober 2023 - März 2024",
    description: [
      "Contributed to the KI4BoardNet research project, funded by the German Federal Ministry of Education and Research (BMBF), focusing on AI-driven optimization and automation of vehicle electrical systems",
      "Developed and integrated software for innovative zonal architectures, central computing units, and smart controllers",
      "Worked on reducing wiring complexity and improving development efficiency in future vehicle networks, culminating in the creation of a demonstrator to showcase project outcomes and applications"
    ],
    icon: "/lovable-uploads/2258aef8-0402-47b6-9e92-ae7571647866.png"
  },
  {
    id: 8,
    title: "Working Student - Maschinenringe",
    company: "Maschinenringe Deutschland GmbH",
    date: "Februar 2023 - Juli 2023",
    description: [
      "Development of SAP Projects in ABAP",
      "Experience with IS-U, CO, SAP Script, Smartforms, and Adobe Forms",
      "Developed and improved functionality in order management, warehouse management, transportation management, and financial reporting",
      "Developed all three types of SAP forms for data entry, reporting, and user interaction"
    ],
    icon: "/lovable-uploads/99a140a0-f640-475c-95e9-b499d6fb9dee.png"
  }
];

const Experience = () => {
  const [activeExp, setActiveExp] = useState(experiences[0].id);

  // Helper function to extract just the position name from the title
  const getPositionName = (title: string) => {
    // For titles with format "Position - Company", return just "Position"
    if (title.includes(" - ")) {
      return title.split(" - ")[0];
    }
    
    // For other formats, return the full title
    return title;
  };

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
                  <span>{getPositionName(exp.title)}</span>
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
                  <div className="flex items-center">
                    <img 
                      src={experience.icon} 
                      alt={experience.company} 
                      className="w-12 h-12 mr-3 border-2 border-gray-700 p-1 bg-gray-800"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-white">{experience.title}</h3>
                      <p className="text-[#76c6d9]">{experience.company}</p>
                    </div>
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
