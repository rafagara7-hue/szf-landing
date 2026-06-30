"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Vitrine", href: "#vitrine" },
  { label: "Projetos", href: "#projetos" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Processo", href: "#processo" },
  { label: "Planos", href: "#planos" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="fixed inset-x-0 top-0 z-[9990] flex justify-center px-4 pt-4"
      >
        <nav
          className={cn(
            "flex w-full max-w-5xl items-center justify-between rounded-full px-3 py-2.5 transition-all duration-500",
            scrolled
              ? "glass shadow-[0_10px_40px_-12px_rgba(0,0,0,0.7)]"
              : "bg-transparent",
          )}
        >
          <Logo className="pl-2" />

          <div className="hidden items-center gap-1 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative rounded-full px-4 py-2 text-sm text-mute transition-colors hover:text-ink"
              >
                {l.label}
                <span className="absolute inset-x-4 bottom-1.5 h-px scale-x-0 bg-gradient-to-r from-iris to-cyan transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              href="#contato"
              size="sm"
              className="hidden sm:inline-flex"
              arrow
            >
              Iniciar projeto
            </Button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-full text-ink md:hidden"
              aria-label="Abrir menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9995] bg-void/90 backdrop-blur-xl md:hidden"
          >
            <div className="flex items-center justify-between px-6 pt-7">
              <Logo />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full text-ink"
                aria-label="Fechar menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-10 flex flex-col gap-1 px-6">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i + 0.1 }}
                  className="border-b border-line py-5 font-display text-3xl font-medium tracking-tight"
                >
                  {l.label}
                </motion.a>
              ))}
              <div className="mt-8">
                <Button href="#contato" size="lg" arrow onClick={() => setOpen(false)}>
                  Iniciar projeto
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
