"use client";

/* ------------------------------------------------------------------ *
 * Lightweight, premium UI mockups rendered in pure SVG/CSS.
 * Each fills its parent frame (h-full) and is purely decorative.
 * ------------------------------------------------------------------ */

function Spark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 20" className={className} fill="none" preserveAspectRatio="none">
      <path
        d="M0 16 L10 12 L20 14 L30 7 L40 9 L50 3 L60 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ============================ DASHBOARD ============================ */
export function DashboardMockup() {
  const kpis = [
    { label: "MRR", value: "R$ 248k", delta: "+12,4%", up: true },
    { label: "Usuários ativos", value: "9.842", delta: "+4,1%", up: true },
    { label: "Churn", value: "1,8%", delta: "-0,3%", up: true },
  ];
  return (
    <div className="flex h-full flex-col gap-3 p-4">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[0.62rem] uppercase tracking-wider text-faint">
          Visão geral · tempo real
        </span>
        <span className="chip !px-2 !py-1 !text-[0.55rem]">
          <span className="live-dot !h-1.5 !w-1.5" /> live
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {kpis.map((k) => (
          <div
            key={k.label}
            className="rounded-lg border border-line bg-white/[0.02] p-2.5"
          >
            <div className="font-mono text-[0.5rem] uppercase tracking-wide text-faint">
              {k.label}
            </div>
            <div className="mt-1 font-display text-[0.95rem] font-semibold text-ink">
              {k.value}
            </div>
            <div className="mt-0.5 text-[0.55rem] font-medium text-emerald-400">
              ▲ {k.delta}
            </div>
          </div>
        ))}
      </div>

      <div className="relative flex-1 overflow-hidden rounded-xl border border-line bg-gradient-to-b from-white/[0.03] to-transparent p-3">
        <div className="mb-2 flex items-center justify-between">
          <span className="font-mono text-[0.55rem] text-faint">
            Receita · 30 dias
          </span>
          <span className="font-display text-xs font-semibold text-cyan-bright">
            R$ 1,42M
          </span>
        </div>
        <svg
          viewBox="0 0 300 96"
          className="h-[calc(100%-1.2rem)] w-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="dashArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7c5cff" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#7c5cff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 78 C30 70 38 40 60 44 C84 48 92 22 120 26 C150 30 158 58 186 50 C214 42 222 14 252 18 C276 21 288 30 300 28 L300 96 L0 96 Z"
            fill="url(#dashArea)"
          />
          <path
            d="M0 78 C30 70 38 40 60 44 C84 48 92 22 120 26 C150 30 158 58 186 50 C214 42 222 14 252 18 C276 21 288 30 300 28"
            fill="none"
            stroke="#a78bff"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="252" cy="18" r="3.2" fill="#2de2e6" className="animate-pulse-glow" />
        </svg>
      </div>
    </div>
  );
}

