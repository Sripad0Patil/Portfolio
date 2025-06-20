import { SkillsGrid } from "@/components/skills-grid"
import { PageTitle } from "@/components/page-title"

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      <PageTitle title="My Technical Skills" />
      <SkillsGrid />
    </div>
  )
}
