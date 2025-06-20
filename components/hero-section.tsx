"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"
import { profile } from "@/app/assets"

const roles = ["Web Developer", "Developer", "Web Designer", "Youtuber", "Script Writer"]

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen pt-20 flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, It's <span className="text-rose-600">Sripad</span>
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 h-[50px] sm:h-[60px] md:h-[70px]">
              I'm a <span className="text-rose-600">{roles[currentRole]}</span>
            </h2>

            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              A passionate and self-driven B.Tech student specializing in Artificial Intelligence and Machine Learning
              (AIML), with strong technical skills and a passion for developing intelligent and connected systems.
              Seeking an opportunity to apply my knowledge and skills in a dynamic and innovative environment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="https://www.linkedin.com/in/shripad-patil-704767319/" target="_blank">
                <Button variant="outline" size="lg" className="gap-2 group w-full sm:w-auto">
                  <Linkedin className="w-5 h-5 group-hover:text-rose-600 transition-colors" />
                  LinkedIn
                </Button>
              </Link>
              <Link href="https://github.com/Sripad0Patil" target="_blank">
                <Button variant="outline" size="lg" className="gap-2 group w-full sm:w-auto">
                  <Github className="w-5 h-5 group-hover:text-rose-600 transition-colors" />
                  GitHub
                </Button>
              </Link>
              <Button
                size="lg"
                className="bg-rose-600 hover:bg-rose-700 text-white w-full sm:w-auto"
                onClick={() => {
                  if (confirm("Do you want to download my resume?")) {
                    const link = document.createElement("a")
                    link.href = "/SRIPAD_resume.pdf"
                    link.download = "SRIPAD_resume.pdf"
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                  }
                }}
              >
                Download Resume
              </Button>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-rose-600 to-rose-400 blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-rose-600/20">
                <Image
                  src={profile.src}
                  alt="Sripad Patil"
                  width={400}
                  height={400}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
