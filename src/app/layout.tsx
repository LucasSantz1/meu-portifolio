import type { Metadata, Viewport } from "next";
import { Archivo, Bangers, JetBrains_Mono } from "next/font/google";
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

export const viewport: Viewport = { themeColor: "#12307A" };

// Bangers: letreiros e títulos. Archivo: texto. JetBrains Mono: só onde é código de verdade.
const hq = Bangers({ weight: "400", subsets: ["latin"], variable: "--f-hq" });
const texto = Archivo({ weight: ["400", "500", "700", "800"], subsets: ["latin"], variable: "--f-texto" });
const codigo = JetBrains_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--f-codigo" });

// Roda antes da primeira pintura: aplica o tema salvo e pula a abertura se ela já passou nesta sessão.
const scriptInicial = `try{var t=localStorage.getItem('tema');if(t==='claro'||t==='escuro')document.documentElement.dataset.theme=t;if(sessionStorage.getItem('intro-vista'))document.documentElement.dataset.intro='vista'}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" data-theme="padrao" className={`${hq.variable} ${texto.variable} ${codigo.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: scriptInicial }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
