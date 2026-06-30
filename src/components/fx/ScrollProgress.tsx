"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin gradient progress bar fixed to the top of the viewport. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[9997] h-px origin-left bg-gradient-to-r from-iris via-cyan to-iris-bright"
    />
  );
}
