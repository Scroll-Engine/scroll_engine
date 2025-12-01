import Hero from "./components/Hero";
import ProblemSolution from "./components/ProblemSolution";
import Features from "./components/Features";
import StoryMode from "./components/StoryMode";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[var(--neon-purple)]/30">
      <Hero />
      <ProblemSolution />
      <Features />
      <StoryMode />
      <Footer />
    </main>
  );
}
