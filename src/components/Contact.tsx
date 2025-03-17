
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    
    // Simulate form submission
    setTimeout(() => {
      setMessageSent(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Reset success message after a delay
      setTimeout(() => setMessageSent(false), 5000);
    }, 1000);
  };

  return (
    <div className="pixel-fade-in">
      <h2 className="text-2xl font-bold mb-6 text-[#76c6d9] inline-flex items-center">
        <span className="bg-[#76c6d9] w-3 h-3 mr-2"></span>
        CONTACT ME
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border-4 border-gray-700 bg-gray-900 p-4">
          <h3 className="text-lg font-bold text-white mb-4">GET IN TOUCH</h3>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-8 h-8 mr-3 flex items-center justify-center border-2 border-gray-700 bg-gray-800">
                <span className="text-[#76c6d9]">@</span>
              </div>
              <p className="text-gray-300">email@example.com</p>
            </div>
            
            <div className="flex items-center">
              <div className="w-8 h-8 mr-3 flex items-center justify-center border-2 border-gray-700 bg-gray-800">
                <span className="text-[#76c6d9]">#</span>
              </div>
              <p className="text-gray-300">@username</p>
            </div>
            
            <div className="flex items-center">
              <div className="w-8 h-8 mr-3 flex items-center justify-center border-2 border-gray-700 bg-gray-800">
                <span className="text-[#76c6d9]">!</span>
              </div>
              <p className="text-gray-300">github.com/username</p>
            </div>
          </div>
          
          <div className="mt-6 p-3 border-2 border-gray-700 bg-gray-800">
            <p className="text-gray-400 text-sm">Currently available for full-time positions and freelance projects.</p>
          </div>
        </div>
        
        <div className="border-4 border-gray-700 bg-gray-900 p-4">
          <h3 className="text-lg font-bold text-white mb-4">SEND MESSAGE</h3>
          
          {messageSent ? (
            <div className="border-2 border-green-500 bg-gray-800 p-4 text-center">
              <p className="text-green-400 mb-2">Message sent successfully!</p>
              <p className="text-gray-300 text-sm">I'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 text-sm">NAME</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border-2 border-gray-700 p-2 text-white focus:border-[#76c6d9] outline-none"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 text-sm">EMAIL</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border-2 border-gray-700 p-2 text-white focus:border-[#76c6d9] outline-none"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 text-sm">MESSAGE</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border-2 border-gray-700 p-2 text-white focus:border-[#76c6d9] outline-none"
                  rows={4}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full pixel-btn bg-gray-800 text-[#76c6d9] hover:bg-[#76c6d9] hover:text-black"
              >
                SEND_MESSAGE.exe
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
