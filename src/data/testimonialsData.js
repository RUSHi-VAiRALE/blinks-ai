// Icons
import { 
  FaLaptopCode, 
  FaMobileAlt, 
  FaServer, 
  FaShoppingCart, 
  FaGraduationCap, 
  FaBook,
  FaYoutube,
  FaFilm,
  FaChartLine,
  FaMapMarkerAlt,
  FaCogs,
  FaFileAlt,
  FaCode,
  FaBullhorn,
  FaHashtag,
  FaPaintBrush,
  FaImage,
  FaNewspaper,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGoogle,
  FaStar,
  FaUserPlus,
  FaBuilding,
  FaUsers,
  FaShareAlt,
  FaCalendarAlt,
  FaComments,
  FaAd,
  FaYammer
} from 'react-icons/fa';

// Web Development Testimonials
export const webDevelopmentTestimonials = {
  title: "Web Development Testimonials",
  description: "See what our clients have to say about our web development services.",
  icon: <FaLaptopCode className="text-2xl text-white" />,
  subCategories: [
    {
      name: "E-commerce",
      description: "Success stories from our e-commerce clients who have seen significant growth in their online businesses.",
      icon: <FaShoppingCart className="text-2xl text-white" />,
      features: [
        "Secure payment processing",
        "Inventory management",
        "Customer account portals",
        "Product search and filtering",
        "Mobile-responsive design"
      ],
      testimonials: [
        {
          clientName: "Sarah Johnson",
          companyName: "Fashion Boutique",
          rating: 5,
          testimonialText: "Blinks AI transformed our small boutique into a thriving online store. The inventory management system they implemented has saved us countless hours, and our sales have increased by 70% since launch.",
          projectFeatures: ["Custom product filtering", "Integrated payment gateway", "Inventory tracking", "Customer loyalty program"],
          industry: "Fashion Retail",
          projectYear: 2024
        },
        {
          clientName: "Michael Chen",
          companyName: "GourmetBox",
          rating: 5,
          testimonialText: "Our subscription-based food delivery service needed a complex ordering system with recurring payments. The team at Blinks AI delivered a solution that exceeded our expectations and has helped us scale to over 5,000 monthly subscribers.",
          projectFeatures: ["Subscription management", "Automated billing", "Delivery scheduling", "Customer portal"],
          industry: "Food & Beverage",
          projectYear: 2023
        }
      ],
      sampleImages: [
        "/images/testimonials/ecommerce-1.jpg",
        "/images/testimonials/ecommerce-2.jpg"
      ],
      questions: [
        "What products do you sell?",
        "How many products will your store have?",
        "Do you need inventory management?",
        "Which payment gateways do you prefer?",
        "Do you need multi-currency support?"
      ]
    },
    {
      name: "Educational",
      description: "Testimonials from educational institutions and platforms that have enhanced their teaching capabilities.",
      icon: <FaGraduationCap className="text-2xl text-white" />,
      features: [
        "Course management system",
        "Student progress tracking",
        "Interactive quizzes and assessments",
        "Content library organization",
        "Certificate generation"
      ],
      testimonials: [
        {
          clientName: "Dr. Emily Rodriguez",
          companyName: "Global Learning Institute",
          rating: 5,
          testimonialText: "The learning management system developed by Blinks AI has revolutionized how we deliver online courses. The intuitive interface and robust tracking features have improved student engagement and completion rates by 45%.",
          projectFeatures: ["Custom course builder", "Progress tracking", "Interactive assessments", "Certificate generation"],
          industry: "Higher Education",
          projectYear: 2024
        },
        {
          clientName: "Robert Williams",
          companyName: "SkillUp Academy",
          rating: 4,
          testimonialText: "We needed a platform that could handle thousands of students simultaneously while providing detailed analytics. Blinks AI delivered a scalable solution that has helped us grow our student base by 300% in just one year.",
          projectFeatures: ["High-capacity video streaming", "Real-time analytics", "Community forums", "Mobile app integration"],
          industry: "Professional Training",
          projectYear: 2023
        }
      ],
      sampleImages: [
        "/images/testimonials/educational-1.jpg",
        "/images/testimonials/educational-2.jpg"
      ],
      questions: [
        "What type of educational content will you offer?",
        "Do you need student registration and tracking?",
        "Will you offer certificates upon completion?",
        "Do you need payment integration for courses?",
        "What interactive elements do you need?"
      ]
    },
    {
      name: "Corporate",
      description: "Testimonials from businesses that have improved their online presence and operations.",
      icon: <FaServer className="text-2xl text-white" />,
      features: [
        "Brand-aligned design",
        "Content management system",
        "Integration with business tools",
        "Lead generation forms",
        "Performance analytics"
      ],
      testimonials: [
        {
          clientName: "Jennifer Martinez",
          companyName: "Nexus Consulting Group",
          rating: 5,
          testimonialText: "Our outdated website was costing us potential clients. Blinks AI redesigned our entire web presence with a focus on lead generation. Within three months, we saw a 60% increase in qualified leads coming through our site.",
          projectFeatures: ["Custom CRM integration", "Case study portfolio", "SEO optimization", "Lead scoring system"],
          industry: "Business Consulting",
          projectYear: 2024
        },
        {
          clientName: "David Thompson",
          companyName: "Innovate Financial",
          rating: 5,
          testimonialText: "Security and compliance were our top priorities for our financial services website. The team at Blinks AI implemented bank-level security while creating an elegant, user-friendly interface that has significantly improved our customer acquisition.",
          projectFeatures: ["Secure client portal", "Document upload system", "Appointment scheduling", "Compliance-ready architecture"],
          industry: "Financial Services",
          projectYear: 2023
        }
      ],
      sampleImages: [
        "/images/testimonials/corporate-1.jpg",
        "/images/testimonials/corporate-2.jpg"
      ],
      questions: [
        "What are your main business objectives?",
        "Who is your target audience?",
        "What features do you need on your website?",
        "Do you require integration with existing systems?",
        "What is your timeline for launch?"
      ]
    }
  ]
};

// App Development Testimonials
export const appDevelopmentTestimonials = {
  title: "App Development Testimonials",
  description: "Discover how our mobile app solutions have helped businesses reach their goals.",
  icon: <FaMobileAlt className="text-2xl text-white" />,
  subCategories: [
    {
      name: "iOS Apps",
      description: "Success stories from clients who have launched successful iOS applications.",
      icon: <FaMobileAlt className="text-2xl text-white" />,
      features: [
        "Native iOS performance",
        "Apple design guidelines compliance",
        "Push notifications",
        "In-app purchases",
        "App Store optimization"
      ],
      testimonials: [
        {
          clientName: "Alex Rivera",
          companyName: "FitTrack",
          rating: 5,
          testimonialText: "Our fitness tracking app needed to integrate with Apple Health while providing a seamless user experience. Blinks AI delivered an app that our users love, with a 4.8-star App Store rating and over 100,000 downloads in the first quarter.",
          projectFeatures: ["Health kit integration", "Custom workout builder", "Progress visualization", "Social sharing"],
          industry: "Health & Fitness",
          projectYear: 2024
        },
        {
          clientName: "Sophia Kim",
          companyName: "EcoMarket",
          rating: 4,
          testimonialText: "Launching our sustainable marketplace app was a complex project with multiple stakeholders. The Blinks AI team navigated these challenges professionally and delivered an iOS app that has become central to our business model.",
          projectFeatures: ["Vendor management", "Secure payments", "Location services", "Carbon footprint calculator"],
          industry: "Retail",
          projectYear: 2023
        }
      ],
      sampleImages: [
        "/images/testimonials/ios-1.jpg",
        "/images/testimonials/ios-2.jpg"
      ],
      questions: [
        "What is the core functionality of your app?",
        "Do you need offline capabilities?",
        "Will you require user authentication?",
        "Do you plan to monetize with in-app purchases?",
        "What iOS versions do you need to support?"
      ]
    },
    {
      name: "Android Apps",
      description: "Testimonials from clients with successful Android applications.",
      icon: <FaMobileAlt className="text-2xl text-white" />,
      features: [
        "Native Android performance",
        "Material Design implementation",
        "Google Play integration",
        "Background services",
        "Device compatibility"
      ],
      testimonials: [
        {
          clientName: "Marcus Johnson",
          companyName: "TravelBuddy",
          rating: 5,
          testimonialText: "Our travel planning app needed to work across a wide range of Android devices and in offline mode. Blinks AI created a solution that works flawlessly even in remote areas with poor connectivity, which has been crucial to our success.",
          projectFeatures: ["Offline maps", "Itinerary planning", "Local recommendations", "Travel journal"],
          industry: "Travel",
          projectYear: 2024
        },
        {
          clientName: "Priya Patel",
          companyName: "MediRemind",
          rating: 5,
          testimonialText: "Our healthcare app needed to be both HIPAA-compliant and user-friendly for elderly patients. The Android app Blinks AI developed has helped thousands of patients manage their medications more effectively.",
          projectFeatures: ["Medication reminders", "Doctor appointment tracking", "Secure health records", "Family sharing"],
          industry: "Healthcare",
          projectYear: 2023
        }
      ],
      sampleImages: [
        "/images/testimonials/android-1.jpg",
        "/images/testimonials/android-2.jpg"
      ],
      questions: [
        "What is the main purpose of your Android app?",
        "Which Android versions do you need to support?",
        "Do you need Google services integration?",
        "Will your app use device hardware features?",
        "Do you have existing brand guidelines to follow?"
      ]
    },
    {
      name: "Cross-Platform Apps",
      description: "Success stories from clients who have benefited from our cross-platform development approach.",
      icon: <FaMobileAlt className="text-2xl text-white" />,
      features: [
        "Single codebase for iOS and Android",
        "Faster development time",
        "Native-like performance",
        "Code reusability",
        "Easier maintenance"
      ],
      testimonials: [
        {
          clientName: "James Wilson",
          companyName: "EventConnect",
          rating: 5,
          testimonialText: "We needed to launch on both iOS and Android simultaneously with a limited budget. Blinks AI's cross-platform approach allowed us to reach both markets quickly while maintaining a consistent user experience across devices.",
          projectFeatures: ["Event discovery", "Ticket purchasing", "Networking tools", "Real-time notifications"],
          industry: "Events",
          projectYear: 2024
        },
        {
          clientName: "Lisa Chang",
          companyName: "HomeServices",
          rating: 4,
          testimonialText: "Our service provider app connects homeowners with contractors and needed to work seamlessly across all devices. The cross-platform solution from Blinks AI has helped us scale to 20 cities in just 18 months.",
          projectFeatures: ["Service booking", "Provider verification", "Secure payments", "Rating system"],
          industry: "Home Services",
          projectYear: 2023
        }
      ],
      sampleImages: [
        "/images/testimonials/cross-platform-1.jpg",
        "/images/testimonials/cross-platform-2.jpg"
      ],
      questions: [
        "Do you need both iOS and Android versions?",
        "What is your timeline for development?",
        "Are there any platform-specific features you need?",
        "What is your budget consideration?",
        "Do you plan to expand to web platforms later?"
      ]
    }
  ]
};

