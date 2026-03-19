import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProblemSolution } from "./components/ProblemSolution";
import { AppPreview } from "./components/AppPreview";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <AppPreview />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}