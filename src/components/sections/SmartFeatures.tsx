import Image from "next/image";

const features = [
  {
    title: "App-first control",
    desc: "Turn the light on/off, adjust brightness, and switch moods from a single screen.",
  },
  {
    title: "Timers & automations",
    desc: "Build routines for sleep, focus, or wind-down—Aurora runs them automatically.",
  },
  {
    title: "Mood scenes",
    desc: "Jump between Warm, Focus, and Relax presets with one tap—no setup friction.",
  },
  {
    title: "Smart home compatible",
    desc: "Works alongside your existing smart home ecosystem for a seamless setup.",
  },
];

export default function SmartFeatures() {
  return (
    <section
      id="smart"
      className="py-14 md:py-20"
      aria-label="Smart features"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        {/* Heading */}
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/70 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-black/40" />
              Smart Control
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0B0D12] sm:text-4xl">
              Light that adapts to your rhythm
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/60 sm:text-base">
              Aurora Lamb’s smart features don’t feel “technical”—they feel
              effortless. One tap to set the mood, simple control when you need
              it, and automation when you don’t.
            </p>
          </div>

          <a
            href="#buy"
            className="
              mt-2 inline-flex h-11 items-center justify-center
              rounded-xl bg-[#0B0D12] px-5
              text-sm font-semibold text-white shadow-sm
              transition hover:opacity-90
              focus:outline-none focus:ring-2 focus:ring-black/10
              md:mt-0
            "
          >
            Buy now
          </a>
        </div>

        {/* Content */}
        <div className="relative mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
          {/* Left: Feature cards */}
          <div className="space-y-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="
                  rounded-3xl border border-black/10 bg-white p-5
                  shadow-sm transition hover:border-black/15
                "
              >
                <div className="flex items-start gap-4">
                  {/* icon */}
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-black/10 bg-white shadow-sm">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 3c3.866 0 7 3.134 7 7 0 2.38-1.18 4.482-2.987 5.75-.41.288-.663.757-.663 1.257V18a2 2 0 0 1-2 2H10.65a2 2 0 0 1-2-2v-1c0-.5-.252-.97-.663-1.257C6.18 14.482 5 12.38 5 10c0-3.866 3.134-7 7-7Z"
                        className="stroke-black/55"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 23h4"
                        className="stroke-black/55"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-[#0B0D12]">
                      {f.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-black/60">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Micro trust line */}
            <div className="rounded-2xl border border-black/10 bg-white p-4 text-xs text-black/50">
              Tip: If you’re unsure, start with the{" "}
              <a
                href="#comparison"
                className="font-semibold text-[#0B0D12] underline decoration-black/20 underline-offset-4 hover:decoration-black/40"
              >
                comparison table
              </a>{" "}
              and pick the model that matches your vibe.
            </div>
          </div>

          {/* Right: Phone mock + ambient visual */}
          <div className="relative">
            {/* background wash */}
            <div className="pointer-events-none absolute -inset-6">
              <div className="absolute left-1/2 top-8 h-72 w-[28rem] -translate-x-1/2 rounded-full bg-black/[0.03] blur-3xl" />
              <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-black/[0.02] blur-3xl" />
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
              {/* “device” frame */}
              <div className="mx-auto my-8 w-[86%] max-w-[360px] rounded-[2.25rem] border border-black/10 bg-white shadow-sm">
                <div className="relative overflow-hidden rounded-[2.25rem]">
                  {/* Replace with real mock image */}
                  <div className="relative aspect-[9/19] w-full bg-black/[0.03]">
                    <Image
                      src="/images/app-mock.jpg"
                      alt="Aurora Lamb app control screen"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 90vw, 360px"
                    />
                    <div className="absolute inset-0 grid place-items-center text-xs text-black/50">
                      App mock placeholder
                    </div>
                  </div>

                  {/* top “notch” */}
                  <div className="pointer-events-none absolute left-1/2 top-3 h-5 w-24 -translate-x-1/2 rounded-full bg-black/10" />
                </div>
              </div>

              {/* mini overlays */}
              <div className="grid gap-3 border-t border-black/5 p-5 sm:grid-cols-2">
                <div className="rounded-2xl border border-black/10 bg-white p-4">
                  <div className="text-xs font-semibold text-[#0B0D12]">
                    Scene Mode
                  </div>
                  <div className="mt-1 text-xs text-black/60">
                    Warm • Focus • Relax
                  </div>
                  <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-black/5">
                    <div className="h-full w-2/3 rounded-full bg-black/20" />
                  </div>
                </div>

                <div className="rounded-2xl border border-black/10 bg-white p-4">
                  <div className="text-xs font-semibold text-[#0B0D12]">
                    Timer
                  </div>
                  <div className="mt-1 text-xs text-black/60">
                    Auto on/off routines
                  </div>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/70">
                    <span className="h-2 w-2 rounded-full bg-black/40" />
                    Active
                  </div>
                </div>
              </div>
            </div>

            {/* note */}
            <p className="mt-4 text-xs text-black/50">
              * App screens are for illustration and will be refined in the final
              build.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
