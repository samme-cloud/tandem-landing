import React, { useState, useEffect } from 'react';
import { Layers, Menu, X } from 'lucide-react';
import WaitlistButton from './WaitlistButton';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-slate-900/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
        }
      `}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-white font-bold text-xl">
            <Layers className="text-teal-400" size={24} />
            <span>Tandem</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="text-slate-300 hover:text-white transition">
              <a href="#about">About</a>
            </div>
            <div className="text-slate-300 hover:text-white transition">
              <a href="#features">Features</a>
            </div>
            <div className="text-slate-300 hover:text-white transition">
              <a href="#faq">FAQ</a>
            </div>
            <WaitlistButton />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 text-white p-6 absolute top-full left-0 right-0 shadow-lg">
          <div className="flex flex-col gap-4">
            <a href="#about" className="py-2 hover:text-teal-400" onClick={() => setIsOpen(false)}>
              About
            </a>
            <a href="#features" className="py-2 hover:text-teal-400" onClick={() => setIsOpen(false)}>
              Features
            </a>
            <a href="#faq" className="py-2 hover:text-teal-400" onClick={() => setIsOpen(false)}>
              FAQ
            </a>
            <div className="pt-4">
              <WaitlistButton />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;