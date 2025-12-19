import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-washi/95 shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="flex flex-col items-center group">
          <span className={`font-serif text-2xl tracking-widest font-bold ${scrolled ? 'text-sumi' : 'text-washi'}`}>
            虎炭
          </span>
          <span className={`text-[10px] tracking-[0.2em] uppercase mt-1 ${scrolled ? 'text-sumi/70' : 'text-washi/80'}`}>
            Hutan Izakaya
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`group flex flex-col items-center relative py-2`}
            >
              <span className={`font-serif text-sm tracking-widest transition-colors ${scrolled ? 'text-sumi group-hover:text-beer' : 'text-washi group-hover:text-amber-300'}`}>
                {item.label}
              </span>
              <span className={`text-[10px] opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-3 ${scrolled ? 'text-sumi/60' : 'text-washi/70'}`}>
                {item.jpLabel}
              </span>
            </a>
          ))}
          <a
            href="#contact"
            className={`px-6 py-2 border transition-all duration-300 font-serif tracking-widest text-sm hover:scale-105
              ${scrolled 
                ? 'border-sumi text-sumi hover:bg-sumi hover:text-washi' 
                : 'border-washi text-washi hover:bg-washi hover:text-sumi'}`}
          >
            線上預約
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="text-sumi w-8 h-8" />
          ) : (
            <Menu className={`${scrolled ? 'text-sumi' : 'text-washi'} w-8 h-8`} />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-washi transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden flex flex-col items-center justify-center space-y-8 z-40`}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex flex-col items-center group"
            >
              <span className="font-serif text-2xl text-sumi tracking-widest mb-2 group-hover:text-beer transition-colors">{item.label}</span>
              <span className="text-sm text-sumi/60 font-light tracking-widest">{item.jpLabel}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;