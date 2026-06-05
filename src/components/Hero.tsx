import Logo from './Logo'
import './Hero.css'

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <p className="hero-eyebrow">Bem-vindo à JSM</p>
          <h1 className="hero-title">Consultoria em Tecnologia</h1>
          <p className="hero-description">
            A JSM é uma empresa de consultoria de TI fundada por profissionais
            com ampla experiência em desenvolvimento de software. Atuamos no
            desenvolvimento de aplicações web e mobile, oferecendo soluções
            tecnológicas sob medida para empresas que buscam qualidade,
            confiabilidade e parceria de longo prazo.
          </p>
          <div className="hero-actions">
            <a href="#sobre" className="btn btn-outline">
              Sobre a empresa
            </a>
            <a href="#contato" className="btn btn-hero-secondary">
              Entre em contato
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <Logo variant="hero" />
        </div>
      </div>
    </section>
  )
}

export default Hero
