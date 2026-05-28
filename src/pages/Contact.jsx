import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE_CONFIG } from '../config'
import DonationSection from '../components/DonationSection'
import './PageHeader.css'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })
  const [sent, setSent] = useState(false)
  const { hash } = useLocation()

  useEffect(() => {
    if (hash === '#donar') {
      setTimeout(() => {
        document.getElementById('donar')?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [hash])

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = encodeURIComponent(
      `Hola, soy ${form.nombre} (${form.email}).\n\n${form.mensaje}`
    )
    window.open(`https://wa.me/${SITE_CONFIG.whatsapp}?text=${message}`, '_blank')
    setSent(true)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="section-eyebrow">Contáctanos</span>
          <h1>Estamos aquí para <em>escucharte</em>.</h1>
          <p>Ya sea para donar, ser voluntario, o pedir ayuda — escríbenos.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>Otras formas de contactarnos</h2>

            <div className="contact-method">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                </svg>
              </div>
              <div>
                <strong>WhatsApp</strong>
                <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  {SITE_CONFIG.whatsappDisplay}
                </a>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div>
                <strong>Teléfono</strong>
                <a href={`tel:${SITE_CONFIG.telefono}`}>{SITE_CONFIG.telefono}</a>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div>
                <strong>Email</strong>
                <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div>
                <strong>Sede</strong>
                <span>{SITE_CONFIG.direccion}</span>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Escríbenos directamente</h2>
            <p className="form-help">Te responderemos por WhatsApp en menos de 24 horas.</p>

            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" id="nombre" name="nombre" value={form.nombre} onChange={handleChange} required placeholder="Tu nombre completo" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required placeholder="tucorreo@ejemplo.com" />
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea id="mensaje" name="mensaje" value={form.mensaje} onChange={handleChange} required rows="5" placeholder="¿En qué podemos ayudarte? ¿Quieres ser voluntario, donar, o necesitas apoyo?"></textarea>
            </div>

            <button type="submit" className="btn btn-primary form-submit">
              Enviar mensaje
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>

            {sent && (
              <div className="form-success">
                ✓ ¡Tu mensaje fue enviado por WhatsApp! Te responderemos pronto.
              </div>
            )}
          </form>
        </div>
      </section>

      <DonationSection />
    </>
  )
}
