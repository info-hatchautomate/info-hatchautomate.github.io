import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NumeraliaSection from "@/components/NumeraliaSection";
import EditorialSection from "@/components/EditorialSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import WhoWeSeekSection from "@/components/WhoWeSeekSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowToApplySection from "@/components/HowToApplySection";
import TimelineSection from "@/components/TimelineSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import DemoDaySection from "@/components/DemoDaySection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <NumeraliaSection />
      <EditorialSection />
      <WhoWeSeekSection />
      <BenefitsSection />
      <HowToApplySection />
      <TimelineSection />
      <SuccessStoriesSection />
      <DemoDaySection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
