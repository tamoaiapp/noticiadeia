import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nossos Produtos",
  description: "Ferramentas de IA feitas no Brasil para empreendedores brasileiros — TamoWork, BuscaFornecedor e mais.",
};

const produtos = [
  {
    nome: "TamoWork",
    tagline: "IA que responde por você no Instagram e WhatsApp",
    desc: "App Windows que automatiza respostas de comentários, DMs do Instagram e mensagens do WhatsApp usando IA local. Sem mensalidade de API, sem precisar deixar o PC ligado 24h.",
    features: ["Responde comentários automaticamente", "Atende DMs no Instagram", "WhatsApp Business integrado", "IA local — sem custo por mensagem", "Windows, grátis para baixar"],
    cta: "Baixar grátis",
    url: "https://tamowork.com",
    emoji: "🤖",
    cor: "linear-gradient(135deg, #4f46e5, #7c3aed)",
    tag: "Grátis",
  },
  {
    nome: "BuscaFornecedor.app",
    tagline: "Catálogo de atacadistas verificados por segmento",
    desc: "Plataforma que conecta revendedores, MEIs e lojistas com atacadistas verificados de todo o Brasil. Filtre por categoria, estado e pedido mínimo.",
    features: ["Catálogo com atacadistas verificados", "Filtro por categoria e estado", "Informações de contato e pedido mínimo", "Gratuito para consultar"],
    cta: "Acessar grátis",
    url: "https://buscafornecedor.app",
    emoji: "🏭",
    cor: "linear-gradient(135deg, #0369a1, #0ea5e9)",
    tag: "Grátis",
  },
  {
    nome: "TamoWork Foto IA",
    tagline: "Fotos profissionais de produto com IA",
    desc: "Transforme fotos amadoras de produto em imagens profissionais usando ComfyUI + Flux. Ideal para lojistas, revendedores e pequenas marcas.",
    features: ["Remove fundo automaticamente", "Gera cenário profissional", "Iluminação de estúdio com IA", "Pronto para marketplaces", "Plano mensal acessível"],
    cta: "Experimentar",
    url: "https://tamowork.com",
    emoji: "📸",
    cor: "linear-gradient(135deg, #9333ea, #ec4899)",
    tag: "Pago",
  },
];

export default function ProdutosPage() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "3rem 1.25rem" }}>
      <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
        <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1d4ed8", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>
          Feito no Brasil, para o Brasil
        </div>
        <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 900, margin: "0 0 1rem", color: "#0f172a" }}>
          Ferramentas de IA para Empreendedores
        </h1>
        <p style={{ color: "#475569", fontSize: "1.1rem", maxWidth: 600, margin: "0 auto" }}>
          Desenvolvemos produtos práticos de IA pensados para a realidade do mercado brasileiro — acessíveis, sem burocracia.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {produtos.map((p, i) => (
          <div key={p.nome} style={{
            display: "grid",
            gridTemplateColumns: i % 2 === 0 ? "1fr 1.5fr" : "1.5fr 1fr",
            gap: "2.5rem",
            alignItems: "center",
            background: "#fff",
            border: "1px solid #e2e8f0",
            borderRadius: 18,
            overflow: "hidden",
          }}>
            {/* Visual */}
            {i % 2 === 0 && (
              <div style={{ background: p.cor, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "3rem", minHeight: 240, gap: "0.5rem" }}>
                <span style={{ fontSize: "4rem" }}>{p.emoji}</span>
                <span style={{ background: "rgba(255,255,255,0.2)", color: "#fff", fontSize: "0.75rem", fontWeight: 700, padding: "0.25rem 0.75rem", borderRadius: 20 }}>{p.tag}</span>
              </div>
            )}

            {/* Conteúdo */}
            <div style={{ padding: "2rem" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 900, margin: "0 0 0.25rem", color: "#0f172a" }}>{p.nome}</h2>
              <p style={{ color: "#1d4ed8", fontWeight: 600, margin: "0 0 1rem", fontSize: "1rem" }}>{p.tagline}</p>
              <p style={{ color: "#475569", margin: "0 0 1.25rem", lineHeight: 1.7 }}>{p.desc}</p>
              <ul style={{ margin: "0 0 1.5rem", paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {p.features.map((f) => (
                  <li key={f} style={{ color: "#334155", fontSize: "0.9rem" }}>{f}</li>
                ))}
              </ul>
              <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ background: "#1d4ed8", color: "#fff", padding: "0.75rem 1.5rem", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: "0.95rem", display: "inline-block" }}>
                {p.cta} →
              </a>
            </div>

            {/* Visual (lado direito em índices ímpares) */}
            {i % 2 !== 0 && (
              <div style={{ background: p.cor, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "3rem", minHeight: 240, gap: "0.5rem" }}>
                <span style={{ fontSize: "4rem" }}>{p.emoji}</span>
                <span style={{ background: "rgba(255,255,255,0.2)", color: "#fff", fontSize: "0.75rem", fontWeight: 700, padding: "0.25rem 0.75rem", borderRadius: 20 }}>{p.tag}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
