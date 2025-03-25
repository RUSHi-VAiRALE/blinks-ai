import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import WorkflowSteps from '../components/WorkflowSteps';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <HeroSection />
        <WorkflowSteps />
      </main>
    </div>
  );
}
