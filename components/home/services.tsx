"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    image: "/images/service-backup.jpg",
    title: "Backup & Recovery",
    href: "#",
  },
  {
    image: "/images/service-voip.jpg",
    title: "VoIP Solutions",
    href: "#",
  },
  {
    image: "/images/service-consulting.jpg",
    title: "Consulting Planning",
    href: "#",
  },
  {
    image: "/images/service-it.jpg",
    title: "IT Consultancy",
    href: "#",
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="services" className="py-20 lg:py-28" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#1A73E8]">
            Our Services
          </p>
          <h2
            className="mx-auto max-w-lg text-3xl font-bold leading-tight text-[#0F2B46] md:text-4xl"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            We provide the necessary services to you
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.href} className="group block">
                <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#0F2B46]/0 transition-colors duration-300 group-hover:bg-[#0F2B46]/30" />
                </div>
                <h3 className="flex items-center gap-2 text-lg font-bold text-[#0F2B46] transition-colors group-hover:text-[#1A73E8]">
                  {service.title}
                  <ArrowRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
