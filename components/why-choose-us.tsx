"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { MonitorSmartphone, Globe, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="why-us" className="bg-[#F4F7FA] py-20 lg:py-28" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/why-best.jpg"
                alt="Professional team reviewing documents"
                width={600}
                height={500}
                className="h-auto w-full object-cover"
              />
              {/* Overlay card */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#1A73E8] p-6">
                <h3
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                >
                  Professional Highly Staffs
                </h3>
                <p className="mt-2 text-sm text-white/80">
                  We deploy the best professionals to ensure your IT solutions
                  are built solid, maintained right, and protected always.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#1A73E8]">
              Who We Are Best
            </p>
            <h2
              className="mb-6 text-3xl font-bold leading-tight text-[#0F2B46] md:text-4xl"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Our{" "}
              <span className="text-[#1A73E8]">penetration</span> testing team
              uses an industry
            </h2>
            <p className="mb-8 text-[#5A7184] leading-relaxed">
              We provide the full spectrum of IT services and consulting for
              various industries including finance, healthcare, and technology
              sectors.
            </p>

            <div className="mb-8 grid gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#1A73E8]/10">
                  <MonitorSmartphone className="h-7 w-7 text-[#1A73E8]" />
                </div>
                <div>
                  <h4 className="mb-1 text-base font-bold text-[#0F2B46]">
                    Digital Marketer
                  </h4>
                  <p className="text-sm text-[#5A7184] leading-relaxed">
                    Leaders of brand identity and presence covering all
                    marketing and digital transformation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#1A73E8]/10">
                  <Globe className="h-7 w-7 text-[#1A73E8]" />
                </div>
                <div>
                  <h4 className="mb-1 text-base font-bold text-[#0F2B46]">
                    Global Entrepreneur
                  </h4>
                  <p className="text-sm text-[#5A7184] leading-relaxed">
                    Drive your business with our creative solutions across
                    global markets.
                  </p>
                </div>
              </div>
            </div>

            <Button
              asChild
              className="h-12 rounded-md bg-[#1A73E8] px-8 text-sm font-semibold text-white hover:bg-[#1565C0]"
            >
              <Link href="#about">
                About us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
