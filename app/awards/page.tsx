import { PageHero } from "@/components/PageHero"
import Image from "next/image"
import { Award, Trophy, Star, Medal } from "lucide-react"

const awardsList = [
  "Recently awarded as Enterprise Partner of the year for by Sonicwall for the year 2019.",
  "Recently awarded at Gold Partner of the year for India & SAARC by Sonicwall for the year 2019.",
  "Awarded Security Specialist at National convention Super100 at SMEChannels at Goa for the year 2019",
  "Awarded Top 100 Premier Companies in India by ChannelWorld for the year 2019.",
  "Awarded the Piller of Excellence award at Sri Lanka at Sonicwall SAARC for the year 2018.",
  "Awarded by VARINDIA for the Best Security Partner, Nationally for the year 2018.",
  "Awarded the Best Value Added Sub-Distributor for by Sophos for the year 2018.",
  "Awarded by ChannelWorld for 100 Premier IT Companies in India for the year 2018.",
  "Awarded as for the Top Award for Excellence by Sonicwall for North India for the year 2017.",
  "Awarded Super50 ( Best 50 service providers – Nationally ) by SME Channels.",
  "Awarded the Most Promising Partner for the year 2016 by F-Secure.",
  "Awarded for the Outstanding Performance for 2015-16 in APJ by Sonicwall",
  "Awarded as The Most Consistent Partner for 2015-2016 – Nationally by Sonicwall.",
  "Awarded Premier 100: The 100 Transformers by IDG India for the year 2016.",
  "Awarded the Best Security Partner of the year 2015 byDell.",
  "Awarded with Hall of Fame award by ChannelWorld for the year 2015.",
  "Awarded AGILE 100 Award by ChannelWorld for the year 2015.",
  "Awarded INGENIOUS 100 AWARD by IDG India for 2014.",
  "Awarded BOLD 100 ( Premier 100 Companies ) award by IDG India for 2013.",
  "Awarded for Premier 100 Companies award by ChannelWorld 2012 in Mumbai",
  "Awarded special award for Security by ChannelWorld 2012 in Mumbai",
  "Awarded Emerging Solution Provider ( Security ) by ITPV for the year 2011.",
  "Awarded by CRN Channel Award for best networking partner 2005-2006",
]

const dellSonicwallAwards = [
  "No. 1 Medallion Partner – North for the year 2010-11",
  "Best Medallion Partner – North for the year 2009-10",
  "Best Technical Engineer Award – North for the year 2009-10.",
  "Best Medallion Partner – North for the year 2008-09.",
  "Technical Achievement Award for year 2008-09.",
  "Best Technical Architect Award for the year 2007-08.",
  "Best New Product Business Award for the year 2007-08",
]

const cyberoamSophosAwards = [
  "The best Value Added Sub-Distributor for the year 2018.",
  "The Most Consistent Sub-Distributor for the year 2017",
  "The Most Consistent Partner for the year 2017.",
  "High Achiever Gold Partner award for the year 2016",
  "The Most Consistent Partner for the year 2016.",
  "The Best Gold Partner of for the year 2015.",
  "Recently the Most Consistent Business Partner for the year 2015.",
  "The Best SME Business Partner award for the year 2014.",
  "The Best Gold Partner for North India for the year 2013-14.",
  "The Best Value Added Sub-Distributor /Enterprise Partner for 2012-13.",
  "The Best Value Added Sub-Distributor for the year 2012-13.",
  "The Best Value Added Partner for Delhi & NCR for the year 2011-12",
  "For Excellent Contribution for the year 2010-11",
  "Best Gold partner award for north zone year 2013-14",
]

const bentoImages = [
  { src: "/awards/award.jpg", alt: "Award Ceremony" },
  { src: "/awards/award_final.jpg", alt: "Award Acceptance" },
  { src: "/awards/hall.jpg", alt: "Hall of Fame" },
  { src: "/awards/SophosAwards.jpg", alt: "Sophos Award" },
  { src: "/awards/web-pic-1.jpg", alt: "Team Achievement" },
  { src: "/awards/web-pic-13.jpg", alt: "Award Moment" },
  { src: "/awards/web-pic-2.jpg", alt: "Recognition" },
  { src: "/awards/web-pic-3.jpg", alt: "Celebration" },
  { src: "/awards/web-pic-11.jpg", alt: "Award Night" },
  { src: "/awards/web-pic-14.jpg", alt: "Success" },
  { src: "/awards/web-pic-15.jpg", alt: "Victory" },
  { src: "/awards/web-pic-16.jpg", alt: "Team Photo" },
  { src: "/awards/web-pic-18.jpg", alt: "Milestone" },
  { src: "/awards/web-pic-19.jpg", alt: "Achievement" },
  { src: "/awards/frame.jpg", alt: "Certificate" },
  { src: "/awards/frame3.jpg", alt: "Appreciation" },
]

export default function AwardsPage() {
  return (
    <main className="bg-white">
      <PageHero title="Awards & Recognition" imageSrc="/images/achievements-bg.jpg" height={500} />

      <section className="border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-3 text-sm text-[#5A7184] lg:px-8">
          <span className="font-medium text-[#096DB5]">DMSYSTEMS</span> {" > "} AWARDS
        </div>
      </section>

      {/* Main Awards List */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#096DB5]/10 text-[#096DB5]">
              <Trophy className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold text-[#0F2B46] lg:text-4xl">Awards & Recognition</h2>
          </div>
          
          <div className="grid gap-x-12 gap-y-6 md:grid-cols-2">
            {awardsList.map((award, index) => (
              <div key={index} className="flex gap-4 group">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#096DB5]/10 text-[#096DB5] transition-colors group-hover:bg-[#096DB5] group-hover:text-white">
                  <Star className="h-3 w-3" />
                </div>
                <p className="text-gray-600 leading-relaxed">{award}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Gallery */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#0F2B46]">Moments of Glory</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {bentoImages.map((image, i) => (
              <div 
                key={i} 
                className="group relative aspect-square overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dell Sonicwall Awards */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#096DB5]/10 text-[#096DB5]">
                  <Medal className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold text-[#0F2B46]">Dell Sonicwall Awards</h2>
              </div>
              <div className="space-y-4">
                {dellSonicwallAwards.map((award, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#096DB5] ring-2 ring-[#096DB5]/20 group-hover:ring-[#096DB5]/40 transition-all" />
                    <p className="text-gray-600">{award}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-100 overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/awards/award_credentials.jpg"
                alt="Dell Sonicwall Award"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cyberoam / Sophos Awards */}
      <section className="bg-[#0F2B46] py-16 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
             <div className="relative h-125 overflow-hidden rounded-2xl shadow-2xl order-2 lg:order-1">
              <Image
                src="/awards/SophosAwards.jpg"
                alt="Sophos Award"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0F2B46] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-2xl font-bold text-white">Cyberoam / Sophos Awards</h3>
                <p className="mt-2 text-gray-300">Celebrating excellence in security solutions</p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-sm">
                  <Award className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">Cyberoam / Sophos Awards</h2>
              </div>
              <div className="space-y-4">
                {cyberoamSophosAwards.map((award, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#48C0E8] ring-2 ring-[#48C0E8]/20 group-hover:ring-[#48C0E8]/40 transition-all" />
                    <p className="text-gray-300 group-hover:text-white transition-colors">{award}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
