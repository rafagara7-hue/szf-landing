"use client";

import { Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/fx/Reveal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Plan = {
  name: string;
  audience: string;
  price: string;
  priceNote: string;
  desc: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Inicial",
    audience: "Pequenos negócios",
    price: "R$ 3k–6k",
    priceNote: "projeto fechado",
    desc: "O primeiro sistema sob medida para tirar sua operação das planilhas.",
    features: [
      "1 sistema sob medida",
      "Até 5 telas / módulos",
      "Painel administrativo",
      "Autenticação e níveis de acesso",
      "Deploy + domínio configurados",
      "Layout 100% responsivo",
      "30 dias de suporte",
    ],
    cta: "Começar simples",
  },
  {
    name: "Profissional",
    audience: "Empresas em crescimento",
    price: "R$ 8k–20k",
    priceNote: "projeto fechado",
    desc: "Para quem precisa de um sistema completo, com automações e integrações.",
    features: [
      "Tudo do plano Inicial",
      "Múltiplos módulos integrados",
      "Dashboard com BI em tempo real",
      "Automações de processos",
      "Integrações (pagamento, e-mail, APIs)",
      "Otimização de performance",
      "90 dias de suporte prioritário",
    ],
    cta: "Escalar meu negócio",
    featured: true,
  },
  {
    name: "Enterprise",
    audience: "Grandes empresas",
    price: "A partir de R$ 30k",
    priceNote: "sob escopo",
    desc: "Arquitetura robusta, escalável e com IA para operações de alto volume.",
    features: [
      "Tudo do plano Profissional",
      "Arquitetura escalável / multi-tenant",
      "IA aplicada ao seu negócio",
      "Integrações ilimitadas",
      "SLA dedicado e monitoramento 24/7",
      "Equipe alocada ao projeto",
      "Consultoria estratégica contínua",
    ],
    cta: "Falar sobre escopo",
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-3xl border p-7 transition-transform duration-500",
        plan.featured
          ? "border-iris/40 bg-gradient-to-b from-iris/[0.12] to-panel/60 lg:-translate-y-4 lg:scale-[1.03]"
          : "border-line bg-panel/40 hover:-translate-y-1.5",
      )}
    >
      {plan.featured && (
        <>
          <div className="ring-grad pointer-events-none absolute inset-0 rounded-3xl" />
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-px -z-10 rounded-3xl bg-iris/25 opacity-60 blur-2xl"
          />
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-iris to-cyan px-3 py-1 font-mono text-[0.62rem] uppercase tracking-wider text-white shadow-lg">
              <Sparkles className="h-3 w-3" /> Mais escolhido
            </span>
          </div>
        </>
      )}

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
            {plan.name}
          </h3>
          <span className="kicker mt-1.5 max-w-[8.5rem] shrink-0 text-right leading-relaxed [letter-spacing:0.16em]">
            {plan.audience}
          </span>
        </div>

        <div className="mt-6 flex items-end gap-2">
          <span className="font-display text-4xl font-semibold tracking-tight text-gradient">
            {plan.price}
          </span>
        </div>
        <div className="mt-1 font-mono text-[0.7rem] uppercase tracking-wider text-faint">
          {plan.priceNote}
        </div>

        <p className="mt-4 text-sm leading-relaxed text-mute">{plan.desc}</p>

        <div className="my-6 h-px bg-line" />

        <ul className="space-y-3">
          {plan.features.map((f, i) => (
            <li key={f} className="flex items-start gap-3 text-sm text-mute">
              <span
                className={cn(
                  "mt-0.5 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full",
                  plan.featured ? "bg-cyan/20 text-cyan" : "bg-iris/15 text-iris-bright",
                )}
              >
                <Check className="h-3 w-3" />
              </span>
              <span className={i === 0 ? "font-medium text-ink/90" : ""}>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mt-8 pt-2">
        <Button
          href="#contato"
          variant={plan.featured ? "primary" : "secondary"}
          size="md"
          arrow
          className="w-full"
        >
          {plan.cta}
        </Button>
      </div>
    </div>
  );
}

export function Pricing() {
  return (
    <section id="planos" className="relative scroll-mt-24 py-28 md:py-36">
      <div className="shell">
        <SectionHeader
          index="07"
          kicker="Planos"
          title="Investimento que se paga em eficiência."
          description="Valores transparentes para cada estágio do seu negócio. Todos os planos incluem o código-fonte 100% seu — sem mensalidade obrigatória, sem lock-in."
          align="center"
          className="items-center"
        />

        <div className="mt-20 grid items-stretch gap-6 lg:grid-cols-3">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1} y={40} className="h-full">
              <motion.div whileHover={{ scale: 1.005 }} className="h-full">
                <PlanCard plan={p} />
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center font-mono text-xs text-faint">
            Não sabe qual escolher?{" "}
            <a href="#contato" className="text-iris-bright underline-offset-4 hover:underline">
              Me conte seu desafio
            </a>{" "}
            e eu desenho a melhor proposta para você.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
