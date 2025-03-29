'use client'
import React from 'react';
import { aiAgentsServices } from '../../../data/servicesData';
import Link from 'next/link';
import AIAgentCategoryView from '@/components/ai-agents/AIAgentCategoryView';

export default function CustomAIAgentsPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Breadcrumb */}
      <div className="bg-zinc-900/50 py-4 border-b border-zinc-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">u2192</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span className="mx-2">u2192</span>
            <span className="text-white">Custom AI Agents</span>
          </div>
        </div>
      </div>

      {/* AI Agent Category Component */}
      <AIAgentCategoryView serviceData={aiAgentsServices} />
    </main>
  );
}
