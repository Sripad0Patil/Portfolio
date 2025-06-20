"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function AboutSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-in fade-in duration-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <div className="w-20 h-1 bg-rose-600 mx-auto mb-8"></div>

          <p className="text-lg mb-6 text-muted-foreground">
            I'm a B.Tech student specializing in Artificial Intelligence and Machine Learning at Brindavan College of
            Engineering, Bengaluru. My passion lies in creating intelligent systems and developing web applications that
            solve real-world problems.
          </p>

          <p className="text-lg mb-8 text-muted-foreground">
            With a strong foundation in programming languages like Python, Java, and C, along with expertise in web
            development technologies, I strive to build innovative solutions that make a difference. I'm constantly
            learning and exploring new technologies to expand my skill set.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/skills">
              <Button className="bg-rose-600 hover:bg-rose-700 text-white">
                View My Skills <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/experience">
              <Button variant="outline">
                See My Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
