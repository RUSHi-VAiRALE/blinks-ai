'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from './AnimationVariants';

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-zinc-900/50">
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
            Our Services
          </motion.h2>
          
          <motion.p 
            variants={fadeIn}
            className="text-gray-300 mb-12 text-center"
          >
            We provide end-to-end digital marketing solutions, with AI optimizing the process while human experts execute the work.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Digital Marketing Services */}
            <motion.div
              variants={fadeIn}
              className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 rounded-xl overflow-hidden border border-zinc-700/50 hover:border-blue-500/30 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Digital Marketing Services</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>SEO Optimization (On-Page & Off-Page SEO, Keyword Research, Link Building)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Social Media Strategy & Management (Content Planning, Engagement Growth)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Paid Ads Management (Google Ads, Meta Ads, ROI Optimization)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>AI-Powered Copywriting (Ad Copies, Blogs, Email Sequences)</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Content & Media Production */}
            <motion.div
              variants={fadeIn}
              className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 rounded-xl overflow-hidden border border-zinc-700/50 hover:border-purple-500/30 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Content & Media Production</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    <span>Video Editing (Human-Executed, AI-Managed Workflow) (Reels, Motion Graphics, Long-Form Videos)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    <span>Graphic Design (Logos, Posters, Magazines, Brand Identity)</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Web & Software Development */}
            <motion.div
              variants={fadeIn}
              className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 rounded-xl overflow-hidden border border-zinc-700/50 hover:border-indigo-500/30 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-500/30 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Web & Software Development</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400">•</span>
                    <span>Website & App Development (React.js, Next.js, Node.js, MongoDB)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400">•</span>
                    <span>Custom Software Development (Business Automation Tools)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400">•</span>
                    <span>AI Agent Development (Automated Chatbots & AI Assistants)</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
