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
import { RevealSection } from "@/components/RevealSection";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <TerminalEaster />
      <Navbar />
      <Ticker />
      <main className="pt-[100px]">
        <Hero />
        <RevealSection><About /></RevealSection>
        <RevealSection><Skills /></RevealSection>
        <RevealSection><Experience /></RevealSection>
        <RevealSection><Certifications /></RevealSection>
        <RevealSection><Projects /></RevealSection>
        <RevealSection><StockHeatmap /></RevealSection>
        <RevealSection><Contact /></RevealSection>
      </main>
      <RevealSection><Footer /></RevealSection>
    </>
  );
}
