"use client"

import { useState } from "react"
import { ColorCard } from "@/components/color-card"

const colors = [
  "Salmon",
  "Coral",
  "Tomato",
  "Gold",
  "PapayaWhip",
  "Moccasin",
  "Khaki",
  "RebeccaPurple",
  "Indigo",
  "Olive",
  "Teal",
  "Turquoise",
  "CornflowerBlue",
  "Tan",
  "Peru",
  "Snow",
  "WhiteSmoke",
  "SeaShell",
  "Gainsboro",
]

const darkColors = ["RebeccaPurple", "Indigo", "Olive", "Teal", "Peru"]

export default function Home() {
  const [selectedColor, setSelectedColor] = useState<string | null>(null)

  const isDarkColor = selectedColor ? darkColors.includes(selectedColor) : false
  const textColorClass = isDarkColor ? "text-white" : "text-foreground"

  return (
    <main
      className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${textColorClass}`}
      style={{ backgroundColor: selectedColor || undefined }}
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16 sm:mb-20">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-balance mb-6 sm:mb-8 tracking-tight leading-[1.1] sm:leading-[1.05]">
            HTML Named Colors
          </h1>
          <p
            className={`text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto text-pretty mb-10 sm:mb-12 leading-relaxed font-light ${isDarkColor ? "text-white/90" : "text-muted-foreground"}`}
          >
            Did you know? You can use these color names directly in CSS without hex codes!
          </p>

          <div
            className={`max-w-xl mx-auto rounded-lg p-6 sm:p-8 shadow-lg ${isDarkColor ? "bg-white/10 backdrop-blur" : "bg-card border"}`}
          >
            <p className={`text-xs sm:text-sm font-semibold mb-4 tracking-wide uppercase ${isDarkColor ? "text-white/80" : "text-muted-foreground"}`}>
              CSS Example:
            </p>
            <pre
              className={`text-left font-mono text-xs sm:text-sm md:text-base p-5 sm:p-6 rounded leading-relaxed ${isDarkColor ? "bg-black/40 text-white/95" : "bg-muted"}`}
            >
              <code className={isDarkColor ? "text-white/95" : ""}>
                {`button {\n  background-color: ${selectedColor || "Tomato"};\n  color: white;\n}`}
              </code>
            </pre>
            <p className={`text-xs sm:text-sm mt-4 leading-relaxed ${isDarkColor ? "text-white/70" : "text-muted-foreground"}`}>
              Click any color below to see it in action!
            </p>
          </div>
        </header>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3">
          {colors.map((color) => (
            <ColorCard
              key={color}
              colorName={color}
              onColorSelect={setSelectedColor}
              isSelected={selectedColor === color}
            />
          ))}
        </div>

        <footer className={`mt-24 sm:mt-28 lg:mt-32 text-center text-sm sm:text-base ${isDarkColor ? "text-white/70" : "text-muted-foreground"}`}>
          <p className="leading-relaxed">{colors.length} hand-picked colors from the HTML color palette</p>
        </footer>
      </div>
    </main>
  )
}
