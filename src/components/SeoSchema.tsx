import { SITE_DESCRIPTION, SITE_EMAIL, SITE_NAME, SITE_URL } from '../config/site'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo-rodape.png`,
  description: SITE_DESCRIPTION,
  email: SITE_EMAIL,
  areaServed: 'BR',
  knowsAbout: [
    'Consultoria de TI',
    'Inteligência Artificial',
    'Desenvolvimento de software',
    'Aplicações web',
    'Aplicações mobile',
    'Chatbots corporativos',
    'Automação com IA',
    'Integração MCP',
    'React',
    'Next.js',
    'Spring Boot',
    '.NET',
    'React Native',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: 'pt-BR',
}

function SeoSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([organizationSchema, websiteSchema]),
      }}
    />
  )
}

export default SeoSchema
