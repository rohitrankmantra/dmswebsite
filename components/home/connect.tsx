"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const cards = [
  {
    image: "/images/connect-1.jpg",
    title: "Regional Manager & Nested Line Management",
    description:
      "Strategic leadership structures built for large-scale IT & security operations.",
  },
  {
    image: "/images/connect-2.jpg",
    title: "Empowering Teams in Challenging Markets",
    description:
      "Tools and strategies to keep your people productive and secure in any environment.",
  },
  {
    image: "/images/connect-3.jpg",
    title: "Teams That Feel Like Family",
    description:
      "Strong, collaborative cultures that fuel innovation and consistent results.",
  },
]

export function Connect() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="py-20 lg:py-28 pt-12 bg-white" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#074f8e]">
            Connect With Us
          </p>
          <h2
            className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-[#0F2B46] md:text-4xl"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Let's Build Your{" "}
            <span className="text-[#074f8e]">Secure Future</span> Together
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#074f8e]/10"
            >
              <div className="relative aspect-16/10 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-lg font-bold text-[#0F2B46] transition-colors group-hover:text-[#074f8e]">
                  {card.title}
                </h3>
                <p className="text-base leading-relaxed text-gray-600">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}