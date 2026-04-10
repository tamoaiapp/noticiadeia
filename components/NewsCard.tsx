import Link from "next/link";
import CategoryBadge from "./CategoryBadge";

interface NewsCardProps {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime?: string;
  featured?: boolean;
}

export default function NewsCard({ slug, title, description, category, readTime = "4 min", featured = false }: NewsCardProps) {
  if (featured) {
    return (
      <Link href={`/noticias/${slug}`} style={{ textDecoration: "none", display: "block" }}>
        <div style={{
          background: "#fff",
          border: "1px solid #e2e8f0",
          borderRadius: 14,
          overflow: "hidden",
          height: "100%",
        }}>
          {/* Imagem placeholder */}
          <div style={{
            height: 220,
            background: "linear-gradient(135deg, #1e3a8a, #1d4ed8, #3b82f6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "3.5rem",
          }}>
            🤖
          </div>
          <div style={{ padding: "1.5rem" }}>
            <CategoryBadge category={category} />
            <h2 style={{ margin: "0.75rem 0 0.5rem", fontSize: "1.25rem", fontWeight: 800, color: "#0f172a", lineHeight: 1.3 }}>{title}</h2>
            <p style={{ margin: 0, color: "#475569", fontSize: "0.95rem", lineHeight: 1.6 }}>{description}</p>
            <div style={{ marginTop: "1rem", color: "#94a3b8", fontSize: "0.8rem" }}>⏱ {readTime} de leitura</div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/noticias/${slug}`} style={{ textDecoration: "none", display: "block" }}>
      <div style={{
        background: "#fff",
        border: "1px solid #e2e8f0",
        borderRadius: 12,
        padding: "1.25rem",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "0.6rem",
        transition: "border-color 0.15s",
      }}>
        <CategoryBadge category={category} />
        <h3 style={{ margin: 0, fontSize: "1rem", fontWeight: 700, color: "#0f172a", lineHeight: 1.4 }}>{title}</h3>
        <p style={{ margin: 0, color: "#475569", fontSize: "0.875rem", lineHeight: 1.6, flexGrow: 1 }}>{description}</p>
        <div style={{ color: "#94a3b8", fontSize: "0.78rem" }}>⏱ {readTime} de leitura</div>
      </div>
    </Link>
  );
}
