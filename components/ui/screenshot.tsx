"use client"

import Image from "next/image"
import { useState } from "react"

export default function Screenshot({ src }: { src: string }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Card */}
      <div
        className="group relative cursor-pointer"
        onClick={() => setOpen(true)}
      >
        {/* Glow */}
        <div className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-cyan-400/40 via-blue-500/40 to-purple-500/40 blur-xl" />

        {/* Glass Card */}
        <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 transition duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">

          {/* Shine reflection */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-700">
            <div className="absolute -left-1/2 top-0 h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-md animate-[shine_1.2s_ease]" />
          </div>

          {/* Image */}
          <Image
            src={src}
            alt="Whisp preview"
            width={900}
            height={900}
            className="w-full h-auto object-contain transition duration-500 group-hover:scale-[1.04]"
          />
        </div>
      </div>

      {/* Modal Preview */}
      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-6 animate-fadeIn"
          onClick={() => setOpen(false)}
        >
          <div className="relative max-w-6xl w-full h-[90vh]">
            <Image
              src={src}
              alt="Preview"
              fill
              className="object-contain rounded-2xl"
            />
          </div>
        </div>
      )}
    </>
  )
}