"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, Phone, MapPin, Clock, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "patilshripad925@gmail.com",
    link: "mailto:patilshripad925@gmail.com",
    linkText: "Send Email",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 90192 91864",
    link: "tel:+919019291864",
    linkText: "Call Now",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Karnataka, India",
    link: "https://maps.google.com",
    linkText: "View on Map",
  },
  {
    icon: Clock,
    title: "Available Hours",
    value: "Mon - Fri: 9:00 AM - 6:00 PM",
    // status: "Available Now",
  },
]

const socialLinks = [
  {
    icon: Linkedin,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shripad-patil-704767319/",
  },
  {
    icon: Github,
    name: "GitHub",
    link: "https://github.com/Sripad0Patil",
  },
]

export function ContactInfo() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <div>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid gap-6"
      >
        {contactInfo.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-card p-6 rounded-xl border border-border hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-rose-600/10 rounded-full flex items-center justify-center shrink-0">
                <item.icon className="h-5 w-5 text-rose-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-muted-foreground mb-3">{item.value}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    className="text-rose-600 hover:text-rose-700 font-medium inline-flex items-center"
                  >
                    {item.linkText}
                  </a>
                )}
                {item.status && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                    {item.status}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8"
      >
        <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
        <div className="flex gap-3">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="rounded-full w-10 h-10">
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.name}</span>
              </Button>
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
