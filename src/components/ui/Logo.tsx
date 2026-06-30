import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#top"
      className={cn("group flex items-center gap-2.5", className)}
      aria-label="SZF systems — início"
    >
      <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-[11px] bg-gradient-to-br from-iris via-indigo to-[#2a1d8f] shadow-[0_0_28px_-6px_rgba(124,92,255,0.85)]">
        <span className="absolute inset-0 rounded-[11px] ring-1 ring-inset ring-white/25" />
        <span className="absolute -inset-2 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
        <svg
          viewBox="0 0 24 24"
          className="relative h-[18px] w-[18px]"
          fill="none"
          stroke="white"
          strokeWidth={2.1}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 7h12L6 17h12" />
          <circle cx="6" cy="7" r="0.4" fill="white" />
          <circle cx="18" cy="17" r="0.4" fill="white" />
        </svg>
      </span>
      <span className="flex items-baseline font-display text-[1.15rem] font-semibold leading-none tracking-tight">
        <span className="text-cyan animate-blink">|</span>
        <span className="text-ink">SZF</span>
        <span className="ml-1.5 font-mono text-[0.78rem] font-normal tracking-wide text-mute">
          systems
        </span>
      </span>
    </a>
  );
}
