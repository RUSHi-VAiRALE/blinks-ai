// Navigation links data
export const navLinks = [
  { name: 'Explore Our Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'AI Agent Development', href: '/services/ai-agent-development' },
];

// Services submenu data
export const serviceCategories = [
  {
    name: 'Development',
    subItems: [
      { name: 'Web Development', href: '/services/development/web' },
      { name: 'App Development', href: '/services/development/app' },
      { name: 'Custom Software', href: '/services/development/custom' }
    ]
  },
  {
    name: 'Video Editing',
    subItems: [
      { 
        name: 'Youtube Video', 
        subSubItems: [
          { name: 'Basics', href: '/services/youtube-video-editing' },
          { name: 'PIP', href: '/services/youtube-video-editing' },
          { name: 'Motion Graphics', href: '/services/youtube-video-editing' }
        ]
      },
      { 
        name: 'Reels/Shorts', 
        subSubItems: [
          { name: 'Basics', href: '/services/reels-shorts-editing' },
          { name: 'PIP', href: '/services/reels-shorts-editing' },
          { name: 'Motion Graphics', href: '/services/reels-shorts-editing' }
        ]
      }
    ]
  },
  {
    name: 'SEO',
    subItems: [
      { name: 'On-Page', href: '/services/seo-services' },
      { name: 'Off-Page', href: '/services/seo-services' },
      { name: 'Local', href: '/services/seo-services' },
      { name: 'Technical', href: '/services/seo-services' }
    ]
  },
  {
    name: 'Copywriting',
    subItems: [
      { name: 'SEO', href: '/services/copywriting/' },
      { name: 'Technical', href: '/services/copywriting/' },
      { name: 'Marketing', href: '/services/copywriting/' },
      { name: 'Social Media', href: '/services/copywriting/' },
      { name: 'B2B', href: '/services/copywriting/' }
    ]
  },
  {
    name: 'Graphic Design',
    subItems: [
      { name: 'Poster', href: '/services/graphic-design/' },
      { name: 'Logo', href: '/services/graphic-design/' },
      { name: 'Magazine', href: '/services/graphic-design/' }
    ]
  },
  {
    name: 'Lead Generation',
    subItems: [
      { name: 'Meta', href: '/services/lead-generation/' },
      { name: 'Twitter', href: '/services/lead-generation/' },
      { name: 'LinkedIn', href: '/services/lead-generation/' },
      { name: 'Google', href: '/services/lead-generation/' }
    ]
  },
  {
    name: 'Social Media Management',
    subItems: [
      { name: 'Meta', href: '/services/social-media-management/' },
      { name: 'YouTube', href: '/services/social-media-management/' },
      { name: 'LinkedIn', href: '/services/social-media-management/' },
      { name: 'Twitter', href: '/services/social-media-management/' }
    ]
  },
  {
    name: 'Custom AI Agents',
    subItems: [
      { name: 'Web & App Development', href: '/services/custom-ai-agents/web-app' },
      { name: 'Enterprise Solutions', href: '/services/custom-ai-agents/enterprise' },
      { name: 'Video Editing', href: '/services/custom-ai-agents/video' },
      { name: 'SEO & Content', href: '/services/custom-ai-agents/seo-content' },
      { name: 'Design & Branding', href: '/services/custom-ai-agents/design' },
      { name: 'Lead Generation & Social Media', href: '/services/custom-ai-agents/lead-social' }
    ]
  }
];
