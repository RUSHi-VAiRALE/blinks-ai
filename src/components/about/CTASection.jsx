'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeIn, staggerContainer } from './AnimationVariants';

const CTASection = () => {
  return (
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
  );
};

export default CTASection;
