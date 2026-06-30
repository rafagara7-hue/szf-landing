"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { Magnetic } from "@/components/fx/Magnetic";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 will-change-transform select-none";

const variants: Record<Variant, string> = {
  primary:
    "shine bg-iris text-white shadow-[0_8px_30px_-8px_rgba(124,92,255,0.7)] hover:shadow-[0_14px_44px_-8px_rgba(124,92,255,0.85)] hover:-translate-y-0.5",
  secondary:
    "glass text-ink ring-grad hover:bg-white/[0.06] hover:-translate-y-0.5",
  ghost:
    "text-mute hover:text-ink",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-[0.95rem]",
  lg: "px-8 py-4 text-base",
};

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: keyof typeof sizes;
  className?: string;
  arrow?: boolean;
  magnetic?: boolean;
  external?: boolean;
  onClick?: () => void;
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  arrow = false,
  magnetic = false,
  external = false,
  onClick,
}: ButtonProps) {
  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {arrow && (
        <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
      )}
    </>
  );

  const cls = cn(base, variants[variant], sizes[size], className);

  const el = href ? (
    <a
      href={href}
      onClick={onClick}
      className={cls}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {content}
    </a>
  ) : (
    <button type="button" onClick={onClick} className={cls}>
      {content}
    </button>
  );

  return magnetic ? <Magnetic strength={0.4}>{el}</Magnetic> : el;
}
