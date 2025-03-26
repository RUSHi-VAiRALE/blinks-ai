'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { serviceCategories } from '../data/navData';
import logo from '../../public/blinksai.png';

const Footer = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (categoryName) => {
    if (expandedCategory === categoryName) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(categoryName);
    }
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )},
    { name: 'Twitter', href: 'https://twitter.com', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    )},
    { name: 'Facebook', href: 'https://facebook.com', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/>
      </svg>
    )},
    { name: 'Instagram', href: 'https://instagram.com', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/>
      </svg>
    )},
    { name: 'YouTube', href: 'https://youtube.com', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd"/>
      </svg>
    )}
  ];

  const quickLinks = [
    { name: 'About', href: '/about' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Careers', href: '/careers' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'AI Agent Development', href: '/ai-agent-development' },
  ];

  // Simplified services for mobile view
  const simplifiedServices = serviceCategories.map(category => ({
    name: category.name,
    href: `/services#${category.name.toLowerCase().replace(/\s+/g, '-')}`
  }));

  // Popular services for desktop view
  const popularServices = serviceCategories
    .flatMap(category => 
      category.subItems
        .filter(item => item.href) // Filter out items without href
        .slice(0, 2)
        .map(subItem => ({
          name: subItem.name,
          href: subItem.href
        }))
    )
    .slice(0, 8);

  return (
    <footer className="bg-zinc-950 text-gray-300 relative overflow-hidden">
      {/* Bottom-to-top gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-[250px] bg-gradient-to-t from-white via-zinc-700 to-transparent opacity-16 z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-t from-white to-transparent opacity-16 z-10"></div>
      </div>
      
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Logo and social links - Always at top */}
        <div className="mb-10">
          <div className="flex items-center justify-center sm:justify-start">
            <Image 
              src={logo}
              alt="Blinks AI Logo"
              width={120}
              height={120}
              className="w-24 h-24 sm:w-32 sm:h-32"
            />
          </div>
          <p className="text-sm text-gray-400 max-w-xs mx-auto sm:mx-0 text-center sm:text-left mt-4">
            Redefining the future of intelligent technology with AI-powered solutions to scale your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start mt-6">
            {socialLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile layout - Services and Quick Links in one row */}
        <div className="grid grid-cols-2 gap-8 mb-10 sm:hidden">
          {/* Services - Mobile View */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {simplifiedServices.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links - Mobile View */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter - Mobile View (centered in second row) */}
        <div className="sm:hidden mb-10">
          <h3 className="text-white text-lg font-semibold mb-4 text-center">Stay Updated</h3>
          <p className="text-sm text-gray-400 mb-4 text-center">
            Subscribe to our newsletter for the latest updates on AI innovations and services.
          </p>
          <form className="space-y-2 max-w-xs mx-auto">
            <div className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-zinc-900 border border-zinc-700 rounded-md py-2 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-white focus:border-white"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black font-medium py-2 px-4 rounded-md hover:bg-gray-200 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Tablet/Desktop layout */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Services - Desktop View */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {serviceCategories.map((category) => (
                <li key={category.name}>
                  <Link 
                    href={`/services#${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:text-white transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services submenu - Desktop only */}
          <div className="hidden lg:block">
            <h3 className="text-white text-lg font-semibold mb-4">Popular Services</h3>
            <ul className="space-y-3">
              {popularServices.map(service => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates on AI innovations and services.
            </p>
            <form className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-md py-2 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-white focus:border-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black font-medium py-2 px-4 rounded-md hover:bg-gray-200 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-800 relative z-20">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Blinks AI. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex flex-wrap justify-center gap-4 md:gap-6">
            <Link href="/terms" className="text-sm text-gray-400 hover:text-white">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-sm text-gray-400 hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
