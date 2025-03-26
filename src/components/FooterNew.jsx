'use client'
import React from 'react';
import Link from 'next/link';
import MobileFooter from './MobileFooter';
import DesktopFooter from './DesktopFooter';
import { legalLinks } from '../data/footerData';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-gray-300 relative overflow-hidden">
      {/* Bottom-to-top gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-[250px] bg-gradient-to-t from-white via-zinc-700 to-transparent opacity-16 z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-t from-white to-transparent opacity-16 z-10"></div>
      </div>
      
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Mobile Footer */}
        <MobileFooter />
        
        {/* Desktop Footer */}
        <DesktopFooter />
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-800 relative z-20">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Blinks AI. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex flex-wrap justify-center gap-4 md:gap-6">
            {legalLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="text-sm text-gray-400 hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
