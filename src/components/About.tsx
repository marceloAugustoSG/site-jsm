import './About.css'

const values = [
  {
    title: 'Missão',
    text: 'Oferecer consultoria e desenvolvimento de software de qualidade, ajudando empresas a alcançar seus objetivos por meio de soluções tecnológicas eficientes e confiáveis.',
  },
  {
    title: 'Visão',
    text: 'Ser referência em consultoria de TI, reconhecida pela excelência técnica, comprometimento com o cliente e entrega de projetos que geram valor real para os negócios.',
  },
  {
    title: 'Valores',
    text: 'Ética, transparência, qualidade técnica, responsabilidade e relacionamento próximo com cada cliente. Acreditamos que tecnologia deve servir ao negócio de forma clara e objetiva.',
  },
]

function About() {
  return (
    <section id="sobre" className="section about">
      <div className="container">
        <div className="about-intro">
          <div className="section-header section-header--left">
            <span className="section-label">A Empresa</span>
            <h2 className="section-title">Quem somos</h2>
          </div>
          <div className="about-text">
            <p>
              A <strong>JSM Consultoria em Tecnologia</strong> é uma empresa
              especializada em consultoria de TI e desenvolvimento de software,
              formada por profissionais seniores com sólida trajetória no
              desenvolvimento de aplicações web e mobile.
            </p>
            <p>
              Com experiência em tecnologias como React, Next.js, Spring Boot,
              Java, C#, .NET e React Native, a JSM atua em todo o ciclo de
              desenvolvimento — desde a análise de requisitos e definição de
              arquitetura até a implementação, entrega e manutenção de
              sistemas.
            </p>
            <p>
              Nosso diferencial está na combinação de conhecimento técnico
              aprofundado com atendimento personalizado. Cada projeto é
              conduzido com atenção às necessidades específicas do cliente,
              priorizando comunicação clara, prazos acordados e código de
              qualidade.
            </p>
          </div>
        </div>

        <div className="values-grid">
          {values.map((item) => (
            <article key={item.title} className="values-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