/* ============================== CRM =============================== */
export function CrmMockup() {
  const cols = [
    { name: "Lead", color: "text-faint", deals: ["TechNova", "Grupo Vale"] },
    { name: "Proposta", color: "text-iris-bright", deals: ["Lumen Co.", "Astra"] },
    { name: "Fechado", color: "text-cyan-bright", deals: ["Orbital S/A"] },
  ];
  return (
    <div className="flex h-full flex-col gap-3 p-4">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[0.62rem] uppercase tracking-wider text-faint">
          Pipeline de vendas
        </span>
        <span className="font-display text-xs font-semibold text-ink">
          R$ 892k <span className="text-faint">/ mês</span>
        </span>
      </div>
      <div className="grid flex-1 grid-cols-3 gap-2">
        {cols.map((c) => (
          <div
            key={c.name}
            className="flex flex-col gap-2 rounded-lg border border-line bg-white/[0.02] p-2"
          >
            <div
              className={`flex items-center justify-between font-mono text-[0.55rem] uppercase ${c.color}`}
            >
              {c.name}
              <span className="rounded bg-white/5 px-1 text-faint">
                {c.deals.length}
              </span>
            </div>
            {c.deals.map((d) => (
              <div
                key={d}
                className="rounded-md border border-line bg-void/60 p-2"
              >
                <div className="text-[0.62rem] font-medium text-ink">{d}</div>
                <div className="mt-1.5 flex items-center gap-1.5">
                  <span className="h-3.5 w-3.5 rounded-full bg-gradient-to-br from-iris to-cyan" />
                  <div className="h-1 flex-1 rounded-full bg-white/10">
                    <div
                      className="h-1 rounded-full bg-gradient-to-r from-iris to-cyan"
                      style={{ width: `${40 + d.length * 4}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================== ERP ============================== */
export function ErpMockup() {
  const rows = [
    { sku: "SKU-4192", name: "Módulo controlador", qty: 1240, st: "ok" },
    { sku: "SKU-7731", name: "Sensor óptico v3", qty: 84, st: "low" },
    { sku: "SKU-1180", name: "Placa lógica X2", qty: 612, st: "ok" },
    { sku: "SKU-9043", name: "Chassi alumínio", qty: 12, st: "crit" },
  ];
  const stColor: Record<string, string> = {
    ok: "text-emerald-400 bg-emerald-400/10",
    low: "text-amber-400 bg-amber-400/10",
    crit: "text-rose-400 bg-rose-400/10",
  };
  const stLabel: Record<string, string> = { ok: "em estoque", low: "baixo", crit: "crítico" };
  return (
    <div className="flex h-full flex-col gap-3 p-4">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[0.62rem] uppercase tracking-wider text-faint">
          Estoque · inventário
        </span>
        <span className="chip !px-2 !py-1 !text-[0.55rem]">4 SKUs</span>
      </div>
      <div className="flex-1 overflow-hidden rounded-xl border border-line">
        <div className="grid grid-cols-[1fr_auto_auto] gap-2 border-b border-line bg-white/[0.03] px-3 py-2 font-mono text-[0.5rem] uppercase tracking-wide text-faint">
          <span>Item</span>
          <span className="text-right">Qtd</span>
          <span className="text-right">Status</span>
        </div>
        {rows.map((r, i) => (
          <div
            key={r.sku}
            className={`grid grid-cols-[1fr_auto_auto] items-center gap-2 px-3 py-2.5 ${
              i % 2 ? "bg-white/[0.012]" : ""
            }`}
          >
            <div className="min-w-0">
              <div className="truncate text-[0.62rem] font-medium text-ink">
                {r.name}
              </div>
              <div className="font-mono text-[0.5rem] text-faint">{r.sku}</div>
            </div>
            <div className="text-right font-mono text-[0.62rem] text-mute">
              {r.qty}
            </div>
            <div className="text-right">
              <span
                className={`rounded px-1.5 py-0.5 text-[0.5rem] font-medium ${stColor[r.st]}`}
              >
                {stLabel[r.st]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================= AGENDA ============================= */
export function AgendaMockup() {
  const days = ["S", "T", "Q", "Q", "S"];
  const events = [
    { col: 0, top: 14, h: 22, c: "from-iris/80 to-iris/40", label: "Daily" },
    { col: 1, top: 40, h: 30, c: "from-cyan/80 to-cyan/30", label: "Deploy" },
    { col: 2, top: 20, h: 26, c: "from-iris/70 to-cyan/40", label: "Review" },
    { col: 3, top: 52, h: 24, c: "from-cyan/70 to-iris/40", label: "Call" },
    { col: 4, top: 30, h: 34, c: "from-iris/80 to-iris/30", label: "Sprint" },
  ];
  return (
    <div className="flex h-full flex-col gap-3 p-4">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[0.62rem] uppercase tracking-wider text-faint">
          Agenda · semana 24
        </span>
        <span className="font-display text-xs font-semibold text-ink">Junho</span>
      </div>
      <div className="grid grid-cols-5 gap-1.5 text-center">
        {days.map((d, i) => (
          <div
            key={i}
            className="font-mono text-[0.55rem] uppercase text-faint"
          >
            {d}
            <span className="ml-1 text-ink/70">{10 + i}</span>
          </div>
        ))}
      </div>
      <div className="relative grid flex-1 grid-cols-5 gap-1.5">
        {days.map((_, i) => (
          <div
            key={i}
            className="relative rounded-md border border-line bg-white/[0.015]"
          >
            {events
              .filter((e) => e.col === i)
              .map((e, j) => (
                <div
                  key={j}
                  className={`absolute inset-x-1 rounded bg-gradient-to-b ${e.c} px-1 py-0.5`}
                  style={{ top: `${e.top}%`, height: `${e.h}%` }}
                >
                  <span className="text-[0.5rem] font-medium text-white/90">
                    {e.label}
                  </span>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================== FINANCEIRO =========================== */
export function FinanceiroMockup() {
  const bars = [42, 58, 50, 70, 64, 88, 76];
  const tx = [
    { n: "Stripe · assinaturas", v: "+ R$ 18.420", up: true },
    { n: "Folha de pagamento", v: "− R$ 42.100", up: false },
    { n: "AWS · infra", v: "− R$ 3.280", up: false },
  ];
  return (
    <div className="flex h-full flex-col gap-3 p-4">
      <div className="flex items-end justify-between">
        <div>
          <div className="font-mono text-[0.55rem] uppercase tracking-wide text-faint">
            Saldo consolidado
          </div>
          <div className="font-display text-lg font-semibold text-ink">
            R$ 1.284.920
          </div>
        </div>
        <span className="text-[0.6rem] font-medium text-emerald-400">
          ▲ 8,2% mês
        </span>
      </div>
      <div className="flex h-16 items-end gap-1.5 rounded-xl border border-line bg-white/[0.02] p-2.5">
        {bars.map((b, i) => (
          <div
            key={i}
            className="flex-1 rounded-t bg-gradient-to-t from-iris/30 to-cyan"
            style={{ height: `${b}%` }}
          />
        ))}
      </div>
      <div className="flex flex-1 flex-col justify-center gap-1.5">
        {tx.map((t) => (
          <div
            key={t.n}
            className="flex items-center justify-between rounded-lg border border-line bg-white/[0.015] px-2.5 py-2"
          >
            <span className="flex items-center gap-2 text-[0.62rem] text-mute">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  t.up ? "bg-emerald-400" : "bg-rose-400"
                }`}
              />
              {t.n}
            </span>
            <span
              className={`font-mono text-[0.6rem] ${
                t.up ? "text-emerald-400" : "text-rose-300"
              }`}
            >
              {t.v}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================== AUTOMAÇÃO =========================== */
export function AutomacaoMockup() {
  const nodes = [
    { x: 16, y: 24, label: "Webhook", c: "#7c5cff" },
    { x: 50, y: 14, label: "Filtro", c: "#a78bff" },
    { x: 50, y: 50, label: "Enriquecer", c: "#2de2e6" },
    { x: 84, y: 32, label: "Notificar", c: "#7af6f9" },
  ];
  return (
    <div className="flex h-full flex-col gap-3 p-4">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[0.62rem] uppercase tracking-wider text-faint">
          Fluxo de automação
        </span>
        <span className="chip !px-2 !py-1 !text-[0.55rem]">
          <span className="live-dot !h-1.5 !w-1.5" /> rodando
        </span>
      </div>
      <div className="relative flex-1 overflow-hidden rounded-xl border border-line bg-white/[0.015]">
        <svg className="absolute inset-0 h-full w-full">
          <line x1="22%" y1="30%" x2="50%" y2="18%" stroke="#7c5cff55" strokeWidth="1.5" />
          <line x1="22%" y1="30%" x2="50%" y2="54%" stroke="#2de2e655" strokeWidth="1.5" />
          <line x1="56%" y1="18%" x2="84%" y2="36%" stroke="#a78bff55" strokeWidth="1.5" />
          <line x1="56%" y1="54%" x2="84%" y2="36%" stroke="#7af6f955" strokeWidth="1.5" />
        </svg>
        {nodes.map((n) => (
          <div
            key={n.label}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-md border border-line bg-void/80 px-2 py-1 backdrop-blur"
            style={{ left: `${n.x}%`, top: `${n.y}%` }}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: n.c, boxShadow: `0 0 8px ${n.c}` }}
            />
            <span className="text-[0.55rem] font-medium text-ink">{n.label}</span>
          </div>
        ))}
        <div className="absolute bottom-2 left-2 font-mono text-[0.5rem] text-faint">
          1.284 execuções hoje · 0 falhas
        </div>
      </div>
    </div>
  );
}

/* ========================== INTEGRAÇÕES ========================== */
export function IntegracoesMockup() {
  // Positions pre-computed (cos/sin of fixed angles) so server and client render
  // identical strings — avoids a hydration mismatch from V8 trig differences.
  const ring = [
    { l: "API", x: 100, y: 50 },
    { l: "ERP", x: 75, y: 93.3 },
    { l: "Pay", x: 25, y: 93.3 },
    { l: "Mail", x: 0, y: 50 },
    { l: "BI", x: 25, y: 6.7 },
    { l: "Chat", x: 75, y: 6.7 },
  ];
  return (
    <div className="flex h-full flex-col gap-3 p-4">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[0.62rem] uppercase tracking-wider text-faint">
          Hub de integrações
        </span>
        <span className="font-display text-xs font-semibold text-cyan-bright">
          12 conectores
        </span>
      </div>
      <div className="relative flex-1">
        {/* orbit rings */}
        <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-line" />
        <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-line" />
        {/* center */}
        <div className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-xl bg-gradient-to-br from-iris to-indigo shadow-[0_0_24px_-4px_rgba(124,92,255,0.9)]">
          <span className="font-display text-[0.6rem] font-bold text-white">SZF</span>
        </div>
        {/* nodes on orbit */}
        <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 animate-spin-slow">
          {ring.map((r) => (
            <div
              key={r.l}
              className="absolute flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border border-line bg-void/80 backdrop-blur"
              style={{ left: `${r.x}%`, top: `${r.y}%` }}
            >
              <span className="font-mono text-[0.5rem] text-mute">{r.l}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const MOCKUPS = {
  dashboard: DashboardMockup,
  crm: CrmMockup,
  erp: ErpMockup,
  agenda: AgendaMockup,
  financeiro: FinanceiroMockup,
  automacao: AutomacaoMockup,
  integracoes: IntegracoesMockup,
} as const;

export type MockupKey = keyof typeof MOCKUPS;
