"use client"

import { useEffect, useState } from "react"

interface ColorCardProps {
  colorName: string
  onColorSelect: (color: string) => void
  isSelected: boolean
}

export function ColorCard({ colorName, onColorSelect, isSelected }: ColorCardProps) {
  const [hexCode, setHexCode] = useState("")
  const [contrastColor, setContrastColor] = useState("#000000")

  useEffect(() => {
    if (typeof window === "undefined") return

    const tempEl = document.createElement("div")
    tempEl.style.color = colorName
    document.body.appendChild(tempEl)
    const computedColor = window.getComputedStyle(tempEl).color
    document.body.removeChild(tempEl)

    const rgb = computedColor.match(/\d+/g)
    if (!rgb) return

    const hex =
      "#" +
      rgb
        .map((x) => {
          const hexValue = Number.parseInt(x).toString(16)
          return hexValue.length === 1 ? "0" + hexValue : hexValue
        })
        .join("")
    setHexCode(hex.toUpperCase())

    const brightness =
      (Number.parseInt(rgb[0]) * 299 + Number.parseInt(rgb[1]) * 587 + Number.parseInt(rgb[2]) * 114) / 1000
    setContrastColor(brightness > 155 ? "#0a0a0a" : "#ffffff")
  }, [colorName])

  return (
    <button
      type="button"
      onClick={() => onColorSelect(colorName)}
      aria-pressed={isSelected}
      aria-label={`Select ${colorName}`}
      className={`group relative block aspect-square w-full overflow-hidden rounded-md transition-all duration-200 outline-none cursor-pointer ${
        isSelected
          ? "ring-4 ring-brand ring-offset-2 ring-offset-background scale-[1.03]"
          : "ring-1 ring-border hover:ring-brand hover:-translate-y-1"
      } focus-visible:ring-4 focus-visible:ring-brand`}
      style={{ backgroundColor: colorName }}
    >
      <span className="sr-only">{colorName}</span>
      <span
        className="absolute inset-x-2 bottom-2 text-left text-[11px] font-semibold tracking-wide leading-tight"
        style={{ color: contrastColor }}
      >
        <span className="block truncate">{colorName}</span>
        <span className="block font-mono text-[10px] opacity-70">{hexCode}</span>
      </span>
    </button>
  )
}
