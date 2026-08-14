import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import SkillsSection from '@/components/sections/skills';
import ProjectsSection from '@/components/sections/projects';
import ActivitiesSection from '@/components/sections/activities';
import ContactSection from '@/components/sections/contact';
import Footer from '@/components/layout/Footer';
import { AnimatedSection } from '@/components/animated-section';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[#050508]">
      <Header />
      <main className="flex-1">
        <AnimatedSection>
          <HeroSection />
        </AnimatedSection>
        
        <div className="space-y-0">
          <AnimatedSection>
            <AboutSection />
          </AnimatedSection>
          
          <AnimatedSection>
            <ProjectsSection />
          </AnimatedSection>

          <AnimatedSection>
            <SkillsSection />
          </AnimatedSection>

          <AnimatedSection>
            <ActivitiesSection />
          </AnimatedSection>

          <AnimatedSection>
            <ContactSection />
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </div>
  );
}
