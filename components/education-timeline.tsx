"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar, School, Link, Star } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function EducationTimeline() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-12 animate-in fade-in duration-500">
        <Card className="mb-12">
          <CardHeader className="relative pb-0">
            <div className="absolute top-6 right-6 text-rose-600 opacity-20">
              <GraduationCap size={40} />
            </div>
            <CardTitle className="text-2xl md:text-3xl mb-2">
              B.Tech in Artificial Intelligence and Machine Learning
            </CardTitle>
            <div className="inline-block text-white rounded-full font-medium mb-6 px-2.5.520.5.5.5.5.5x.5.5.5.5.5x bg-transparent px-2 py-1.5 text-xs">
              2022 - 2026
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3">
                <School className="text-rose-600" size={20} />
                <span>Brindavan College of Engineering, Bengaluru</span>
              </div>
              <div className="flex items-center gap-3">
                <Link className="text-rose-600" size={20} />
                <span>VTU Affiliated</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="text-rose-600" size={20} />
                <span>CGPA: 8.2/10</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="text-rose-600" size={20} />
                <span>Expected Graduation: May 2026</span>
              </div>
            </div>

            <p className="text-muted-foreground mb-6">
              Currently pursuing my B.Tech degree with a focus on cutting-edge technologies in AI and ML. The curriculum
              includes advanced topics in machine learning, deep learning, computer vision, and natural language
              processing.
            </p>

            <div className="mb-2 flex justify-between items-center">
              <span className="text-sm font-medium">Progress</span>
              <span className="text-sm font-medium">65% Completed</span>
            </div>
            <Progress value={65} className="h-2" />
          </CardContent>
        </Card>
      </div>

      <div className="relative py-8">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-rose-600/30 hidden md:block"></div>

        <div className="space-y-16">
          <TimelineItem year="2022" description="Started B.Tech Program" delay={0.2} />
          <TimelineItem year="2026" description="Expected Graduation" delay={0.4} />
        </div>
      </div>
    </div>
  )
}

function TimelineItem({ year, description, delay }: { year: string; description: string; delay: number }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative animate-in fade-in duration-500" style={{ animationDelay: `${delay}s` }}>
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-rose-600 rounded-full hidden md:block"></div>
      <div className="ml-auto mr-auto md:ml-[calc(50%+20px)] md:w-[calc(50%-20px)] p-6 bg-card rounded-lg border border-border shadow-sm">
        <h4 className="text-xl font-bold text-rose-600 mb-2">{year}</h4>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

// Default export for backward compatibility
export default EducationTimeline
