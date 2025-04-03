'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import logo from '../../public/blinksaiimg.jpg';

// Split text animation component
const SplitTextAnimation = ({ text }) => {
  // Split text into words
  const words = text.split(" ");
  
  // Container for words
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };
  
  // Word animation
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 8,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 8,
        stiffness: 100,
      },
    },
  };
  
  return (
    <motion.div
      style={{ overflow: "hidden" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap justify-between h-full items-center gap-0.5"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          className="mr-0.5 mb-0.5 inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

const HeroSection = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [borderColor, setBorderColor] = useState('rgba(75, 85, 99, 0.6)');
  
  // Animation for input border when focused
  useEffect(() => {
    if (isFocused) {
      const colors = ['#3B82F6', '#8B5CF6', '#EC4899', '#3B82F6'];
      let colorIndex = 0;
      
      const interval = setInterval(() => {
        setBorderColor(colors[colorIndex]);
        colorIndex = (colorIndex + 1) % colors.length;
      }, 500);
      
      return () => clearInterval(interval);
    } else {
      setBorderColor('rgba(75, 85, 99, 0.6)');
    }
  }, [isFocused]);
  
  return (
    <div className="bg-black text-white py-8 sm:py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 md:gap-8">
          {/* Left side - Brand description */}
          <div className="w-full lg:w-3/5 md:min-h-[400px] flex flex-col">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-white via-white to-zinc-900 text-transparent bg-clip-text">
              AI-powered solutions to scale your business
              </span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 md:mb-6 lg:mb-8 line-clamp-3 sm:line-clamp-2">
              All blinks ai services are seamlessly integrated, offering a cohesive and unified platform that addresses all aspects of digital transformation. From initial strategy and design to development, deployment, and beyond, zencodx provides a comprehensive ecosystem that supports businesses at every stage of their digital journey.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 md:mt-auto mb-8 lg:mb-0">
              <Link href="/get-started" className="bg-white text-black px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-200 transition-colors w-full sm:w-auto justify-center sm:justify-start">
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </Link>
              <Link href="/services" className="text-white flex items-center gap-2 hover:text-gray-300 transition-colors w-full sm:w-auto justify-center sm:justify-start">
                Our Services
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </Link>
            </div>
          </div>

          {/* Right side - Card with gradient and content */}
          <div className="w-full lg:w-3/5 flex justify-center min-h-[350px] sm:min-h-[400px]">
            <div className="bg-zinc-900 rounded-2xl p-4 sm:p-6 md:p-8 w-full max-w-2xl relative overflow-hidden shadow-lg">
              {/* Custom gradient overlay with the bright spot at top right corner */}
              <div className="absolute -top-5 -right-5" 
                  style={{
                    width: '300px',
                    height: '300px',
                    background: 'radial-gradient(circle at top right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.9) 3%, rgba(255, 255, 255, 0.7) 8%, rgba(255, 255, 255, 0.45) 15%, rgba(255, 255, 255, 0.25) 25%, rgba(255, 255, 255, 0.1) 40%, rgba(255, 255, 255, 0.02) 60%, transparent 80%)',
                    pointerEvents: 'none',
                    zIndex: 1
                  }}>
              </div>
              
              {/* Content with image on left and text on right */}
              <div className="relative z-10">
                {/* Header with title */}
                <div className="flex flex-col items-start mb-4 sm:mb-6 md:mb-8">
                  <div className="relative">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                      blinks<span className="bg-gradient-to-r from-zinc-300 via-white to-zinc-400 text-transparent bg-clip-text">ai</span>
                    </h2>
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"></div>
                  </div>
                  <p className="text-xs font-light tracking-widest mt-2 text-zinc-400 uppercase">
                    Redefining the future of <span className="text-white">intelligent</span> technology
                  </p>
                </div>
                
                {/* Two-column layout with image on left and split text/input on right */}
                <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 mb-4 sm:mb-6">
                  {/* Left column - Image/Logo */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative w-full aspect-square bg-zinc-800 rounded-2xl flex items-center justify-center shadow-md">
                      <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 to-zinc-900 rounded-2xl">
                      <Image src="https://cdn.pixabay.com/photo/2024/01/26/14/18/cyborg-8534055_1280.png" alt="Logo" fill className='rounded-2xl object-cover' />
                      </div>
                    </div>
                  </div>
                  
                  {/* Right column - Split text animation and animated input */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center mt-4 lg:mt-0">
                    <div className="mb-4 sm:mb-6 h-auto min-h-[80px] sm:min-h-[100px] md:min-h-[120px] overflow-visible text-base sm:text-lg">
                      <SplitTextAnimation text="Discover how AI can revolutionize your business. From automation to insights, we've got you covered." />
                    </div>
                    
                    {/* Animated input box */}
                    <div className="relative mt-2 sm:mt-4 group">
                      {/* Gradient border background with glow effect */}
                      <div 
                        className={`absolute -inset-0.5 bg-gradient-to-r from-zinc-400 via-white to-zinc-600 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition duration-300 ${isFocused ? 'opacity-100' : ''}`}
                      ></div>
                      
                      {/* Inner background for input */}
                      <div className="relative bg-zinc-900 rounded-lg p-0.5">
                        <input
                          type="text"
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          onFocus={() => setIsFocused(true)}
                          onBlur={() => setIsFocused(false)}
                          placeholder="What's on your mind?"
                          className="w-full bg-zinc-800 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-md focus:outline-none relative z-10 transition-all duration-300 placeholder-gray-400 text-sm sm:text-base"
                        />
                        
                        {/* Animated send button */}
                        <motion.div 
                          className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-gradient-to-r from-zinc-300 to-white p-1.5 sm:p-2 rounded-full"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          animate={{ 
                            boxShadow: isFocused ? 
                              ['0 0 0 0 rgba(255, 255, 255, 0)', '0 0 0 4px rgba(255, 255, 255, 0.3)', '0 0 0 0 rgba(255, 255, 255, 0)'] : 
                              'none'
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-4 sm:h-4">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
