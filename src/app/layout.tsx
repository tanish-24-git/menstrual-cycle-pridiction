import type React from "react"
import { Providers } from "./providers"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CycleSync - Menstrual Cycle Prediction",
  description: "Understand your cycle, predict ovulation, and get personalized health insights.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

