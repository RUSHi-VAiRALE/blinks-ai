'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { navLinks, serviceCategories } from '../data/navData';

const MobileMenu = ({ isMenuOpen }) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState([]);
  const [openSubItems, setOpenSubItems] = useState([]);

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

  if (!isMenuOpen) return null;

  return (
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
  );
};

export default MobileMenu;
