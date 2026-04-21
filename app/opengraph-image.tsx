import { ImageResponse } from "next/og"

export const alt = "Guillermo's favorite HTML colors"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const colors = [
  "Salmon",
  "Coral",
  "Tomato",
  "Crimson",
  "Peru",
  "Tan",
  "Moccasin",
  "PapayaWhip",
  "Gold",
  "Khaki",
  "Olive",
  "ForestGreen",
  "Teal",
  "Turquoise",
  "SkyBlue",
  "CornflowerBlue",
  "Indigo",
  "RebeccaPurple",
  "Plum",
  "HotPink",
  "SeaShell",
  "Snow",
  "WhiteSmoke",
  "Gainsboro",
]

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          height: "100%",
        }}
      >
        {colors.map((color) => (
          <div
            key={color}
            style={{
              width: 200,
              height: 157.5,
              backgroundColor: color,
              display: "flex",
              alignItems: "flex-end",
              padding: "10px 12px",
            }}
          >
            <span
              style={{
                fontSize: 14,
                fontFamily: "monospace",
                color: "rgba(0,0,0,0.55)",
                textTransform: "lowercase",
              }}
            >
              {color}
            </span>
          </div>
        ))}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "rgba(255,255,255,0.95)",
              padding: "40px 56px",
              borderRadius: 20,
              boxShadow: "0 24px 64px rgba(0,0,0,0.25)",
            }}
          >
            <div
              style={{
                fontSize: 28,
                color: "#64748b",
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Guillermo's favorite
            </div>
            <div
              style={{
                fontSize: 84,
                fontWeight: 900,
                color: "#0f172a",
                letterSpacing: -2,
                lineHeight: 1,
              }}
            >
              HTML colors
            </div>
            <div
              style={{
                fontSize: 22,
                color: "#475569",
                marginTop: 20,
              }}
            >
              24 hand-picked named colors, always one click away
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  )
}
