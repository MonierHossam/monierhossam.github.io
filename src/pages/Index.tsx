
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Stats from '../components/Stats';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Skills from '../components/Skills';

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-fade-in').forEach(elem => {
      observer.observe(elem);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <About />
      <Stats />
      <Portfolio />
      <Skills />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
