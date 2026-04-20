"use client"

import { useState } from "react"
import { ColorCard } from "@/components/color-card"
import { ColorScenarios } from "@/components/color-scenarios"
import { HeroShapes } from "@/components/hero-shapes"
import { SocialLinks } from "@/components/social-links"

const colors = [
  "Salmon",
  "Coral",
  "Tomato",
  "Peru",
  "Tan",
  "Moccasin",
  "PapayaWhip",
  "Gold",
  "Khaki",
  "Olive",
  "Teal",
  "Turquoise",
  "CornflowerBlue",
  "Indigo",
  "RebeccaPurple",
  "SeaShell",
  "Snow",
  "WhiteSmoke",
  "Gainsboro",
]

export default function Home() {
  const [selectedColor, setSelectedColor] = useState<string>("Salmon")

  return (
    <main className="relative min-h-screen overflow-hidden">
      <section className="relative px-4 sm:px-8 lg:px-12 pt-16 sm:pt-20 lg:pt-28 pb-12">
        <HeroShapes />
        <div className="relative max-w-6xl mx-auto">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
            <span className="inline-block w-2 h-2 rounded-full bg-brand" />
            a tiny side project
          </p>
          <h1 className="font-display text-[14vw] sm:text-[10vw] lg:text-[8.5rem] leading-[0.88] tracking-tight uppercase">
            <span className="block">Guillermo&rsquo;s</span>
            <span className="block text-brand">favorite</span>
            <span className="block">HTML colors.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed">
            I just keep forgetting the name of the HTML colors, and they are some of my
            favorite ones. I wanted somewhere I could easily look them up — so I built
            this little site.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-8 lg:px-12 pb-20">
        <div className="max-w-6xl mx-auto">
          <ColorScenarios color={selectedColor} />
        </div>
      </section>

      <section className="px-4 sm:px-8 lg:px-12 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline justify-between mb-6 gap-4 flex-wrap">
            <h2 className="font-display text-2xl sm:text-3xl uppercase">
              The collection
            </h2>
            <p className="text-sm text-muted-foreground">
              {colors.length} hand-picked names. Click one to see it in action.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
            {colors.map((color) => (
              <ColorCard
                key={color}
                colorName={color}
                onColorSelect={setSelectedColor}
                isSelected={selectedColor === color}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-8 lg:px-12 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl bg-brand text-brand-foreground p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="flex-1">
              <p className="text-5xl mb-4" aria-hidden="true">
                👋
              </p>
              <h2 className="font-display text-3xl sm:text-4xl uppercase leading-tight mb-3">
                Just saying hi?
              </h2>
              <p className="text-brand-foreground/80 max-w-xl">
                Slide into my DMs on X or Instagram. Always happy to talk design,
                engineering, or which shade of <em>Tomato</em> is objectively the best.
              </p>
            </div>
            <div className="bg-background text-foreground rounded-xl p-6 w-full lg:w-auto lg:min-w-[320px]">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Find me at
              </p>
              <SocialLinks />
            </div>
          </div>
        </div>
      </section>

      <footer className="px-4 sm:px-8 lg:px-12 pb-12 text-sm text-muted-foreground">
        <div className="max-w-6xl mx-auto border-t border-border pt-8 flex flex-wrap items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Guillermo Rodas</p>
          <p className="font-mono text-xs">
            built with Next.js · styled with yellow
          </p>
        </div>
      </footer>
    </main>
  )
}
