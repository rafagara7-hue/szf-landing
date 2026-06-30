"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Premium mouse follower: an instant inner dot + a lagging outer ring that
 * grows over interactive elements. Uses mix-blend-mode for the inverting glow.
 * Hidden on coarse pointers (touch).
 */
export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: target.x, y: target.y };
    let hovering = false;
    let down = false;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
      const interactive = (e.target as HTMLElement)?.closest(
        "a, button, [data-cursor], input, textarea, summary",
      );
      const next = Boolean(interactive);
      if (next !== hovering) {
        hovering = next;
        ringRef.current?.classList.toggle("is-hover", hovering);
      }
    };

    const onDown = () => {
      down = true;
      ringRef.current?.classList.add("is-down");
    };
    const onUp = () => {
      down = false;
      ringRef.current?.classList.remove("is-down");
    };
    const onLeave = () => ringRef.current?.classList.add("is-hidden");
    const onEnter = () => ringRef.current?.classList.remove("is-hidden");

    const render = () => {
      ring.x += (target.x - ring.x) * 0.18;
      ring.y += (target.y - ring.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%) scale(${
          down ? 0.8 : hovering ? 1.9 : 1
        })`;
      }
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="cursor-ring pointer-events-none fixed left-0 top-0 z-[9999] h-9 w-9 rounded-full border border-white/70 transition-[opacity,border-color,background-color] duration-300 will-change-transform"
        style={{ mixBlendMode: "difference" }}
      />
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-white will-change-transform"
        style={{ mixBlendMode: "difference" }}
      />
      <style jsx global>{`
        .cursor-ring.is-hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.95);
        }
        .cursor-ring.is-hidden {
          opacity: 0;
        }
      `}</style>
    </>
  );
}
