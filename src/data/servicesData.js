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
  FaRobot,
  FaVideo,
  FaSearch,
  FaUsers
} from 'react-icons/fa';

// Development Services
export const webDevelopmentServices = {
  title: "Web Development",
  description: "Custom web solutions built with modern technologies to meet your business needs.",
  icon: <FaLaptopCode className="text-2xl text-white" />,
  subCategories: [
    {
      name: "E-commerce",
      description: "Powerful online stores with secure payment gateways, inventory management, and customer analytics.",
      icon: <FaShoppingCart className="text-2xl text-white" />,
      features: [
        "Secure payment processing",
        "Inventory management",
        "Customer account portals",
        "Product search and filtering",
        "Mobile-responsive design"
      ],
      sampleImages: [
        "https://cdn.pixabay.com/photo/2024/04/01/13/21/ai-generated-8668923_1280.jpg",
        "https://cdn.pixabay.com/photo/2023/08/18/08/05/woman-8198027_1280.jpg"
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
      description: "Learning platforms and educational websites with course management, student tracking, and interactive content.",
      icon: <FaGraduationCap className="text-2xl text-white" />,
      features: [
        "Course management system",
        "Student progress tracking",
        "Interactive quizzes and assessments",
        "Content library organization",
        "Certificate generation"
      ],
      sampleImages: [
        "https://cdn.pixabay.com/photo/2023/08/18/08/05/woman-8198027_1280.jpg",
        "https://cdn.pixabay.com/photo/2024/04/01/13/21/ai-generated-8668923_1280.jpg"
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
      name: "LMS (Learning Management System)",
      description: "Comprehensive learning management systems for schools, universities, or corporate training.",
      icon: <FaBook className="text-2xl text-white" />,
      features: [
        "User role management",
        "Course creation tools",
        "Assignment submission",
        "Discussion forums",
        "Analytics dashboard"
      ],
      sampleImages: [
        "https://cdn.pixabay.com/photo/2023/08/18/08/05/woman-8198027_1280.jpg",
        "https://cdn.pixabay.com/photo/2024/04/01/13/21/ai-generated-8668923_1280.jpg"
      ],
      questions: [
        "What is the primary purpose of your LMS?",
        "How many users do you expect?",
        "What types of content will you host?",
        "Do you need integration with other systems?",
        "What reporting capabilities do you require?"
      ]
    }
  ]
};

export const appDevelopmentServices = {
  title: "App Development",
  description: "Native and cross-platform mobile applications for iOS and Android.",
  icon: <FaMobileAlt className="text-2xl text-white" />,
  subCategories: [
    {
      name: "iOS Apps",
      description: "Native iOS applications built for iPhone and iPad with Swift.",
      icon: <FaMobileAlt className="text-2xl text-white" />,
      features: [
        "Native iOS performance",
        "Apple design guidelines compliance",
        "Push notifications",
        "In-app purchases",
        "App Store optimization"
      ],
      sampleImages: [
        "https://cdn.pixabay.com/photo/2023/08/18/08/05/woman-8198027_1280.jpg",
        "https://cdn.pixabay.com/photo/2024/04/01/13/21/ai-generated-8668923_1280.jpg"
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
      description: "Native Android applications built with Kotlin or Java.",
      icon: <FaMobileAlt className="text-2xl text-white" />,
      features: [
        "Native Android performance",
        "Material Design implementation",
        "Google Play integration",
        "Background services",
        "Device compatibility"
      ],
      sampleImages: [
        "/images/services/android-1.jpg",
        "/images/services/android-2.jpg"
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
      description: "Build once, deploy everywhere with React Native or Flutter.",
      icon: <FaMobileAlt className="text-2xl text-white" />,
      features: [
        "Single codebase for iOS and Android",
        "Faster development time",
        "Native-like performance",
        "Code reusability",
        "Easier maintenance"
      ],
      sampleImages: [
        "/images/services/cross-platform-1.jpg",
        "/images/services/cross-platform-2.jpg"
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

export const customSoftwareServices = {
  title: "Custom Software",
  description: "Tailored software solutions for your unique business challenges.",
  icon: <FaServer className="text-2xl text-white" />,
  subCategories: [
    {
      name: "Enterprise Solutions",
      description: "Comprehensive software systems for large organizations with complex needs.",
      icon: <FaServer className="text-2xl text-white" />,
      features: [
        "Scalable architecture",
        "Integration with existing systems",
        "Role-based access control",
        "Custom reporting",
        "High availability design"
      ],
      sampleImages: [
        "/images/services/enterprise-1.jpg",
        "/images/services/enterprise-2.jpg"
      ],
      questions: [
        "What business processes need automation?",
        "How many users will access the system?",
        "What existing systems need integration?",
        "What are your security requirements?",
        "Do you need cloud or on-premises deployment?"
      ]
    },
    {
      name: "SaaS Applications",
      description: "Cloud-based software-as-a-service applications with subscription models.",
      icon: <FaServer className="text-2xl text-white" />,
      features: [
        "Multi-tenant architecture",
        "Subscription management",
        "Usage analytics",
        "Automated scaling",
        "Regular updates and maintenance"
      ],
      sampleImages: [
        "/images/services/saas-1.jpg",
        "/images/services/saas-2.jpg"
      ],
      questions: [
        "What problem does your SaaS solve?",
        "Who is your target customer?",
        "What pricing model do you envision?",
        "Do you need white-labeling capabilities?",
        "What level of customization should users have?"
      ]
    },
    {
      name: "API Development",
      description: "Custom API development for system integration and data exchange.",
      icon: <FaCode className="text-2xl text-white" />,
      features: [
        "RESTful or GraphQL APIs",
        "Authentication and authorization",
        "Rate limiting and throttling",
        "Comprehensive documentation",
        "Versioning support"
      ],
      sampleImages: [
        "/images/services/api-1.jpg",
        "/images/services/api-2.jpg"
      ],
      questions: [
        "What systems need to be integrated?",
        "What data needs to be exchanged?",
        "What are your performance requirements?",
        "Do you need public or private APIs?",
        "What authentication method do you prefer?"
      ]
    }
  ]
};

// Video Editing Services
export const youtubeVideoEditingServices = {
  title: "YouTube Video Editing",
  description: "Professional editing services for YouTube content creators.",
  icon: <FaYoutube className="text-2xl text-white" />,
  subCategories: [
    {
      name: "Basics",
      description: "Essential editing for YouTube videos including cuts, transitions, and basic effects.",
      icon: <FaYoutube className="text-2xl text-white" />,
      features: [
        "Clean cuts and transitions",
        "Basic color correction",
        "Audio enhancement",
        "Intro and outro creation",
        "Thumbnail design"
      ],
      sampleImages: [
        "/images/services/youtube-basic-1.jpg",
        "/images/services/youtube-basic-2.jpg"
      ],
      questions: [
        "What type of content do you create?",
        "What is your average video length?",
        "Do you have a specific style guide?",
        "Do you need custom intro/outro?",
        "What is your publishing frequency?"
      ]
    },
    {
      name: "PIP (Picture-in-Picture)",
      description: "Advanced editing with picture-in-picture effects for reaction videos and tutorials.",
      icon: <FaYoutube className="text-2xl text-white" />,
      features: [
        "Multi-camera setup",
        "Dynamic PIP placement",
        "Green screen removal",
        "Custom PIP animations",
        "Screen recording integration"
      ],
      sampleImages: [
        "/images/services/youtube-pip-1.jpg",
        "/images/services/youtube-pip-2.jpg"
      ],
      questions: [
        "What type of PIP content do you create?",
        "Do you need green screen keying?",
        "How many video sources do you typically use?",
        "Do you need custom PIP animations?",
        "What is your recording setup?"
      ]
    },
    {
      name: "Motion Graphics",
      description: "Eye-catching motion graphics and animations for engaging YouTube content.",
      icon: <FaYoutube className="text-2xl text-white" />,
      features: [
        "Custom animated graphics",
        "Lower thirds and titles",
        "Animated logos",
        "Data visualization",
        "Animated transitions"
      ],
      sampleImages: [
        "/images/services/youtube-motion-1.jpg",
        "/images/services/youtube-motion-2.jpg"
      ],
      questions: [
        "What style of motion graphics do you prefer?",
        "Do you have brand guidelines to follow?",
        "What type of animations do you need?",
        "Do you need data visualization?",
        "What is your target audience?"
      ]
    }
  ]
};

export const reelsEditingServices = {
  title: "Reels-Shorts Editing",
  description: "Specialized editing for short-form vertical video content.",
  icon: <FaFilm className="text-2xl text-white" />,
  subCategories: [
    {
      name: "Basics",
      description: "Essential editing for short-form content with quick cuts and engaging pacing.",
      icon: <FaFilm className="text-2xl text-white" />,
      features: [
        "Fast-paced editing",
        "Vertical video optimization",
        "Music synchronization",
        "Text overlays",
        "Trend-based templates"
      ],
      sampleImages: [
        "/images/services/reels-basic-1.jpg",
        "/images/services/reels-basic-2.jpg"
      ],
      questions: [
        "What platforms do you publish shorts on?",
        "What type of content do you create?",
        "Do you need trending audio integration?",
        "What is your target audience?",
        "How many shorts do you publish weekly?"
      ]
    },
    {
      name: "PIP (Picture-in-Picture)",
      description: "Advanced PIP effects for reaction shorts and tutorial reels.",
      icon: <FaFilm className="text-2xl text-white" />,
      features: [
        "Dynamic PIP layouts",
        "Green screen effects",
        "Reaction framing",
        "Multi-clip composition",
        "Vertical format optimization"
      ],
      sampleImages: [
        "/images/services/reels-pip-1.jpg",
        "/images/services/reels-pip-2.jpg"
      ],
      questions: [
        "What type of PIP content do you create?",
        "Do you need green screen effects?",
        "How many video sources do you typically use?",
        "What platforms are you targeting?",
        "Do you have specific layout preferences?"
      ]
    },
    {
      name: "Motion Graphics",
      description: "Eye-catching motion graphics for stand-out short-form content.",
      icon: <FaFilm className="text-2xl text-white" />,
      features: [
        "Animated text effects",
        "Custom stickers and emojis",
        "Animated transitions",
        "Visual effects",
        "Brand elements integration"
      ],
      sampleImages: [
        "/images/services/reels-motion-1.jpg",
        "/images/services/reels-motion-2.jpg"
      ],
      questions: [
        "What style of motion graphics do you prefer?",
        "Do you need custom animated elements?",
        "What platforms will you publish on?",
        "Do you have brand guidelines to follow?",
        "What trends do you want to incorporate?"
      ]
    }
  ]
};

// SEO Services
export const seoServices = {
  title: "SEO Services",
  description: "Comprehensive search engine optimization to improve your online visibility.",
  icon: <FaChartLine className="text-2xl text-white" />,
  subCategories: [
    {
      name: "On-Page SEO",
      description: "Optimization of website content and structure for better search engine rankings.",
      icon: <FaFileAlt className="text-2xl text-white" />,
      features: [
        "Keyword research and implementation",
        "Content optimization",
        "Meta tags optimization",
        "URL structure improvement",
        "Image optimization"
      ],
      sampleImages: [
        "/images/services/onpage-seo-1.jpg",
        "/images/services/onpage-seo-2.jpg"
      ],
      questions: [
        "What are your target keywords?",
        "What pages need optimization?",
        "Who are your competitors?",
        "What is your current search ranking?",
        "What is your content update frequency?"
      ]
    },
    {
      name: "Off-Page SEO",
      description: "Building authority through backlinks and external signals.",
      icon: <FaChartLine className="text-2xl text-white" />,
      features: [
        "Link building strategy",
        "Guest posting",
        "Social signals",
        "Brand mentions",
        "Competitor backlink analysis"
      ],
      sampleImages: [
        "/images/services/offpage-seo-1.jpg",
        "/images/services/offpage-seo-2.jpg"
      ],
      questions: [
        "What is your current backlink profile?",
        "Who are your industry authorities?",
        "What content can you offer for guest posting?",
        "What is your social media presence?",
        "What are your target publications?"
      ]
    },
    {
      name: "Local SEO",
      description: "Optimization for local search to attract nearby customers.",
      icon: <FaMapMarkerAlt className="text-2xl text-white" />,
      features: [
        "Google My Business optimization",
        "Local citation building",
        "Review management",
        "Local keyword targeting",
        "Local content creation"
      ],
      sampleImages: [
        "/images/services/local-seo-1.jpg",
        "/images/services/local-seo-2.jpg"
      ],
      questions: [
        "What locations do you serve?",
        "Is your Google My Business profile set up?",
        "What local directories are you listed in?",
        "What is your review management strategy?",
        "What local events do you participate in?"
      ]
    },
    {
      name: "Technical SEO",
      description: "Optimization of website technical aspects for better crawling and indexing.",
      icon: <FaCogs className="text-2xl text-white" />,
      features: [
        "Site speed optimization",
        "Mobile-friendliness",
        "Structured data implementation",
        "XML sitemap creation",
        "Crawl error fixing"
      ],
      sampleImages: [
        "/images/services/technical-seo-1.jpg",
        "/images/services/technical-seo-2.jpg"
      ],
      questions: [
        "What is your current site speed?",
        "Do you have mobile optimization issues?",
        "What CMS do you use?",
        "Have you implemented structured data?",
        "What technical issues have you identified?"
      ]
    }
  ]
};

// Copywriting Services
export const copywritingServices = {
  title: "Copywriting",
  description: "Compelling content that engages your audience and drives conversions.",
  icon: <FaFileAlt className="text-2xl text-white" />,
  subCategories: [
    {
      name: "SEO Copywriting",
      description: "Search engine optimized content that ranks well and converts visitors.",
      icon: <FaHashtag className="text-2xl text-white" />,
      features: [
        "Keyword research and integration",
        "Meta descriptions and title tags",
        "Readability optimization",
        "Internal linking strategy",
        "Content structured for featured snippets"
      ],
      sampleImages: [
        "/images/services/seo-copywriting-1.jpg",
        "/images/services/seo-copywriting-2.jpg"
      ],
      questions: [
        "What are your target keywords?",
        "Who is your target audience?",
        "What is the goal of your content?",
        "Do you have existing content to optimize?",
        "What is your brand voice and tone?"
      ]
    },
    {
      name: "Technical Copywriting",
      description: "Clear, accurate content for complex products, services, and industries.",
      icon: <FaCogs className="text-2xl text-white" />,
      features: [
        "Industry-specific terminology",
        "Complex concept simplification",
        "Technical documentation",
        "Product specifications",
        "Process explanations"
      ],
      sampleImages: [
        "/images/services/technical-copywriting-1.jpg",
        "/images/services/technical-copywriting-2.jpg"
      ],
      questions: [
        "What industry are you in?",
        "Who is your target audience's technical level?",
        "What technical concepts need explanation?",
        "Do you have existing technical documentation?",
        "What is the primary purpose of the content?"
      ]
    },
    {
      name: "Marketing Copywriting",
      description: "Persuasive content that drives action and boosts conversions.",
      icon: <FaBullhorn className="text-2xl text-white" />,
      features: [
        "Compelling calls-to-action",
        "Benefit-focused messaging",
        "Emotional triggers and storytelling",
        "Brand voice consistency",
        "A/B testing recommendations"
      ],
      sampleImages: [
        "/images/services/marketing-copywriting-1.jpg",
        "/images/services/marketing-copywriting-2.jpg"
      ],
      questions: [
        "What is your unique selling proposition?",
        "Who is your ideal customer?",
        "What action do you want readers to take?",
        "What are your brand guidelines?",
        "What marketing channels will this content be used for?"
      ]
    },
    {
      name: "Social Media Copywriting",
      description: "Engaging content optimized for different social platforms.",
      icon: <FaHashtag className="text-2xl text-white" />,
      features: [
        "Platform-specific content",
        "Hashtag strategy",
        "Engagement-focused messaging",
        "Community building language",
        "Trend-aware content"
      ],
      sampleImages: [
        "/images/services/social-copywriting-1.jpg",
        "/images/services/social-copywriting-2.jpg"
      ],
      questions: [
        "Which social platforms do you use?",
        "What is your engagement goal?",
        "Who is your social media audience?",
        "What content performs best currently?",
        "Do you have specific campaigns planned?"
      ]
    },
    {
      name: "B2B Copywriting",
      description: "Professional content that speaks to businesses and drives B2B leads.",
      icon: <FaFileAlt className="text-2xl text-white" />,
      features: [
        "Industry-specific expertise",
        "Decision-maker focused messaging",
        "Value proposition emphasis",
        "Technical accuracy",
        "Professional tone and style"
      ],
      sampleImages: [
        "/images/services/b2b-copywriting-1.jpg",
        "/images/services/b2b-copywriting-2.jpg"
      ],
      questions: [
        "Who are your target businesses?",
        "What is your B2B sales cycle?",
        "What pain points does your solution address?",
        "Who are the key decision-makers?",
        "What is your competitive advantage?"
      ]
    }
  ]
};

// Graphic Design Services
export const graphicDesignServices = {
  title: "Graphic Design",
  description: "Eye-catching visuals that elevate your brand and captivate your audience.",
  icon: <FaPaintBrush className="text-2xl text-white" />,
  subCategories: [
    {
      name: "Poster Design",
      description: "Attention-grabbing posters for events, marketing, and promotions.",
      icon: <FaImage className="text-2xl text-white" />,
      features: [
        "Eye-catching layouts",
        "Typography hierarchy",
        "Visual storytelling",
        "Print-ready files",
        "Digital optimization"
      ],
      sampleImages: [
        "/images/services/poster-design-1.jpg",
        "/images/services/poster-design-2.jpg"
      ],
      questions: [
        "What is the purpose of your poster?",
        "Where will it be displayed?",
        "What key information must be included?",
        "Do you have brand guidelines to follow?",
        "What action should viewers take?"
      ]
    },
    {
      name: "Logo Design",
      description: "Distinctive brand marks that represent your business identity.",
      icon: <FaPaintBrush className="text-2xl text-white" />,
      features: [
        "Unique concept development",
        "Vector scalable files",
        "Color variations",
        "Brand guidelines",
        "Multiple file formats"
      ],
      sampleImages: [
        "/images/services/logo-design-1.jpg",
        "/images/services/logo-design-2.jpg"
      ],
      questions: [
        "What does your business do?",
        "What are your brand values?",
        "Who is your target audience?",
        "Do you have color preferences?",
        "Where will your logo primarily be used?"
      ]
    },
    {
      name: "Magazine Design",
      description: "Professional layouts for magazines, catalogs, and multi-page publications.",
      icon: <FaNewspaper className="text-2xl text-white" />,
      features: [
        "Cohesive layout systems",
        "Editorial design principles",
        "Typography excellence",
        "Image selection and treatment",
        "Print production specifications"
      ],
      sampleImages: [
        "/images/services/magazine-design-1.jpg",
        "/images/services/magazine-design-2.jpg"
      ],
      questions: [
        "What is the purpose of your publication?",
        "How many pages will it contain?",
        "What is your content structure?",
        "Digital, print, or both?",
        "Do you have existing brand guidelines?"
      ]
    }
  ]
};

// Lead Generation Services
export const leadGenerationServices = {
  title: "Lead Generation",
  description: "Strategic campaigns that attract qualified prospects and convert them into leads.",
  icon: <FaChartLine className="text-2xl text-white" />,
  subCategories: [
    {
      name: "Meta Ads",
      description: "Targeted Facebook and Instagram ad campaigns to generate quality leads.",
      icon: <FaFacebookF className="text-2xl text-white" />,
      features: [
        "Custom audience targeting",
        "Conversion-optimized ad creatives",
        "A/B testing strategy",
        "Lead form integration",
        "Performance analytics"
      ],
      sampleImages: [
        "/images/services/meta-ads-1.jpg",
        "/images/services/meta-ads-2.jpg"
      ],
      questions: [
        "Who is your ideal customer?",
        "What is your cost per lead target?",
        "Do you have existing ad creative?",
        "What is your campaign budget?",
        "What is your lead qualification process?"
      ]
    },
    {
      name: "Twitter Ads",
      description: "Strategic Twitter campaigns to reach your target audience and generate leads.",
      icon: <FaTwitter className="text-2xl text-white" />,
      features: [
        "Keyword and interest targeting",
        "Engaging ad formats",
        "Follower growth strategy",
        "Lead generation cards",
        "Campaign optimization"
      ],
      sampleImages: [
        "/images/services/twitter-ads-1.jpg",
        "/images/services/twitter-ads-2.jpg"
      ],
      questions: [
        "What are your campaign objectives?",
        "Who is your Twitter audience?",
        "What messaging resonates with your audience?",
        "Do you have existing Twitter content that performs well?",
        "What is your campaign timeline?"
      ]
    },
    {
      name: "LinkedIn Ads",
      description: "Professional B2B lead generation campaigns on LinkedIn.",
      icon: <FaLinkedinIn className="text-2xl text-white" />,
      features: [
        "Professional audience targeting",
        "Industry and job title segmentation",
        "InMail campaigns",
        "Lead gen forms",
        "Content promotion"
      ],
      sampleImages: [
        "/images/services/linkedin-ads-1.jpg",
        "/images/services/linkedin-ads-2.jpg"
      ],
      questions: [
        "What industries are you targeting?",
        "What job titles make decisions about your product/service?",
        "What is your B2B value proposition?",
        "Do you have case studies or whitepapers to share?",
        "What is your cost per lead expectation?"
      ]
    },
    {
      name: "Google Ads",
      description: "Search and display campaigns that capture high-intent leads.",
      icon: <FaGoogle className="text-2xl text-white" />,
      features: [
        "Keyword research and strategy",
        "Search campaign optimization",
        "Display network targeting",
        "Landing page conversion optimization",
        "Quality score improvement"
      ],
      sampleImages: [
        "/images/services/google-ads-1.jpg",
        "/images/services/google-ads-2.jpg"
      ],
      questions: [
        "What keywords are relevant to your business?",
        "What is your geographic target area?",
        "What is your monthly ad budget?",
        "Do you have existing landing pages?",
        "What are your primary conversion goals?"
      ]
    }
  ]
};

// Social Media Management Services
export const socialMediaManagementServices = {
  title: "Social Media Management",
  description: "Comprehensive social media strategy and execution to grow your online presence.",
  icon: <FaHashtag className="text-2xl text-white" />,
  subCategories: [
    {
      name: "Meta Management",
      description: "Strategic management of Facebook and Instagram accounts to build community and drive engagement.",
      icon: <FaFacebookF className="text-2xl text-white" />,
      features: [
        "Content calendar creation",
        "Regular posting schedule",
        "Community engagement",
        "Stories and Reels creation",
        "Performance analytics"
      ],
      sampleImages: [
        "https://cdn.pixabay.com/photo/2024/04/01/13/21/ai-generated-8668923_1280.jpg",
        "/images/services/meta-management-2.jpg"
      ],
      questions: [
        "What are your social media goals?",
        "Who is your target audience on Facebook/Instagram?",
        "What type of content performs best currently?",
        "Do you have brand guidelines for social media?",
        "What is your posting frequency preference?"
      ]
    },
    {
      name: "YouTube Management",
      description: "Comprehensive YouTube channel management to grow subscribers and viewership.",
      icon: <FaYoutube className="text-2xl text-white" />,
      features: [
        "Channel optimization",
        "Video SEO",
        "Thumbnail design",
        "Community engagement",
        "Analytics and growth strategy"
      ],
      sampleImages: [
        "/images/services/youtube-management-1.jpg",
        "https://cdn.pixabay.com/photo/2024/04/01/13/21/ai-generated-8668923_1280.jpg"
      ],
      questions: [
        "What is your YouTube content strategy?",
        "How frequently do you publish videos?",
        "What are your channel growth goals?",
        "Who is your target audience?",
        "Do you need help with video production?"
      ]
    },
    {
      name: "LinkedIn Management",
      description: "Professional LinkedIn profile and company page management for B2B growth.",
      icon: <FaLinkedinIn className="text-2xl text-white" />,
      features: [
        "Professional content strategy",
        "Thought leadership positioning",
        "Network growth tactics",
        "Employee advocacy",
        "Industry engagement"
      ],
      sampleImages: [
        "/images/services/linkedin-management-1.jpg",
        "https://cdn.pixabay.com/photo/2024/04/01/13/21/ai-generated-8668923_1280.jpg"
      ],
      questions: [
        "What are your LinkedIn objectives?",
        "Who are your target connections?",
        "What industry topics are relevant to your business?",
        "Do you have team members to involve in content?",
        "What is your current LinkedIn presence?"
      ]
    },
    {
      name: "Twitter Management",
      description: "Strategic Twitter account management to increase followers and engagement.",
      icon: <FaTwitter className="text-2xl text-white" />,
      features: [
        "Daily tweet schedule",
        "Trending topic integration",
        "Hashtag strategy",
        "Community interaction",
        "Growth campaign management"
      ],
      sampleImages: [
        "/images/services/twitter-management-1.jpg",
        "https://cdn.pixabay.com/photo/2024/04/01/13/21/ai-generated-8668923_1280.jpg"
      ],
      questions: [
        "What is your Twitter voice and tone?",
        "What topics do you want to be known for?",
        "Who are your target followers?",
        "What is your engagement strategy?",
        "Do you want to participate in Twitter chats or spaces?"
      ]
    }
  ]
};

// AI Agents Services
export const aiAgentsServices = {
  title: "Custom AI Agents",
  description: "Intelligent AI agents tailored to automate and enhance your business operations.",
  icon: <FaRobot className="text-2xl text-white" />,
  subCategories: [
    {
      name: "Web & App Development Agents",
      description: "AI agents that optimize website performance and enhance app user experience.",
      icon: <FaCode className="text-2xl text-white" />,
      features: [
        "Real-time site performance monitoring",
        "Automated UI/UX improvement recommendations",
        "Error detection and fix suggestions",
        "Mobile app performance tracking",
        "Usage analytics and crash reporting"
      ],
      sampleImages: [
        "https://cdn.pixabay.com/photo/2023/11/01/17/12/ai-generated-8358416_1280.jpg",
        "https://cdn.pixabay.com/photo/2023/05/24/17/49/ai-generated-8015427_1280.jpg"
      ],
      questions: [
        "What specific performance metrics are most important to your business?",
        "Do you need cross-browser or cross-device compatibility monitoring?",
        "What type of user experience data would be most valuable to you?",
        "Are there specific error patterns you're currently experiencing?",
        "Do you need integration with existing analytics platforms?"
      ]
    },
    {
      name: "Enterprise Solutions Agents",
      description: "AI agents that monitor system health and optimize API performance for enterprise software.",
      icon: <FaServer className="text-2xl text-white" />,
      features: [
        "Continuous system performance monitoring",
        "Enterprise solution integration",
        "Real-time bottleneck alerts",
        "API response time tracking",
        "Code adjustment recommendations"
      ],
      sampleImages: [
        "https://cdn.pixabay.com/photo/2024/06/20/05/19/ai-generated-8841179_1280.jpg",
        "https://cdn.pixabay.com/photo/2023/08/05/01/15/ai-generated-8170159_1280.jpg"
      ],
      questions: [
        "What enterprise systems do you currently use?",
        "What are your current integration pain points?",
        "How do you currently monitor system performance?",
        "What API performance metrics are most critical to your operations?",
        "Do you have specific scaling challenges you're trying to address?"
      ]
    },
    {
      name: "Video Editing Agents",
      description: "AI agents that automate and enhance video editing workflows and motion graphics design.",
      icon: <FaVideo className="text-2xl text-white" />,
      features: [
        "Intelligent footage analysis",
        "Automated color grading and audio leveling",
        "Smart cut and transition suggestions",
        "Dynamic template recommendations",
        "Real-time motion graphics previews"
      ],
      sampleImages: [
        "https://cdn.pixabay.com/photo/2024/06/21/06/09/ai-generated-8843638_1280.jpg",
        "https://cdn.pixabay.com/photo/2023/06/05/19/13/robot-8043131_1280.jpg"
      ],
      questions: [
        "What type of video content do you typically produce?",
        "Do you have established brand guidelines for your videos?",
        "What are your biggest time-consuming tasks in video editing?",
        "Do you need assistance with specific effects or transitions?",
        "What is your current video editing workflow?"
      ]
    },
    {
      name: "SEO & Content Agents",
      description: "AI agents that optimize search visibility and generate engaging, conversion-focused content.",
      icon: <FaSearch className="text-2xl text-white" />,
      features: [
        "Automated keyword research",
        "Competitive analysis",
        "Technical SEO monitoring",
        "SEO-optimized content generation",
        "Readability and engagement analysis"
      ],
      sampleImages: [
        "https://cdn.pixabay.com/photo/2023/10/26/21/10/ai-generated-8343518_1280.jpg",
        "https://cdn.pixabay.com/photo/2024/03/20/04/24/ai-generated-8644599_1280.jpg"
      ],
      questions: [
        "What are your primary SEO goals?",
        "Who are your main competitors?",
        "What type of content do you need to generate regularly?",
        "What audience segments are you targeting?",
        "Do you have specific keywords you're trying to rank for?"
      ]
    },
    {
      name: "Design & Branding Agents",
      description: "AI agents that provide design inspiration and automate mockup creation based on brand guidelines.",
      icon: <FaPaintBrush className="text-2xl text-white" />,
      features: [
        "Design trend analysis",
        "Automated mockup generation",
        "Brand consistency monitoring",
        "Layout improvement suggestions",
        "Design tool integration"
      ],
      sampleImages: [
        "https://cdn.pixabay.com/photo/2024/09/17/02/28/ai-generated-9052691_1280.jpg",
        "https://cdn.pixabay.com/photo/2024/08/10/17/34/ai-generated-8959823_1280.png"
      ],
      questions: [
        "Do you have established brand guidelines?",
        "What design elements do you need help with most frequently?",
        "What design tools do you currently use?",
        "Do you need assistance with specific types of designs?",
        "How do you currently evaluate design effectiveness?"
      ]
    },
    {
      name: "Lead Generation & Social Media Agents",
      description: "AI agents that score leads and optimize social media engagement for maximum conversion.",
      icon: <FaUsers className="text-2xl text-white" />,
      features: [
        "Multi-source lead data analysis",
        "Automated lead scoring",
        "Personalized outreach automation",
        "Social media performance monitoring",
        "Optimal posting time analysis"
      ],
      sampleImages: [
        "https://cdn.pixabay.com/photo/2024/04/26/17/15/humanoid-8722288_1280.png",
        "https://cdn.pixabay.com/photo/2024/03/20/03/06/ai-generated-8644499_1280.jpg"
      ],
      questions: [
        "What are your current lead sources?",
        "How do you currently qualify and score leads?",
        "Which social platforms are most important to your business?",
        "What metrics do you use to measure social media success?",
        "Do you have specific conversion goals for your campaigns?"
      ]
    }
  ]
};

// Map services to their respective categories from navData.js
export const serviceMap = {
  "Web Development": webDevelopmentServices,
  "App Development": appDevelopmentServices,
  "Custom Software": customSoftwareServices,
  "Youtube Video Editing": youtubeVideoEditingServices,
  "Reels/Shorts Editing": reelsEditingServices,
  "On-Page SEO": seoServices.subCategories[0],
  "Off-Page SEO": seoServices.subCategories[1],
  "Local SEO": seoServices.subCategories[2],
  "Technical SEO": seoServices.subCategories[3],
  "Copywriting": copywritingServices,
  "Graphic Design": graphicDesignServices,
  "Lead Generation": leadGenerationServices,
  "Social Media Management": socialMediaManagementServices,
  "Custom AI Agents": aiAgentsServices
  // Add mappings for other services
};

// Helper function to get service data by name
export const getServiceByName = (name) => {
  return serviceMap[name] || null;
};

// Helper function to get all main service categories
export const getAllServiceCategories = () => {
  return [
    webDevelopmentServices,
    appDevelopmentServices,
    customSoftwareServices,
    youtubeVideoEditingServices,
    reelsEditingServices,
    seoServices,
    copywritingServices,
    graphicDesignServices,
    leadGenerationServices,
    socialMediaManagementServices,
    aiAgentsServices
    // Add other main categories
  ];
};

// Add these exports to your servicesData.js file

export const contentMarketingServices = [
  // Your content marketing services data
];

export const socialMediaServices = [
  // Your social media services data
];
