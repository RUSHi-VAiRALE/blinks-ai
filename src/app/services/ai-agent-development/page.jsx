'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaRobot } from 'react-icons/fa';
import { aiAgentsServices } from '../../../data/servicesData';
import AIAgentCategoryView from '@/components/ai-agents/AIAgentCategoryView';
import AgentBenefitsSection from '@/components/ai-agents/AgentBenefitsSection';
import AgentWorkflowSection from '@/components/ai-agents/AgentWorkflowSection';

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

const pulseAnimation = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop"
    }
  }
};

const CustomAIAgentsPage = () => {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section with animated robot illustration */}
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
            <motion.div 
              variants={pulseAnimation}
              initial="initial"
              animate="animate"
              className="text-5xl mb-8 mx-auto w-20 h-20 flex items-center justify-center bg-zinc-900 rounded-full"
            >
              <FaRobot className="text-white" />
            </motion.div>
            
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-zinc-900 text-transparent bg-clip-text"
            >
              Custom AI Agents
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-lg md:text-xl text-gray-300 mb-10"
            >
              Intelligent automation solutions designed to transform your business operations,
              enhance customer experiences, and drive growth through AI-powered efficiency.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-zinc-900/50 py-4 border-b border-zinc-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">&#8594;</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span className="mx-2">&#8594;</span>
            <span className="text-white">Custom AI Agents</span>
          </div>
        </div>
      </div>

      {/* AI Agent Category View Component */}
      <AIAgentCategoryView serviceData={aiAgentsServices} />
      
      {/* How It Works Section */}
      <AgentWorkflowSection />
      
      {/* Benefits Section */}
      <AgentBenefitsSection />
      
      {/* CTA Section */}
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
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-white to-zinc-900 text-transparent bg-clip-text"
            >
              Ready to Transform Your Business with AI?
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto"
            >
              Our team of experts is ready to help you implement custom AI agents that will revolutionize your operations and drive unprecedented growth.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Link 
                href="/contact" 
                className="inline-block py-3 px-8 bg-gradient-to-r from-white to-zinc-300 text-black font-medium rounded-lg transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Get Started Today
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default CustomAIAgentsPage;
