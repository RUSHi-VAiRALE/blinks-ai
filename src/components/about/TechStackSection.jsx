'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from './AnimationVariants';

const TechStackSection = () => {
  const technologies = [
    { name: 'React.js', category: 'Frontend', icon: '⚛️' },
    { name: 'Next.js', category: 'Frontend/Backend', icon: '▲' },
    { name: 'Node.js', category: 'Backend', icon: '🟢' },
    { name: 'MongoDB', category: 'Database', icon: '🍃' },
    { name: 'TailwindCSS', category: 'Styling', icon: '🎨' },
    { name: 'Framer Motion', category: 'Animation', icon: '🔄' },
    { name: 'OpenAI API', category: 'AI Integration', icon: '🧠' },
    { name: 'Vercel', category: 'Deployment', icon: '▲' },
    { name: 'AWS', category: 'Cloud Services', icon: '☁️' }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-purple-900/10 opacity-30"></div>
        
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
              className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white via-white to-zinc-900 text-transparent bg-clip-text"
            >
              Technology Stack
            </motion.h2>
            
            <motion.p 
              variants={fadeIn}
              className="text-gray-300 mb-10 text-center"
            >
              We leverage AI and modern technologies for efficient workflow and execution:
            </motion.p>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16"
            >
              {[
                { name: 'AI & ML', desc: 'Python, LLM Models', icon: '🧠' },
                { name: 'Backend', desc: 'Node.js, MongoDB', icon: '⚙️' },
                { name: 'Frontend', desc: 'Next.js, React.js', icon: '🖥️' },
                { name: 'Mobile App', desc: 'React Native', icon: '📱' },
                { name: 'Automation', desc: 'AI-driven tracking', icon: '🤖' }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn}
                  className="flex flex-col items-center text-center p-5 bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 rounded-lg border border-zinc-700/50 hover:border-blue-500/30 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <span className="text-3xl mb-3">{item.icon}</span>
                  <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

  );
};

export default TechStackSection;
