import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import WorkflowSteps from '../components/WorkflowSteps';
import FooterNew from '../components/FooterNew';
import AboutHero from '@/components/about/AboutHero';
import ProblemSection from '@/components/about/ProblemSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main>
        <HeroSection />
        <WorkflowSteps />
        <AboutHero/>
        <ProblemSection />
      </main>
    </div>
  );
}
