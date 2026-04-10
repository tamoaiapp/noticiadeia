import Link from "next/link";
export default function NotFound() {
  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: "6rem 1.25rem", textAlign: "center" }}>
      <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🤖</div>
      <h1 style={{ fontSize: "2rem", fontWeight: 900, margin: "0 0 1rem", color: "#0f172a" }}>Página não encontrada</h1>
      <p style={{ color: "#475569", marginBottom: "2rem" }}>Essa página não existe ou foi movida.</p>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <Link href="/" style={{ background: "#1d4ed8", color: "#fff", padding: "0.75rem 1.5rem", borderRadius: 8, textDecoration: "none", fontWeight: 700 }}>Ir para Home</Link>
        <Link href="/noticias" style={{ background: "#f1f5f9", color: "#0f172a", padding: "0.75rem 1.5rem", borderRadius: 8, textDecoration: "none", fontWeight: 700 }}>Ver Notícias</Link>
      </div>
    </div>
  );
}
