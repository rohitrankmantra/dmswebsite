"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

const team = [
  {
    name: "Rajesh Kumar",
    role: "Chief Technology Officer",
    image: "/images/team-1.jpg",
  },
  {
    name: "Priya Sharma",
    role: "Security Analyst",
    image: "/images/team-2.jpg",
  },
  {
    name: "Amit Patel",
    role: "Solutions Architect",
    image: "/images/team-3.jpg",
  },
  {
    name: "Sneha Reddy",
    role: "Project Manager",
    image: "/images/team-4.jpg",
  },
]

const socials = [Facebook, Twitter, Linkedin, Instagram]

export function Team() {
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
            Team Members
          </p>
          <h2
            className="text-3xl font-bold text-[#0F2B46] md:text-4xl"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Passionate Personalities,
            <br />
            <span className="text-[#1A73E8]">Versatile</span> Brains
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative mb-5 overflow-hidden rounded-2xl">
                <div className="aspect-[3/4]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Social overlay */}
                <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-[#0F2B46]/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="mb-6 flex gap-2">
                    {socials.map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-[#1A73E8]"
                        aria-label={`Social link ${i + 1}`}
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-[#0F2B46]">
                  {member.name}
                </h3>
                <p className="text-sm text-[#5A7184]">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
