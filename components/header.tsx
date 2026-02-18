"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
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
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const services = [
  { title: "Perimeter Security", description: "Protect your network boundaries", icon: Shield, href: "#services" },
  { title: "Email Security", description: "Secure your communications", icon: Mail, href: "#services" },
  { title: "End Point Solutions", description: "Safeguard every device", icon: Monitor, href: "#services" },
  { title: "Security Audits", description: "Comprehensive assessments", icon: ClipboardCheck, href: "#services" },
  { title: "Data Continuity", description: "Disaster recovery solutions", icon: Server, href: "#services" },
  { title: "Network Security", description: "Infrastructure protection", icon: Lock, href: "#services" },
  { title: "Cloud Security", description: "Secure cloud deployments", icon: Globe, href: "#services" },
  { title: "Compliance", description: "Regulatory compliance support", icon: FileSearch, href: "#services" },
]

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services", hasSubmenu: true },
  { name: "Why Us", href: "#why-us" },
  { name: "Contact", href: "#contact" },
]

function TopInfoBar() {
  return (
    <div className="hidden bg-[#0F2B46] text-white lg:block">
      <div className="mx-auto flex h-11 max-w-7xl items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-6">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 text-xs text-white/80 transition-colors hover:text-white"
          >
            <Phone className="h-3.5 w-3.5" />
            +91 98765 43210
          </a>
          <span className="text-white/30">|</span>
          <span className="flex items-center gap-2 text-xs text-white/80">
            <MapPin className="h-3.5 w-3.5" />
            Bangalore, India
          </span>
          <span className="text-white/30">|</span>
          <a
            href="mailto:info@dmsystems.in"
            className="flex items-center gap-2 text-xs text-white/80 transition-colors hover:text-white"
          >
            <Mail className="h-3.5 w-3.5" />
            info@dmsystems.in
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
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#1A73E8] bg-white shadow-md">
        <Shield className="h-6 w-6 text-[#1A73E8]" />
      </div>
      <div>
        <span className="text-xl font-bold tracking-tight text-[#0F2B46] font-mono">
          DM Systems
        </span>
        <p className="text-[10px] leading-none text-[#5A7184]">
          Cybersecurity & IT Solutions
        </p>
      </div>
    </div>
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)

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

        <div className="bg-white/95 backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
            {/* Large logo in circular container */}
            <div className="relative">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-[3px] border-[#1A73E8]/30 bg-white shadow-lg lg:h-28 lg:w-28">
                <div className="flex flex-col items-center">
                  <Shield className="h-8 w-8 text-[#1A73E8] lg:h-10 lg:w-10" />
                  <span className="mt-1 text-xs font-bold text-[#0F2B46] font-mono lg:text-sm">
                    DM Systems
                  </span>
                </div>
              </div>
            </div>

            {/* Pill-shaped navigation bar */}
            <div className="hidden lg:block">
              <nav
                className="flex items-center gap-0 rounded-full bg-[#1A73E8] px-2 py-3 shadow-lg"
                role="navigation"
                aria-label="Main navigation"
              >
                {navLinks.map((link) =>
                  link.hasSubmenu ? (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setMegaMenuOpen(true)}
                      onMouseLeave={() => setMegaMenuOpen(false)}
                    >
                      <button
                        className="flex items-center gap-1 px-5 py-1.5 text-sm font-semibold text-white transition-colors hover:text-white/80"
                        aria-expanded={megaMenuOpen}
                        aria-haspopup="true"
                      >
                        {link.name}
                        <ChevronDown
                          className={`h-3.5 w-3.5 transition-transform duration-200 ${
                            megaMenuOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {megaMenuOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-1/2 top-full w-[520px] -translate-x-1/2 pt-4"
                          >
                            <div className="rounded-xl border border-[#E2E8F0] bg-white p-4 shadow-xl">
                              <div className="mb-3 px-2">
                                <p className="text-xs font-semibold uppercase tracking-wider text-[#5A7184]">
                                  Our Services
                                </p>
                              </div>
                              <div className="grid grid-cols-2 gap-1">
                                {services.map((service) => (
                                  <Link
                                    key={service.title}
                                    href={service.href}
                                    className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-[#F4F7FA]"
                                  >
                                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#1A73E8]/10">
                                      <service.icon className="h-4 w-4 text-[#1A73E8]" />
                                    </div>
                                    <div>
                                      <p className="text-sm font-medium text-[#0F2B46]">
                                        {service.title}
                                      </p>
                                      <p className="text-xs text-[#5A7184]">
                                        {service.description}
                                      </p>
                                    </div>
                                  </Link>
                                ))}
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
                      className="px-5 py-1.5 text-sm font-semibold text-white transition-colors hover:text-white/80"
                    >
                      {link.name} +
                    </Link>
                  )
                )}
              </nav>
            </div>

            {/* Mobile trigger */}
            <MobileMenu />
          </div>
        </div>
      </div>

      {/* ---------- SCROLLED HEADER (compact sticky) ---------- */}
      <motion.header
        initial={false}
        animate={
          scrolled
            ? { y: 0, opacity: 1, pointerEvents: "auto" as const }
            : { y: -80, opacity: 0, pointerEvents: "none" as const }
        }
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-[#E2E8F0] bg-white/98 shadow-md backdrop-blur-md"
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 lg:px-8">
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
                  onMouseEnter={() => setMegaMenuOpen(true)}
                  onMouseLeave={() => setMegaMenuOpen(false)}
                >
                  <button
                    className="group relative flex items-center gap-1 px-4 py-2 text-sm font-semibold text-[#0F2B46] transition-colors hover:text-[#1A73E8]"
                    aria-expanded={megaMenuOpen}
                    aria-haspopup="true"
                  >
                    {link.name}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        megaMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 origin-left scale-x-0 bg-[#1A73E8] transition-transform duration-300 group-hover:scale-x-100" />
                  </button>
                  <AnimatePresence>
                    {megaMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 top-full w-[520px] -translate-x-1/2 pt-2"
                      >
                        <div className="rounded-xl border border-[#E2E8F0] bg-white p-4 shadow-xl">
                          <div className="mb-3 px-2">
                            <p className="text-xs font-semibold uppercase tracking-wider text-[#5A7184]">
                              Our Services
                            </p>
                          </div>
                          <div className="grid grid-cols-2 gap-1">
                            {services.map((service) => (
                              <Link
                                key={service.title}
                                href={service.href}
                                className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-[#F4F7FA]"
                              >
                                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#1A73E8]/10">
                                  <service.icon className="h-4 w-4 text-[#1A73E8]" />
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-[#0F2B46]">
                                    {service.title}
                                  </p>
                                  <p className="text-xs text-[#5A7184]">
                                    {service.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
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
                  className="group relative px-4 py-2 text-sm font-semibold text-[#0F2B46] transition-colors hover:text-[#1A73E8]"
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
              className="hidden bg-[#1A73E8] text-sm font-semibold text-white hover:bg-[#1565C0] lg:inline-flex"
            >
              <Link href="#contact">GET A QUOTE</Link>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </motion.header>
    </>
  )
}

function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-[#0F2B46]"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80 bg-white">
        <SheetHeader>
          <SheetTitle className="text-[#0F2B46]">Navigation</SheetTitle>
        </SheetHeader>
        <nav className="mt-6 flex flex-col gap-1" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="rounded-lg px-4 py-3 text-sm font-medium text-[#0F2B46] transition-colors hover:bg-[#F4F7FA]"
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-2 px-4 py-2">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#5A7184]">
              Services
            </p>
          </div>
          {services.slice(0, 4).map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm text-[#0F2B46] transition-colors hover:bg-[#F4F7FA]"
            >
              <service.icon className="h-4 w-4 text-[#1A73E8]" />
              {service.title}
            </Link>
          ))}
          <div className="mt-4 px-4">
            <Button asChild className="w-full bg-[#1A73E8] text-white hover:bg-[#1565C0]">
              <Link href="#contact">GET A QUOTE</Link>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
