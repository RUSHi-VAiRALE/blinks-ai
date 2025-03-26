'use client'
import React from 'react';
import Link from 'next/link';
import { navLinks, serviceCategories } from '../data/navData';

const DesktopMenu = () => {
  return (
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
      
      {/* Get Started Button - pushed to the right */}
      <div className="ml-auto">
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
    </div>
  );
};

export default DesktopMenu;
