import FeatureCard from '@/components/FeatureCard';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Welcome to BlinksAI</h1>
        <p className="text-lg mb-4">
          Your intelligent AI platform for building amazing applications.
        </p>
      </main>
    </div>
  );
}
