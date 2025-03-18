
import React from 'react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'experience', label: 'WORK' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'education', label: 'EDUCATION' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b-4 border-gray-800 px-4 py-2">
      <div className="container mx-auto">
        <div className="md:hidden">
          <select 
            className="w-full bg-gray-900 text-white border-4 border-gray-700 py-2 px-4 rounded-none"
            value={activeSection}
            onChange={(e) => setActiveSection(e.target.value)}
          >
            {navItems.map(item => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        
        <div className="hidden md:flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-transparent mr-2">
              <img 
                src="/lovable-uploads/b0e9feaf-d7a2-4bd7-a732-221cbd419a05.png" 
                alt="Pixel Floppy Disk" 
                className="w-8 h-8 object-contain" 
              />
            </div>
            <span className="text-[#76c6d9] font-bold">PIXEL.DEV</span>
          </div>
          
          <ul className="flex space-x-1">
            {navItems.map(item => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`px-3 py-2 text-xs ${
                    activeSection === item.id
                    ? 'text-[#76c6d9] border-b-4 border-[#76c6d9]'
                    : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
