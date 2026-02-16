import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: {
    default: "Whisp — Private Messaging. Reinvented.",
    template: "%s | Whisp",
  },
  description:
    "Secure conversations designed for real privacy — not surveillance.",
  keywords: ["private chat", "secure messaging", "encrypted chat", "whisp"],
  authors: [{ name: "Whisp Team" }],
  creator: "Whisp",
  metadataBase: new URL("https://whisp.app"),
  openGraph: {
    title: "Whisp — Private Messaging. Reinvented.",
    description:
      "Secure conversations designed for real privacy — not surveillance.",
    url: "https://whisp.app",
    siteName: "Whisp",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-neutral-950 text-neutral-100 antialiased overflow-x-hidden`}
      >
        {/* HARD WIDTH LOCK — prevents all mobile sideways scroll */}
        <div className="relative w-full overflow-x-hidden">
          <div className="min-h-screen flex flex-col overflow-x-hidden">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
