"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/fx/Reveal";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "Quanto tempo leva para desenvolver um sistema?",
    a: "Depende do escopo. Um sistema do plano Inicial costuma ficar pronto em 3 a 5 semanas. Projetos maiores rodam em ciclos curtos com entregas semanais, então você vê o sistema crescer desde o começo.",
  },
  {
    q: "O código vai ser meu de verdade?",
    a: "Sim. Você recebe 100% do código-fonte, documentado e organizado. Sem lock-in, sem mensalidade obrigatória e sem depender de mim para sempre. O sistema é um ativo da sua empresa.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Trabalho com projeto fechado e marcos. Normalmente um sinal para iniciar e o restante dividido nas entregas. No Enterprise, o modelo é desenhado conforme o escopo. Tudo combinado e transparente antes de começar.",
  },
  {
    q: "Você dá suporte depois da entrega?",
    a: "Sim. Todo plano inclui um período de suporte (30 a 90 dias) e há opções de parceria contínua para evolução do sistema. Quem te atende é quem escreveu o código — sem call center.",
  },
  {
    q: "Dá para integrar com os sistemas que já uso?",
    a: "Quase sempre, sim. ERPs, gateways de pagamento, e-mail, planilhas, ferramentas de BI, APIs de terceiros — se tem como conectar, eu conecto. Integração é uma das minhas especialidades.",
  },
  {
    q: "E se eu ainda não sei exatamente o que preciso?",
    a: "Perfeito — é para isso que existe a fase de Descoberta. A gente conversa, eu entendo seu negócio e traduzo a dor em um escopo claro, com protótipo navegável, antes de qualquer linha de código.",
  },
  {
    q: "Você atende empresas de outras cidades?",
    a: "Sim, atendo o Brasil inteiro (e fora dele) de forma remota. Todo o processo é digital, com reuniões e acompanhamento online — sem fronteira para um bom sistema.",
  },
];

function FaqItem({
  item,
  open,
  onToggle,
}: {
  item: { q: string; a: string };
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border transition-colors duration-300",
        open ? "border-iris/30 bg-panel/60" : "border-line bg-panel/30 hover:bg-panel/50",
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-lg font-medium tracking-tight text-ink">
          {item.q}
        </span>
        <span
          className={cn(
            "grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line transition-all duration-300",
            open ? "rotate-45 bg-iris text-white" : "text-mute",
          )}
        >
          <Plus className="h-4 w-4" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 pr-12 leading-relaxed text-mute">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-24 py-28 md:py-36">
      <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeader
            index="08"
            kicker="FAQ"
            title="Perguntas frequentes."
            description="O que quase todo cliente quer saber antes de começar. Ficou alguma dúvida? É só me chamar."
          />
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.04} y={20}>
              <FaqItem
                item={item}
                open={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
