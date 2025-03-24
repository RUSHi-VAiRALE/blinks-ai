'use client'
import React from 'react';
import Image from 'next/image';

const FeatureCard = ({ 
  title = "UI Library", 
  subtitle = "Not any usual", 
  author = "Mihir I Dev", 
  role = "Creator & Maintainer",
  logo = "/logo.svg"
}) => {
  return (
    <div className="relative bg-black/80 rounded-3xl p-8 overflow-hidden shadow-2xl border border-gray-800">
      {/* Subtle gradient in the background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-80"></div>
      
      {/* Top right corner gradient */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.5),rgba(255,255,255,0.5)_30%,transparent_70%)] pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
        {/* Logo section */}
        <div className="flex-shrink-0">
          <div className="relative w-32 h-32 bg-gradient-to-b from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-white/5 rounded-2xl"></div>
            <Image 
              src={logo} 
              alt="Logo" 
              width={80} 
              height={80}
              className="relative z-10"
            />
          </div>
        </div>
        
        {/* Text content */}
        <div className="flex flex-col">
          <p className="text-gray-400 text-lg mb-1">{subtitle}</p>
          <h2 className="text-white text-4xl font-light mb-4">{title}</h2>
          <div className="mt-auto">
            <p className="text-white/90 font-medium">{author}</p>
            <p className="text-gray-500">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;