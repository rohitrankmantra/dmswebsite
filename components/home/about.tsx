"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Play, Award, Target, Eye, Gem } from "lucide-react" // Added icons for tabs

const tabs = [
  {
    id: "mission",
    label: "Our Mission",
    icon: Target,
    title: "Empowering Digital Security",
    content: "To empower organizations with cutting-edge cybersecurity and IT solutions that protect, optimize, and transform their digital infrastructure.",
    highlights: [
      { text: "Protect against evolving cyber threats with advanced security measures." },
      { text: "Optimize IT systems for peak performance and efficiency." },
      { text: "Transform business operations through innovative technology integration." },
      { text: "Deliver tailored solutions that drive growth and resilience." },
    ],
  },
  {
    id: "vision",
    label: "Our Vision",
    icon: Eye,
    title: "Leading the Future of IT",
    content: "To be the most trusted IT solutions partner for businesses worldwide, setting new standards in cybersecurity excellence and innovation.",
    highlights: [
      { text: "Become the global leader in cybersecurity and IT services." },
      { text: "Foster innovation to stay ahead of technological advancements." },
      { text: "Build lasting partnerships based on trust and results." },
      { text: "Set industry benchmarks for quality and reliability." },
    ],
  },
  {
    id: "value",
    label: "Our Values",
    icon: Gem,
    title: "Core Principles Guiding Us",
    content: "We believe in integrity, innovation, and customer-first approach. Every solution we deliver is backed by deep expertise and a genuine commitment to your success.",
    highlights: [
      { text: "Integrity: Honest and transparent in all our dealings." },
      { text: "Innovation: Constantly pushing boundaries with new ideas." },
      { text: "Customer-First: Prioritizing your needs and satisfaction." },
      { text: "Excellence: Delivering high-quality solutions with expertise." },
    ],
  },
]

export function About() {
  const [activeTab, setActiveTab] = useState("mission")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  const activeContent = tabs.find((t) => t.id === activeTab)

  return (
    <section id="about" className="py-20 lg:py-28 bg-linear-to-b from-white to-gray-50/50" ref={ref}> {/* Added subtle section linear for uniqueness */}
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left column - text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#096DB5]">
              About us
            </p>
            <h2
              className="mb-6 text-3xl font-bold leading-tight text-[#0F2B46] md:text-4xl"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Choose{" "}
              <span className="text-[#096DB5]">The Best</span> IT Service
              Company
            </h2>
            <p className="mb-8 text-[#5A7184] leading-relaxed">
              DM Systems has been committed to give our visitors the best
              experience of IT solutions with a unique strategy based on years of
              industry expertise.
            </p>

            {/* Enhanced Tabs with icons and better styling */}
            <div className="mb-6 flex gap-2 flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 shadow-sm
                    ${activeTab === tab.id 
                      ? "bg-linear-to-r from-[#096DB5] to-[#074C8A] text-white shadow-md" 
                      : "bg-white text-[#5A7184] hover:bg-[#096DB5]/10 hover:text-[#096DB5] hover:shadow-md border border-gray-200"}`}
                >
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Enhanced content with title, description, and highlighted bullets */}
            <motion.div 
              key={activeTab} // For re-animation on tab change
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8 p-6 bg-white rounded-2xl shadow-md border border-[#096DB5]/10"
            >
              <h3 className="text-xl font-bold text-[#096DB5] mb-4">{activeContent?.title}</h3>
              <p className="text-base leading-relaxed text-[#5A7184] mb-6">
                {activeContent?.content}
              </p>
              <ul className="space-y-3">
                {activeContent?.highlights.map((highlight, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-2 text-sm text-[#0F2B46]"
                  >
                    <span className="shrink-0 w-2 h-2 mt-2 rounded-full bg-[#096DB5]" />
                    <span>{highlight.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

           

           
          </motion.div>

          {/* Right column - image with badge */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main image with tilt hover */}
              <motion.div 
                className="relative mx-auto aspect-square w-full max-w-105 overflow-hidden rounded-3xl border-4 border-[#096DB5]/20 shadow-xl" // Changed to softer round
                whileHover={{ rotate: 2, scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src="/images/about-company.jpg"
                  alt="Professional team meeting in office"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Years badge with pulse animation */}
              <motion.div 
                className="absolute right-0 top-4 flex h-28 w-28 flex-col items-center justify-center rounded-full bg-linear-to-br from-[#096DB5] to-[#074C8A] text-white shadow-xl lg:right-4 lg:top-8"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.1 }}
              >
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
              </motion.div>

              {/* Award badge with slide in */}
              <motion.div 
                className="absolute -bottom-2 left-4 flex items-center gap-3 rounded-xl bg-white px-5 py-4 shadow-xl lg:left-0"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
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
              </motion.div>

              {/* Decorative arc with rotation */}
              <motion.div 
                className="absolute -left-6 top-1/2 h-[110%] w-[110%] -translate-y-1/2 rounded-full border-4 border-dashed border-[#096DB5]/10 pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }} // Added slow rotation for uniqueness
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}