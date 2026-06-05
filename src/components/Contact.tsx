import { useState, type FormEvent } from 'react'
import './Contact.css'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contato" className="section contact">
      <div className="container">
        <div className="section-header section-header--left contact-header">
          <span className="section-label">Fale Conosco</span>
          <h2 className="section-title">Contato</h2>
          <p className="section-description">
            Estamos à disposição para atender sua empresa. Utilize o formulário
            abaixo ou entre em contato pelos canais indicados.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-block">
              <h3>Informações de contato</h3>
              <dl className="contact-dl">
                <div className="contact-dl-item">
                  <dt>E-mail</dt>
                  <dd>
                    <a href="mailto:contato@jsmconsultoria.com.br">
                      contato@jsmconsultoria.com.br
                    </a>
                  </dd>
                </div>
                <div className="contact-dl-item">
                  <dt>Horário de atendimento</dt>
                  <dd>Segunda a sexta-feira, em horário comercial</dd>
                </div>
                <div className="contact-dl-item">
                  <dt>Empresa</dt>
                  <dd>JSM Consultoria em Tecnologia</dd>
                </div>
              </dl>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3 className="contact-form-title">Envie sua mensagem</h3>
            {submitted ? (
              <div className="contact-success">
                <p>
                  Sua mensagem foi recebida. Entraremos em contato em breve.
                  Obrigado.
                </p>
              </div>
            ) : (
              <>
                <div className="form-group">
                  <label htmlFor="name">Nome completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary form-submit">
                  Enviar
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
