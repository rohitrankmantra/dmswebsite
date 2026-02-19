"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const slides = [
  {
    image: "/images/hero-bg.jpg",
    heading: "Think Big. We make IT, possible!",
    description:
      "We observe the ongoing trends and analyze the upcoming technologies to transform the digital universe.",
    cta: "Contact us",
    ctaHref: "#contact",
  },
  {
    image: "/images/hero-slide-2.jpg",
    heading: "We'll help you navigate ever-changing business",
    description:
      "We architect, implement, manage and secure IT solutions that maximize the value of technology today and accelerate tomorrow.",
    cta: "Get a Quote",
    ctaHref: "#contact",
  },
  {
    image: "/images/hero-slide-3.jpg",
    heading: "Secure Your Future with DM Systems",
    description:
      "Customized cybersecurity and IT solutions designed to protect every area of your business from perimeter defense to endpoint security.",
    cta: "Our Services",
    ctaHref: "#services",
  },
]

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
}

export function Hero() {
  const [[current, direction], setCurrent] = useState([0, 0])
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const paginate = useCallback(
    (newDirection: number) => {
      const nextIndex =
        (current + newDirection + slides.length) % slides.length
      setCurrent([nextIndex, newDirection])
    },
    [current]
  )

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => paginate(1), 6000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, paginate])

  const slide = slides[current]

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100vh", minHeight: "600px" }}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background slides */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt=""
            fill
            className="object-cover"
            priority={current === 0}
          />
          <div className="absolute inset-0 bg-[#0F2B46]/60" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="max-w-2xl"
            >
              <motion.h1
                custom={0.1}
                variants={textVariants}
                className="text-balance text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
                style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif" }}
              >
                {slide.heading}
              </motion.h1>

              <motion.p
                custom={0.3}
                variants={textVariants}
                className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-white/80 md:text-lg"
              >
                {slide.description}
              </motion.p>

              <motion.div custom={0.5} variants={textVariants} className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-md bg-[#1A73E8] px-8 text-base font-semibold text-white hover:bg-[#1565C0]"
                >
                  <Link href={slide.ctaHref}>{slide.cta}</Link>
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-3 top-1/2 z-20 hidden  md:flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/25 md:left-6 lg:left-8"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-3 top-1/2 z-20 hidden  md:flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/25 md:right-6 lg:right-8"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-28 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:bottom-32">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent([index, index > current ? 1 : -1])}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === current
                ? "w-8 bg-[#1A73E8]"
                : "w-2.5 bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
