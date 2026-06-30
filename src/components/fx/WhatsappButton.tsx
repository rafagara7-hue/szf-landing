"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { WhatsappIcon } from "@/components/ui/BrandIcons";
import { whatsappUrl } from "@/lib/contact";

/**
 * Floating WhatsApp action. Appears after the user scrolls past the hero and
 * opens a wa.me chat (web/app) pre-filled with a message. Works in production
 * for any visitor — it's just a link to wa.me/<number>.
 */
export function WhatsappButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          data-cursor
          initial={{ opacity: 0, scale: 0.6, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 24 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          className="group fixed bottom-6 right-6 z-[9980] flex items-center gap-3"
        >
          {/* expanding label (desktop) */}
          <span className="pointer-events-none hidden translate-x-3 whitespace-nowrap rounded-full border border-line bg-panel/95 px-4 py-2 text-sm font-medium text-ink opacity-0 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] backdrop-blur transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block">
            Fale no WhatsApp
          </span>

          <span className="relative grid h-14 w-14 place-items-center rounded-full bg-[#15803d] shadow-[0_12px_34px_-8px_rgba(37,211,102,0.75)]">
            {/* pulse ring */}
            <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
            <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/25" />
            <WhatsappIcon className="relative h-7 w-7 text-white" />
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
