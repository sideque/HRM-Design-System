import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats"
import Legacy from "@/components/home/Legacy";
import Divisions from "@/components/home/Divisions";
import Projects from "@/components/home/Projects";
import WhyHRM from "@/components/home/WhyHRM";
import FAQ from "@/components/global/FAQ";
import Insights from "@/components/global/Insights";
import GlobalCTA from "@/components/global/GlobalCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats /> 
      <Legacy />
      <Divisions />
      <Projects />
      <WhyHRM />
      <FAQ />
      <Insights />
      <GlobalCTA />
      <Footer />
    </main>
  );
}