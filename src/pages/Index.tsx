
import HeroSection from "@/components/HeroSection";
import TeamSection from "@/components/TeamSection";
import ServicesGrid from "@/components/ServicesGrid";
import AIChatDemo from "@/components/AIChatDemo";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TeamSection />
      <ServicesGrid />
      <AIChatDemo />
      <ContactForm />
    </main>
  );
};

export default Index;
