import { getAllArticles } from "./mdx";

const BASE_URL = "https://noticiadeia.com";

export function generateRSS(): string {
  const articles = getAllArticles().slice(0, 200); // Google News lê os mais recentes

  const items = articles
    .map((a) => {
      const pubDate = new Date(a.date).toUTCString();
      return `
    <item>
      <title><![CDATA[${a.title}]]></title>
      <link>${BASE_URL}/noticias/${a.slug}</link>
      <guid isPermaLink="true">${BASE_URL}/noticias/${a.slug}</guid>
      <description><![CDATA[${a.description}]]></description>
      <category><![CDATA[${a.category}]]></category>
      <pubDate>${pubDate}</pubDate>
      <author>redacao@noticiadeia.com (${a.author})</author>
    </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>notíciadeia.com — Inteligência Artificial para o Brasil</title>
    <link>${BASE_URL}</link>
    <description>Notícias e tendências de IA com olhar prático para o mercado brasileiro.</description>
    <language>pt-BR</language>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;
}
