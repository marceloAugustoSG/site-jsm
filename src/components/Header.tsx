import { useState } from 'react'
import Logo from './Logo'
import './Header.css'

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'A Empresa' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#ia', label: 'Soluções em IA' },
  { href: '#equipe', label: 'Equipe' },
  { href: '#contato', label: 'Contato' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#inicio" className="logo">
          <Logo variant="header" />
          <span className="logo-tagline">Consultoria em Tecnologia</span>
        </a>

        <nav className={`nav ${menuOpen ? 'nav--open' : ''}`} aria-label="Menu principal">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={`menu-toggle ${menuOpen ? 'menu-toggle--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Header
