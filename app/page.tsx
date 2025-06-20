import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsPreview } from "@/components/skills-preview"
import { ProjectsPreview } from "@/components/projects-preview"
import { ContactPreview } from "@/components/contact-preview"
import Header from "@/components/header"

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center">
        <HeroSection />
        <AboutSection />
        <SkillsPreview />
        <ProjectsPreview />
        <ContactPreview />
      </div>
    </>
  )
}
