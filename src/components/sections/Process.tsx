"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, DraftingCompass, Code2, Rocket, RefreshCw, type LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/fx/Reveal";

type Step = {
  n: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  meta: string;
};

const STEPS: Step[] = [
  {
    n: "01",
    icon: Search,
    title: "Descoberta",
    desc: "Mergulho no seu negócio: gargalos, processos e onde realmente está o dinheiro. Sem entender a operação, não existe sistema bom.",
    meta: "imersão · 1 semana",
  },
  {
    n: "02",
    icon: DraftingCompass,
    title: "Arquitetura & Protótipo",
    desc: "Desenho a estrutura técnica e um protótipo navegável. Você vê e aprova a experiência antes de escrever uma linha de código.",
    meta: "design · protótipo clicável",
  },
  {
    n: "03",
    icon: Code2,
    title: "Engenharia",
    desc: "Construção em ciclos curtos, com deploys reais toda semana. Você acompanha o sistema nascer, sem caixa-preta.",
    meta: "sprints · entregas semanais",
  },
  {
    n: "04",
    icon: Rocket,
    title: "Lançamento",
    desc: "Deploy em produção, monitoramento ativo e treinamento do seu time. O sistema entra no ar sem drama e sem surpresas.",
    meta: "go-live · monitoramento 24/7",
  },
  {
    n: "05",
    icon: RefreshCw,
    title: "Evolução",
    desc: "Suporte contínuo e novas features conforme o negócio cresce. O sistema acompanha sua empresa — não o contrário.",
    meta: "parceria · longo prazo",
  },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 65%", "end 75%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="processo" className="relative scroll-mt-24 py-28 md:py-36">
      <div className="shell">
        <SectionHeader
          index="05"
          kicker="Como trabalho"
          title="Um processo de engenharia, não de improviso."
          description="Método claro, do primeiro café ao sistema em produção. Você sabe exatamente o que esperar em cada etapa."
        />

        <div ref={ref} className="relative mt-20 pl-14 md:pl-20">
          {/* track */}
          <div className="absolute left-[1.35rem] top-2 h-[calc(100%-1rem)] w-px bg-line md:left-[2.1rem]">
            <motion.div
              style={{ scaleY }}
              className="h-full w-full origin-top bg-gradient-to-b from-iris via-cyan to-iris-bright"
            />
          </div>

          <div className="flex flex-col gap-12 md:gap-16">
            {STEPS.map((s, i) => (
              <div key={s.n} className="relative">
                {/* node */}
                <div className="absolute -left-14 top-0 md:-left-20">
                  <span className="relative grid h-11 w-11 place-items-center rounded-full border border-line bg-panel md:h-[3.25rem] md:w-[3.25rem]">
                    <span className="absolute inset-0 rounded-full bg-gradient-to-br from-iris/20 to-transparent" />
                    <s.icon className="relative h-4 w-4 text-iris-bright md:h-5 md:w-5" />
                  </span>
                </div>

                <Reveal delay={0.05} y={30}>
                  <div className="group spotlight rounded-3xl border border-line bg-panel/40 p-6 transition-colors duration-500 hover:bg-panel/70 md:p-8">
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-3xl font-semibold text-gradient-soft md:text-4xl">
                        {s.n}
                      </span>
                      <h3 className="font-display text-xl font-semibold tracking-tight text-ink md:text-2xl">
                        {s.title}
                      </h3>
                    </div>
                    <p className="mt-3 max-w-2xl leading-relaxed text-mute">
                      {s.desc}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.02] px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-faint">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                      {s.meta}
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
