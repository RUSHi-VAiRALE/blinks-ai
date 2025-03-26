'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from './AnimationVariants';

const FutureSection = () => {
  const futureGoals = [
    {
      title: "AI-Powered Marketing Platform",
      description: "Building a comprehensive platform that automates marketing workflows while maintaining human oversight for creative decisions.",
      icon: "🚀"
    },
    {
      title: "Global Expansion",
      description: "Extending our services to international markets, helping businesses worldwide leverage AI for their digital marketing needs.",
      icon: "🌎"
    },
    {
      title: "Research & Development",
      description: "Continuous innovation in AI marketing technologies to stay ahead of industry trends and provide cutting-edge solutions.",
      icon: "🔬"
    },
    {
      title: "Education & Training",
      description: "Developing resources to help businesses understand and adapt to the evolving digital marketing landscape.",
      icon: "📚"
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10 opacity-30"></div>
    
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
          What's Next?
        </motion.h2>
        
        <motion.h3 
          variants={fadeIn}
          className="text-xl md:text-2xl font-semibold mb-10 text-center text-gray-300"
        >
          Future Expansion
        </motion.h3>

        <motion.p 
          variants={fadeIn}
          className="text-gray-300 mb-10 text-center"
        >
          We're continuously evolving, with upcoming features like:
        </motion.p>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6 mb-16"
        >
          {[
            'AI-Based Cost Estimation & ROI Tracking – Predictive analytics for smarter marketing investments.',
            'AI-Managed Task Distribution – Ensuring efficient execution with minimal delays.',
            'Real-Time Ad & Content Performance Dashboard – Instant insights into campaigns.'
          ].map((item, index) => (
            <motion.div 
              key={index}
              variants={fadeIn}
              className="flex items-start gap-3 p-5 bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 rounded-lg border border-zinc-700/50 hover:border-blue-500/30 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <span className="text-blue-500 text-xl">🚀</span>
              <span>{item}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-300 mb-8">
            Blinks AI is not just another agency—it's a revolution in digital marketing, driven by AI, technology, and real expertise.
          </p>
          <p className="text-2xl font-bold bg-gradient-to-r from-white via-white to-zinc-900 text-transparent bg-clip-text mb-8">
            🚀 Simplify, Optimize, and Scale with AI-Powered Digital Marketing! 🚀
          </p>
        </motion.div>
      </motion.div>
    </div>
  </section>
  );
};

export default FutureSection;