// Digital Marketing Testimonials
export const digitalMarketingTestimonials = {
  title: "Digital Marketing Testimonials",
  description: "Learn how our digital marketing strategies have driven growth for our clients.",
  icon: <FaBullhorn className="text-2xl text-white" />,
  subCategories: [
    {
      name: "SEO",
      description: "Success stories from clients who have improved their search engine rankings and organic traffic.",
      icon: <FaChartLine className="text-2xl text-white" />,
      features: [
        "Keyword research and optimization",
        "On-page SEO",
        "Technical SEO",
        "Content strategy",
        "Link building"
      ],
      testimonials: [
        {
          clientName: "Thomas Anderson",
          companyName: "Legal Advisors Group",
          rating: 5,
          testimonialText: "Our law firm was invisible in search results before working with Blinks AI. Their comprehensive SEO strategy helped us rank for over 50 competitive legal keywords, resulting in a 200% increase in qualified leads from organic search.",
          projectFeatures: ["Local SEO optimization", "Content marketing", "Technical site audit", "Competitor analysis"],
          industry: "Legal Services",
          projectYear: 2024
        },
        {
          clientName: "Rebecca Moore",
          companyName: "Organic Wellness",
          rating: 5,
          testimonialText: "In a highly competitive health supplements market, Blinks AI helped us carve out our niche through targeted SEO. Our organic traffic has increased by 150% and our e-commerce sales have doubled in just six months.",
          projectFeatures: ["E-commerce SEO", "Product page optimization", "Schema markup", "Voice search optimization"],
          industry: "Health & Wellness",
          projectYear: 2023
        }
      ],
      sampleImages: [
        "/images/testimonials/seo-1.jpg",
        "/images/testimonials/seo-2.jpg"
      ],
      questions: [
        "What are your primary business goals?",
        "Who are your main competitors?",
        "What keywords do you want to rank for?",
        "What is your current SEO strategy?",
        "Do you have existing content to optimize?"
      ]
    },
    {
      name: "Social Media",
      description: "Testimonials from clients who have grown their brand presence and engagement through social media.",
      icon: <FaHashtag className="text-2xl text-white" />,
      features: [
        "Platform-specific strategy",
        "Content creation",
        "Community management",
        "Paid social campaigns",
        "Performance analytics"
      ],
      testimonials: [
        {
          clientName: "Olivia Martinez",
          companyName: "Urban Styles",
          rating: 5,
          testimonialText: "Blinks AI revolutionized our social media presence. Their strategic approach to content and community building has grown our Instagram following from 5K to 50K in one year, with engagement rates well above industry averages.",
          projectFeatures: ["Content calendar", "Influencer partnerships", "User-generated content campaigns", "Instagram Shop integration"],
          industry: "Fashion",
          projectYear: 2024
        },
        {
          clientName: "Daniel Lee",
          companyName: "Culinary Creations",
          rating: 4,
          testimonialText: "As a restaurant group, we struggled to maintain a consistent social media presence across multiple locations. Blinks AI implemented a cohesive strategy that has increased our bookings by 35% and created a strong brand identity online.",
          projectFeatures: ["Location-specific content", "Food photography", "Review management", "Special event promotion"],
          industry: "Restaurants",
          projectYear: 2023
        }
      ],
      sampleImages: [
        "/images/testimonials/social-1.jpg",
        "/images/testimonials/social-2.jpg"
      ],
      questions: [
        "Which social platforms are most important to your business?",
        "What are your social media goals?",
        "Who is your target audience?",
        "Do you have existing brand guidelines?",
        "What is your content creation capacity?"
      ]
    },
    {
      name: "Content Marketing",
      description: "Success stories from clients who have established thought leadership and driven conversions through content.",
      icon: <FaNewspaper className="text-2xl text-white" />,
      features: [
        "Content strategy development",
        "Blog writing and management",
        "Ebook and whitepaper creation",
        "Email marketing campaigns",
        "Content distribution"
      ],
      testimonials: [
        {
          clientName: "Rachel Green",
          companyName: "TechSolutions Inc",
          rating: 5,
          testimonialText: "Blinks AI's content marketing strategy transformed our B2B lead generation. Their in-depth whitepapers and case studies have established us as industry thought leaders, resulting in a 70% increase in qualified leads.",
          projectFeatures: ["Industry research reports", "Case study development", "Email nurture sequences", "Webinar content"],
          industry: "B2B Technology",
          projectYear: 2024
        },
        {
          clientName: "Andrew Clark",
          companyName: "Financial Freedom",
          rating: 5,
          testimonialText: "In the highly regulated financial advisory space, creating compliant yet engaging content is challenging. Blinks AI developed a content strategy that has helped us educate our audience and grow our client base by 40%.",
          projectFeatures: ["Educational blog series", "Financial calculators", "Compliance-approved content", "Newsletter program"],
          industry: "Financial Services",
          projectYear: 2023
        }
      ],
      sampleImages: [
        "/images/testimonials/content-1.jpg",
        "/images/testimonials/content-2.jpg"
      ],
      questions: [
        "What are your content marketing goals?",
        "Who is your target audience?",
        "What types of content have worked for you in the past?",
        "Do you have subject matter experts available?",
        "How will you measure content success?"
      ]
    }
  ]
};

// Video Production Testimonials
export const videoProductionTestimonials = {
  title: "Video Production Testimonials",
  description: "See how our video production services have helped clients engage their audiences.",
  icon: <FaYoutube className="text-2xl text-white" />,
  subCategories: [
    {
      name: "YouTube Content",
      description: "Success stories from content creators and brands who have grown their YouTube presence.",
      icon: <FaYoutube className="text-2xl text-white" />,
      features: [
        "Channel strategy",
        "Video editing",
        "Thumbnail design",
        "SEO optimization",
        "Content planning"
      ],
      testimonials: [
        {
          clientName: "Carlos Rodriguez",
          companyName: "Tech Review Channel",
          rating: 5,
          testimonialText: "Blinks AI transformed my YouTube channel from a hobby to a full-time business. Their editing style and optimization strategy helped me grow from 10K to 500K subscribers in just 18 months.",
          projectFeatures: ["Custom intro/outro creation", "Consistent editing style", "Keyword research", "Thumbnail A/B testing"],
          industry: "Technology Content",
          projectYear: 2024
        },
        {
          clientName: "Emma Watson",
          companyName: "Culinary Adventures",
          rating: 5,
          testimonialText: "As a cooking channel, food presentation is everything. The editing team at Blinks AI has a gift for making my recipes look irresistible, which has doubled my viewership and attracted major brand sponsorships.",
          projectFeatures: ["Food cinematography", "Recipe timing optimization", "Brand integration", "Cross-platform promotion"],
          industry: "Food Content",
          projectYear: 2023
        }
      ],
      sampleImages: [
        "/images/testimonials/youtube-1.jpg",
        "/images/testimonials/youtube-2.jpg"
      ],
      questions: [
        "What type of content do you create?",
        "What is your current editing process?",
        "What are your channel growth goals?",
        "Do you need help with content strategy?",
        "What is your publishing frequency?"
      ]
    },
    {
      name: "Short-Form Content",
      description: "Testimonials from clients who have succeeded with short-form video on platforms like TikTok and Instagram Reels.",
      icon: <FaFilm className="text-2xl text-white" />,
      features: [
        "Trend research",
        "Vertical video optimization",
        "Music selection",
        "Viral hook creation",
        "Cross-platform adaptation"
      ],
      testimonials: [
        {
          clientName: "Zoe Chen",
          companyName: "Fashion Forward",
          rating: 5,
          testimonialText: "Blinks AI's short-form video strategy helped our fashion brand go viral on TikTok. Their ability to create engaging 15-second content that showcases our products has generated over 2 million views and directly increased our sales by 80%.",
          projectFeatures: ["Trend integration", "Product showcase formats", "User engagement tactics", "Call-to-action optimization"],
          industry: "Fashion",
          projectYear: 2024
        },
        {
          clientName: "Jason Miller",
          companyName: "Fitness Revolution",
          rating: 4,
          testimonialText: "Converting my long-form workout content into effective short-form videos was challenging until I partnered with Blinks AI. Their editing approach has helped me reach a new audience on Instagram Reels and grow my online coaching business.",
          projectFeatures: ["Exercise demonstration clips", "Before/after transformations", "Quick tip formats", "Branded elements"],
          industry: "Fitness",
          projectYear: 2023
        }
      ],
      sampleImages: [
        "/images/testimonials/short-form-1.jpg",
        "/images/testimonials/short-form-2.jpg"
      ],
      questions: [
        "Which platforms are you targeting?",
        "What is your brand voice?",
        "Do you have existing content to repurpose?",
        "What are your content goals?",
        "Who is your target audience?"
      ]
    },
    {
      name: "Corporate Video",
      description: "Success stories from businesses that have used video for marketing, training, and communication.",
      icon: <FaFilm className="text-2xl text-white" />,
      features: [
        "Brand storytelling",
        "Product demonstrations",
        "Customer testimonials",
        "Training videos",
        "Event coverage"
      ],
      testimonials: [
        {
          clientName: "Richard Barnes",
          companyName: "Innovate Manufacturing",
          rating: 5,
          testimonialText: "Our complex industrial products were difficult to explain until Blinks AI created a series of demonstration videos. These videos have reduced our sales cycle by 40% and become an essential tool for our sales team.",
          projectFeatures: ["3D product animation", "Technical explanation", "Process visualization", "Customer problem-solution scenarios"],
          industry: "Manufacturing",
          projectYear: 2024
        },
        {
          clientName: "Michelle Taylor",
          companyName: "Global HR Solutions",
          rating: 5,
          testimonialText: "Blinks AI produced our employee training video series which has standardized our onboarding process across 12 countries. The engaging format has improved information retention and reduced training time by 30%.",
          projectFeatures: ["Multi-language support", "Interactive elements", "Step-by-step processes", "Brand-aligned visuals"],
          industry: "Human Resources",
          projectYear: 2023
        }
      ],
      sampleImages: [
        "/images/testimonials/corporate-video-1.jpg",
        "/images/testimonials/corporate-video-2.jpg"
      ],
      questions: [
        "What is the purpose of your corporate video?",
        "Who is the intended audience?",
        "What key messages need to be conveyed?",
        "Do you have brand guidelines to follow?",
        "Where will the video be displayed?"
      ]
    }
  ]
};

