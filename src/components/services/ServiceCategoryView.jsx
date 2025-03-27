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

const ServiceCategoryView = ({ serviceData }) => {
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

  // Sample website templates grid based on selected subcategory
  const getTemplateGrid = () => {
    const templates = [
      { id: 1, name: 'Template 1', image: '/images/template1.jpg' },
      { id: 2, name: 'Template 2', image: '/images/template2.jpg' },
      { id: 3, name: 'Template 3', image: '/images/template3.jpg' },
      { id: 4, name: 'Template 4', image: '/images/template4.jpg' },
    ];
    
    return (
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {templates.map((template) => (
          <div 
            key={template.id}
            className="relative overflow-hidden rounded-lg group cursor-pointer border border-zinc-700/30 transition-all duration-300 hover:border-white/30"
          >
            {/* Template image placeholder */}
            <div className="aspect-video bg-gradient-to-br from-zinc-800 via-zinc-900 to-black flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/50 to-black/80 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="text-center z-10 p-4">
                <div className="inline-block p-3 rounded-full bg-gradient-to-r from-white/10 to-zinc-800/30 backdrop-blur-sm mb-3">
                  {selectedSubCategory.icon}
                </div>
                <h4 className="text-lg font-medium text-white">{template.name}</h4>
                <p className="text-sm text-gray-400 mt-1">{selectedSubCategory.name} Design</p>
              </div>
            </div>
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
              <button className="px-4 py-2 bg-white text-black rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                View Template
              </button>
            </div>
          </div>
        ))}
      </div>
    );
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
              <h3 className="text-xl font-semibold mb-4 text-white">Categories</h3>
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
                        <h3 className="text-xl font-semibold mb-4 text-white">Features</h3>
                        <ul className="space-y-3">
                          {selectedSubCategory.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-white mr-2 mt-1">•</span>
                              <span className="text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Questions section - now visible by default */}
                        <div className="mt-6">
                          <div className="bg-gradient-to-r from-zinc-800/80 to-zinc-900/80 rounded-lg p-4 border-l-2 border-white/30">
                            <h4 className="text-lg font-medium mb-3 bg-gradient-to-r from-white to-zinc-400 text-transparent bg-clip-text">Discovery Questions</h4>
                            <ul className="space-y-2">
                              {selectedSubCategory.questions.map((question, index) => (
                                <li key={index} className="text-gray-300 flex items-start">
                                  <span className="text-zinc-500 mr-2">{index + 1}.</span>
                                  <span>{question}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Right column - Sample images */}
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-white">Examples</h3>
                        
                        {selectedSubCategory.sampleImages && selectedSubCategory.sampleImages.length > 0 ? (
                          <div className="relative rounded-lg overflow-hidden aspect-video bg-gradient-to-br from-zinc-800 to-black border border-zinc-700/30">
                            {/* Image placeholder - in production, replace with actual images */}
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-800 to-black">
                              <p className="text-zinc-500">Sample Image Placeholder</p>
                            </div>
                            
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
                          <div className="rounded-lg overflow-hidden aspect-video bg-gradient-to-br from-zinc-800 to-black border border-zinc-700/30 flex items-center justify-center">
                            <p className="text-zinc-500">No examples available</p>
                          </div>
                        )}
                        
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
                    
                    {/* Website Templates Grid Section */}
                    <div className="p-6 border-t border-zinc-800/50" style={{
                      background: 'linear-gradient(to bottom, rgba(24,24,27,0.5), rgba(9,9,11,0.7))'
                    }}>
                      <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-white via-white to-zinc-900 text-transparent bg-clip-text">
                        {selectedSubCategory.name} Templates
                      </h3>
                      <p className="text-gray-300 mb-4">
                        Browse our collection of professionally designed {selectedSubCategory.name.toLowerCase()} templates.
                      </p>
                      
                      {getTemplateGrid()}
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
              Ready to elevate your {serviceData.title.toLowerCase()} experience?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our team of experts is ready to help you achieve your goals with tailored solutions.
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

export default ServiceCategoryView;
