"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import {
  Moon,
  Sun,
  Menu,
  X,
  ChevronDown,
  Shield,
  Mail,
  Monitor,
  ClipboardCheck,
  Server,
  Lock,
  Globe,
  FileSearch,
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
  {
    title: "Perimeter Security",
    description: "Protect your network boundaries",
    icon: Shield,
    href: "#services",
  },
  {
    title: "Email Security",
    description: "Secure your communications",
    icon: Mail,
    href: "#services",
  },
  {
    title: "End Point Solutions",
    description: "Safeguard every device",
    icon: Monitor,
    href: "#services",
  },
  {
    title: "Security Audits",
    description: "Comprehensive assessments",
    icon: ClipboardCheck,
    href: "#services",
  },
  {
    title: "Data Continuity",
    description: "Disaster recovery solutions",
    icon: Server,
    href: "#services",
  },
  {
    title: "Network Security",
    description: "Infrastructure protection",
    icon: Lock,
    href: "#services",
  },
  {
    title: "Cloud Security",
    description: "Secure cloud deployments",
    icon: Globe,
    href: "#services",
  },
  {
    title: "Compliance",
    description: "Regulatory compliance support",
    icon: FileSearch,
    href: "#services",
  },
]

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Why Us", href: "#why-us" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
            <Shield className="h-5 w-5 text-accent-foreground" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground font-mono">
            DM Systems
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex" role="navigation" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative px-4 py-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              {link.name}
              <span className="absolute bottom-0 left-4 right-4 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}

          {/* Services Mega Menu */}
          <div
            className="relative"
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={() => setMegaMenuOpen(false)}
          >
            <button
              className="group relative flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
              aria-expanded={megaMenuOpen}
              aria-haspopup="true"
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  megaMenuOpen ? "rotate-180" : ""
                }`}
              />
              <span className="absolute bottom-0 left-4 right-4 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
            </button>

            <AnimatePresence>
              {megaMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-2"
                >
                  <div className="rounded-xl border border-border bg-card p-4 shadow-xl">
                    <div className="mb-3 px-2">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Our Services
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      {services.map((service) => (
                        <Link
                          key={service.title}
                          href={service.href}
                          className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-secondary"
                        >
                          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent/10">
                            <service.icon className="h-4 w-4 text-accent" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground">
                              {service.title}
                            </p>
                            <p className="text-xs text-muted-foreground">
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
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="text-foreground"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          )}

          <Button
            asChild
            className="hidden bg-accent text-accent-foreground hover:bg-accent/90 lg:inline-flex"
          >
            <Link href="#contact">Free Consultation</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-foreground"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-background">
              <SheetHeader>
                <SheetTitle className="text-foreground">Navigation</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="mt-2 px-4 py-2">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Services
                  </p>
                </div>
                {services.slice(0, 4).map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-secondary"
                  >
                    <service.icon className="h-4 w-4 text-accent" />
                    {service.title}
                  </Link>
                ))}
                <div className="mt-4 px-4">
                  <Button
                    asChild
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <Link href="#contact">Free Consultation</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
