import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content/noticias");

// Autores fictícios — atribuídos deterministicamente pelo slug (mesmo artigo = mesmo autor sempre)
const AUTORES = [
  "Lucas Ferreira",
  "Camila Rocha",
  "Rafael Mendes",
  "Juliana Alves",
  "Thiago Carvalho",
  "Mariana Costa",
  "Felipe Souza",
  "Beatriz Lima",
  "Eduardo Nunes",
  "Fernanda Gomes",
  "Gabriel Oliveira",
  "Amanda Ribeiro",
  "Rodrigo Santos",
  "Isabela Martins",
  "Bruno Azevedo",
  "Letícia Pinto",
  "Diego Campos",
  "Natália Vieira",
  "Mateus Barbosa",
  "Priscila Teixeira",
  "André Moraes",
  "Vanessa Cunha",
  "Leandro Pereira",
  "Renata Fonseca",
  "Caio Monteiro",
  "Sabrina Araújo",
  "Vinícius Lopes",
  "Patrícia Borges",
  "Daniel Correia",
  "Aline Machado",
  "Fábio Rezende",
  "Larissa Guimarães",
  "Henrique Bastos",
  "Tatiana Melo",
  "Marcelo Castro",
  "Lívia Duarte",
  "Gustavo Freitas",
  "Caroline Moreira",
  "Otávio Nogueira",
  "Débora Siqueira",
];

function pickAuthor(slug: string): string {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return AUTORES[hash % AUTORES.length];
}

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime?: string;
  keywords?: string;
  banner?: "automacao" | "fornecedor" | "whatsapp" | "foto" | "default";
  date: string;   // ISO 8601, ex: "2025-03-15"
  author: string;
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
      const filePath = path.join(CONTENT_DIR, file);
      const { data } = matter(fs.readFileSync(filePath, "utf-8"));
      const stat = fs.statSync(filePath);
      const date: string = data.date
        ? String(data.date).slice(0, 10)
        : stat.mtime.toISOString().slice(0, 10);
      return {
        slug,
        title: data.title ?? slug,
        description: data.description ?? "",
        category: data.category ?? "Notícia",
        readTime: data.readTime ?? "4 min",
        keywords: data.keywords ?? "",
        banner: data.banner ?? "default",
        date,
        author: data.author ?? pickAuthor(slug),
      } as ArticleMeta;
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getArticleBySlug(slug: string): Article | null {
  const mdx = path.join(CONTENT_DIR, `${slug}.mdx`);
  const md = path.join(CONTENT_DIR, `${slug}.md`);
  const target = fs.existsSync(mdx) ? mdx : fs.existsSync(md) ? md : null;
  if (!target) return null;
  const { data, content } = matter(fs.readFileSync(target, "utf-8"));
  const stat = fs.statSync(target);
  const date: string = data.date
    ? String(data.date).slice(0, 10)
    : stat.mtime.toISOString().slice(0, 10);
  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    category: data.category ?? "Notícia",
    readTime: data.readTime ?? "4 min",
    keywords: data.keywords ?? "",
    banner: data.banner ?? "default",
    date,
    author: data.author ?? pickAuthor(slug),
    content,
  };
}

export function getArticlesByCategory(category: string): ArticleMeta[] {
  return getAllArticles().filter((a) => a.category.toLowerCase() === category.toLowerCase());
}
