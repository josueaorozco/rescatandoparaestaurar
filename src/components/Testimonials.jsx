import { useState } from 'react'
import './Testimonials.css'

const testimonios = [
  {
    nombre: "Carlos M.",
    rol: "Restaurado en 2022",
    texto: "Llegué sin nada, sin esperanza, sin familia. La fundación no me trató como un caso más, me trató como un hijo. Hoy tengo trabajo, mi familia me volvió a abrir las puertas, y entendí que sí es posible empezar de nuevo.",
    inicial: "C"
  },
  {
    nombre: "María Esperanza",
    rol: "Madre de restaurado",
    texto: "Pensé que había perdido a mi hijo para siempre. La fundación lo rescató cuando ya no sabía qué hacer. Ver a mi hijo hoy, sano, sonriendo, trabajando... no hay palabras. Gracias por devolverme la vida.",
    inicial: "M"
  },
  {
    nombre: "Andrés F.",
    rol: "Voluntario y restaurado",
    texto: "Pasé de ser quien recibía ayuda a ser quien la entrega. Aquí no solo me dieron un techo, me dieron un propósito. Cada persona que entra a la fundación me recuerda quién era yo, y por qué este trabajo importa.",
    inicial: "A"
  }
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <span className="section-eyebrow">Historias que inspiran vida</span>
          <h2 className="section-title">
            Voces reales de quienes<br/>
            han vivido la <em>restauración</em>.
          </h2>
          <p className="section-subtitle">
            Cada testimonio es la prueba viva de que la transformación es posible.
            Estas son palabras de personas reales, vidas reales, esperanzas restauradas.
          </p>
        </div>

        <div className="testimonials-grid">
          <div className="testimonial-main">
            <svg className="quote-icon" viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
              <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
            </svg>

            <p className="testimonial-text">{testimonios[activeIndex].texto}</p>

            <div className="testimonial-author">
              <div className="author-avatar">{testimonios[activeIndex].inicial}</div>
              <div>
                <strong>{testimonios[activeIndex].nombre}</strong>
                <span>{testimonios[activeIndex].rol}</span>
              </div>
            </div>
          </div>

          <div className="testimonials-list">
            {testimonios.map((t, i) => (
              <button
                key={i}
                className={`testimonial-pill ${activeIndex === i ? 'active' : ''}`}
                onClick={() => setActiveIndex(i)}
              >
                <div className="pill-avatar">{t.inicial}</div>
                <div className="pill-info">
                  <strong>{t.nombre}</strong>
                  <span>{t.rol}</span>
                </div>
              </button>
            ))}

            <div className="testimonials-disclaimer">
              <em>* Nombres modificados para proteger la identidad de quienes nos honran con su historia.</em>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
