"use client"

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiPython,
  SiC,
  SiTensorflow,
  SiKeras,
  SiScikitlearn,
  SiOpencv,
  SiNumpy,
  SiPandas,
  SiGit,
  SiGithub,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si"
import { FaJava, FaChartBar } from "react-icons/fa"

const skillCategories = [
  {
    name: "Web Development",
    icon: "code",
    skills: [
      { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS", icon: SiCss3, color: "text-blue-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "React.js", icon: SiReact, color: "text-cyan-400" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-gray-200 dark:text-gray-300" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
      { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-500" },
    ],
  },
  {
    name: "Programming Languages",
    icon: "laptop-code",
    skills: [
      { name: "Python", icon: SiPython, color: "text-yellow-500" },
      { name: "Java", icon: FaJava, color: "text-red-500" },
      { name: "C", icon: SiC, color: "text-blue-600" },
    ],
  },
  {
    name: "AI/ML Frameworks",
    icon: "brain",
    skills: [
      { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-500" },
      { name: "Keras", icon: SiKeras, color: "text-red-600" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "text-orange-600" },
      { name: "OpenCV", icon: SiOpencv, color: "text-green-600" },
    ],
  },
  {
    name: "Tools & Libraries",
    icon: "tools",
    skills: [
      { name: "NumPy", icon: SiNumpy, color: "text-blue-500" },
      { name: "Pandas", icon: SiPandas, color: "text-blue-600" },
      { name: "Matplotlib", icon: FaChartBar, color: "text-blue-500" },
      { name: "Git", icon: SiGit, color: "text-orange-600" },
      { name: "GitHub", icon: SiGithub, color: "text-gray-200 dark:text-gray-300" },
    ],
  },
  {
    name: "Databases",
    icon: "database",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    ],
  },
]

export function SkillsGrid() {
  return (
    <div className="grid gap-12">
      {skillCategories.map((category, index) => (
        <div key={index} className="mb-8">
          <div className="flex items-center mb-6 animate-in slide-in-from-left duration-500">
            <div className="w-12 h-12 bg-rose-600/10 rounded-lg flex items-center justify-center mr-4">
              <i className={`fas fa-${category.icon} text-2xl text-rose-600`}></i>
            </div>
            <h3 className="text-2xl font-bold">{category.name}</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {category.skills.map((skill, skillIndex) => (
              <div
                key={skillIndex}
                className="bg-card border border-border rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-md transition-shadow animate-in fade-in duration-500"
                style={{ animationDelay: `${skillIndex * 100}ms` }}
              >
                <skill.icon className={`text-4xl ${skill.color} mb-3`} />
                <span className="text-center font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
