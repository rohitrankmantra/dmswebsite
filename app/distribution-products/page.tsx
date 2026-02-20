import { PageHero } from "@/components/PageHero"
import Image from "next/image"

const products = [
  {
    name: "SonicWall",
    logo: "/distribution/1.jpg",
    role: "Platinum Partner",
  },
  {
    name: "Sophos",
    logo: "/distribution/sophos.jpg",
    role: "Sub Distributor",
  },
  {
    name: "Ruijie",
    logo: "/distribution/ruijiee.jpg",
    role: "National Distributor",
  },
  {
    name: "FileAgo",
    logo: "/distribution/file.jpg",
    role: "National Distributor",
  },
  {
    name: "Bitdefender",
    logo: "/distribution/bit.jpg",
    role: "Regional Distributor",
  },
]

export default function DistributionProductsPage() {
  return (
    <main className="bg-white">
      <PageHero title="Distribution Products" imageSrc="/images/service-backup.jpg" height={600} />

      <section className="border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-3 text-sm text-[#5A7184] lg:px-8">
          <span className="font-medium text-[#096DB5]">DMSYSTEMS</span> {" > "} DISTRIBUTION PRODUCTS
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {products.map((product) => (
              <div
                key={product.name}
                className="group flex flex-col items-center gap-6 rounded-xl bg-white p-8 shadow-sm ring-1 ring-gray-100 transition-all hover:-translate-y-1 hover:shadow-lg hover:ring-[#096DB5]/20"
              >
                <div className="relative h-20 w-full">
                  <Image
                    src={product.logo}
                    alt={`${product.name} logo`}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-medium text-[#5A7184]">
                    {product.role}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
