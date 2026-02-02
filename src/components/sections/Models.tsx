import { auroraModels } from "@/content/models";

export default function Models() {
  return (
    <section id="models" className="py-14 md:py-20" aria-label="Models">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        {/* Heading */}
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0B0D12] sm:text-4xl">
            Choose the Aurora Lamb that suits you.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/60 sm:text-base">
            Each model embodies a decorative design and intelligent control philosophy.
            The differences lie in the intensity of the ambiance and the scenario options.
            </p>
          </div>

          <a
            href="#comparison"
            className="
              mt-2 inline-flex h-11 items-center justify-center
              rounded-xl border border-black/10 bg-white px-5
              text-sm font-semibold text-[#0B0D12]
              shadow-sm transition hover:bg-black/5
              focus:outline-none focus:ring-2 focus:ring-black/10
              md:mt-0
            "
          >
            Compare Models
          </a>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {auroraModels.map((m) => (
            <article
              key={m.id}
              className={[
                "relative overflow-hidden rounded-3xl border bg-white shadow-sm",
                m.featured ? "border-black/15" : "border-black/10",
              ].join(" ")}
            >
              {/* Subtle wash */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-16 left-1/2 h-48 w-[26rem] -translate-x-1/2 rounded-full bg-black/[0.03] blur-3xl" />
              </div>

              <div className="relative p-6">
                {/* Top row: badge */}
                <div className="flex items-start justify-between gap-3">
                  <div className="inline-flex flex-wrap items-center gap-2">
                    {m.featured ? (
                      <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black px-3 py-1 text-xs font-semibold text-white">
                        <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                        Most Popular
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/70">
                        <span className="h-1.5 w-1.5 rounded-full bg-black/40" />
                        Model
                      </span>
                    )}

                    <span className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/60">
                      Smart • Decorative
                    </span>
                  </div>

                  {/* Small model id */}
                  <span className="text-xs font-medium text-black/40">
                    {m.id.toUpperCase()}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-[#0B0D12]">
                  {m.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-black/60">
                  {m.tagline}
                </p>

                {/* Divider */}
                <div className="my-5 h-px w-full bg-black/5" />

                {/* Bullets */}
                <ul className="grid gap-3 text-sm text-black/70">
                  {m.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-xl border border-black/10 bg-white shadow-sm">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            className="stroke-black/55"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div className="mt-7 flex flex-col gap-3">
                  <a
                    href="#buy"
                    className={[
                      "inline-flex h-11 items-center justify-center rounded-xl px-5",
                      "text-sm font-semibold shadow-sm transition",
                      "focus:outline-none focus:ring-2 focus:ring-black/10",
                      m.featured
                        ? "bg-[#0B0D12] text-white hover:opacity-90"
                        : "bg-[#0B0D12] text-white hover:opacity-90",
                    ].join(" ")}
                    aria-label={`Buy ${m.name}`}
                  >
                    Buy Now
                  </a>

                  <a
                    href="#comparison"
                    className="
                      inline-flex h-11 items-center justify-center
                      rounded-xl border border-black/10 bg-white px-5
                      text-sm font-semibold text-[#0B0D12]
                      shadow-sm transition hover:bg-black/5
                      focus:outline-none focus:ring-2 focus:ring-black/10
                    "
                    aria-label={`Go to ${m.name} comparison section`}
                  >
                    See Differences
                  </a>

                  <p className="text-xs text-black/45">
                    * Pricing and technical details are in the comparison section.
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
