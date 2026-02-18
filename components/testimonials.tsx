"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Quote, Star } from "lucide-react"

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="py-20 lg:py-28" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#1A73E8]">
            Our Clients Testimonials
          </p>
          <h2
            className="text-3xl font-bold text-[#0F2B46] md:text-4xl"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            What Our Clients Say
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-3xl"
        >
          <div className="relative rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-sm md:p-12">
            {/* Large quote mark */}
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#1A73E8]/10">
              <Quote className="h-6 w-6 text-[#1A73E8]" />
            </div>

            {/* Stars */}
            <div className="mb-4 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-[#F59E0B] text-[#F59E0B]"
                />
              ))}
            </div>

            <blockquote className="mb-8 text-base leading-relaxed text-[#5A7184] md:text-lg">
              {"The support service is always run at the highest possible standard. All issues are resolved with a lot of care. All phone calls and emails are answered very professionally."}
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1A73E8] text-lg font-bold text-white">
                KB
              </div>
              <div>
                <p className="font-bold text-[#0F2B46]">Krishna Bhatt</p>
                <p className="text-sm text-[#5A7184]">IT Manager, FinanceCorp</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
