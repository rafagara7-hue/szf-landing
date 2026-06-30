"use client";

import { Star, Quote } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/fx/Reveal";
import { SpotlightCard } from "@/components/fx/SpotlightCard";

type T = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

const TESTIMONIALS: T[] = [
  {
    quote:
      "Saímos de planilhas para um sistema que roda a operação inteira. O faturamento subiu 30% só pela organização que ganhamos.",
    name: "Marina Alckmin",
    role: "COO · Lumen Distribuidora",
    initials: "MA",
  },
  {
    quote:
      "O SZF entendeu nosso processo melhor do que nós mesmos. O CRM parece que foi feito lendo a nossa mente.",
    name: "Rafael Tavares",
    role: "Head de Vendas · Astra Tech",
    initials: "RT",
  },
  {
    quote:
      "Velocidade absurda. O que outras agências fariam em seis meses, ele entregou em seis semanas — e rodando perfeitamente.",
    name: "Camila Nunes",
    role: "Founder · Orbital",
    initials: "CN",
  },
  {
    quote:
      "Os dashboards em tempo real mudaram a forma como tomamos decisão. Hoje seria impossível voltar para o jeito antigo.",
    name: "Patrícia Lemos",
    role: "Diretora Financeira · Nova Holding",
    initials: "PL",
  },
  {
    quote:
      "Nunca mais quero software de prateleira. Ter o código como nosso, de verdade, mudou completamente o jogo.",
    name: "Diego Farias",
    role: "CEO · Vale Group",
    initials: "DF",
  },
  {
    quote:
      "Suporte de verdade, falando direto com quem construiu. Resolve em minutos o que antes levava dias.",
    name: "Bruno Castro",
    role: "CTO · Helix Sistemas",
    initials: "BC",
  },
];

function Avatar({ initials }: { initials: string }) {
  return (
    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-iris to-indigo font-display text-sm font-semibold text-white ring-1 ring-white/15">
      {initials}
    </span>
  );
}

export function Testimonials() {
  return (
    <section className="relative scroll-mt-24 py-28 md:py-36">
      <div className="shell">
        <SectionHeader
          index="06"
          kicker="Depoimentos"
          title="Quem confia, não volta para o genérico."
          description="Resultados reais de quem trocou o software de prateleira por um sistema feito sob medida."
        />

        <div className="mt-16 columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.08}>
              <SpotlightCard className="ring-grad break-inside-avoid rounded-3xl border border-line bg-panel/50 p-6 transition-transform duration-500 hover:-translate-y-1">
                <Quote className="h-7 w-7 text-iris/40" />
                <p className="mt-4 text-[1.02rem] leading-relaxed text-ink/90">
                  {t.quote}
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <Avatar initials={t.initials} />
                  <div>
                    <div className="text-sm font-medium text-ink">{t.name}</div>
                    <div className="font-mono text-[0.7rem] text-faint">
                      {t.role}
                    </div>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className="h-3.5 w-3.5 fill-cyan text-cyan"
                      />
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
