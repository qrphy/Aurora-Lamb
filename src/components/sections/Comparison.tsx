"use client";

import { compareRows } from "@/content/compare";

const models = [
  { id: "core" as const, name: "Core" },
  { id: "edge" as const, name: "Edge", featured: true },
  { id: "pro" as const, name: "Pro" },
];

function CheckPill({ text }: { text: string }) {
  const isYes = text.trim().toLowerCase() === "var" || text.trim().toLowerCase() === "evet";
  return (
    <span
      className={[
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold",
        isYes
          ? "border-black/10 bg-black/5 text-black/80"
          : "border-black/10 bg-white text-black/70",
      ].join(" ")}
    >
      {isYes ? (
        <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-black/10">
          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" aria-hidden="true">
            <path
              d="M20 6L9 17l-5-5"
              className="stroke-black/60"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      ) : (
        <span className="h-2 w-2 rounded-full bg-black/30" />
      )}
      {text}
    </span>
  );
}

export default function Comparison() {
  return (
    <section id="comparison" className="py-14 md:py-20" aria-label="Comparison">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        {/* Heading */}
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0B0D12] sm:text-4xl">
            Differences
            </h2>
          </div>
        </div>

        {/* Desktop table */}
        <div className="mt-10 hidden overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm md:block">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-black/[0.02]">
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-black/60">
                  Feature
                  </th>
                  {models.map((m) => (
                    <th key={m.id} className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-[#0B0D12]">
                          {m.name}
                        </span>
                        {m.featured ? (
                          <span className="rounded-full bg-black px-2 py-1 text-[10px] font-semibold text-white">
                            Most Popular
                          </span>
                        ) : null}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {compareRows.map((row) => (
                  <tr key={row.key} className="border-t border-black/5">
                    <td className="px-6 py-5 align-top">
                      <div className="text-sm font-semibold text-[#0B0D12]">
                        {row.label}
                      </div>
                      {row.hint ? (
                        <div className="mt-1 text-xs text-black/50">{row.hint}</div>
                      ) : null}
                    </td>

                    {models.map((m) => {
                      const value = row.values[m.id];
                      const pillish = value === "Var" || value === "Evet";
                      return (
                        <td key={m.id} className="px-6 py-5 align-top">
                          {pillish ? (
                            <CheckPill text={value} />
                          ) : (
                            <div className="text-sm text-black/70">{value}</div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile accordion */}
        <div className="mt-10 md:hidden">
          <div className="rounded-3xl border border-black/10 bg-white shadow-sm">
            <div className="p-4">
              <div className="text-sm font-semibold text-[#0B0D12]">
                Features
              </div>
            </div>

            <div className="border-t border-black/5">
              {compareRows.map((row) => (
                <details key={row.key} className="group border-b border-black/5">
                  <summary className="list-none cursor-pointer px-4 py-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-sm font-semibold text-[#0B0D12]">
                          {row.label}
                        </div>
                        {row.hint ? (
                          <div className="mt-1 text-xs text-black/50">{row.hint}</div>
                        ) : null}
                      </div>
                      <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-xl border border-black/10 bg-white text-black/60 transition group-open:rotate-45">
                        +
                      </span>
                    </div>
                  </summary>

                  <div className="px-4 pb-4">
                    <div className="grid gap-3">
                      {models.map((m) => {
                        const value = row.values[m.id];
                        const pillish = value === "Var" || value === "Evet";
                        return (
                          <div
                            key={m.id}
                            className="flex items-center justify-between rounded-2xl border border-black/10 bg-white px-4 py-3"
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-semibold text-[#0B0D12]">
                                {m.name}
                              </span>
                              {m.featured ? (
                                <span className="rounded-full bg-black px-2 py-0.5 text-[10px] font-semibold text-white">
                                  Popüler
                                </span>
                              ) : null}
                            </div>

                            {pillish ? (
                              <CheckPill text={value} />
                            ) : (
                              <span className="text-sm text-black/70">{value}</span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </details>
              ))}
            </div>

          </div>

          <a
            href="#buy"
            className="
              mt-4 inline-flex h-11 w-full items-center justify-center
              rounded-xl bg-[#0B0D12] px-5
              text-sm font-semibold text-white shadow-sm
              transition hover:opacity-90
              focus:outline-none focus:ring-2 focus:ring-black/10
            "
          >
            Buy Now
          </a>
        </div>
      </div>
    </section>
  );
}
