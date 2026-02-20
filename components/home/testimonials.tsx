"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"

const testimonials = [
  {
    quote: "DM Systems has been our trusted partner for years. Their UTM deployment and ongoing support have significantly reduced our security incidents. The team responds quickly and professionally — highly recommended!",
    name: "Rajesh Kumar",
    role: "CTO, TechFin Solutions Pvt Ltd",
    stars: 5,
  },
  {
    quote: "The penetration testing and firewall management services are top-notch. They identified vulnerabilities we never knew existed and helped us fix them before any breach. Excellent expertise and clear communication throughout.",
    name: "Priya Sharma",
    role: "Head of IT Security, HealthCare India Ltd",
    stars: 5,
  },
  {
    quote: "From endpoint protection to full network security audit — DM Systems delivered beyond expectations. Their proactive approach saved us from potential ransomware attacks. Truly a reliable cybersecurity partner.",
    name: "Amit Patel",
    role: "IT Manager, Manufacturing Corp",
    stars: 5,
  },
  {
    quote: "We switched to DM Systems for managed security services and the difference is night and day. 24/7 monitoring, fast incident response, and detailed reports — everything is handled with utmost professionalism.",
    name: "Sneha Verma",
    role: "CISO, Retail Giant India",
    stars: 5,
  },
  {
    quote: "Their consulting and implementation of VoIP + security stack was seamless. The team understood our business needs perfectly and delivered a robust, future-proof solution. Great value for money!",
    name: "Vikram Singh",
    role: "Operations Director, Logistics Enterprises",
    stars: 5,
  },
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [current, setCurrent] = useState(0)

  const paginate = (newDirection: number) => {
    const next = (current + newDirection + testimonials.length) % testimonials.length
    setCurrent(next)
  }

  const slide = testimonials[current]

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden" ref={ref}>
      {/* Background with subtle grid pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base light gradient */}
        {/* <div className="absolute inset-0 bg-linear-to-b from-gray-50 to-white" /> */}

        {/* Grid pattern: lines + dots at intersections */}
        <div
          className="absolute inset-0 opacity-[0.9]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #074f8e10 1px, transparent 1px),
              linear-gradient(to bottom, #074f8e10 1px, transparent 1px),
              radial-gradient(circle at 1px 1px, #074f8e30 1px, transparent 0)
            `,
            backgroundSize: "40px 40px, 40px 40px, 40px 40px",
            backgroundPosition: "0 0, 0 0, 20px 20px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#074f8e]">
            Client Testimonials
          </p>
          <h2
            className="text-3xl font-bold leading-tight text-[#0F2B46] md:text-4xl"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            What Our <span className="text-[#074f8e]">Clients</span> Say
          </h2>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          {/* Slider Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg md:p-10 lg:p-12"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#074f8e]/10">
                <Quote className="h-7 w-7 text-[#074f8e]" />
              </div>

              <div className="mb-6 flex gap-1">
                {[...Array(slide.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>

              <blockquote className="mb-8 text-lg leading-relaxed text-gray-700 md:text-xl">
                "{slide.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#074f8e] text-base font-bold text-white">
                  {slide.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="font-semibold text-[#0F2B46]">{slide.name}</p>
                  <p className="text-sm text-gray-600">{slide.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-300 bg-white text-[#074f8e] shadow-md transition hover:bg-[#074f8e] hover:text-white md:-left-8 lg:-left-12"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-300 bg-white text-[#074f8e] shadow-md transition hover:bg-[#074f8e] hover:text-white md:-right-8 lg:-right-12"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 w-3 rounded-full transition-all ${
                  index === current
                    ? "bg-[#074f8e] w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}