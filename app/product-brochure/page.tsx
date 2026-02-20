import { PageHero } from "@/components/PageHero"
import { ArrowDownToLine } from "lucide-react"

const brochures = [
  { title: "Sophos XG firewall" },
  { title: "Sophos End-point" },
  { title: "Sophos Intercept 'X' with EDR" },
  { title: "Sophos Intercept 'X' advanced for Server with EDR" },
  { title: "Sonicwall TZ Series" },
  { title: "Fortinet Product matrix" },
  { title: "SOTI - MDM" },
  { title: "SOTI MobiControl for Android" },
]

export default function ProductBrochurePage() {
  return (
    <main className="bg-white">
      <PageHero title="Product Brochure" imageSrc="/images/service-backup.jpg" height={600} />

      <section className="border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-3 text-sm text-[#5A7184] lg:px-8">
          <span className="font-medium text-[#096DB5]">DMSYSTEMS</span> {" > "} PRODUCT BROCHURE
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {brochures.map((item) => (
              <a
                key={item.title}
                href="#"
                className="group relative flex flex-col items-center gap-6 rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#E42525]/20 hover:shadow-xl"
              >
                <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-red-50/50 shadow-inner ring-1 ring-red-100 transition-all group-hover:bg-red-50">
                  <svg 
                    viewBox="0 0 384 512" 
                    className="h-10 w-10 fill-[#E42525] transition-transform duration-300 group-hover:scale-110"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24c0-13.3 10.7-24 24-24h184l60 160zm-34.1 303c21.4-13.2 31.7-52.7 6.2-52.7-5.1 0-18 6.5-36.4 17.9l-14.5-7.7c-3.4-1.8-35.1-18.5-35.1-18.5 37.6-29.4 52-96.4 33.3-114.4-16.3-15.7-48.6-1.5-54 13-1.9 5.2-2.6 15.3 1 33.2-3.2 22.6-16.8 54.6-16.8 54.6-35.5 13.3-76.4 33.8-96.7 42.5-9.1 3.9-15.3 8.3-15.3 13 0 16.5 28.3 22 56.5 22 9.6 0 20.5-2.5 31.8-6.8 33.3-12.5 64.9-45 88.3-64.3 15.6 16.9 47.1 53.6 51.5 68.1zm-48.1-158.8c10.1 0 14.9 23.3 15.1 40.1-5.7-2.6-26.7-12.7-36.4-17.9 3.1-9 14.9-22.2 21.3-22.2zm18.9 203c-2.7-6.6-8.7-25.2-13.5-39.6 16.2 5.5 40.1 11.8 45.4 12.3 2.1 0 4.1-.1 6-.5-12.8 17.7-29.6 26-37.9 27.8z" />
                  </svg>
                  <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#E42525] text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <ArrowDownToLine className="h-4 w-4" />
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-[#0F2B46] group-hover:text-[#E42525] transition-colors">
                  {item.title}
                </h3>
                
                <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1.5 text-xs font-medium text-[#E42525] ring-1 ring-inset ring-red-600/10 transition-all group-hover:bg-[#E42525] group-hover:text-white">
                  Download PDF
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
