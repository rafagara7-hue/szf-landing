import type { NextConfig } from "next";

/**
 * Quando publicado no GitHub Pages (o workflow define GITHUB_PAGES=true), o app
 * é gerado como export estático servido a partir do subcaminho /szf-landing.
 * Sem essa variável, o comportamento de dev/build local fica inalterado.
 */
const isPages = process.env.GITHUB_PAGES === "true";
const repo = "szf-landing";

const nextConfig: NextConfig = isPages
  ? {
      output: "export",
      basePath: `/${repo}`,
      trailingSlash: true,
      images: { unoptimized: true },
    }
  : {};

export default nextConfig;
