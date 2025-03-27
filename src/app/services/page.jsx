'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { getAllServiceCategories } from '../../data/servicesData';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardHover = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.03,
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};

const ServicesPage = () => {
  const serviceCategories = getAllServiceCategories();

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-zinc-900 text-transparent bg-clip-text"
            >
              Our Services
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-lg md:text-xl text-gray-300 mb-10"
            >
              Comprehensive solutions tailored to elevate your business in the digital landscape. 
              From development to marketing, we've got you covered.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 md:py-24 bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white via-white to-zinc-900 text-transparent bg-clip-text"
            >
              Explore Our Services
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                >
                  <Link href={`/services/${category.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <motion.div 
                      variants={cardHover}
                      className="bg-zinc-900/70 border border-zinc-800/50 rounded-xl overflow-hidden h-full transition-all duration-300 hover:border-white/20 group"
                    >
                      <div className="p-6 flex flex-col h-full">
                        {/* Icon */}
                        <div className="mb-4 text-white text-3xl">
                          {category.icon}
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-xl font-bold mb-3 text-white group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-white group-hover:to-zinc-900 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                          {category.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-gray-400 mb-4 flex-grow">
                          {category.description}
                        </p>
                        
                        {/* Subcategories preview */}
                        <div className="mt-auto">
                          <div className="text-sm text-gray-500 mb-2">Includes:</div>
                          <ul className="space-y-1">
                            {category.subCategories.slice(0, 3).map((sub, idx) => (
                              <li key={idx} className="text-gray-300 text-sm flex items-center">
                                <span className="mr-2 text-xs">•</span>
                                <span>{sub.name}</span>
                              </li>
                            ))}
                            {category.subCategories.length > 3 && (
                              <li className="text-gray-400 text-sm italic">
                                + {category.subCategories.length - 3} more
                              </li>
                            )}
                          </ul>
                        </div>
                        
                        {/* Explore button */}
                        <div className="mt-5 pt-4 border-t border-zinc-800/50 flex justify-between items-center">
                          <span className="text-sm text-gray-400">View Details</span>
                          <span className="text-white transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-black relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-zinc-900 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-white to-zinc-900 text-transparent bg-clip-text"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-lg text-gray-300 mb-10"
            >
              Let's discuss how our services can help you achieve your business goals. 
              Our team of experts is ready to create a tailored solution for your specific needs.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Link 
                href="/contact" 
                className="inline-block py-3 px-8 bg-white text-black font-medium rounded-lg transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
