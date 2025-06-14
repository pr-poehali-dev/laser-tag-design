import HeroSection from "@/components/HeroSection";
import GamesSection from "@/components/GamesSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <GamesSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
