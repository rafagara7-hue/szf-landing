# |SZF systems — Landing Page

Landing page de portfólio **futurista e cinematográfica** para venda de
desenvolvimento de sistemas sob medida (dashboards, CRM, ERP, agenda,
financeiro, automações e integrações).

Visual dark, tecnológico e premium — referências de Apple, Stripe, Linear,
Vercel e Awwwards. Perfil de estilo **Imersivo**.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (design tokens em `globals.css`)
- **Framer Motion** — reveals, transições, microinterações
- **GSAP** + **Lenis** — scroll suave sincronizado
- **React Three Fiber / three.js** — esfera wireframe 3D no hero
- **Geist Sans/Mono** + **Space Grotesk** (via `next/font`)

## Como rodar

```bash
npm install      # dependências (já instaladas)
npm run dev      # desenvolvimento → http://localhost:3000
npm run build    # build de produção
npm run start    # servir o build
```

## Estrutura

```
src/
├─ app/
│  ├─ layout.tsx       # fontes, metadata, FX globais (cursor, grain, scroll)
│  ├─ page.tsx         # composição das seções
│  └─ globals.css      # design tokens, utilitários, keyframes
├─ components/
│  ├─ providers/       # SmoothScroll (Lenis + GSAP)
│  ├─ fx/              # CustomCursor, Reveal, SplitText, Magnetic,
│  │                   #   SpotlightCard, Marquee, Aurora, HeroCanvas (3D)
│  ├─ ui/              # Button, Logo, SectionHeader, BrandIcons
│  ├─ mockups/         # mockups SVG/CSS dos cards de projeto
│  └─ sections/        # Navbar, Hero, Projects, Benefits, TechStack,
│                      #   Process, Testimonials, Pricing, Faq, Contact, Footer
└─ lib/utils.ts        # helper cn()
```

## Personalização (substitua antes de publicar)

| O quê | Onde |
|---|---|
| **E-mail de contato** (`ola@szf.systems`) | `components/sections/Contact.tsx` → `CONTACT_EMAIL` |
| **Links de redes sociais** (estão como `#`) | `components/sections/Footer.tsx` → `SOCIAL` |
| **WhatsApp / métodos de contato** | `components/sections/Contact.tsx` → `METHODS` |
| **Preços e features dos planos** | `components/sections/Pricing.tsx` → `PLANS` |
| **Depoimentos** (fictícios) | `components/sections/Testimonials.tsx` |
| **Cores / fontes da marca** | `app/globals.css` (`@theme`) |
| **Métricas do hero** | `components/sections/Hero.tsx` → `STATS` |

> O formulário de contato envia via `mailto:` (abre o cliente de e-mail). Para
> capturar leads em um backend, troque o `submit` em `Contact.tsx` por um
> `POST` para sua API ou serviço (ex.: Resend, Formspree).

## Acessibilidade & performance

- Respeita `prefers-reduced-motion` (desliga Lenis e reveals).
- Cursor customizado só em ponteiros finos (desktop).
- Animações com `once: true` e listeners `passive`.
- Build estático (SSG) — pronto para deploy em Vercel.
