"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/** Seamless infinite marquee. Two identical copies (each carrying its own
 *  trailing gap) translated by -50% so the loop never jumps. */
export function Marquee({
  children,
  reverse = false,
  speed = 32,
  className,
  pauseOnHover = true,
}: {
  children: ReactNode;
  reverse?: boolean;
  speed?: number;
  className?: string;
  pauseOnHover?: boolean;
}) {
  return (
    <div
      className={cn(
        "group/marquee relative flex w-full overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]",
        className,
      )}
    >
      <div
        className={cn(
          "flex w-max shrink-0",
          pauseOnHover && "group-hover/marquee:[animation-play-state:paused]",
        )}
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        <div className="flex shrink-0 items-center gap-4 pr-4">{children}</div>
        <div className="flex shrink-0 items-center gap-4 pr-4" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
