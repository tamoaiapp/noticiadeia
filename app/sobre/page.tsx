import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre",
  description: "O notíciadeia.com é o portal de referência em PT-BR sobre Inteligência Artificial, com foco no mercado brasileiro.",
};

export default function SobrePage() {
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "3rem 1.25rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 900, margin: "0 0 1.5rem", color: "#0f172a" }}>Sobre o portal</h1>
      <div className="article-body">
        <p>O <strong>notíciadeia.com</strong> é o portal de referência em PT-BR sobre Inteligência Artificial. Cobrimos lançamentos de ferramentas, tendências do setor, cases de uso e o impacto da IA no mercado brasileiro.</p>
        <h2>Nossa missão</h2>
        <p>Trazer a cobertura de IA com olhar prático para quem empreende no Brasil. Não só notícias globais — mas o que elas significam para o pequeno negócio, o profissional de marketing, o desenvolvedor e o empreendedor brasileiro.</p>
        <h2>Tom editorial</h2>
        <p>Jornalístico e acessível. Sem jargão técnico desnecessário, mas sem simplificar demais. Qualquer pessoa curiosa sobre IA deve conseguir ler e entender nossos artigos.</p>
        <h2>Nossos produtos</h2>
        <p>Além do portal, desenvolvemos ferramentas de IA para o mercado brasileiro. <Link href="/produtos">Conheça nossos produtos →</Link></p>
        <h2>Feed RSS</h2>
        <p>Acompanhe o portal via RSS: <a href="/feed.xml">/feed.xml</a></p>
      </div>
    </div>
  );
}
