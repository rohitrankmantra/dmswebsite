"use client"

import Link from "next/link"
import { PhoneCall } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export default function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-12 z-9999 flex flex-col gap-3">
      
      {/* WhatsApp */}
      <Link
        href="https://wa.me/919999035340"
        target="_blank"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="h-7 w-7" />
      </Link>

      {/* Call */}
      <Link
        href="tel:+911126691429"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#074f8e] text-white shadow-xl hover:scale-110 transition-transform"
        aria-label="Call"
      >
        <PhoneCall className="h-6 w-6" />
      </Link>
    </div>
  )
}
