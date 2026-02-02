"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        sticky top-0 z-50 transition-all duration-200
        ${scrolled
          ? "bg-white/80 backdrop-blur border-b border-black/10"
          : "bg-transparent"}
      `}
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo / Brand */}
          <Link
            href="#top"
            className="flex items-center gap-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/10"
          >
            {/* Minimal monogram */}
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-black/10 bg-white shadow-sm">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 stroke-black/70"
                fill="none"
                strokeWidth={1.5}
              >
                <path d="M12 3l2.2 6.1L21 12l-6.8 2.9L12 21l-2.2-6.1L3 12l6.8-2.9L12 3z" />
              </svg>
            </div>

            <div className="leading-tight">
              <div className="text-sm font-semibold text-[#0B0D12]">
                Aurora Lamb
              </div>
              <div className="text-xs text-[#A7ABB6]">
                Minimal • Premium • Smart
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            <a
              href="#models"
              className="rounded-xl px-3 py-2 text-sm text-black/70 transition hover:bg-black/5 hover:text-black"
            >
              Models
            </a>
            <a
              href="#comparison"
              className="rounded-xl px-3 py-2 text-sm text-black/70 transition hover:bg-black/5 hover:text-black"
            >
              Comparison
            </a>
            <a
              href="#faq"
              className="rounded-xl px-3 py-2 text-sm text-black/70 transition hover:bg-black/5 hover:text-black"
            >
              FAQ
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Secondary link */}
            <a
              href="#comparison"
              className="hidden rounded-xl px-3 py-2 text-sm text-black/70 transition hover:bg-black/5 md:inline-flex"
            >
              View Comparison
            </a>

            {/* Primary CTA */}
            <a
              href="#buy"
              className="
                inline-flex h-10 items-center justify-center
                rounded-xl bg-[#0B0D12] px-4
                text-sm font-semibold text-white
                shadow-sm transition hover:opacity-90
                focus:outline-none focus:ring-2 focus:ring-black/10
              "
            >
              Buy Now
            </a>

            {/* Mobile menu */}
            <details className="relative md:hidden">
              <summary className="list-none rounded-xl p-2 hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black/10">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 stroke-black/70"
                  fill="none"
                  strokeWidth={1.5}
                >
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              </summary>

              <div className="absolute right-0 mt-2 w-52 rounded-2xl border border-black/10 bg-white shadow-lg">
                <a
                  href="#models"
                  className="block px-4 py-2 text-sm hover:bg-black/5"
                >
                  Models
                </a>
                <a
                  href="#comparison"
                  className="block px-4 py-2 text-sm hover:bg-black/5"
                >
                  Comparison
                </a>
                <a
                  href="#faq"
                  className="block px-4 py-2 text-sm hover:bg-black/5"
                >
                  FAQ
                </a>
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}
