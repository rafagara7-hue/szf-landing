"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/fx/Reveal";
import { SpotlightCard } from "@/components/fx/SpotlightCard";
import { MOCKUPS, type MockupKey } from "@/components/mockups/ProjectMockups";
import { cn } from "@/lib/utils";

type Project = {
  key: MockupKey;
  idx: string;
  title: string;
  tagline: string;
  desc: string;
  features?: string[];
  tags: string[];
  url: string;
};

const FEATURED: Project[] = [
  {
    key: "dashboard",
    idx: "01",
    title: "Dashboards & BI",
    tagline: "Decisões em tempo real",
    desc: "Painéis que unificam todas as suas fontes de dados em uma única tela viva. Métricas atualizando ao vivo, alertas inteligentes e relatórios que você realmente entende.",
    features: ["Métricas ao vivo via WebSocket", "Multi-fonte (SQL, API, planilhas)", "Alertas e anomalias automáticas"],
    tags: ["Next.js", "WebSocket", "PostgreSQL", "Charts"],
    url: "app.cliente.com/insights",
  },
  {
    key: "crm",
    idx: "02",
    title: "CRM sob medida",
    tagline: "Seu funil, suas regras",
    desc: "Nada de adaptar seu processo a um software de prateleira. Um CRM modelado exatamente como sua operação vende — com automações que cuidam do follow-up por você.",
    features: ["Pipeline visual arrastável", "Automação de follow-up", "Score de leads com IA"],
    tags: ["React", "Node", "Prisma", "OpenAI"],
    url: "crm.cliente.com",
  },
  {
    key: "financeiro",
    idx: "03",
    title: "Financeiro & Fluxo de caixa",
    tagline: "Controle absoluto do dinheiro",
    desc: "Conciliação bancária, contas a pagar e receber, DRE e projeções — tudo conectado. Saiba exatamente onde seu dinheiro está e para onde vai, em segundos.",
    features: ["Conciliação bancária automática", "DRE e fluxo projetado", "Conexão com Stripe / Pix"],
    tags: ["TypeScript", "Open Finance", "Stripe", "Redis"],
    url: "financeiro.cliente.com",
  },
];

const COMPACT: Project[] = [
  {
    key: "erp",
    idx: "04",
    title: "ERP / Estoque",
    tagline: "Operação sob controle",
    desc: "Gestão de inventário, compras e produção com rastreabilidade total e alertas de ruptura.",
    tags: ["ERP", "Inventário", "RFID"],
    url: "erp.cliente.com",
  },
  {
    key: "agenda",
    idx: "05",
    title: "Agenda & Scheduling",
    tagline: "Tempo sem atrito",
    desc: "Agendamentos, salas e equipes sincronizados, com confirmações e lembretes automáticos.",
    tags: ["Calendar", "Notificações", "Sync"],
    url: "agenda.cliente.com",
  },
  {
    key: "automacao",
    idx: "06",
    title: "Automação de processos",
    tagline: "O trabalho que se faz sozinho",
    desc: "Fluxos que conectam seus sistemas e eliminam tarefas repetitivas — rodando 24/7, sem falhas.",
    tags: ["Workflows", "Webhooks", "Queue"],
    url: "flows.cliente.com",
  },
  {
    key: "integracoes",
    idx: "07",
    title: "Integrações & APIs",
    tagline: "Tudo conversando entre si",
    desc: "Um hub que conecta ERP, pagamentos, e-mail e BI em uma única camada confiável.",
    tags: ["REST", "GraphQL", "OAuth"],
    url: "api.cliente.com",
  },
];

function Frame({ mockKey, url }: { mockKey: MockupKey; url: string }) {
  const Mockup = MOCKUPS[mockKey];
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-panel shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
      <div className="flex items-center gap-2 border-b border-line bg-white/[0.02] px-3.5 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        <span className="ml-2 truncate rounded-md bg-white/[0.03] px-2.5 py-1 font-mono text-[0.6rem] text-faint">
          {url}
        </span>
        <span className="ml-auto hidden font-mono text-[0.55rem] text-faint sm:block">
          ● 200 OK
        </span>
      </div>
      <div className="relative aspect-[16/11] w-full bg-gradient-to-br from-panel-2 to-void">
        <Mockup />
      </div>
    </div>
  );
}

function FeaturedRow({ p, reverse }: { p: Project; reverse: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <div
      ref={ref}
      className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12"
    >
      {/* meta */}
      <div className={cn("lg:col-span-5", reverse && "lg:order-2")}>
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-iris-bright">{p.idx}</span>
            <span className="h-px w-8 bg-gradient-to-r from-iris/70 to-transparent" />
            <span className="kicker">{p.tagline}</span>
          </div>
          <h3 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {p.title}
          </h3>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-mute">
            {p.desc}
          </p>
          {p.features && (
            <ul className="mt-6 space-y-2.5">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-mute">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-iris/15 text-iris-bright">
                    <Check className="h-3 w-3" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          )}
          <div className="mt-7 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-line bg-white/[0.02] px-3 py-1 font-mono text-[0.65rem] text-mute"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      {/* visual */}
      <div className={cn("lg:col-span-7", reverse && "lg:order-1")}>
        <Reveal delay={0.1} y={40}>
          <motion.div style={{ y }}>
            <SpotlightCard tilt>
              <Frame mockKey={p.key} url={p.url} />
            </SpotlightCard>
          </motion.div>
        </Reveal>
      </div>
    </div>
  );
}

function CompactCard({ p }: { p: Project }) {
  return (
    <Reveal y={36}>
      <SpotlightCard className="ring-grad group h-full overflow-hidden rounded-3xl border border-line bg-panel/60 p-4 transition-transform duration-500 hover:-translate-y-1.5">
        <Frame mockKey={p.key} url={p.url} />
        <div className="px-2 pb-1 pt-5">
          <div className="flex items-center justify-between">
            <span className="kicker">{p.tagline}</span>
            <span className="font-mono text-xs text-faint">{p.idx}</span>
          </div>
          <div className="mt-3 flex items-center justify-between gap-3">
            <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
              {p.title}
            </h3>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-iris-bright" />
          </div>
          <p className="mt-2 text-sm leading-relaxed text-mute">{p.desc}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-line bg-white/[0.02] px-2.5 py-0.5 font-mono text-[0.6rem] text-faint"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </SpotlightCard>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="projetos" className="relative scroll-mt-24 py-28 md:py-36">
      <div className="shell">
        <SectionHeader
          index="02"
          kicker="Projetos"
          title="Sistemas que viram vantagem competitiva."
          description="Cada projeto é arquitetado do zero para a realidade de um negócio. Estes são os tipos de sistema que eu construo — todos sob medida, nenhum de prateleira."
        />

        <div className="mt-20 flex flex-col gap-24 md:gap-32">
          {FEATURED.map((p, i) => (
            <FeaturedRow key={p.key} p={p} reverse={i % 2 === 1} />
          ))}
        </div>

        <div className="mt-24 grid gap-6 sm:grid-cols-2">
          {COMPACT.map((p) => (
            <CompactCard key={p.key} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
