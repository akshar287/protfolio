import Navbar         from "@/components/Navbar";
import HeroSection     from "@/components/HeroSection";
import AboutSection    from "@/components/AboutSection";
import SkillsSection   from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection  from "@/components/ContactSection";
import Footer          from "@/components/Footer";
import FloatingTechLogos from "@/components/FloatingTechLogos";

export default function Home() {
  return (
    <main style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      <FloatingTechLogos />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
