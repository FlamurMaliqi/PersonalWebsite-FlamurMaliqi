
import React from 'react';

const education = [
  {
    id: 1,
    degree: "Bachelor of Informatik",
    school: "Technische Hochschule Ingolstadt",
    date: "2022 - 2026",
    description: "Currently pursuing a Bachelor's degree in Computer Science."
  },
  {
    id: 2,
    degree: "Allgemeine Hochschulreife",
    school: "Descartes Gymnasium Neuburg",
    date: "2013 - 2022",
    description: "Completed high school education with excellence."
  }
];

const certifications = [
  "PostgreSQL",
  "Vue.js",
  "Matlab"
];

const scholarships = [
  {
    name: "Heinrich Böll Stipendiat",
    provider: "Heinrich-Böll-Stiftung",
    year: "2025",
    description: "The Heinrich Böll Foundation is a politically green-oriented foundation that supports students with social commitment and excellent academic achievements both financially and ideally."
  },
  {
    name: "Deutschlandstipendium",
    provider: "German Scholarship",
    year: "2023",
    description: "Merit-based scholarship awarded for academic excellence and social commitment."
  },
  {
    name: "DPG-Abiturpreis",
    provider: "Deutsche Physikalische Gesellschaft",
    year: "2022",
    description: "Award for excellence in physics during high school education."
  },
  {
    name: "Innovation Award RealLabor Kreathon",
    provider: "Audi Sport GmbH",
    year: "2023",
    description: "Recognized for developing an innovative, community-based work scheduling system that makes shift planning more flexible, efficient, and socially inclusive."
  }
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
          
          {/* Scholarships Section */}
          <div className="border-4 border-gray-700 bg-gray-900 p-4 mb-6">
            <h3 className="text-lg font-bold text-white mb-4">SCHOLARSHIPS & AWARDS</h3>
            
            {scholarships.map((scholarship, index) => (
              <div key={index} className="mb-4 border-l-2 border-[#76c6d9] pl-3">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-[#76c6d9]">{scholarship.name}</h4>
                  <span className="bg-gray-800 px-2 py-0.5 text-xs text-gray-400 border border-gray-700">
                    {scholarship.year}
                  </span>
                </div>
                <p className="text-gray-300 text-sm mb-1">{scholarship.provider}</p>
                <p className="text-gray-400 text-xs">{scholarship.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <div className="border-4 border-gray-700 bg-gray-900 p-4">
            <h3 className="text-lg font-bold text-white mb-4">TOP SKILLS</h3>
            
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
