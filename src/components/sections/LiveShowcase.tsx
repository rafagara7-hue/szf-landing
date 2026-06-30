"use client";

import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/fx/Reveal";
import { SpotlightCard } from "@/components/fx/SpotlightCard";
import { Button } from "@/components/ui/Button";

// Prefixo de assets fora do pipeline do Next (respeita o basePath do GitHub Pages).
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type Demo = {
  title: string;
  tagline: string;
  desc: string;
  img: string;
  url: string;
  host: string;
  tags: string[];
};

const DEMOS: Demo[] = [
  {
    title: "NEXUS · Financial Intelligence",
    tagline: "BI financeiro em tempo real",
    desc: "Painel executivo de inteligência financeira: receita, lucro, custos, fluxo de caixa e metas — com gráficos ao vivo, busca global e visão de CFO.",
    img: "/showcase/finance-dashboard.jpg",
    url: "https://rafagara7-hue.github.io/finance-dashboard/",
    host: "rafagara7-hue.github.io/finance-dashboard",
    tags: ["Dashboard", "BI", "Fluxo de caixa", "Charts"],
  },
  {
    title: "Lumina Finance · Pagamentos",
    tagline: "Gestão de cobranças",
    desc: "Módulo de pagamentos com Pix, cartão, boleto e transferência — KPIs de aprovação, status em tempo real e tabela filtrável e paginada.",
    img: "/showcase/lumina-finance.jpg",
    url: "https://rafagara7-hue.github.io/lumina-finance/payments/",
    host: "rafagara7-hue.github.io/lumina-finance",
    tags: ["Dashboard", "Pagamentos", "Pix", "Tabela"],
  },
];

function DemoCard({ d }: { d: Demo }) {
  return (
    <Reveal y={40}>
      <SpotlightCard className="ring-grad group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-panel/50 transition-transform duration-500 hover:-translate-y-1.5">
        {/* browser chrome */}
        <div className="flex items-center gap-2 border-b border-line bg-white/[0.02] px-3.5 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          <span className="ml-2 min-w-0 flex-1 truncate rounded-md bg-white/[0.03] px-2.5 py-1 font-mono text-[0.6rem] text-faint">
            {d.host}
          </span>
          <span className="ml-auto inline-flex shrink-0 items-center gap-1.5 font-mono text-[0.55rem] uppercase tracking-wider text-cyan-bright">
            <span className="live-dot !h-1.5 !w-1.5" /> ao vivo
          </span>
        </div>

        {/* live preview — pans to reveal the full screen on hover */}
        <a
          href={d.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block aspect-[16/10] overflow-hidden"
          aria-label={`Abrir ${d.title} ao vivo`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${BASE}${d.img}`}
            alt={`Captura do projeto ${d.title}`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top transition-[object-position] duration-[5000ms] ease-linear group-hover:object-bottom"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-30" />
          <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-void/85 px-3 py-1.5 text-xs font-medium text-ink ring-1 ring-line backdrop-blur transition-transform duration-300 group-hover:-translate-y-0.5">
            Ver ao vivo
            <ArrowUpRight className="h-3.5 w-3.5 text-cyan-bright" />
          </span>
        </a>

        {/* meta */}
        <div className="flex flex-1 flex-col p-6">
          <span className="kicker">{d.tagline}</span>
          <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-ink md:text-2xl">
            {d.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-mute">{d.desc}</p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {d.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-line bg-white/[0.02] px-2.5 py-0.5 font-mono text-[0.6rem] text-faint"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-6">
            <Button href={d.url} external arrow size="sm" variant="secondary">
              Abrir demo
            </Button>
          </div>
        </div>
      </SpotlightCard>
    </Reveal>
  );
}

export function LiveShowcase() {
  return (
    <section id="vitrine" className="relative scroll-mt-24 py-28 md:py-36">
      <div className="shell">
        <SectionHeader
          index="01"
          kicker="Vitrine ao vivo"
          title="Não é mockup. Está em produção, agora."
          description="Dois sistemas reais, rodando ao vivo. Passe o mouse para percorrer a tela — ou abra a demo e navegue você mesmo."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {DEMOS.map((d) => (
            <DemoCard key={d.url} d={d} />
          ))}
        </div>
      </div>
    </section>
  );
}
