import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Anton, Permanent_Marker } from "next/font/google";
import { perfil } from "@/conteudo/perfil";
import "./globals.css";

export const metadata: Metadata = {
  title: `${perfil.nome} · ${perfil.cargo}`,
  description: perfil.chamada,
  openGraph: {
    title: `${perfil.nome} · ${perfil.cargo}`,
    description: perfil.chamada,
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eeeff0" },
    { media: "(prefers-color-scheme: dark)", color: "#0e0e12" },
  ],
};

// Anton: títulos de capa de gibi. Permanent Marker: as caixas de legenda, com cara de letreiro à mão.
const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton" });
const marker = Permanent_Marker({ weight: "400", subsets: ["latin"], variable: "--font-marker" });

// Roda antes da página aparecer: aplica o tema salvo, pra não piscar claro antes do escuro.
const scriptTema = `try{var t=localStorage.getItem('tema');if(t==='claro'||t==='escuro')document.documentElement.dataset.tema=t}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${GeistSans.variable} ${GeistMono.variable} ${anton.variable} ${marker.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: scriptTema }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
