import HeroSection from "@/components/HeroSection";
import GamesSection from "@/components/GamesSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <GamesSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
