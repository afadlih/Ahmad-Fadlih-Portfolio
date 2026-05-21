import { AboutSection } from "@/components/AboutSection";
import { ContactCTASection } from "@/components/ContactCTASection";
import { CoreSkillsSection } from "@/components/CoreSkillsSection";
import { FeaturedProjectsSection } from "@/components/FeaturedProjectsSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { LearningSection } from "@/components/LearningSection";
import { Navbar } from "@/components/Navbar";
import { ServicesSection } from "@/components/ServicesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CoreSkillsSection />
      <FeaturedProjectsSection />
      <ServicesSection />
      <LearningSection />
      <ContactCTASection />
      <Footer />
    </main>
  );
}
