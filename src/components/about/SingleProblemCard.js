'use client'
import { useInView, useAnimation ,motion} from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import {PieChart} from './infoGraphicComp/PieChart.js';

export default function ProblemCard({ problem, position, isActive }) {  
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: false, margin: "-100px" });
    const controls = useAnimation();
    
    useEffect(() => {
      if (isInView) {
        controls.start("visible");
      }
    }, [isInView, controls]);
  
    // Render appropriate chart based on problem type
    const renderChart = () => {
      const index = problem.index;
      const isInCenter = position === 'center';
      
      switch (index % 6) {
        case 0:
          return <PieChart before={problem.chartData.before} after={problem.chartData.after} isActive={isInCenter} />;
        case 2:
          return <PieChart before={problem.chartData.before} after={problem.chartData.after} isActive={isInCenter} />;
        case 5:
          return <PieChart before={problem.chartData.before} after={problem.chartData.after} isActive={isInCenter} />;
        case 1:
          return <PieChart before={problem.chartData.before} after={problem.chartData.after} isActive={isInCenter} />;
        case 4:
          return <PieChart before={problem.chartData.before} after={problem.chartData.after} isActive={isInCenter} />;
        case 3:
          return <PieChart before={problem.chartData.before} after={problem.chartData.after} isActive={isInCenter} />;
        default:
          return <PieChart before={problem.chartData.before} after={problem.chartData.after} isActive={isInCenter} />;
      }
    };
  
    // Calculate styles based on position (left, center, right)
    const getCardStyles = () => {
      // Check if we're on a mobile device
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
      
      if (position === 'center') {
        return {
          x: 0,
          scale: 1,
          opacity: 1,
          zIndex: 30,
          filter: 'blur(0px)'
        };
      } else if (position === 'left') {
        return {
          x: isMobile ? '-40%' : isTablet ? '-60%' : '-70%',
          scale: isMobile ? 0.6 : isTablet ? 0.7 : 0.85,
          opacity: isMobile ? 0.5 : isTablet ? 0.6 : 0.7,
          zIndex: 20,
          filter: isMobile ? 'blur(1px)' : 'blur(2px)'
        };
      } else if (position === 'right') {
        return {
          x: isMobile ? '40%' : isTablet ? '60%' : '70%',
          scale: isMobile ? 0.6 : isTablet ? 0.7 : 0.85,
          opacity: isMobile ? 0.5 : isTablet ? 0.6 : 0.7,
          zIndex: 20,
          filter: isMobile ? 'blur(1px)' : 'blur(2px)'
        };
      } else {
        // For cards that are off-screen
        return {
          x: position === 'far-left' ? (isMobile ? '-90%' : isTablet ? '-120%' : '-140%') : (isMobile ? '90%' : isTablet ? '120%' : '140%'),
          scale: isMobile ? 0.5 : isTablet ? 0.6 : 0.7,
          opacity: 0,
          zIndex: 10,
          filter: 'blur(4px)'
        };
      }
    };
  
    return (
      <motion.div
        ref={cardRef}
        className="w-[240px] sm:w-[280px] md:w-[350px] lg:w-[400px] h-[400px] sm:h-[450px] md:h-[520px] lg:h-[600px] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
        initial={false}
        animate={getCardStyles()}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 0.5
        }}
      >
        <div 
          className={`h-full rounded-xl overflow-hidden shadow-xl ${position === 'center' ? 'border border-white/20' : ''}`}
          style={{
            background: 'linear-gradient(145deg, rgba(24,24,27,0.9) 0%, rgba(9,9,11,0.95) 100%)',
            boxShadow: position === 'center' ? '0 10px 30px -5px rgba(0, 0, 0, 0.5), 0 0 10px rgba(255, 255, 255, 0.1)' : 'none'
          }}
        >
          {/* Card content with vertical layout */}
          <div className="p-3 sm:p-4 md:p-5 lg:p-6 h-full flex flex-col">
            {/* Icon at the top */}
            <div className="flex justify-center mb-2 sm:mb-2 md:mb-3 lg:mb-4">
              <div 
                className="p-2 sm:p-3 md:p-4 lg:p-5 rounded-full bg-gradient-to-br from-zinc-800 to-black shadow-lg border border-zinc-700/30"
                style={{
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3), inset 0 2px 0 rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">
                  {problem.icon}
                </div>
              </div>
            </div>
            
            {/* Heading below icon */}
            <div className="text-center mb-2 sm:mb-3 md:mb-4 lg:mb-5">
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold bg-gradient-to-r from-white via-white to-zinc-900 text-transparent bg-clip-text px-2">
                {problem.title}
              </h3>
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mt-1 sm:mt-1 md:mt-2 lg:mt-3"></div>
            </div>
            
            {/* Before and After sections */}
            <div className="space-y-1 sm:space-y-2 md:space-y-2 lg:space-y-3 mb-2 sm:mb-3 md:mb-4 lg:mb-5">
              <div 
                className="p-2 sm:p-2 md:p-3 lg:p-4 rounded-lg relative overflow-hidden"
                style={{
                  background: 'linear-gradient(to right, rgba(30,30,30,0.7), rgba(20,20,20,0.7))',
                  borderLeft: '3px solid rgba(239, 68, 68, 0.5)'
                }}
              >
                <h4 className="text-red-400 font-semibold mb-0.5 sm:mb-1 md:mb-1 lg:mb-2 flex items-center text-xs sm:text-xs md:text-sm lg:text-base">
                  <span className="mr-1 sm:mr-1 md:mr-2">⚠️</span> Before
                </h4>
                <p className="text-gray-300 text-[10px] sm:text-xs md:text-xs lg:text-sm">{problem.before}</p>
              </div>
              
              <div 
                className="p-2 sm:p-2 md:p-3 lg:p-4 rounded-lg relative overflow-hidden"
                style={{
                  background: 'linear-gradient(to right, rgba(30,30,30,0.7), rgba(20,20,20,0.7))',
                  borderLeft: '3px solid rgba(74, 222, 128, 0.5)'
                }}
              >
                <h4 className="text-green-400 font-semibold mb-0.5 sm:mb-1 md:mb-1 lg:mb-2 flex items-center text-xs sm:text-xs md:text-sm lg:text-base">
                  <span className="mr-1 sm:mr-1 md:mr-2">✅</span> After
                </h4>
                <p className="text-gray-300 text-[10px] sm:text-xs md:text-xs lg:text-sm">{problem.after}</p>
              </div>
            </div>
            
            {/* Chart and Impact */}
            <div className="flex-grow flex flex-col">
              {/* Chart visualization */}
              <div 
                className="mb-1 sm:mb-2 md:mb-3 lg:mb-4 p-1 sm:p-2 md:p-2 lg:p-3 rounded-lg flex items-center justify-center"
                style={{
                  background: 'linear-gradient(to bottom, rgba(24,24,27,0.8), rgba(15,15,15,0.9))',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}
              >
                <div className="h-[80px] sm:h-[100px] md:h-[120px] lg:h-[140px]">
                  {renderChart()}
                </div>
              </div>
              
              {/* Impact metrics */}
              {/* <div 
                className="p-2 sm:p-2 md:p-3 lg:p-4 rounded-lg flex-grow"
                style={{
                  background: 'linear-gradient(145deg, rgba(24,24,27,0.7), rgba(15,15,15,0.8))',
                  borderTop: '1px solid rgba(74, 222, 128, 0.2)'
                }}
              >
                <h4 className="text-green-400 font-semibold mb-1 sm:mb-1 md:mb-2 lg:mb-3 flex items-center text-xs sm:text-xs md:text-sm lg:text-base">
                  <span className="mr-1 sm:mr-1 md:mr-2">💡</span> Impact
                </h4>
                <ul className="space-y-0.5 sm:space-y-1 md:space-y-1 lg:space-y-2">
                  {problem.impact.map((item, i) => (
                    <li key={i} className="text-gray-300 text-[10px] sm:text-xs md:text-xs lg:text-sm flex items-start">
                      <span className="text-green-400 mr-1 sm:mr-1 md:mr-2">→</span> {item}
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
            
            {/* Card footer */}
            {/* <div className="mt-1 sm:mt-1 md:mt-2 lg:mt-3 pt-0.5 sm:pt-1 md:pt-1 lg:pt-2 border-t border-zinc-800/50">
              <div className="flex justify-between items-center">
                <div className="text-[8px] sm:text-[10px] md:text-xs lg:text-xs text-zinc-500">Blinks AI</div>
                <div className="text-[8px] sm:text-[10px] md:text-xs lg:text-xs text-zinc-500">Problem #{problem.index + 1}</div>
              </div>
            </div> */}
          </div>
        </div>
      </motion.div>
    );
  };