"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { bank, bulb, car, football, no, nova, omni } from "@/app/assets"

const timelineData = [
  {
    year: "2022-23",
    title: "First Year Projects",
    projects: [
      {
        title: "The Smart Bulb",
        description:
          "A Home Automation Project that demonstrates the integration of IoT technology for smart home solutions.",
        status: "Completed",
        image: bulb.src
      },
    ],
  },
  {
    year: "2023-24",
    title: "Second Year Projects",
    projects: [
      {
        title: "Car Designers Website",
        description: "A dedicated platform for automotive designers to showcase their work and connect with clients.",
        status: "Under Progress",
        image: car.src
      },
      {
        title: "Football Enthusiasts Website",
        description:
          "A community platform for football fans to share news, updates, and connect with fellow enthusiasts.",
        status: "Under Progress",
        image: football.src
      },
    ],
  },
  {
    year: "2024-25",
    title: "Third Year Projects",
    projects: [
      {
        title: "Omni Gloves",
        description:
          "Gesture Controlled Gloves with multiple implementations including gesture controlled robust vehicle and gesture controlled mouse interface.",
        status: "Completed",
        image: omni.src,
        features: ["Gesture controlled robust vehicle", "Gesture controlled mouse interface"],
      },
      {
        title: "NOVA - AI Assistant",
        description:
          "An advanced AI assistant designed to enhance desktop experience through intelligent automation and interaction.",
        status: "Completed",
        image: nova.src
      },
      {
        title: "BrinHack Hackathon",
        description:
          "Participated in the National level hackathon where our team developed Bank~Ease, a fully functional banking website solution.",
        status: "Completed",
        image: bank.src
      },
    ],
  },
  {
    year: "Future",
    title: "Upcoming Opportunities",
    projects: [
      {
        title: "Fourth Year Projects",
        description: "Coming soon...",
        status: "Planned",
        image: no.src
      },
      {
        title: "Internship Experience",
        description: "Looking forward to gaining valuable industry experience...",
        status: "Planned",
        image: no.src
      },
      {
        title: "Work Experience",
        description: "Ready to embark on professional journey...",
        status: "Planned",
        image: no.src
      },
    ],
  },
]

export function ExperienceTimeline() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative">
        {/* Timeline line - hidden on mobile */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-rose-600/30 transform -translate-x-1/2 hidden md:block"></div>

        <div className="space-y-12 md:space-y-24">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} year={item.year} title={item.title} projects={item.projects} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

function TimelineItem({
  year,
  title,
  projects,
  index,
}: {
  year: string
  title: string
  projects: any[]
  index: number
}) {
  const isLeft = index % 2 === 0

  return (
    <div className="relative animate-in fade-in duration-500" style={{ animationDelay: `${index * 0.2}s` }}>
      {/* Year badge - centered on desktop, left-aligned on mobile */}
      <div className="flex justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:z-10 mb-6 md:mb-0">
        <div className="bg-rose-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg text-sm">{year}</div>
      </div>

      {/* Content container */}
      <div className="md:flex md:items-start">
        {/* Left side content (for even indexes on desktop) */}
        <div className={`md:w-1/2 ${isLeft ? "md:pr-12" : "md:pl-12 md:order-2"}`}>
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-center md:text-left mb-6">{title}</h3>
            <div className="space-y-6">
              {projects.map((project, projectIndex) => (
                <ProjectCard key={projectIndex} project={project} />
              ))}
            </div>
          </div>
        </div>

        {/* Spacer for the other half on desktop */}
        <div className={`hidden md:block md:w-1/2 ${isLeft ? "md:order-2" : ""}`}></div>
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: any }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-0">
        <div className="flex flex-col">
          {/* Project image placeholder */}
          <div className="relative w-full h-48 md:h-56 bg-gradient-to-br from-rose-100 to-rose-200 dark:from-rose-900/20 dark:to-rose-800/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              
            </div>
          </div>

          <div className="p-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
              <h4 className="text-xl font-bold">{project.title}</h4>
              <Badge
                className={
                  project.status === "Completed"
                    ? "bg-green-600 hover:bg-green-700"
                    : project.status === "Under Progress"
                      ? "bg-amber-600 hover:bg-amber-700"
                      : "bg-blue-600 hover:bg-blue-700"
                }
              >
                {project.status}
              </Badge>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
            {project.features && (
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {project.features.map((feature: string, i: number) => (
                  <li key={i} className="text-sm">
                    {feature}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Default export for backward compatibility
export default ExperienceTimeline
