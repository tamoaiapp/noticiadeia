"use client";

export default function NewsletterForm({ variant = "default" }: { variant?: "default" | "compact" }) {
  if (variant === "compact") {
    return (
      <form onSubmit={e => e.preventDefault()} style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <input type="email" placeholder="seu@email.com" style={{ flex: 1, minWidth: 180, padding: "0.6rem 0.9rem", border: "1px solid #e2e8f0", borderRadius: 7, fontSize: "0.9rem", outline: "none" }} />
        <button type="submit" style={{ background: "#1d4ed8", color: "#fff", padding: "0.6rem 1.1rem", border: "none", borderRadius: 7, fontWeight: 700, fontSize: "0.9rem", cursor: "pointer", whiteSpace: "nowrap" }}>
          Assinar
        </button>
      </form>
    );
  }

  return (
    <section style={{ background: "#0f172a", borderRadius: 16, padding: "3rem 2rem", textAlign: "center", color: "#fff", margin: "3rem 0" }}>
      <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>📬</div>
      <h2 style={{ fontSize: "1.5rem", fontWeight: 800, margin: "0 0 0.5rem" }}>Receba as melhores notícias de IA toda semana</h2>
      <p style={{ color: "#94a3b8", margin: "0 0 1.75rem", fontSize: "1rem" }}>
        Curadoria semanal com o que importa em IA para o mercado brasileiro — sem spam.
      </p>
      <form onSubmit={e => e.preventDefault()} style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap", maxWidth: 480, margin: "0 auto" }}>
        <input type="email" placeholder="seu@email.com" style={{ flex: 1, minWidth: 200, padding: "0.8rem 1rem", border: "1px solid #334155", borderRadius: 8, fontSize: "1rem", outline: "none", background: "#1e293b", color: "#fff" }} />
        <button type="submit" style={{ background: "#1d4ed8", color: "#fff", padding: "0.8rem 1.5rem", border: "none", borderRadius: 8, fontWeight: 700, fontSize: "1rem", cursor: "pointer" }}>
          Quero receber
        </button>
      </form>
    </section>
  );
}
