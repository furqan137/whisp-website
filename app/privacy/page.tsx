"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import Header from "@/components/layout/header";

const sections = [
  "Introduction",
  "Information We Collect",
  "We Do NOT Collect",
  "How We Use Information",
  "Data Storage",
  "Third-Party Services",
  "Your Rights",
  "Children's Privacy",
  "Contact",
];

export default function Privacy() {
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
        <main className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-neutral-400 mb-16">Last updated: 2026</p>

          <div className="space-y-20 leading-relaxed">
            <section id="Introduction">
              <p className="text-lg text-neutral-300">
                Whisp respects your privacy. This Privacy Policy explains what
                information we collect and how we use it.
              </p>
            </section>

            <section id="Information We Collect">
              <h2 className="text-3xl font-semibold mb-6">
                Information We Collect
              </h2>

              <h3 className="text-xl font-semibold mt-6 mb-2">
                Account Information
              </h3>
              <ul className="list-disc pl-6 text-neutral-400 space-y-1">
                <li>Generated username ID</li>
                <li>Display name</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-2">
                Technical Information
              </h3>
              <ul className="list-disc pl-6 text-neutral-400 space-y-1">
                <li>Notification token</li>
                <li>Crash diagnostics</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-2">User Content</h3>
              <ul className="list-disc pl-6 text-neutral-400 space-y-1">
                <li>Messages</li>
                <li>Media uploads</li>
              </ul>
            </section>

            <section id="We Do NOT Collect">
              <h2 className="text-3xl font-semibold mb-6">We Do NOT Collect</h2>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                <ul className="list-disc pl-6 text-neutral-300 space-y-2">
                  <li>Contacts</li>
                  <li>Advertising identifiers</li>
                  <li>Background tracking</li>
                </ul>
              </div>
            </section>

            <section id="How We Use Information">
              <h2 className="text-3xl font-semibold mb-6">
                How We Use Information
              </h2>
              <ul className="list-disc pl-6 text-neutral-400 space-y-2">
                <li>Deliver messages</li>
                <li>Provide notifications</li>
                <li>Maintain accounts</li>
                <li>Improve stability</li>
              </ul>
              <p className="mt-6 text-lg font-semibold text-cyan-400">
                We never sell your data.
              </p>
            </section>

            <section id="Data Storage">
              <h2 className="text-3xl font-semibold mb-6">Data Storage</h2>
              <p className="text-neutral-400">
                Data is processed through encrypted infrastructure. Only systems
                required for message delivery access it.
              </p>
            </section>

            <section id="Third-Party Services">
              <h2 className="text-3xl font-semibold mb-6">
                Third-Party Services
              </h2>
              <ul className="list-disc pl-6 text-neutral-400 space-y-2">
                <li>Firebase — authentication & messaging</li>
                <li>Cloud storage — file delivery</li>
              </ul>
            </section>

            <section id="Your Rights">
              <h2 className="text-3xl font-semibold mb-6">Your Rights</h2>
              <p className="text-neutral-400 mb-4">
                You may request account deletion anytime:
              </p>
              <a
                href="mailto:whisp.supp@gmail.com"
                className="inline-block px-6 py-3 rounded-full bg-white text-black hover:bg-white/90"
              >
                whisp.supp@gmail.com
              </a>
            </section>

            <section id="Children's Privacy">
              <h2 className="text-3xl font-semibold mb-6">
                Children's Privacy
              </h2>
              <p className="text-neutral-400">
                Whisp is not intended for users under 13.
              </p>
            </section>

            <section id="Contact">
              <h2 className="text-3xl font-semibold mb-6">Contact</h2>
              <p className="text-neutral-400">
                For privacy questions contact us at:
                <br />
                <span className="text-white">whisp.supp@gmail.com</span>
              </p>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