// Custom Software Testimonials
export const customSoftwareTestimonials = {
  title: "Custom Software Testimonials",
  description: "Discover how our tailored software solutions have solved complex business challenges.",
  icon: <FaServer className="text-2xl text-white" />,
  subCategories: [
    {
      name: "Enterprise Solutions",
      description: "Success stories from large organizations that have streamlined operations with our enterprise software.",
      icon: <FaServer className="text-2xl text-white" />,
      features: [
        "Scalable architecture",
        "Integration with existing systems",
        "Role-based access control",
        "Custom reporting",
        "High availability design"
      ],
      testimonials: [
        {
          clientName: "Thomas Reynolds",
          companyName: "Global Logistics Inc.",
          rating: 5,
          testimonialText: "Blinks AI developed an enterprise resource planning system that unified our operations across 12 countries. The custom reporting features have given our management team unprecedented visibility into our supply chain, resulting in a 23% reduction in operational costs.",
          projectFeatures: ["Multi-currency support", "Real-time tracking", "Predictive analytics", "Vendor management portal"],
          industry: "Logistics & Transportation",
          projectYear: 2023
        },
        {
          clientName: "Priya Sharma",
          companyName: "MediCorp Healthcare",
          rating: 5,
          testimonialText: "Our healthcare network needed a secure, compliant system to manage patient data across multiple facilities. The solution delivered by Blinks AI not only met all regulatory requirements but also improved our staff efficiency by 35% through intelligent workflow automation.",
          projectFeatures: ["HIPAA compliance", "Electronic health records", "Appointment scheduling", "Insurance verification"],
          industry: "Healthcare",
          projectYear: 2024
        }
      ],
      sampleImages: [
        "/images/testimonials/enterprise-1.jpg",
        "/images/testimonials/enterprise-2.jpg"
      ],
      questions: [
        "What are your primary business challenges?",
        "How many users will need access to the system?",
        "What existing systems will need integration?",
        "What are your security and compliance requirements?",
        "What are your reporting needs?"
      ]
    },
    {
      name: "Business Process Automation",
      description: "Testimonials from businesses that have increased efficiency through automation.",
      icon: <FaCogs className="text-2xl text-white" />,
      features: [
        "Workflow automation",
        "Document processing",
        "Approval systems",
        "Data validation",
        "Process analytics"
      ],
      testimonials: [
        {
          clientName: "Marcus Johnson",
          companyName: "Pinnacle Financial Services",
          rating: 5,
          testimonialText: "Our loan approval process used to take weeks and involve countless manual steps. Blinks AI automated the entire workflow, reducing processing time to just 48 hours while improving accuracy. This has been transformative for our business and customer satisfaction.",
          projectFeatures: ["Document OCR", "Automated credit checks", "Digital signatures", "Compliance verification"],
          industry: "Financial Services",
          projectYear: 2023
        },
        {
          clientName: "Laura Chen",
          companyName: "TechSolutions Inc.",
          rating: 4,
          testimonialText: "As our company scaled, our HR processes became increasingly complex. The custom HR automation system from Blinks AI has streamlined everything from recruitment to onboarding and performance reviews, saving our HR team over 30 hours per week.",
          projectFeatures: ["Applicant tracking", "Employee onboarding", "Performance management", "Time-off tracking"],
          industry: "Technology",
          projectYear: 2024
        }
      ],
      sampleImages: [
        "/images/testimonials/automation-1.jpg",
        "/images/testimonials/automation-2.jpg"
      ],
      questions: [
        "Which business processes do you want to automate?",
        "How many steps are in your current workflow?",
        "What are your biggest efficiency bottlenecks?",
        "Do you need mobile access to these processes?",
        "What metrics do you want to track?"
      ]
    },
    {
      name: "Data Analytics Solutions",
      description: "Success stories from clients who have leveraged data for business insights.",
      icon: <FaChartLine className="text-2xl text-white" />,
      features: [
        "Data warehousing",
        "Business intelligence dashboards",
        "Predictive analytics",
        "Custom reporting",
        "Data visualization"
      ],
      testimonials: [
        {
          clientName: "Victoria Adams",
          companyName: "Retail Innovations Group",
          rating: 5,
          testimonialText: "The custom analytics platform developed by Blinks AI transformed how we understand our customers. By consolidating data from multiple sources, we now have actionable insights that have helped increase our average order value by 28% and customer retention by 40%.",
          projectFeatures: ["Customer segmentation", "Purchase pattern analysis", "Inventory optimization", "Sales forecasting"],
          industry: "Retail",
          projectYear: 2023
        },
        {
          clientName: "James Wilson",
          companyName: "AgriTech Solutions",
          rating: 5,
          testimonialText: "Our agricultural business generates massive amounts of data from sensors, weather stations, and machinery. Blinks AI built a comprehensive analytics solution that helps us optimize crop yields, reduce resource usage, and increase profitability across all our farms.",
          projectFeatures: ["IoT data integration", "Yield prediction", "Resource optimization", "Mobile dashboards"],
          industry: "Agriculture",
          projectYear: 2024
        }
      ],
      sampleImages: [
        "/images/testimonials/analytics-1.jpg",
        "/images/testimonials/analytics-2.jpg"
      ],
      questions: [
        "What data sources do you need to analyze?",
        "What business questions are you trying to answer?",
        "Who needs access to the analytics?",
        "Do you need real-time insights or periodic reports?",
        "What actions do you want to take based on the data?"
      ]
    }
  ]
};

