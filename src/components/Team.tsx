import './Team.css'

const expertise = [
  {
    area: 'Desenvolvimento Front-end',
    technologies: 'React, Next.js, TypeScript',
    description:
      'Profissionais seniores na construção de interfaces web responsivas, acessíveis e com foco em experiência do usuário.',
  },
  {
    area: 'Desenvolvimento Back-end',
    technologies: 'Spring Boot, Java, C#, .NET',
    description:
      'Especialistas em APIs, serviços e arquiteturas robustas, com atenção à segurança, performance e manutenibilidade.',
  },
  {
    area: 'Desenvolvimento Mobile',
    technologies: 'React Native',
    description:
      'Equipe com experiência em aplicações mobile para iOS e Android, integradas aos sistemas e processos do cliente.',
  },
]

function Team() {
  return (
    <section id="equipe" className="section team">
      <div className="container">
        <div className="section-header section-header--left team-header">
          <span className="section-label">Nossa Equipe</span>
          <h2 className="section-title">Profissionais especializados</h2>
          <p className="section-description">
            A JSM conta com uma equipe de profissionais seniores, com ampla
            experiência em desenvolvimento de software e participação direta nos
            projetos — do planejamento à entrega e suporte.
          </p>
        </div>
        <div className="team-grid">
          {expertise.map((item) => (
            <article key={item.area} className="team-card">
              <h3>{item.area}</h3>
              <span className="team-tech">{item.technologies}</span>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
