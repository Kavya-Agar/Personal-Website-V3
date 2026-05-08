import { Navbar } from "@/components/Navbar";
import { Ticker } from "@/components/Ticker";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Certifications } from "@/components/Certifications";
import { Projects } from "@/components/Projects";
import { StockHeatmap } from "@/components/StockHeatmap";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { TerminalEaster } from "@/components/TerminalEaster";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <TerminalEaster />
      <Navbar />
      <Ticker />
      {/* Push content below fixed navbar (64px) + ticker (36px) */}
      <main className="pt-[100px]">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Projects />
        <StockHeatmap />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
