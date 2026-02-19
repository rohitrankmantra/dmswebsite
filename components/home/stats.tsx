"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Users, Award, FolderCheck, MessageSquare } from "lucide-react"

const stats = [
  { icon: Users, label: "Team Members", value: 105, suffix: "+" },
  { icon: Award, label: "Winning Awards", value: 15, suffix: "+" },
  { icon: FolderCheck, label: "Completed Projects", value: 10, suffix: "k+" },
  { icon: MessageSquare, label: "Client Reviews", value: 850, suffix: "+" },
]

function AnimatedCounter({
  target,
  suffix,
  inView,
}: {
  target: number
  suffix: string
  inView: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    let start = 0
    const duration = 2000
    const increment = target / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20"
      style={{
        background: "linear-gradient(135deg, #074f85 0%, #096db5 50%, #0a5fa0 100%)",
      }}
    >
      {/* Enhanced overlay pattern with multiple gradients for uniqueness */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_30%,white,transparent_60%),radial-gradient(circle_at_70%_70%,white,transparent_60%)]" />

      {/* Subtle wave pattern at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-wave-pattern opacity-20" style={{ background: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\"%3E%3Cpath fill=\"%23ffffff\" fill-opacity=\"0.5\" d=\"M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z\"%3E%3C/path%3E%3C/svg%3E') bottom repeat-x" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.05 }} // Enhanced hover effect
              className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/10" // Added card-like style for uniqueness
            >
              {/* Icon with rotation animation */}
              <motion.div
                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/40 bg-white/10" // Smaller icon container
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <stat.icon className="h-8 w-8 text-white" /> {/* Adjusted icon size */}
              </motion.div>

              {/* Number */}
              <div
                className="mb-3 text-4xl font-extrabold text-white md:text-5xl"
                style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
              >
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  inView={isInView}
                />
              </div>

              {/* Label */}
              <p className="text-sm font-semibold uppercase tracking-wider text-white/85">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}