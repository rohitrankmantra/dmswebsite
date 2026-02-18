"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Zap, Building2, Clock, Globe, CheckCircle2 } from "lucide-react"

const reasons = [
  {
    icon: Zap,
    title: "Prompt Service",
    description:
      "Rapid response and deployment to ensure minimal disruption to your business operations.",
  },
  {
    icon: Building2,
    title: "Large Deployments",
    description:
      "Proven expertise in managing enterprise-scale security deployments across multiple locations.",
  },
  {
    icon: Clock,
    title: "24/7 Response",
    description:
      "Round-the-clock monitoring and incident response to keep your business protected at all times.",
  },
  {
    icon: Globe,
    title: "Global Capabilities",
    description:
      "International reach with local expertise, serving clients across diverse industries worldwide.",
  },
]

export function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="why-us"
      className="relative bg-secondary py-24 lg:py-32"
      ref={ref}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              Why Choose Us
            </p>
            <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-foreground font-mono md:text-4xl">
              Your Trusted Cybersecurity Partner
            </h2>
            <p className="mb-10 text-muted-foreground leading-relaxed">
              With years of experience in the cybersecurity landscape, DM
              Systems delivers solutions that are reliable, scalable, and
              tailored to your unique requirements.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <reason.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-sm font-bold text-foreground">
                      {reason.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl bg-[#0F2B46] p-10 dark:bg-[#132F4C]">
              {/* Decorative grid */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
              </div>

              <div className="relative z-10">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#1A73E8]/20 px-4 py-2 text-sm font-medium text-[#4DA3FF]">
                    <CheckCircle2 className="h-4 w-4" />
                    Enterprise Grade Security
                  </div>
                </div>

                <div className="space-y-5">
                  {[
                    "99.9% Uptime Guarantee",
                    "SOC 2 Compliant Processes",
                    "ISO 27001 Aligned",
                    "Real-time Threat Intelligence",
                  ].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1A73E8]/30">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#4DA3FF]" />
                      </div>
                      <span className="text-sm font-medium text-white/90">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-10 grid grid-cols-2 gap-6">
                  <div className="rounded-xl bg-white/5 p-5 backdrop-blur-sm">
                    <p className="text-3xl font-bold text-white font-mono">
                      12+
                    </p>
                    <p className="mt-1 text-xs text-white/60">
                      Years Experience
                    </p>
                  </div>
                  <div className="rounded-xl bg-white/5 p-5 backdrop-blur-sm">
                    <p className="text-3xl font-bold text-white font-mono">
                      98%
                    </p>
                    <p className="mt-1 text-xs text-white/60">
                      Client Retention
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
