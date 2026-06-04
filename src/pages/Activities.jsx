import './PageHeader.css'
import './Activities.css'

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
