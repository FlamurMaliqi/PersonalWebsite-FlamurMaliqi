
import React from 'react';

const skillsCategories = [
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 75 },
      { name: "Java", level: 65 }
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "HTML/CSS", level: 95 },
      { name: "Vue.js", level: 70 },
      { name: "Angular", level: 60 }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "SQL", level: 70 }
    ]
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "CI/CD", level: 65 }
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
          {["Problem Solving", "Team Leadership", "UI/UX Design", "Agile Methodologies", 
            "Technical Writing", "Responsive Design", "Performance Optimization", "Mentoring"].map((skill, i) => (
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
