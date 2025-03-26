'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from './AnimationVariants';

const SolutionSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-indigo-900/10 to-purple-900/10 opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            Our Solution
          </motion.h2>
          
          <motion.h3 
            variants={fadeIn}
            className="text-xl md:text-2xl font-semibold mb-10 text-center text-gray-300"
          >
            AI-Managed Operations, Human-Led Execution
          </motion.h3>

          <motion.p 
            variants={fadeIn}
            className="text-gray-300 mb-10 text-center"
          >
            Blinks AI integrates artificial intelligence with expert digital marketing execution to ensure:
          </motion.p>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          >
            {[
              'Real-Time Tracking & Reporting – Instant clarity on ad performance, SEO growth, and content reach.',
              'AI-Managed Workflow & Execution – No delays, no mismanagement.',
              'Clear Financial Insights – Clients know exactly what they are paying for and what results to expect.',
              'Prepaid Subscription Model – No follow-ups for payments, ensuring smooth operations.'
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="flex items-start gap-3 p-5 bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 rounded-lg border border-zinc-700/50 hover:border-indigo-500/30 transition-all duration-300 shadow-sm hover:shadow-md"
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

export default SolutionSection;
