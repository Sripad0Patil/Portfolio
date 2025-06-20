"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react"

export function ContactPreview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
          <div className="w-20 h-1 bg-rose-600 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to contact me through any of these channels.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12"
        >
          <div className="bg-card p-6 rounded-xl border border-border flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-rose-600/10 rounded-full flex items-center justify-center mb-4">
              <Mail className="h-6 w-6 text-rose-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground mb-4">patilshripad925@gmail.com</p>
            <a href="mailto:patilshripad925@gmail.com" className="text-rose-600 hover:text-rose-700 font-medium">
              Send Email
            </a>
          </div>

          <div className="bg-card p-6 rounded-xl border border-border flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-rose-600/10 rounded-full flex items-center justify-center mb-4">
              <Phone className="h-6 w-6 text-rose-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-muted-foreground mb-4">+91 90192 91864</p>
            <a href="tel:+919019291864" className="text-rose-600 hover:text-rose-700 font-medium">
              Call Now
            </a>
          </div>

          <div className="bg-card p-6 rounded-xl border border-border flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-rose-600/10 rounded-full flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 text-rose-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-muted-foreground mb-4">Karnataka, India</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              className="text-rose-600 hover:text-rose-700 font-medium"
              rel="noreferrer"
            >
              View on Map
            </a>
          </div>

          <div className="bg-card p-6 rounded-xl border border-border flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-rose-600/10 rounded-full flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-rose-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Available Hours</h3>
            <p className="text-muted-foreground mb-4">Mon - Fri: 9:00 AM - 6:00 PM</p>
            {/* <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
              Available Now
            </span> */}
          </div>
        </motion.div>

        <div className="text-center">
          <Link href="/contact">
            <Button className="bg-rose-600 hover:bg-rose-700 text-white">
              Contact Me <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
