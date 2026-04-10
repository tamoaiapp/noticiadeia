import type { Metadata } from "next";
import NewsCard from "@/components/NewsCard";
import { getAllArticles } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Todas as Notícias de IA",
  description: "Acompanhe as últimas notícias sobre Inteligência Artificial — lançamentos, ferramentas, IA no Brasil e muito mais.",
};

const categorias = ["Todos", "Lançamentos", "Ferramentas", "IA no Brasil", "Negócios", "Tutoriais", "Comparativo"];

export default function NoticiasPage() {
  const articles = getAllArticles();

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2.5rem 1.25rem" }}>
      <div style={{ marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 900, margin: "0 0 0.5rem", color: "#0f172a" }}>Notícias de IA</h1>
        <p style={{ color: "#475569", margin: 0 }}>O que está acontecendo no mundo da Inteligência Artificial — com olhar para o Brasil.</p>
      </div>

      {/* Filtros */}
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
        {categorias.map((c, i) => (
          <span key={c} style={{
            background: i === 0 ? "#1d4ed8" : "#f1f5f9",
            color: i === 0 ? "#fff" : "#475569",
            padding: "0.35rem 0.85rem",
            borderRadius: 20,
            fontSize: "0.85rem",
            fontWeight: 600,
            cursor: "pointer",
          }}>
            {c} {i === 0 && `(${articles.length})`}
          </span>
        ))}
      </div>

      {articles.length === 0 ? (
        <div style={{ textAlign: "center", padding: "5rem 0", color: "#94a3b8" }}>
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📰</div>
          <div>Artigos em breve...</div>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
          {articles.map((a) => (
            <NewsCard key={a.slug} {...a} />
          ))}
        </div>
      )}
    </div>
  );
}
