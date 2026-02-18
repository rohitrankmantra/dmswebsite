"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="relative py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl bg-[#0F2B46] px-8 py-16 text-center md:px-16 md:py-20 dark:bg-[#132F4C]"
        >
          {/* Decorative elements */}
          <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-[#1A73E8]/15 to-transparent" />
          <div className="absolute bottom-0 right-0 h-full w-1/3 bg-gradient-to-l from-[#1A73E8]/10 to-transparent" />

          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#4DA3FF]"
            >
              Get Started Today
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mx-auto mb-6 max-w-2xl text-balance text-3xl font-bold tracking-tight text-white font-mono md:text-4xl lg:text-5xl"
            >
              {"Let's Secure Your Business Today"}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mx-auto mb-10 max-w-xl text-white/60"
            >
              Schedule a free consultation with our cybersecurity experts and
              discover how DM Systems can protect your business.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <Button
                asChild
                size="lg"
                className="h-13 bg-[#1A73E8] px-10 text-base font-semibold text-white hover:bg-[#1565C0]"
              >
                <Link href="#contact">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
