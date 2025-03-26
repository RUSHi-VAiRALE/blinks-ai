'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from './AnimationVariants';

const ProblemSection = () => {
  return (
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
              After two years in the digital marketing industry, I, <span className="font-bold bg-gradient-to-r from-white via-white to-zinc-900 text-transparent bg-clip-text border-b border-white/50 pb-0.5">Alok Kumar</span> (Founder & CEO of <span className="font-bold text-white border-b border-white/50 pb-0.5">blinksai</span>), 
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
  );
};

export default ProblemSection;
