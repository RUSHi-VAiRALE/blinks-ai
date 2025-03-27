'use client'
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { fadeIn, staggerContainer } from './AnimationVariants';
import problems from '../../data/problemData.js'
import ProblemCard from './SingleProblemCard';


// Simple Pie Chart Component

const ProblemSection = () => {
  const [activeCard, setActiveCard] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });

  // Auto-slide effect - move from left to right
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % problems.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [problems.length]);

  // Manual navigation
  const handlePrev = () => {
    setActiveCard((prev) => (prev - 1 + problems.length) % problems.length);
  };

  const handleNext = () => {
    setActiveCard((prev) => (prev + 1) % problems.length);
  };

  // Get card position (left, center, right)
  const getCardPosition = (index) => {
    const totalCards = problems.length;
    
    // Calculate relative position with wrapping
    const position = (index - activeCard + totalCards) % totalCards;
    
    if (position === 0) return 'center';
    if (position === totalCards - 1) return 'left';
    if (position === 1) return 'right';
    
    // Cards further away (not directly visible)
    if (position > 1 && position < totalCards / 2) return 'far-right';
    return 'far-left';
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-zinc-900/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white via-white to-zinc-900 text-transparent bg-clip-text"
          >
            The Problem We Solve
          </motion.h2>
          
          <motion.div variants={fadeIn} className="mb-10 text-center">
            <p className="text-gray-300 mb-6 leading-relaxed">
              After two years in the digital marketing industry, We 
              realized the biggest challenges businesses face:
            </p>
          </motion.div>

          <div className="relative h-[600px] mb-12 flex items-center justify-center">
            {problems.map((problem, index) => (
              <ProblemCard 
                key={index}
                problem={problem} 
                position={getCardPosition(index)}
                isActive={index === activeCard}
              />
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={handlePrev}
              className="bg-zinc-800 hover:bg-zinc-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-300"
              aria-label="Previous card"
            >
              ←
            </button>
            
            <div className="flex gap-2">
              {problems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCard(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === activeCard ? 'bg-white' : 'bg-zinc-700'
                  }`}
                  aria-label={`Go to card ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="bg-zinc-800 hover:bg-zinc-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-300"
              aria-label="Next card"
            >
              →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
