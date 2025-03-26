'use client'
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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

const AboutPage = () => {
  // For scroll animations
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-b from-zinc-900 to-black text-white min-h-screen">
      {/* Hero Section */}
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

      {/* Problem Section */}
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
              className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white via-white to-zinc-900 text-transparent bg-clip-text"
            >
              The Problem We Solve
            </motion.h2>
            
            <motion.div variants={fadeIn} className="mb-10 text-center md:text-left">
              <p className="text-gray-300 mb-6 leading-relaxed">
                After two years in the digital marketing industry, I, <span className="font-bold bg-gradient-to-r from-white via-white to-zinc-900 text-transparent bg-clip-text border-b border-white/50 pb-0.5">Alok Kumar</span> (Founder & CEO of <span className="font-bold bg-gradient-to-r from-white via-white to-zinc-900 text-transparent bg-clip-text border-b border-white/50 pb-0.5">blinksai</span>), 
                realized the biggest challenges businesses face:
              </p>
            </motion.div>

            <motion.ul 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4 mb-12"
            >
              {[
                "Lack of Clear Direction – Clients don't know what strategies to implement.",
                "Unclear ROI – Clients have no idea how much to invest and what results to expect.",
                "Inefficient Execution – Even with investments, results aren't optimized.",
                "Poor Reporting – No real-time insights into performance.",
                "Delayed Work – Timelines are often missed, affecting business growth.",
                "Payment Collection Issues – Constant follow-ups create unnecessary friction."
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  variants={fadeIn}
                  className="flex items-start gap-3 p-4 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors duration-300 border border-zinc-700/30 hover:border-indigo-500/30"
                >
                  <span className="text-red-500 text-xl">•</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
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

      {/* Services Section */}
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

      {/* Technology Stack */}
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

      {/* Vision Section */}
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

      {/* Future Section */}
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

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-purple-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white via-white to-zinc-900 text-transparent bg-clip-text">Ready to Transform Your Digital Marketing?</h2>
            <p className="text-xl text-gray-300 mb-10">
              Let's discuss how Blinks AI can help your business grow with AI-powered solutions.
            </p>
            <Link href="/contact" className="inline-block bg-white text-black hover:bg-gray-200 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
