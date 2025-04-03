
import HeroSection from '../components/HeroSection';
import WorkflowSteps from '../components/WorkflowSteps';
import AboutHero from '@/components/about/AboutHero';
import ProblemSection from '@/components/about/ProblemSection';
import ClientLogos from '@/components/ClientLogos';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main>
        <HeroSection />
        <WorkflowSteps />
        <ClientLogos />
        <AboutHero/>
        <ProblemSection />
      </main>
    </div>
  );
}
