"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function QueryForm() {
  const [open, setOpen] = useState(false)
  const [subject, setSubject] = useState("vendor")

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed right-0 top-[60%] z-30 hidden -translate-y-1/2 rounded-lg bg-[#0F2B46] px-6 py-2 text-white shadow-xl transition-colors md:block hover:bg-[#1A73E8]"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        Query Form
      </button>
      <button
        onClick={() => setOpen(true)}
        className="fixed left-4 bottom-24 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#0F2B46] text-white shadow-xl md:hidden hover:bg-[#1A73E8]"
        aria-label="Open Query Form"
      >
        ?
      </button>

      {/* Sliding Panel */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Form Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 z-50 h-full w-full max-w-md bg-white shadow-2xl md:w-[450px]"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#1A73E8]/20 bg-[#0F2B46] px-8 py-6 text-white shadow-md">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">Send Query</h2>
                  <p className="text-xs text-blue-100 mt-1">We'll get back to you shortly</p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-all duration-200"
                  aria-label="Close"
                >
                  <X className="h-5 w-5 text-white" />
                </button>
              </div>

              {/* Form Content */}
              <div className="h-[calc(100%-88px)] overflow-y-auto p-8">
                <form className="flex flex-col gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-semibold text-[#0F2B46]">
                      Full Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      required
                      className="h-12 border-gray-200 bg-gray-50/50 px-4 text-base focus-visible:border-[#0F2B46] focus-visible:ring-[#0F2B46]/20 transition-all duration-200 rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold text-[#0F2B46]">
                      Email Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      required
                      className="h-12 border-gray-200 bg-gray-50/50 px-4 text-base focus-visible:border-[#0F2B46] focus-visible:ring-[#0F2B46]/20 transition-all duration-200 rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-semibold text-[#0F2B46]">
                      Phone Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      required
                      className="h-12 border-gray-200 bg-gray-50/50 px-4 text-base focus-visible:border-[#0F2B46] focus-visible:ring-[#0F2B46]/20 transition-all duration-200 rounded-lg"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label className="text-sm font-semibold text-[#0F2B46] block">
                      I am a <span className="text-red-500">*</span>
                    </Label>
                    <RadioGroup
                      defaultValue="vendor"
                      value={subject}
                      onValueChange={setSubject}
                      className="grid grid-cols-3 gap-3"
                    >
                      <div className={`relative flex items-center justify-center rounded-xl border-2 p-3 transition-all duration-200 cursor-pointer ${subject === 'vendor' ? 'border-[#0F2B46] bg-[#0F2B46]/5' : 'border-gray-100 hover:border-[#0F2B46]/30'}`}>
                        <RadioGroupItem value="vendor" id="vendor" className="sr-only" />
                        <Label htmlFor="vendor" className={`cursor-pointer text-sm font-medium ${subject === 'vendor' ? 'text-[#0F2B46]' : 'text-gray-600'}`}>
                          Vendor
                        </Label>
                      </div>

                      <div className={`relative flex items-center justify-center rounded-xl border-2 p-3 transition-all duration-200 cursor-pointer ${subject === 'job' ? 'border-[#0F2B46] bg-[#0F2B46]/5' : 'border-gray-100 hover:border-[#0F2B46]/30'}`}>
                        <RadioGroupItem value="job" id="job" className="sr-only" />
                        <Label htmlFor="job" className={`cursor-pointer text-sm font-medium ${subject === 'job' ? 'text-[#0F2B46]' : 'text-gray-600'}`}>
                          Job Seeker
                        </Label>
                      </div>

                      <div className={`relative flex items-center justify-center rounded-xl border-2 p-3 transition-all duration-200 cursor-pointer ${subject === 'guest' ? 'border-[#0F2B46] bg-[#0F2B46]/5' : 'border-gray-100 hover:border-[#0F2B46]/30'}`}>
                        <RadioGroupItem value="guest" id="guest" className="sr-only" />
                        <Label htmlFor="guest" className={`cursor-pointer text-sm font-medium ${subject === 'guest' ? 'text-[#0F2B46]' : 'text-gray-600'}`}>
                          Guest
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-semibold text-[#0F2B46]">
                      Your Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you today?"
                      rows={5}
                      className="min-h-[120px] border-gray-200 bg-gray-50/50 p-4 text-base resize-none focus-visible:border-[#0F2B46] focus-visible:ring-[#0F2B46]/20 transition-all duration-200 rounded-lg"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="mt-2 h-14 w-full bg-[#0F2B46] hover:bg-[#1A73E8] text-white text-lg font-semibold tracking-wide shadow-lg shadow-[#0F2B46]/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 rounded-xl"
                  >
                    Submit Query
                  </Button>

                  <p className="text-center text-xs text-gray-400">
                    Protected by reCAPTCHA and subject to the Privacy Policy.
                  </p>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
