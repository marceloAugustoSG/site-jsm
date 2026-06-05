import './Services.css'

const services = [
  {
    title: 'Desenvolvimento de Aplicações Web',
    description:
      'Criação de sites institucionais, portais, sistemas web e painéis administrativos com interfaces responsivas e boa usabilidade.',
  },
  {
    title: 'Desenvolvimento de Aplicações Mobile',
    description:
      'Aplicativos para iOS e Android com React Native, integrados aos sistemas e processos da sua empresa.',
  },
  {
    title: 'Desenvolvimento de APIs e Back-end',
    description:
      'Serviços e APIs robustas com Spring Boot, Java, C# e .NET, garantindo segurança, performance e escalabilidade.',
  },
  {
    title: 'Consultoria em Tecnologia da Informação',
    description:
      'Análise de requisitos, definição de arquitetura, escolha de tecnologias e orientação estratégica para projetos de software.',
  },
  {
    title: 'Manutenção e Evolução de Sistemas',
    description:
      'Suporte técnico, correções, atualizações e evolução de sistemas já em operação, com acompanhamento contínuo.',
  },
  {
    title: 'Integração de Sistemas',
    description:
      'Conexão entre plataformas, APIs de terceiros e automação de fluxos de dados entre diferentes ambientes.',
  },
]

function Services() {
  return (
    <section id="servicos" className="section services">
      <div className="container">
        <div className="section-header section-header--left services-header">
          <span className="section-label">Área de Atuação</span>
          <h2 className="section-title">Nossos serviços</h2>
          <p className="section-description">
            A JSM oferece um portfólio completo de serviços em tecnologia,
            atendendo empresas que necessitam de soluções personalizadas em
            software e consultoria de TI.
          </p>
        </div>
        <div className="services-list">
          {services.map((service, index) => (
            <article key={service.title} className="service-item">
              <span className="service-number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
