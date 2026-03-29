import { Navbar } from "../app/components/Navbar";
import { Hero } from "../app/components/Hero";
import { ProblemSolution } from "../app/components/ProblemSolution";
import { AppPreview } from "../app/components/AppPreview";
import { FAQ } from "../app/components/FAQ";
import { FinalCTA } from "../app/components/FinalCTA";
import { Footer } from "../app/components/Footer";

export function HomePage() {
  return (
    <>
      <Navbar isLanding />
      <Hero />
      <ProblemSolution />
      <AppPreview />
      <FAQ />
      <FinalCTA />
      <Footer isLanding/>
    </>
  );
}