// SEO Testimonials
export const seoTestimonials = {
  title: "SEO Testimonials",
  description: "See how our SEO strategies have improved visibility and traffic for our clients.",
  icon: <FaChartLine className="text-2xl text-white" />,
  subCategories: [
    {
      name: "Local SEO",
      description: "Success stories from local businesses that have dominated their geographic market.",
      icon: <FaMapMarkerAlt className="text-2xl text-white" />,
      features: [
        "Google My Business optimization",
        "Local keyword targeting",
        "Citation building",
        "Review management",
        "Local link building"
      ],
      testimonials: [
        {
          clientName: "Robert Anderson",
          companyName: "Anderson Dental Care",
          rating: 5,
          testimonialText: "Before working with Blinks AI, our dental practice was invisible online. Their local SEO strategy put us on the map - literally. We now rank in the top 3 for all major dental keywords in our city, and our new patient appointments have increased by 85%.",
          projectFeatures: ["Google Business Profile optimization", "Local citation cleanup", "Review generation system", "Local content strategy"],
          industry: "Healthcare",
          projectYear: 2023
        },
        {
          clientName: "Maria Gonzalez",
          companyName: "Taste of Mexico Restaurant",
          rating: 5,
          testimonialText: "As a family-owned restaurant, we were struggling to compete with larger chains. Blinks AI's local SEO approach transformed our online presence. We're now the top-ranked Mexican restaurant in the area, and our weekend reservations are consistently booked weeks in advance.",
          projectFeatures: ["Local keyword optimization", "Photo optimization", "Review response management", "Local event promotion"],
          industry: "Food & Beverage",
          projectYear: 2024
        }
      ],
      sampleImages: [
        "/images/testimonials/local-seo-1.jpg",
        "/images/testimonials/local-seo-2.jpg"
      ],
      questions: [
        "What geographic area do you serve?",
        "Who are your local competitors?",
        "Do you have a Google Business Profile?",
        "What local keywords are important to you?",
        "How do customers currently find you?"
      ]
    },
    {
      name: "On-Page SEO",
      description: "Success stories from online stores that have increased traffic and sales through SEO.",
      icon: <FaShoppingCart className="text-2xl text-white" />,
      features: [
        "Product page optimization",
        "Category structure planning",
        "Schema markup implementation",
        "Conversion rate optimization",
        "Shopping feed optimization"
      ],
      testimonials: [
        {
          clientName: "Daniel Kim",
          companyName: "Outdoor Gear Shop",
          rating: 5,
          testimonialText: "Our e-commerce store was getting lost among larger competitors. Blinks AI implemented a comprehensive SEO strategy focused on long-tail product keywords and schema markup. Our organic traffic has increased by 210% and sales from organic search are up 175%.",
          projectFeatures: ["Product schema implementation", "Category page optimization", "Image SEO", "Internal linking structure"],
          industry: "Retail",
          projectYear: 2023
        },
        {
          clientName: "Samantha Taylor",
          companyName: "Handcrafted Jewelry",
          rating: 4,
          testimonialText: "As a small artisan business, I couldn't afford expensive PPC campaigns. Blinks AI helped me build an organic search strategy that has steadily grown my traffic and sales. My products now rank for hundreds of relevant keywords, bringing in consistent orders every day.",
          projectFeatures: ["Product description optimization", "Long-tail keyword targeting", "Rich snippets implementation", "Seasonal SEO strategy"],
          industry: "Jewelry & Accessories",
          projectYear: 2024
        }
      ],
      sampleImages: [
        "/images/testimonials/ecommerce-seo-1.jpg",
        "/images/testimonials/ecommerce-seo-2.jpg"
      ],
      questions: [
        "How many products do you sell?",
        "What is your current organic traffic?",
        "Who are your main competitors?",
        "What is your product categorization?",
        "Do you use any e-commerce platforms?"
      ]
    },
    {
      name: "Technical SEO",
      description: "Success stories from websites that have resolved technical issues to improve rankings.",
      icon: <FaCode className="text-2xl text-white" />,
      features: [
        "Site speed optimization",
        "Mobile usability improvement",
        "Structured data implementation",
        "Crawlability enhancement",
        "Core Web Vitals optimization"
      ],
      testimonials: [
        {
          clientName: "Jonathan Peters",
          companyName: "Global News Network",
          rating: 5,
          testimonialText: "Our news website was suffering from technical SEO issues that were affecting our Google News inclusion. Blinks AI conducted a comprehensive technical audit and implemented fixes that improved our page speed by 65% and resolved indexing issues. Our search visibility increased by 120% within two months.",
          projectFeatures: ["Core Web Vitals optimization", "XML sitemap restructuring", "Mobile optimization", "AMP implementation"],
          industry: "Media & Publishing",
          projectYear: 2023
        },
        {
          clientName: "Lisa Wong",
          companyName: "Fashion Collective",
          rating: 5,
          testimonialText: "Our image-heavy fashion website was extremely slow and losing mobile traffic. The technical SEO team at Blinks AI transformed our site performance, reducing load times from 8.5 seconds to 2.1 seconds. This has directly contributed to a 45% reduction in bounce rate and 30% increase in pages per session.",
          projectFeatures: ["Image optimization", "Lazy loading implementation", "CSS/JS optimization", "Server response time improvement"],
          industry: "Fashion",
          projectYear: 2024
        }
      ],
      sampleImages: [
        "/images/testimonials/technical-seo-1.jpg",
        "/images/testimonials/technical-seo-2.jpg"
      ],
      questions: [
        "What technical issues is your site experiencing?",
        "What is your current page load speed?",
        "Are you experiencing any indexing issues?",
        "Is your site mobile-friendly?",
        "Have you implemented structured data?"
      ]
    },
    {
      name: "Off-Page SEO",
      description: "Success stories from websites that have resolved technical issues to improve rankings.",
      icon: <FaCode className="text-2xl text-white" />,
      features: [
        "Site speed optimization",
        "Mobile usability improvement",
        "Structured data implementation",
        "Crawlability enhancement",
        "Core Web Vitals optimization"
      ],
      testimonials: [
        {
          clientName: "Jonathan Peters",
          companyName: "Global News Network",
          rating: 5,
          testimonialText: "Our news website was suffering from technical SEO issues that were affecting our Google News inclusion. Blinks AI conducted a comprehensive technical audit and implemented fixes that improved our page speed by 65% and resolved indexing issues. Our search visibility increased by 120% within two months.",
          projectFeatures: ["Core Web Vitals optimization", "XML sitemap restructuring", "Mobile optimization", "AMP implementation"],
          industry: "Media & Publishing",
          projectYear: 2023
        },
        {
          clientName: "Lisa Wong",
          companyName: "Fashion Collective",
          rating: 5,
          testimonialText: "Our image-heavy fashion website was extremely slow and losing mobile traffic. The technical SEO team at Blinks AI transformed our site performance, reducing load times from 8.5 seconds to 2.1 seconds. This has directly contributed to a 45% reduction in bounce rate and 30% increase in pages per session.",
          projectFeatures: ["Image optimization", "Lazy loading implementation", "CSS/JS optimization", "Server response time improvement"],
          industry: "Fashion",
          projectYear: 2024
        }
      ],
      sampleImages: [
        "/images/testimonials/technical-seo-1.jpg",
        "/images/testimonials/technical-seo-2.jpg"
      ],
      questions: [
        "What technical issues is your site experiencing?",
        "What is your current page load speed?",
        "Are you experiencing any indexing issues?",
        "Is your site mobile-friendly?",
        "Have you implemented structured data?"
      ]
    }
  ]
};

// YouTube Video Editing Testimonials
export const youtubeVideoEditingTestimonials = {
  title: "YouTube Video Editing Testimonials",
  description: "See how our video editing services have helped content creators grow their channels.",
  icon: <FaYoutube className="text-2xl text-white" />,
  subCategories: [
    {
      name: "YouTube Channel Growth",
      description: "Success stories from creators who have expanded their audience with our editing services.",
      icon: <FaYoutube className="text-2xl text-white" />,
      features: [
        "Engaging intros and outros",
        "Pacing optimization",
        "Visual effects",
        "Thumbnail creation",
        "SEO optimization"
      ],
      testimonials: [
        {
          clientName: "Ryan Parker",
          companyName: "Tech Review Channel",
          rating: 5,
          testimonialText: "Since working with Blinks AI for my video editing, my channel has grown from 10K to over 250K subscribers in just 8 months. Their understanding of YouTube algorithms and viewer retention has completely transformed my content strategy.",
          projectFeatures: ["Custom motion graphics", "Optimized pacing", "Audience retention analysis", "Consistent branding"],
          industry: "Technology Content",
          projectYear: 2024
        },
        {
          clientName: "Aisha Williams",
          companyName: "Cooking With Aisha",
          rating: 5,
          testimonialText: "As a cooking channel, the quality of my video presentation is everything. Blinks AI's editing team has elevated my content with beautiful food cinematography and engaging graphics. My average view duration has increased by 45% and sponsorship opportunities have tripled.",
          projectFeatures: ["Food cinematography", "Recipe graphics", "Sponsor integration", "Cross-platform optimization"],
          industry: "Food & Cooking",
          projectYear: 2023
        }
      ],
      sampleImages: [
        "/images/testimonials/youtube-1.jpg",
        "/images/testimonials/youtube-2.jpg"
      ],
      questions: [
        "What type of content do you create?",
        "What is your current editing process?",
        "What are your channel growth goals?",
        "Do you need help with thumbnails and graphics?",
        "How many videos do you produce per month?"
      ]
    },
    {
      name: "Educational Content",
      description: "Testimonials from educators and instructors who have enhanced their teaching through video.",
      icon: <FaGraduationCap className="text-2xl text-white" />,
      features: [
        "Concept visualization",
        "Animated explanations",
        "Screen recording enhancement",
        "Interactive elements",
        "Chapter markers"
      ],
      testimonials: [
        {
          clientName: "Professor Alan Morris",
          companyName: "Online Physics Academy",
          rating: 5,
          testimonialText: "The animated explanations and visualizations that Blinks AI created for my physics lectures have made complex concepts accessible to students worldwide. My course completion rates have increased from 23% to 78% since implementing their editing style.",
          projectFeatures: ["Physics animations", "Concept visualization", "Interactive quizzes", "Lecture segmentation"],
          industry: "Education",
          projectYear: 2023
        },
        {
          clientName: "Sophia Rodriguez",
          companyName: "Language Learning Hub",
          rating: 4,
          testimonialText: "Teaching languages online requires engaging, clear content. The editing team at Blinks AI has helped me create lessons that keep students engaged throughout. The subtitle work and cultural context visuals have been particularly valuable for my international audience.",
          projectFeatures: ["Multi-language subtitles", "Cultural context visuals", "Practice exercise segments", "Pronunciation guides"],
          industry: "Language Education",
          projectYear: 2024
        }
      ],
      sampleImages: [
        "/images/testimonials/educational-video-1.jpg",
        "/images/testimonials/educational-video-2.jpg"
      ],
      questions: [
        "What subjects do you teach?",
        "Do you need animations or visual aids?",
        "How long are your typical videos?",
        "Do you need interactive elements?",
        "What is your target audience?"
      ]
    },
    {
      name: "Brand Channels",
      description: "Success stories from brands that have built their presence on YouTube with our help.",
      icon: <FaBullhorn className="text-2xl text-white" />,
      features: [
        "Brand consistency",
        "Product showcases",
        "Customer testimonial compilation",
        "Company culture videos",
        "Campaign series"
      ],
      testimonials: [
        {
          clientName: "Nathan Lee",
          companyName: "EcoTech Products",
          rating: 5,
          testimonialText: "Our sustainable technology brand needed to communicate complex product benefits in an engaging way. Blinks AI's video editing approach has helped us build a YouTube channel with over 500K subscribers and directly contributed to a 35% increase in product sales.",
          projectFeatures: ["Product demonstrations", "Benefit visualization", "Customer success stories", "Technical explainers"],
          industry: "Consumer Technology",
          projectYear: 2023
        },
        {
          clientName: "Olivia Martinez",
          companyName: "Wellness Collective",
          rating: 5,
          testimonialText: "As a wellness brand, authenticity is crucial. The team at Blinks AI has helped us create YouTube content that resonates with our audience while maintaining our brand values. Our subscriber growth has been consistent at 15% month-over-month since we started working together.",
          projectFeatures: ["Lifestyle integration", "Expert interviews", "Before/after transformations", "Community highlights"],
          industry: "Health & Wellness",
          projectYear: 2024
        }
      ],
      sampleImages: [
        "/images/testimonials/brand-1.jpg",
        "/images/testimonials/brand-2.jpg"
      ],
      questions: [
        "What are your brand guidelines?",
        "What type of content aligns with your brand?",
        "Who is your target audience?",
        "What are your content marketing goals?",
        "How do you measure video success?"
      ]
    }
  ]
};

