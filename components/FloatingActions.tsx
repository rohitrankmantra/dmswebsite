"use client"

import Link from "next/link"
import { PhoneCall } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export default function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-6 sm:bottom-10 z-30 flex flex-col gap-3">
      
      {/* WhatsApp */}
      <Link
        href="https://wa.me/919999035340"
        target="_blank"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-xl hover:scale-110 transition-transform sm:h-14 sm:w-14"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="h-6 w-6 sm:h-7 sm:w-7" />
      </Link>

      {/* Call */}
      <Link
        href="tel:+911126691429"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#074f8e] text-white shadow-xl hover:scale-110 transition-transform sm:h-14 sm:w-14"
        aria-label="Call"
      >
        <PhoneCall className="h-5 w-5 sm:h-6 sm:w-6" />
      </Link>
    </div>
  )
}
