import { Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import OpeningModal from './components/OpeningModal'
import DonationModal from './components/DonationModal'
import Home from './pages/Home'
import About from './pages/About'
import Activities from './pages/Activities'
import Testimonios from './pages/Testimonios'
import Contact from './pages/Contact'
import Docs from './pages/Docs'
import { DonationContext } from './DonationContext'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showDonationModal, setShowDonationModal] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/') {
      const timer = setTimeout(() => {
        setShowModal(true)
      }, 1200)
      return () => clearTimeout(timer)
    }
  }, [location.pathname])

  return (
    <DonationContext.Provider value={() => setShowDonationModal(true)}>
      <ScrollToTop />
      {showModal && <OpeningModal onClose={() => setShowModal(false)} />}
      {showDonationModal && <DonationModal onClose={() => setShowDonationModal(false)} />}
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/actividades" element={<Activities />} />
          <Route path="/testimonios" element={<Testimonios />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/documentos-institucionales-frpr/:docKey" element={<Docs />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </DonationContext.Provider>
  )
}

export default App
