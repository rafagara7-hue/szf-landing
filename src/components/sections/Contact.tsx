"use client";

import { useRef, useState, type ComponentType } from "react";
import { motion } from "framer-motion";
import { Mail, Clock, Globe, Check } from "lucide-react";
import { Reveal } from "@/components/fx/Reveal";
import { SplitText } from "@/components/fx/SplitText";
import { Select } from "@/components/ui/Select";
import { WhatsappIcon } from "@/components/ui/BrandIcons";
import { cn } from "@/lib/utils";
import { CONTACT_EMAIL, whatsappUrl } from "@/lib/contact";

// Verde escurecido o suficiente para passar no contraste WCAG AA com texto branco.
const WA_GREEN = "#15803d";

type Method = {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
};

const METHODS: Method[] = [
  {
    icon: Mail,
    label: "E-mail",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: WhatsappIcon,
    label: "WhatsApp",
    value: "Chamar agora",
    href: whatsappUrl(),
    external: true,
  },
  { icon: Clock, label: "Resposta", value: "Em até 24h" },
  { icon: Globe, label: "Atendimento", value: "Remoto · Brasil e exterior" },
];

// Planos são flexíveis — em vez de preços fixos, o lead indica o porte do investimento.
const BUDGETS = ["Custo baixo", "Custo médio", "Custo elevado", "Ainda não sei"];

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[0.65rem] uppercase tracking-wider text-faint">
        {label}
      </span>
      {children}
    </label>
  );
}

const inputCls =
  "w-full rounded-xl border border-line bg-void/60 px-4 py-3 text-sm text-ink placeholder:text-faint outline-none transition-colors focus:border-iris/60 focus:bg-void";

