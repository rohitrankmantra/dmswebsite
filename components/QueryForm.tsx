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
        className="fixed right-0 top-[60%] z-30 hidden -translate-y-1/2 rounded-lg bg-[#074f8e] px-6 py-2 text-white shadow-xl transition-colors md:block"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        Query Form
      </button>
      <button
        onClick={() => setOpen(true)}
        className="fixed left-4 bottom-24 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#074f8e] text-white shadow-xl md:hidden"
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
              className="fixed right-0 top-0 z-50 h-full w-full max-w-md bg-white shadow-2xl md:w-96"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-gray-200 bg-[#074f8e] px-6 py-4 text-white">
                <h2 className="text-xl font-semibold">Send Your Query</h2>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full p-2 hover:bg-white/20 transition-colors"
                  aria-label="Close"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Form Content */}
              <div className="h-[calc(100%-76px)] overflow-y-auto p-6">
                <form className="flex flex-col gap-5">
                  <div>
                    <Label htmlFor="name" className="text-[#074f8e]">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      required
                      className="mt-1.5 focus-visible:ring-[#074f8e]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-[#074f8e]">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@company.com"
                      required
                      className="mt-1.5 focus-visible:ring-[#074f8e]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-[#074f8e]">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      required
                      className="mt-1.5 focus-visible:ring-[#074f8e]"
                    />
                  </div>

                  <div>
                    <Label className="text-[#074f8e] mb-2 block">
                      I am a *
                    </Label>
                    <RadioGroup
                      defaultValue="vendor"
                      value={subject}
                      onValueChange={setSubject}
                      className="grid grid-cols-3 gap-3"
                    >
                      <div className="flex items-center space-x-2 rounded-lg border border-gray-200 p-3 hover:border-[#074f8e]/50 transition-colors">
                        <RadioGroupItem value="vendor" id="vendor" />
                        <Label htmlFor="vendor" className="cursor-pointer">
                          Vendor
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2 rounded-lg border border-gray-200 p-3 hover:border-[#074f8e]/50 transition-colors">
                        <RadioGroupItem value="job" id="job" />
                        <Label htmlFor="job" className="cursor-pointer">
                          Job Seeker
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2 rounded-lg border border-gray-200 p-3 hover:border-[#074f8e]/50 transition-colors">
                        <RadioGroupItem value="guest" id="guest" />
                        <Label htmlFor="guest" className="cursor-pointer">
                          Guest
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-[#074f8e]">
                      Your Message / Query
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you today?"
                      rows={5}
                      className="mt-1.5 resize-none focus-visible:ring-[#074f8e]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="mt-4 bg-[#074f8e] hover:bg-[#096db5] text-white text-base py-6"
                  >
                    Submit Query
                  </Button>

                  <p className="text-center text-xs text-gray-500 mt-3">
                    We respect your privacy. Your information is safe with us.
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
