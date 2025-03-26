import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import WorkflowSteps from '../components/WorkflowSteps';
import FooterNew from '../components/FooterNew';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <HeroSection />
        <WorkflowSteps />
      </main>
      <FooterNew />
    </div>
  );
}
