import { cn } from "@/lib/utils";
import { Reveal } from "@/components/fx/Reveal";
import { SplitText } from "@/components/fx/SplitText";

export function SectionHeader({
  index,
  kicker,
  title,
  description,
  align = "left",
  className,
}: {
  index?: string;
  kicker: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <Reveal y={16}>
        <div className="flex items-center gap-3">
          {index && (
            <span className="font-mono text-xs text-iris-bright">{index}</span>
          )}
          <span className="h-px w-8 bg-gradient-to-r from-iris/70 to-transparent" />
          <span className="kicker">{kicker}</span>
        </div>
      </Reveal>

      <h2
        className={cn(
          "max-w-3xl font-display text-4xl font-semibold leading-[1.04] tracking-tight text-balance sm:text-5xl md:text-[3.4rem]",
          align === "center" && "mx-auto",
        )}
      >
        <SplitText text={title} by="word" stagger={0.05} className="text-gradient-soft" />
      </h2>

      {description && (
        <Reveal delay={0.1} y={18}>
          <p
            className={cn(
              "max-w-xl text-pretty text-[1.05rem] leading-relaxed text-mute",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
