import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Features } from './components/Features';
import { UseCases } from './components/UseCases';
import { Benefits } from './components/Benefits';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { Preloader } from './components/Preloader';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <Preloader
          brandText="G-Bell"
          onComplete={() => setIsLoading(false)}
        />
      )}
      <div
        className="min-h-screen bg-black"
        style={{
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out'
        }}
      >
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
    </>
  );
}