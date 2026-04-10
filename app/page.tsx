import Link from "next/link";
import NewsCard from "@/components/NewsCard";
import NewsletterForm from "@/components/NewsletterForm";
import CategoryBadge from "@/components/CategoryBadge";
import { getAllArticles } from "@/lib/mdx";

const ferramentasDestaque = [
  { nome: "ChatGPT", desc: "Assistente de IA mais popular do mundo", preco: "Grátis / Pago", emoji: "💬", url: "https://chat.openai.com", brFriendly: true },
  { nome: "Claude", desc: "IA da Anthropic, excelente para textos longos", preco: "Grátis / Pago", emoji: "🤖", url: "https://claude.ai", brFriendly: true },
  { nome: "Midjourney", desc: "Geração de imagens com qualidade fotográfica", preco: "Pago", emoji: "🎨", url: "https://midjourney.com", brFriendly: false },
  { nome: "Runway", desc: "Geração e edição de vídeos com IA", preco: "Freemium", emoji: "🎬", url: "https://runwayml.com", brFriendly: true },
];

export default function Home() {
  const articles = getAllArticles();
  const destaque = articles[0];
  const resto = articles.slice(1, 10);

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.25rem" }}>
      {/* Hero destaque */}
      <section style={{ padding: "2.5rem 0 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", alignItems: "start" }}>
          {/* Notícia principal */}
          {destaque ? (
            <Link href={`/noticias/${destaque.slug}`} style={{ textDecoration: "none" }}>
              <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, overflow: "hidden" }}>
                <div style={{ height: 260, background: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #3b82f6 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                  <span style={{ fontSize: "4rem" }}>🤖</span>
                  <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.8rem", fontWeight: 600 }}>DESTAQUE</span>
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <CategoryBadge category={destaque.category} />
                  <h2 style={{ margin: "0.75rem 0 0.5rem", fontSize: "1.4rem", fontWeight: 900, color: "#0f172a", lineHeight: 1.25 }}>{destaque.title}</h2>
                  <p style={{ margin: "0 0 1rem", color: "#475569", lineHeight: 1.6 }}>{destaque.description}</p>
                  <span style={{ color: "#1d4ed8", fontWeight: 700, fontSize: "0.9rem" }}>Ler artigo completo →</span>
                </div>
              </div>
            </Link>
          ) : (
            <div style={{ background: "#f8fafc", borderRadius: 16, padding: "3rem", textAlign: "center", color: "#94a3b8" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📰</div>
              <div>Artigos em breve...</div>
            </div>
          )}

          {/* Grid lateral: 4 notícias */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {resto.slice(0, 4).map((a) => (
              <NewsCard key={a.slug} {...a} />
            ))}
          </div>
        </div>
      </section>

      {/* Últimas notícias */}
      {resto.length > 4 && (
        <section style={{ padding: "1rem 0 2rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
            <h2 style={{ margin: 0, fontSize: "1.3rem", fontWeight: 800, color: "#0f172a" }}>Últimas Notícias</h2>
            <Link href="/noticias" style={{ color: "#1d4ed8", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>Ver todas →</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.1rem" }}>
            {resto.slice(4).map((a) => (
              <NewsCard key={a.slug} {...a} />
            ))}
          </div>
        </section>
      )}

      {/* Banner produto */}
      <div style={{ background: "linear-gradient(135deg, #4f46e5, #7c3aed)", borderRadius: 14, padding: "1.75rem", color: "#fff", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", margin: "1rem 0 2rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <span style={{ fontSize: "2.5rem" }}>🤖</span>
          <div>
            <div style={{ fontWeight: 800, fontSize: "1.1rem", marginBottom: 4 }}>Automatize seu Instagram com IA</div>
            <div style={{ opacity: 0.9, fontSize: "0.9rem" }}>O TamoWork responde comentários e DMs automaticamente — sem precisar de API.</div>
          </div>
        </div>
        <a href="https://tamowork.com" target="_blank" rel="noopener noreferrer" style={{ background: "rgba(255,255,255,0.95)", color: "#0f172a", padding: "0.65rem 1.25rem", borderRadius: 8, textDecoration: "none", fontWeight: 800, fontSize: "0.9rem", whiteSpace: "nowrap" }}>
          Baixar grátis →
        </a>
      </div>

      {/* Ferramentas em destaque */}
      <section style={{ padding: "1rem 0 2rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
          <h2 style={{ margin: 0, fontSize: "1.3rem", fontWeight: 800, color: "#0f172a" }}>🔧 Ferramentas de IA em Destaque</h2>
          <Link href="/ferramentas" style={{ color: "#1d4ed8", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>Ver todas →</Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1rem" }}>
          {ferramentasDestaque.map((f) => (
            <a key={f.nome} href={f.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: "1.25rem", height: "100%" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{f.emoji}</div>
                <div style={{ fontWeight: 800, color: "#0f172a", marginBottom: 4 }}>{f.nome}</div>
                <div style={{ color: "#475569", fontSize: "0.875rem", marginBottom: "0.75rem", lineHeight: 1.5 }}>{f.desc}</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ background: "#f1f5f9", color: "#475569", fontSize: "0.75rem", fontWeight: 600, padding: "0.2rem 0.5rem", borderRadius: 6 }}>{f.preco}</span>
                  {f.brFriendly && <span style={{ color: "#16a34a", fontSize: "0.75rem", fontWeight: 700 }}>🇧🇷 BR-friendly</span>}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterForm />
    </div>
  );
}
