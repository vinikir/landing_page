const highlights = [
  { value: '2500+', label: 'peças em estoque' },
  { value: '15 anos', label: 'de oficina especializada' },
  { value: '24h', label: 'retorno para orçamento' },
]

const services = [
  {
    title: 'Peças de reposição',
    text: 'Freio, transmissão, suspensão, elétrica e itens de acabamento das principais marcas.',
  },
  {
    title: 'Revisão e manutenção',
    text: 'Troca de óleo, revisão preventiva, diagnóstico e reparos com foco em entrega rápida.',
  },
  {
    title: 'Upgrade e preparação',
    text: 'Montagem sob medida para uso urbano, trilha ou desempenho, com orientação técnica.',
  },
]

const advantages = [
  'Atendimento para motos street, trail e utilitárias',
  'Equipe técnica com diagnóstico e instalação',
  'Peças originais e linhas paralelas selecionadas',
  'Orçamento rápido no WhatsApp',
]

export default function App() {
  return (
    <div className="page-shell">
      <header className="hero">
        <div className="topbar">
          <p className="brand">GeM Motos</p>
          <nav>
            <a href="#servicos">Serviços</a>
            <a href="#diferenciais">Diferenciais</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Loja de peças + oficina especializada</p>
            <h1>Peças certas, serviço técnico e moto pronta para rodar.</h1>
            <p className="intro">
              Uma página pensada para destacar sua loja, captar pedidos de peças
              e gerar contatos para revisão, manutenção e upgrades.
            </p>

            <div className="hero-actions">
              <a className="primary-btn" href="#contato">
                Pedir orçamento
              </a>
              <a className="secondary-btn" href="#servicos">
                Ver serviços
              </a>
            </div>
          </div>

          <aside className="hero-card">
            <span className="card-tag">Oficina ativa</span>
            <h2>Atendimento para manutenção, peças e performance.</h2>
            <ul>
              <li>Revisão preventiva e corretiva</li>
              <li>Peças para reposição imediata</li>
              <li>Suporte técnico para instalação</li>
            </ul>
          </aside>
        </div>
      </header>

      <main>
        <section className="stats-section">
          {highlights.map((item) => (
            <article key={item.label} className="stat-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </section>

        <section id="servicos" className="content-section">
          <div className="section-heading">
            <p className="eyebrow">O que sua página comunica</p>
            <h2>Uma vitrine clara para vender peças e fechar serviços.</h2>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="diferenciais" className="content-section contrast-section">
          <div className="section-heading">
            <p className="eyebrow">Por que isso funciona</p>
            <h2>Posicionamento forte para loja e oficina na mesma página.</h2>
          </div>

          <div className="advantages-grid">
            {advantages.map((item) => (
              <div key={item} className="advantage-item">
                <span />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contato" className="content-section cta-section">
          <div>
            <p className="eyebrow">Próximo passo</p>
            <h2>Troque seus contatos, endereço e catálogo e a página já fica pronta para uso.</h2>
          </div>

          <div className="contact-card">
            <p>WhatsApp: (00) 00000-0000</p>
            <p>Endereço: Rua da Oficina, 123</p>
            <p>Instagram: @gemmotos</p>
          </div>
        </section>
      </main>
    </div>
  )
}
