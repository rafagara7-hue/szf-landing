"use client";

import {
  Gauge,
  Boxes,
  Code2,
  ShieldCheck,
  Rocket,
  Infinity as InfinityIcon,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/fx/Reveal";
import { SpotlightCard } from "@/components/fx/SpotlightCard";
import { cn } from "@/lib/utils";

type Benefit = {
  icon: LucideIcon;
  title: string;
  desc: string;
  span: string;
  featured?: boolean;
};

const BENEFITS: Benefit[] = [
  {
    icon: Gauge,
    title: "Performance obsessiva",
    desc: "Sistemas arquitetados para respostas abaixo de 200ms, mesmo sob carga. Cada query, cada render e cada request são medidos e otimizados.",
    span: "lg:col-span-3 lg:row-span-2",
    featured: true,
  },
  {
    icon: Boxes,
    title: "Sob medida de verdade",
    desc: "Nada de adaptar seu negócio a um template. O sistema é modelado exatamente como sua operação funciona.",
    span: "lg:col-span-3",
  },
  {
    icon: Code2,
    title: "Você é dono do código",
    desc: "Código-fonte 100% seu, documentado e sem lock-in. Sem reféns, sem mensalidade obrigatória.",
    span: "lg:col-span-3",
  },
  {
    icon: ShieldCheck,
    title: "Segurança by design",
    desc: "Criptografia, controle de acesso e boas práticas OWASP desde a primeira linha.",
    span: "lg:col-span-2",
  },
  {
    icon: Rocket,
    title: "Entrega contínua",
    desc: "Deploys frequentes e previsíveis. Você acompanha o sistema crescer, semana a semana.",
    span: "lg:col-span-2",
  },
  {
    icon: InfinityIcon,
    title: "Suporte de quem construiu",
    desc: "Quem te atende é quem escreveu o código. Sem call center, sem ticket perdido.",
    span: "lg:col-span-2",
  },
];

function IconBadge({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="relative grid h-11 w-11 place-items-center rounded-xl border border-line bg-white/[0.03]">
      <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-iris/20 to-transparent" />
      <Icon className="relative h-5 w-5 text-iris-bright" />
    </span>
  );
}

export function Benefits() {
  return (
    <section id="beneficios" className="relative scroll-mt-24 py-28 md:py-36">
      <div className="shell">
        <SectionHeader
          index="03"
          kicker="Benefícios"
          title="Por que isso não é só mais um software."
          description="A diferença entre contratar uma agência genérica e contratar engenharia de verdade aparece todos os dias depois da entrega."
        />

        <div className="mt-16 grid auto-rows-[minmax(0,1fr)] gap-4 lg:grid-cols-6">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 0.08} className={cn("h-full", b.span)}>
              <SpotlightCard
                className={cn(
                  "ring-grad group flex h-full flex-col rounded-3xl border border-line bg-panel/50 p-6 transition-transform duration-500 hover:-translate-y-1.5",
                  b.featured && "justify-between",
                )}
              >
                <div>
                  <IconBadge icon={b.icon} />
                  <h3
                    className={cn(
                      "mt-5 font-display font-semibold tracking-tight text-ink",
                      b.featured ? "text-2xl md:text-3xl" : "text-lg",
                    )}
                  >
                    {b.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-3 leading-relaxed text-mute",
                      b.featured ? "max-w-sm text-[1.02rem]" : "text-sm",
                    )}
                  >
                    {b.desc}
                  </p>
                </div>

                {b.featured && (
                  <div className="mt-8 flex items-end gap-4 rounded-2xl border border-line bg-void/40 p-5">
                    <div>
                      <div className="font-display text-4xl font-semibold text-gradient">
                        142ms
                      </div>
                      <div className="mt-1 font-mono text-[0.6rem] uppercase tracking-wider text-faint">
                        resposta média p99
                      </div>
                    </div>
                    <div className="flex h-12 flex-1 items-end gap-1">
                      {[40, 55, 48, 70, 62, 85, 78, 92].map((h, idx) => (
                        <div
                          key={idx}
                          className="flex-1 rounded-t bg-gradient-to-t from-iris/30 to-cyan"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
