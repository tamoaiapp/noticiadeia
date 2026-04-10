interface ProductBannerProps {
  context?: "automacao" | "fornecedor" | "whatsapp" | "foto" | "default";
}

const banners = {
  automacao: {
    title: "Automatize seu Instagram com IA",
    desc: "O TamoWork responde comentários e DMs automaticamente — sem precisar de API.",
    cta: "Baixar grátis",
    url: "https://tamowork.com",
    emoji: "🤖",
    color: "linear-gradient(135deg, #4f46e5, #7c3aed)",
  },
  fornecedor: {
    title: "Encontre fornecedores atacado",
    desc: "BuscaFornecedor: catálogo com milhares de atacadistas verificados por categoria.",
    cta: "Acessar grátis",
    url: "https://buscafornecedor.app",
    emoji: "🏭",
    color: "linear-gradient(135deg, #0369a1, #0ea5e9)",
  },
  whatsapp: {
    title: "Atendimento automático no WhatsApp",
    desc: "Responda clientes 24h no WhatsApp com IA — sem mensalidade de API.",
    cta: "Conhecer",
    url: "https://tamowork.com",
    emoji: "💬",
    color: "linear-gradient(135deg, #15803d, #22c55e)",
  },
  foto: {
    title: "Fotos profissionais de produto com IA",
    desc: "Transforme fotos amadoras em imagens profissionais com ComfyUI + Flux.",
    cta: "Experimentar",
    url: "https://tamowork.com",
    emoji: "📸",
    color: "linear-gradient(135deg, #9333ea, #ec4899)",
  },
  default: {
    title: "Ferramentas de IA feitas para o Brasil",
    desc: "Conheça os produtos que criamos para empreendedores brasileiros.",
    cta: "Ver produtos",
    url: "/produtos",
    emoji: "🇧🇷",
    color: "linear-gradient(135deg, #1d4ed8, #3b82f6)",
  },
};

export default function ProductBanner({ context = "default" }: ProductBannerProps) {
  const b = banners[context];
  return (
    <div style={{
      background: b.color,
      borderRadius: 14,
      padding: "1.75rem",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "1rem",
      margin: "2.5rem 0",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <span style={{ fontSize: "2.5rem" }}>{b.emoji}</span>
        <div>
          <div style={{ fontWeight: 800, fontSize: "1.1rem", marginBottom: 4 }}>{b.title}</div>
          <div style={{ opacity: 0.9, fontSize: "0.9rem", maxWidth: 400 }}>{b.desc}</div>
        </div>
      </div>
      <a href={b.url} target={b.url.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{
        background: "rgba(255,255,255,0.95)",
        color: "#0f172a",
        padding: "0.65rem 1.25rem",
        borderRadius: 8,
        textDecoration: "none",
        fontWeight: 800,
        fontSize: "0.9rem",
        whiteSpace: "nowrap",
      }}>
        {b.cta} →
      </a>
    </div>
  );
}
