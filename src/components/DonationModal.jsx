import { useEffect } from 'react'
import { SITE_CONFIG } from '../config'
import './DonationModal.css'

export default function DonationModal({ onClose }) {
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
    <div className="dmodal-overlay" onClick={onClose}>
      <div className="dmodal-box" onClick={(e) => e.stopPropagation()}>
        <button className="dmodal-close" onClick={onClose} aria-label="Cerrar">×</button>

        <div className="dmodal-header">
          <span className="dmodal-eyebrow">💚 Bono Solidario</span>
          <h2>Tu aporte <em>transforma vidas</em></h2>
          <p>Con tu donación financias tratamiento, atención médica y apoyo espiritual de personas en proceso de rehabilitación.</p>
        </div>

        <div className="dmodal-body">
          <div className="dmodal-qr">
            <div className="dmodal-qr-label">
              <h3>Paga aquí</h3>
              <p>fácil y al instante desde la app de tu banco</p>
            </div>
            <div className="dmodal-qr-img">
              <img src={SITE_CONFIG.donacion.qrImage} alt="Código QR para donar" />
            </div>
            <div className="dmodal-qr-llave">
              Llave Bre-B: <strong>{SITE_CONFIG.donacion.llaveBreB}</strong>
            </div>
            <div className="dmodal-banks">
              <span className="bank-breb">Bre-B</span>
              <span className="bank-divider"></span>
              <span className="bank-bancolombia">Bancolombia</span>
            </div>
          </div>

          <div className="dmodal-methods">
            <div className="dmodal-method">
              <span className="dmodal-method-icon">📲</span>
              <div>
                <strong>Llave Bre-B</strong>
                <span>{SITE_CONFIG.donacion.llaveBreB}</span>
              </div>
            </div>
            <div className="dmodal-method">
              <span className="dmodal-method-icon">🏦</span>
              <div>
                <strong>{SITE_CONFIG.donacion.cuentaTipo}</strong>
                <span>No. {SITE_CONFIG.donacion.cuenta}</span>
              </div>
            </div>
            <div className="dmodal-method">
              <span className="dmodal-method-icon">📱</span>
              <div>
                <strong>Escanea el QR</strong>
                <span>Donación instantánea desde tu app bancaria</span>
              </div>
            </div>
          </div>
        </div>

        <p className="dmodal-thanks">
          <em>"¡Gracias por creer en las segundas oportunidades!"</em>
        </p>
      </div>
    </div>
  )
}
