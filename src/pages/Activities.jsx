import './PageHeader.css'
import './Activities.css'

const proximosEventos = [
  {
    flyer: "/images/flyer-rumbaterapia-solidaria.png",
    titulo: "¡Gran Rumbaterapia Solidaria!",
    fecha: "13 de Junio",
    hora: "8:00 AM",
    lugar: "Parque Principal San Roque",
    descripcion: "Participa en la bailoterapia que dará inicio a la DONATÓN de la Fundación Rescatando para Restaurar. Tu aporte es voluntario — lo recaudado será destinado al rescate, acompañamiento y reintegración de personas en condición de calle.",
    badge: "¡Muévete por una buena causa!",
    actividades: [
      { icono: "🎤", nombre: "Entrevistas en vivo" },
      { icono: "💃", nombre: "Rumbaterapia" },
      { icono: "🎭", nombre: "Animaciones" },
      { icono: "🎸", nombre: "Banda en vivo" },
      { icono: "🎮", nombre: "Juegos" },
      { icono: "✨", nombre: "¡Y mucho más!" }
    ]
  }
]

const galeria = [
  { img: "/images/actividad-dialogo-parque.jpg", titulo: "Acercamiento en las calles" },
  { img: "/images/actividad-abrazo-parque.jpg", titulo: "Un abrazo que restaura" },
  { img: "/images/actividad-mercado-familia.jpg", titulo: "Reencuentros familiares" },
  { img: "/images/actividad-corte-cabello.jpg", titulo: "Recuperando la dignidad" },
  { img: "/images/actividad-dialogo-mujer.jpg", titulo: "Escuchamos cada historia" },
  { img: "/images/actividad-transporte-bus.jpg", titulo: "Camino a una nueva vida" },
  { img: "/images/actividad-dialogo-grupo.jpg", titulo: "Acompañamiento en grupo" },
  { img: "/images/actividad-mercado-thumbsup.jpg", titulo: "Segundas oportunidades" },
  { img: "/images/actividad-acompanamiento.jpg", titulo: "Presencia constante" },
  { img: "/images/actividad-grupo-arbol.jpg", titulo: "Jornadas comunitarias" },
  { img: "/images/actividad-rescate-calle.jpg", titulo: "Donde otros no miran" },
  { img: "/images/equipo-con-beneficiario.jpg", titulo: "Familia que rescata" }
]

const videos = [
  { src: "https://www.youtube.com/embed/Xm7QE66LzbM", titulo: "Actividades en el parque" },
  { src: "https://www.youtube.com/embed/LqpWCYAtUMo", titulo: "Momentos especiales" },
  { src: "https://www.youtube.com/embed/ZsKBwiXKWe8", titulo: "Un día en la fundación" },
  { src: "https://www.youtube.com/embed/13GgkAfQA1s", titulo: "Jornadas de restauración" },
  { src: "https://www.youtube.com/embed/XQn7cMy7l6k", titulo: "Historias de transformación" }
]

export default function Activities() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="section-eyebrow">Lo que hacemos</span>
          <h1>Cada actividad es una <em>vida</em>.</h1>
          <p>Galería de nuestras jornadas, acompañamientos y momentos de transformación reales.</p>
        </div>
      </section>

      <section className="eventos-section">
        <div className="container">
          <span className="section-eyebrow">Próximas actividades</span>
          <h2 className="section-title">¡Tenemos un montón de <em>actividades</em> por venir!</h2>
          <p className="eventos-intro">
            Estamos preparando una agenda llena de eventos para apoyar nuestra causa. Marcas en tu calendario, invita a tus amigos y únete a la transformación.
          </p>
          <div className="eventos-grid">
            {proximosEventos.map((ev, i) => (
              <div key={i} className="evento-card">
                <div className="evento-flyer">
                  <img src={ev.flyer} alt={ev.titulo} />
                </div>
                <div className="evento-info">
                  <span className="evento-badge">{ev.badge}</span>
                  <h3>{ev.titulo}</h3>
                  <div className="evento-detalles">
                    <div className="evento-detalle">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                      </svg>
                      <span><strong>Fecha:</strong> {ev.fecha}</span>
                    </div>
                    <div className="evento-detalle">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
                      </svg>
                      <span><strong>Hora:</strong> {ev.hora}</span>
                    </div>
                    <div className="evento-detalle">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      <span><strong>Lugar:</strong> {ev.lugar}</span>
                    </div>
                  </div>
                  <p className="evento-descripcion">{ev.descripcion}</p>
                  {ev.actividades && (
                    <div className="evento-actividades">
                      <p className="evento-actividades-titulo">¿Qué vas a encontrar?</p>
                      <div className="evento-actividades-chips">
                        {ev.actividades.map((act, j) => (
                          <span key={j} className="evento-chip">
                            <span className="chip-icono">{act.icono}</span>
                            {act.nombre}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <div className="gallery-grid">
            {galeria.map((item, i) => (
              <div key={i} className={`gallery-item gallery-item-${(i % 3) + 1}`}>
                <img src={item.img} alt={item.titulo} loading="lazy" />
                <div className="gallery-caption">
                  <span>{item.titulo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="videos-section">
        <div className="container">
          <span className="section-eyebrow">Mira nuestro trabajo</span>
          <h2 className="section-title">Videos de <em>nuestras jornadas</em>.</h2>

          <div className="videos-grid">
            {videos.map((v, i) => (
              <div key={i} className="video-card">
                <div className="video-frame">
                  <iframe
                    src={v.src}
                    title={v.titulo}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <h3>{v.titulo}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
