
import React from 'react';

const education = [
  {
    id: 1,
    degree: "Master of Computer Science",
    school: "Tech University",
    date: "2014 - 2016",
    description: "Specialized in advanced algorithms and data structures. Thesis on optimizing cloud computing architectures."
  },
  {
    id: 2,
    degree: "Bachelor of Science in Software Engineering",
    school: "State University",
    date: "2010 - 2014",
    description: "Graduated with honors. Participated in multiple programming competitions and hackathons."
  }
];

const certifications = [
  "AWS Certified Solutions Architect",
  "Google Cloud Professional Developer",
  "Microsoft Certified: Azure Developer Associate"
];

const Education = () => {
  return (
    <div className="pixel-fade-in">
      <h2 className="text-2xl font-bold mb-6 text-[#76c6d9] inline-flex items-center">
        <span className="bg-[#76c6d9] w-3 h-3 mr-2"></span>
        EDUCATION
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          {education.map(edu => (
            <div 
              key={edu.id} 
              className="border-4 border-gray-700 bg-gray-900 p-4 mb-6 relative"
            >
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#76c6d9]"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#76c6d9]"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#76c6d9]"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-[#76c6d9]"></div>
              
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                <span className="bg-gray-800 px-2 py-1 text-xs text-gray-400 border-2 border-gray-700">
                  {edu.date}
                </span>
              </div>
              
              <p className="text-[#76c6d9] mb-3">{edu.school}</p>
              <p className="text-gray-300 text-sm">{edu.description}</p>
            </div>
          ))}
        </div>
        
        <div>
          <div className="border-4 border-gray-700 bg-gray-900 p-4">
            <h3 className="text-lg font-bold text-white mb-4">CERTIFICATIONS</h3>
            
            <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-center">
                  <div className="mr-3 flex-shrink-0">
                    <img 
                      src="/lovable-uploads/06c5d1ab-d48c-4035-9afe-22a35922fcd4.png" 
                      alt="Certificate" 
                      className="w-8 h-8" 
                    />
                  </div>
                  <div className="text-gray-300">{cert}</div>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 p-3 border-2 border-gray-700 bg-gray-800">
              <h4 className="text-[#76c6d9] mb-2 text-sm">CONTINUOUS LEARNING</h4>
              <p className="text-gray-400 text-xs">Always improving skills through online courses, workshops, and self-directed learning.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
