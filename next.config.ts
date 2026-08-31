import type { NextConfig } from "next";

// GitHub Pages project site is served under /2026-portfolio/.
// Apply basePath only for production builds so `next dev` stays at "/".
const isProd = process.env.NODE_ENV === "production";
const repo = "2026-portfolio";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // Do not auto-generate AGENTS.md / CLAUDE.md at the repo root.
  agentRules: false,
  ...(isProd
    ? { basePath: `/${repo}`, assetPrefix: `/${repo}/` }
    : {}),
};

export default nextConfig;
