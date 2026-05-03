import { Navbar } from "../app/components/Navbar";
import { Hero } from "../app/components/Hero";
import { ExperienceFlow } from "../app/components/ExperienceFlow";
import { ProblemSolution } from "../app/components/ProblemSolution";
import { AppPreview } from "../app/components/AppPreview";
import { FAQ } from "../app/components/FAQ";
import { FinalCTA } from "../app/components/FinalCTA";
import { Footer } from "../app/components/Footer";

export function HomePage() {
  return (
    <>
      <Navbar isLanding />
      <main>
        <Hero />
        <ExperienceFlow />
        <ProblemSolution />
        <AppPreview />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer isLanding />
    </>
  );
}
