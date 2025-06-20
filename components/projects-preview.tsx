"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { bank, nova, omni } from "@/app/assets"

const projects = [
  {
    title: "NOVA - AI Assistant",
    description:
      "An advanced AI assistant designed to enhance desktop experience through intelligent automation and interaction.",
    tags: ["AI", "Python", "NLP"],
    status: "Completed",
    image: nova.src
  },
  {
    title: "Omni Gloves",
    description:
      "Gesture controlled gloves with multiple implementations including vehicle control and mouse interface.",
    tags: ["IoT", "Hardware", "Embedded Systems"],
    status: "Completed",
    image: omni.src
  },
  {
    title: "Bank~Ease",
    description: "A fully functional banking website solution developed during the BrinHack Hackathon.",
    tags: ["Web", "React", "Node.js"],
    status: "Completed",
    image: bank.src
  },
]

export function ProjectsPreview() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
          <div className="w-20 h-1 bg-rose-600 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise in various technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="animate-in fade-in duration-500" style={{ animationDelay: `${index * 0.2}s` }}>
              <Card className="h-full flex flex-col overflow-hidden group">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-rose-100 to-rose-200 dark:from-rose-900/20 dark:to-rose-800/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />

                    </div>
                  </div>
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-rose-600 hover:bg-rose-700">{project.status}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-auto text-rose-600 hover:text-rose-700 hover:bg-rose-50/10"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/experience">
            <Button className="bg-rose-600 hover:bg-rose-700 text-white">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
