"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Shield, Mail, Monitor, ClipboardCheck, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: Shield,
    title: "Perimeter Security",
    description:
      "Comprehensive firewall management and UTM solutions to protect your network boundaries from advanced persistent threats.",
    href: "#",
  },
  {
    icon: Mail,
    title: "Email Security",
    description:
      "Advanced email filtering, anti-phishing protection, and secure communication channels for your enterprise.",
    href: "#",
  },
  {
    icon: Monitor,
    title: "End Point Solutions",
    description:
      "Endpoint detection and response (EDR) solutions that safeguard every device connected to your network.",
    href: "#",
  },
  {
    icon: ClipboardCheck,
    title: "Security Audits",
    description:
      "Thorough vulnerability assessments and penetration testing to identify and remediate security gaps.",
    href: "#",
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="relative py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            What We Offer
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground font-mono md:text-4xl">
            Our Professional Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            End-to-end cybersecurity solutions tailored to your business needs,
            from assessment to deployment and ongoing management.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group relative flex flex-col rounded-xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10 transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                <service.icon className="h-7 w-7 text-accent transition-colors duration-300 group-hover:text-accent-foreground" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-foreground font-mono">
                {service.title}
              </h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-all duration-200 hover:gap-2.5"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
