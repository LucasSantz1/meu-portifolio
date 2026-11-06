import type { NextConfig } from "next";

// Exporta o site como arquivos estáticos (pasta out/), pronto pra Vercel ou qualquer hospedagem.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
