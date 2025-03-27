"use client"

import React from "react"
import { motion } from "framer-motion"

export const PieChart = ({ before, after, isActive = false }) => {
    const beforeDraw = {
      hidden: { pathLength: 0, opacity: 0 },
      visible: {
        pathLength: before / 100, // Fix: Convert percentage to 0-1 range
        opacity: 1,
        transition: {
          pathLength: { type: "spring", duration: 1.5, bounce: 0 },
          opacity: { duration: 0.01 },
        },
      },
    };
  
    const afterDraw = {
      hidden: { pathLength: 0, opacity: 0 },
      visible: {
        pathLength: after / 100, // Fix: Convert percentage to 0-1 range
        opacity: 1,
        transition: {
          pathLength: { type: "spring", duration: 1.5, bounce: 0 },
          opacity: { duration: 0.01 },
        },
      },
    };
  
    return (
      <div className="flex items-center justify-around w-full">
        {/* Before Circle */}
        <div className="flex flex-col items-center">
          <div className="relative w-20 h-20">
            <svg viewBox="0 0 36 36" className="w-full h-full">
              <motion.circle
                cx="18" cy="18" r="16" // Fix: Center within viewBox
                fill="none"
                stroke="#ff4d4d"
                strokeWidth="3"
                strokeDasharray="100"
                variants={beforeDraw}
                initial="hidden"
                animate={isActive ? "visible" : "hidden"}
              />
              <text x="18" y="20" className="text-[5px]" textAnchor="middle" fill="white">
                {before}%
              </text>
            </svg>
          </div>
          <span className="text-xs mt-2 text-gray-400">Before</span>
        </div>
  
        {/* After Circle */}
        <div className="flex flex-col items-center">
          <div className="relative w-20 h-20">
            <svg viewBox="0 0 36 36" className="w-full h-full">
              <motion.circle
                cx="18" cy="18" r="16" // Fix: Proper positioning
                fill="none"
                stroke="#4ade80"
                strokeWidth="3"
                strokeDasharray="100"
                variants={afterDraw}
                initial="hidden"
                animate={isActive ? "visible" : "hidden"}
              />
              <text x="18" y="20" className="text-[5px]" textAnchor="middle" fill="white">
                {after}%
              </text>
            </svg>
          </div>
          <span className="text-xs mt-2 text-gray-400">After</span>
        </div>
      </div>
    );
  };
  
  // Simple Bar Chart Component
  export  const BarChart = ({ before, after }) => {
    return (
      <div className="flex flex-col h-full w-full justify-center px-4">
        <div className="flex items-end h-24 gap-6 justify-center">
          <div className="flex flex-col items-center">
            <div className="h-full flex items-end">
              <div 
                className="w-10 bg-gradient-to-t from-red-600 to-red-400 rounded-t-md"
                style={{ height: `${before}%` }}
              ></div>
            </div>
            <span className="text-xs mt-2 text-gray-400">Before</span>
            <span className="text-xs text-white">{before}%</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="h-full flex items-end">
              <div 
                className="w-10 bg-gradient-to-t from-green-600 to-green-400 rounded-t-md"
                style={{ height: `${after}%` }}
              ></div>
            </div>
            <span className="text-xs mt-2 text-gray-400">After</span>
            <span className="text-xs text-white">{after}%</span>
          </div>
        </div>
      </div>
    );
  };
  
  // Simple Line Chart Component
  export const LineChart = ({ before, after }) => {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <svg viewBox="0 0 100 50" className="w-full h-full">
          {/* Grid lines */}
          <line x1="10" y1="45" x2="90" y2="45" stroke="#444" strokeWidth="0.5" />
          <line x1="10" y1="5" x2="10" y2="45" stroke="#444" strokeWidth="0.5" />
          
          {/* Before line - showing delay */}
          <polyline
            points="10,40 30,38 50,35 70,30 90,25"
            fill="none"
            stroke="#ff4d4d"
            strokeWidth="2"
          />
          
          {/* After line - showing real-time */}
          <polyline
            points="10,40 30,15 50,10 70,8 90,5"
            fill="none"
            stroke="#4ade80"
            strokeWidth="2"
          />
          
          {/* Labels */}
          <text x="5" y="48" className="text-[3px]" fill="#888">0</text>
          <text x="90" y="48" className="text-[3px]" fill="#888">Time</text>
          
          <text x="50" y="10" className="text-[3px]" fill="#4ade80" textAnchor="middle">After: Real-time</text>
          <text x="50" y="35" className="text-[3px]" fill="#ff4d4d" textAnchor="middle">Before: Delayed</text>
        </svg>
      </div>
    );
  };