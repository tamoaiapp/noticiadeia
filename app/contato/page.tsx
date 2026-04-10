import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato — Notícia de IA",
  description: "Entre em contato com a equipe do notíciadeia.com.",
};

export default function ContatoPage() {
  return (
    <div style={{ maxWidth: 680, margin: "0 auto", padding: "3rem 1.25rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 900, margin: "0 0 0.5rem", color: "#0f172a" }}>Contato</h1>
      <p style={{ color: "#475569", marginBottom: "2.5rem", lineHeight: 1.7 }}>
        Dúvidas, sugestões de pauta, parcerias ou questões sobre privacidade? Fale com a gente.
      </p>

      <div style={{ display: "grid", gap: "1.25rem", marginBottom: "3rem" }}>
        {[
          { emoji: "✍️", titulo: "Sugestão de pauta", desc: "Tem uma notícia ou ferramenta de IA que merece cobertura? Nos conta." },
          { emoji: "🤝", titulo: "Parcerias e patrocínios", desc: "Quer patrocinar uma edição da newsletter ou um artigo? Entre em contato." },
          { emoji: "🔒", titulo: "Privacidade e dados", desc: "Solicitações relacionadas à LGPD e proteção de dados pessoais." },
          { emoji: "🐛", titulo: "Erro ou problema", desc: "Encontrou um erro no site? Nos avise para corrigirmos." },
        ].map((item) => (
          <div key={item.titulo} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: "1.25rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
            <span style={{ fontSize: "1.5rem" }}>{item.emoji}</span>
            <div>
              <div style={{ fontWeight: 700, color: "#0f172a", marginBottom: "0.25rem" }}>{item.titulo}</div>
              <div style={{ color: "#475569", fontSize: "0.9rem" }}>{item.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ background: "linear-gradient(135deg, #1e3a8a, #1d4ed8)", borderRadius: 14, padding: "2rem", color: "#fff", textAlign: "center" }}>
        <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>💬</div>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 800, margin: "0 0 0.5rem" }}>Fale pelo WhatsApp</h2>
        <p style={{ opacity: 0.9, margin: "0 0 1.5rem", fontSize: "0.95rem" }}>
          A forma mais rápida de falar com a gente.
        </p>
        <a
          href="https://wa.me/5511967245795?text=Olá!%20Vim%20pelo%20notíciadeia.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ background: "#25d366", color: "#fff", padding: "0.75rem 1.75rem", borderRadius: 10, textDecoration: "none", fontWeight: 800, display: "inline-block" }}
        >
          Abrir WhatsApp →
        </a>
      </div>
    </div>
  );
}
