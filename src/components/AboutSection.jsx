import { Link } from 'react-router-dom'
import './AboutSection.css'

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="container about-grid">
        <div className="about-images">
          <div className="about-img-1">
            <img src="/images/equipo-fundacion-grupo.jpg" alt="Equipo de la Fundación Rescatando para Restaurar" />
          </div>
          <div className="about-img-2">
            <img src="/images/actividad-abrazo-parque.jpg" alt="Acompañamiento a una persona" />
          </div>
          <div className="about-img-deco"></div>
        </div>

        <div className="about-text">
          <span className="section-eyebrow">Sobre nosotros</span>
          <h2 className="section-title">Rescatamos vidas para <em>restaurar</em> esperanza.</h2>
          <p className="about-paragraph">
            Somos una entidad sin ánimo de lucro dedicada a la restauración integral
            de la persona humana, a través de un modelo biopsicosocial-espiritual.
            Trabajamos con quienes han sido olvidados: habitantes de calle, personas
            con dependencias, familias en crisis y comunidades marginadas de Aguachica.
          </p>
          <p className="about-paragraph">
            Acompañamos cada proceso con dignidad, fe y compromiso, ayudando a las
            personas a reconstruir su historia de vida. Porque creemos que <strong>una nueva vida siempre es posible</strong> cuando hay manos dispuestas a tenderse.
          </p>

          <div className="about-values">
            <div className="value-item">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <div>
                <h4>Amor</h4>
                <p>Servimos con el corazón a cada persona que llega.</p>
              </div>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M10 17l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div>
                <h4>Compromiso</h4>
                <p>Acompañamos hasta que la restauración sea real.</p>
              </div>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div>
                <h4>Fe y dignidad</h4>
                <p>Cada persona vale, sin etiquetas ni juicios.</p>
              </div>
            </div>
          </div>

          <Link to="/nosotros" className="btn btn-secondary" style={{ marginTop: '24px' }}>
            Conoce más sobre nosotros
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
