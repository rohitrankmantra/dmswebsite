import { PageHero } from "@/components/PageHero"
import Image from "next/image"

type Member = {
  name: string
  role: string
  image: string
  description: string
}

const team: Member[] = [
  {
    name: "Devender Kumar Bajaj",
    role: "Director • CEO",
    image: "/images/DK_Bajaj.webp",
    description:
      "Well-known in the IT industry and a pioneer in cyber security, started the company over two decades ago. Held senior management positions with leading organizations and has consulted for Government and Private sector companies across India and abroad.",
  },
  {
    name: "JV Manisha Bajaj",
    role: "Director",
    image: "/images/Manisha.webp",
    description:
      "Post Graduate from Delhi University with decades of experience in production, direction and communication. Leads initiatives across government and private companies and drives creative operations and outreach.",
  },
  {
    name: "Pancham Bajaj",
    role: "Director",
    image: "/images/pancham.webp",
    description:
      "Brings new perspectives and energy to business and processes. Focuses on innovative business ideas and building client relationships with confidence and reliability.",
  },
  {
    name: "JP Verma",
    role: "Advisor",
    image: "/images/JP_Verma.webp",
    description:
      "Retired IT professional with experience spanning five decades. Senior member of respected technology societies and contributor to national committees and publications.",
  },
  {
    name: "Pallavi Bhardwaj",
    role: "Operations",
    image: "/images/pallavi.webp",
    description:
      "Experience of over 19 years in operations and channel business. Ensures service and support excellence and drives smooth functioning of core operations.",
  },
]

export default function TeamPage() {
  return (
    <main className="bg-white">
      <PageHero title="Our Team" imageSrc="/images/service-backup.jpg" height={600} />

      <section className="relative py-24">
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%">
            <pattern id="dotGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#096DB5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dotGrid)" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="mb-20 border-l-4 border-[#096DB5] pl-6">
            <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#096DB5]">Corporate</h2>
            <h3 className="text-3xl font-bold text-[#0F2B46] lg:text-4xl" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
              Leadership Board
            </h3>
          </div>

          <div className="space-y-24">
            {team.map((m, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center gap-8 md:flex-row ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="relative group shrink-0">
                  <div className="absolute -inset-3 border border-[#096DB5]/10 group-hover:border-[#096DB5]/30 transition-colors" />
                  <div className="relative h-72 w-64 overflow-hidden bg-white border-4 border-white shadow-xl">
                    <Image src={m.image} alt={m.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <svg className="absolute -top-1 -left-1 h-8 w-8 text-[#096DB5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 5h4M5 5v4" />
                  </svg>
                </div>

                <div className="flex-1 space-y-4">
                  <div className="inline-block rounded-sm bg-[#F2F7FF] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#096DB5] ring-1 ring-inset ring-[#096DB5]/20">
                    {m.role}
                  </div>
                  <h4 className="text-2xl font-bold text-[#0F2B46] lg:text-3xl">{m.name}</h4>
                  <div className="relative">
                    <div className="absolute left-0 top-0 h-full w-[2px] bg-[#096DB5]/10" />
                    <p className="pl-6 text-[15px] leading-relaxed text-[#5A7184]">{m.description}</p>
                  </div>
                  <div className="pt-4 flex items-center gap-4">
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="h-1 w-1 rounded-full bg-[#096DB5]" />
                      ))}
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-300">Certified Leadership</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
