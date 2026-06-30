import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { CustomCursor } from "@/components/fx/CustomCursor";
import { ScrollProgress } from "@/components/fx/ScrollProgress";
import { WhatsappButton } from "@/components/fx/WhatsappButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://szf.systems"),
  title: "SZF systems — Sistemas sob medida que parecem do futuro",
  description:
    "Desenvolvimento de sistemas personalizados de alto nível: dashboards, CRM, ERP, agenda, financeiro, automações e integrações. Engenharia de precisão para empresas que não aceitam o genérico.",
  keywords: [
    "desenvolvimento de sistemas",
    "software sob medida",
    "ERP personalizado",
    "CRM personalizado",
    "automação",
    "dashboard",
    "SZF systems",
  ],
  openGraph: {
    title: "SZF systems — Sistemas sob medida que parecem do futuro",
    description:
      "Engenharia de software de precisão. Dashboards, ERP, CRM, automações e integrações sob medida.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-void text-ink selection:text-white">
        <div className="grain" aria-hidden />
        <ScrollProgress />
        <CustomCursor />
        <SmoothScroll>
          <MotionProvider>{children}</MotionProvider>
        </SmoothScroll>
        <WhatsappButton />
      </body>
    </html>
  );
}
