import { useEffect } from 'react'
import './OpeningModal.css'

export default function OpeningModal({ onClose }) {
  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && onClose()
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleEsc)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleEsc)
    }
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-flyer" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">×</button>

        <div className="flyer-content">
          <div className="flyer-decor flyer-decor-tl"></div>
          <div className="flyer-decor flyer-decor-br"></div>

          <span className="flyer-badge">🎉 Gran Apertura</span>

          <h2 className="flyer-title">
            <span className="flyer-title-script">¡Estamos</span>
            <span className="flyer-title-main">de estreno!</span>
          </h2>

          <div className="flyer-divider">
            <span></span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFC107">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span></span>
          </div>

          <div className="flyer-logo">
            <img src="/images/logo.png" alt="Logo Fundación" />
          </div>

          <h3 className="flyer-foundation">Fundación Rescatando para Restaurar</h3>
          <p className="flyer-quote">"Una nueva vida puede ser posible"</p>

          <div className="flyer-info">
            <div className="info-item">
              <span className="info-label">🏛️ Apertura</span>
              <span className="info-value">12 de junio · Auditorio Comfacesar</span>
            </div>
            <div className="info-item">
              <span className="info-label">🎉 Donatón</span>
              <span className="info-value">13 de junio · 9:00 am - 4:00 pm</span>
            </div>
            <div className="info-item">
              <span className="info-label">📍 Dónde</span>
              <span className="info-value">Parque principal San Roque</span>
            </div>
          </div>

          <p className="flyer-cta-text">
            Acompáñanos en la Donatón con actividades recreativas.<br/>
            <strong>Tu presencia nos honra.</strong>
          </p>

          <button className="flyer-button" onClick={onClose}>
            Conocer más
          </button>
        </div>
      </div>
    </div>
  )
}
