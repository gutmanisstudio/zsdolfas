import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Fleet from "@/components/sections/Fleet";
import Projects from "@/components/sections/Projects";
import CTABanner from "@/components/sections/CTABanner";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Fleet />
      <Projects />
      <CTABanner />
      <About />
      <Contact />
    </main>
  );
}
