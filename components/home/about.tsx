"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Play, Award } from "lucide-react"

const tabs = [
  {
    id: "mission",
    label: "Our Mission",
    content:
      "To empower organizations with cutting-edge cybersecurity and IT solutions that protect, optimize, and transform their digital infrastructure.",
  },
  {
    id: "vision",
    label: "Our Vision",
    content:
      "To be the most trusted IT solutions partner for businesses worldwide, setting new standards in cybersecurity excellence and innovation.",
  },
  {
    id: "value",
    label: "Our Value",
    content:
      "We believe in integrity, innovation, and customer-first approach. Every solution we deliver is backed by deep expertise and a genuine commitment to your success.",
  },
]

export function About() {
  const [activeTab, setActiveTab] = useState("mission")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  const activeContent = tabs.find((t) => t.id === activeTab)

  return (
    <section id="about" className="py-20 lg:py-28" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left column - text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#1A73E8]">
              About us
            </p>
            <h2
              className="mb-6 text-3xl font-bold leading-tight text-[#0F2B46] md:text-4xl"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Choose{" "}
              <span className="text-[#1A73E8]">The Best</span> IT Service
              Company
            </h2>
            <p className="mb-8 text-[#5A7184] leading-relaxed">
              DM Systems has been committed to give our visitors the best
              experience of IT solutions with a unique strategy based on years of
              industry expertise.
            </p>

            {/* Tabs */}
            <div className="mb-6 flex gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-md px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-[#1A73E8] text-white"
                      : "text-[#5A7184] hover:bg-[#F4F7FA] hover:text-[#0F2B46]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <p className="mb-8 text-sm leading-relaxed text-[#5A7184]">
              {activeContent?.content}
            </p>

            <p className="mb-8 text-sm leading-relaxed text-[#5A7184]">
              As an IT & MSP who keeps your IT running smoothly at all times, to
              take a cylinder which has both past pages. Each sheet that and
              represented by its. Many IT firms struggle to build themselves.
              We don{"'"}t do that and we build a strong foundation.
            </p>

            {/* Video link */}
            <button className="group inline-flex items-center gap-3 text-sm font-semibold text-[#0F2B46] transition-colors hover:text-[#1A73E8]">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1A73E8] text-white shadow-lg transition-transform group-hover:scale-110">
                <Play className="h-4 w-4 ml-0.5" />
              </span>
              Check details about our company
            </button>
          </motion.div>

          {/* Right column - image with badge */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main circular image */}
              <div className="relative mx-auto aspect-square w-full max-w-105 overflow-hidden rounded-full border-4 border-[#1A73E8]/20">
                <Image
                  src="/images/about-company.jpg"
                  alt="Professional team meeting in office"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Years badge */}
              <div className="absolute right-0 top-4 flex h-28 w-28 flex-col items-center justify-center rounded-full bg-[#1A73E8] text-white shadow-xl lg:right-4 lg:top-8">
                <span
                  className="text-3xl font-bold"
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                >
                  12
                </span>
                <span className="text-xs font-medium leading-tight text-center">
                  years of
                  <br />
                  experience
                </span>
              </div>

              {/* Award badge */}
              <div className="absolute -bottom-2 left-4 flex items-center gap-3 rounded-xl bg-white px-5 py-4 shadow-xl lg:left-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF3CD]">
                  <Award className="h-6 w-6 text-[#F59E0B]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0F2B46]">
                    Best Awarded Company
                  </p>
                  <p className="text-xs text-[#5A7184]">
                    Excellence in IT Services
                  </p>
                </div>
              </div>

              {/* Decorative arc */}
              <div className="absolute -left-6 top-1/2 h-[110%] w-[110%] -translate-y-1/2 rounded-full border-4 border-dashed border-[#1A73E8]/10 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
