import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useDonation } from '../DonationContext'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const openDonation = useDonation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <img src="/images/logo.png" alt="Fundación Rescatando para Restaurar" />
          <div className="logo-text">
            <span className="logo-name">Rescatando</span>
            <span className="logo-tag">para Restaurar</span>
          </div>
        </Link>

        <button
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span></span><span></span><span></span>
        </button>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>Inicio</NavLink>
          <NavLink to="/nosotros" onClick={() => setMenuOpen(false)}>Nosotros</NavLink>
          <NavLink to="/actividades" onClick={() => setMenuOpen(false)}>Actividades</NavLink>
          <NavLink to="/testimonios" onClick={() => setMenuOpen(false)}>Testimonios</NavLink>
          <NavLink to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</NavLink>
          <button className="nav-cta" onClick={() => { openDonation(); setMenuOpen(false) }}>
            Donar ♥
          </button>
        </nav>
      </div>
    </header>
  )
}
