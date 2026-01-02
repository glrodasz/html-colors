"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Check, Copy } from "lucide-react"

interface ColorCardProps {
  colorName: string
  onColorSelect: (color: string) => void
  isSelected: boolean
}

export function ColorCard({ colorName, onColorSelect, isSelected }: ColorCardProps) {
  const [copied, setCopied] = useState(false)
  const [hexCode, setHexCode] = useState("#000000")
  const [contrastColor, setContrastColor] = useState("#000000")

  useEffect(() => {
    if (typeof window === "undefined") return

    const getHexCode = (colorName: string) => {
      const tempEl = document.createElement("div")
      tempEl.style.color = colorName
      document.body.appendChild(tempEl)
      const computedColor = window.getComputedStyle(tempEl).color
      document.body.removeChild(tempEl)

      const rgb = computedColor.match(/\d+/g)
      if (!rgb) return "#000000"

      const hex =
        "#" +
        rgb
          .map((x) => {
            const hexValue = Number.parseInt(x).toString(16)
            return hexValue.length === 1 ? "0" + hexValue : hexValue
          })
          .join("")

      return hex.toUpperCase()
    }

    const getContrastColor = (colorName: string) => {
      const tempEl = document.createElement("div")
      tempEl.style.color = colorName
      document.body.appendChild(tempEl)
      const computedColor = window.getComputedStyle(tempEl).color
      document.body.removeChild(tempEl)

      const rgb = computedColor.match(/\d+/g)
      if (!rgb) return "#000000"

      const brightness =
        (Number.parseInt(rgb[0]) * 299 + Number.parseInt(rgb[1]) * 587 + Number.parseInt(rgb[2]) * 114) / 1000

      return brightness > 155 ? "#000000" : "#ffffff"
    }

    setHexCode(getHexCode(colorName))
    setContrastColor(getContrastColor(colorName))
  }, [colorName])

  const handleClick = async () => {
    onColorSelect(colorName)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card
      className={`group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer ${
        isSelected ? "ring-4 ring-primary shadow-2xl scale-105" : "border-2"
      }`}
      onClick={handleClick}
    >
      <div className="aspect-square w-full transition-all duration-300" style={{ backgroundColor: colorName }} />
      <div className="p-3 bg-card">
        <div className="flex items-center justify-between gap-2">
          <div className="flex-1 min-w-0 overflow-hidden">
            <h3 className="font-semibold text-sm tracking-tight truncate">{colorName}</h3>
            <p className="text-xs text-muted-foreground font-mono">{hexCode}</p>
          </div>
          <button
            className="p-1.5 rounded-md hover:bg-muted transition-colors flex-shrink-0"
            aria-label={copied ? "Copied!" : "Copy hex code"}
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-green-600" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-muted-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Hover overlay with color name */}
      <div
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none p-4"
        style={{ backgroundColor: colorName }}
      >
        <span
          className="font-bold tracking-wide text-center break-words"
          style={{
            color: contrastColor,
            fontSize: `clamp(0.875rem, ${Math.max(0.875, 1.5 - colorName.length * 0.05)}rem, 1.5rem)`,
          }}
        >
          {colorName}
        </span>
      </div>
    </Card>
  )
}
