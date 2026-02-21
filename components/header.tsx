"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import {
  Menu,
  ChevronDown,
  Shield,
  Mail,
  Monitor,
  ClipboardCheck,
  Server,
  Lock,
  Globe,
  FileSearch,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

 

// Yeh array ab tere old website ke exact menu se match karta hai
const navLinks = [
  { name: "Home", href: "/" },

  {
    name: "Company",
    href: "#",
    hasSubmenu: true,
    submenu: [
      { name: "What We Do", href: "/what-we-do", icon: ClipboardCheck },
      { name: "Mission & Vision", href: "/mission-vision", icon: Shield },
      { name: "Team", href: "/team", icon: Monitor },
    ],
  },

  {
    name: "Solutions",
    href: "#",
    hasSubmenu: true,
    submenu: [
      { name: "Our Associates", href: "/our-associates", icon: Globe },
      { name: "Product Offering", href: "/product-offering", icon: Server },
      { name: "Distribution Products", href: "/distribution-products", icon: Lock },
      { name: "Product Brochure", href: "/product-brochure", icon: FileSearch },
    ],
  },

  {
    name: "Credentials",
    href: "#",
    hasSubmenu: true,
    submenu: [
      { name: "Awards", href: "/awards", icon: Shield },
      { name: "Client Speaks", href: "/client-speaks", icon: Mail },
    ],
  },

  { name: "Training", href: "/training" },
  { name: "Gallery", href: "/gallery" },
]


