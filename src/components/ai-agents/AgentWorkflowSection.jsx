'use client'
import React from 'react';
import { motion } from 'framer-motion';

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

const AgentWorkflowSection = () => {
  const steps = [
    {
      number: "1",
      title: "Analysis",
      description: "Our AI agents analyze your business processes, data, and requirements to identify optimization opportunities."
    },
    {
      number: "2",
      title: "Implementation",
      description: "We deploy custom-trained AI agents that integrate seamlessly with your existing systems and workflows."
    },
    {
      number: "3",
      title: "Continuous Improvement",
      description: "Our agents continuously learn and adapt to provide increasingly valuable insights and automation."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-zinc-900/30 relative overflow-hidden">
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
          className="max-w-5xl mx-auto"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white via-white to-zinc-900 text-transparent bg-clip-text"
          >
            How Our AI Agents Work
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mx-auto mb-6 relative">
                  <span className="text-white text-xl font-bold">{step.number}</span>
                  {index < steps.length - 1 && (
                    <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 h-0.5 w-8 bg-zinc-700 hidden md:block"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-400">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AgentWorkflowSection;
