"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Check, ChevronDown } from "lucide-react"

type Tab = "buttons" | "typography" | "ui"

interface ColorScenariosProps {
  color: string
  colors: string[]
  onColorChange: (color: string) => void
}

function useContrast(color: string) {
  const [contrast, setContrast] = useState("#0a0a0a")
  useEffect(() => {
    if (typeof window === "undefined") return
    const el = document.createElement("div")
    el.style.color = color
    document.body.appendChild(el)
    const rgb = window.getComputedStyle(el).color.match(/\d+/g)
    document.body.removeChild(el)
    if (!rgb) return
    const brightness =
      (Number.parseInt(rgb[0]) * 299 + Number.parseInt(rgb[1]) * 587 + Number.parseInt(rgb[2]) * 114) / 1000
    setContrast(brightness > 155 ? "#0a0a0a" : "#ffffff")
  }, [color])
  return contrast
}

function ColorDropdown({
  color,
  colors,
  onColorChange,
}: {
  color: string
  colors: string[]
  onColorChange: (color: string) => void
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [open])

  return (
    <div ref={ref} className="relative ml-auto flex-1 sm:flex-initial min-w-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between sm:justify-start gap-1.5 px-2.5 py-1.5 rounded-md bg-secondary hover:bg-muted transition-colors font-mono text-xs text-foreground cursor-pointer w-full sm:w-auto"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span
          className="w-3 h-3 rounded-sm flex-shrink-0 border border-foreground/10"
          style={{ backgroundColor: color }}
        />
        {color}
        <ChevronDown
          className={`w-3 h-3 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div
          role="listbox"
          aria-label="Select color"
          className="absolute left-0 right-0 sm:left-auto sm:right-0 top-full mt-1 z-50 bg-secondary rounded-lg border border-border shadow-lg max-h-60 overflow-y-auto py-1"
        >
          {colors.map((c) => (
            <button
              key={c}
              type="button"
              role="option"
              aria-selected={c === color}
              onClick={() => {
                onColorChange(c)
                setOpen(false)
              }}
              className={`flex items-center gap-2 w-full px-3 py-1.5 text-left font-mono text-xs hover:bg-muted transition-colors cursor-pointer ${
                c === color ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              <span
                className="w-3 h-3 rounded-sm flex-shrink-0 border border-foreground/10"
                style={{ backgroundColor: c }}
              />
              {c}
              {c === color && <Check className="w-3 h-3 ml-auto text-brand" />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export function ColorScenarios({ color, colors, onColorChange }: ColorScenariosProps) {
  const [tab, setTab] = useState<Tab>("buttons")
  const contrast = useContrast(color)

  const tabs: { id: Tab; label: string }[] = useMemo(
    () => [
      { id: "buttons", label: "Buttons" },
      { id: "typography", label: "Typography" },
      { id: "ui", label: "UI mock" },
    ],
    [],
  )

  const darkened = `color-mix(in oklab, ${color} 80%, black)`
  const isLightColor = contrast === "#0a0a0a"
  const invertContainer = !isLightColor && tab !== "ui"
  const containerClass = invertContainer
    ? "bg-foreground text-background border border-transparent"
    : "bg-card text-foreground border border-foreground/20"

  return (
    <section aria-label="Color scenarios" className="relative">
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mr-2">
          Preview
        </span>
        <div className="flex flex-wrap gap-2 w-full sm:w-auto order-last sm:order-none">
          {tabs.map((t) => {
            const active = tab === t.id
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors cursor-pointer ${
                  active
                    ? "bg-brand text-brand-foreground"
                    : "bg-secondary text-foreground hover:bg-muted"
                }`}
              >
                {t.label}
              </button>
            )
          })}
        </div>
        <ColorDropdown color={color} colors={colors} onColorChange={onColorChange} />
      </div>

      <div
        className={`rounded-xl p-6 sm:p-10 min-h-[320px] flex flex-col justify-center transition-colors ${containerClass}`}
      >
        {tab === "buttons" && (
          <ButtonsScenario color={color} contrast={contrast} darkened={darkened} />
        )}
        {tab === "typography" && (
          <TypographyScenario color={color} inverted={invertContainer} />
        )}
        {tab === "ui" && <UIMockScenario color={color} contrast={contrast} />}
      </div>

      <pre className="mt-6 rounded-lg bg-secondary p-5 font-mono text-sm text-foreground overflow-x-auto">
        <code>{`button {\n  background-color: ${color};\n  color: ${contrast === "#0a0a0a" ? "black" : "white"};\n}`}</code>
      </pre>
    </section>
  )
}

function ButtonsScenario({
  color,
  contrast,
  darkened,
}: {
  color: string
  contrast: string
  darkened: string
}) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <button
        type="button"
        className="px-6 py-3 rounded-md font-semibold shadow-sm transition-transform hover:-translate-y-0.5 cursor-pointer"
        style={{ backgroundColor: color, color: contrast }}
      >
        Solid button
      </button>
      <button
        type="button"
        className="px-6 py-3 rounded-md font-semibold transition-colors cursor-pointer"
        style={{ backgroundColor: darkened, color: contrast }}
      >
        Hover state
      </button>
      <button
        type="button"
        className="px-6 py-3 rounded-md font-semibold transition-colors cursor-pointer"
        style={{
          border: `2px solid ${color}`,
          color,
          backgroundColor: "transparent",
        }}
      >
        Outline
      </button>
      <button
        type="button"
        disabled
        className="px-6 py-3 rounded-md font-semibold opacity-50 cursor-not-allowed"
        style={{ backgroundColor: color, color: contrast }}
      >
        Disabled
      </button>
    </div>
  )
}

function TypographyScenario({
  color,
  inverted,
}: {
  color: string
  inverted: boolean
}) {
  const bodyClass = inverted ? "text-background/70" : "text-muted-foreground"
  return (
    <div className="space-y-4">
      <p
        className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight break-words"
        style={{ color }}
      >
        The quick brown fox
      </p>
      <p className={`text-base sm:text-lg max-w-2xl ${bodyClass}`}>
        <span style={{ color }} className="font-semibold">Inline text</span> reads fine
        at body sizes. Notice how <span style={{ color }} className="underline">links</span> and
        <span style={{ color }} className="font-mono"> `code`</span> spans pick up the color.
      </p>
    </div>
  )
}

function UIMockScenario({ color, contrast }: { color: string; contrast: string }) {
  const isLightColor = contrast === "#0a0a0a"

  return (
    <div
      className={`max-w-md mx-auto w-full rounded-xl p-6 shadow-lg ${
        isLightColor
          ? "bg-background text-foreground border border-foreground/20"
          : "bg-foreground text-background"
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <span
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold"
          style={{ backgroundColor: color, color: contrast }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: contrast }}
          />
          Live
        </span>
        <span
          className={`text-xs font-mono ${
            isLightColor ? "text-muted-foreground" : "text-background/60"
          }`}
        >
          v1.2.0
        </span>
      </div>
      <h3 className="font-display text-2xl mb-1">New release shipped</h3>
      <p
        className={`text-sm mb-5 ${
          isLightColor ? "text-muted-foreground" : "text-background/70"
        }`}
      >
        Your deploy is ready. Review the diff and roll it out to production whenever
        you&apos;re ready.
      </p>
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="px-4 py-2 rounded-md text-sm font-semibold cursor-pointer"
          style={{ backgroundColor: color, color: contrast }}
        >
          Deploy
        </button>
        <button
          type="button"
          className="px-4 py-2 rounded-md text-sm font-semibold cursor-pointer"
          style={{ color, border: `1px solid ${color}` }}
        >
          View diff
        </button>
      </div>
    </div>
  )
}
