import { AuroraBackground } from "@/components/fx/AuroraBackground";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { LiveShowcase } from "@/components/sections/LiveShowcase";
import { Projects } from "@/components/sections/Projects";
import { Benefits } from "@/components/sections/Benefits";
import { TechStack } from "@/components/sections/TechStack";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <AuroraBackground />
      <Navbar />
      <main className="relative">
        <Hero />
        <LiveShowcase />
        <Projects />
        <Benefits />
        <TechStack />
        <Process />
        <Testimonials />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
