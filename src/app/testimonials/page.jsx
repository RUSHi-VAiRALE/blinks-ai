'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TestimonialCategoryView from '@/components/testimonials/TestimonialCategoryView';
import { getAllTestimonialCategories, getTestimonialByName } from '@/data/testimonialsData';
//import PageHeader from '@/components/shared/PageHeader';
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

const cardHover = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.03,
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};
const TestimonialsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Web Development');
  const categories = getAllTestimonialCategories();
  const testimonialData = getTestimonialByName(selectedCategory);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Page Header */}
      {/* <PageHeader 
        title="Client Testimonials" 
        subtitle="Success stories from businesses we've helped grow"
        bgPattern="testimonials"
      /> */}
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
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-zinc-900 text-transparent bg-clip-text"
            >
              Testimonials
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-lg md:text-xl text-gray-300 mb-10"
            >
              Success stories from businesses we've helped grow
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Category Selection */}
      <section className="py-12 bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-white via-white to-zinc-900 text-transparent bg-clip-text">
              Browse by Service Category
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`p-4 rounded-xl transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-br from-zinc-800 to-black border border-white/20 shadow-lg'
                      : 'bg-gradient-to-br from-zinc-900/80 to-black/90 border border-zinc-800/30 hover:border-zinc-700/50'
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`p-3 rounded-full mb-3 ${
                      selectedCategory === category.name
                        ? 'bg-gradient-to-br from-white/10 to-zinc-900'
                        : 'bg-gradient-to-br from-zinc-800/50 to-black'
                    }`}>
                      {category.icon}
                    </div>
                    <h3 className={`font-medium ${
                      selectedCategory === category.name
                        ? 'text-white'
                        : 'text-gray-400'
                    }`}>
                      {category.name}
                    </h3>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Category View */}
      {testimonialData && (
        <TestimonialCategoryView testimonialData={testimonialData} />
      )}

      {/* Trust Indicators Section */}
      {/* <section className="py-16 bg-gradient-to-b from-zinc-900/50 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 bg-gradient-to-r from-white via-white to-zinc-900 text-transparent bg-clip-text">
              Trusted by Businesses Worldwide
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              
              <div className="p-6 rounded-lg bg-gradient-to-br from-zinc-800/30 to-black/50 border border-zinc-800/50">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">100+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              
              <div className="p-6 rounded-lg bg-gradient-to-br from-zinc-800/30 to-black/50 border border-zinc-800/50">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">250+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              
              <div className="p-6 rounded-lg bg-gradient-to-br from-zinc-800/30 to-black/50 border border-zinc-800/50">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">12+</div>
                <div className="text-gray-400">Industries Served</div>
              </div>
              
              <div className="p-6 rounded-lg bg-gradient-to-br from-zinc-800/30 to-black/50 border border-zinc-800/50">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
            </div>
            
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence and client satisfaction is reflected in the success stories of businesses we've helped. Join our growing list of satisfied clients and experience the Blinks AI difference.
            </p>
          </div>
        </div>
      </section> */}
      
      {/* CTA Section */}
      <section className="py-16 bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center p-8 rounded-xl bg-gradient-to-br from-zinc-800/50 to-black/70 border border-zinc-700/30">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-white via-white to-zinc-900 text-transparent bg-clip-text">
              Ready to become our next success story?
            </h2>
            <p className="text-gray-300 mb-8">
              Let's discuss how we can help your business achieve similar results. Our team is ready to create a tailored solution for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-3 bg-gradient-to-r from-white to-zinc-300 text-black font-medium rounded-lg transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Contact Us
              </a>
              <a 
                href="/services" 
                className="px-8 py-3 bg-transparent border border-white/30 text-white font-medium rounded-lg transition-all duration-300 hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TestimonialsPage;
