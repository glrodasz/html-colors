import type React from "react"
import type { Metadata } from "next"
import { Archivo_Black, Geist_Mono, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
})
const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
})
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

const title = "Guillermo's favorite HTML colors"
const description =
  "A hand-picked showcase of 24 HTML named colors I keep forgetting — my favorites, always one click away."

export const metadata: Metadata = {
  metadataBase: new URL("https://colors.guillermorodas.com"),
  title,
  description,
  generator: "v0.app",
  applicationName: title,
  authors: [{ name: "Guillermo Rodas", url: "https://guillermorodas.com" }],
  creator: "Guillermo Rodas",
  keywords: [
    "HTML colors",
    "CSS named colors",
    "color palette",
    "color reference",
    "web design",
    "named colors",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/",
    siteName: title,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@guillermorodas",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${archivoBlack.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
