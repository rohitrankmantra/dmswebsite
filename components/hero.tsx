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
    heading: "We'll help you navigate ever-changing business",
    description:
      "We architect, implement, manage and secure IT solutions that maximize the value of technology today and accelerate tomorrow.",
    cta: "Contact us",
    ctaHref: "#contact",
  },
  {
    image: "/images/hero-slide-2.jpg",
    heading: "Secure Your Future with DM Systems",
    description:
      "Customized cybersecurity and IT solutions designed to protect every area of your business. From perimeter defense to endpoint security.",
    cta: "Get a Quote",
    ctaHref: "#contact",
  },
  {
    image: "/images/hero-slide-3.jpg",
    heading: "Enterprise-Grade Protection for Your Business",
    description:
      "24/7 security monitoring, threat detection, and incident response. Our team ensures your infrastructure stays protected around the clock.",
    cta: "Our Services",
    ctaHref: "#services",
  },
]

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
}

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" },
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
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background slides */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt=""
            fill
            className="object-cover"
            priority={current === 0}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[#0F2B46]/70" />
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
              className="max-w-3xl lg:ml-auto lg:text-right"
            >
              <motion.h1
                custom={0.1}
                variants={textVariants}
                className="text-balance text-4xl font-bold leading-tight text-white font-mono md:text-5xl lg:text-6xl xl:text-7xl"
              >
                {slide.heading}
              </motion.h1>

              <motion.p
                custom={0.35}
                variants={textVariants}
                className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/80 md:text-lg lg:ml-auto"
              >
                {slide.description}
              </motion.p>

              <motion.div
                custom={0.55}
                variants={textVariants}
                className="mt-10 flex gap-4 lg:justify-end"
              >
                <Button
                  asChild
                  size="lg"
                  className="h-13 bg-[#1A73E8] px-10 text-base font-semibold text-white hover:bg-[#1565C0]"
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
        className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/25 md:left-8"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/25 md:right-8"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent([index, index > current ? 1 : -1])}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === current
                ? "w-10 bg-[#1A73E8]"
                : "w-2.5 bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
