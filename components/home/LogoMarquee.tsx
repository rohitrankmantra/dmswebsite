"use client"

import { motion } from "framer-motion"

const logos = [
  { name: "PineLabs", src: "https://dmsystems.in/wp-content/uploads/2020/03/pinelabs.png" },
  { name: "Wave", src: "https://dmsystems.in/wp-content/uploads/2020/01/21.jpg" },
  { name: "Paras Hospital", src: "https://dmsystems.in/wp-content/uploads/2020/01/26.jpg" },
  { name: "Maruti", src: "https://dmsystems.in/wp-content/uploads/2020/03/maruti.png" },
  { name: "ICGEB", src: "https://dmsystems.in/wp-content/uploads/2020/03/icgeb.png" },
  { name: "Global Logic", src: "https://dmsystems.in/wp-content/uploads/2020/03/global.png" },
  { name: "Tata Communication", src: "https://dmsystems.in/wp-content/uploads/2020/03/tata.png" },
]

export default function LogoMarquee() {
  return (
    <section className="w-full overflow-hidden bg-white py-16 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">

        {/* Heading Same Style Like Connect */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#074f8e]">
            Our Clients
          </p>

          <h2
            className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-[#0F2B46] md:text-4xl"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Trusted by{" "}
            <span className="text-[#074f8e]">Leading Organizations</span>
          </h2>
        </div>

        {/* Marquee */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex w-max gap-10 md:gap-14"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col items-center justify-center min-w-40 md:min-w-50"
              >
                <div className="flex items-center justify-center w-42.5 md:w-52.5 h-22.5 md:h-27.5 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:shadow-[#074f8e]/10 transition-all duration-300">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-h-15 md:max-h-17.5 object-contain"
                    loading="lazy"
                  />
                </div>

                <p className="mt-2 text-xs md:text-sm font-medium text-gray-700">
                  {logo.name}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-[#f5f8fc] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-[#f5f8fc] to-transparent" />
        </div>
      </div>
    </section>
  )
}
