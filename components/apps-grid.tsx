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
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredApps =
    activeCategory === "All"
      ? apps
      : apps.filter((app) => app.category === activeCategory)

  return (
    <section className="bg-[#F4F7FA] py-20 lg:py-28" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 flex flex-col items-center gap-6 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#1A73E8]">
              What We Do
            </p>
            <h2
              className="text-3xl font-bold text-[#0F2B46] md:text-4xl"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Few of Our Apps Adored
              <br />
              by{" "}
              <span className="text-[#1A73E8]">millions of users!</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-sm text-sm text-[#5A7184] leading-relaxed lg:text-right"
          >
            We choose only the best websites and profitable built completely
            with passion, simplicity & creativity.
          </motion.p>
        </div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#1A73E8] text-white shadow-md"
                  : "bg-white text-[#5A7184] hover:bg-white hover:text-[#0F2B46] shadow-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {filteredApps.map((app, index) => (
            <motion.div
              key={app.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              layout
              className="group flex flex-col items-center rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1A73E8]/10 transition-colors duration-300 group-hover:bg-[#1A73E8]">
                <app.icon className="h-8 w-8 text-[#1A73E8] transition-colors duration-300 group-hover:text-white" />
              </div>
              <p className="text-center text-sm font-semibold text-[#0F2B46]">
                {app.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            variant="outline"
            className="rounded-md border-[#1A73E8] px-8 text-sm font-semibold text-[#1A73E8] hover:bg-[#1A73E8] hover:text-white"
          >
            Load more
          </Button>
        </div>
      </div>
    </section>
  )
}
