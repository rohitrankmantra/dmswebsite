"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Users, Award, FolderCheck, MessageSquare } from "lucide-react"

const stats = [
  { icon: Users, label: "Team members", value: 105, suffix: "+" },
  { icon: Award, label: "Winning awards", value: 15, suffix: "+" },
  { icon: FolderCheck, label: "Completed project", value: 10, suffix: "k+" },
  { icon: MessageSquare, label: "Client's reviews", value: 850, suffix: "+" },
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
    <section ref={ref} className="relative overflow-hidden bg-[#1A73E8] py-16 lg:py-20">
      {/* Subtle diagonal pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 36px)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-0">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className={`flex flex-col items-center text-center ${
                index < stats.length - 1 ? "lg:border-r lg:border-white/20" : ""
              }`}
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
                <stat.icon className="h-7 w-7 text-white" />
              </div>
              <div
                className="mb-2 text-3xl font-bold text-white md:text-4xl"
                style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
              >
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  inView={isInView}
                />
              </div>
              <p className="text-sm font-medium text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
