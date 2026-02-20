import { PageHero } from "@/components/PageHero"
import Image from "next/image"
import {
  Shield,
  Lock,
  Mail,
  FileWarning,
  UserCog,
  KeyRound,
  Smartphone,
  HardDrive,
  Database,
  Building2,
  Rocket,
} from "lucide-react"

const infoSecurity = [
  { icon: Shield, label: "Perimeter and End Point Security" },
  { icon: Lock, label: "Encryption" },
  { icon: Mail, label: "Messaging and Web Security" },
  { icon: FileWarning, label: "DLP and Information Rights Management" },
  { icon: UserCog, label: "Identity and Privilege Access Management" },
  { icon: KeyRound, label: "Strong Authentication (Tokens/Smartcards/Certificates)" },
  { icon: Smartphone, label: "MDM and secure application / information access" },
]

const infoAvailability = [
  { icon: HardDrive, label: "Storage solutions (NAS/SAN/Virtual SAN)" },
  { icon: Database, label: "Backup and DR, Data Archiving" },
]

const infoCollaboration = [
  { icon: Building2, label: "Collaboration infrastructure for post PC era" },
  { icon: Rocket, label: "Application delivery and VDI for post PC era" },
]

export default function WhatWeDoPage() {
  return (
    <main className="bg-white">
      <PageHero title="What We Do" imageSrc="/images/service-backup.jpg" height={450} />

      {/* Compact Breadcrumb */}
      <nav className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.4em] text-[#A0AEC0]">
          <span className="text-[#096DB5]">DMSYSTEMS</span>
          <span className="mx-3 opacity-20">/</span>
          <span>What We Do</span>
        </div>
      </nav>

      {/* Intro Section - Refined Proportions */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[400px_1fr]">
            <div className="relative group mx-auto w-full max-w-sm">
              <div className="absolute -inset-3 border border-[#096DB5]/10 rounded-sm pointer-events-none" />
              <div className="relative overflow-hidden bg-white p-1.5 shadow-2xl ring-1 ring-black/5">
                <Image
                  src="/images/service-it.jpg"
                  alt="Cyber security"
                  width={400}
                  height={280}
                  className="w-full h-auto grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
                  priority
                />
              </div>
            </div>
            <div>
              <div className="mb-4 inline-block px-3 py-1 bg-[#096DB5]/5 border-l-2 border-[#096DB5]">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#096DB5]">Enterprise Grade</span>
              </div>
              <h2 className="mb-6 text-3xl font-bold text-[#0F2B46] tracking-tight" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                Secure, Monitor and Audit Your Enterprise
              </h2>
              <p className="text-[#5A7184] text-[15px] leading-relaxed max-w-2xl mb-8">
                We design, deploy, monitor & audit cyber security solutions to the highest possible quality and technological ends. 
                We focus on providing a long term commitment and with our rapid response team, have the capability to handle emergency threats.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Perimeter Defense", "Endpoint Protection", "Rapid Response"].map((tag) => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-tighter px-3 py-1 bg-white border border-gray-100 text-[#5A7184] shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Banner - Focused & Clean */}
      <section className="bg-[#0F2B46] py-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%"><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="white" /></pattern><rect width="100%" height="100%" fill="url(#dots)" /></svg>
        </div>
        <div className="mx-auto max-w-4xl px-6 relative z-10 text-center">
          <p className="text-white text-lg md:text-xl font-light leading-relaxed opacity-90">
            Today we are partners with leading Technology providers and have robust skillset to take up most complex Information Technology solutions.
          </p>
        </div>
      </section>

      {/* Service Blocks - Information Security */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col items-center">
             <h2 className="text-xl font-bold text-[#0F2B46] uppercase tracking-[0.2em] mb-4">Information Security</h2>
             <div className="h-0.5 w-10 bg-[#096DB5]" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-px bg-gray-100 border border-gray-100 overflow-hidden shadow-sm">
            {infoSecurity.map((item, i) => (
              <div key={i} className="group bg-white p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-[#096DB5]">
                <div className="mb-4 text-[#096DB5] group-hover:text-white transition-colors">
                  <item.icon size={24} strokeWidth={1.5} />
                </div>
                <p className="text-[10px] font-bold text-[#0F2B46] group-hover:text-white uppercase tracking-tight leading-snug">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Sections - Availability & Collaboration */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
            {/* Availability */}
            <div className="bg-white p-10">
              <h3 className="text-sm font-black uppercase tracking-[0.3em] text-[#0F2B46] mb-8 border-b border-gray-100 pb-4">Information Availability</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {infoAvailability.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <item.icon className="text-[#096DB5] shrink-0" size={20} />
                    <span className="text-[12px] font-bold text-[#5A7184] leading-tight uppercase tracking-tight">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Collaboration */}
            <div className="bg-white p-10">
              <h3 className="text-sm font-black uppercase tracking-[0.3em] text-[#0F2B46] mb-8 border-b border-gray-100 pb-4">Information Collaboration</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {infoCollaboration.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <item.icon className="text-[#096DB5] shrink-0" size={20} />
                    <span className="text-[12px] font-bold text-[#5A7184] leading-tight uppercase tracking-tight">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HPC & Data - Technical Box */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-5xl px-6">
          <div className="bg-[#0F2B46] p-10 shadow-2xl relative">
            <div className="absolute top-0 right-0 p-4">
              <div className="h-2 w-2 rounded-full bg-[#096DB5] animate-pulse" />
            </div>
            <h2 className="text-lg font-bold text-white uppercase tracking-widest mb-10 text-center border-b border-white/10 pb-6">
              High Performance Computing / Genome Sequencing & Big Data
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="flex gap-5">
                <KeyRound size={28} className="text-[#096DB5] shrink-0" />
                <p className="text-[13px] text-gray-300 leading-relaxed font-light">
                  Complete opensource HPC stack for bioinformatics/genomics/oil & gas/molecular dynamics/chemistry/drug discovery
                </p>
              </div>
              <div className="flex gap-5">
                <Database size={28} className="text-[#096DB5] shrink-0" />
                <p className="text-[13px] text-gray-300 leading-relaxed font-light">
                  Hadoop based solution sets for enterprise scalability and high-volume data analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Infrastructure - Flat Minimal Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col items-center">
             <h2 className="text-xl font-bold text-[#0F2B46] uppercase tracking-[0.2em] mb-4">Information Infrastructure</h2>
             <div className="h-0.5 w-10 bg-[#096DB5]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Building2, label: "Enterprise-grade infrastructure solutions" },
              { icon: HardDrive, label: "Modern storage and compute platforms" },
              { icon: Database, label: "Secure data services" },
              { icon: Shield, label: "Compliance and governance" }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 grayscale hover:grayscale-0 transition-all">
                <div className="h-8 w-8 flex items-center justify-center bg-[#F8FAFC] text-[#096DB5] border border-gray-100">
                  <item.icon size={16} />
                </div>
                <p className="text-[11px] font-black text-[#5A7184] uppercase tracking-tight leading-tight">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}