"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="relative h-[360px] lg:h-[420px]">
        <Image
          src="/images/achievements-bg.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1A73E8]/85" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/80">
              Our Achievements
            </p>
            <h2
              className="mx-auto max-w-2xl text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              We are very proud of our
              <br />
              Best <span className="underline decoration-white/50 underline-offset-8">Achievements</span>
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
