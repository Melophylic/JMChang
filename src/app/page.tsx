import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import CyclePhases from "@/components/CyclePhases";
import CycleBasedDiet from "@/components/CycleBasedDiet";
import WhyDifferent from "@/components/WhyDifferent";
import WhyTCM from "@/components/WhyTCM";
import Products from "@/components/Products";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import EmailCapture from "@/components/EmailCapture";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <CyclePhases />
        <CycleBasedDiet />
        <WhyDifferent />
        <WhyTCM />
        <Products />
        <About />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <EmailCapture />
      </main>
      <Footer />
    </>
  );
}
