"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const linkStyle = (path: string) =>
    `block py-2 transition ${
      pathname === path ? "text-white" : "text-neutral-300 hover:text-white"
    }`

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/app_icon.png"
            alt="Whisp logo"
            width={34}
            height={34}
            className="rounded-xl"
          />
          <span className="text-xl font-semibold tracking-tight">Whisp</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/privacy" className={linkStyle("/privacy")}>Privacy</Link>
          <Link href="/support" className={linkStyle("/support")}>Support</Link>
          <Link href="/about" className={linkStyle("/about")}>About</Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">
            Download
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-64 border-t border-white/10" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 space-y-3 bg-neutral-950/95 backdrop-blur-xl">
          <Link href="/privacy" className={linkStyle("/privacy")} onClick={()=>setOpen(false)}>Privacy</Link>
          <Link href="/support" className={linkStyle("/support")} onClick={()=>setOpen(false)}>Support</Link>
          <Link href="/about" className={linkStyle("/about")} onClick={()=>setOpen(false)}>About</Link>

          <Button className="w-full mt-3 bg-white text-black hover:bg-white/90 rounded-full">
            Download
          </Button>
        </div>
      </div>
    </nav>
  )
}