export function Contact() {
  const [form, setForm] = useState({
    nome: "",
    numero: "",
    empresa: "",
    budget: BUDGETS[3], // default neutro — o lead escolhe o porte do investimento
    mensagem: "",
  });
  const [waUrl, setWaUrl] = useState<string | null>(null);
  const [emailed, setEmailed] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const set =
    (k: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const buildMessage = () =>
    `Olá! Sou ${form.nome.trim()}.\n` +
    `Número: ${form.numero.trim()}\n` +
    `Empresa: ${form.empresa.trim() || "—"}\n` +
    `Orçamento: ${form.budget}\n\n` +
    `Sobre o projeto: ${form.mensagem.trim() || "—"}`;

  // Ação principal: abre a conversa no WhatsApp com a mensagem pronta.
  // Os campos required (nome, número) já são validados pelo navegador no submit.
  const sendWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();
    const url = whatsappUrl(buildMessage());
    setEmailed(false);
    setWaUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Ação secundária (e-mail). Reaproveita a validação nativa do form via ref.
  const sendEmail = () => {
    if (!formRef.current?.reportValidity()) return;
    const subject = encodeURIComponent(
      `Novo projeto · ${form.nome.trim() || "Contato"}${form.empresa.trim() ? ` (${form.empresa.trim()})` : ""}`,
    );
    const body = encodeURIComponent(
      `Nome: ${form.nome.trim()}\nNúmero: ${form.numero.trim()}\nEmpresa: ${form.empresa.trim() || "—"}\nOrçamento: ${form.budget}\n\nSobre o projeto:\n${form.mensagem.trim() || "—"}`,
    );
    setWaUrl(null);
    setEmailed(true);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contato" className="relative scroll-mt-24 py-28 md:py-36">
      <div className="shell">
        <div className="ring-grad relative overflow-hidden rounded-[2rem] border border-line bg-panel/40 p-6 sm:p-10 md:p-14">
          {/* ambient glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-iris/20 blur-[120px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-cyan/12 blur-[120px]"
          />

          <div className="relative grid gap-12 lg:grid-cols-2">
            {/* left */}
            <div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-iris-bright">09</span>
                <span className="h-px w-8 bg-gradient-to-r from-iris/70 to-transparent" />
                <span className="kicker">Contato</span>
              </div>

              <h2 className="mt-6 max-w-md font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl">
                <span className="block text-ink">Vamos construir</span>
                <span className="block text-gradient">
                  <SplitText text="algo absurdo?" by="word" stagger={0.06} />
                </span>
              </h2>

              <p className="mt-5 max-w-md text-pretty leading-relaxed text-mute">
                Me conte o desafio do seu negócio. Em 24 horas eu volto com uma
                primeira visão de como o sistema pode resolver — sem compromisso.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-3">
                {METHODS.map((m) => {
                  const inner = (
                    <div className="flex h-full flex-col gap-2 rounded-2xl border border-line bg-void/40 p-4 transition-colors hover:border-iris/30 hover:bg-void/70">
                      <m.icon className="h-[18px] w-[18px] text-iris-bright" />
                      <div>
                        <div className="font-mono text-[0.6rem] uppercase tracking-wider text-faint">
                          {m.label}
                        </div>
                        <div className="mt-0.5 text-sm text-ink">{m.value}</div>
                      </div>
                    </div>
                  );
                  return m.href ? (
                    <a
                      key={m.label}
                      href={m.href}
                      target={m.external ? "_blank" : undefined}
                      rel={m.external ? "noopener noreferrer" : undefined}
                      className="block h-full"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={m.label}>{inner}</div>
                  );
                })}
              </div>
            </div>

            {/* form */}
            <Reveal delay={0.1} y={30}>
              <form
                ref={formRef}
                onSubmit={sendWhatsapp}
                className="rounded-2xl border border-line bg-void/40 p-6 backdrop-blur-sm sm:p-7"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Nome">
                    <input
                      required
                      autoComplete="name"
                      value={form.nome}
                      onChange={set("nome")}
                      placeholder="Seu nome"
                      className={inputCls}
                    />
                  </Field>
                  <Field label="Número">
                    <input
                      required
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      minLength={8}
                      title="Informe um telefone válido (com DDD)."
                      value={form.numero}
                      onChange={set("numero")}
                      placeholder="(11) 99999-9999"
                      className={inputCls}
                    />
                  </Field>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <Field label="Empresa">
                    <input
                      autoComplete="organization"
                      value={form.empresa}
                      onChange={set("empresa")}
                      placeholder="Opcional"
                      className={inputCls}
                    />
                  </Field>
                  <div>
                    <span className="mb-2 block font-mono text-[0.65rem] uppercase tracking-wider text-faint">
                      Orçamento
                    </span>
                    <Select
                      value={form.budget}
                      onChange={(v) => setForm((f) => ({ ...f, budget: v }))}
                      options={BUDGETS}
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <Field label="Sobre o projeto · opcional">
                    <textarea
                      value={form.mensagem}
                      onChange={set("mensagem")}
                      rows={4}
                      placeholder="Opcional — conte o que você precisa resolver."
                      className={cn(inputCls, "resize-none")}
                    />
                  </Field>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ backgroundColor: WA_GREEN }}
                  className="shine mt-6 flex w-full items-center justify-center gap-3 rounded-full px-6 py-4 text-base font-semibold text-white shadow-[0_16px_44px_-10px_rgba(37,211,102,0.7)]"
                >
                  <WhatsappIcon className="h-[22px] w-[22px]" />
                  Enviar pelo WhatsApp
                </motion.button>
                <button
                  type="button"
                  onClick={sendEmail}
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-line bg-white/[0.02] px-6 py-3 text-sm text-mute transition-colors hover:bg-white/[0.05] hover:text-ink"
                >
                  <Mail className="h-4 w-4" /> Prefiro enviar por e-mail
                </button>

                {/* status / feedback (aria-live) */}
                <div aria-live="polite" className="mt-3">
                  {waUrl ? (
                    <p
                      role="status"
                      className="flex flex-wrap items-center justify-center gap-1 rounded-xl border border-[#1ea952]/40 bg-[#15803d]/10 px-4 py-3 text-center text-xs text-ink"
                    >
                      <Check className="h-3.5 w-3.5 text-[#25D366]" />
                      Abrimos sua conversa no WhatsApp. Não abriu?{" "}
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-cyan underline underline-offset-2"
                      >
                        Clique aqui
                      </a>
                      .
                    </p>
                  ) : emailed ? (
                    <p
                      role="status"
                      className="rounded-xl border border-iris/30 bg-iris/10 px-4 py-3 text-center text-xs text-ink"
                    >
                      Abrimos seu app de e-mail. Não abriu? Escreva para{" "}
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="font-medium text-iris-bright underline underline-offset-2"
                      >
                        {CONTACT_EMAIL}
                      </a>
                      .
                    </p>
                  ) : (
                    <p className="text-center font-mono text-[0.65rem] text-faint">
                      Resposta garantida em até 24 horas úteis.
                    </p>
                  )}
                </div>

                <p className="mt-3 text-center text-[0.65rem] leading-relaxed text-faint/80">
                  Ao enviar, você concorda em ser contatado pela SZF systems
                  sobre o seu projeto.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
