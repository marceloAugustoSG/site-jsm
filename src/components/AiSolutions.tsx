import './AiSolutions.css'

const solutions = [
  {
    title: 'Consultoria em Inteligência Artificial',
    description:
      'Análise de oportunidades, definição de arquitetura, escolha de modelos e orientação sobre como aplicar IA de forma segura e eficiente no negócio do cliente.',
  },
  {
    title: 'Chatbots e Assistentes Virtuais',
    description:
      'Desenvolvimento de assistentes para atendimento, suporte interno e autoatendimento, integrados a sites, aplicativos e canais corporativos.',
  },
  {
    title: 'Busca Inteligente em Documentos',
    description:
      'Soluções que permitem consultar contratos, manuais, bases de conhecimento e arquivos internos usando linguagem natural, com respostas contextualizadas.',
  },
  {
    title: 'Automação de Processos com IA',
    description:
      'Automatização de tarefas repetitivas, classificação de informações, geração de resumos e apoio operacional para equipes administrativas e técnicas.',
  },
  {
    title: 'Integração de IA com Sistemas',
    description:
      'Conexão de modelos de IA a ERPs, CRMs, APIs e bancos de dados existentes, permitindo que a inteligência artificial atue sobre dados e fluxos reais da empresa.',
  },
  {
    title: 'Copilotos e Agentes Corporativos',
    description:
      'Assistentes especializados para áreas como RH, financeiro, suporte e TI, com integração via protocolos modernos como MCP para ampliar as capacidades da IA.',
  },
]

function AiSolutions() {
  return (
    <section id="ia" className="section ai-solutions">
      <div className="container">
        <div className="section-header section-header--left ai-header">
          <span className="section-label">Inteligência Artificial</span>
          <h2 className="section-title">Soluções com IA</h2>
          <p className="section-description">
            Além do desenvolvimento de software tradicional, a JSM projeta e
            implementa soluções com Inteligência Artificial para empresas que
            buscam automação, produtividade e integração inteligente aos seus
            sistemas.
          </p>
        </div>

        <div className="ai-intro">
          <p>
            Utilizamos modelos de linguagem e arquiteturas modernas para
            construir aplicações que vão além de sistemas convencionais —
            conectando IA aos processos, dados e ferramentas já utilizados pelo
            cliente.
          </p>
        </div>

        <div className="ai-grid">
          {solutions.map((solution) => (
            <article key={solution.title} className="ai-card">
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AiSolutions
