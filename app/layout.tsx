import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "notíciadeia.com — Inteligência Artificial para o mercado brasileiro",
    template: "%s | notíciadeia.com",
  },
  description:
    "O melhor portal de notícias sobre Inteligência Artificial em PT-BR. Lançamentos, ferramentas, tendências e o que a IA significa para o mercado brasileiro.",
  keywords: "inteligência artificial, IA, ChatGPT, notícias IA, ferramentas IA, IA brasil",
  metadataBase: new URL("https://noticiadeia.com"),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    siteName: "notíciadeia.com",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "notíciadeia.com — Inteligência Artificial para o Brasil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "notíciadeia.com",
    description: "Notícias e tendências de IA para o mercado brasileiro.",
    images: ["/og-image.png"],
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
