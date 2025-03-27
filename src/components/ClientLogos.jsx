'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ClientLogos = () => {
  // References for the two carousel containers
  const carousel1Ref = useRef(null);
  const carousel2Ref = useRef(null);

  // Array of client logos (1-18)
  const logos = Array.from({ length: 18 }, (_, i) => ({
    id: i + 1,
    src: `/logoBlinks/${i + 1}.png`,
    alt: `Client ${i + 1}`
  }));

  // Different gradient backgrounds for variety
  const gradients = [
    'bg-gradient-to-r from-blue-50 to-indigo-100 border-indigo-200',
    'bg-gradient-to-r from-purple-50 to-pink-100 border-pink-200',
    'bg-gradient-to-r from-gray-50 to-zinc-100 border-zinc-200',
    'bg-gradient-to-r from-indigo-50 to-purple-100 border-purple-200',
    'bg-gradient-to-r from-blue-50 to-cyan-100 border-cyan-200',
    'bg-gradient-to-r from-emerald-50 to-teal-100 border-teal-200'
  ];

  // Get a gradient based on index
  const getGradient = (index) => {
    return gradients[index % gradients.length];
  };

  // Duplicate the logos array for the second carousel to create a seamless loop
  const logos2 = [...logos];

  useEffect(() => {
    // Function to handle the automatic scrolling
    const animateCarousel = () => {
      if (carousel1Ref.current && carousel2Ref.current) {
        // Reset position when first carousel is out of view
        if (carousel1Ref.current.scrollLeft >= carousel1Ref.current.scrollWidth / 2) {
          carousel1Ref.current.scrollLeft = 0;
        } else {
          carousel1Ref.current.scrollLeft += 1;
        }

        // Second carousel scrolls in opposite direction
        if (carousel2Ref.current.scrollLeft <= 0) {
          carousel2Ref.current.scrollLeft = carousel2Ref.current.scrollWidth / 2;
        } else {
          carousel2Ref.current.scrollLeft -= 1;
        }
      }
    };

    // Set up the animation interval
    const animationInterval = setInterval(animateCarousel, 30);

    // Clean up the interval on component unmount
    return () => clearInterval(animationInterval);
  }, []);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-zinc-900">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black opacity-80"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-white to-zinc-900 text-transparent bg-clip-text">
            Our Clients
          </h2>
          {/* <p className="text-gray-300 max-w-2xl mx-auto">
            We're proud to work with innovative companies across various industries, helping them achieve their digital marketing goals.
          </p> */}
        </motion.div>

        {/* First carousel - scrolls right */}
        <div className="relative mb-8 overflow-hidden">
          <div 
            ref={carousel1Ref}
            className="flex space-x-8 overflow-x-scroll scrollbar-hide py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {logos.map((logo, index) => (
              <motion.div
                key={`carousel1-${logo.id}`}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                className={`flex-shrink-0 h-20 md:h-24 w-auto ${getGradient(index)} rounded-lg shadow-lg flex items-center justify-center border backdrop-blur-sm`}
                style={{ minWidth: '200px' }}
              >
                <div className="relative h-full w-full p-3">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="p-2 transition-all duration-300"
                    sizes="(max-width: 768px) 100vw, 200px"
                    priority={logo.id <= 5}
                  />
                </div>
              </motion.div>
            ))}
            {/* Duplicate set for seamless looping */}
            {logos.map((logo, index) => (
              <motion.div
                key={`carousel1-dup-${logo.id}`}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                className={`flex-shrink-0 h-20 md:h-24 w-auto ${getGradient(index)} rounded-lg shadow-lg flex items-center justify-center border backdrop-blur-sm`}
                style={{ minWidth: '200px' }}
              >
                <div className="relative h-full w-full p-3">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="p-2 transition-all duration-300"
                    sizes="(max-width: 768px) 100vw, 200px"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Second carousel - scrolls left */}
        <div className="relative overflow-hidden">
          <div 
            ref={carousel2Ref}
            className="flex space-x-8 overflow-x-scroll scrollbar-hide py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {logos2.map((logo, index) => (
              <motion.div
                key={`carousel2-${logo.id}`}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                className={`flex-shrink-0 h-20 md:h-24 w-auto ${getGradient(index + 3)} rounded-lg shadow-lg flex items-center justify-center border backdrop-blur-sm`}
                style={{ minWidth: '200px' }}
              >
                <div className="relative h-full w-full p-3">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="p-2 transition-all duration-300"
                    sizes="(max-width: 768px) 100vw, 200px"
                  />
                </div>
              </motion.div>
            ))}
            {/* Duplicate set for seamless looping */}
            {logos2.map((logo, index) => (
              <motion.div
                key={`carousel2-dup-${logo.id}`}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                className={`flex-shrink-0 h-20 md:h-24 w-auto ${getGradient(index + 3)} rounded-lg shadow-lg flex items-center justify-center border backdrop-blur-sm`}
                style={{ minWidth: '200px' }}
              >
                <div className="relative h-full w-full p-3">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="p-2 transition-all duration-300"
                    sizes="(max-width: 768px) 100vw, 200px"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-zinc-900 to-transparent z-20"></div>
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-zinc-900 to-transparent z-20"></div>
      </div>
    </section>
  );
};

export default ClientLogos;
