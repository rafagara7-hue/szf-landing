"use client";

import { cn } from "@/lib/utils";

/**
 * Ambient page backdrop: a fixed grid, drifting glow blobs and a soft vignette.
 * Purely decorative; sits behind everything.
 */
export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
        className,
      )}
    >
      {/* base grid */}
      <div className="absolute inset-0 grid-lines opacity-[0.35] mask-radial" />

      {/* drifting glows */}
      <div className="absolute left-[8%] top-[-10%] h-[42rem] w-[42rem] rounded-full bg-iris/20 blur-[140px] animate-float-slow" />
      <div className="absolute right-[2%] top-[20%] h-[34rem] w-[34rem] rounded-full bg-cyan/12 blur-[150px] animate-float-slow [animation-delay:-6s]" />
      <div className="absolute bottom-[-15%] left-[35%] h-[40rem] w-[40rem] rounded-full bg-indigo/20 blur-[160px] animate-float-slow [animation-delay:-11s]" />

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--color-void)_92%)]" />
    </div>
  );
}
