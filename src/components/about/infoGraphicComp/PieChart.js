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