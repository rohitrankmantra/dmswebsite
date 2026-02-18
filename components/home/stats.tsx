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
      {/* subtle overlay pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_30%,white,transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="text-center"
            >
              {/* Icon */}
              <div className="mx-auto mb-6 flex h-18 w-18 items-center justify-center rounded-full border-2 border-white/40 bg-white/10">
                <stat.icon className="h-9 w-9 text-white" />
              </div>

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
