"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import {
  Cpu,
  Cloud,
  ShieldCheck,
  Wifi,
  Wrench,
  Flame,
  HardDrive,
  Database,
  Network,
  Building2,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = ["All", "Cloud Services", "Cyber Security", "IT Security", "Networking"]

const apps = [
  { icon: Cpu, label: "Product Engineering", category: "IT Security" },
  { icon: Cloud, label: "Cloud Services", category: "Cloud Services" },
  { icon: ShieldCheck, label: "Cyber Security", category: "Cyber Security" },
  { icon: Wifi, label: "IT Security", category: "IT Security" },
  { icon: Wrench, label: "Firewall Advance", category: "Cyber Security" },
  { icon: Flame, label: "Data Management", category: "Cloud Services" },
  { icon: Database, label: "Big Data & Analytics", category: "IT Security" },
  { icon: HardDrive, label: "Warranty Management", category: "Networking" },
  { icon: Network, label: "Internal Networking", category: "Networking" },
  { icon: Building2, label: "Property Simplified", category: "Cloud Services" },
]

export function AppsGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredApps =
    activeCategory === "All"
      ? apps
      : apps.filter((app) => app.category === activeCategory)

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden" ref={ref}>
      {/* Subtle tech background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Light gradient base */}
        <div className="absolute inset-0 " />

        {/* Subtle dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, #074f8e 1px, transparent 0),
              radial-gradient(circle at 20px 20px, #074f8e 1px, transparent 0)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Faint circuit-like lines (optional subtle overlay) */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            background: `linear-gradient(45deg, transparent 45%, #a3d0ff 50%, transparent 55%)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 flex flex-col items-center gap-6 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#074f8e]">
              Our Expertise
            </p>
            <h2
              className="text-3xl font-bold leading-tight text-[#0F2B46] md:text-4xl"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Solutions We <span className="text-[#074f8e]">Master</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-md text-base text-[#5A7184] lg:text-right"
          >
            Enterprise-grade tools & services built with precision, security, and innovation at the core.
          </motion.p>
        </div>

        {/* Category tabs - more premium look */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 shadow-sm ${
                activeCategory === cat
                  ? "bg-[#074f8e] text-white shadow-md shadow-[#074f8e]/30"
                  : "bg-white text-[#5A7184] hover:bg-[#074f8e]/10 hover:text-[#074f8e]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Apps Grid */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {filteredApps.map((app, index) => (
            <motion.div
              key={app.label}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.04, transition: { duration: 0.3 } }}
              className="group flex flex-col items-center rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-[#074f8e]/10 border border-gray-100"
            >
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-xl bg-[#074f8e]/5 transition-all duration-300 group-hover:bg-[#074f8e] group-hover:shadow-md group-hover:shadow-[#074f8e]/20">
                <app.icon className="h-10 w-10 text-[#074f8e] transition-all duration-300 group-hover:text-white" />
              </div>
              <p className="text-center text-base font-semibold text-[#0F2B46] group-hover:text-[#074f8e]">
                {app.label}
              </p>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  )
}