export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative overflow-hidden border-t border-black/10 bg-white py-16 md:py-24"
      aria-label="Final call to action"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-6rem] h-72 w-[40rem] -translate-x-1/2 rounded-full bg-black/[0.04] blur-3xl" />
        <div className="absolute bottom-[-8rem] right-[-8rem] h-72 w-72 rounded-full bg-black/[0.03] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">

          {/* Headline */}
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-[#0B0D12] sm:text-4xl">
            Ready to transform your space?
          </h2>

          {/* Subtext */}
          <p className="mt-4 text-sm leading-relaxed text-black/60 sm:text-base">
            With Aurora Lamb, light doesn’t just illuminate; it defines the
            soul of your space. Decorative design, smart control, and effortless
            use meet in a single experience.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#buy"
              className="
                inline-flex h-12 items-center justify-center
                rounded-xl bg-[#0B0D12] px-6
                text-sm font-semibold text-white shadow-sm
                transition hover:opacity-90
                focus:outline-none focus:ring-2 focus:ring-black/10
              "
            >
              Buy Aurora Lamb
            </a>

            <a
              href="#models"
              className="
                inline-flex h-12 items-center justify-center
                rounded-xl border border-black/10 bg-white px-6
                text-sm font-semibold text-[#0B0D12]
                shadow-sm transition hover:bg-black/5
                focus:outline-none focus:ring-2 focus:ring-black/10
              "
            >
              Review the Models Again
            </a>
          </div>

          {/* Trust row */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-black/50">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-black/40" />
              Smart home compatible
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-black/40" />
              Energy efficient
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-black/40" />
              Premium decorative design
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
