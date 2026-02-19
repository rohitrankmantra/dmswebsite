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
    description: "Secure your data with reliable backup solutions and rapid recovery systems to minimize downtime and protect against data loss.",
    href: "#",
  },
  {
    image: "/images/service-voip.jpg",
    title: "VoIP Solutions",
    description: "Implement advanced Voice over IP technology for crystal-clear communication, cost savings, and seamless integration with your existing systems.",
    href: "#",
  },
  {
    image: "/images/service-consulting.jpg",
    title: "Consulting Planning",
    description: "Get expert guidance on IT strategy and planning to align technology with your business goals and drive efficiency.",
    href: "#",
  },
  {
    image: "/images/service-it.jpg",
    title: "IT Consultancy",
    description: "Comprehensive IT consulting services to optimize your infrastructure, enhance security, and support digital transformation.",
    href: "#",
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="services" className="py-20 lg:py-28 bg-linear-to-b from-white to-gray-50/50" ref={ref}> {/* Added subtle linear background */}
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#096DB5]">
            Our Services
          </p>
          <h2
            className="mx-auto max-w-lg text-3xl font-bold leading-tight text-[#0F2B46] md:text-4xl"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            We provide the necessary{" "}
            <span className="text-[#096DB5]">services</span> to you
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }} // Added scale on hover
              className="group relative bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100/50 transition-all duration-300 hover:shadow-xl hover:border-[#096DB5]/50" // Enhanced card styling
            >
              <Link href={service.href} className="block h-full">
                <div className="relative h-48 overflow-hidden"> {/* Fixed height for image */}
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#096DB5]/10 to-transparent transition-opacity duration-300 group-hover:opacity-100 opacity-0" />
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-[#0F2B46] transition-colors group-hover:text-[#096DB5]">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#5A7184] mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#096DB5] transition-transform duration-300 group-hover:translate-x-2">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}