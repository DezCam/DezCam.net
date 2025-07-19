import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location, navigate] = useLocation();

  const scrollToSection = (sectionId: string) => {
    // If we're not on the homepage, navigate there first
    if (location !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // We're already on homepage, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl text-berkeley-blue">Desmond Campbell</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/"
              className="text-gray-600 hover:text-berkeley-blue transition-colors"
            >
              Home
            </Link>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-berkeley-blue transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-gray-600 hover:text-berkeley-blue transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-gray-600 hover:text-berkeley-blue transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-600 hover:text-berkeley-blue transition-colors"
            >
              Portfolio
            </button>
            <Link 
              href="/services"
              className="text-gray-600 hover:text-berkeley-blue transition-colors"
            >
              Services
            </Link>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-berkeley-blue transition-colors"
            >
              Contact
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-berkeley-blue"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-berkeley-blue"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-berkeley-blue"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-berkeley-blue"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-berkeley-blue"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-berkeley-blue"
            >
              Portfolio
            </button>
            <Link
              href="/services"
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-berkeley-blue"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-berkeley-blue"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
