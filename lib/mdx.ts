import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content/noticias");

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime?: string;
  keywords?: string;
  banner?: "automacao" | "fornecedor" | "whatsapp" | "foto" | "default";
}

export interface Article extends ArticleMeta {
  content: string;
}

export function getAllArticles(): ArticleMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => /\.mdx?$/.test(f));
  return files
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const { data } = matter(fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8"));
      return {
        slug,
        title: data.title ?? slug,
        description: data.description ?? "",
        category: data.category ?? "Notícia",
        readTime: data.readTime ?? "4 min",
        keywords: data.keywords ?? "",
        banner: data.banner ?? "default",
      } as ArticleMeta;
    })
    .sort((a, b) => a.title.localeCompare(b.title, "pt-BR"));
}

export function getArticleBySlug(slug: string): Article | null {
  const mdx = path.join(CONTENT_DIR, `${slug}.mdx`);
  const md = path.join(CONTENT_DIR, `${slug}.md`);
  const target = fs.existsSync(mdx) ? mdx : fs.existsSync(md) ? md : null;
  if (!target) return null;
  const { data, content } = matter(fs.readFileSync(target, "utf-8"));
  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    category: data.category ?? "Notícia",
    readTime: data.readTime ?? "4 min",
    keywords: data.keywords ?? "",
    banner: data.banner ?? "default",
    content,
  };
}

export function getArticlesByCategory(category: string): ArticleMeta[] {
  return getAllArticles().filter((a) => a.category.toLowerCase() === category.toLowerCase());
}
