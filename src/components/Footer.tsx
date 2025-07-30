
import React from 'react';
import { Gamepad2, Linkedin, Github, FileText, ExternalLink, Award } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary/10 text-gray-800 py-12 hieroglyph-pattern">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 lg:gap-6">
          <div className="md:col-span-1">
            <h3 className="flex items-center text-xl font-bold mb-4">
              <Gamepad2 className="mr-2 text-primary" />
              <span className="text-primary">Monier</span>
              <span className="text-accent">Hossam</span>
            </h3>
            <p className="text-gray-600 mb-4">
              I’m a Unity game developer and certified cloud developer with 5+ years of experience delivering polished mobile, VR, and multiplayer games. I specialize in building, optimizing, and publishing engaging experiences using C#, PlayFab, AdMob, and Photon. With a 100% success score and 50+ completed projects, I’ve earned top-rated status on Upwork.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Navigation</h3>
            <ul className="space-y-2 mb-0">
              <li>
                <a href="#about" className="text-gray-600 hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-600 hover:text-primary transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Professional Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://drive.google.com/file/d/1ORHKx_NEy1YsNVRoUMZosIBftCj2Y_7e/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-primary transition-colors">
                  <FileText className="mr-2 h-4 w-4" />
                  Download CV
                  <ExternalLink className="ml-2 h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="http://www.linkedin.com/in/monier-hossam-64a3a8159" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-primary transition-colors">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                  <ExternalLink className="ml-2 h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="https://www.upwork.com/fl/~01c2d3277bbab78dcb" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-primary transition-colors">
                  <FileText className="mr-2 h-4 w-4" />
                  Upwork
                  <ExternalLink className="ml-2 h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="https://www.credly.com/users/monier-hossam/badges" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-primary transition-colors">
                  <Award className="mr-2 h-4 w-4" />
                  Credly
                  <ExternalLink className="ml-2 h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="https://github.com/MonierHossam" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-primary transition-colors">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                  <ExternalLink className="ml-2 h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary/20 text-center text-gray-500">
          <p className="mb-2">Thanks for visiting my portfolio! Let’s build something amazing together. 🚀</p>
          <p>&copy; {currentYear} Monier Hossam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
