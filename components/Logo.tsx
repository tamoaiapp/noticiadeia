interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "full" | "icon";
  theme?: "light" | "dark";
}

export default function Logo({ size = "md", variant = "full", theme = "light" }: LogoProps) {
  const scales = { sm: 0.7, md: 1, lg: 1.4 };
  const s = scales[size];
  const textColor = theme === "dark" ? "#ffffff" : "#0f172a";
  const mutedColor = theme === "dark" ? "#94a3b8" : "#64748b";

  const icon = (
    <svg
      width={Math.round(36 * s)}
      height={Math.round(36 * s)}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Fundo arredondado */}
      <rect width="36" height="36" rx="9" fill="#1d4ed8" />

      {/* Circuito / neurônio estilizado */}
      {/* Nó central */}
      <circle cx="18" cy="18" r="3.5" fill="white" />

      {/* Linhas de circuito */}
      <line x1="18" y1="14.5" x2="18" y2="8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="18" y1="21.5" x2="18" y2="28" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="14.5" y1="18" x2="8" y2="18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="21.5" y1="18" x2="28" y2="18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />

      {/* Diagonal esquerda-cima */}
      <line x1="15.5" y1="15.5" x2="10" y2="10" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      {/* Diagonal direita-baixo */}
      <line x1="20.5" y1="20.5" x2="26" y2="26" stroke="white" strokeWidth="1.5" strokeLinecap="round" />

      {/* Nós externos */}
      <circle cx="18" cy="7" r="2" fill="white" opacity="0.9" />
      <circle cx="18" cy="29" r="2" fill="white" opacity="0.9" />
      <circle cx="7" cy="18" r="2" fill="white" opacity="0.9" />
      <circle cx="29" cy="18" r="2" fill="white" opacity="0.9" />
      <circle cx="9" cy="9" r="1.75" fill="white" opacity="0.7" />
      <circle cx="27" cy="27" r="1.75" fill="white" opacity="0.7" />
    </svg>
  );

  if (variant === "icon") return icon;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: Math.round(10 * s) }}>
      {icon}
      <div style={{ lineHeight: 1 }}>
        <div style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontWeight: 900,
          fontSize: Math.round(17 * s),
          letterSpacing: "-0.03em",
          color: textColor,
        }}>
          <span>notícia</span>
          <span style={{ color: "#1d4ed8" }}>de</span>
          <span style={{
            background: "#1d4ed8",
            color: "#ffffff",
            padding: `${Math.round(1 * s)}px ${Math.round(4 * s)}px`,
            borderRadius: Math.round(4 * s),
            marginLeft: Math.round(1 * s),
          }}>ia</span>
        </div>
        {size !== "sm" && (
          <div style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: Math.round(9 * s),
            fontWeight: 500,
            color: mutedColor,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            marginTop: Math.round(2 * s),
          }}>
            inteligência artificial
          </div>
        )}
      </div>
    </div>
  );
}
