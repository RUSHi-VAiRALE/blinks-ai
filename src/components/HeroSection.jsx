import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between py-16 px-4 lg:px-12 min-h-[500px] bg-black text-white">
      {/* Left side - Text content */}
      <div className="lg:w-1/2 mb-10 lg:mb-0">
        <h1 className="text-6xl font-bold leading-tight mb-4">
          Build sleek<br />
          UI faster
        </h1>
        <p className="text-gray-400 mb-8 max-w-md">
          Redefined UI building for developers. Quickly add components,
          themes, and responsive layouts to your app at any scale.
        </p>
        <div className="flex items-center gap-6">
          <Link href="/get-started" className="bg-white text-black px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-200 transition-colors">
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </Link>
          <Link href="/docs" className="text-white flex items-center gap-2 hover:text-gray-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
            Documentation
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </Link>
        </div>
      </div>

      {/* Right side - Card with logo */}
      <div className="lg:w-1/2 flex justify-center">
        <div className="bg-zinc-900 rounded-2xl p-8 w-full max-w-md relative overflow-hidden shadow-lg">
          {/* Custom gradient overlay with the bright spot at top right corner */}
          <div className="absolute -top-5 -right-5" 
               style={{
                 width: '500px',
                 height: '500px',
                 background: 'radial-gradient(circle at top right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.9) 3%, rgba(255, 255, 255, 0.7) 8%, rgba(255, 255, 255, 0.45) 15%, rgba(255, 255, 255, 0.25) 25%, rgba(255, 255, 255, 0.1) 40%, rgba(255, 255, 255, 0.02) 60%, transparent 80%)',
                 pointerEvents: 'none',
                 zIndex: 1
               }}>
          </div>
          
          <div className="flex justify-between items-start mb-12 relative z-10">
            <h2 className="text-3xl font-bold">Atomix</h2>
            <div className="text-right">
              <p className="text-gray-500 text-sm">Not any usual</p>
              <p className="text-3xl font-bold">UI Library</p>
            </div>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="relative w-32 h-32 bg-zinc-800 rounded-2xl flex items-center justify-center shadow-md">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 to-zinc-900 rounded-2xl"></div>
              <div className="relative w-16 h-16 bg-black rounded-lg flex items-center justify-center transform rotate-45 shadow-inner">
                <div className="w-8 h-8 bg-white rounded-sm transform -rotate-45 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="black" stroke="none">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4c1.86 0 3.41 1.28 3.86 3H8.14c.45-1.72 2-3 3.86-3zm0 14c-1.86 0-3.41-1.28-3.86-3h7.72c-.45 1.72-2 3-3.86 3z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="font-medium">Mihir I Dev</p>
            <p className="text-gray-500 text-sm">Creator & Maintainer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
