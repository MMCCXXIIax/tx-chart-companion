import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import FounderStory from "@/components/FounderStory";
import Features from "@/components/Features";
import Vision from "@/components/Vision";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <FounderStory />
      <Features />
      <Vision />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;