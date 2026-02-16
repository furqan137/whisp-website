"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "@/components/layout/header";

const sections = [
  "Mission",
  "Vision",
  "Why We Built Whisp",
  "Principles",
  "Team",
  "Contact",
];

export default function About() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handler = () => {
      let current = "";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) current = id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-[260px_1fr] gap-16">
        {/* Sidebar */}
        <aside className="hidden lg:block sticky top-28 h-fit">
          <div className="space-y-2 text-sm">
            {sections.map((s) => (
              <a
                key={s}
                href={`#${s}`}
                className={`block px-3 py-2 rounded-lg transition ${
                  active === s
                    ? "bg-white/10 text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {s}
              </a>
            ))}
          </div>
        </aside>

        {/* Content */}
        <main className="max-w-3xl space-y-24">
          {/* Header */}
          <header>
            <h1 className="text-5xl font-bold mb-4">About Whisp</h1>
            <p className="text-neutral-400 text-xl">
              Private communication should be the default — not the exception.
            </p>
          </header>

          {/* Mission */}
          <section id="Mission">
            <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
            <p className="text-neutral-300 leading-relaxed">
              Whisp exists to restore control over digital conversations. We
              believe communication should belong only to the participants — not
              platforms, advertisers, or analytics systems.
            </p>
          </section>

          {/* Vision */}
          <section id="Vision">
            <h2 className="text-3xl font-semibold mb-6">Our Vision</h2>
            <p className="text-neutral-400 leading-relaxed">
              A world where private communication is normal again. Where
              identity is optional, metadata is minimized, and surveillance is
              unnecessary.
            </p>
          </section>

          {/* Why */}
          <section id="Why We Built Whisp">
            <h2 className="text-3xl font-semibold mb-6">Why We Built Whisp</h2>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 space-y-4 text-neutral-300">
              <p>
                Most messaging platforms monetize attention and personal data.
                This leads to profiling, tracking and behavioral analysis.
              </p>
              <p>
                Whisp was designed with the opposite philosophy: remove
                identifiers, minimize metadata and keep communication private.
              </p>
              <p className="font-semibold text-white">
                You are the user — not the product.
              </p>
            </div>
          </section>

          {/* Principles */}
          <section id="Principles">
            <h2 className="text-3xl font-semibold mb-8">Core Principles</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                [
                  "Privacy First",
                  "Every feature is designed to reduce data exposure.",
                ],
                ["Transparency", "Clear explanation of what the system does."],
                ["User Control", "Users control identity and communication."],
                ["Security", "Modern encryption and safe infrastructure."],
                ["Reliability", "Fast and stable communication worldwide."],
                [
                  "Sustainability",
                  "Business model independent from surveillance.",
                ],
              ].map(([title, text], i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/[0.02] p-6"
                >
                  <h3 className="font-semibold mb-2">{title}</h3>
                  <p className="text-neutral-400 text-sm">{text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Team */}
          <section id="Team">
            <h2 className="text-3xl font-semibold mb-6">Our Team</h2>
            <p className="text-neutral-400">
              Whisp is built by developers and privacy advocates who believe
              secure communication should be accessible to everyone.
            </p>
          </section>

          {/* Contact */}
          <section id="Contact">
            <h2 className="text-3xl font-semibold mb-6">Contact</h2>
            <p className="text-neutral-400 mb-6">
              Questions or collaboration inquiries:
            </p>
            <a
              href="mailto:whisp.supp@gmail.com"
              className="inline-block px-8 py-3 rounded-full bg-white text-black hover:bg-white/90 transition"
            >
              whisp.supp@gmail.com
            </a>
          </section>
        </main>
      </div>
    </div>
  );
}
