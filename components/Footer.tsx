import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#0f172a", color: "#94a3b8", marginTop: "4rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "3rem 1.25rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", marginBottom: "2.5rem" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: "0.75rem" }}>
              <span style={{ background: "#1d4ed8", color: "#fff", fontSize: "0.65rem", fontWeight: 800, padding: "2px 6px", borderRadius: 4, textTransform: "uppercase" }}>IA</span>
              <span style={{ fontWeight: 900, fontSize: "1.1rem", color: "#fff" }}>notícia<span style={{ color: "#60a5fa" }}>deia</span></span>
            </div>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.7 }}>
              Notícias e tendências de Inteligência Artificial com olhar prático para o mercado brasileiro.
            </p>
          </div>

          <div>
            <div style={{ fontWeight: 700, color: "#e2e8f0", marginBottom: "0.75rem", fontSize: "0.9rem" }}>Categorias</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
              {["Lançamentos", "Ferramentas", "IA no Brasil", "Negócios", "Tutoriais"].map((c) => (
                <Link key={c} href="/noticias" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "0.875rem" }}>{c}</Link>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 700, color: "#e2e8f0", marginBottom: "0.75rem", fontSize: "0.9rem" }}>Nossos Produtos</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
              <a href="https://tamowork.com" target="_blank" rel="noopener noreferrer" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "0.875rem" }}>TamoWork</a>
              <a href="https://buscafornecedor.app" target="_blank" rel="noopener noreferrer" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "0.875rem" }}>BuscaFornecedor</a>
              <Link href="/produtos" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "0.875rem" }}>Ver todos →</Link>
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 700, color: "#e2e8f0", marginBottom: "0.75rem", fontSize: "0.9rem" }}>Portal</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
              <Link href="/sobre" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "0.875rem" }}>Sobre</Link>
              <a href="/feed.xml" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "0.875rem" }}>Feed RSS</a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #1e293b", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem", fontSize: "0.85rem" }}>
          <span>© {new Date().getFullYear()} notíciadeia.com — Todos os direitos reservados</span>
          <a href="/feed.xml" style={{ color: "#f97316", textDecoration: "none", fontWeight: 600, display: "flex", alignItems: "center", gap: 4 }}>
            <span>📡</span> Feed RSS
          </a>
        </div>
      </div>
    </footer>
  );
}
