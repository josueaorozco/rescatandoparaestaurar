import { useEffect } from 'react'
import './PageHeader.css'
import './Testimonios.css'

const testimonios = [
  {
    url: "https://www.facebook.com/carlosantonio.sayareina.9/videos/1982551448949119/",
    titulo: "Testimonio de restauración",
    descripcion: "Una historia real de transformación y esperanza compartida por nuestra comunidad."
  }
]

export default function Testimonios() {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse()
    }
  }, [])

  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="section-eyebrow">Vidas transformadas</span>
          <h1>Testimonios que <em>inspiran</em>.</h1>
          <p>Historias reales de personas que encontraron una nueva vida a través de la fundación.</p>
        </div>
      </section>

      <section className="testimonios-section">
        <div className="container">
          <div className="testimonios-intro">
            <span className="section-eyebrow">Sus palabras</span>
            <h2 className="section-title">Ellos lo <em>vivieron</em>.</h2>
            <p className="testimonios-sub">
              Cada video es una prueba de que la restauración es posible. Estas son las voces
              de quienes decidieron creer en una segunda oportunidad.
            </p>
          </div>

          <div className="testimonios-grid">
            {testimonios.map((t, i) => (
              <div key={i} className="testimonio-card">
                <div className="testimonio-badge">💬 Testimonio</div>
                <h3 className="testimonio-titulo">{t.titulo}</h3>
                <p className="testimonio-desc">{t.descripcion}</p>
                <div className="testimonio-fb-wrapper">
                  <div
                    className="fb-video"
                    data-href={t.url}
                    data-width="auto"
                    data-allowfullscreen="true"
                    data-autoplay="false"
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonios-cta">
            <div className="testimonios-cta-icon">🙏</div>
            <h3>¿Tienes una historia que contar?</h3>
            <p>Si la fundación cambió tu vida o la de alguien que conoces, queremos escucharte.</p>
            <a
              href={`https://wa.me/573146189473?text=${encodeURIComponent('Hola, quiero compartir mi testimonio con la fundación')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Compartir mi historia
            </a>
          </div>
        </div>
      </section>
    </>
  )
}