// Graphic Design Testimonials
export const graphicDesignTestimonials = {
  title: "Graphic Design Testimonials",
  description: "See how our graphic design services have helped businesses elevate their visual identity.",
  icon: <FaPaintBrush className="text-2xl text-white" />,
  subCategories: [
    {
      name: "Logo",
      description: "Success stories from businesses that have transformed their brand with our design services.",
      icon: <FaPaintBrush className="text-2xl text-white" />,
      features: [
        "Logo design",
        "Brand guidelines",
        "Color palette development",
        "Typography selection",
        "Visual identity system"
      ],
      testimonials: [
        {
          clientName: "Rebecca Torres",
          companyName: "Modern Wellness",
          rating: 5,
          testimonialText: "Our wellness brand needed a complete visual overhaul to stand out in a crowded market. Blinks AI created a sophisticated, minimalist brand identity that perfectly captures our essence. The new branding has been instrumental in our expansion to three new locations in just one year.",
          projectFeatures: ["Monochromatic logo system", "Custom typography", "Brand guidelines", "Application examples"],
          industry: "Health & Wellness",
          projectYear: 2023
        },
        {
          clientName: "Jason Park",
          companyName: "Elevate Technology",
          rating: 5,
          testimonialText: "As a tech startup, we needed a brand identity that communicated innovation while feeling approachable. The design team at Blinks AI delivered a comprehensive brand system that has helped us secure two rounds of funding. Investors specifically mentioned our professional brand presence as a factor in their decision.",
          projectFeatures: ["Adaptable logo design", "Iconography system", "Presentation templates", "Digital application guidelines"],
          industry: "Technology",
          projectYear: 2024
        }
      ],
      sampleImages: [
        "/images/testimonials/brand-identity-1.jpg",
        "/images/testimonials/brand-identity-2.jpg"
      ],
      questions: [
        "What is your brand personality?",
        "Who is your target audience?",
        "What are your brand values?",
        "Who are your competitors?",
        "Where will your brand be displayed?"
      ]
    },
    {
      name: "Poster",
      description: "Success stories from businesses that have increased engagement with our marketing designs.",
      icon: <FaImage className="text-2xl text-white" />,
      features: [
        "Social media graphics",
        "Print collateral",
        "Digital ads",
        "Presentation design",
        "Event materials"
      ],
      testimonials: [
        {
          clientName: "Olivia Chen",
          companyName: "Artisan Bakery",
          rating: 5,
          testimonialText: "The marketing materials created by Blinks AI transformed our local bakery's presence. Their cohesive design approach across our menu, packaging, and social media has created a distinctive brand experience that customers recognize and love. Our Instagram following has grown by 400% in six months.",
          projectFeatures: ["Menu design", "Packaging system", "Social media templates", "Seasonal campaign materials"],
          industry: "Food & Beverage",
          projectYear: 2023
        },
        {
          clientName: "Marcus Johnson",
          companyName: "Summit Financial",
          rating: 4,
          testimonialText: "As a financial services firm, we needed marketing materials that conveyed trust and expertise while still feeling modern. Blinks AI designed a suite of materials that perfectly balance professionalism with accessibility. Our new client brochures have significantly improved our conversion rate at consultations.",
          projectFeatures: ["Brochure design", "Service sheets", "Digital presentation deck", "Email newsletter templates"],
          industry: "Financial Services",
          projectYear: 2024
        }
      ],
      sampleImages: [
        "/images/testimonials/marketing-materials-1.jpg",
        "/images/testimonials/marketing-materials-2.jpg"
      ],
      questions: [
        "What marketing materials do you need?",
        "How will these materials be used?",
        "Do you have existing brand guidelines?",
        "What is your timeline for production?",
        "What are your marketing objectives?"
      ]
    },
    {
      name: "Magazine",
      description: "Success stories from businesses that have improved user experience with our interface designs.",
      icon: <FaLaptopCode className="text-2xl text-white" />,
      features: [
        "User interface design",
        "User experience optimization",
        "Wireframing",
        "Prototyping",
        "Design systems"
      ],
      testimonials: [
        {
          clientName: "Sarah Williams",
          companyName: "HealthTrack App",
          rating: 5,
          testimonialText: "Our health tracking app was functional but not user-friendly. Blinks AI completely redesigned the interface with a focus on simplicity and visual hierarchy. User engagement has increased by 60%, and our app store rating has improved from 3.2 to 4.8 stars.",
          projectFeatures: ["Intuitive navigation system", "Data visualization redesign", "Accessibility improvements", "Dark mode implementation"],
          industry: "Health Technology",
          projectYear: 2023
        },
        {
          clientName: "Daniel Lee",
          companyName: "E-commerce Platform",
          rating: 5,
          testimonialText: "The UI/UX redesign by Blinks AI transformed our e-commerce platform. Their data-driven approach to user experience has resulted in a 35% increase in conversion rate and a 25% reduction in cart abandonment. The clean, monochromatic design aesthetic has also strengthened our premium brand positioning.",
          projectFeatures: ["Streamlined checkout process", "Product page optimization", "Search functionality improvement", "Responsive design system"],
          industry: "E-commerce",
          projectYear: 2024
        }
      ],
      sampleImages: [
        "/images/testimonials/ui-ux-1.jpg",
        "/images/testimonials/ui-ux-2.jpg"
      ],
      questions: [
        "What platform needs UI/UX design?",
        "What user problems are you trying to solve?",
        "Do you have user research or analytics?",
        "What are your main conversion goals?",
        "Do you need a design system created?"
      ]
    }
  ]
};

