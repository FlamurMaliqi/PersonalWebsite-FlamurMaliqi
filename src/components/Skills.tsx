
import React from 'react';

const skillsCategories = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 85 },
      { name: "C", level: 75 },
      { name: "ABAP", level: 70 }
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "Vue.js", level: 85 },
      { name: "Next.js", level: 75 },
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 }
    ]
  },
  {
    category: "Backend & Databases",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "RESTful APIs", level: 85 },
      { name: "Quarkus.io", level: 80 },
      { name: "Java EE", level: 75 }
    ]
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Matlab", level: 90 },
      { name: "Git", level: 85 },
      { name: "Docker/Kubernetes", level: 80 },
      { name: "Apache Camel", level: 75 }
    ]
  }
];

const Skills = () => {
  return (
    <div className="pixel-fade-in">
      <h2 className="text-2xl font-bold mb-6 text-[#76c6d9] inline-flex items-center">
        <span className="bg-[#76c6d9] w-3 h-3 mr-2"></span>
        SKILLS
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsCategories.map((category, index) => (
          <div key={index} className="border-4 border-gray-700 bg-gray-900 p-4">
            <h3 className="text-lg font-bold text-white mb-4">{category.category}</h3>
            
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300 text-sm">{skill.name}</span>
                    <span className="text-[#76c6d9] text-xs">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 border-4 border-gray-700 bg-gray-900 p-4">
        <h3 className="text-lg font-bold text-white mb-4">OTHER SKILLS</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {["SAP Development", "Jenkins", "OpenShift", "API Testing", 
            "Simulink", "Embedded Systems", "Agile Methodologies", "CI/CD"].map((skill, i) => (
            <div key={i} className="border-2 border-gray-700 bg-gray-800 p-2 text-center text-gray-300 text-sm">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
