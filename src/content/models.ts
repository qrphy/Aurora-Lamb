export type AuroraModel = {
  id: "core" | "edge" | "pro";
  name: string;
  tagline: string;
  bullets: string[];
  featured?: boolean;
  // Price unknown for now; can be added later if needed
  // price?: { amount: number; currency: "TRY" | "USD" | "EUR" };
};

export const auroraModels: AuroraModel[] = [
  {
    id: "core",
    name: "Aurora Lamb Core",
    tagline: "Minimal smart design for everyday ambience.",
    bullets: [
      "Minimal decorative design",
      "Touch control",
      "3 distinct lighting modes",
      "Up to 20 hours of battery life",
    ],
  },
  {
    id: "edge",
    name: "Aurora Lamb Edge",
    tagline: "Balance of design, performance, and ease of use.",
    bullets: [
      "Stronger ambience transitions",
      "Timer & scene modes",
      "6 different colors",
      "Compatible with smart home systems",
    ],
    featured: true,
  },
  {
    id: "pro",
    name: "Aurora Lamb Pro",
    tagline: "Maximum atmosphere and the most advanced control experience.",
    bullets: [
      "Advanced scene/mode sets",
      "Premium material feel",
      "Full smart home ecosystem compatibility",
      "AI powered",
    ],
  },
];
