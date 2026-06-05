import './Logo.css'

type LogoProps = {
  variant?: 'header' | 'footer' | 'hero'
}

const logoSources = {
  header: '/logo-emblema.png',
  hero: '/logo-emblema.png',
  footer: '/logo-rodape.png',
} as const

function Logo({ variant = 'header' }: LogoProps) {
  return (
    <img
      src={logoSources[variant]}
      alt="JSM — Consultoria em Tecnologia"
      className={`logo-img logo-img--${variant}`}
    />
  )
}

export default Logo
