import { PageTitle } from "@/components/page-title"
import { EducationTimeline } from "@/components/education-timeline"

export default function EducationPage() {
  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      <PageTitle title="My Education Journey" />
      <EducationTimeline />
    </div>
  )
}
