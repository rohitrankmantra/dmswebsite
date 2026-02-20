"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { ShieldCheck, Building2, UsersRound, Clock } from "lucide-react"

export function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative overflow-hidden bg-linear-to-b from-[#074f8e]/95 to-[#096db5]/90 py-16 lg:py-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/achievements-bg.jpg"
          alt="Achievements background"
          fill
          className="object-cover brightness-[0.45] contrast-[1.1]"
          priority
        />
        <div className="absolute inset-0 bg-[#074f8e]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 text-center text-white md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200/90">
            Our Achievements
          </p>

          <h2
            className="mb-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Proud of Our <span className="text-[#a3d0ff]">Real Results</span>
          </h2>

          <p className="mx-auto max-w-3xl text-base md:text-lg text-white/90 leading-relaxed">
            Trusted by hundreds of organizations for enterprise-grade cybersecurity and IT excellence since 1999.
          </p>
        </motion.div>

        {/* Stats teaser with simple icons added */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 grid grid-cols-2 gap-6 text-center sm:grid-cols-4 sm:gap-8 lg:mt-12"
        >
          <div>
            <ShieldCheck className="mx-auto mb-2 h-8 w-8 text-[#a3d0ff]" />
            <div className="text-3xl md:text-4xl font-extrabold">750+</div>
            <p className="mt-1 text-sm text-white/80">UTM Deployed</p>
          </div>
          <div>
            <Building2 className="mx-auto mb-2 h-8 w-8 text-[#a3d0ff]" />
            <div className="text-3xl md:text-4xl font-extrabold">320+</div>
            <p className="mt-1 text-sm text-white/80">Organizations</p>
          </div>
          <div>
            <UsersRound className="mx-auto mb-2 h-8 w-8 text-[#a3d0ff]" />
            <div className="text-3xl md:text-4xl font-extrabold">125K+</div>
            <p className="mt-1 text-sm text-white/80">Users Secured</p>
          </div>
          <div>
            <Clock className="mx-auto mb-2 h-8 w-8 text-[#a3d0ff]" />
            <div className="text-3xl md:text-4xl font-extrabold">25+</div>
            <p className="mt-1 text-sm text-white/80">Years Strong</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
