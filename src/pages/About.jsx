import './PageHeader.css'
import './About.css'

const publicaciones = [
  {
    titulo: "Acta de Constitución",
    descripcion: "Documento oficial de constitución de la Fundación Rescatando para Restaurar.",
    archivo: "/docs/ACTA DE CONSTITUCION - FRPR rescatando para restaurar.doc",
    tipo: "DOC"
  },
  {
    titulo: "Estatutos de la Fundación",
    descripcion: "Estatutos y reglamento interno de la Fundación Rescatando para Restaurar.",
    archivo: "/docs/ESTATUTO - FRPR rescatando para restaurar.doc",
    tipo: "DOC"
  }
]

export default function About() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="section-eyebrow">Quiénes somos</span>
          <h1>Una historia de <em>restauración</em>.</h1>
          <p>Conoce nuestra misión, visión y los valores que nos mueven cada día.</p>
        </div>
      </section>

      <section className="about-story">
        <div className="container about-story-grid">
          <div className="about-story-img">
            <img src="/images/equipo-con-beneficiario.jpg" alt="Equipo" />
          </div>
          <div className="about-story-text">
            <span className="section-eyebrow">Nuestra historia</span>
            <h2 className="section-title">De un acto de amor a una <em>fundación</em>.</h2>
            <p>
              La Fundación Rescatando para Restaurar nació del corazón de un grupo
              de personas que vieron en la calle no un problema, sino vidas con dignidad
              esperando ser reconocidas.
            </p>
            <p>
              Lo que comenzó como visitas a habitantes de calle con comida caliente,
              se convirtió en un proyecto integral de restauración: rehabilitación,
              acompañamiento espiritual, reintegración familiar y formación para la vida.
            </p>
            <p>
              Hoy somos un equipo de voluntarios, profesionales y donantes que cree
              firmemente que <strong>nadie está perdido para siempre</strong>.
            </p>
          </div>
        </div>
      </section>

      <section className="publicaciones-section">
        <div className="container">
          <div className="publicaciones-header">
            <span className="section-eyebrow">Transparencia</span>
            <h2 className="section-title">Publicaciones <em>oficiales</em>.</h2>
            <p className="publicaciones-sub">Documentos institucionales de la fundación disponibles para consulta pública.</p>
          </div>
          <div className="publicaciones-grid">
            {publicaciones.map((doc, i) => (
              <div key={i} className="pub-card">
                <div className="pub-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15h8v2H8zm0-4h8v2H8zm0-4h5v2H8z"/>
                  </svg>
                </div>
                <div className="pub-info">
                  <span className="pub-tipo">{doc.tipo}</span>
                  <h3>{doc.titulo}</h3>
                  <p>{doc.descripcion}</p>
                </div>
                <div className="pub-actions">
                  <a href={doc.archivo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary pub-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 16l-5-5 1.41-1.41L11 13.17V4h2v9.17l2.59-2.58L17 11l-5 5zm-7 3h14v2H5z"/>
                    </svg>
                    Descargar
                  </a>
                  <a href={doc.archivo} target="_blank" rel="noopener noreferrer" className="pub-ver">
                    Ver en línea →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mision-vision">
        <div className="container mv-grid">
          <div className="mv-card mv-mision">
            <div className="mv-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <span className="mv-label">Misión</span>
            <h3>Rescatar para restaurar.</h3>
            <p>
              Acompañar procesos de transformación integral de personas en situación
              de vulnerabilidad, brindando atención espiritual, emocional, social y
              práctica que les permita reconstruir sus vidas con dignidad y esperanza.
            </p>
          </div>

          <div className="mv-card mv-vision">
            <div className="mv-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
            </div>
            <span className="mv-label">Visión</span>
            <h3>Comunidades sin olvidados.</h3>
            <p>
              Para 2030, ser un referente regional en procesos de restauración integral,
              con redes activas en múltiples ciudades, multiplicando vidas transformadas
              y construyendo una sociedad donde nadie se sienta invisible.
            </p>
          </div>

          <div className="mv-card mv-valores">
            <div className="mv-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span className="mv-label">Valores</span>
            <h3>Lo que nos sostiene.</h3>
            <ul>
              <li><strong>Amor incondicional</strong> · cada persona vale</li>
              <li><strong>Dignidad</strong> · sin etiquetas ni juicios</li>
              <li><strong>Fe</strong> · creemos en lo imposible</li>
              <li><strong>Transparencia</strong> · cuentas claras siempre</li>
              <li><strong>Compromiso</strong> · acompañamos hasta el final</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
