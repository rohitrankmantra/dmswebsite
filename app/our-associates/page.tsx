import { PageHero } from "@/components/PageHero"
import Image from "next/image"

const associates = [
  { name: "Fortinet", logo: "/associates/fortinet.jpg" },
  { name: "SonicWall", logo: "/associates/sonicwall.jpg" },
  { name: "Sophos", logo: "/associates/sophos.jpg" },
  { name: "Palo Alto Networks", logo: "/associates/paloalto.png" },
  { name: "Dell", logo: "/associates/dell.jpg" },
  { name: "HP", logo: "/associates/hp.png" },
  { name: "IBM", logo: "/associates/ibm.jpg" },
  { name: "Lenovo", logo: "/associates/lenovo.jpg" },
  { name: "F5", logo: "/associates/f5.jpg" },
  { name: "McAfee", logo: "/associates/mcafee.jpg" },
  { name: "Guardsquare", logo: "/associates/guardsqaure.png" },
  { name: "Trend Micro", logo: "/associates/trend.jpg" },
  { name: "F-Secure", logo: "/associates/fsure.jpg" },
  { name: "Cisco", logo: "/associates/cisco.jpg" },
  { name: "Commvault", logo: "/associates/commvault.jpg" },
  { name: "Ruijie", logo: "/associates/ruijie.jpg" },
]

export default function AssociatesPage() {
  return (
    <main className="bg-white">
      <PageHero title="Our Associates" imageSrc="/images/service-backup.jpg" height={600} />

      <section className="border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-3 text-sm text-[#5A7184] lg:px-8">
          <span className="font-medium text-[#096DB5]">DMSYSTEMS</span> {" > "} OTHER ASSOCIATES
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-2xl font-bold text-[#0F2B46] lg:text-3xl" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-[#5A7184] leading-relaxed">
              DM Systems is the preferred partner of most cyber security solution product firms. 
              All leading firms offering security products have partnered with us.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:gap-8">
            {associates.map((partner) => (
              <div
                key={partner.name}
                className="group relative flex h-32 items-center justify-center rounded-xl border border-gray-100 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#096DB5]/20 hover:shadow-lg"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain p-2 grayscale transition-all duration-300 group-hover:grayscale-0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
