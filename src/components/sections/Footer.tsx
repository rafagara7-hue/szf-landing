"use client";

import { ArrowUp } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  WhatsappIcon,
} from "@/components/ui/BrandIcons";
import { whatsappUrl } from "@/lib/contact";

const COLUMNS = [
  {
    title: "Sistemas",
    links: [
      { label: "Dashboards & BI", href: "#projetos" },
      { label: "CRM", href: "#projetos" },
      { label: "ERP / Estoque", href: "#projetos" },
      { label: "Automações", href: "#projetos" },
      { label: "Integrações", href: "#projetos" },
    ],
  },
  {
    title: "Navegação",
    links: [
      { label: "Benefícios", href: "#beneficios" },
      { label: "Como trabalho", href: "#processo" },
      { label: "Planos", href: "#planos" },
      { label: "FAQ", href: "#faq" },
    ],
  },
];

const SOCIAL = [
  { icon: GithubIcon, href: "#", label: "GitHub" },
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: WhatsappIcon, href: whatsappUrl(), label: "WhatsApp" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line pt-20">
      <div className="shell">
        <div className="grid gap-12 pb-16 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* brand */}
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-pretty text-sm leading-relaxed text-mute">
              Engenharia de software sob medida. Sistemas que fazem sua operação
              parecer dez anos à frente.
            </p>
            <div className="mt-6 flex gap-2">
              {SOCIAL.map((s) => {
                const external = s.href.startsWith("http");
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="grid h-10 w-10 place-items-center rounded-full border border-line text-mute transition-all duration-300 hover:-translate-y-0.5 hover:border-iris/40 hover:text-ink"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="kicker">{col.title}</h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-mute transition-colors hover:text-ink"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-line py-6 sm:flex-row">
          <p className="font-mono text-[0.7rem] text-faint">
            © 2026 SZF systems · feito com precisão.
          </p>
          <a
            href="#top"
            className="group flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-wider text-faint transition-colors hover:text-ink"
          >
            voltar ao topo
            <span className="grid h-7 w-7 place-items-center rounded-full border border-line transition-transform duration-300 group-hover:-translate-y-0.5">
              <ArrowUp className="h-3.5 w-3.5" />
            </span>
          </a>
        </div>
      </div>

      {/* giant watermark wordmark */}
      <div
        aria-hidden
        className="pointer-events-none select-none px-4 pb-2 text-center"
      >
        <span className="block bg-gradient-to-b from-white/[0.06] to-white/[0.005] bg-clip-text font-display text-[20vw] font-bold leading-[0.8] tracking-tighter text-transparent">
          SZF
        </span>
      </div>
    </footer>
  );
}
