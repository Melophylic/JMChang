import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import WhyDifferent from "@/components/WhyDifferent";
import CyclePhases from "@/components/CyclePhases";
import CycleBasedDiet from "@/components/CycleBasedDiet";
import CycleLifestyle from "@/components/CycleLifestyle";
import ResultsBenefits from "@/components/ResultsBenefits";
import Products from "@/components/Products";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import TCMSection from "@/components/TCMSection";
import EmailCapture from "@/components/EmailCapture";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <WhyDifferent />
        <CyclePhases />
        <CycleBasedDiet />
        <CycleLifestyle />
        <ResultsBenefits />
        <Products />
        <About />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <TCMSection />
        <EmailCapture />
      </main>
      <Footer />
    </>
  );
}
