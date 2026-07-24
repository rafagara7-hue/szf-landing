"use client";

import { useState } from "react";

/**
 * true em dispositivos touch (celular/tablet), onde WebViews (Instagram,
 * WhatsApp) renderizam animações pesadas (blur, split por letra, scroll
 * sintético) com jank. Lido de forma síncrona no primeiro render do cliente;
 * o SSR sempre renderiza o caminho desktop (false), então componentes cujo
 * estilo inicial dependa disto devem usar `suppressHydrationWarning` — o
 * framer-motion reaplica o estado visual correto na montagem.
 */
export function useCoarsePointer(): boolean {
  const [coarse] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches,
  );
  return coarse;
}