// Lead Generation Testimonials
export const leadGenerationTestimonials = {
  title: "Lead Generation Testimonials",
  description: "See how our lead generation strategies have helped businesses acquire high-quality prospects.",
  icon: <FaUserPlus className="text-2xl text-white" />,
  subCategories: [
    {
      name: "Meta",
      description: "Success stories from businesses that have expanded their B2B client base.",
      icon: <FaFacebookF className="text-2xl text-white" />,
      features: [
        "Account-based marketing",
        "LinkedIn outreach",
        "Content marketing",
        "Email sequences",
        "Webinar lead generation"
      ],
      testimonials: [
        {
          clientName: "Thomas Reynolds",
          companyName: "Enterprise Solutions Inc.",
          rating: 5,
          testimonialText: "Our B2B sales team was struggling to fill their pipeline with qualified leads. Blinks AI implemented a multi-channel lead generation strategy that has transformed our business development process. We've seen a 320% increase in qualified meetings and a 45% improvement in sales cycle time.",
          projectFeatures: ["LinkedIn targeting campaign", "Gated content strategy", "Email nurture sequence", "CRM integration"],
          industry: "Enterprise Software",
          projectYear: 2023
        },
        {
          clientName: "Priya Sharma",
          companyName: "Global Consulting Group",
          rating: 5,
          testimonialText: "As a consulting firm, we needed to generate leads with decision-makers at large enterprises. The lead generation team at Blinks AI created a sophisticated account-based marketing approach that has generated 47 qualified opportunities with Fortune 500 companies in just six months.",
          projectFeatures: ["Executive targeting", "Custom research reports", "Personalized outreach", "Webinar series"],
          industry: "Professional Services",
          projectYear: 2024
        }
      ],
      sampleImages: [
        "/images/testimonials/b2b-leads-1.jpg",
        "/images/testimonials/b2b-leads-2.jpg"
      ],
      questions: [
        "Who is your ideal B2B client?",
        "What is your current lead generation process?",
        "What is your average deal size?",
        "What is your sales cycle length?",
        "What CRM do you use?"
      ]
    },
    {
      name: "Twitter",
      description: "Success stories from businesses that have expanded their consumer customer base.",
      icon: <FaTwitter className="text-2xl text-white" />,
      features: [
        "Social media campaigns",
        "Landing page optimization",
        "Contest marketing",
        "Referral programs",
        "Lead magnets"
      ],
      testimonials: [
        {
          clientName: "Rachel Morgan",
          companyName: "Luxury Real Estate",
          rating: 5,
          testimonialText: "Our real estate business needed a consistent flow of qualified buyer leads. Blinks AI developed a lead generation system using targeted Facebook ads and optimized landing pages. We're now generating 75+ qualified leads per month at a 60% lower cost per lead than our previous agency.",
          projectFeatures: ["Property showcase ads", "Neighborhood guide lead magnets", "Automated follow-up sequence", "Lead scoring system"],
          industry: "Real Estate",
          projectYear: 2023
        },
        {
          clientName: "Carlos Mendez",
          companyName: "Fitness Revolution",
          rating: 4,
          testimonialText: "As a fitness studio owner, I was spending too much on leads that weren't converting. The team at Blinks AI redesigned our lead generation approach with highly targeted Instagram campaigns and a free trial offer. Our cost per acquisition dropped by 40% while conversion to paid membership increased by 35%.",
          projectFeatures: ["Before/after showcase campaigns", "Free trial landing page", "SMS follow-up system", "Referral program"],
          industry: "Fitness",
          projectYear: 2024
        }
      ],
      sampleImages: [
        "/images/testimonials/b2c-leads-1.jpg",
        "/images/testimonials/b2c-leads-2.jpg"
      ],
      questions: [
        "Who is your target consumer?",
        "What is your current cost per lead?",
        "What channels are you currently using?",
        "What is your lead-to-customer conversion rate?",
        "What offers convert best for your business?"
      ]
    },
    {
      name: "Google",
      description: "Success stories from businesses that have streamlined their lead nurturing with automation.",
      icon: <FaGoogle className="text-2xl text-white" />,
      features: [
        "Lead scoring",
        "Automated sequences",
        "CRM integration",
        "Behavioral triggers",
        "Analytics and reporting"
      ],
      testimonials: [
        {
          clientName: "Jennifer Wu",
          companyName: "SaaS Platform",
          rating: 5,
          testimonialText: "Our marketing team was manually handling lead follow-up, which was inefficient and inconsistent. Blinks AI implemented a comprehensive marketing automation system that has increased our lead-to-demo conversion by 85% while saving our team 30+ hours per week on manual tasks.",
          projectFeatures: ["Behavioral lead scoring", "Multi-touch nurture sequences", "Sales handoff automation", "Performance dashboard"],
          industry: "Software",
          projectYear: 2023
        },
        {
          clientName: "Mark Thompson",
          companyName: "Professional Training Academy",
          rating: 5,
          testimonialText: "We were losing potential students due to inconsistent follow-up. The marketing automation system built by Blinks AI has transformed our enrollment process. Our conversion from inquiry to enrollment has increased by 60%, and our team can now focus on curriculum development instead of manual follow-ups.",
          projectFeatures: ["Interest-based segmentation", "Educational content sequences", "Application process automation", "Enrollment prediction modeling"],
          industry: "Education",
          projectYear: 2024
        }
      ],
      sampleImages: [
        "/images/testimonials/automation-1.jpg",
        "/images/testimonials/automation-2.jpg"
      ],
      questions: [
        "What marketing processes do you want to automate?",
        "What marketing tools are you currently using?",
        "How do you currently segment your leads?",
        "What are your key conversion points?",
        "What metrics are most important to your business?"
      ]
    },
    {
      name: "LinkedIn",
      description: "Success stories from businesses that have streamlined their lead nurturing with automation.",
      icon: <FaLinkedinIn className="text-2xl text-white" />,
      features: [
        "Lead scoring",
        "Automated sequences",
        "CRM integration",
        "Behavioral triggers",
        "Analytics and reporting"
      ],
      testimonials: [
        {
          clientName: "Jennifer Wu",
          companyName: "SaaS Platform",
          rating: 5,
          testimonialText: "Our marketing team was manually handling lead follow-up, which was inefficient and inconsistent. Blinks AI implemented a comprehensive marketing automation system that has increased our lead-to-demo conversion by 85% while saving our team 30+ hours per week on manual tasks.",
          projectFeatures: ["Behavioral lead scoring", "Multi-touch nurture sequences", "Sales handoff automation", "Performance dashboard"],
          industry: "Software",
          projectYear: 2023
        },
        {
          clientName: "Mark Thompson",
          companyName: "Professional Training Academy",
          rating: 5,
          testimonialText: "We were losing potential students due to inconsistent follow-up. The marketing automation system built by Blinks AI has transformed our enrollment process. Our conversion from inquiry to enrollment has increased by 60%, and our team can now focus on curriculum development instead of manual follow-ups.",
          projectFeatures: ["Interest-based segmentation", "Educational content sequences", "Application process automation", "Enrollment prediction modeling"],
          industry: "Education",
          projectYear: 2024
        }
      ],
      sampleImages: [
        "/images/testimonials/automation-1.jpg",
        "/images/testimonials/automation-2.jpg"
      ],
      questions: [
        "What marketing processes do you want to automate?",
        "What marketing tools are you currently using?",
        "How do you currently segment your leads?",
        "What are your key conversion points?",
        "What metrics are most important to your business?"
      ]
    }
  ]
};

