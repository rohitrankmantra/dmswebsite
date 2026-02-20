import { PageHero } from "@/components/PageHero"
import Image from "next/image"

export default function MissionVisionPage() {
  return (
    <main className="bg-white">
      <PageHero title="Mission & Vision" imageSrc="/images/achievements-bg.jpg" height={500} />

      {/* Breadcrumb - Minimalist */}
      <nav className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 text-[10px] font-bold uppercase tracking-[0.4em] text-[#5A7184] lg:px-8">
          <span className="text-[#096DB5]">DMSYSTEMS</span>
          <span className="mx-3 opacity-20">/</span>
          <span>Mission & Vision</span>
        </div>
      </nav>

      {/* Vision Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            
            {/* Image Styling: The "Floating Canvas" */}
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              {/* Decorative SVG Frame behind image */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#096DB5]/20" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#096DB5]/20" />
              
              <div className="relative z-10 bg-white p-2 shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.1)] ring-1 ring-gray-100">
                <Image
                  src="/images/about-company.jpg"
                  alt="Vision"
                  width={600}
                  height={450}
                  className="w-full h-auto object-contain" // Ensures image shows fully without weird crops
                  priority
                />
              </div>
            </div>

            {/* Vision Text Content */}
            <div className="max-w-xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#096DB5]">Corporate Identity</span>
              </div>
              <h2
                className="mb-8 text-3xl font-bold text-[#0F2B46] lg:text-4xl"
                style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
              >
                Vision
              </h2>
              <p className="text-[#0F2B46] text-lg leading-relaxed font-light border-l-4 border-[#096DB5] pl-8">
                We stand for a culture committed to promoting long-term employee and customer relationships by striving
                to be a versatile technology consulting company focused on transformation and making it the fuel of success.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-24 bg-[#F8FAFC]">
        {/* Subtle Tech Pattern Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%">
            <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#096DB5" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            
            {/* Mission Text Content (Left on desktop) */}
            <div className="order-2 lg:order-1 max-w-xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#096DB5]">Strategic Roadmap</span>
              </div>
              <h2
                className="mb-8 text-3xl font-bold text-[#0F2B46] lg:text-4xl"
                style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
              >
                Mission
              </h2>
              <p className="text-[#0F2B46] text-lg leading-relaxed font-light border-l-4 border-[#096DB5] pl-8">
                To be the go to partner for all technology driven IT solutions and build a conglomerate on the blocks
                of Trust, Support and Innovation.
              </p>
              
              {/* Decorative data SVG dots */}
              <div className="mt-12 flex gap-2">
                 {[1,2,3,4,5].map(i => <div key={i} className="h-1.5 w-1.5 rounded-full bg-[#096DB5]/30" />)}
              </div>
            </div>

            {/* Image Styling (Right on desktop) */}
            <div className="order-1 lg:order-2 relative w-full max-w-md mx-auto lg:ml-auto">
              <div className="absolute inset-0 bg-[#096DB5]/5 -rotate-3 transform" />
              <div className="relative z-10 bg-white p-2 shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.1)] ring-1 ring-gray-100">
                <Image
                  src="/images/why-best.jpg"
                  alt="Mission"
                  width={600}
                  height={450}
                  className="w-full h-auto object-contain"
                />
              </div>
              
              {/* Minimalist SVG Tag */}
              <div className="absolute top-4 right-4 z-20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#096DB5]">
                   <path d="M12 2L12 22M2 12L22 12" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}