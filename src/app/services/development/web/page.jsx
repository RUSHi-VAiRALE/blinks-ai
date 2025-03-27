'use client'
import React from 'react';
import { webDevelopmentServices } from '../../../../data/servicesData';
import ServiceCategoryView from '../../../../components/services/ServiceCategoryView';
import Link from 'next/link';

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Breadcrumb */}
      <div className="bg-zinc-900/50 py-4 border-b border-zinc-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">→</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span className="mx-2">→</span>
            <Link href="/services/development" className="hover:text-white transition-colors">Development</Link>
            <span className="mx-2">→</span>
            <span className="text-white">Web Development</span>
          </div>
        </div>
      </div>

      {/* Service Category Component */}
      <ServiceCategoryView serviceData={webDevelopmentServices} />
    </main>
  );
}
