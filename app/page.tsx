import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Services />
      <Projects />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}