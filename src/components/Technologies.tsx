import './Technologies.css'

const techGroups = [
  {
    area: 'Front-end',
    items: ['React', 'Next.js', 'TypeScript'],
  },
  {
    area: 'Mobile',
    items: ['React Native'],
  },
  {
    area: 'Back-end',
    items: ['Spring Boot', 'Java', 'C#', '.NET'],
  },
]

function Technologies() {
  return (
    <section id="tecnologias" className="section technologies">
      <div className="container">
        <div className="section-header section-header--left tech-header">
          <span className="section-label">Competências Técnicas</span>
          <h2 className="section-title">Tecnologias utilizadas</h2>
          <p className="section-description">
            Utilizamos ferramentas consolidadas no mercado para desenvolver
            soluções confiáveis, seguras e alinhadas às melhores práticas da
            indústria de software.
          </p>
        </div>
        <div className="tech-groups">
          {techGroups.map((group) => (
            <div key={group.area} className="tech-group">
              <h3 className="tech-group-title">{group.area}</h3>
              <ul className="tech-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies
