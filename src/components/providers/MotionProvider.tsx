"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Globally reduces transform/layout animations for users who set
 * `prefers-reduced-motion` — without changing the rendered DOM structure, so
 * there's no SSR/client hydration mismatch on the reduced-motion path.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
