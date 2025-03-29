'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ceoImage from '../../../public/alok.jpg'
import ctoImage from '../../../public/nikhil.jpg'
import { fadeIn, staggerContainer } from './AnimationVariants';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Alok Kumar',
      title: 'Founder & CEO',
      image: ceoImage, // You'll need to add these images to your public folder
      bio: 'Visionary leader with extensive experience in digital marketing and AI technology integration.'
    },
    {
      name: 'Nikhil Kumar',
      title: 'Co-Founder & CTO',
      image: ctoImage,
      bio: 'Technical genius behind our AI systems and software architecture.'
    },
    {
      name: 'Rushikesh Vairale',
      title: 'Developer',
      image: '/team/developer.jpg',
      bio: 'Expert in React, Next.js, and AI integration for web applications.'
    }
  ];

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
            Our Team
          </motion.h2>
          
          <motion.p 
            variants={fadeIn}
            className="text-gray-300 mb-12 text-center"
          >
            Meet the brilliant minds behind Blinks AI who are revolutionizing digital marketing with AI technology.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 rounded-xl overflow-hidden border border-zinc-700/50 hover:border-indigo-500/30 transition-all duration-300 group shadow-sm hover:shadow-md"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
                  <div className="w-full h-full relative">
                    {/* Placeholder div for image - replace with actual Image component when images are available */}
                    <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center">
                      <span className="text-4xl">👤</span>
                    </div>
                    {/* Uncomment when images are available */}
                    <Image 
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <h3 className={`text-xl font-bold mb-1 ${member.name === 'Alok Kumar' ? 'bg-gradient-to-r from-white via-white to-zinc-900 text-transparent bg-clip-text' : member.name === 'Zencodx' ? 'text-white font-bold' : 'text-white'}`}>
                      {member.name}
                    </h3>
                    <p className="text-gray-300 text-sm">{member.title}</p>
                  </div>
                </div>
                {/* <div className="p-6">
                  <p className="text-gray-300">{member.bio}</p>
                </div> */}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
