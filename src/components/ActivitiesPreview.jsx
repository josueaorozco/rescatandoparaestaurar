import { Link } from 'react-router-dom'
import './ActivitiesPreview.css'

const actividades = [
  {
    titulo: "Jornadas de Restauración",
    descripcion: "Encuentros donde acompañamos procesos espirituales y emocionales.",
    img: "/images/actividad-dialogo-parque.jpg"
  },
  {
    titulo: "Apoyo a Habitantes de Calle",
    descripcion: "Brindamos alimentación, aseo, ropa y atención digna.",
    img: "/images/actividad-mercado-familia.jpg"
  },
  {
    titulo: "Acompañamiento Familiar",
    descripcion: "Restauramos vínculos rotos entre familias y sus seres queridos.",
    img: "/images/actividad-corte-cabello.jpg"
  },
  {
    titulo: "Talleres de Vida",
    descripcion: "Formación en habilidades para la vida y reintegración social.",
    img: "/images/actividad-transporte-bus.jpg"
  }
]

export default function ActivitiesPreview() {
  return (
    <section className="activities-preview">
      <div className="container">
        <div className="activities-header">
          <div>
            <span className="section-eyebrow">Nuestras actividades</span>
            <h2 className="section-title">
              Cada día sembramos<br/>
              <em>esperanza</em> en quien la perdió.
            </h2>
          </div>
          <Link to="/actividades" className="btn btn-secondary activities-btn">
            Ver todas las actividades
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
            </svg>
          </Link>
        </div>

        <div className="activities-grid">
          {actividades.map((act, i) => (
            <div key={i} className="activity-card">
              <div className="activity-img">
                <img src={act.img} alt={act.titulo} loading="lazy" />
                <div className="activity-overlay">
                  <span>{act.titulo}</span>
                </div>
              </div>
              <div className="activity-info">
                <h3>{act.titulo}</h3>
                <p>{act.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="activities-video">
          <div className="video-content">
            <span className="video-eyebrow">📹 Mira lo que hacemos</span>
            <h3>Un día con la fundación</h3>
            <p>
              Conoce de cerca cómo trabajamos, las personas que acompañamos
              y las historias de transformación que escribimos juntos cada día.
            </p>
            <Link to="/actividades" className="btn btn-primary">
              Ver más contenido
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </Link>
          </div>
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Actividades de la fundación"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
