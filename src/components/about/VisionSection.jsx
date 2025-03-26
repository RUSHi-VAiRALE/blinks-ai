'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from './AnimationVariants';

const VisionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-white via-white to-zinc-900 text-transparent bg-clip-text"
            >
              The Vision Behind Blinks AI
            </motion.h2>
            
            <motion.p 
              variants={fadeIn}
              className="text-gray-300 mb-10 text-center"
            >
              My goal with Blinks AI is to eliminate inefficiencies in digital marketing by:
            </motion.p>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4 mb-16"
            >
              {[
                'Providing clients with clear strategies and transparent results.',
                'Ensuring timely execution through AI-powered workflow automation.',
                'Fixing the broken reporting system by offering real-time insights.',
                'Streamlining payment with a prepaid model for hassle-free business.',
                'Exposing deceptive agencies and proving the real power of digital marketing.'
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn}
                  className="flex items-start gap-3 p-4 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors duration-300 border border-zinc-700/30 hover:border-indigo-500/30"
                >
                  <span className="text-green-500 text-xl font-bold">✓</span>
                  <span>{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
  );
};

export default VisionSection;
