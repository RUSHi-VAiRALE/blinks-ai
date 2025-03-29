'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const AgentCategoryCard = ({ category, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Default image if none is provided
  const defaultImage = '/blinksaiimg.jpg';
  
  // Use placeholder images or default
  const image1 = category.sampleImages && category.sampleImages[0] ? category.sampleImages[0] : defaultImage;
  const image2 = category.sampleImages && category.sampleImages[1] ? category.sampleImages[1] : defaultImage;

  return (
    <motion.div
      variants={fadeIn}
      className="bg-zinc-900/70 border border-zinc-800/50 rounded-xl overflow-hidden transition-all duration-300 hover:border-white/20"
    >
      <div className="p-6">
        {/* Icon with animated background */}
        <div className="mb-6 w-14 h-14 rounded-lg bg-gradient-to-br from-zinc-800 to-black flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_white_0%,_transparent_70%)]"></div>
          <div className="text-white text-2xl relative z-10">
            {category.icon}
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-white via-white to-zinc-900 text-transparent bg-clip-text">
          {category.name}
        </h3>
        
        {/* Description */}
        <p className="text-gray-400 mb-6">
          {category.description}
        </p>
        
        {/* Features */}
        <div className="mb-6">
          <h4 className="text-sm uppercase text-gray-500 mb-3 tracking-wider">Key Features</h4>
          <ul className="space-y-2">
            {category.features.map((feature, idx) => (
              <li key={idx} className="text-gray-300 text-sm flex items-start">
                <span className="mr-2 text-white mt-1">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Toggle Button */}
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full py-2 px-4 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg flex items-center justify-between transition-all duration-300 mb-4"
        >
          <span>{isExpanded ? 'Show Less' : 'Show More Details'}</span>
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </button>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-6 space-y-6 animate-fadeIn">
            {/* Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image 
                  src={image1}
                  alt={`${category.name} example 1`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image 
                  src={image2}
                  alt={`${category.name} example 2`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Questions */}
            <div>
              <h4 className="text-sm uppercase text-gray-500 mb-3 tracking-wider">Common Questions</h4>
              <ul className="space-y-3">
                {category.questions.map((question, idx) => (
                  <li key={idx} className="text-gray-300 text-sm bg-zinc-800/50 p-3 rounded-lg">
                    {question}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Use Cases */}
            <div>
              <h4 className="text-sm uppercase text-gray-500 mb-3 tracking-wider">Ideal For</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {getUseCases(category.name).map((useCase, idx) => (
                  <div key={idx} className="bg-zinc-800/30 px-3 py-2 rounded-lg text-sm text-gray-300 flex items-center">
                    <span className="mr-2 text-xs">•</span>
                    <span>{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

// Helper function to get use cases based on category name
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

export default AgentCategoryCard;
