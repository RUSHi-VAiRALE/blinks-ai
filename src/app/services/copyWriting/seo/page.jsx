'use client'
import React from 'react';
import { copywritingServices } from '../../../../data/servicesData';
import ServiceCategoryView from '../../../../components/services/ServiceCategoryView';
import Link from 'next/link';

export default function SeoCopywritingPage() {
  // Get the specific subcategory data
  const subcategoryData = {
    ...copywritingServices,
    subCategories: [copywritingServices.subCategories[0]] // Only show the SEO subcategory
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
            <Link href="/services/copywriting" className="hover:text-white transition-colors">Copywriting</Link>
            <span className="mx-2">→</span>
            <span className="text-white">SEO</span>
          </div>
        </div>
      </div>

      {/* Service Category Component */}
      <ServiceCategoryView serviceData={subcategoryData} />
      
      {/* Other Copywriting Services */}
      <section className="py-12 bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-white via-white to-zinc-900 text-transparent bg-clip-text">
            Other Copywriting Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Link 
              href="/services/copywriting/technical"
              className="bg-gradient-to-br from-zinc-800 to-black border border-zinc-700/30 rounded-lg p-6 hover:border-white/20 transition-all duration-300 group"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-white group-hover:to-zinc-900 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                Technical
              </h3>
              <p className="text-gray-400">Expert technical copywriting for complex products and services.</p>
            </Link>
            
            <Link 
              href="/services/copywriting/marketing"
              className="bg-gradient-to-br from-zinc-800 to-black border border-zinc-700/30 rounded-lg p-6 hover:border-white/20 transition-all duration-300 group"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-white group-hover:to-zinc-900 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                Marketing
              </h3>
              <p className="text-gray-400">Persuasive marketing copy that converts visitors into customers.</p>
            </Link>
            
            <Link 
              href="/services/copywriting/social-media"
              className="bg-gradient-to-br from-zinc-800 to-black border border-zinc-700/30 rounded-lg p-6 hover:border-white/20 transition-all duration-300 group"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-white group-hover:to-zinc-900 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                Social Media
              </h3>
              <p className="text-gray-400">Engaging social media copy that builds community and drives engagement.</p>
            </Link>
            
            <Link 
              href="/services/copywriting/b2b"
              className="bg-gradient-to-br from-zinc-800 to-black border border-zinc-700/30 rounded-lg p-6 hover:border-white/20 transition-all duration-300 group md:col-start-2"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-white group-hover:to-zinc-900 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                B2B
              </h3>
              <p className="text-gray-400">Strategic B2B copywriting that speaks to decision-makers.</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
