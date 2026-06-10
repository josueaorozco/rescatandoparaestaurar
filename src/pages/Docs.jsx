import { useParams } from 'react-router-dom'
import './Docs.css'

const documentos = {
  acta: {
    titulo: "Acta de Constitución",
    descripcion: "Documento oficial de constitución de la Fundación Rescatando para Restaurar.",
    archivo: "/docs/ACTA DE CONSTITUCION - FRPR rescatando para restaurar.doc",
    tipo: "DOC"
  },
  estatutos: {
    titulo: "Estatutos de la Fundación",
    descripcion: "Estatutos y reglamento interno de la Fundación Rescatando para Restaurar.",
    archivo: "/docs/ESTATUTO - FRPR rescatando para restaurar.doc",
    tipo: "DOC"
  }
}

export default function Docs() {
  const { docKey } = useParams()
  const doc = documentos[docKey]

  if (!doc) {
    return (
      <div className="docs-page">
        <div className="docs-container">
          <div className="docs-header">
            <img src="/images/logo.png" alt="Fundación Rescatando para Restaurar" className="docs-logo" />
            <h1>Documento no encontrado</h1>
            <p>El enlace que usaste no corresponde a ningún documento disponible.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="docs-page">
      <div className="docs-container">
        <div className="docs-header">
          <img src="/images/logo.png" alt="Fundación Rescatando para Restaurar" className="docs-logo" />
          <span className="docs-eyebrow">Documento Institucional</span>
          <h1><span>{doc.titulo}</span></h1>
          <p>{doc.descripcion}</p>
        </div>

        <div className="docs-grid">
          <div className="doc-card">
            <div className="doc-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15h8v2H8zm0-4h8v2H8zm0-4h5v2H8z"/>
              </svg>
            </div>
            <div className="doc-info">
              <span className="doc-tipo">{doc.tipo}</span>
              <h3>{doc.titulo}</h3>
              <p>{doc.descripcion}</p>
            </div>
            <div className="doc-actions">
              <a href={doc.archivo} download className="doc-btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 16l-5-5 1.41-1.41L11 13.17V4h2v9.17l2.59-2.58L17 11l-5 5zm-7 3h14v2H5z"/>
                </svg>
                Descargar
              </a>
              <a href={doc.archivo} target="_blank" rel="noopener noreferrer" className="doc-btn-secondary">
                Ver en línea →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
