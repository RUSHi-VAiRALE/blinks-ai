import AboutHero from '@/components/about/AboutHero';
import ProblemSection from '@/components/about/ProblemSection';
import SolutionSection from '@/components/about/SolutionSection';
import ServicesSection from '@/components/about/ServicesSection';
import TechStackSection from '@/components/about/TechStackSection';
import VisionSection from '@/components/about/VisionSection';
import FutureSection from '@/components/about/FutureSection';
import TeamSection from '@/components/about/TeamSection';
import CTASection from '@/components/about/CTASection';

export const metadata = {
  title: 'About Us | Blinks AI',
  description: 'Learn about Blinks AI, our mission, team, and how we are revolutionizing digital marketing with AI technology.',
};

export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <AboutHero />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <TechStackSection />
      <VisionSection />
      <FutureSection />
      {/* <TeamSection /> */}
      <CTASection />
    </main>
  );
}