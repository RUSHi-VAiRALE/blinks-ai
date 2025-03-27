'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import '../styles/gradients.css';
import logo from "../../public/blinksai.png"
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Gradient effects - responsive adjustments */}
      <div className="gradient-top-right"></div>
      {/* <div className="gradient-conical hidden md:block"></div> */}
      
      {/* Elliptical gradient effects - hidden on mobile */}
      <div className="elliptical-gradient-1 hidden md:block"></div>
      <div className="elliptical-gradient-2 hidden md:block"></div>
      
      <nav className="bg-transparent text-white py-0 px-6 md:px-0 relative z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 mr-8">
            <Image 
              src={logo}
              alt="Logo"
              className="w-36 h-36"
            />
          </Link>

          {/* Desktop Navigation */}
          <DesktopMenu />

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
            <button 
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <MobileMenu isMenuOpen={isMenuOpen} />
      </nav>
    </>
  );
};

export default Navbar;