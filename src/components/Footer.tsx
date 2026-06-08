import Logo from './Logo'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo variant="footer" />
            <p>
              Consultoria em Tecnologia especializada em desenvolvimento de
              software, aplicações web, mobile e soluções com Inteligência Artificial.
            </p>
          </div>
          <div className="footer-nav">
            <h4>Navegação</h4>
            <ul>
              <li><a href="#inicio">Início</a></li>
              <li><a href="#sobre">A Empresa</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#ia">Soluções em IA</a></li>
              <li><a href="#equipe">Equipe</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contato</h4>
            <p>
              <a href="mailto:contato@jsmconsultoria.com.br">
                contato@jsmconsultoria.com.br
              </a>
            </p>
            <p>Segunda a sexta, horário comercial</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {year} JSM Consultoria em Tecnologia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
