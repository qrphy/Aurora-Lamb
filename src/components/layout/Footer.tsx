export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-white" aria-label="Footer">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        {/* Top */}
        <div className="grid gap-10 py-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-black/10 bg-white shadow-sm">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 stroke-black/70"
                  fill="none"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path d="M12 3l2.2 6.1L21 12l-6.8 2.9L12 21l-2.2-6.1L3 12l6.8-2.9L12 3z" />
                </svg>
              </div>

              <div className="leading-tight">
                <div className="text-sm font-semibold text-[#0B0D12]">
                  Aurora Lamb
                </div>
                <div className="text-xs text-black/50">
                  Minimal • Premium • Smart
                </div>
              </div>
            </div>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-black/60">
              A decorative smart table lamp that transforms living spaces with
              a single touch. Ambience, control, and design in one.
            </p>

            {/* Trust microcopy */}
            <div className="mt-5 inline-flex flex-wrap items-center gap-2 text-xs text-black/50">
                <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-black/40" />
                Smart home compatible
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-black/40" />
                Energy efficient
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-black/40" />
                Premium design
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-black/50">
              Site
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="#models"
                  className="text-black/70 transition hover:text-black"
                >
                  Models
                </a>
              </li>
              <li>
                <a
                  href="#comparison"
                  className="text-black/70 transition hover:text-black"
                >
                  Comparison
                </a>
              </li>
              <li>
                <a
                  href="#smart"
                  className="text-black/70 transition hover:text-black"
                >
                  Smart Features
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-black/70 transition hover:text-black"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Contact */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-black/50">
              Legal
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="/privacy"
                  className="text-black/70 transition hover:text-black"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-black/70 transition hover:text-black"
                >
                  Terms of Use
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-black/50">
                Contact
              </div>
              <div className="mt-3 text-sm text-black/70">
                <a className="hover:text-black" href="mailto:hello@auroralamb.com">
                  hello@auroralamb.com
                </a>
              </div>

              {/* Social (optional) */}
              <div className="mt-4 flex items-center gap-2">
                <a
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 bg-white text-black/70 shadow-sm transition hover:bg-black/5"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                    <path
                      d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z"
                      className="stroke-black/60"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                      className="stroke-black/60"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M17.5 6.5h.01"
                      className="stroke-black/60"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>

                <a
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 bg-white text-black/70 shadow-sm transition hover:bg-black/5"
                  aria-label="YouTube"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                    <path
                      d="M10 15.5v-7l6 3.5-6 3.5Z"
                      className="stroke-black/60"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      className="stroke-black/60"
                      strokeWidth="1.5"
                    />
                  </svg>
                </a>

                <a
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 bg-white text-black/70 shadow-sm transition hover:bg-black/5"
                  aria-label="X"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                    <path
                      d="M7 17L17 7M9 7h8v8"
                      className="stroke-black/60"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 border-t border-black/5 py-6 text-xs text-black/50 md:flex-row md:items-center md:justify-between">
          <div>© {year} Aurora Lamb. All rights reserved.</div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <a
              href="#buy"
              className="font-semibold text-[#0B0D12] underline decoration-black/20 underline-offset-4 hover:decoration-black/40"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
