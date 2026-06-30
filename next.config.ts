import type { NextConfig } from "next";

/**
 * Quando publicado no GitHub Pages (o workflow define GITHUB_PAGES=true), o app
 * é gerado como export estático servido a partir do subcaminho /szf-landing.
 * Sem essa variável, o comportamento de dev/build local fica inalterado.
 *
 * NEXT_PUBLIC_BASE_PATH é exposto ao cliente para prefixar assets fora do
 * pipeline do Next (ex.: <img src="/showcase/..."> na vitrine).
 */
const isPages = process.env.GITHUB_PAGES === "true";
const repo = "szf-landing";
const basePath = isPages ? `/${repo}` : "";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  ...(isPages
    ? { output: "export", basePath, trailingSlash: true }
    : {}),
};

export default nextConfig;
