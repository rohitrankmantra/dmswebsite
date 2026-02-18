"use client"

import Link from "next/link"
import Image from "next/image"
import {
  Shield,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Send,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const officialLinks = [
  { name: "About us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Our Team", href: "#team" },
  { name: "Careers", href: "#" },
  { name: "Contact us", href: "#contact" },
]

const galleryImages = [
  "/images/service-backup.jpg",
  "/images/service-voip.jpg",
  "/images/service-consulting.jpg",
  "/images/service-it.jpg",
  "/images/connect-1.jpg",
  "/images/connect-2.jpg",
]

const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "Twitter" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Instagram, label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="bg-[#0A1929] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="mb-5 inline-flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1A73E8]">
                <Shield className="h-4 w-4 text-white" />
              </div>
              <span
                className="text-lg font-bold tracking-tight text-white"
                style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
              >
                DM Systems
              </span>
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-white/60">
              We provide customized cybersecurity and IT solutions to protect
              your business. Our expertise spans perimeter security, email
              security, endpoint solutions, and comprehensive security audits.
            </p>
            <div className="flex gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white/70 transition-colors hover:bg-[#1A73E8] hover:text-white"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3
              className="mb-5 text-base font-bold text-white"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Newsletter
            </h3>
            <p className="mb-5 text-sm leading-relaxed text-white/60">
              Subscribe to our newsletter for the latest cybersecurity insights,
              IT tips, and company updates.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="h-10 flex-1 rounded-l-md border-0 bg-white/10 px-4 text-sm text-white placeholder-white/40 outline-none focus:ring-1 focus:ring-[#1A73E8]"
                aria-label="Email address for newsletter"
              />
              <Button
                type="submit"
                className="h-10 rounded-l-none rounded-r-md bg-[#1A73E8] px-3 hover:bg-[#1565C0]"
                aria-label="Subscribe"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
              >
                <Phone className="h-3.5 w-3.5 text-[#1A73E8]" />
                +91 98765 43210
              </a>
              <a
                href="mailto:info@dmsystems.in"
                className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
              >
                <Mail className="h-3.5 w-3.5 text-[#1A73E8]" />
                info@dmsystems.in
              </a>
              <span className="flex items-center gap-2 text-sm text-white/60">
                <MapPin className="h-3.5 w-3.5 text-[#1A73E8]" />
                Bangalore, India
              </span>
            </div>
          </div>

          {/* Official Info */}
          <div>
            <h3
              className="mb-5 text-base font-bold text-white"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Official Info
            </h3>
            <ul className="flex flex-col gap-3">
              {officialLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-[#1A73E8]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery */}
          <div>
            <h3
              className="mb-5 text-base font-bold text-white"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Gallery
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-square overflow-hidden rounded-md"
                >
                  <Image
                    src={img}
                    alt={`Gallery image ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-white/50">
              &copy; {new Date().getFullYear()} DM Systems. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
