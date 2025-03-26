'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from './AnimationVariants';

const AboutHero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-indigo-900/15 to-transparent opacity-40"></div>
      
      {/* Animated dots/particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-gradient-to-r from-transparent via-white to-transparent rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-gradient-to-r from-transparent via-white to-transparent rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-gradient-to-r from-transparent via-white to-transparent rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-gradient-to-r from-transparent via-white to-transparent rounded-full animate-ping"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1 
            variants={fadeIn}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-zinc-900 text-transparent bg-clip-text"
          >
            About Blinks AI
          </motion.h1>
          <motion.p 
            variants={fadeIn} 
            className="text-xl md:text-2xl text-gray-300 mb-10"
          >
            Simplifying Digital Marketing with AI & Technology
          </motion.p>
          <motion.div 
            variants={fadeIn}
            className="w-64 h-1 mx-auto bg-gradient-to-r from-transparent via-white to-transparent"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
