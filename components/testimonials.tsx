"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Quote } from "lucide-react"

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Client Testimonials
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground font-mono md:text-4xl">
            What Our Clients Say
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-3xl"
        >
          <div className="relative rounded-2xl border border-border bg-card p-10 shadow-sm md:p-14">
            {/* Quote icon */}
            <div className="absolute -top-5 left-10 flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
              <Quote className="h-5 w-5 text-accent-foreground" />
            </div>

            <blockquote className="mb-8 text-lg leading-relaxed text-foreground md:text-xl">
              {'"You\'ve been right there with us through every step — from deploying security solutions across our offices to providing expert consulting services that truly made a difference. Your team\'s responsiveness and depth of knowledge have been invaluable."'}
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-lg font-bold text-accent font-mono">
                GP
              </div>
              <div>
                <p className="font-semibold text-foreground">Gaurav Pandey</p>
                <p className="text-sm text-muted-foreground">Team IT</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
