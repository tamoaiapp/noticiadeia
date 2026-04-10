import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Notícia de IA — Inteligência Artificial para o mercado brasileiro",
    template: "%s | notíciadeia.com",
  },
  description:
    "O melhor portal de notícias sobre Inteligência Artificial em PT-BR. Lançamentos, ferramentas, tendências e o que a IA significa para o mercado brasileiro.",
  keywords: "inteligência artificial, IA, ChatGPT, notícias IA, ferramentas IA, IA brasil",
  metadataBase: new URL("https://noticiadeia.com"),
  openGraph: {
    siteName: "notíciadeia.com",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#ffffff" }}>
        <Header />
        <main style={{ flexGrow: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
