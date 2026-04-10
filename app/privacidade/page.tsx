import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade — Notícia de IA",
  description: "Política de privacidade do notíciadeia.com. Saiba como coletamos, usamos e protegemos seus dados.",
};

export default function PrivacidadePage() {
  const ano = new Date().getFullYear();
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "3rem 1.25rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 900, margin: "0 0 0.5rem", color: "#0f172a" }}>Política de Privacidade</h1>
      <p style={{ color: "#94a3b8", fontSize: "0.875rem", marginBottom: "2.5rem" }}>Última atualização: abril de {ano}</p>

      <div className="article-body">
        <p>O <strong>notíciadeia.com</strong> respeita a sua privacidade. Esta política descreve como coletamos e usamos informações quando você acessa nosso portal.</p>

        <h2>1. Informações que coletamos</h2>
        <p>Coletamos informações de forma automática ao navegar no site, como endereço IP, tipo de navegador, páginas visitadas e tempo de acesso. Essas informações são usadas exclusivamente para análise de audiência e melhoria do conteúdo.</p>
        <p>Se você se inscrever em nossa newsletter, coletamos seu endereço de e-mail para envio de atualizações sobre IA.</p>

        <h2>2. Como usamos suas informações</h2>
        <ul>
          <li>Analisar o desempenho do portal e melhorar o conteúdo</li>
          <li>Enviar a newsletter para assinantes (mediante consentimento)</li>
          <li>Exibir anúncios relevantes por meio do Google AdSense</li>
        </ul>

        <h2>3. Google AdSense e cookies</h2>
        <p>Este site utiliza o Google AdSense para exibição de anúncios. O Google pode usar cookies para exibir anúncios personalizados com base nas suas visitas a este e a outros sites. Você pode desativar o uso de cookies para publicidade personalizada em <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Configurações de anúncios do Google</a>.</p>

        <h2>4. Google Analytics</h2>
        <p>Utilizamos o Google Analytics para coletar dados de uso anônimos. Os dados coletados não permitem a identificação pessoal do usuário.</p>

        <h2>5. Links externos</h2>
        <p>Nosso portal pode conter links para sites externos. Não somos responsáveis pelas práticas de privacidade de terceiros.</p>

        <h2>6. Seus direitos (LGPD)</h2>
        <p>Nos termos da Lei Geral de Proteção de Dados (Lei 13.709/2018), você tem direito a: acessar, corrigir ou excluir seus dados pessoais. Para exercer esses direitos, entre em contato pelo nosso <a href="/contato">formulário de contato</a>.</p>

        <h2>7. Alterações nesta política</h2>
        <p>Podemos atualizar esta política periodicamente. Recomendamos revisá-la regularmente. Alterações significativas serão comunicadas no portal.</p>

        <h2>8. Contato</h2>
        <p>Para dúvidas sobre esta política, acesse nossa <a href="/contato">página de contato</a>.</p>
      </div>
    </div>
  );
}
