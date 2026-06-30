"use client";

import { Marquee } from "@/components/fx/Marquee";
import { Reveal } from "@/components/fx/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const ROW_A = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Tailwind CSS",
  "GraphQL",
];
const ROW_B = [
  "Three.js",
  "Framer Motion",
  "GSAP",
  "Redis",
  "Docker",
  "AWS",
  "Python",
  "OpenAI",
];

const CATEGORIES = [
  { label: "Frontend", value: "React · Next · Motion" },
  { label: "Backend", value: "Node · Python · Go" },
  { label: "Dados", value: "Postgres · Redis · BI" },
  { label: "Infra & IA", value: "AWS · Docker · LLMs" },
];

function TechChip({ name }: { name: string }) {
  return (
    <span className="flex items-center gap-2.5 whitespace-nowrap rounded-full border border-line bg-panel/60 px-5 py-2.5">
      <span className="h-2 w-2 rounded-full bg-gradient-to-br from-iris to-cyan" />
      <span className="font-display text-base font-medium tracking-tight text-mute">
        {name}
      </span>
    </span>
  );
}

export function TechStack() {
  return (
    <section id="tecnologias" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="shell">
        <SectionHeader
          index="04"
          kicker="Tecnologias"
          title="Construído com a stack que move a internet."
          description="As mesmas ferramentas usadas por Vercel, Linear e Stripe — escolhidas porque entregam velocidade, escala e uma experiência impecável."
          align="center"
          className="items-center"
        />
      </div>

      <div className="mt-16 flex flex-col gap-5">
        <Marquee speed={38}>
          {ROW_A.map((t) => (
            <TechChip key={t} name={t} />
          ))}
        </Marquee>
        <Marquee speed={34} reverse>
          {ROW_B.map((t) => (
            <TechChip key={t} name={t} />
          ))}
        </Marquee>
      </div>

      <div className="shell mt-16">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line/40 md:grid-cols-4">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08} className="h-full">
              <div className="h-full bg-void/60 px-6 py-7 backdrop-blur-sm">
                <div className="kicker">{c.label}</div>
                <div className="mt-2 font-mono text-sm text-ink/90">{c.value}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
