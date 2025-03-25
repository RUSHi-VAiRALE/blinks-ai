'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const WorkflowSteps = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const totalSteps = 8;

  // Check if element is in viewport for scroll animation
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('workflow-section');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Step data
  const steps = [
    {
      title: "Get Started",
      description: "Click the \"Get Started\" button on our homepage to begin.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Smart Questionnaire",
      description: "Instead of a static form, our AI-powered chatbot asks questions dynamically based on your responses. Select your industry, needs (website, app, or both), and primary goals to help us understand your business better.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      details: {
        type: "chatbot",
        questions: [
          { text: "What industry are you in?", type: "select" },
          { text: "Do you need a website, mobile app, or both?", type: "multiple-choice" },
          { text: "What is your primary goal?", type: "select", options: ["Increase sales", "Brand awareness", "Automation"] }
        ]
      }
    },
    {
      title: "AI-Powered Custom Plan",
      description: "Based on your answers, our AI will suggest a tailored plan with an interactive plan builder showing service suggestions. For example, if you select E-commerce, we'll suggest a website with payment gateway, social media marketing, and product catalog videos, along with a dynamic pricing estimator.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      details: {
        type: "planBuilder",
        suggestions: [
          { service: "Website with payment gateway", icon: "💻" },
          { service: "Social media marketing package", icon: "📱" },
          { service: "Product catalog video editing", icon: "🎬" }
        ]
      }
    },
    {
      title: "Subscription Plans with Flexibility",
      description: "Choose from customizable plans where you can adjust services before purchase. We offer a freemium model to try basic features before committing, and a 'Refer & Earn' program where you can invite friends and earn extra tokens.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      details: {
        type: "subscriptionPlans",
        plans: [
          { name: "Monthly Subscription", description: "Continuous support & multiple services" },
          { name: "Weekly Subscription", description: "Short-term assistance" },
          { name: "One-Time Service", description: "Pay only for specific services you need" }
        ],
        features: [
          { name: "Freemium Model", description: "Try basic features before committing" },
          { name: "Refer & Earn", description: "Invite friends and earn extra tokens" }
        ]
      }
    },
    {
      title: "App Features",
      description: "After payment, you'll receive a link to download our app with a client dashboard to view purchased services, download invoices, and track project milestones. You'll also have access to live chat support and an AI Project Manager that provides automatic updates on project progress.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      details: {
        type: "appFeatures",
        features: [
          { name: "Client Dashboard", description: "View services, invoices, and track milestones" },
          { name: "Live Chat Support", description: "Ask questions directly from the app" },
          { name: "AI Project Manager", description: "Automatic updates & reminders on progress" }
        ]
      }
    },
    {
      title: "Business Assets Collection",
      description: "Upload your business assets with our drag & drop feature for logos, images, and content. Don't have a logo? Our AI can generate logo suggestions for you.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      details: {
        type: "assetCollection",
        features: [
          { name: "Drag & Drop Upload", description: "Easy upload for logos, images, and content" },
          { name: "AI-Generated Logo", description: "Get logo suggestions if you don't have one" }
        ]
      }
    },
    {
      title: "Development Process",
      description: "Within an hour, we start working on your project with real-time status updates like 'In Progress,' 'Pending Review,' and 'Completed.' You'll have access to an interactive task board to see the development roadmap, and a feature unlock system to add additional features without disrupting workflow.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      details: {
        type: "developmentProcess",
        features: [
          { name: "Real-Time Project Updates", description: "Status updates on project progress" },
          { name: "Interactive Task Board", description: "See the development roadmap" },
          { name: "Feature Unlock System", description: "Add features without disrupting workflow" }
        ]
      }
    },
    {
      title: "Notifications & Client Engagement",
      description: "Stay updated with push notifications and emails for project updates. You can leave feedback and ratings for our developers to help us improve our services.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      details: {
        type: "notifications",
        features: [
          { name: "Push Notifications & Emails", description: "Stay updated on your project" },
          { name: "Feedback & Ratings", description: "Share your experience with our developers" }
        ]
      }
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  // Navigation functions
  const nextStep = () => {
    if (activeStep < totalSteps) {
      setActiveStep(activeStep + 1);
    }
  };

  const prevStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };

  const goToStep = (step) => {
    setActiveStep(step);
  };

  return (
    <section id="workflow-section" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-zinc-300 via-white to-zinc-400 text-transparent bg-clip-text">
              How Blinks AI Works?
            </span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto">
            A step-by-step guide to getting started with our AI-powered services.
          </p>
        </motion.div>

        {/* Progress bar */}
        <div className="mb-12">
          <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-zinc-400 via-white to-zinc-400"
              initial={{ width: `${(1 / totalSteps) * 100}%` }}
              animate={{ width: `${(activeStep / totalSteps) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="flex justify-between mt-2">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToStep(index + 1)}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-300 ${
                  activeStep === index + 1
                    ? 'bg-white text-black'
                    : index + 1 < activeStep
                    ? 'bg-zinc-700 text-white'
                    : 'bg-zinc-900 text-zinc-500'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Step content */}
        <div className="bg-zinc-900 rounded-2xl p-8 relative overflow-hidden shadow-lg">
          {/* Custom gradient overlay */}
          <div className="absolute -top-5 -right-5" 
            style={{
              width: '500px',
              height: '500px',
              background: 'radial-gradient(circle at top right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.9) 3%, rgba(255, 255, 255, 0.7) 8%, rgba(255, 255, 255, 0.45) 15%, rgba(255, 255, 255, 0.25) 25%, rgba(255, 255, 255, 0.1) 40%, rgba(255, 255, 255, 0.02) 60%, transparent 80%)',
              pointerEvents: 'none',
              zIndex: 1
            }}>
          </div>
          
          <div className="relative z-10">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="md:w-1/6 flex justify-center">
                <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-white">
                    {steps[activeStep - 1].icon}
                  </div>
                </div>
              </div>
              
              <div className="md:w-5/6">
                <h3 className="text-2xl font-bold mb-4">
                  Step {activeStep}: {steps[activeStep - 1].title}
                </h3>
                <p className="text-zinc-300 mb-6">
                  {steps[activeStep - 1].description}
                </p>
                
                {/* Dynamic content based on step type */}
                {steps[activeStep - 1].details && (
                  <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="mb-6"
                  >
                    {/* Chatbot interface for Step 2 */}
                    {steps[activeStep - 1].details.type === "chatbot" && (
                      <div className="bg-zinc-800 rounded-lg p-4 mb-4">
                        <h4 className="text-lg font-semibold mb-3">Smart Questionnaire</h4>
                        <div className="space-y-4">
                          {steps[activeStep - 1].details.questions.map((question, idx) => (
                            <motion.div key={idx} variants={itemVariants} className="bg-zinc-900 p-3 rounded-lg">
                              <p className="mb-2">{question.text}</p>
                              {question.type === "select" && (
                                <div className="flex flex-wrap gap-2">
                                  {question.options ? (
                                    question.options.map((option, optIdx) => (
                                      <button key={optIdx} className="px-3 py-1 bg-zinc-800 hover:bg-zinc-700 rounded-full text-sm transition-colors">
                                        {option}
                                      </button>
                                    ))
                                  ) : (
                                    <input type="text" placeholder="Type your answer..." className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-white" />
                                  )}
                                </div>
                              )}
                              {question.type === "multiple-choice" && (
                                <div className="flex flex-wrap gap-2">
                                  {["Website", "Mobile App", "Both"].map((option, optIdx) => (
                                    <div key={optIdx} className="flex items-center">
                                      <input type="checkbox" id={`opt-${idx}-${optIdx}`} className="mr-2 h-4 w-4" />
                                      <label htmlFor={`opt-${idx}-${optIdx}`}>{option}</label>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Plan builder for Step 3 */}
                    {steps[activeStep - 1].details.type === "planBuilder" && (
                      <div className="bg-zinc-800 rounded-lg p-4 mb-4">
                        <h4 className="text-lg font-semibold mb-3">Interactive Plan Builder</h4>
                        <div className="space-y-3">
                          {steps[activeStep - 1].details.suggestions.map((suggestion, idx) => (
                            <motion.div key={idx} variants={itemVariants} className="flex items-center gap-3 bg-zinc-900 p-3 rounded-lg">
                              <div className="text-2xl">{suggestion.icon}</div>
                              <div>
                                <p className="font-medium">{suggestion.service}</p>
                              </div>
                              <div className="ml-auto">
                                <div className="relative">
                                  <input type="checkbox" id={`service-${idx}`} className="peer sr-only" />
                                  <label htmlFor={`service-${idx}`} className="flex h-6 w-6 cursor-pointer items-center justify-center rounded border border-zinc-500 bg-zinc-800 transition-all peer-checked:bg-white peer-checked:text-black">
                                    <svg className="invisible h-4 w-4 peer-checked:visible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                      <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                  </label>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        <div className="mt-4 p-3 bg-zinc-900 rounded-lg">
                          <div className="flex justify-between items-center">
                            <span className="text-zinc-300">Estimated Cost:</span>
                            <span className="text-white font-bold">$1,200 - $1,800</span>
                          </div>
                          <div className="w-full bg-zinc-800 h-2 rounded-full mt-2">
                            <div className="bg-white h-full rounded-full w-3/4"></div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Subscription plans for Step 4 */}
                    {steps[activeStep - 1].details.type === "subscriptionPlans" && (
                      <div className="space-y-4">
                        <div className="bg-zinc-800 rounded-lg p-4 mb-4">
                          <h4 className="text-lg font-semibold mb-3">Customizable Plans</h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {steps[activeStep - 1].details.plans.map((plan, idx) => (
                              <motion.div key={idx} variants={itemVariants} className="bg-zinc-900 p-4 rounded-lg border border-zinc-800 hover:border-white transition-colors cursor-pointer">
                                <h5 className="font-bold mb-2">{plan.name}</h5>
                                <p className="text-sm text-zinc-400 mb-3">{plan.description}</p>
                                <button className="w-full py-2 bg-zinc-800 hover:bg-zinc-700 rounded-md text-sm transition-colors">
                                  Select
                                </button>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-zinc-800 rounded-lg p-4">
                          <h4 className="text-lg font-semibold mb-3">Additional Benefits</h4>
                          <div className="space-y-3">
                            {steps[activeStep - 1].details.features.map((feature, idx) => (
                              <motion.div key={idx} variants={itemVariants} className="flex items-center gap-3 bg-zinc-900 p-3 rounded-lg">
                                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                                  {idx === 0 ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                                    </svg>
                                  ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                                    </svg>
                                  )}
                                </div>
                                <div>
                                  <p className="font-medium">{feature.name}</p>
                                  <p className="text-sm text-zinc-400">{feature.description}</p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* App features for Step 5 */}
                    {steps[activeStep - 1].details.type === "appFeatures" && (
                      <div className="bg-zinc-800 rounded-lg p-4 mb-4">
                        <h4 className="text-lg font-semibold mb-3">App Dashboard Preview</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                          {steps[activeStep - 1].details.features.map((feature, idx) => (
                            <motion.div key={idx} variants={itemVariants} className="bg-zinc-900 p-4 rounded-lg">
                              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mb-3">
                                {idx === 0 ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                                  </svg>
                                ) : idx === 1 ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                                  </svg>
                                ) : (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                  </svg>
                                )}
                              </div>
                              <h5 className="font-bold mb-2">{feature.name}</h5>
                              <p className="text-sm text-zinc-400">{feature.description}</p>
                            </motion.div>
                          ))}
                        </div>
                        <div className="bg-zinc-900 p-3 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" />
                              </svg>
                            </div>
                            <div>
                              <p className="font-medium">Download App</p>
                              <p className="text-sm text-zinc-400">Get access to all features after payment</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Asset collection for Step 6 */}
                    {steps[activeStep - 1].details.type === "assetCollection" && (
                      <div className="bg-zinc-800 rounded-lg p-4 mb-4">
                        <h4 className="text-lg font-semibold mb-3">Upload Your Assets</h4>
                        <div className="space-y-4">
                          {steps[activeStep - 1].details.features.map((feature, idx) => (
                            <motion.div key={idx} variants={itemVariants} className="bg-zinc-900 p-4 rounded-lg">
                              <h5 className="font-bold mb-2">{feature.name}</h5>
                              <p className="text-sm text-zinc-400 mb-3">{feature.description}</p>
                              {idx === 0 && (
                                <div className="border-2 border-dashed border-zinc-700 rounded-lg p-6 text-center hover:border-white transition-colors cursor-pointer">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-2 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                  </svg>
                                  <p className="text-zinc-400">Drag and drop files here or click to browse</p>
                                </div>
                              )}
                              {idx === 1 && (
                                <div className="grid grid-cols-3 gap-2">
                                  {[1, 2, 3].map((logo) => (
                                    <div key={logo} className="bg-zinc-800 aspect-square rounded-lg flex items-center justify-center hover:bg-zinc-700 transition-colors cursor-pointer">
                                      <span className="text-2xl">AI</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Development process for Step 7 */}
                    {steps[activeStep - 1].details.type === "developmentProcess" && (
                      <div className="bg-zinc-800 rounded-lg p-4 mb-4">
                        <h4 className="text-lg font-semibold mb-3">Development Tracker</h4>
                        <div className="space-y-4">
                          {steps[activeStep - 1].details.features.map((feature, idx) => (
                            <motion.div key={idx} variants={itemVariants} className="bg-zinc-900 p-4 rounded-lg">
                              <h5 className="font-bold mb-2">{feature.name}</h5>
                              <p className="text-sm text-zinc-400 mb-3">{feature.description}</p>
                              {idx === 0 && (
                                <div className="flex gap-2">
                                  {["In Progress", "Pending Review", "Completed"].map((status, statusIdx) => (
                                    <div key={statusIdx} className={`px-3 py-1 rounded-full text-xs ${
                                      statusIdx === 0 ? "bg-blue-900 text-blue-200" : 
                                      statusIdx === 1 ? "bg-yellow-900 text-yellow-200" : 
                                      "bg-green-900 text-green-200"
                                    }`}>
                                      {status}
                                    </div>
                                  ))}
                                </div>
                              )}
                              {idx === 1 && (
                                <div className="grid grid-cols-3 gap-2">
                                  {["Planning", "Design", "Development"].map((task, taskIdx) => (
                                    <div key={taskIdx} className="bg-zinc-800 p-2 rounded-lg text-center text-sm">
                                      {task}
                                    </div>
                                  ))}
                                </div>
                              )}
                              {idx === 2 && (
                                <button className="px-4 py-2 bg-white text-black rounded-md text-sm hover:bg-zinc-200 transition-colors">
                                  Unlock New Feature
                                </button>
                              )}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Notifications for Step 8 */}
                    {steps[activeStep - 1].details.type === "notifications" && (
                      <div className="bg-zinc-800 rounded-lg p-4 mb-4">
                        <h4 className="text-lg font-semibold mb-3">Stay Connected</h4>
                        <div className="space-y-4">
                          {steps[activeStep - 1].details.features.map((feature, idx) => (
                            <motion.div key={idx} variants={itemVariants} className="bg-zinc-900 p-4 rounded-lg">
                              <h5 className="font-bold mb-2">{feature.name}</h5>
                              <p className="text-sm text-zinc-400 mb-3">{feature.description}</p>
                              {idx === 0 && (
                                <div className="bg-zinc-800 p-3 rounded-lg">
                                  <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                                      </svg>
                                    </div>
                                    <div>
                                      <p className="text-sm">Your website design is ready for review!</p>
                                      <p className="text-xs text-zinc-500">2 minutes ago</p>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                                      </svg>
                                    </div>
                                    <div>
                                      <p className="text-sm">New message from your developer</p>
                                      <p className="text-xs text-zinc-500">1 hour ago</p>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {idx === 1 && (
                                <div className="flex items-center justify-between">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                  ))}
                                </div>
                              )}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
                
                <div className="flex gap-4">
                  <button
                    onClick={prevStep}
                    disabled={activeStep === 1}
                    className={`px-6 py-2 rounded-md flex items-center gap-2 transition-all ${
                      activeStep === 1
                        ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                        : 'bg-zinc-800 text-white hover:bg-zinc-700'
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Previous
                  </button>
                  
                  <button
                    onClick={nextStep}
                    disabled={activeStep === totalSteps}
                    className={`px-6 py-2 rounded-md flex items-center gap-2 transition-all ${
                      activeStep === totalSteps
                        ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                        : 'bg-white text-black hover:bg-zinc-200'
                    }`}
                  >
                    Next
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
            
            {/* Step badges */}
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={`px-3 py-1 rounded-full text-xs font-medium cursor-pointer transition-all ${
                    activeStep === index + 1
                      ? 'bg-white text-black'
                      : index + 1 < activeStep
                      ? 'bg-zinc-700 text-white'
                      : 'bg-zinc-800 text-zinc-500'
                  }`}
                  onClick={() => goToStep(index + 1)}
                >
                  Step {index + 1}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSteps;
