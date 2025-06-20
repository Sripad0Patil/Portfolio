import { PageTitle } from "@/components/page-title"
import { ExperienceTimeline } from "@/components/experience-timeline"

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      <PageTitle title="My Experience & Projects" />
      <ExperienceTimeline />
    </div>
  )
}
