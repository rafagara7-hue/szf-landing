"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { SplitText } from "@/components/fx/SplitText";
import { Button } from "@/components/ui/Button";

const HeroCanvas = dynamic(() => import("@/components/fx/HeroCanvas"), {
  ssr: false,
});

const STATS = [
  { value: "+50", label: "sistemas em produção" },
  { value: "99.9%", label: "uptime médio" },
  { value: "12+", label: "integrações nativas" },
  { value: "4.9/5", label: "satisfação dos clientes" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden pt-28"
    >
      {/* 3D centerpiece */}
      <div className="absolute inset-0 z-0 opacity-90 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_45%,#000_55%,transparent)]">
        <HeroCanvas />
      </div>

      {/* animated scan grid */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 grid-lines animate-grid-pan opacity-[0.18] mask-b"
      />

      {/* readability scrim */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_50%_44%_at_50%_50%,rgba(5,6,10,0.72),transparent_72%)]"
      />

      {/* floating mono chips */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="absolute left-[6%] top-[30%] z-10 hidden animate-float lg:block"
      >
        <div className="glass ring-grad rounded-2xl px-4 py-3">
          <div className="flex items-center gap-2 font-mono text-xs text-mute">
            <span className="live-dot" />
            deploy · production
          </div>
          <div className="mt-1 font-mono text-[0.7rem] text-faint">
            build 4.2s · 0 errors
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute right-[7%] top-[38%] z-10 hidden animate-float [animation-delay:-3s] lg:block"
      >
        <div className="glass ring-grad rounded-2xl px-4 py-3">
          <div className="font-mono text-[0.7rem] text-faint">latency</div>
          <div className="mt-0.5 font-mono text-sm text-cyan-bright">
            142<span className="text-faint">ms</span> p99
          </div>
        </div>
      </motion.div>

      {/* content */}
      <div className="shell relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="chip mb-8"
        >
          <span className="live-dot" />
          <span>disponível para novos projetos · 2026</span>
        </motion.div>

        <h1 className="max-w-5xl font-display text-[2.6rem] font-semibold leading-[1.02] tracking-tight text-balance sm:text-6xl md:text-7xl lg:text-[5.4rem]">
          <span className="block text-ink">
            <SplitText
              text="Software sob medida"
              by="word"
              trigger="mount"
              stagger={0.08}
              delay={0.4}
            />
          </span>
          <span className="mt-1 block overflow-hidden pb-2">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.05 }}
              className="block text-gradient"
            >
              que parece vir do futuro.
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.9 }}
          className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-mute sm:text-lg"
        >
          Dashboards, ERP, CRM, automações e integrações desenhados sob medida
          para empresas que se recusam a operar no genérico. Da arquitetura ao
          deploy — por{" "}
          <span className="font-mono text-cyan">|SZF systems</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.9 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button href="#contato" size="lg" arrow magnetic>
            Iniciar meu projeto
          </Button>
          <Button href="#projetos" size="lg" variant="secondary">
            Ver sistemas
          </Button>
        </motion.div>

        {/* stats */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 1 }}
          className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line/40 sm:grid-cols-4"
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="bg-void/60 px-4 py-5 backdrop-blur-sm"
            >
              <div className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 font-mono text-[0.65rem] uppercase tracking-wider text-faint">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#projetos"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-faint"
        aria-label="Rolar para projetos"
      >
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.25em]">
          scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>

      {/* bottom fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-b from-transparent to-void" />
    </section>
  );
}