function TopInfoBar() {
  return (
    <div className="hidden bg-[#0F2B46] text-white lg:block">
      <div className="mx-auto flex h-11 max-w-7xl items-center justify-between px-4 lg:px-8">
        
        <div className="flex items-center gap-6">
          
          <a
            href="tel:+911126691429"
            className="flex items-center gap-2 text-xs text-white/80 transition-colors hover:text-white"
          >
            <Phone className="h-3.5 w-3.5" />
            +91 011 26691429
          </a>

          <span className="text-white/30">|</span>

          <span className="flex items-center gap-2 text-xs text-white/80">
            <MapPin className="h-3.5 w-3.5" />
            Malviya Nagar, New Delhi
          </span>

          <span className="text-white/30">|</span>

          <a
            href="mailto:channels@dmsystems.in"
            className="flex items-center gap-2 text-xs text-white/80 transition-colors hover:text-white"
          >
            <Mail className="h-3.5 w-3.5" />
            channels@dmsystems.in
          </a>

        </div>

        <div className="flex items-center gap-3">
          {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="flex h-7 w-7 items-center justify-center rounded-full text-white/60 transition-colors hover:text-white"
              aria-label={`Social link ${i + 1}`}
            >
              <Icon className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}


function LogoSection() {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <img
        src="/logo.jpg"
        alt="DM Systems Logo"
        className="h-10 w-10 sm:h-12 sm:w-12 border-2 bg-white shadow-md object-cover"
      />
      <div>
        <span className="text-lg sm:text-xl font-bold tracking-tight text-[#0F2B46] font-mono">
          DM Systems
        </span>
        <p className="text-[9px] sm:text-[10px] leading-none text-[#5A7184]">
          Cybersecurity & IT Solutions
        </p>
      </div>
    </div>
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  // ✅ FIXED: dropdown ke liye ek hi state nahi, active dropdown ka naam store hoga
 const [activeDropdown, setActiveDropdown] = useState<string | null>(null)


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* ---------- DEFAULT HEADER (before scroll) ---------- */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "pointer-events-none -translate-y-full opacity-0"
            : "pointer-events-auto translate-y-0 opacity-100"
        }`}
      >
        <TopInfoBar />

        <div className="bg-white/0">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
            {/* Large logo in circular container */}
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center bg-white shadow-lg lg:h-16 lg:w-16 overflow-hidden">
                <img
                  src="/logo.jpg"
                  alt="DM Systems Logo"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Pill-shaped navigation bar */}
            <div className="hidden lg:block">
              <nav
                className="flex items-center gap-0 rounded-full bg-white px-2 py-3 shadow-lg"
                role="navigation"
                aria-label="Main navigation"
              >
                {navLinks.map((link) =>
                  link.hasSubmenu ? (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(link.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button
                        className="flex items-center gap-1 px-5 py-1.5 text-md font-semibold text-[#0F2B46] transition-colors hover:text-[#1A73E8]"
                        aria-expanded={activeDropdown === link.name}
                        aria-haspopup="true"
                      >
                        {link.name}
                        <ChevronDown
                          className={`h-3.5 w-3.5 transition-transform duration-200 ${
                            activeDropdown === link.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-1/2 top-full w-96 -translate-x-1/2 pt-4"
                          >
                            <div className="rounded-xl border border-[#E2E8F0] bg-white p-4 shadow-xl">
                              <div className="mb-3 px-2">
                                <p className="text-xs font-semibold uppercase tracking-wider text-[#096EB4]">
                                  {link.name}
                                </p>
                              </div>

                              <div className="grid grid-cols-1 gap-1">
                              {link.submenu.map((sub) => {
  const Icon = sub.icon

  return (
    <Link
      key={sub.name}
      href={sub.href}
      className="group flex items-center justify-between rounded-xl p-3 transition-all duration-300 hover:bg-[#096EB4]"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F1F5F9] text-[#096EB4] transition-all duration-300 group-hover:bg-white group-hover:text-[#096EB4]">
          {Icon && <Icon className="h-5 w-5" />}
        </div>

        <p className="text-sm font-semibold text-[#0F2B46] transition-colors group-hover:text-white">
          {sub.name}
        </p>
      </div>

      <ChevronDown className="h-4 w-4 -rotate-90 text-[#94A3B8] group-hover:text-white" />
    </Link>
  )
})}

                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="px-5 py-1.5 text-md font-semibold text-[#0F2B46] transition-colors hover:text-[#1A73E8]"
                    >
                      {link.name}
                    </Link>
                  )
                )}
              </nav>
            </div>

            <Button
              asChild
              className="hidden bg-[#1A73E8] text-xs sm:text-sm font-semibold text-white hover:bg-[#1565C0] lg:inline-flex"
            >
              <Link href="#contact">GET A QUOTE</Link>
            </Button>

            <MobileMenu className="text-white" />
          </div>
        </div>
      </div>

      {/* ---------- SCROLLED HEADER (compact sticky) ---------- */}
      <motion.header
        initial={false}
        animate={
          scrolled
            ? { y: 0, opacity: 1, pointerEvents: "auto" }
            : { y: -80, opacity: 0, pointerEvents: "none" }
        }
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-[#E2E8F0] bg-white/98 shadow-md backdrop-blur-md"
      >
        <div className="mx-auto flex w-full h-16 max-w-7xl items-center justify-between px-3 sm:px-4 lg:h-18 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <LogoSection />
          </Link>

          <nav
            className="hidden items-center gap-1 lg:flex"
            role="navigation"
            aria-label="Main navigation"
          >
            {navLinks.map((link) =>
              link.hasSubmenu ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className="group relative flex items-center gap-1 px-4 py-2 text-md font-semibold text-[#0F2B46] transition-colors hover:text-[#1A73E8]"
                    aria-expanded={activeDropdown === link.name}
                    aria-haspopup="true"
                  >
                    {link.name}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        activeDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 origin-left scale-x-0 bg-[#1A73E8] transition-transform duration-300 group-hover:scale-x-100" />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 top-full w-96 -translate-x-1/2 pt-2"
                      >
                        <div className="rounded-xl border border-[#E2E8F0] bg-white p-4 shadow-xl">
                          <div className="mb-3 px-2">
                            <p className="text-xs font-semibold uppercase tracking-wider text-[#096EB4]">
                              {link.name}
                            </p>
                          </div>

                          <div className="grid grid-cols-1 gap-1">
                          {link.submenu.map((sub) => {
  const Icon = sub.icon

  return (
    <Link
      key={sub.name}
      href={sub.href}
      className="group flex items-center justify-between rounded-xl p-3 transition-all duration-300 hover:bg-[#096EB4]"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F1F5F9] text-[#096EB4] transition-all duration-300 group-hover:bg-white group-hover:text-[#096EB4]">
          {Icon && <Icon className="h-5 w-5" />}
        </div>

        <p className="text-sm font-semibold text-[#0F2B46] transition-colors group-hover:text-white">
          {sub.name}
        </p>
      </div>

      <ChevronDown className="h-4 w-4 -rotate-90 text-[#94A3B8] group-hover:text-white" />
    </Link>
  )
})}
  
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative px-4 py-2 text-md font-semibold text-[#0F2B46] transition-colors hover:text-[#1A73E8]"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 origin-left scale-x-0 bg-[#1A73E8] transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-2 lg:flex">
              {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full text-[#5A7184] transition-colors hover:text-[#1A73E8]"
                  aria-label={`Social link ${i + 1}`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <Button
              asChild
              className="hidden bg-[#1A73E8] text-xs sm:text-sm font-semibold text-white hover:bg-[#1565C0] lg:inline-flex"
            >
              <Link href="#contact">GET A QUOTE</Link>
            </Button>

            <MobileMenu className="text-white" />
          </div>
        </div>
      </motion.header>
    </>
  )
}

function MobileMenu({ className }: { className?: string }) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn("lg:hidden", className)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-72 sm:w-80 bg-white">
        
        {/* ✅ Logo Section */}
        <div className="flex items-center gap-3 border-b pb-1 py-5 px-4">
          <img
            src="/logo.jpg"
            alt="DM Systems Logo"
            className="h-12 w-12 object-cover rounded-md shadow-md"
          />
          <div>
            <h2 className="text-lg font-bold text-[#0F2B46]">DM Systems</h2>
            <p className="text-xs text-[#5A7184]">Cybersecurity & IT Solutions</p>
          </div>
        </div>

        <nav className="mt-6 flex flex-col gap-1" aria-label="Mobile navigation">
          {navLinks.map((link) =>
            link.hasSubmenu ? (
              <div key={link.name} className="px-2">
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === link.name ? null : link.name)
                  }
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-[#0F2B46] hover:bg-[#F4F7FA]"
                >
                  {link.name}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      openDropdown === link.name ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openDropdown === link.name && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden pl-6"
                    >
                     {link.submenu.map((sub) => {
  const Icon = sub.icon

  return (
    <Link
      key={sub.name}
      href={sub.href}
      className="flex items-center gap-3 rounded-lg px-4 py-2 text-sm text-[#5A7184] hover:bg-[#F4F7FA] hover:text-[#0F2B46]"
    >
      {Icon && <Icon className="h-4 w-4 text-[#074f8e]" />}
      {sub.name}
    </Link>
  )
})}

                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="rounded-lg px-4 py-3 text-sm font-medium text-[#0F2B46] transition-colors hover:bg-[#F4F7FA]"
              >
                {link.name}
              </Link>
            )
          )}

          <div className="mt-4 px-4">
            <Button
              asChild
              className="w-full bg-[#1A73E8] text-white hover:bg-[#1565C0]"
            >
              <Link href="#contact">GET A QUOTE</Link>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}


