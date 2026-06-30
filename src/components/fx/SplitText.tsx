"use client";

import { motion, type Variants } from "framer-motion";
import { Fragment } from "react";

type SplitTextProps = {
  text: string;
  className?: string;
  /** stagger per character */
  delay?: number;
  stagger?: number;
  by?: "char" | "word";
  /** animate immediately on mount (hero) or when scrolled into view */
  trigger?: "mount" | "view";
  duration?: number;
};

/**
 * Reveals a string char-by-char (or word-by-word) with a vertical clip + rise.
 * Words never break across lines.
 */
export function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.028,
  by = "char",
  trigger = "view",
  duration = 0.85,
}: SplitTextProps) {
  const words = text.split(" ");

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const child: Variants = {
    hidden: { y: "110%" },
    show: {
      y: "0%",
      transition: { duration, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const animateProps =
    trigger === "mount"
      ? { animate: "show" as const }
      : {
          whileInView: "show" as const,
          viewport: { once: true, margin: "0px 0px -10% 0px" },
        };

  return (
    <motion.span
      className={className}
      style={{ display: "inline-block" }}
      variants={container}
      initial="hidden"
      {...animateProps}
      aria-label={text}
    >
      {words.map((word, wi) => (
        <Fragment key={wi}>
          <span
            aria-hidden
            style={{ display: "inline-block", whiteSpace: "nowrap" }}
          >
            {by === "word" ? (
              <span style={{ display: "inline-block", overflow: "hidden" }}>
                <motion.span
                  variants={child}
                  style={{ display: "inline-block" }}
                >
                  {word}
                </motion.span>
              </span>
            ) : (
              [...word].map((ch, ci) => (
                <span
                  key={ci}
                  style={{ display: "inline-block", overflow: "hidden" }}
                >
                  <motion.span
                    variants={child}
                    style={{ display: "inline-block" }}
                  >
                    {ch}
                  </motion.span>
                </span>
              ))
            )}
          </span>
          {wi < words.length - 1 && " "}
        </Fragment>
      ))}
    </motion.span>
  );
}
