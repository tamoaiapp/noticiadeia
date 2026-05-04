import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllArticles, getArticleBySlug } from "@/lib/mdx";
import CategoryBadge from "@/components/CategoryBadge";
import ProductBanner from "@/components/ProductBanner";
import NewsCard from "@/components/NewsCard";
import NewsletterForm from "@/components/NewsletterForm";

interface Props { params: Promise<{ slug: string }> }

export const dynamicParams = true;

export async function generateStaticParams() {
  return getAllArticles().slice(0, 80).map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticleBySlug(slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.description,
    keywords: a.keywords,
    openGraph: {
      title: a.title,
      description: a.description,
      type: "article",
      publishedTime: a.date,
      authors: [a.author],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getAllArticles().filter((a) => a.slug !== slug && a.category === article.category).slice(0, 3);
  const bannerContext = (article.banner ?? "default") as "automacao" | "fornecedor" | "whatsapp" | "foto" | "default";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    author: [{ "@type": "Person", name: article.author }],
    publisher: {
      "@type": "Organization",
      name: "NotíciadIA",
      url: "https://noticiadeia.com",
    },
    url: `https://noticiadeia.com/noticias/${article.slug}`,
    inLanguage: "pt-BR",
  };

  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem 1.25rem" }}>
      {/* Breadcrumb */}
      <nav style={{ marginBottom: "1.5rem", fontSize: "0.85rem", color: "#94a3b8", display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
        <Link href="/" style={{ color: "#1d4ed8", textDecoration: "none" }}>Início</Link>
        <span>/</span>
        <Link href="/noticias" style={{ color: "#1d4ed8", textDecoration: "none" }}>Notícias</Link>
        <span>/</span>
        <span style={{ color: "#64748b" }}>{article.title}</span>
      </nav>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "3rem", alignItems: "start" }}>
        {/* Artigo */}
        <article>
          {/* Thumbnail */}
          <div style={{ height: 300, background: "linear-gradient(135deg, #1e3a8a, #1d4ed8, #3b82f6)", borderRadius: 14, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginBottom: "2rem", gap: "0.5rem" }}>
            <span style={{ fontSize: "5rem" }}>🤖</span>
          </div>

          <CategoryBadge category={article.category} />
          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.25rem)", fontWeight: 900, margin: "0.75rem 0 1rem", color: "#0f172a", lineHeight: 1.2 }}>
            {article.title}
          </h1>

          {/* Lide */}
          <p style={{ fontSize: "1.15rem", color: "#334155", margin: "0 0 1.5rem", lineHeight: 1.7, fontWeight: 500, borderLeft: "3px solid #1d4ed8", paddingLeft: "1rem" }}>
            {article.description}
          </p>

          <div style={{ display: "flex", gap: "1.5rem", marginBottom: "2rem", paddingBottom: "1.5rem", borderBottom: "1px solid #e2e8f0", flexWrap: "wrap", fontSize: "0.85rem", color: "#94a3b8" }}>
            <span>⏱ {article.readTime} de leitura</span>
            <span>📂 {article.category}</span>
            <time dateTime={article.date}>📅 {new Date(article.date + "T12:00:00").toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}</time>
            <span>✍️ {article.author}</span>
          </div>

          <div className="article-body">
            <MDXRemote source={article.content} />
          </div>

          <ProductBanner context={bannerContext} />

          {/* Artigos relacionados */}
          {related.length > 0 && (
            <div style={{ marginTop: "3rem" }}>
              <h2 style={{ fontSize: "1.2rem", fontWeight: 800, margin: "0 0 1.25rem", color: "#0f172a" }}>Veja também</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1rem" }}>
                {related.map((a) => <NewsCard key={a.slug} {...a} />)}
              </div>
            </div>
          )}

          <div style={{ marginTop: "3rem" }}>
            <NewsletterForm variant="compact" />
          </div>
        </article>

        {/* Sidebar */}
        <aside style={{ position: "sticky", top: 80 }}>
          <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 12, padding: "1.25rem", marginBottom: "1.25rem" }}>
            <div style={{ fontWeight: 700, color: "#0f172a", marginBottom: "0.75rem", fontSize: "0.875rem" }}>Mais Notícias</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {getAllArticles().filter((a) => a.slug !== slug).slice(0, 6).map((a) => (
                <Link key={a.slug} href={`/noticias/${a.slug}`} style={{ textDecoration: "none" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                    <CategoryBadge category={a.category} />
                    <span style={{ color: "#0f172a", fontSize: "0.875rem", fontWeight: 600, lineHeight: 1.4 }}>{a.title}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 12, padding: "1.25rem" }}>
            <div style={{ fontWeight: 700, color: "#1e40af", marginBottom: "0.5rem", fontSize: "0.875rem" }}>📬 Newsletter</div>
            <p style={{ color: "#334155", fontSize: "0.85rem", margin: "0 0 0.75rem", lineHeight: 1.5 }}>Notícias de IA toda semana no seu e-mail.</p>
            <NewsletterForm variant="compact" />
          </div>
        </aside>
      </div>

      <style>{`
        @media (max-width: 900px) {
          div[style*="grid-template-columns: 1fr 300px"] {
            grid-template-columns: 1fr !important;
          }
          aside { display: none; }
        }
      `}</style>
    </div>
    </>
  );
}
