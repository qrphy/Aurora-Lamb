import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden" aria-label="Hero">
      {/* Soft background wash (premium minimal) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-black/[0.04] blur-3xl" />
        <div className="absolute -bottom-28 right-[-10rem] h-72 w-72 rounded-full bg-black/[0.03] blur-3xl" />
      </div>

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
          {/* Copy */}
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-black/70 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-black/40" />
              Smart • Decorative • Premium
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[#0B0D12] sm:text-5xl">
              Turn on the light.
              <br />
              <span className="text-black/80">Change the atmosphere.</span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-black/60 sm:text-lg">
              Aurora Lamb is a decorative smart lamp that transforms your living spaces with a single touch. With mobile app control and smart home compatibility, it adapts to your rhythm.
            </p>

            {/* Feature bullets */}
            <ul className="mt-6 grid gap-3 text-sm text-black/70 sm:grid-cols-2">
              <li className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg border border-black/10 bg-white shadow-sm">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 stroke"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 3v3m0 12v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M3 12h3m12 0h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"
                      className="stroke-black/60"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                Energy-efficient lighting
              </li>

              <li className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg border border-black/10 bg-white shadow-sm">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 6a6 6 0 0 0-6 6v3a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-3a6 6 0 0 0-6-6Z"
                      className="stroke-black/60"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 21h4"
                      className="stroke-black/60"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                Decorative premium design
              </li>

              <li className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg border border-black/10 bg-white shadow-sm">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M8 7a4 4 0 1 1 8 0v3H8V7Z"
                      className="stroke-black/60"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 10h10v7a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3v-7Z"
                      className="stroke-black/60"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                Mobile app control
              </li>

              <li className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg border border-black/10 bg-white shadow-sm">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 3c3.866 0 7 3.134 7 7 0 2.38-1.18 4.482-2.987 5.75-.41.288-.663.757-.663 1.257V18a2 2 0 0 1-2 2H10.65a2 2 0 0 1-2-2v-1.0c0-.5-.252-.97-.663-1.257C6.18 14.482 5 12.38 5 10c0-3.866 3.134-7 7-7Z"
                      className="stroke-black/60"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 23h4"
                      className="stroke-black/60"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                Smart home integration
              </li>
            </ul>

            {/* CTA Row */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#buy"
                className="
                  inline-flex h-11 items-center justify-center
                  rounded-xl bg-[#0B0D12] px-5
                  text-sm font-semibold text-white shadow-sm
                  transition hover:opacity-90
                  focus:outline-none focus:ring-2 focus:ring-black/10
                "
              >
                Buy Now
              </a>

              <a
                href="#models"
                className="
                  inline-flex h-11 items-center justify-center
                  rounded-xl border border-black/10 bg-white px-5
                  text-sm font-semibold text-[#0B0D12]
                  shadow-sm transition hover:bg-black/5
                  focus:outline-none focus:ring-2 focus:ring-black/10
                "
              >
                View Models
              </a>

              <span className="text-xs text-black/50">
                3 different models • Decorative design • Smart control
              </span>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
              {/* Image placeholder - replace src with your hero visual */}
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/aurora-lamb-ex-1.jpg"
                  alt="Aurora Lamb lamp, ambient lighting"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 560px"
                />
              </div>

              {/* Minimal overlay card */}
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-black/10 bg-white/85 p-4 backdrop-blur">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold text-[#0B0D12]">
                      Ambient Mode
                    </div>
                    <div className="mt-1 text-xs text-black/60">
                      Warm ambient with a single touch
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-3 py-2 text-xs text-black/70 shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-black/40" />
                    App Control
                  </div>
                </div>

                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-black/5">
                  <div className="h-full w-2/3 rounded-full bg-black/20" />
                </div>
              </div>
            </div>
            

            {/* Subtle side note */}
            <div className="mt-4 text-xs text-black/50">
              * Images are representative. Final shots will be updated.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
