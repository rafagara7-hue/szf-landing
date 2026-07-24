"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useCoarsePointer } from "@/lib/useCoarsePointer";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  blur?: boolean;
  once?: boolean;
  as?: "div" | "span" | "li" | "section";
};

/** Scroll-into-view fade + slide. Respects reduced motion. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  blur = true,
  once = true,
}: RevealProps) {
  // Touch: animar `filter: blur()` repinta a cada frame e trava em WebViews
  // (Instagram/WhatsApp) — cai para fade + slide curto, só compositor.
  const coarse = useCoarsePointer();
  return (
    <motion.div
      suppressHydrationWarning
      className={className}
      initial={
        coarse
          ? // blur(0px) estático: zera o filter herdado do HTML do SSR
            // (caminho desktop) sem criar animação de filter.
            { opacity: 0, y: 14, filter: "blur(0px)" }
          : { opacity: 0, y, filter: blur ? "blur(8px)" : "blur(0px)" }
      }
      whileInView={
        coarse
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 1, y: 0, filter: "blur(0px)" }
      }
      viewport={{ once, margin: "0px 0px -12% 0px" }}
      transition={{
        duration: coarse ? 0.55 : 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
