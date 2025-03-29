'use client'
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';
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

const AIAgentCategoryView = ({ serviceData }) => {
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    if (serviceData?.subCategories?.length > 0) {
      setSelectedSubCategory(serviceData.subCategories[0]);
    }
  }, [serviceData]);

  useEffect(() => {
    // Auto-rotate images if available
    if (selectedSubCategory?.sampleImages?.length > 1) {
      const interval = setInterval(() => {
        setActiveImageIndex((prev) => 
          (prev + 1) % selectedSubCategory.sampleImages.length
        );
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [selectedSubCategory]);

  const handleSubCategorySelect = (subCategory) => {
    setSelectedSubCategory(subCategory);
    setActiveImageIndex(0);
  };

  if (!serviceData) return null;

  // Get use cases based on category name
  const getUseCases = (categoryName) => {
    const useCases = {
      "Web & App Development Agents": [
        "E-commerce websites",
        "SaaS applications",
        "Mobile apps with high traffic",
        "Customer-facing portals"
      ],
      "Enterprise Solutions Agents": [
        "Large corporate systems",
        "Multi-service architectures",
        "High-volume API services",
        "Legacy system integrations"
      ],
      "Video Editing Agents": [
        "Content creators",
        "Marketing teams",
        "Production studios",
        "Social media managers"
      ],
      "SEO & Content Agents": [
        "Digital marketing agencies",
        "Content publishers",
        "E-commerce businesses",
        "Blog networks"
      ],
      "Design & Branding Agents": [
        "Creative agencies",
        "Marketing departments",
        "Brand managers",
        "Digital product teams"
      ],
      "Lead Generation & Social Media Agents": [
        "Sales teams",
        "Marketing departments",
        "Social media managers",
        "Digital advertisers"
      ]
    };
    
    return useCases[categoryName] || [
      "Businesses seeking automation",
      "Teams looking to scale operations",
      "Organizations needing data insights",
      "Companies focused on digital transformation"
    ];
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-zinc-900/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          {/* Main heading with enhanced gradient */}
          <motion.h1 
            variants={fadeIn}
            className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-white via-white to-zinc-900 text-transparent bg-clip-text"
            style={{
              backgroundSize: '200% auto',
              animation: 'gradient 8s linear infinite',
            }}
          >
            {serviceData.title}
          </motion.h1>
          
          <motion.p 
            variants={fadeIn}
            className="text-lg text-gray-300 mb-12 text-center max-w-3xl mx-auto"
          >
            {serviceData.description}
          </motion.p>

          {/* Main content area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            {/* Left sidebar - subcategory selection with enhanced styling */}
            <motion.div 
              variants={fadeIn}
              className="lg:col-span-3 rounded-xl p-6 h-fit"
              style={{
                background: 'linear-gradient(145deg, rgba(24,24,27,0.7), rgba(9,9,11,0.9))',
                borderLeft: '1px solid rgba(255,255,255,0.1)',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                borderRight: '1px solid rgba(0,0,0,0.2)',
                borderBottom: '1px solid rgba(0,0,0,0.2)',
                boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.3)'
              }}
            >
              <h3 className="text-xl font-semibold mb-4 text-white">AI Agent Categories</h3>
              <div className="space-y-2">
                {serviceData.subCategories.map((subCategory, index) => (
                  <button
                    key={index}
                    onClick={() => handleSubCategorySelect(subCategory)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center gap-3 ${
                      selectedSubCategory?.name === subCategory.name
                        ? 'bg-gradient-to-r from-white/10 to-zinc-800/50 border-l-2 border-white'
                        : 'hover:bg-zinc-800/50'
                    }`}
                  >
                    <span className="text-white">{subCategory.icon || '•'}</span>
                    <span className={`${
                      selectedSubCategory?.name === subCategory.name
                        ? 'text-white'
                        : 'text-gray-400'
                    }`}>
                      {subCategory.name}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Main content area */}
            <motion.div 
              variants={fadeIn}
              className="lg:col-span-9"
            >
              <AnimatePresence mode="wait">
                {selectedSubCategory && (
                  <motion.div
                    key={selectedSubCategory.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-xl overflow-hidden"
                    style={{
                      background: 'linear-gradient(145deg, rgba(24,24,27,0.7), rgba(9,9,11,0.9))',
                      borderLeft: '1px solid rgba(255,255,255,0.1)',
                      borderTop: '1px solid rgba(255,255,255,0.1)',
                      borderRight: '1px solid rgba(0,0,0,0.2)',
                      borderBottom: '1px solid rgba(0,0,0,0.2)',
                      boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    {/* Content header with enhanced gradient */}
                    <div className="p-6 border-b border-zinc-800/50" style={{
                      background: 'linear-gradient(to right, rgba(24,24,27,0.5), rgba(9,9,11,0.7))'
                    }}>
                      <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-white to-zinc-900 text-transparent bg-clip-text">
                        {selectedSubCategory.name}
                      </h2>
                      <p className="text-gray-300 mt-2">
                        {selectedSubCategory.description}
                      </p>
                    </div>

                    {/* Two column layout for desktop */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                      {/* Left column - Features */}
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-white">Key Features</h3>
                        <ul className="space-y-3">
                          {selectedSubCategory.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-white mr-2 mt-1">•</span>
                              <span className="text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Use Cases section */}
                        <div className="mt-6">
                          <div className="bg-gradient-to-r from-zinc-800/80 to-zinc-900/80 rounded-lg p-4 border-l-2 border-white/30">
                            <h4 className="text-lg font-medium mb-3 bg-gradient-to-r from-white to-zinc-400 text-transparent bg-clip-text">Ideal For</h4>
                            <ul className="space-y-2">
                              {getUseCases(selectedSubCategory.name).map((useCase, index) => (
                                <li key={index} className="text-gray-300 flex items-start">
                                  <span className="text-zinc-500 mr-2">→</span>
                                  <span>{useCase}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Right column - Sample images and questions */}
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-white">Examples</h3>
                        
                        {/* Default image if none is provided */}
                        <div className="relative rounded-lg overflow-hidden aspect-video bg-gradient-to-br from-zinc-800 to-black border border-zinc-700/30">
                          {/* Use actual image if available, otherwise show placeholder */}
                          {selectedSubCategory.sampleImages && selectedSubCategory.sampleImages.length > 0 ? (
                            <div className="relative w-full h-full">
                              <Image 
                                src={selectedSubCategory.sampleImages[activeImageIndex] || '/blinksaiimg.jpg'}
                                alt={`${selectedSubCategory.name} example`}
                                fill
                                className="object-cover"
                              />
                              
                              {/* Image navigation dots */}
                              {selectedSubCategory.sampleImages.length > 1 && (
                                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                                  {selectedSubCategory.sampleImages.map((_, index) => (
                                    <button
                                      key={index}
                                      onClick={() => setActiveImageIndex(index)}
                                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                                        index === activeImageIndex ? 'bg-white' : 'bg-zinc-600'
                                      }`}
                                      aria-label={`View image ${index + 1}`}
                                    />
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : (
                            <div className="relative w-full h-full">
                              <Image 
                                src="/blinksaiimg.jpg"
                                alt={`${selectedSubCategory.name} example`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          )}
                        </div>
                        
                        {/* Questions section */}
                        <div className="mt-6">
                          <h4 className="text-lg font-medium mb-3 text-white">Discovery Questions</h4>
                          <ul className="space-y-2 bg-zinc-800/30 p-4 rounded-lg">
                            {selectedSubCategory.questions.map((question, index) => (
                              <li key={index} className="text-gray-300 flex items-start">
                                <span className="text-zinc-500 mr-2">{index + 1}.</span>
                                <span>{question}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* CTA Button with enhanced gradient */}
                        <div className="mt-6">
                          <Link 
                            href="/contact" 
                            className="block w-full py-3 px-4 bg-gradient-to-r from-white to-zinc-300 text-black font-medium rounded-lg text-center transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
                          >
                            Get Started with {selectedSubCategory.name}
                          </Link>
                        </div>
                      </div>
                    </div>
                    
                    {/* Implementation Process Section */}
                    <div className="p-6 border-t border-zinc-800/50" style={{
                      background: 'linear-gradient(to bottom, rgba(24,24,27,0.5), rgba(9,9,11,0.7))'
                    }}>
                      <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-white via-white to-zinc-900 text-transparent bg-clip-text">
                        Implementation Process
                      </h3>
                      <p className="text-gray-300 mb-6">
                        Our streamlined approach to implementing {selectedSubCategory.name.toLowerCase()} for your business.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-zinc-800/30 p-4 rounded-lg border border-zinc-700/30">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-700 to-black flex items-center justify-center mb-3">
                            <span className="text-white font-bold">1</span>
                          </div>
                          <h4 className="text-lg font-medium mb-2 text-white">Analysis</h4>
                          <p className="text-gray-400 text-sm">
                            We analyze your business processes and requirements to identify optimization opportunities.
                          </p>
                        </div>
                        
                        <div className="bg-zinc-800/30 p-4 rounded-lg border border-zinc-700/30">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-700 to-black flex items-center justify-center mb-3">
                            <span className="text-white font-bold">2</span>
                          </div>
                          <h4 className="text-lg font-medium mb-2 text-white">Implementation</h4>
                          <p className="text-gray-400 text-sm">
                            We deploy custom-trained AI agents that integrate seamlessly with your existing systems.
                          </p>
                        </div>
                        
                        <div className="bg-zinc-800/30 p-4 rounded-lg border border-zinc-700/30">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-700 to-black flex items-center justify-center mb-3">
                            <span className="text-white font-bold">3</span>
                          </div>
                          <h4 className="text-lg font-medium mb-2 text-white">Continuous Improvement</h4>
                          <p className="text-gray-400 text-sm">
                            Our agents continuously learn and adapt to provide increasingly valuable insights.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
          
          {/* Bottom CTA section with enhanced gradient */}
          <motion.div 
            variants={fadeIn}
            className="text-center p-8 rounded-xl"
            style={{
              background: 'linear-gradient(145deg, rgba(24,24,27,0.7), rgba(9,9,11,0.9))',
              borderLeft: '1px solid rgba(255,255,255,0.1)',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              borderRight: '1px solid rgba(0,0,0,0.2)',
              borderBottom: '1px solid rgba(0,0,0,0.2)',
              boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.3)'
            }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white via-white to-zinc-900 text-transparent bg-clip-text">
              Ready to transform your business with AI agents?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our team of experts is ready to help you achieve your goals with tailored AI solutions.
            </p>
            <Link 
              href="/contact" 
              className="inline-block py-3 px-8 bg-gradient-to-r from-white to-zinc-300 text-black font-medium rounded-lg transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Add CSS animation for gradient text */}
      <style jsx global>{`
        @keyframes gradient {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }
      `}</style>
    </section>
  );
};

export default AIAgentCategoryView;
