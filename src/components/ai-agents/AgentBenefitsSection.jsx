'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaChartLine, FaExpandArrowsAlt, FaTrophy } from 'react-icons/fa';

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

const AgentBenefitsSection = () => {
  const benefits = [
    {
      title: "Enhanced Efficiency",
      description: "Automate repetitive tasks and streamline workflows to save time and reduce operational costs by up to 40%.",
      icon: <FaRocket className="text-white text-xl" />
    },
    {
      title: "Data-Driven Insights",
      description: "Gain valuable business intelligence through real-time analytics and predictive modeling to make informed decisions.",
      icon: <FaChartLine className="text-white text-xl" />
    },
    {
      title: "Scalable Solutions",
      description: "Our AI agents grow with your business, handling increased workloads without proportional increases in resources.",
      icon: <FaExpandArrowsAlt className="text-white text-xl" />
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead of the competition with cutting-edge AI technology that continuously evolves to meet market demands.",
      icon: <FaTrophy className="text-white text-xl" />
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-black">
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
            Benefits of Our AI Agents
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mr-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                </div>
                <p className="text-gray-400">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AgentBenefitsSection;
