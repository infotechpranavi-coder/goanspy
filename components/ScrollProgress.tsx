"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.2,
  });

  if (reduce) {
    return null;
  }

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        zIndex: 1200,
        pointerEvents: "none",
      }}
    >
      <motion.div
        style={{
          height: "100%",
          transformOrigin: "0% 50%",
          scaleX: progress,
          background:
            "linear-gradient(90deg, var(--gold) 0%, #e5c98f 45%, var(--wine-berry) 100%)",
          boxShadow: "0 0 18px rgba(196,165,116,0.35)",
        }}
      />
    </div>
  );
}
