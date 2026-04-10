import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso — Notícia de IA",
  description: "Termos de uso do portal notíciadeia.com.",
};

export default function TermosPage() {
  const ano = new Date().getFullYear();
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "3rem 1.25rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 900, margin: "0 0 0.5rem", color: "#0f172a" }}>Termos de Uso</h1>
      <p style={{ color: "#94a3b8", fontSize: "0.875rem", marginBottom: "2.5rem" }}>Última atualização: abril de {ano}</p>

      <div className="article-body">
        <p>Ao acessar o <strong>notíciadeia.com</strong>, você concorda com estes termos. Se não concordar, por favor não utilize o portal.</p>

        <h2>1. Conteúdo editorial</h2>
        <p>O conteúdo publicado no notíciadeia.com é de caráter informativo e educacional. Fazemos nosso melhor para manter as informações atualizadas e precisas, mas não garantimos que o conteúdo esteja isento de erros. O uso das informações é de responsabilidade do leitor.</p>

        <h2>2. Propriedade intelectual</h2>
        <p>Todo o conteúdo do portal (textos, imagens, logotipos) é de propriedade do notíciadeia.com ou de seus licenciadores. É proibida a reprodução total ou parcial sem autorização prévia por escrito.</p>

        <h2>3. Links externos</h2>
        <p>O portal pode conter links para sites externos. Não somos responsáveis pelo conteúdo ou práticas de privacidade de terceiros.</p>

        <h2>4. Publicidade</h2>
        <p>O portal exibe anúncios por meio do Google AdSense. O conteúdo editorial é independente dos anunciantes. Parcerias comerciais são identificadas como "Conteúdo Patrocinado".</p>

        <h2>5. Isenção de responsabilidade</h2>
        <p>O notíciadeia.com não se responsabiliza por decisões tomadas com base no conteúdo publicado. Ferramentas de IA mencionadas são de terceiros e estão sujeitas a suas próprias condições de uso.</p>

        <h2>6. Modificações</h2>
        <p>Reservamos o direito de modificar estes termos a qualquer momento. O uso continuado do portal implica aceite das alterações.</p>

        <h2>7. Legislação aplicável</h2>
        <p>Estes termos são regidos pela legislação brasileira. O foro da comarca de São Paulo, SP, é eleito para dirimir controvérsias.</p>
      </div>
    </div>
  );
}
