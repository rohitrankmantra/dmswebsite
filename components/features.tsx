"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Settings, FlaskConical, Database } from "lucide-react"

const features = [
  {
    icon: Settings,
    title: "Customized Solutions",
    description:
      "Protect all areas of your business with tailored strategies that address your unique security challenges and infrastructure needs.",
  },
  {
    icon: FlaskConical,
    title: "Proof of Concept",
    description:
      "Test runs to ensure feasibility before deployment. We validate every solution to guarantee it meets your enterprise requirements.",
  },
  {
    icon: Database,
    title: "Data Continuity Solutions",
    description:
      "Seamless data protection and disaster recovery to keep your business running with zero downtime, no matter what happens.",
  },
]

export function Features() {
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
            Core Highlights
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground font-mono md:text-4xl">
            What Sets Us Apart
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative rounded-xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10 transition-colors duration-300 group-hover:bg-accent/20">
                <feature.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-foreground font-mono">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
