import Image from "next/image"

type PageHeroProps = {
  title: string
  imageSrc: string
  height?: number | string
}

export function PageHero({ title, imageSrc, height }: PageHeroProps) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: height ?? "420px", minHeight: "350px" }}
    >
      <Image src={imageSrc} alt={title} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-[#0F2B46]/60" />
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
          <h1
            className="text-balance text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif" }}
          >
            {title}
          </h1>
        </div>
      </div>
    </section>
  )
}