// Social Media Management Testimonials
export const socialMediaTestimonials = {
  title: "Social Media Management Testimonials",
  description: "See how our social media management has helped businesses build their online presence and engage their audience.",
  icon: <FaShareAlt className="text-2xl text-white" />,
  subCategories: [
    {
      name: "Meta",
      description: "Success stories from businesses that have elevated their social media content.",
      icon: <FaFacebookF className="text-2xl text-white" />,
      features: [
        "Content calendar development",
        "Brand voice consistency",
        "Visual content creation",
        "Trend adaptation",
        "Audience engagement strategy"
      ],
      testimonials: [
        {
          clientName: "Sophia Martinez",
          companyName: "Boutique Clothing Brand",
          rating: 5,
          testimonialText: "Our social media presence was inconsistent and lacked a cohesive strategy. Blinks AI transformed our approach with a content calendar that perfectly balances product showcases, lifestyle content, and customer features. Our engagement has increased by 215% and we've seen a direct correlation with online sales.",
          projectFeatures: ["Monochromatic visual theme", "User-generated content strategy", "Seasonal campaign planning", "Influencer collaboration framework"],
          industry: "Fashion",
          projectYear: 2023
        },
        {
          clientName: "James Wilson",
          companyName: "Artisan Coffee Roasters",
          rating: 5,
          testimonialText: "As a small coffee business, we struggled to maintain an engaging social media presence. The team at Blinks AI created a content strategy that showcases our process, products, and people in an authentic way. Our following has grown by 340% in eight months, and we've seen a 65% increase in cafe foot traffic.",
          projectFeatures: ["Behind-the-scenes content series", "Educational coffee posts", "Customer spotlight features", "Local event promotion"],
          industry: "Food & Beverage",
          projectYear: 2024
        }
      ],
      sampleImages: [
        "/images/testimonials/social-content-1.jpg",
        "/images/testimonials/social-content-2.jpg"
      ],
      questions: [
        "Which social platforms are most important to you?",
        "What are your current content challenges?",
        "Who is your target audience on social media?",
        "What are your social media goals?",
        "Do you have brand guidelines for social content?"
      ]
    },
    {
      name: "Twitter",
      description: "Success stories from businesses that have built engaged online communities.",
      icon: <FaTwitter className="text-2xl text-white" />,
      features: [
        "Engagement monitoring",
        "Comment management",
        "Message response",
        "Community building",
        "Crisis management"
      ],
      testimonials: [
        {
          clientName: "Emily Chen",
          companyName: "Wellness Community",
          rating: 5,
          testimonialText: "Our social media accounts were growing, but we weren't effectively engaging with our community. Blinks AI implemented a comprehensive community management strategy that has transformed our relationship with followers. Our comment response time is now under 2 hours, and we've seen a 95% increase in user-generated content.",
          projectFeatures: ["Response templates", "Engagement calendar", "User highlight program", "Community challenge series"],
          industry: "Health & Wellness",
          projectYear: 2023
        },
        {
          clientName: "Robert Jackson",
          companyName: "Tech Gadget Brand",
          rating: 4,
          testimonialText: "We experienced a product issue that was generating negative comments across our social channels. The community management team at Blinks AI implemented a crisis response strategy that addressed concerns transparently while highlighting our commitment to customer satisfaction. They turned a potential PR disaster into a showcase of our customer service.",
          projectFeatures: ["Crisis response protocol", "Sentiment monitoring", "Proactive outreach", "Customer advocacy program"],
          industry: "Consumer Technology",
          projectYear: 2024
        }
      ],
      sampleImages: [
        "/images/testimonials/community-1.jpg",
        "/images/testimonials/community-2.jpg"
      ],
      questions: [
        "How are you currently managing engagement?",
        "What is your response time to comments/messages?",
        "Have you experienced any social media crises?",
        "What tone do you want to maintain in interactions?",
        "Do you have community guidelines?"
      ]
    },
    {
      name: "Youtube",
      description: "Success stories from businesses that have achieved ROI through paid social media.",
      icon: <FaYoutube className="text-2xl text-white" />,
      features: [
        "Campaign strategy",
        "Audience targeting",
        "Creative development",
        "A/B testing",
        "Performance optimization"
      ],
      testimonials: [
        {
          clientName: "Michael Roberts",
          companyName: "Online Course Platform",
          rating: 5,
          testimonialText: "Our previous paid social efforts were generating leads at an unsustainable cost. Blinks AI revamped our approach with highly targeted campaigns and compelling creative that speaks directly to our audience segments. Our cost per lead decreased by 68% while conversion quality improved by 40%.",
          projectFeatures: ["Custom audience development", "Video testimonial ads", "Multi-variant testing", "Funnel-specific creative"],
          industry: "Education",
          projectYear: 2023
        },
        {
          clientName: "Lisa Thompson",
          companyName: "Subscription Box Service",
          rating: 5,
          testimonialText: "We needed to scale our customer acquisition through paid social. The team at Blinks AI developed a sophisticated campaign strategy that leverages our unboxing experience and customer testimonials. We've achieved a 3.8x return on ad spend and reduced our customer acquisition cost by 45%.",
          projectFeatures: ["Unboxing video series", "Lookalike audience targeting", "Retention-focused remarketing", "Seasonal promotion strategy"],
          industry: "E-commerce",
          projectYear: 2024
        }
      ],
      sampleImages: [
        "/images/testimonials/paid-social-1.jpg",
        "/images/testimonials/paid-social-2.jpg"
      ],
      questions: [
        "What is your current ad spend on social media?",
        "What is your target cost per acquisition?",
        "Which platforms have performed best for you?",
        "What creative assets do you have available?",
        "What are your campaign objectives?"
      ]
    },
    {
      name: "LinkedIn",
      description: "Success stories from businesses that have achieved ROI through paid social media.",
      icon: <FaLinkedinIn className="text-2xl text-white" />,
      features: [
        "Campaign strategy",
        "Audience targeting",
        "Creative development",
        "A/B testing",
        "Performance optimization"
      ],
      testimonials: [
        {
          clientName: "Michael Roberts",
          companyName: "Online Course Platform",
          rating: 5,
          testimonialText: "Our previous paid social efforts were generating leads at an unsustainable cost. Blinks AI revamped our approach with highly targeted campaigns and compelling creative that speaks directly to our audience segments. Our cost per lead decreased by 68% while conversion quality improved by 40%.",
          projectFeatures: ["Custom audience development", "Video testimonial ads", "Multi-variant testing", "Funnel-specific creative"],
          industry: "Education",
          projectYear: 2023
        },
        {
          clientName: "Lisa Thompson",
          companyName: "Subscription Box Service",
          rating: 5,
          testimonialText: "We needed to scale our customer acquisition through paid social. The team at Blinks AI developed a sophisticated campaign strategy that leverages our unboxing experience and customer testimonials. We've achieved a 3.8x return on ad spend and reduced our customer acquisition cost by 45%.",
          projectFeatures: ["Unboxing video series", "Lookalike audience targeting", "Retention-focused remarketing", "Seasonal promotion strategy"],
          industry: "E-commerce",
          projectYear: 2024
        }
      ],
      sampleImages: [
        "/images/testimonials/paid-social-1.jpg",
        "/images/testimonials/paid-social-2.jpg"
      ],
      questions: [
        "What is your current ad spend on social media?",
        "What is your target cost per acquisition?",
        "Which platforms have performed best for you?",
        "What creative assets do you have available?",
        "What are your campaign objectives?"
      ]
    },
    {
      name: "B2B Marketing",
      description: "Success stories from businesses that have achieved ROI through paid social media.",
      icon: <FaAd className="text-2xl text-white" />,
      features: [
        "Campaign strategy",
        "Audience targeting",
        "Creative development",
        "A/B testing",
        "Performance optimization"
      ],
      testimonials: [
        {
          clientName: "Michael Roberts",
          companyName: "Online Course Platform",
          rating: 5,
          testimonialText: "Our previous paid social efforts were generating leads at an unsustainable cost. Blinks AI revamped our approach with highly targeted campaigns and compelling creative that speaks directly to our audience segments. Our cost per lead decreased by 68% while conversion quality improved by 40%.",
          projectFeatures: ["Custom audience development", "Video testimonial ads", "Multi-variant testing", "Funnel-specific creative"],
          industry: "Education",
          projectYear: 2023
        },
        {
          clientName: "Lisa Thompson",
          companyName: "Subscription Box Service",
          rating: 5,
          testimonialText: "We needed to scale our customer acquisition through paid social. The team at Blinks AI developed a sophisticated campaign strategy that leverages our unboxing experience and customer testimonials. We've achieved a 3.8x return on ad spend and reduced our customer acquisition cost by 45%.",
          projectFeatures: ["Unboxing video series", "Lookalike audience targeting", "Retention-focused remarketing", "Seasonal promotion strategy"],
          industry: "E-commerce",
          projectYear: 2024
        }
      ],
      sampleImages: [
        "/images/testimonials/paid-social-1.jpg",
        "/images/testimonials/paid-social-2.jpg"
      ],
      questions: [
        "What is your current ad spend on social media?",
        "What is your target cost per acquisition?",
        "Which platforms have performed best for you?",
        "What creative assets do you have available?",
        "What are your campaign objectives?"
      ]
    }
  ]
};

// Helper function to get testimonial data by name
export const getTestimonialByName = (name) => {
  const allTestimonials = {
    "Web Development": webDevelopmentTestimonials,
    "App Development": appDevelopmentTestimonials,
    "Custom Software": customSoftwareTestimonials,
    "YouTube Video Editing": youtubeVideoEditingTestimonials,
    "Reels-Shorts Editing": reelsEditingTestimonials,
    "SEO Services": seoTestimonials,
    "Copywriting": copywritingTestimonials,
    "Graphic Design": graphicDesignTestimonials,
    "Lead Generation": leadGenerationTestimonials,
    "Digital Marketing": digitalMarketingTestimonials,
    "Video Production": videoProductionTestimonials,
    "Social Media Management": socialMediaTestimonials
  };
  
  return allTestimonials[name] || null;
};

// Helper function to get all main testimonial categories
export const getAllTestimonialCategories = () => {
  return [
    {
      name: "Web Development",
      description: "Success stories from our web development clients.",
      icon: <FaLaptopCode className="text-2xl text-white" />,
      data: webDevelopmentTestimonials
    },
    {
      name: "App Development",
      description: "Testimonials from our mobile app development clients.",
      icon: <FaMobileAlt className="text-2xl text-white" />,
      data: appDevelopmentTestimonials
    },
    {
      name: "Custom Software",
      description: "Success stories from clients with custom software solutions.",
      icon: <FaServer className="text-2xl text-white" />,
      data: customSoftwareTestimonials
    },
    {
      name: "YouTube Video Editing",
      description: "Feedback from content creators using our YouTube editing services.",
      icon: <FaYoutube className="text-2xl text-white" />,
      data: youtubeVideoEditingTestimonials
    },
    {
      name: "Reels-Shorts Editing",
      description: "Success stories from short-form video content creators.",
      icon: <FaFilm className="text-2xl text-white" />,
      data: reelsEditingTestimonials
    },
    {
      name: "SEO Services",
      description: "Results and success stories from our SEO clients.",
      icon: <FaChartLine className="text-2xl text-white" />,
      data: seoTestimonials
    },
    {
      name: "Copywriting",
      description: "Success stories from clients who have improved engagement with our copywriting.",
      icon: <FaFileAlt className="text-2xl text-white" />,
      data: copywritingTestimonials
    },
    {
      name: "Graphic Design",
      description: "Testimonials from clients who have elevated their visual brand identity.",
      icon: <FaPaintBrush className="text-2xl text-white" />,
      data: graphicDesignTestimonials
    },
    {
      name: "Lead Generation",
      description: "Success stories from clients who have increased quality leads and conversions.",
      icon: <FaUserPlus className="text-2xl text-white" />,
      data: leadGenerationTestimonials
    },
    {
      name: "Digital Marketing",
      description: "Results and feedback from our digital marketing clients.",
      icon: <FaBullhorn className="text-2xl text-white" />,
      data: digitalMarketingTestimonials
    },
    {
      name: "Video Production",
      description: "What clients say about our video production services.",
      icon: <FaYoutube className="text-2xl text-white" />,
      data: videoProductionTestimonials
    },
    {
      name: "Social Media Management",
      description: "Success stories from businesses that have improved their social media presence.",
      icon: <FaShareAlt className="text-2xl text-white" />,
      data: socialMediaTestimonials
    }
  ];
};

