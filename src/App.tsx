import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Features } from './components/Features';
import { UseCases } from './components/UseCases';
import { Benefits } from './components/Benefits';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        <UseCases />
        <Benefits />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}