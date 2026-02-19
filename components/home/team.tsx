"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

const team = [
  {
    name: "Rajesh Kumar",
    role: "Chief Technology Officer",
    description: "Leading our tech strategy with over 15 years in cybersecurity and IT innovation.",
    image: "/images/team-1.jpg",
  },
  {
    name: "Priya Sharma",
    role: "Security Analyst",
    description: "Expert in threat detection and risk assessment, ensuring client data protection.",
    image: "/images/team-2.jpg",
  },
  {
    name: "Amit Patel",
    role: "Solutions Architect",
    description: "Designing scalable IT infrastructures tailored to business needs.",
    image: "/images/team-3.jpg",
  },
  {
    name: "Sneha Reddy",
    role: "Project Manager",
    description: "Overseeing seamless project delivery with a focus on efficiency and client satisfaction.",
    image: "/images/team-4.jpg",
  },
]

const socials = [Facebook, Twitter, Linkedin, Instagram]

export function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#096DB5]">
            Team Members
          </p>
          <h2
            className="text-3xl font-bold text-[#0F2B46] md:text-4xl"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Passionate Personalities,
            <br />
            <span className="text-[#096DB5]">Versatile</span> Brains
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }} // Subtle scale on hover
              className="group relative bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100/50 transition-all duration-300 hover:shadow-xl hover:border-[#096DB5]/50" // Enhanced card styling
            >
              <div className="relative h-64 overflow-hidden"> {/* Fixed height for consistency */}
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Social overlay with fade in */}
                <motion.div 
                  className="absolute inset-0 flex items-end justify-center bg-linear-to-t from-[#0F2B46]/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="mb-6 flex gap-3">
                    {socials.map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all duration-300 hover:bg-[#096DB5] hover:scale-110" // Improved hover
                        aria-label={`Social link ${i + 1}`}
                      >
                        <Icon className="h-5 w-5" /> {/* Slightly larger icons */}
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-[#0F2B46] mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-[#096DB5] font-semibold mb-3">{member.role}</p> {/* Highlighted role */}
       
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}