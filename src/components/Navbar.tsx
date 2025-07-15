
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <Link to="/" className="flex items-center text-2xl font-bold font-heading">
            <Gamepad2 className="mr-2 text-primary" />
            <span className="text-primary">Pharaoh</span>
            <span className="text-accent">Games</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a href="#contact">Get In Touch</a>
            </Button>
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
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <MobileNavLinks closeMobileMenu={() => setMobileMenuOpen(false)} />
            <Button asChild className="w-full bg-primary hover:bg-primary/90">
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                Get In Touch
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks = () => (
  <>
    <a href="#home" className="text-gray-800 hover:text-primary font-medium">
      Home
    </a>
    <a href="#portfolio" className="text-gray-800 hover:text-primary font-medium">
      Portfolio
    </a>
    <a href="#services" className="text-gray-800 hover:text-primary font-medium">
      Services
    </a>
    <a href="#about" className="text-gray-800 hover:text-primary font-medium">
      About
    </a>
  </>
);

const MobileNavLinks = ({ closeMobileMenu }: { closeMobileMenu: () => void }) => (
  <>
    <a 
      href="#home" 
      className="text-gray-800 hover:text-primary font-medium py-2 border-b border-gray-100"
      onClick={closeMobileMenu}
    >
      Home
    </a>
    <a 
      href="#portfolio" 
      className="text-gray-800 hover:text-primary font-medium py-2 border-b border-gray-100"
      onClick={closeMobileMenu}
    >
      Portfolio
    </a>
    <a 
      href="#services" 
      className="text-gray-800 hover:text-primary font-medium py-2 border-b border-gray-100"
      onClick={closeMobileMenu}
    >
      Services
    </a>
    <a 
      href="#about" 
      className="text-gray-800 hover:text-primary font-medium py-2 border-b border-gray-100"
      onClick={closeMobileMenu}
    >
      About
    </a>
  </>
);

export default Navbar;
