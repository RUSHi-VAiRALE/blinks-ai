'use client'
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

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

const TestimonialCategoryView = ({ testimonialData }) => {
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    if (testimonialData?.subCategories?.length > 0) {
      setSelectedSubCategory(testimonialData.subCategories[0]);
    }
  }, [testimonialData]);

  useEffect(() => {
    // Auto-rotate testimonials if available
    if (selectedSubCategory?.testimonials?.length > 1) {
      const interval = setInterval(() => {
        setActiveTestimonialIndex((prev) => 
          (prev + 1) % selectedSubCategory.testimonials.length
        );
      }, 10000); // Longer interval for testimonials to allow reading
      
      return () => clearInterval(interval);
    }
  }, [selectedSubCategory]);

  const handleSubCategorySelect = (subCategory) => {
    setSelectedSubCategory(subCategory);
    setActiveTestimonialIndex(0);
  };

  if (!testimonialData) return null;

  // Render star rating
  const renderStarRating = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar 
          key={i} 
          className={i < rating ? "text-yellow-400" : "text-zinc-600"} 
        />
      );
    }
    return <div className="flex space-x-1">{stars}</div>;
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
            {testimonialData.title}
          </motion.h1>
          
          <motion.p 
            variants={fadeIn}
            className="text-lg text-gray-300 mb-12 text-center max-w-3xl mx-auto"
          >
            {testimonialData.description}
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
                {testimonialData.subCategories.map((subCategory, index) => (
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
                        {selectedSubCategory.name} Testimonials
                      </h2>
                      <p className="text-gray-300 mt-2">
                        {selectedSubCategory.description}
                      </p>
                    </div>

                    {/* Testimonial display */}
                    <div className="p-6">
                      {selectedSubCategory.testimonials && selectedSubCategory.testimonials.length > 0 ? (
                        <div className="space-y-8">
                          {/* Featured testimonial */}
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={activeTestimonialIndex}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.5 }}
                              className="bg-gradient-to-br from-zinc-800/50 to-black/70 rounded-xl p-6 border border-zinc-700/30"
                            >
                              <div className="flex flex-col md:flex-row md:items-start gap-6">
                                {/* Client info */}
                                <div className="md:w-1/3">
                                  <div className="bg-gradient-to-br from-zinc-800 to-black p-5 rounded-lg text-center">
                                    {/* <div className="w-20 h-20 mx-auto bg-gradient-to-br from-zinc-700 to-zinc-900 rounded-full flex items-center justify-center mb-4">
                                      <span className="text-2xl text-white">{selectedSubCategory.testimonials[activeTestimonialIndex].clientName.charAt(0)}</span>
                                    </div>
                                    <h4 className="text-xl font-semibold text-white mb-1">{selectedSubCategory.testimonials[activeTestimonialIndex].clientName}</h4>
                                    <p className="text-zinc-400 mb-3">{selectedSubCategory.testimonials[activeTestimonialIndex].companyName}</p>
                                    <div className="flex justify-center mb-2">
                                      {renderStarRating(selectedSubCategory.testimonials[activeTestimonialIndex].rating)}
                                    </div>
                                    <div className="text-sm text-zinc-500">
                                      <p>{selectedSubCategory.testimonials[activeTestimonialIndex].industry}</p>
                                      <p>Project: {selectedSubCategory.testimonials[activeTestimonialIndex].projectYear}</p>
                                    </div> */}
                                  </div>
                                </div>
                                
                                {/* Testimonial content */}
                                <div className="md:w-2/3">
                                  <div className="mb-6">
                                    {/* <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-white to-zinc-400 text-transparent bg-clip-text">Client Testimonial</h3>
                                    <div className="relative">
                                      <div className="absolute -left-4 -top-4 text-4xl text-white/10">"</div>
                                      <p className="text-gray-300 italic relative z-10 pl-2">
                                        {selectedSubCategory.testimonials[activeTestimonialIndex].testimonialText}
                                      </p>
                                      <div className="absolute -right-4 -bottom-4 text-4xl text-white/10">"</div>
                                    </div> */}
                                  </div>
                                  
                                  {/* Project features */}
                                  {/* <div>
                                    <h4 className="text-lg font-medium mb-3 bg-gradient-to-r from-white to-zinc-400 text-transparent bg-clip-text">Project Features</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                      {selectedSubCategory.testimonials[activeTestimonialIndex].projectFeatures.map((feature, idx) => (
                                        <div key={idx} className="flex items-center">
                                          <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                                          <span className="text-gray-300 text-sm">{feature}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div> */}
                                </div>
                              </div>
                            </motion.div>
                          </AnimatePresence>
                          
                          {/* Testimonial navigation */}
                          {selectedSubCategory.testimonials.length > 1 && (
                            <div className="flex justify-center gap-2 mt-4">
                              {selectedSubCategory.testimonials.map((_, index) => (
                                <button
                                  key={index}
                                  onClick={() => setActiveTestimonialIndex(index)}
                                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                                    index === activeTestimonialIndex ? 'bg-white' : 'bg-zinc-600'
                                  }`}
                                  aria-label={`View testimonial ${index + 1}`}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="text-center py-12">
                          <p className="text-zinc-500">No testimonials available for this category yet.</p>
                        </div>
                      )}
                    </div>
                    
                    {/* Features section */}
                    <div className="p-6 border-t border-zinc-800/50" style={{
                      background: 'linear-gradient(to bottom, rgba(24,24,27,0.5), rgba(9,9,11,0.7))'
                    }}>
                      <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-white via-white to-zinc-900 text-transparent bg-clip-text">
                        Features We Delivered
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {selectedSubCategory.features.map((feature, index) => (
                          <div 
                            key={index} 
                            className="bg-gradient-to-br from-zinc-800/50 to-black/70 p-4 rounded-lg border border-zinc-700/30"
                          >
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-white/10 to-zinc-800/50 flex items-center justify-center mr-3">
                                <span className="text-white text-sm">✓</span>
                              </div>
                              <span className="text-gray-300">{feature}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* CTA section */}
                    {/* <div className="p-6 border-t border-zinc-800/50 bg-gradient-to-r from-zinc-900/80 to-black/80">
                      <div className="text-center">
                        <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-white via-white to-zinc-900 text-transparent bg-clip-text">
                          Ready for similar results?
                        </h3>
                        <p className="text-gray-300 mb-6">
                          Let us help you achieve the same success as our clients with our {selectedSubCategory.name.toLowerCase()} services.
                        </p>
                        <Link 
                          href="/contact" 
                          className="inline-block py-3 px-8 bg-gradient-to-r from-white to-zinc-300 text-black font-medium rounded-lg transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
                        >
                          Get Started
                        </Link>
                      </div>
                    </div> */}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
          
          {/* Bottom CTA section with enhanced gradient */}
          {/* <motion.div 
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
              Join our success stories
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
          </motion.div> */}
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

export default TestimonialCategoryView;
