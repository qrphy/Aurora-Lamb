export type ModelId = "core" | "edge" | "pro";

export type CompareRow = {
  key: string;
  label: string;
  hint?: string;
  values: Record<ModelId, string>;
};

export const compareRows: CompareRow[] = [
  {
    key: "ambience",
    label: "Ambience level",
    hint: "Atmosphere feel and lighting scenes",
    values: { core: "Basic", edge: "Advanced", pro: "Top-tier" },
  },
  {
    key: "control",
    label: "Control",
    hint: "App and quick control options",
    values: {
      core: "Mobile app",
      edge: "Mobile + quick scenes",
      pro: "Mobile + advanced scenes",
    },
  },
  {
    key: "smartHome",
    label: "Smart home compatibility",
    hint: "Smart home integration support",
    values: { core: "Yes", edge: "Yes", pro: "Yes" },
  },
  {
    key: "scenes",
    label: "Scenes / Modes",
    hint: "Ready-made ambience modes",
    values: { core: "Standard", edge: "Rich", pro: "Professional set" },
  },
  {
    key: "design",
    label: "Design feel",
    hint: "Decorative / premium perception",
    values: { core: "Minimal", edge: "Minimal + premium", pro: "Premium+" },
  },
  {
    key: "energy",
    label: "Energy efficiency",
    hint: "Low-consumption focus",
    values: { core: "High", edge: "High", pro: "High" },
  },
];
