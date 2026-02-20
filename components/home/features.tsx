"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Globe, ShieldCheck, ClipboardList, Cloud } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Globe,
    title: "Managed IT",
    highlight: "Services",
    description: "Ensure an up-to-date, efficient IT network for your company with our comprehensive managed IT solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Network",
    highlight: "Services",
    description: "Combining the best tools for reliable day-to-day network management with a friendly team of help desk.",
  },
  {
    icon: ClipboardList,
    title: "IT Compliance",
    highlight: "Services",
    description: "We can work with just about any setup, including our own. Full regulatory compliance support for your business.",
  },
  {
    icon: Cloud,
    title: "Business Cloud",
    highlight: "Services",
    description: "We work with your staff to keep your IT functioning as smoothly. Secure, scalable cloud infrastructure.",
  },
]

export function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative -mt-20 z-20 md:pb-0 pb-12" ref={ref} id="features">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const isActive = hoveredIndex === index
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ scale: 1.02 }} // Added subtle scale on hover
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative flex flex-col items-center px-8 py-4 text-center transition-all duration-400 
                  ${isActive ? "bg-linear-to-br from-[#096DB5] to-[#074C8A] text-white shadow-2xl shadow-[#096DB5]/40" : "bg-white text-[#0F2B46] shadow-md hover:shadow-lg"}
                  ${index === 0 ? "rounded-tl-3xl md:rounded-l-3xl md:rounded-tr-none" : ""}
                  ${index === features.length - 1 ? "rounded-br-3xl md:rounded-r-3xl md:rounded-bl-none" : ""}
                  border border-gray-100/50`} // Added subtle border and adjusted radii
              >
                {/* Circular icon with rotation animation on hover */}
                <motion.div
                  className={`mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 transition-all duration-300 
                    ${isActive ? "border-white/40 bg-white/20" : "border-[#096DB5]/30 bg-white"}`}
                  animate={isActive ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon
                    className={`h-9 w-9 transition-colors duration-300 ${isActive ? "text-white" : "text-[#096DB5]"}`}
                  />
                </motion.div>

                <h3 className="mb-3 text-xl font-bold font-mono tracking-tight"> {/* Increased font size and tracking */}
                  {feature.title}{" "}
                  <span className={`transition-colors duration-300 ${isActive ? "text-white" : "text-[#096DB5]"}`}>
                    {feature.highlight}
                  </span>
                </h3>

                <p className={`mb-6 text-base leading-relaxed transition-colors duration-300 ${isActive ? "text-white/90" : "text-[#5A7184]/90"}`}>
                  {feature.description}
                </p>

           
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
