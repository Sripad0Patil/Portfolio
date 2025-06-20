"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { SiHtml5, SiCss3, SiReact, SiNodedotjs, SiPython, SiTensorflow, SiMongodb } from "react-icons/si"
import { FaJava } from "react-icons/fa"

const skills = [
  { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS", icon: SiCss3, color: "text-blue-500" },
  { name: "React", icon: SiReact, color: "text-cyan-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "Python", icon: SiPython, color: "text-yellow-500" },
  { name: "Java", icon: FaJava, color: "text-red-500" },
  { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-500" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
]

export function SkillsPreview() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">My Skills</h2>
          <div className="w-20 h-1 bg-rose-600 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I've worked with a variety of technologies and frameworks to create robust and scalable applications. Here
            are some of the key skills in my toolkit:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-card rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow animate-in fade-in duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <skill.icon className={`text-4xl ${skill.color} mb-3`} />
              <span className="font-medium">{skill.name}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/skills">
            <Button className="bg-rose-600 hover:bg-rose-700 text-white">
              View All Skills <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
