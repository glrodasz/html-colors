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
        <header className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance mb-4 tracking-tight">
            HTML Named Colors
          </h1>
          <p
            className={`text-lg sm:text-xl max-w-2xl mx-auto text-pretty mb-8 ${isDarkColor ? "text-white/90" : "text-muted-foreground"}`}
          >
            Did you know? You can use these color names directly in CSS without hex codes!
          </p>

          <div
            className={`max-w-xl mx-auto rounded-lg p-6 shadow-lg ${isDarkColor ? "bg-white/10 backdrop-blur" : "bg-card border"}`}
          >
            <p className={`text-sm font-semibold mb-3 ${isDarkColor ? "text-white/80" : "text-muted-foreground"}`}>
              CSS Example:
            </p>
            <pre
              className={`text-left font-mono text-sm sm:text-base p-4 rounded ${isDarkColor ? "bg-black/30" : "bg-muted"}`}
            >
              <code className={isDarkColor ? "text-white" : ""}>
                {`button {\n  background-color: ${selectedColor || "Tomato"};\n  color: white;\n}`}
              </code>
            </pre>
            <p className={`text-xs mt-3 ${isDarkColor ? "text-white/70" : "text-muted-foreground"}`}>
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

        <footer className={`mt-20 text-center text-sm ${isDarkColor ? "text-white/70" : "text-muted-foreground"}`}>
          <p>{colors.length} hand-picked colors from the HTML color palette</p>
        </footer>
      </div>
    </main>
  )
}
