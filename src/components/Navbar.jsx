'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../styles/gradients.css';
import logo from "../../public/blinksai.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState([]);
  const [openSubItems, setOpenSubItems] = useState([]);

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

  const toggleCategoryOpen = (index) => {
    if (openCategories.includes(index)) {
      setOpenCategories(openCategories.filter(category => category !== index));
    } else {
      setOpenCategories([...openCategories, index]);
    }
  };

  const toggleSubItemOpen = (index, subIndex) => {
    if (openSubItems.includes(`${index}-${subIndex}`)) {
      setOpenSubItems(openSubItems.filter(item => item !== `${index}-${subIndex}`));
    } else {
      setOpenSubItems([...openSubItems, `${index}-${subIndex}`]);
    }
  };

  // Navigation links array
  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'AI Agent Development', href: '/ai-agent-development' }
  ];

  // Services submenu array
  const serviceCategories = [
    {
      name: 'Development',
      subItems: [
        { name: 'Web Development', href: '/services/development/web' },
        { name: 'App Development', href: '/services/development/app' },
        { name: 'Custom Software', href: '/services/development/custom' }
      ]
    },
    {
      name: 'Video Editing',
      subItems: [
        { 
          name: 'Youtube Video Editing', 
          subSubItems: [
            { name: 'Basics', href: '/services/video-editing/youtube/basics' },
            { name: 'PIP', href: '/services/video-editing/youtube/pip' },
            { name: 'Motion Graphics', href: '/services/video-editing/youtube/motion' }
          ]
        },
        { 
          name: 'Reels/Shorts Editing', 
          subSubItems: [
            { name: 'Basics', href: '/services/video-editing/reels-shorts/basics' },
            { name: 'PIP', href: '/services/video-editing/reels-shorts/pip' },
            { name: 'Motion Graphics', href: '/services/video-editing/reels-shorts/motion' }
          ]
        }
      ]
    },
    {
      name: 'SEO',
      subItems: [
        { name: 'On-Page SEO', href: '/services/seo/on-page' },
        { name: 'Off-Page SEO', href: '/services/seo/off-page' },
        { name: 'Local SEO', href: '/services/seo/local' },
        { name: 'Technical SEO', href: '/services/seo/technical' }
      ]
    },
    {
      name: 'Copywriting',
      subItems: [
        { name: 'SEO Copywriting', href: '/services/copywriting/seo' },
        { name: 'Technical Copywriting', href: '/services/copywriting/technical' },
        { name: 'Marketing Copywriting', href: '/services/copywriting/marketing' },
        { name: 'Social Media Copywriting', href: '/services/copywriting/social-media' },
        { name: 'B2B Copywriting', href: '/services/copywriting/b2b' }
      ]
    },
    {
      name: 'Graphic Design',
      subItems: [
        { name: 'Poster Design', href: '/services/graphic-design/poster' },
        { name: 'Logo Design', href: '/services/graphic-design/logo' },
        { name: 'Magazine Design', href: '/services/graphic-design/magazine' }
      ]
    },
    {
      name: 'Lead Generation',
      subItems: [
        { name: 'Meta Ads', href: '/services/lead-generation/meta' },
        { name: 'Twitter Ads', href: '/services/lead-generation/twitter' },
        { name: 'LinkedIn Ads', href: '/services/lead-generation/linkedin' },
        { name: 'Google Ads', href: '/services/lead-generation/google' }
      ]
    },
    {
      name: 'Social Media Management',
      subItems: [
        { name: 'Meta Management', href: '/services/social-media/meta' },
        { name: 'YouTube Management', href: '/services/social-media/youtube' },
        { name: 'LinkedIn Management', href: '/services/social-media/linkedin' },
        { name: 'Twitter Management', href: '/services/social-media/twitter' }
      ]
    }
  ];

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
          <div className="flex-shrink-0 mr-8">
            <Image 
              src={logo}
              alt="Logo"
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
                {/* Map through service categories */}
                {serviceCategories.map((category, index) => (
                  category.noSubItems ? (
                    <Link 
                      key={index} 
                      href={category.href} 
                      className="block px-4 py-3 text-gray-300 hover:bg-gray-800/50 hover:text-white"
                    >
                      {category.name}
                    </Link>
                  ) : (
                    <div key={index} className="relative group/submenu px-4 py-3 hover:bg-gray-800/50">
                      <button className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white">
                        {category.name}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      <div className="absolute left-full top-0 w-56 bg-gray-900/95 border border-gray-800 rounded-md shadow-xl opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-300">
                        {category.subItems.map((item, subIndex) => (
                          item.subSubItems ? (
                            <div key={subIndex} className="relative group/subsubmenu px-4 py-2 hover:bg-gray-800 hover:text-white">
                              <button className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white">
                                {item.name}
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </button>
                              <div className="absolute left-full top-0 w-56 bg-gray-900/95 border border-gray-800 rounded-md shadow-xl opacity-0 invisible group-hover/subsubmenu:opacity-100 group-hover/subsubmenu:visible transition-all duration-300">
                                {item.subSubItems.map((subItem, subSubIndex) => (
                                  <Link 
                                    key={subSubIndex} 
                                    href={subItem.href} 
                                    className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white"
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <Link 
                              key={subIndex} 
                              href={item.href} 
                              className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white"
                            >
                              {item.name}
                            </Link>
                          )
                        ))}
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>
            
            {/* Map through main navigation links */}
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href} className="hover:text-gray-300 text-gray-300">
                {link.name}
              </Link>
            ))}
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
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-700 bg-black/90 backdrop-blur-sm rounded-lg">
            <div className="flex flex-col space-y-2 px-4 py-2">
              {/* Services accordion for mobile */}
              <div className="py-2">
                <button 
                  onClick={() => setServicesOpen(!servicesOpen)} 
                  className="flex items-center justify-between w-full text-left hover:text-gray-300 py-2"
                >
                  <span>Services</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Mobile services submenu */}
                {servicesOpen && (
                  <div className="pl-4 mt-2 border-l border-gray-700 space-y-2">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="py-1">
                        {category.noSubItems ? (
                          <Link href={category.href} className="block hover:text-gray-300 py-1">
                            {category.name}
                          </Link>
                        ) : (
                          <>
                            <div className="flex items-center justify-between w-full text-left hover:text-gray-300 py-1">
                              <span>{category.name}</span>
                              <button 
                                onClick={() => toggleCategoryOpen(index)}
                                className="focus:outline-none"
                              >
                                <svg className={`w-4 h-4 transform ${openCategories.includes(index) ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </button>
                            </div>
                            {openCategories.includes(index) && (
                              <div className="pl-4 mt-1 border-l border-gray-700 space-y-1">
                                {category.subItems.map((item, subIndex) => (
                                  item.subSubItems ? (
                                    <div key={subIndex} className="py-1">
                                      <div className="flex items-center justify-between w-full text-left hover:text-gray-300 py-1">
                                        <span>{item.name}</span>
                                        <button 
                                          onClick={(e) => {
                                            e.preventDefault();
                                            toggleSubItemOpen(index, subIndex);
                                          }}
                                          className="focus:outline-none"
                                        >
                                          <svg className={`w-4 h-4 transform ${openSubItems.includes(`${index}-${subIndex}`) ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                          </svg>
                                        </button>
                                      </div>
                                      {openSubItems.includes(`${index}-${subIndex}`) && (
                                        <div className="pl-4 mt-1 border-l border-gray-700 space-y-1">
                                          {item.subSubItems.map((subItem, subSubIndex) => (
                                            <Link key={subSubIndex} href={subItem.href} className="block hover:text-gray-300 py-1 text-sm">
                                              {subItem.name}
                                            </Link>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  ) : (
                                    <Link key={subIndex} href={item.href} className="block hover:text-gray-300 py-1 text-sm">
                                      {item.name}
                                    </Link>
                                  )
                                ))}
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Map through main navigation links for mobile */}
              {navLinks.map((link, index) => (
                <Link key={index} href={link.href} className="hover:text-gray-300 py-2">
                  {link.name}
                </Link>
              ))}
              
              {/* Get Started button for mobile */}
              <Link 
                href="/get-started"
                className="bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors w-full text-left flex items-center gap-1 mt-2"
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