import { PageHero } from "@/components/PageHero"
import Image from "next/image"

const solutions = [
  {
    title: "Perimeter Security Solutions",
    image: "/product-offering/Information_Security.jpg",
  },
  {
    title: "End-Point & Server Security",
    image: "/product-offering/Information_Availability.jpg",
  },
  {
    title: "Data Security Solutions",
    image: "/product-offering/big_data.png",
  },
  {
    title: "Infrastructure Solutions",
    image: "/product-offering/Information_Infrastructure.jpg",
  },
]

const partners = [
  { name: "SOTI", logo: "/associates/soti.jpg" },
  { name: "ManageEngine", logo: "/associates/manageengine.png" },
  { name: "Nutanix", logo: "/associates/nitanix.png" },
  { name: "FileAgo", logo: "/associates/fileago.jpg" },
]

export default function ProductOfferingPage() {
  return (
    <main className="bg-white">
      <PageHero title="Product Offering" imageSrc="/images/service-backup.jpg" height={600} />

      <section className="border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-3 text-sm text-[#5A7184] lg:px-8">
          <span className="font-medium text-[#096DB5]">DMSYSTEMS</span> {" > "} PRODUCT OFFERING
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-[#096DB5]/10">
              <Image
                src="/product-offering/our_solution.jpg"
                alt="Solution"
                width={600}
                height={400}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#0F2B46] lg:text-4xl" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                Comprehensive Security Solutions
              </h2>
              <div className="space-y-4 text-lg text-[#5A7184] leading-relaxed">
                <p>
                  DM Systems offers cyber security solutions at each layer of your business infrastructure. 
                  That solution is not just about a product or application. For us, solution is a long-term commitment.
                </p>
                <p>
                  That is why we offer solution packages which include service and technical support at every step. 
                  We help you to be worry-free from any kind of cyber security attacks or data theft so you can focus on 
                  business growth with our able support.
                </p>
                <p>
                  Our confidence in providing the right solutions comes from the fact that we have been part of the 
                  industry for multi-decades with deep roots and associates from the industry.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((item) => (
              <div key={item.title} className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all hover:-translate-y-2 hover:shadow-xl">
                <div className="relative aspect-4/3 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 border-t border-gray-100 pt-16">
            <h3 className="mb-12 text-center text-2xl font-bold text-[#0F2B46] lg:text-3xl" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
              Technology Partners
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-16">
              {partners.map((partner) => (
                <div key={partner.name} className="relative h-16 w-40 grayscale transition-all duration-300 hover:grayscale-0 hover:scale-105">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
