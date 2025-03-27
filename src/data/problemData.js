// Icons
import { 
    FaCompass, 
    FaChartLine, 
    FaCogs, 
    FaChartBar, 
    FaCalendarAlt, 
    FaCreditCard 
  } from 'react-icons/fa';
  
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
        before: 60,
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
        before: 70,
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
        before: 70,
        after: 95
      }
    }
  ];

  export default problems;