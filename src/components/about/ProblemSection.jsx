'use client'
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import { fadeIn, staggerContainer } from './AnimationVariants';

// Icons
import { 
  FaCompass, 
  FaChartLine, 
  FaCogs, 
  FaChartBar, 
  FaCalendarAlt, 
  FaCreditCard 
} from 'react-icons/fa';

const ProblemCard = ({ problem, position, isActive }) => {
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
    switch (index % 6) {
      case 0:
      case 2:
      case 5:
        return <PieChart before={problem.chartData.before} after={problem.chartData.after} />;
      case 1:
      case 4:
        return <BarChart before={problem.chartData.before} after={problem.chartData.after} />;
      case 3:
        return <LineChart before={problem.chartData.before} after={problem.chartData.after} />;
      default:
        return <PieChart before={problem.chartData.before} after={problem.chartData.after} />;
    }
  };

  // Calculate styles based on position (left, center, right)
  const getCardStyles = () => {
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
        x: '-70%',
        scale: 0.85,
        opacity: 0.7,
        zIndex: 20,
        filter: 'blur(2px)'
      };
    } else if (position === 'right') {
      return {
        x: '70%',
        scale: 0.85,
        opacity: 0.7,
        zIndex: 20,
        filter: 'blur(2px)'
      };
    } else {
      // For cards that are off-screen
      return {
        x: position === 'far-left' ? '-140%' : '140%',
        scale: 0.7,
        opacity: 0,
        zIndex: 10,
        filter: 'blur(4px)'
      };
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className="w-[400px] h-[600px] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
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
        <div className="p-6 md:p-7 h-full flex flex-col">
          {/* Icon at the top */}
          <div className="flex justify-center mb-4">
            <div 
              className="p-5 rounded-full bg-gradient-to-br from-zinc-800 to-black shadow-lg border border-zinc-700/30"
              style={{
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3), inset 0 2px 0 rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="text-3xl text-white">
                {problem.icon}
              </div>
            </div>
          </div>
          
          {/* Heading below icon */}
          <div className="text-center mb-5">
            <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white via-white to-zinc-900 text-transparent bg-clip-text px-2">
              {problem.title}
            </h3>
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mt-3"></div>
          </div>
          
          {/* Before and After sections */}
          <div className="space-y-3 mb-5">
            <div 
              className="p-4 rounded-lg relative overflow-hidden"
              style={{
                background: 'linear-gradient(to right, rgba(30,30,30,0.7), rgba(20,20,20,0.7))',
                borderLeft: '3px solid rgba(239, 68, 68, 0.5)'
              }}
            >
              <h4 className="text-red-400 font-semibold mb-2 flex items-center">
                <span className="mr-2">⚠️</span> Before
              </h4>
              <p className="text-gray-300 text-sm">{problem.before}</p>
            </div>
            
            <div 
              className="p-4 rounded-lg relative overflow-hidden"
              style={{
                background: 'linear-gradient(to right, rgba(30,30,30,0.7), rgba(20,20,20,0.7))',
                borderLeft: '3px solid rgba(74, 222, 128, 0.5)'
              }}
            >
              <h4 className="text-green-400 font-semibold mb-2 flex items-center">
                <span className="mr-2">✅</span> After
              </h4>
              <p className="text-gray-300 text-sm">{problem.after}</p>
            </div>
          </div>
          
          {/* Chart and Impact */}
          <div className="flex-grow flex flex-col">
            {/* Chart visualization */}
            <div 
              className="mb-4 p-3 rounded-lg flex items-center justify-center"
              style={{
                background: 'linear-gradient(to bottom, rgba(24,24,27,0.8), rgba(15,15,15,0.9))',
                border: '1px solid rgba(255,255,255,0.05)'
              }}
            >
              <div className="h-[140px]">
                {renderChart()}
              </div>
            </div>
            
            {/* Impact metrics */}
            <div 
              className="p-4 rounded-lg flex-grow"
              style={{
                background: 'linear-gradient(145deg, rgba(24,24,27,0.7), rgba(15,15,15,0.8))',
                borderTop: '1px solid rgba(74, 222, 128, 0.2)'
              }}
            >
              <h4 className="text-green-400 font-semibold mb-3 flex items-center">
                <span className="mr-2">💡</span> Impact
              </h4>
              <ul className="space-y-2">
                {problem.impact.map((item, i) => (
                  <li key={i} className="text-gray-300 text-sm flex items-start">
                    <span className="text-green-400 mr-2">→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Card footer */}
          <div className="mt-3 pt-2 border-t border-zinc-800/50">
            <div className="flex justify-between items-center">
              <div className="text-xs text-zinc-500">Blinks AI</div>
              <div className="text-xs text-zinc-500">Problem #{problem.index + 1}</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Simple Pie Chart Component
const PieChart = ({ before, after }) => {
  return (
    <div className="flex items-center justify-around w-full">
      <div className="flex flex-col items-center">
        <div className="relative w-20 h-20">
          <svg viewBox="0 0 36 36" className="w-full h-full">
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#444"
              strokeWidth="3"
            />
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#ff4d4d"
              strokeWidth="3"
              strokeDasharray={`${before}, 100`}
            />
            <text x="18" y="20.35" className="text-[5px]" textAnchor="middle" fill="white">{before}%</text>
          </svg>
        </div>
        <span className="text-xs mt-2 text-gray-400">Before</span>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="relative w-20 h-20">
          <svg viewBox="0 0 36 36" className="w-full h-full">
            <path
              d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#444"
              strokeWidth="3"
            />
            <path
              d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#4ade80"
              strokeWidth="3"
              strokeDasharray={`${after}, 100`}
            />
            <text x="18" y="20.35" className="text-[5px]" textAnchor="middle" fill="white">{after}%</text>
          </svg>
        </div>
        <span className="text-xs mt-2 text-gray-400">After</span>
      </div>
    </div>
  );
};

// Simple Bar Chart Component
const BarChart = ({ before, after }) => {
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
const LineChart = ({ before, after }) => {
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

const ProblemSection = () => {
  const [activeCard, setActiveCard] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });
  
  const problems = [
    {
      index: 0,
      title: "Lack of Clear Direction → AI-Powered Strategy Guide",
      icon: <FaCompass className="text-2xl text-white" />,
      before: "Clients struggled to identify the right strategies, leading to trial-and-error approaches.",
      after: "Blinks AI provides a guided AI-driven strategy planner, offering data-backed recommendations tailored to the business.",
      impact: [
        "40% faster strategy implementation",
        "Reduced guesswork, ensuring optimized decision-making"
      ],
      chartData: {
        before: 60,
        after: 80
      }
    },
    {
      index: 1,
      title: "Unclear ROI → Transparent Investment & Performance Metrics",
      icon: <FaChartLine className="text-2xl text-white" />,
      before: "Clients were hesitant to invest, unsure of potential returns.",
      after: "Blinks AI's predictive analytics forecast expected ROI based on real-time market trends.",
      impact: [
        "30% more confidence in investment decisions",
        "Clear, data-backed ROI projections"
      ],
      chartData: {
        before: 55,
        after: 75
      }
    },
    {
      index: 2,
      title: "Inefficient Execution → AI-Optimized Workflows",
      icon: <FaCogs className="text-2xl text-white" />,
      before: "Despite investments, businesses couldn't maximize their returns due to inefficient execution.",
      after: "Blinks AI's automation tools streamline execution, optimizing resource utilization and task management.",
      impact: [
        "50% increase in execution efficiency",
        "Automated workflows reduce operational delays"
      ],
      chartData: {
        before: 40,
        after: 90
      }
    },
    {
      index: 3,
      title: "Poor Reporting → Real-Time Performance Dashboards",
      icon: <FaChartBar className="text-2xl text-white" />,
      before: "Clients had no clear insights into ongoing projects or campaign performance.",
      after: "Blinks AI's real-time dashboards provide instant performance updates, ensuring better decision-making.",
      impact: [
        "60% improvement in tracking project progress",
        "Instant alerts and updates for immediate action"
      ],
      chartData: {
        before: 30,
        after: 95
      }
    },
    {
      index: 4,
      title: "Delayed Work → AI-Driven Task Automation & Scheduling",
      icon: <FaCalendarAlt className="text-2xl text-white" />,
      before: "Projects often missed deadlines, affecting overall business growth.",
      after: "AI-powered scheduling tools ensure that timelines are met with precision.",
      impact: [
        "70% improvement in deadline adherence",
        "Automated task delegation reduces manual effort"
      ],
      chartData: {
        before: 65,
        after: 85
      }
    },
    {
      index: 5,
      title: "Payment Collection Issues → Frictionless Payment Automation",
      icon: <FaCreditCard className="text-2xl text-white" />,
      before: "Businesses had to chase clients for payments, leading to unnecessary friction.",
      after: "Blinks AI automates invoicing and payment follow-ups, ensuring hassle-free transactions.",
      impact: [
        "90% reduction in manual follow-ups",
        "Faster invoice clearance through automated reminders"
      ],
      chartData: {
        before: 50,
        after: 95
      }
    }
  ];

  // Auto-slide effect - move from left to right
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % problems.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [problems.length]);

  // Manual navigation
  const handlePrev = () => {
    setActiveCard((prev) => (prev - 1 + problems.length) % problems.length);
  };

  const handleNext = () => {
    setActiveCard((prev) => (prev + 1) % problems.length);
  };

  // Get card position (left, center, right)
  const getCardPosition = (index) => {
    const totalCards = problems.length;
    
    // Calculate relative position with wrapping
    const position = (index - activeCard + totalCards) % totalCards;
    
    if (position === 0) return 'center';
    if (position === totalCards - 1) return 'left';
    if (position === 1) return 'right';
    
    // Cards further away (not directly visible)
    if (position > 1 && position < totalCards / 2) return 'far-right';
    return 'far-left';
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-zinc-900/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white via-white to-zinc-900 text-transparent bg-clip-text"
          >
            The Problem We Solve
          </motion.h2>
          
          <motion.div variants={fadeIn} className="mb-10 text-center">
            <p className="text-gray-300 mb-6 leading-relaxed">
              After two years in the digital marketing industry, We 
              realized the biggest challenges businesses face:
            </p>
          </motion.div>

          <div className="relative h-[600px] mb-12 flex items-center justify-center">
            {problems.map((problem, index) => (
              <ProblemCard 
                key={index}
                problem={problem} 
                position={getCardPosition(index)}
                isActive={index === activeCard}
              />
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={handlePrev}
              className="bg-zinc-800 hover:bg-zinc-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-300"
              aria-label="Previous card"
            >
              ←
            </button>
            
            <div className="flex gap-2">
              {problems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCard(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === activeCard ? 'bg-white' : 'bg-zinc-700'
                  }`}
                  aria-label={`Go to card ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="bg-zinc-800 hover:bg-zinc-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-300"
              aria-label="Next card"
            >
              →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
