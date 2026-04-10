import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ferramentas de IA",
  description: "Curadoria das melhores ferramentas de Inteligência Artificial por categoria — com indicação de BR-friendly.",
};

const ferramentas = [
  // Escrita
  { nome: "ChatGPT", categoria: "Escrita & Texto", desc: "Assistente de IA mais popular para texto, resumos e conversas.", preco: "Grátis / $20/mês", emoji: "💬", url: "https://chat.openai.com", brFriendly: true },
  { nome: "Claude", categoria: "Escrita & Texto", desc: "IA da Anthropic, excelente para análises longas e redação.", preco: "Grátis / $20/mês", emoji: "🤖", url: "https://claude.ai", brFriendly: true },
  { nome: "Gemini", categoria: "Escrita & Texto", desc: "IA do Google, integrada com Google Workspace.", preco: "Grátis / Pago", emoji: "✨", url: "https://gemini.google.com", brFriendly: true },
  // Imagens
  { nome: "Midjourney", categoria: "Criação de Imagens", desc: "Geração de imagens com qualidade fotográfica excepcional.", preco: "$10–120/mês", emoji: "🎨", url: "https://midjourney.com", brFriendly: false },
  { nome: "DALL-E 3", categoria: "Criação de Imagens", desc: "Geração de imagens da OpenAI, integrada ao ChatGPT.", preco: "Incluso no ChatGPT Plus", emoji: "🖼️", url: "https://openai.com/dall-e-3", brFriendly: true },
  { nome: "Stable Diffusion", categoria: "Criação de Imagens", desc: "Modelo open-source, roda localmente ou via cloud.", preco: "Grátis (local)", emoji: "🌊", url: "https://stability.ai", brFriendly: true },
  // Vídeo
  { nome: "Runway", categoria: "Vídeo", desc: "Geração e edição de vídeos com IA de última geração.", preco: "Freemium / $15/mês", emoji: "🎬", url: "https://runwayml.com", brFriendly: true },
  { nome: "Kling AI", categoria: "Vídeo", desc: "Geração de vídeos realistas, concorrente do Sora.", preco: "Freemium", emoji: "🎥", url: "https://klingai.com", brFriendly: true },
  { nome: "HeyGen", categoria: "Vídeo", desc: "Avatares de vídeo com IA, ideal para marketing.", preco: "$29/mês", emoji: "👤", url: "https://heygen.com", brFriendly: true },
  // Automação
  { nome: "Make (Integromat)", categoria: "Automação", desc: "Automação de fluxos de trabalho com centenas de integrações.", preco: "Grátis / Pago", emoji: "⚙️", url: "https://make.com", brFriendly: true },
  { nome: "n8n", categoria: "Automação", desc: "Alternativa open-source ao Make, self-hosted.", preco: "Grátis (self-hosted)", emoji: "🔄", url: "https://n8n.io", brFriendly: true },
  { nome: "Zapier", categoria: "Automação", desc: "O mais popular para automação sem código.", preco: "Grátis / $20/mês", emoji: "⚡", url: "https://zapier.com", brFriendly: true },
  // Atendimento
  { nome: "TamoWork", categoria: "Atendimento", desc: "Responde DMs e comentários do Instagram e WhatsApp com IA.", preco: "Grátis", emoji: "💼", url: "https://tamowork.com", brFriendly: true },
  { nome: "Tidio", categoria: "Atendimento", desc: "Chat ao vivo com IA para sites, integra com e-commerce.", preco: "Grátis / Pago", emoji: "💬", url: "https://tidio.com", brFriendly: true },
  // Marketing
  { nome: "Copy.ai", categoria: "Marketing", desc: "Geração de copy para anúncios, e-mails e landing pages.", preco: "Grátis / $49/mês", emoji: "✍️", url: "https://copy.ai", brFriendly: true },
  { nome: "Canva AI", categoria: "Marketing", desc: "Design com IA, geração de imagens e edição integrada.", preco: "Grátis / Pago", emoji: "🎯", url: "https://canva.com", brFriendly: true },
];

const categorias = [...new Set(ferramentas.map((f) => f.categoria))];

export default function FerramentasPage() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2.5rem 1.25rem" }}>
      <div style={{ marginBottom: "2.5rem" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 900, margin: "0 0 0.5rem", color: "#0f172a" }}>🔧 Ferramentas de IA</h1>
        <p style={{ color: "#475569", margin: 0, fontSize: "1.05rem" }}>
          Curadoria das melhores ferramentas de IA por categoria — com indicação de quais funcionam bem no Brasil.
        </p>
      </div>

      {categorias.map((cat) => (
        <section key={cat} style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 800, margin: "0 0 1.25rem", color: "#0f172a", paddingBottom: "0.5rem", borderBottom: "2px solid #e2e8f0" }}>
            {cat}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1rem" }}>
            {ferramentas.filter((f) => f.categoria === cat).map((f) => (
              <a key={f.nome} href={f.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: "1.25rem", height: "100%", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span style={{ fontSize: "1.75rem" }}>{f.emoji}</span>
                    <div>
                      <div style={{ fontWeight: 800, color: "#0f172a" }}>{f.nome}</div>
                      <div style={{ fontSize: "0.75rem", color: "#94a3b8" }}>{f.preco}</div>
                    </div>
                  </div>
                  <p style={{ margin: 0, color: "#475569", fontSize: "0.875rem", lineHeight: 1.5, flexGrow: 1 }}>{f.desc}</p>
                  {f.brFriendly && (
                    <span style={{ color: "#16a34a", fontSize: "0.75rem", fontWeight: 700 }}>🇧🇷 BR-friendly</span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