// Reels-Shorts Editing Testimonials
export const reelsEditingTestimonials = {
  title: "Reels-Shorts Editing Testimonials",
  description: "See how our short-form video editing has helped creators and brands go viral.",
  icon: <FaFilm className="text-2xl text-white" />,
  subCategories: [
    {
      name: "Instagram Reels",
      description: "Success stories from creators and brands that have grown their Instagram presence.",
      icon: <FaImage className="text-2xl text-white" />,
      features: [
        "Trend optimization",
        "Music selection",
        "Visual effects",
        "Text overlay design",
        "Engagement hooks"
      ],
      testimonials: [
        {
          clientName: "Zoe Taylor",
          companyName: "Fashion Forward",
          rating: 5,
          testimonialText: "Blinks AI transformed our Instagram strategy with their Reels editing. One of our product showcase Reels reached 2.3 million views and directly led to our product selling out within 48 hours. Their understanding of what makes content go viral is unmatched.",
          projectFeatures: ["Trend integration", "Product showcases", "Call-to-action optimization", "Brand consistency"],
          industry: "Fashion",
          projectYear: 2024
        },
        {
          clientName: "Carlos Mendez",
          companyName: "Travel Adventures",
          rating: 5,
          testimonialText: "As a travel content creator, I need to capture attention quickly. The editing team at Blinks AI has mastered the art of creating stunning Reels that showcase destinations in just 30 seconds. My follower count has grown by 200K in just 6 months.",
          projectFeatures: ["Location highlights", "Transition effects", "Cinematic color grading", "Engagement-optimized captions"],
          industry: "Travel & Tourism",
          projectYear: 2023
        }
      ],
      sampleImages: [
        "/images/testimonials/reels-1.jpg",
        "/images/testimonials/reels-2.jpg"
      ],
      questions: [
        "What is your Instagram niche?",
        "Do you want to incorporate trending sounds?",
        "What are your growth goals?",
        "Do you have brand guidelines to follow?",
        "How many Reels do you need per week?"
      ]
    },
    {
      name: "TikTok Content",
      description: "Testimonials from creators who have built successful TikTok presences with our editing.",
      icon: <FaHashtag className="text-2xl text-white" />,
      features: [
        "Trend research",
        "Viral hook creation",
        "Sound synchronization",
        "Effect application",
        "Hashtag strategy"
      ],
      testimonials: [
        {
          clientName: "Lily Chen",
          companyName: "Dance Studio",
          rating: 5,
          testimonialText: "Blinks AI's editing team understands TikTok's algorithm perfectly. They've helped me optimize my dance content with perfect sound synchronization and transitions. I've gained over 1 million followers in a year and secured multiple brand partnerships.",
          projectFeatures: ["Beat-perfect editing", "Transition choreography", "Multi-angle synchronization", "Trending sound integration"],
          industry: "Dance & Entertainment",
          projectYear: 2023
        },
        {
          clientName: "Marcus Wilson",
          companyName: "Quick Tips",
          rating: 5,
          testimonialText: "My educational TikTok account needed to deliver valuable information in an engaging, quick format. The editing team at Blinks AI mastered this balance, helping me grow to 500K followers. My content now regularly appears on the For You Page with millions of views.",
          projectFeatures: ["Information visualization", "Text timing optimization", "Hook creation", "Call-to-action optimization"],
          industry: "Education",
          projectYear: 2024
        }
      ],
      sampleImages: [
        "/images/testimonials/tiktok-1.jpg",
        "/images/testimonials/tiktok-2.jpg"
      ],
      questions: [
        "What type of TikTok content do you create?",
        "Are you looking to follow trends or create original content?",
        "What is your current follower count?",
        "Do you need help with hashtag strategy?",
        "How many videos do you post weekly?"
      ]
    },
    {
      name: "YouTube Shorts",
      description: "Success stories from creators who have expanded their reach with YouTube Shorts.",
      icon: <FaYoutube className="text-2xl text-white" />,
      features: [
        "Vertical optimization",
        "Quick-paced editing",
        "Channel consistency",
        "Subscription drivers",
        "Long-form content teasers"
      ],
      testimonials: [
        {
          clientName: "Jason Park",
          companyName: "Tech Minute",
          rating: 5,
          testimonialText: "Blinks AI helped me create a YouTube Shorts strategy that complements my long-form content. Their editing approach has led to a 300% increase in channel subscribers, with many Shorts viewers converting to my main channel content.",
          projectFeatures: ["Product highlight clips", "Tutorial snippets", "News summaries", "Channel branding consistency"],
          industry: "Technology",
          projectYear: 2024
        },
        {
          clientName: "Emma Johnson",
          companyName: "Fitness Journey",
          rating: 4,
          testimonialText: "Converting my workout content to the Shorts format was challenging until I partnered with Blinks AI. Their editing team created high-energy, engaging Shorts that have consistently reached 1M+ views and driven significant growth to my fitness app subscriptions.",
          projectFeatures: ["Exercise demonstrations", "Before/after transformations", "Quick tips", "App feature highlights"],
          industry: "Fitness",
          projectYear: 2023
        }
      ],
      sampleImages: [
        "/images/testimonials/shorts-1.jpg",
        "/images/testimonials/shorts-2.jpg"
      ],
      questions: [
        "Do you have existing YouTube content?",
        "What is your Shorts content strategy?",
        "How does this fit with your main channel?",
        "What call-to-action do you want to include?",
        "How frequently do you want to post Shorts?"
      ]
    }
  ]
};

// Copywriting Testimonials
export const copywritingTestimonials = {
  title: "Copywriting Testimonials",
  description: "See how our copywriting services have helped businesses engage their audience and drive conversions.",
  icon: <FaFileAlt className="text-2xl text-white" />,
  subCategories: [
    {
      name: "Website Copy",
      description: "Success stories from businesses that have improved their website messaging and conversions.",
      icon: <FaLaptopCode className="text-2xl text-white" />,
      features: [
        "Value proposition development",
        "Landing page optimization",
        "Service/product descriptions",
        "About page storytelling",
        "Call-to-action optimization"
      ],
      testimonials: [
        {
          clientName: "Andrew Mitchell",
          companyName: "Innovate Financial Solutions",
          rating: 5,
          testimonialText: "Our financial services website was filled with jargon that confused potential clients. Blinks AI rewrote our entire website with clear, compelling copy that explains complex concepts in accessible language. Our contact form submissions increased by 65% within the first month.",
          projectFeatures: ["Jargon-free explanations", "Trust-building elements", "Clear service descriptions", "Conversion-focused CTAs"],
          industry: "Financial Services",
          projectYear: 2023
        },
        {
          clientName: "Elena Rodriguez",
          companyName: "Wellness Collective",
          rating: 5,
          testimonialText: "The copy on our wellness center website needed to balance professionalism with approachability. The team at Blinks AI crafted website content that perfectly captures our brand voice while clearly communicating our services. New client bookings have increased by 40% since the rewrite.",
          projectFeatures: ["Brand voice development", "Service differentiation", "Testimonial integration", "FAQ section optimization"],
          industry: "Health & Wellness",
          projectYear: 2024
        }
      ],
      sampleImages: [
        "/images/testimonials/website-copy-1.jpg",
        "/images/testimonials/website-copy-2.jpg"
      ],
      questions: [
        "What are your main business objectives?",
        "Who is your target audience?",
        "What is your brand voice?",
        "What pages need copywriting?",
        "What are your main conversion goals?"
      ]
    },
    {
      name: "Email Marketing",
      description: "Success stories from businesses that have improved their email engagement and conversions.",
      icon: <FaFileAlt className="text-2xl text-white" />,
      features: [
        "Campaign strategy",
        "Subject line optimization",
        "Sequence development",
        "Personalization",
        "A/B testing"
      ],
      testimonials: [
        {
          clientName: "Jessica Thompson",
          companyName: "Fashion Boutique",
          rating: 5,
          testimonialText: "Our email marketing was generating minimal sales despite having a good-sized list. Blinks AI revamped our email strategy with compelling copy and strategic sequences. Our open rates increased from 12% to 28%, and email-driven sales have grown by 85% in just three months.",
          projectFeatures: ["Seasonal campaign strategy", "Abandoned cart sequence", "VIP customer nurturing", "Product launch emails"],
          industry: "Retail",
          projectYear: 2023
        },
        {
          clientName: "Michael Chen",
          companyName: "SaaS Platform",
          rating: 4,
          testimonialText: "We needed to improve our onboarding email sequence to reduce churn. The copywriting team at Blinks AI created a value-focused email series that guides new users through our platform features. This has increased our user activation rate by 35% and reduced 30-day churn by 20%.",
          projectFeatures: ["User onboarding sequence", "Feature highlight emails", "Success story spotlights", "Re-engagement campaigns"],
          industry: "Software",
          projectYear: 2024
        }
      ],
      sampleImages: [
        "/images/testimonials/email-1.jpg",
        "/images/testimonials/email-2.jpg"
      ],
      questions: [
        "What is the size of your email list?",
        "What are your current open and click rates?",
        "What types of email campaigns do you need?",
        "Do you have an email marketing platform?",
        "What are your email marketing goals?"
      ]
    },
    {
      name: "Blog Content",
      description: "Success stories from businesses that have established thought leadership through blog content.",
      icon: <FaNewspaper className="text-2xl text-white" />,
      features: [
        "Topic research",
        "SEO optimization",
        "Industry expertise",
        "Engaging storytelling",
        "Call-to-action integration"
      ],
      testimonials: [
        {
          clientName: "David Wilson",
          companyName: "Tech Solutions Inc.",
          rating: 5,
          testimonialText: "Our blog was inconsistent and generating minimal traffic. Blinks AI developed a comprehensive content strategy and began producing in-depth, SEO-optimized articles. Our organic traffic has increased by 210% in six months, and the blog now generates 40% of our qualified leads.",
          projectFeatures: ["Keyword-focused articles", "Industry trend analysis", "Tutorial content", "Thought leadership pieces"],
          industry: "Technology",
          projectYear: 2023
        },
        {
          clientName: "Sarah Johnson",
          companyName: "Health Innovations",
          rating: 5,
          testimonialText: "In the healthcare industry, establishing credibility is crucial. The blog content created by Blinks AI has positioned us as experts in our field. Our articles are now regularly cited by industry publications, and we've seen a 75% increase in consultation requests directly attributed to blog content.",
          projectFeatures: ["Research-backed articles", "Expert interviews", "Case studies", "Educational content series"],
          industry: "Healthcare",
          projectYear: 2024
        }
      ],
      sampleImages: [
        "/images/testimonials/blog-1.jpg",
        "/images/testimonials/blog-2.jpg"
      ],
      questions: [
        "What topics do you want to cover?",
        "Who is your target reader?",
        "What is your current blog traffic?",
        "What are your content marketing goals?",
        "How frequently do you want to publish?"
      ]
    }
  ]
};
