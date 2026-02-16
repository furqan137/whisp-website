"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "@/components/layout/header";

const sections = ["Get Help", "Common Issues", "FAQ", "Response Time"];

export default function Support() {
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
          <header>
            <h1 className="text-5xl font-bold mb-4">Support Center</h1>
            <p className="text-neutral-400 text-lg">
              We're here to help you use Whisp safely and smoothly.
            </p>
          </header>

          {/* Get Help */}
          <section id="Get Help">
            <h2 className="text-3xl font-semibold mb-6">Get Help</h2>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <p className="text-neutral-300 mb-6">
                If you experience problems or have questions, contact our
                support team:
              </p>

              <a
                href="mailto:whisp.supp@gmail.com"
                className="inline-block px-8 py-3 rounded-full bg-white text-black hover:bg-white/90 transition font-medium"
              >
                whisp.supp@gmail.com
              </a>
            </div>
          </section>

          {/* Common Issues */}
          <section id="Common Issues">
            <h2 className="text-3xl font-semibold mb-8">Common Issues</h2>

            <div className="space-y-6">
              {[
                [
                  "Not receiving notifications",
                  "Enable notifications in device settings and disable battery optimization.",
                ],
                [
                  "Login problems",
                  "Double check username and password accuracy.",
                ],
                [
                  "Media upload failed",
                  "Ensure stable internet and storage permission granted.",
                ],
              ].map(([title, text], i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/[0.02] p-6"
                >
                  <h3 className="font-semibold text-lg mb-2">{title}</h3>
                  <p className="text-neutral-400">{text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section id="FAQ">
            <h2 className="text-3xl font-semibold mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {[
                [
                  "Is Whisp private?",
                  "Yes. Messages use encrypted communication and generated IDs — no phone numbers.",
                ],
                [
                  "What is a generated ID?",
                  "A random identifier replacing personal contact information.",
                ],
                [
                  "Can I delete my account?",
                  "Yes. Email support and all data will be removed permanently.",
                ],
                ["Platforms?", "Available on Android & iOS."],
              ].map(([q, a], i) => (
                <details
                  key={i}
                  className="group rounded-xl border border-white/10 bg-white/[0.02] open:bg-white/[0.04] transition"
                >
                  <summary className="cursor-pointer px-6 py-4 font-medium flex justify-between">
                    {q}
                    <span className="group-open:rotate-45 transition">+</span>
                  </summary>
                  <div className="px-6 pb-5 text-neutral-400">{a}</div>
                </details>
              ))}
            </div>
          </section>

          {/* Response */}
          <section id="Response Time">
            <h2 className="text-3xl font-semibold mb-6">Response Time</h2>
            <p className="text-neutral-300 text-lg">
              We usually respond within{" "}
              <span className="text-white font-medium">24–48 hours</span>.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
