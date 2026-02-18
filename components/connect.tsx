"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const cards = [
  {
    image: "/images/connect-1.jpg",
    title: "Regional Manager & Nested line management.",
    description:
      "Strategic leadership and management structures designed for enterprise-level IT operations.",
  },
  {
    image: "/images/connect-2.jpg",
    title: "Revitalizing your people in a retail downturn.",
    description:
      "Empowering teams with the right tools and technology to succeed in any market condition.",
  },
  {
    image: "/images/connect-3.jpg",
    title: "Organizational teams of the are just like families",
    description:
      "Building strong team cultures that drive innovation and deliver exceptional results.",
  },
]

export function Connect() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="py-20 lg:py-28" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#1A73E8]">
            Latest News
          </p>
          <h2
            className="mx-auto max-w-lg text-3xl font-bold leading-tight text-[#0F2B46] md:text-4xl"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Connect with us for experiencing
            <br />
            <span className="text-[#1A73E8]">the best</span> IT Solutions
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-bold text-[#0F2B46] transition-colors group-hover:text-[#1A73E8]">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#5A7184]">
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
