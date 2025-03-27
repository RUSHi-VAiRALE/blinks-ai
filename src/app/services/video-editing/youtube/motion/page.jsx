'use client'
import React from 'react';
import { youtubeVideoEditingServices } from '../../../../../data/servicesData';
import ServiceCategoryView from '../../../../../components/services/ServiceCategoryView';
import Link from 'next/link';

export default function YoutubeMotionPage() {
  // Get the specific subcategory data
  const subcategoryData = {
    ...youtubeVideoEditingServices,
    subCategories: [youtubeVideoEditingServices.subCategories[2]] // Only show the Motion Graphics subcategory
  };

  return (
    <main className="min-h-screen bg-black">
      {/* Breadcrumb */}
      <div className="bg-zinc-900/50 py-4 border-b border-zinc-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-gray-400 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">→</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span className="mx-2">→</span>
            <Link href="/services/video-editing" className="hover:text-white transition-colors">Video Editing</Link>
            <span className="mx-2">→</span>
            <Link href="/services/video-editing/youtube" className="hover:text-white transition-colors">YouTube</Link>
            <span className="mx-2">→</span>
            <span className="text-white">Motion Graphics</span>
          </div>
        </div>
      </div>

      {/* Service Category Component */}
      <ServiceCategoryView serviceData={subcategoryData} />
      
      {/* Other YouTube Video Editing Services */}
      <section className="py-12 bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-white via-white to-zinc-900 text-transparent bg-clip-text">
            Other YouTube Video Editing Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link 
              href="/services/video-editing/youtube/basics"
              className="bg-gradient-to-br from-zinc-800 to-black border border-zinc-700/30 rounded-lg p-6 hover:border-white/20 transition-all duration-300 group"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-white group-hover:to-zinc-900 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                Basics
              </h3>
              <p className="text-gray-400">Essential editing for YouTube videos including cuts, transitions, and basic effects.</p>
            </Link>
            
            <Link 
              href="/services/video-editing/youtube/pip"
              className="bg-gradient-to-br from-zinc-800 to-black border border-zinc-700/30 rounded-lg p-6 hover:border-white/20 transition-all duration-300 group"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-white group-hover:to-zinc-900 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                PIP (Picture-in-Picture)
              </h3>
              <p className="text-gray-400">Advanced editing with picture-in-picture effects for reaction videos and tutorials.</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
