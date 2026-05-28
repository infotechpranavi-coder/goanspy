/** Preset scroll-reveal animations — use a different one per section/page block */

export type RevealVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "zoom-out"
  | "flip-up"
  | "rotate-in"
  | "blur-in"
  | "skew-up"
  | "lift-soft"
  | "depth-left"
  | "depth-right";

export type MotionState = {
  opacity?: number;
  x?: number;
  y?: number;
  scale?: number;
  rotate?: number;
  rotateX?: number;
  rotateY?: number;
  skewY?: number;
  filter?: string;
};

export const revealVariants: Record<
  RevealVariant,
  { hidden: MotionState; visible: MotionState }
> = {
  "fade-up": {
    hidden: { opacity: 0, y: 28, scale: 0.985, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
  },
  "fade-down": {
    hidden: { opacity: 0, y: -24, scale: 0.985, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
  },
  "fade-left": {
    hidden: { opacity: 0, x: 36, scale: 0.985, filter: "blur(8px)" },
    visible: { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" },
  },
  "fade-right": {
    hidden: { opacity: 0, x: -36, scale: 0.985, filter: "blur(8px)" },
    visible: { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" },
  },
  "zoom-in": {
    hidden: { opacity: 0, scale: 0.92, y: 18, filter: "blur(12px)" },
    visible: { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" },
  },
  "zoom-out": {
    hidden: { opacity: 0, scale: 1.06, filter: "blur(8px)" },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
  },
  "flip-up": {
    hidden: { opacity: 0, rotateX: 10, y: 28, scale: 0.98, filter: "blur(10px)" },
    visible: { opacity: 1, rotateX: 0, y: 0, scale: 1, filter: "blur(0px)" },
  },
  "rotate-in": {
    hidden: { opacity: 0, rotate: -3, scale: 0.96, y: 18, filter: "blur(10px)" },
    visible: { opacity: 1, rotate: 0, scale: 1, y: 0, filter: "blur(0px)" },
  },
  "blur-in": {
    hidden: { opacity: 0, filter: "blur(14px)", y: 16, scale: 0.99 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0, scale: 1 },
  },
  "skew-up": {
    hidden: { opacity: 0, skewY: 3.5, y: 32, scale: 0.985, filter: "blur(8px)" },
    visible: { opacity: 1, skewY: 0, y: 0, scale: 1, filter: "blur(0px)" },
  },
  "lift-soft": {
    hidden: { opacity: 0, y: 22, scale: 0.975, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
  },
  "depth-left": {
    hidden: {
      opacity: 0,
      x: 40,
      rotateY: -8,
      scale: 0.96,
      filter: "blur(10px)",
    },
    visible: { opacity: 1, x: 0, rotateY: 0, scale: 1, filter: "blur(0px)" },
  },
  "depth-right": {
    hidden: {
      opacity: 0,
      x: -40,
      rotateY: 8,
      scale: 0.96,
      filter: "blur(10px)",
    },
    visible: { opacity: 1, x: 0, rotateY: 0, scale: 1, filter: "blur(0px)" },
  },
};

/** Cycle through variants for grid items */
export function staggerVariantAt(index: number): RevealVariant {
  const pool: RevealVariant[] = [
    "fade-up",
    "fade-left",
    "fade-right",
    "zoom-in",
    "rotate-in",
    "blur-in",
    "lift-soft",
  ];
  return pool[index % pool.length];
}

const detailPagePool: RevealVariant[] = [
  "fade-left",
  "fade-right",
  "zoom-in",
  "flip-up",
  "rotate-in",
  "blur-in",
  "skew-up",
  "fade-down",
  "lift-soft",
  "depth-left",
  "depth-right",
];

/** Unique image + content animation per detail page slug */
export function variantsForSlug(slug: string): {
  image: RevealVariant;
  content: RevealVariant;
} {
  const hash = slug.split("").reduce((sum, c) => sum + c.charCodeAt(0), 0);
  return {
    image: detailPagePool[hash % detailPagePool.length],
    content: detailPagePool[(hash + 3) % detailPagePool.length],
  };
}
