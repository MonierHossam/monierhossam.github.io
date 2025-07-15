
import React from 'react';
import { Gamepad2 } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary/10 text-gray-800 py-12 hieroglyph-pattern">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="flex items-center text-xl font-bold mb-4">
              <Gamepad2 className="mr-2 text-primary" />
              <span className="text-primary">Pharaoh</span>
              <span className="text-accent">Games</span>
            </h3>
            <p className="text-gray-600 mb-4">
              Creating immersive game experiences inspired by ancient Egyptian mythology and history. 
              Specializing in RPGs, strategy games, and educational interactive experiences.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-600 hover:text-primary transition-colors">
                  Home
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
                <a href="#about" className="text-gray-600 hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary/20 text-center text-gray-500">
          <p>&copy; {currentYear} PharaohGames. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
