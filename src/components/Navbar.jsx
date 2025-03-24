'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../styles/gradients.css';
import logo from "../../public/blinksai.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Top left white gradient effect */}
      <div className="gradient-top-left"></div>
      
      {/* Top right white gradient effect */}
      <div className="gradient-top-right"></div>
      
      <nav className="bg-transparent text-white py-4 px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto flex items-center">
          {/* Logo */}
          <div className="flex-shrink-0 mr-8">
            <Image 
              src={logo}
              alt="Logo"
              width={600}
              height={600}
              className="w-36 h-36"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 flex-grow">
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center hover:text-gray-300 text-gray-300 focus:outline-none">
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-gray-900/95 border border-gray-800 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                {/* Development Submenu */}
                <div className="relative group/dev px-4 py-3 hover:bg-gray-800/50">
                  <button className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white">
                    Development
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <div className="absolute left-full top-0 w-56 bg-gray-900/95 border border-gray-800 rounded-md shadow-xl opacity-0 invisible group-hover/dev:opacity-100 group-hover/dev:visible transition-all duration-300">
                    <Link href="/services/development/web" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white">
                      Web Development
                    </Link>
                    <Link href="/services/development/app" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white">
                      App Development
                    </Link>
                    <Link href="/services/development/custom" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white">
                      Custom Software
                    </Link>
                  </div>
                </div>
                
                {/* Video Editing Submenu */}
                <div className="relative group/video px-4 py-3 hover:bg-gray-800/50">
                  <button className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white">
                    Video Editing
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <div className="absolute left-full top-0 w-56 bg-gray-900/95 border border-gray-800 rounded-md shadow-xl opacity-0 invisible group-hover/video:opacity-100 group-hover/video:visible transition-all duration-300">
                    <Link href="/services/video-editing/general" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white">
                      General Editing
                    </Link>
                  </div>
                </div>
                
                {/* Reels Editing Submenu */}
                <div className="relative group/reels px-4 py-3 hover:bg-gray-800/50">
                  <button className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white">
                    Reels Editing
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <div className="absolute left-full top-0 w-56 bg-gray-900/95 border border-gray-800 rounded-md shadow-xl opacity-0 invisible group-hover/reels:opacity-100 group-hover/reels:visible transition-all duration-300">
                    <Link href="/services/reels-editing/basics" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white">
                      Basics
                    </Link>
                    <Link href="/services/reels-editing/pip" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white">
                      PIP
                    </Link>
                    <Link href="/services/reels-editing/motion" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white">
                      Motion Graphics
                    </Link>
                  </div>
                </div>
                
                {/* Graphic Design Submenu */}
                <div className="relative group/graphic px-4 py-3 hover:bg-gray-800/50">
                  <button className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white">
                    Graphic Design
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <div className="absolute left-full top-0 w-56 bg-gray-900/95 border border-gray-800 rounded-md shadow-xl opacity-0 invisible group-hover/graphic:opacity-100 group-hover/graphic:visible transition-all duration-300">
                    <Link href="/services/graphic-design/poster" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white">
                      Poster Design
                    </Link>
                    <Link href="/services/graphic-design/logo" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white">
                      Logo Design
                    </Link>
                    <Link href="/services/graphic-design/magazine" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white">
                      Magazine Design
                    </Link>
                  </div>
                </div>
                
                {/* Lead Generation Submenu */}
                <div className="relative group/lead px-4 py-3 hover:bg-gray-800/50">
                  <button className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white">
                    Lead Generation
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <div className="absolute left-full top-0 w-56 bg-gray-900/95 border border-gray-800 rounded-md shadow-xl opacity-0 invisible group-hover/lead:opacity-100 group-hover/lead:visible transition-all duration-300">
                    <Link href="/services/lead-generation/meta" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white">
                      Meta Ads
                    </Link>
                    <Link href="/services/lead-generation/twitter" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white">
                      Twitter Ads
                    </Link>
                    <Link href="/services/lead-generation/linkedin" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white">
                      LinkedIn Ads
                    </Link>
                    <Link href="/services/lead-generation/google" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white">
                      Google Ads
                    </Link>
                  </div>
                </div>
                
                {/* SEO Link */}
                <Link href="/services/seo" className="block px-4 py-3 text-gray-300 hover:bg-gray-800/50 hover:text-white">
                  SEO
                </Link>
                
                {/* Copywriting Link */}
                <Link href="/services/copywriting" className="block px-4 py-3 text-gray-300 hover:bg-gray-800/50 hover:text-white">
                  Copywriting
                </Link>
                
                {/* Social Media Management Submenu */}
                <div className="relative group/social px-4 py-3 hover:bg-gray-800/50">
                  <button className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white">
                    Social Media Management
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <div className="absolute left-full top-0 w-56 bg-gray-900/95 border border-gray-800 rounded-md shadow-xl opacity-0 invisible group-hover/social:opacity-100 group-hover/social:visible transition-all duration-300">
                    <Link href="/services/social-media/meta" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white">
                      Meta Management
                    </Link>
                    <Link href="/services/social-media/youtube" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white">
                      YouTube Management
                    </Link>
                    <Link href="/services/social-media/linkedin" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white">
                      LinkedIn Management
                    </Link>
                    <Link href="/services/social-media/twitter" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white">
                      Twitter Management
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <Link href="/about" className="hover:text-gray-300 text-gray-300">
              About
            </Link>
            <Link href="/testimonials" className="hover:text-gray-300 text-gray-300">
              Testimonials
            </Link>
            <Link href="/ai-agent-development" className="hover:text-gray-300 text-gray-300">
              AI Agent Development
            </Link>
           
          </div>
          
          {/* Get Started Button - pushed to the right */}
          <div className="hidden md:block ml-auto">
            <Link 
              href="/get-started"
              className="bg-white/90 text-black px-4 py-2 rounded-md font-medium shadow-4xl hover:bg-white transition-colors flex items-center gap-1"
            >
              Get Started
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
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
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4 px-2">
              <Link href="/docs" className="hover:text-gray-300 py-2">
                Docs
              </Link>
              <Link href="/components" className="hover:text-gray-300 py-2">
                Components
              </Link>
              <Link href="/about" className="hover:text-gray-300 py-2">
                About
              </Link>
              <Link href="/pricing" className="hover:text-gray-300 py-2">
                Pricing
              </Link>
              <Link href="/testimonials" className="hover:text-gray-300 py-2">
                Testimonials
              </Link>
              <Link 
                href="/get-started"
                className="bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors w-full text-left flex items-center gap-1"
              >
                Get Started
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;