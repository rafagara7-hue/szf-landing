/* ------------------------------------------------------------------ *
 * Contato central — troque pelos dados reais antes de publicar.
 * ------------------------------------------------------------------ */

// Número de WhatsApp no formato internacional (DDI 55 + DDD + número, só dígitos).
export const WHATSAPP_NUMBER = "5516997512712"; // (16) 99751-2712

export const CONTACT_EMAIL = "SZFsystems@gmail.com";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Vim pelo site da SZF systems e quero tirar um projeto do papel.";

/** Link wa.me que abre a conversa no WhatsApp (web ou app) com mensagem pronta.
 *  Sanitiza o número (só dígitos) para não quebrar o link se ele for editado
 *  com espaços, "+", parênteses, etc. */
export function whatsappUrl(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  const number = WHATSAPP_NUMBER.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
