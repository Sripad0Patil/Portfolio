"use client"

import { motion } from "framer-motion"

interface PageTitleProps {
  title: string
}

export function PageTitle({ title }: PageTitleProps) {
  return (
    <div className="text-center mb-12">
      <motion.h1
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>
      <motion.div
        className="w-20 h-1 bg-rose-600 mx-auto"
        initial={{ width: 0 }}
        animate={{ width: 80 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
    </div>
  )
}
