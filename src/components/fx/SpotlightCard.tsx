"use client";

import { cn } from "@/lib/utils";
import { useRef, type ReactNode } from "react";

/**
 * Card that tracks the cursor to drive a radial spotlight (via CSS vars) and an
 * optional subtle 3D tilt. The spotlight itself lives in globals.css (.spotlight).
 */
export function SpotlightCard({
  children,
  className,
  tilt = false,
}: {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    el.style.setProperty("--mx", `${px}px`);
    el.style.setProperty("--my", `${py}px`);
    if (tilt) {
      const rx = (py / rect.height - 0.5) * -6;
      const ry = (px / rect.width - 0.5) * 6;
      el.style.setProperty("--rx", `${rx}deg`);
      el.style.setProperty("--ry", `${ry}deg`);
    }
  };

  const reset = () => {
    const el = ref.current;
    if (!el || !tilt) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={cn("spotlight", className)}
      style={
        tilt
          ? {
              transform:
                "perspective(1000px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))",
              transition: "transform 0.3s var(--ease-out-expo)",
              transformStyle: "preserve-3d",
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
