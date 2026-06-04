import { SITE_CONFIG } from '../config'
import './DonationSection.css'

export default function DonationSection() {
  return (
    <section className="donation-section" id="donar">
      <div className="container donation-grid">
        <div className="donation-content">
          <span className="section-eyebrow donation-eyebrow">💚 Bono Solidario</span>
          <h2 className="donation-title">
            Tu aporte transforma <em>vidas</em>.
          </h2>
          <p className="donation-message">{SITE_CONFIG.donacion.mensaje}</p>

          <div className="donation-methods">
            <div className="method-item">
              <span className="method-icon">📲</span>
              <div>
                <strong>Llave Bre-B</strong>
                <span>{SITE_CONFIG.donacion.llaveBreB}</span>
              </div>
            </div>
            <div className="method-item">
              <span className="method-icon">🏦</span>
              <div>
                <strong>{SITE_CONFIG.donacion.cuentaTipo}</strong>
                <span>{SITE_CONFIG.donacion.cuenta}</span>
              </div>
            </div>
            <div className="method-item">
              <span className="method-icon">📱</span>
              <div>
                <strong>Escanea el QR</strong>
                <span>Donación instantánea desde la app de tu banco</span>
              </div>
            </div>
          </div>

          <p className="donation-quote">
            <em>"¡Gracias por creer en las segundas oportunidades y ser parte de su camino hacia una nueva vida libre de adicciones!"</em>
          </p>
        </div>

        <div className="donation-qr-card">
          <div className="qr-header">
            <h3>Paga aquí</h3>
            <p>fácil y al instante desde la app de tu banco</p>
          </div>

          <div className="qr-image-wrapper">
            <img src={SITE_CONFIG.donacion.qrImage} alt="Código QR para donar a la Fundación Rescatando para Restaurar" />
          </div>

          <div className="qr-llave">
            Llave: <strong>{SITE_CONFIG.donacion.llaveBreB}</strong>
          </div>

          <div className="qr-banks">
            <span className="bank-breb">Bre-B</span>
            <span className="bank-divider"></span>
            <span className="bank-bancolombia">Bancolombia</span>
          </div>
        </div>
      </div>
    </section>
  )
}
