"use client";
import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const categorias = [
  { label: "Lançamentos", slug: "lancamentos" },
  { label: "Ferramentas", slug: "ferramentas" },
  { label: "IA no Brasil", slug: "ia-no-brasil" },
  { label: "Negócios", slug: "negocios" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{ background: "#fff", borderBottom: "1px solid #e2e8f0", position: "sticky", top: 0, zIndex: 50 }}>
      {/* Topo colorido */}
      <div style={{ background: "#1d4ed8", height: 3 }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.25rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <Logo size="sm" />
          </Link>

          {/* Nav desktop */}
          <nav className="nd-desktop-nav" style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            {categorias.map((c) => (
              <Link key={c.slug} href={`/noticias?categoria=${c.slug}`} style={{ color: "#475569", textDecoration: "none", fontWeight: 500, fontSize: "0.9rem" }}>
                {c.label}
              </Link>
            ))}
            <Link href="/ferramentas" style={{ color: "#475569", textDecoration: "none", fontWeight: 500, fontSize: "0.9rem" }}>
              Ferramentas
            </Link>
            <Link href="/produtos" style={{ background: "#1d4ed8", color: "#fff", padding: "0.4rem 0.9rem", borderRadius: 7, textDecoration: "none", fontWeight: 700, fontSize: "0.875rem" }}>
              Nossos Produtos
            </Link>
          </nav>

          {/* Botão mobile */}
          <button onClick={() => setOpen(!open)} className="nd-mobile-btn" style={{ display: "none", background: "none", border: "none", cursor: "pointer", fontSize: "1.5rem", color: "#0f172a" }} aria-label="Menu">
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Menu mobile */}
        {open && (
          <div style={{ borderTop: "1px solid #e2e8f0", padding: "1rem 0", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {categorias.map((c) => (
              <Link key={c.slug} href={`/noticias?categoria=${c.slug}`} style={{ color: "#0f172a", textDecoration: "none", fontWeight: 500, padding: "0.25rem 0" }} onClick={() => setOpen(false)}>
                {c.label}
              </Link>
            ))}
            <Link href="/ferramentas" style={{ color: "#0f172a", textDecoration: "none", fontWeight: 500, padding: "0.25rem 0" }} onClick={() => setOpen(false)}>Ferramentas</Link>
            <Link href="/produtos" style={{ color: "#1d4ed8", fontWeight: 700, textDecoration: "none", padding: "0.25rem 0" }} onClick={() => setOpen(false)}>Nossos Produtos</Link>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nd-desktop-nav { display: none !important; }
          .nd-mobile-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
