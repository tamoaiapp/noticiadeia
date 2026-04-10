const colors: Record<string, { bg: string; text: string }> = {
  "Lançamentos":   { bg: "#fef3c7", text: "#92400e" },
  "OpenAI":        { bg: "#f0fdf4", text: "#14532d" },
  "Anthropic":     { bg: "#fdf4ff", text: "#581c87" },
  "Google":        { bg: "#eff6ff", text: "#1e40af" },
  "IA no Brasil":  { bg: "#fff7ed", text: "#7c2d12" },
  "Ferramentas":   { bg: "#ecfdf5", text: "#065f46" },
  "Negócios":      { bg: "#f8fafc", text: "#334155" },
  "Tutoriais":     { bg: "#eff6ff", text: "#1e40af" },
  "Comparativo":   { bg: "#fdf2f8", text: "#831843" },
  "Regulação":     { bg: "#fff1f2", text: "#881337" },
};

export default function CategoryBadge({ category }: { category: string }) {
  const color = colors[category] ?? { bg: "#f1f5f9", text: "#475569" };
  return (
    <span style={{
      background: color.bg,
      color: color.text,
      fontSize: "0.72rem",
      fontWeight: 700,
      padding: "0.2rem 0.6rem",
      borderRadius: 20,
      textTransform: "uppercase",
      letterSpacing: "0.04em",
      whiteSpace: "nowrap",
    }}>
      {category}
    </span>
  );
}
