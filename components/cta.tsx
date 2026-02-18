"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="contact" className="bg-[#0F2B46] py-14 lg:py-16" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-between gap-6 lg:flex-row"
        >
          <div>
            <h2
              className="text-2xl font-bold text-white md:text-3xl"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Looking for the Best IT Business Solutions?
            </h2>
            <p className="mt-2 text-sm text-white/60">
              As a app web agency, we deliver solutions for clients and ensure a
              smooth experience.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="shrink-0 rounded-md bg-[#1A73E8] px-10 text-base font-semibold text-white hover:bg-[#1565C0]"
          >
            <Link href="#contact">Get a Quote</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
