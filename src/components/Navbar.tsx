
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const SECTION_IDS = ['about','portfolio', 'services',  'contact'];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleSectionScroll = () => {
      let current = 'about';
      for (const id of SECTION_IDS) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleSectionScroll);
    return () => window.removeEventListener('scroll', handleSectionScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <span className="flex items-center text-2xl font-bold font-heading">
            <Gamepad2 className="mr-2 text-primary" />
            <span className="text-primary">Monier</span>
            <span className="text-accent">Hossam</span>
          </span>
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks activeSection={activeSection} />
          </div>
          <button
            className="md:hidden text-gray-800"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <MobileNavLinks closeMobileMenu={() => setMobileMenuOpen(false)} activeSection={activeSection} />
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ activeSection }: { activeSection: string }) => (
  <>
      <a href="#about" className={`text-gray-800 hover:text-primary font-medium ${activeSection === 'about' ? 'text-primary font-bold underline' : ''}`}>
      About
    </a>
    <a href="#portfolio" className={`text-gray-800 hover:text-primary font-medium ${activeSection === 'portfolio' ? 'text-primary font-bold underline' : ''}`}>
      Portfolio
    </a>
    <a href="#services" className={`text-gray-800 hover:text-primary font-medium ${activeSection === 'services' ? 'text-primary font-bold underline' : ''}`}>
      Services
    </a>
    <a href="#contact" className={`text-gray-800 hover:text-primary font-medium ${activeSection === 'contact' ? 'text-primary font-bold underline' : ''}`}>
      Contact
    </a>
  </>
);

const MobileNavLinks = ({ closeMobileMenu, activeSection }: { closeMobileMenu: () => void, activeSection: string }) => (
  <>
      <a 
      href="#about" 
      className={`text-gray-800 hover:text-primary font-medium py-2 border-b border-gray-100 ${activeSection === 'about' ? 'text-primary font-bold underline' : ''}`}
      onClick={closeMobileMenu}
    >
      About
    </a>
    <a 
      href="#portfolio" 
      className={`text-gray-800 hover:text-primary font-medium py-2 border-b border-gray-100 ${activeSection === 'portfolio' ? 'text-primary font-bold underline' : ''}`}
      onClick={closeMobileMenu}
    >
      Portfolio
    </a>
    <a 
      href="#services" 
      className={`text-gray-800 hover:text-primary font-medium py-2 border-b border-gray-100 ${activeSection === 'services' ? 'text-primary font-bold underline' : ''}`}
      onClick={closeMobileMenu}
    >
      Services
    </a>
    <a 
      href="#contact" 
      className={`text-gray-800 hover:text-primary font-medium py-2 border-b border-gray-100 ${activeSection === 'contact' ? 'text-primary font-bold underline' : ''}`}
      onClick={closeMobileMenu}
    >
      Contact
    </a>
  </>
);

export default Navbar;