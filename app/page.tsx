"use client";
import Image from "next/image";
import Screenshot from "@/components/ui/screenshot";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Lock, MessageCircle, FileText, Bell, Globe, Zap } from "lucide-react";

import Header from "@/components/layout/header";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Glow background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[500px] bg-blue-500/20 blur-[140px]" />
          <div className="absolute right-0 top-40 w-[600px] h-[400px] bg-cyan-400/20 blur-[140px]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-28 pb-24 text-center">
          <div className="flex justify-center mb-6">
            <Image
              src="/app_icon.png"
              alt="Whisp"
              width={72}
              height={72}
              className="rounded-2xl shadow-2xl shadow-blue-500/20"
            />
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight">
            Private messaging
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              without surveillance
            </span>
          </h1>

          <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto">
            Whisp protects your identity while keeping conversations fast,
            simple, and truly private. No phone number. No tracking. No data
            selling.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full px-8 text-base">
              Download on App Store
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 text-base border-white/20 hover:bg-white/10"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </section>

  {/* App Preview Section */}
<section className="py-28 relative">
  <div className="absolute inset-0 -z-10">
    <div className="absolute left-1/2 top-10 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 blur-[120px]" />
  </div>

  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

    {/* Text */}
    <div>
      <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
        Communicate freely.
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
          Stay anonymous.
        </span>
      </h2>

      <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
        Whisp replaces phone numbers and personal identifiers with a secure generated identity.
        Your conversations belong only to you — not advertisers, trackers, or data brokers.
      </p>

      <ul className="space-y-3 text-neutral-300">
        <li>• End-to-end encrypted messaging</li>
        <li>• No phone number required</li>
        <li>• Private media sharing</li>
        <li>• Zero tracking architecture</li>
      </ul>
    </div>

    {/* Device Mockup */}
    <div className="flex justify-center">
      <div className="relative rounded-[40px] border border-white/10 bg-black/40 p-4 backdrop-blur-xl shadow-2xl">

        {/* Phone frame */}
        <div className="relative w-[280px] aspect-[9/19] rounded-[28px] overflow-hidden bg-neutral-900">

          <Image
            src="/screens/preview.png"
            alt="Whisp app preview"
            fill
            className="object-cover"
            priority
          />

        </div>

        {/* reflection glow */}
        <div className="pointer-events-none absolute inset-0 rounded-[40px] bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-40" />
      </div>
    </div>

  </div>
</section>

      {/* Key Features Section */}
      <section className="relative py-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/3 top-10 w-[500px] h-[400px] bg-blue-500/10 blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
            Built for privacy from the ground up
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: "Identity Protection",
                description:
                  "Accounts are generated — not registered. No phone number, email, or personal info required.",
              },
              {
                icon: MessageCircle,
                title: "Instant Messaging",
                description:
                  "Ultra-fast message delivery using persistent real-time encrypted channels.",
              },
              {
                icon: FileText,
                title: "Secure Media",
                description:
                  "Photos, videos and files are encrypted before leaving your device.",
              },
              {
                icon: Bell,
                title: "Clean Notifications",
                description:
                  "Only message alerts. No behavioral tracking or engagement algorithms.",
              },
              {
                icon: Globe,
                title: "Location Shield",
                description:
                  "Optional relay routing hides your network origin and protects metadata.",
              },
              {
                icon: Zap,
                title: "Human Verification",
                description:
                  "Gesture-based identity creation prevents bots and fake accounts.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl transition duration-300 hover:border-blue-400/40 hover:bg-white/[0.05]"
              >
                <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition">
                  <feature.icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-neutral-400 leading-relaxed">
                  {feature.description}
                </p>

                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-blue-500/10 to-cyan-400/10 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-28 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
            Start in seconds
          </h2>

          <div className="space-y-12">
            {[
              "Generate your private Whisp ID",
              "Create your secure account",
              "Start chatting instantly",
              "Share media safely",
              "Control privacy anytime",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-6">
                <div className="min-w-[44px] h-[44px] rounded-full bg-blue-500/10 border border-blue-400/30 flex items-center justify-center font-semibold">
                  {i + 1}
                </div>

                <div>
                  <p className="text-lg text-neutral-300">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Whisp */}
      <section className="py-28 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            You are not the product
          </h2>

          <p className="text-xl text-neutral-400 mb-14">
            Most messaging platforms monetize surveillance. Whisp was engineered
            with the opposite business model.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "No advertising profiling",
              "No selling personal data",
              "No behavior tracking",
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-8"
              >
                <p className="text-lg font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Screenshots Showcase */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
            Experience Whisp
          </h2>

          <div className="space-y-8">
            {/* Row 1 — Large hero */}
            <div className="flex justify-center">
              <div className="w-full md:w-[70%]">
                <Screenshot src="/screens/screenshot1.png" />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid md:grid-cols-2 gap-8">
              <Screenshot src="/screens/screenshot2.png" />
              <Screenshot src="/screens/screenshot3.png" />
            </div>

            {/* Row 3 */}
            <div className="grid md:grid-cols-2 gap-8">
              <Screenshot src="/screens/screenshot4.png" />
              <Screenshot src="/screens/screenshot5.png" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-5 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start private conversations today
          </h2>

          <p className="text-neutral-400 text-lg mb-12">
            Whisp is designed to protect your identity and keep communication
            simple. No phone number required. No tracking. No profiling.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button size="lg" className="rounded-full px-10 text-base">
              Download on App Store
            </Button>

            <a
              href="mailto:whisp.supp@gmail.com"
              className="rounded-full px-10 py-3 border border-white/20 hover:bg-white/10 transition"
            >
              Contact Support
            </a>
          </div>

          <p className="text-sm text-neutral-500">
            Usually replies within 24–48 hours
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/app_icon.png"
                alt="Whisp"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-lg font-semibold">Whisp</span>
            </div>

            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Private messaging built for the modern internet. Communicate
              freely without surveillance or tracking.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <div className="space-y-2 text-sm text-neutral-400">
              <Link href="/about" className="block hover:text-white transition">
                About
              </Link>
              <Link
                href="/support"
                className="block hover:text-white transition"
              >
                Support
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <div className="space-y-2 text-sm text-neutral-400">
              <Link
                href="/privacy"
                className="block hover:text-white transition"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-sm text-neutral-500">
          <p>© 2026 Whisp. All rights reserved.</p>
          <p>Designed for privacy.</p>
        </div>
      </footer>

    </div>
  );
}
